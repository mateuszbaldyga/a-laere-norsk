import Vue from 'vue'
import Vuex from 'vuex'
import { flattenDepth } from 'lodash'
import { deepFreeze, replaceSpecialChars } from '@/helpers'
import ls from 'local-storage'
import firebase from 'firebase/app'
import 'firebase/database'
import axios from 'axios'

Vue.use(Vuex)

function initialState () {
    return {
        user: {},
        database: null,
        chosenCategory: {},
        chosenLessons: [],
        lessonPreview: {
            lessonName: '',
            words: [],
        },
        searchQuery: '',
        searchResults: [],
        masteredFlashCards: new Set(),
        hardCards: new Set(),
        isLoading: {
            masteredFlashCards: false,
            hardCards: false,
            auth: false,
            database: true,
        },
        toast: {
            auth: '',
        },
        isNavigationOpened: false,
        chosenFlashCards: [],
        isModePlToNo: true,
        isShuffleBlocked: true,
        isAutospeakEnabled: false,
    }
}

const store = new Vuex.Store({
    state: initialState(),

    getters: {
        wordsAmount: state => {
            let res = 0

            if (!state.database) return res

            state.database.forEach(category => {
                category.lessons.forEach(lesson => res += lesson.words.length)
            })

            return res
        },
        SEARCH_RESULTS_SOURCE: state => {
            const output = []
            state.database.forEach(({ lessons }) => {
                lessons.forEach(lesson => lesson.words.forEach(word => {
                    output.push(word)
                }))
            })
            return output
        },
        SEARCH_INDEXED_WORDS: (state, getters) => {
            return getters.SEARCH_RESULTS_SOURCE.map(item => {
                return item.no + ' ' + item.pl + ' ' + replaceSpecialChars(item.no + ' ' + item.pl)
            })
        },
        isLogged: state => !!Object.keys(state.user).length,
        chosenCategory: state => Object.keys(state.chosenCategory).length ? state.chosenCategory : ls.get('SELECTED_CATEGORY'),
    },

    mutations: {
        CHOOSE_CATEGORY (state, category) {
            state.chosenCategory = category
            ls.set('SELECTED_CATEGORY', category)
        },
        CHOOSE_LESSONS (state, lessons) {
            state.chosenLessons = lessons
            ls.set('SELECTED_LESSONS', lessons)
        },
        PREVIEW_LESSON (state, lesson) {
            Object.assign(state.lessonPreview, lesson)
        },
        RESET_PREVIEW_LESSON (state) {
            state.lessonPreview = initialState().lessonPreview
        },
        SET_SEARCH_QUERY (state, str) {
            state.searchQuery = str
        },
        SET_SEARCH_RESULTS (state, arr) {
            state.searchResults = deepFreeze(arr)
        },
        HANDLE_SEARCH (state) {
            let numOfBoosted = 0

            const indexes = this.getters['SEARCH_INDEXED_WORDS'].reduce((res, item, i) => {
                const loweredQuery = state.searchQuery.toLowerCase()
                const foundIndex = item.indexOf(loweredQuery)

                if (foundIndex > -1) {
                    const trimmed = item.replaceAll(',', '')
                    const arr = trimmed.split(' ')

                    // If item has whole word, boost it
                    if (arr.indexOf(loweredQuery) > -1) {
                        res.unshift(i)
                        numOfBoosted++

                        return res
                    }

                    const someWordStartsWithQuery = arr.findIndex(item => item.startsWith(loweredQuery)) > -1
                    if (someWordStartsWithQuery) {
                        res.splice(numOfBoosted, 0, i)

                        return res
                    }

                    res.push(i)

                    return res
                }

                return res
            }, [])

            this.commit('SET_SEARCH_RESULTS', indexes.map(i => this.getters['SEARCH_RESULTS_SOURCE'][i] ))
        },
        SET_MASTERED_FLASHCARDS (state, cards) {
            state.masteredFlashCards = new Set(cards)
        },
        SET_HARD_CARDS (state, cards) {
            state.hardCards = new Set(cards)
        },
        SET_USER_INFO (state, user) {
            state.user = user || {}
        },
        CHANGE_NAVIGATION_VISIBILITY (state, bool) {
            state.isNavigationOpened = bool === undefined ? !state.isNavigationOpened : bool
        },
        SET_FLASHCARDS (state, list) {
            state.chosenFlashCards = list
        },
        SET_MODE (state, bool) {
            state.isModePlToNo = bool === undefined ? !state.isModePlToNo : bool
            ls.set('IS_MODE_PL_TO_NO', state.isModePlToNo)
        },
        TOGGLE_SUFFLE_BLOCK (state, bool) {
            state.isShuffleBlocked = bool === undefined ? !state.isShuffleBlocked : bool
            ls.set('IS_SUFFLE_BLOCKED', state.isShuffleBlocked)
        },
        TOGGLE_AUTOSPEAK (state, bool) {
            state.isAutospeakEnabled = bool === undefined ? !state.isAutospeakEnabled : bool
            ls.set('IS_AUTOSPEAK_ENABLED', state.isAutospeakEnabled)
        },
        SET_TOAST (state, { type, message }) {
            state.toast[type] = message
        },
        SET_LOADING (state, { type, status }) {
            state.isLoading[type] = status
        },
    },

    actions: {
        INIT_DATABASE ({ state, commit }, { refresh } = {}) {
            return new Promise(async resolve => {
                commit('SET_LOADING', { type: 'database', status: true })

                const lsDb = ls.get('DATABASE')

                if (lsDb && !refresh) {
                    state.database = deepFreeze(lsDb)
                    resolve(state.database)
                } else {
                    try {
                        const { data } = await axios.get('https://a-laere-norsk-database.netlify.app/database.json')
                        const database = deepFreeze(data)

                        state.database = database
                        ls.set('DATABASE', database)
                        resolve(state.database)
                    } catch (e) {
                        console.log(e)
                    }
                }

                commit('SET_LOADING', { type: 'database', status: false })
            })
        },
        async GET_MASTERED_FLASHCARDS ({ commit, state }) {
            if (!state.user.uid) return

            state.isLoading.masteredFlashCards = true
            const snapshot = await firebase.database().ref(`/users/${state.user.uid}/mastered-flashcards/`).once('value')
            const cards = snapshot.val()

            if (cards) {
                commit('SET_MASTERED_FLASHCARDS', cards)
            }
            state.isLoading.masteredFlashCards = false
        },
        async GET_HARD_CARDS ({ commit, state }) {
            // console.log('🦄 ')
            if (!state.user.uid) return

            state.isLoading.hardCards = true
            const url = `/users/${state.user.uid}/hard-to-remember/`
            const snapshot = await firebase.database().ref(url).once('value')
            const cards = snapshot.val()
            // console.log('🦄 snapshot', url, cards)
            if (cards) {
                commit('SET_HARD_CARDS', cards)
            }
            state.isLoading.hardCards = false
        },
        async UPDATE_MASTERED_FLASHCARD ({ state }, { flashcard, method }) {
            if (method === 'delete') {
                state.masteredFlashCards.delete(flashcard)
            } else {
                state.masteredFlashCards.add(flashcard)
            }

            const payload = Array.from(state.masteredFlashCards)
            await firebase.database().ref(`/users/${state.user.uid}/mastered-flashcards/`).set(payload, function (error) {
                if (error) {
                    // console.log('🦄 ERROR', error)
                } else {
                    // console.log('🦄 SUCCESS', payload)
                }
            })
        },
        async UPDATE_HARD_CARDS ({ state, commit }, { card, method }) {
            let payload = new Set(state.hardCards)
            if (method === 'delete') {
                payload.delete(card)
            } else {
                payload.add(card)
            }

            payload = Array.from(payload)
            await firebase.database().ref(`/users/${state.user.uid}/hard-to-remember/`).set(payload, function (error) {
                if (error) {
                    // console.log('🦄 ERROR', error)
                } else {
                    // console.log('🦄 SUCCESS', payload)
                    commit('SET_HARD_CARDS', payload)
                }
            })
        },
    },
})

export default store

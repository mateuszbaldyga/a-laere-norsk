import Vue from 'vue'
import Vuex from 'vuex'
import { flattenDepth } from 'lodash'
import { deepFreeze, replaceSpecialChars } from '@/helpers'
import ls from 'local-storage'
import firebase from 'firebase/app'
import 'firebase/database'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        user: {},
        database: null,
        chosenCategory: {},
        chosenLessons: [],
        lessonPreview: {
            lesson: [],
            index: null,
        },
        searchQuery: '',
        searchResults: [],
        masteredFlashCards: new Set(),
        hardCards: new Set(),
        isLoading: {
            masteredFlashCards: false,
            hardCards: false,
            auth: false,
        },
        toast: {
            auth: '',
        },
        isNavigationOpened: false,
        chosenFlashCards: [],
        isModePlToNo: true,
        isShuffleBlocked: true,
    },

    getters: {
        wordsAmount: state => {
            let res = 0

            if (!state.database) return res

            state.database.forEach(category => {
                category.lessons.forEach(lesson => res += lesson.length)
            })

            return res
        },
        SEARCH_RESULTS_SOURCE: state => flattenDepth(state.database.map(item => item.lessons), 2),
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
        PREVIEW_LESSON (state, { lesson, index }) {
            Object.assign(state.lessonPreview, { lesson, index })
        },
        RESET_PREVIEW_LESSON (state) {
            Object.assign(state.lessonPreview, {
                lesson: [],
                index: null,
            })
        },
        SET_SEARCH_QUERY (state, str) {
            state.searchQuery = str
        },
        SET_SEARCH_RESULTS (state, arr) {
            state.searchResults = deepFreeze(arr)
        },
        HANDLE_SEARCH (state) {
            const indexes = this.getters['SEARCH_INDEXED_WORDS'].reduce((res, item, i) => {
                const foundIndex = item.indexOf(state.searchQuery.toLowerCase())
                if (foundIndex > -1) {
                    res.push(i)
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
        SET_TOAST (state, { type, message }) {
            state.toast[type] = message
        },
        SET_LOADING (state, { type, status }) {
            state.isLoading[type] = status
        },
    },

    actions: {
        INIT_DATABASE ({ state }, { refresh } = {}) {
            return new Promise(async resolve => {
                const lsDb = ls.get('DATABASE')

                if (lsDb && !refresh) {
                    state.database = lsDb
                    resolve()
                } else {
                    const { nounsAndOthers, verbs, bonus, adjectives, czasownikiCzasPrzeszly } = await require('@/dictionary')
                    console.log('🌴 REFRESH')
                    const db = Object.freeze([
                        {
                            title: 'Rzeczowniki + inne',
                            lessons: deepFreeze(nounsAndOthers),
                            // color: '#c5e2ff',
                        },
                        {
                            title: 'Czasowniki',
                            lessons: deepFreeze(verbs),
                            // color: '#ffd9d9',
                        },
                        {
                            title: 'Cz. przeszły (czasowniki)',
                            lessons: deepFreeze(czasownikiCzasPrzeszly),
                            // color: '#ffd9d9',
                        },
                        {
                            title: 'Stopniowanie przymiotników',
                            lessons: deepFreeze(adjectives),
                            // color: '#ffd9d9',
                        },
                        {
                            title: 'Bonus',
                            lessons: deepFreeze(bonus),
                            // color: '#ffd9d9',
                        },
                    ])

                    state.database = db
                    ls.set('DATABASE', db)
                    resolve()
                }
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

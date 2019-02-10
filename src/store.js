import Vue from 'vue'
import Vuex from 'vuex'
import { flatten, flattenDepth } from 'lodash'
import { deepFreeze, replaceSpecialChars } from '@/helpers'
import { nounsAndOthers, verbs } from '@/dictionary'
import ls from 'local-storage'
import firebase from 'firebase'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        user: {},
        database: Object.freeze([
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
        ]),
        chosenCategory: {},
        chosenLessons: [],
        chosenFlashCards: [],
        lessonPreview: {
            lesson: [],
            index: null,
        },
        searchQuery: '',
        searchResults: [],
        masteredFlashCards: new Set(),
        isLoading: {
            masteredFlashCards: false,
        },
    },
    getters: {
        chosenFlashCards: state => {
            if (!state.chosenLessons.length) return

            const { lessons } = state.chosenCategory
            return flatten(lessons.filter((item, index) => state.chosenLessons.includes(index)))
        },
        wordsAmount: state => {
            let res = 0

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
    },
    mutations: {
        CHOOSE_CATEGORY (state, category) {
            state.chosenCategory = category
        },
        CHOOSE_LESSONS (state, lessons) {
            state.chosenLessons = lessons
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
                if (item.indexOf(state.searchQuery) > -1) {
                    res.push(i)
                }

                return res
            }, [])

            this.commit('SET_SEARCH_RESULTS', indexes.map(i => this.getters['SEARCH_RESULTS_SOURCE'][i] ))
        },
        SET_MASTERED_FLASHCARDS (state, cards) {
            state.masteredFlashCards = new Set(cards)
        },
        SET_USER_INFO (state, user) {
            const lsUser = ls.get('user')

            if (lsUser) {
                state.user = lsUser
            }
        },
    },
    actions: {
        async GET_MASTERED_FLASHCARDS ({ commit, state }) {
            state.isLoading.masteredFlashCards = true
            const snapshot = await firebase.database().ref(`/users/${state.user.uid}/mastered-flashcards/`).once('value')
            const cards = snapshot.val()

            if (cards) {
                commit('SET_MASTERED_FLASHCARDS', cards)
            }
            state.isLoading.masteredFlashCards = false
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
                    console.log('🦄 ERROR', error)
                } else {
                    console.log('🦄 SUCCESS', payload)
                }
            })
        },
    },
})

export default store

import Vue from 'vue'
import Vuex from 'vuex'
import { flatten, flattenDepth } from 'lodash'
import { deepFreeze } from '@/helpers'
import { nounsAndOthers, verbs } from '@/dictionary'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
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
        chosenPageFlashCards: [],
        lessonPreview: {
            lesson: [],
            index: null,
        },
        searchQuery: '',
        searchResults: [],
    },
    getters: {
        chosenPageFlashCards: state => {
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
        SEARCH_INDEXED: (state, getters) => getters.SEARCH_RESULTS_SOURCE.map(item => item.no + ' ' + item.pl),
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
            const indexes = this.getters['SEARCH_INDEXED'].reduce((res, item, i) => {
                if (item.indexOf(state.searchQuery) > -1) {
                    res.push(i)
                }

                return res
            }, [])

            this.commit('SET_SEARCH_RESULTS', indexes.map(i => this.getters['SEARCH_RESULTS_SOURCE'][i] ))
        },
    },
})
// const chosenCategory = this.categories[this.formData.category].lessons.filter((item, i) => {
//   this.formData.lessons.includes(i)
// })

import Vue from 'vue'
import Vuex from 'vuex'
import { flatten } from 'lodash'
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
    },
})
// const chosenCategory = this.categories[this.formData.category].lessons.filter((item, i) => {
//   this.formData.lessons.includes(i)
// })

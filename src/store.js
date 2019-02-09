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
                title: 'Czasowniki',
                lessons: deepFreeze(verbs),
                // color: '#ffd9d9',
            },
            {
                title: 'Rzeczowniki + inne',
                lessons: deepFreeze(nounsAndOthers),
                // color: '#c5e2ff',
            },
        ]),
        chosenCategory: {},
        chosenLessons: [],
        chosenPageFlashCards: [],
        lessonPreview: [],
    },
    getters: {
        chosenPageFlashCards: state => {
            if (!state.chosenLessons.length) return

            const { lessons } = state.chosenCategory
            return flatten(lessons.filter((item, index) => state.chosenLessons.includes(index)))
        },
    },
    mutations: {
        CHOOSE_CATEGORY (state, category) {
            state.chosenCategory = category
        },
        CHOOSE_LESSONS (state, lessons) {
            state.chosenLessons = lessons
        },
        PREVIEW_LESSON (state, lesson) {
            state.lessonPreview = lesson
        },
    },
})
// const chosenCategory = this.categories[this.formData.category].lessons.filter((item, i) => {
//   this.formData.lessons.includes(i)
// })

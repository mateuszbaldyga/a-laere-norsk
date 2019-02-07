import Vue from 'vue'
import Vuex from 'vuex'
import { flatten } from 'lodash'
import { nounsAndOthers, verbs } from '@/dictionary'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        database: [
            {
                title: 'Czasowniki',
                lessons: verbs,
                color: '#ffd9d9',
            },
            {
                title: 'Rzeczowniki + inne',
                lessons: nounsAndOthers,
                color: '#c5e2ff',
            },
        ],
        chosenCategory: {},
        chosenLessons: [],
        chosenPageFlashCards: [],
    },
    getters: {
        chosenPageFlashCards: state => {
            if (!state.chosenLessons.length) return

            const { lessons } = state.chosenCategory
            return Object.freeze(flatten(lessons.filter((item, index) => state.chosenLessons.includes(index))))
        },
    },
    mutations: {
        CHOOSE_CATEGORY (state, category) {
            state.chosenCategory = category
        },
        CHOOSE_LESSONS (state, lessons) {
            state.chosenLessons = lessons
        },
    },
})
// const chosenCategory = this.categories[this.formData.category].lessons.filter((item, i) => {
//   this.formData.lessons.includes(i)
// })

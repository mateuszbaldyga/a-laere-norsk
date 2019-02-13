import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './filters'
import './plugins'
import './global-components'
import './registerServiceWorker'

Vue.config.productionTip = false

store.subscribe(mutation => {
    if (mutation.type === 'SET_USER_INFO') {
        // store.dispatch('GET_MASTERED_FLASHCARDS')
        store.dispatch('GET_HARD_CARDS')
    }
})

// Init initial state
store.subscribe(mutation => {
    if (mutation.type === 'CHOOSE_CATEGORY') {
        store.commit('CHOOSE_LESSONS', [store.state.chosenCategory.lessons.length - 1])
    }
})

store.commit('CHOOSE_CATEGORY', store.state.database[0])


new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')


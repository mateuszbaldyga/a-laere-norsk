import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './filters'
import './plugins'
import './global-components'
import './registerServiceWorker'
import ls from 'local-storage'
import auth from './plugins/auth'

Vue.config.productionTip = false

store.subscribe(mutation => {
    if (mutation.type === 'SET_USER_INFO') {
        // store.dispatch('GET_MASTERED_FLASHCARDS')
        store.dispatch('GET_HARD_CARDS')
    }
})

auth.getUser()

// Init initial state
store.commit('CHOOSE_CATEGORY', ls.get('SELECTED_CATEGORY') || store.state.database[0])
store.commit('CHOOSE_LESSONS', ls.get('SELECTED_LESSONS') || [ store.state.chosenCategory.lessons.length - 1 ])
store.commit('SET_MODE', ls.get('IS_MODE_PL_TO_NO') !== undefined ? ls.get('IS_MODE_PL_TO_NO') : true)
store.commit('TOGGLE_SUFFLE_BLOCK', ls.get('IS_SUFFLE_BLOCKED') !== undefined ? ls.get('IS_SUFFLE_BLOCKED') : true)


new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')


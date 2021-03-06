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
async function init () {

    await store.dispatch('INIT_DATABASE')

    store.commit('CHOOSE_CATEGORY', ls.get('SELECTED_CATEGORY') || store.state.database[0])
    store.commit('CHOOSE_LESSONS', ls.get('SELECTED_LESSONS') || [ store.state.chosenCategory.lessons.length - 1 ])

    if (ls.get('IS_MODE_PL_TO_NO')) {
        store.commit('SET_MODE', JSON.parse(ls.get('IS_MODE_PL_TO_NO')))
    }
    if (ls.get('IS_SUFFLE_BLOCKED')) {
        store.commit('TOGGLE_SUFFLE_BLOCK', JSON.parse(ls.get('IS_SUFFLE_BLOCKED')))
    }
    if (ls.get('LAST_FLASHCARDS')) {
        store.commit('SET_FLASHCARDS', ls.get('LAST_FLASHCARDS'))
    }
    if (ls.get('IS_AUTOSPEAK_ENABLED')) {
        store.commit('TOGGLE_AUTOSPEAK', Boolean(ls.get('IS_AUTOSPEAK_ENABLED')))
    }
}

init()


new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')


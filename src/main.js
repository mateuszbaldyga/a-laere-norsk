import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins'
import './global-components'
import './registerServiceWorker'

Vue.filter('capitalize', function (value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
})

Vue.config.productionTip = false

store.subscribe(mutation => {
    if (mutation.type === 'SET_USER_INFO') {
        store.dispatch('GET_MASTERED_FLASHCARDS')
    }
})

// Init initial state
store.commit('CHOOSE_CATEGORY', store.state.database[0])
store.commit('CHOOSE_LESSONS', [store.state.chosenCategory.lessons.length - 1])


new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')


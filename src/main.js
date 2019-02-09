import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './global-components'

import VueVisible from 'vue-visible'
import './registerServiceWorker'
Vue.use(VueVisible)

Vue.filter('capitalize', function (value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
})

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')

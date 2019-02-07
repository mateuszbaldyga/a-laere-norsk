import Vue from 'vue'
import Router from 'vue-router'
import categories from './views/categories.vue'

Vue.use(Router)

const routes = [
    {
        path: '/',
        name: 'categories',
        component: categories,
    },
    {
        path: '/lessons',
        name: 'lessons',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "lessons" */ './views/lessons.vue'),
    },
    {
        path: '/PageFlashCards',
        name: 'PageFlashCards',
        component: () => import(/* webpackChunkName: "PageFlashCards" */ './views/lessons.vue'),
    },
]

const router = new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes,
})

router.afterEach(() => {
    window.scroll({
        top: 0,
        left: 0,
    })
})

export default router

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
        path: '/flashcards',
        name: 'flashcards',
        component: () => import(/* webpackChunkName: "flashcards" */ './views/flashcards.vue'),
    },
    {
        path: '/create-dict',
        name: 'create-dict',
        component: () => import(/* webpackChunkName: "create-dict" */ './views/create-dict.vue'),
    },
    {
        path: '/search',
        name: 'search',
        component: () => import(/* webpackChunkName: "search" */ './views/search.vue'),
    },
    {
        path: '/mastered-flashcards',
        name: 'mastered-flashcards',
        component: () => import(/* webpackChunkName: "mastered-flashcards" */ './views/mastered-flashcards.vue'),
    },
    {
        path: '/hard-to-remember',
        name: 'hard-to-remember',
        component: () => import(/* webpackChunkName: "hard-to-remember" */ './views/hard-to-remember.vue'),
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

import Vue from 'vue'
import Router from 'vue-router'
import Search from './views/Search.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'Search',
            component: Search
        },
        {
            path: '/search',
            name: 'search',
            component: () => { return import ('./views/Search.vue') }
        },
        {
            path: '/map',
            name: 'map',
            component: () => { return import ('./views/Map.vue') }
        },
        {
            path: '/nearest',
            name: 'nearest',
            component: () => { return import ('./views/Nearest.vue') }
        },
        {
            path: '/about',
            name: 'about',
            component: () => { return import ('./views/About.vue') }
        },
        {
            path: '/signup',
            name: 'signup',
            component: () => { return import ('./views/Signup.vue') }
        }
    ]
})
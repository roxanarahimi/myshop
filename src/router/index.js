import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
    {
        path: '/shop',
        name: 'shop',
        component: () => import(/* webpackChunkName: "shop" */ '../views/Shop.vue')
    },
    {
        path: '/cart',
        name: 'cart',
        component: () => import(/* webpackChunkName: "cart" */ '../views/Cart.vue')
    },
    {
        path: '/help',
        name: 'help',
        component: () => import(/* webpackChunkName: "help" */ '../views/Help.vue')
    },
    {
        path: '/product/:id',
        name: 'product',
        props: true,
        params: true,
        component: () => import(/* webpackChunkName: "product" */ '../views/Product.vue')
    },
    {
        path: '/login',
        name: 'login',
        props: true,
        params: true,
        component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
    },
    {
        path: '/profile',
        name: 'profile',
        props: true,
        params: true,
        component: () => import(/* webpackChunkName: "profile" */ '../views/Profile.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router

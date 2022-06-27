import { createRouter, createWebHistory } from "vue-router"
import Home from '../views/Home.vue'
import Posts from '../views/PrenotaLezioni.vue'
import Dashboard from '../views/Dashboard.vue'
import Login from '../views/Login.vue'

function guardMyroute(to, from, next) {
    var isAuthenticated = false;
    if (JSON.parse(localStorage.getItem('isLogged'))) {
        isAuthenticated = true;
    } else {
        isAuthenticated = false;
    }

    if (isAuthenticated) {
        next(); // allow to enter route
    }
    else {
        next('/login'); // go to '/login';
    }
}


const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/dashboard',
        component: Dashboard,
        beforeEnter: guardMyroute
    },
    {
        path: '/posts',
        component: Posts,
        beforeEnter: guardMyroute
    },
    {
        path: '/login',
        component: Login    
    }
]

const router = createRouter({
    'history': createWebHistory(),
    routes,
    'linkActiveClass': 'font-bold'
})

export default router
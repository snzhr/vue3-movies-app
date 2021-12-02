import Home from '@/views/Home.vue'
import MoviePage from '@/views/MoviePage.vue'

import { createRouter, createWebHashHistory } from 'vue-router';
const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/movies/:id',
        component: MoviePage
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
  })


export default router;
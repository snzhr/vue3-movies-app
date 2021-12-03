import Home from '@/views/Home.vue'
import MoviePage from '@/views/MoviePage.vue'
import SearchPage from '@/views/SearchPage.vue'

import { createRouter, createWebHashHistory } from 'vue-router';
const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/movies/:id',
        component: MoviePage
    },
    {
        path: '/search/:name',
        component: SearchPage
    }

]

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes, // short for `routes: routes`
  })


export default router;
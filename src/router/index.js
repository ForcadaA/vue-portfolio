import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
    {path:'/vue-portfolio/', name:"Home", component:Home},
    {path:'/vue-portfolio/profile/:id', component:()=>import('../views/Profile.vue')}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

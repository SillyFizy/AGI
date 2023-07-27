import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import {createRouter, createWebHistory} from "vue-router";
import routes from "@/routes.js";


const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const isAuthenticated = localStorage.getItem('accessToken')
    if (isAuthenticated == null && to.meta.requiresAuth) {
        return next({name: 'Home'})
    }
    next();
})

const app = createApp(App)
app.use(router)
app.mount('#app')

export default router
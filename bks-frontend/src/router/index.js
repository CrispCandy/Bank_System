import {createRouter, createWebHistory} from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'welcome',
            component: () => import('@/views/Welcome.vue'),


        },
        {
            path:'/',
            name: 'register',
            component: () => import('@/views/Register.vue'),
        }

    ]
})

export default router
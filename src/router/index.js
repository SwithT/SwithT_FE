import { createRouter, createWebHistory } from 'vue-router';
import TestView from '@/components/TestView.vue'

import { lectureRouter } from './lectureRouter';
import LoginPage from '@/components/LoginPage.vue';
import { memberRouter } from './memberRouter';
import { thirdRouter } from './thirdRouter';
import { FirstRouter } from './FirstRouter';


const routes = [
    {
        path: '/test',
        name: 'TEST',
        component: TestView
    },
    ...thirdRouter,
    {
        path: '/login',
        name: 'LOGIN',
        component: LoginPage
    },
    ...lectureRouter,
    ...memberRouter,
    ...FirstRouter
  
]
const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router
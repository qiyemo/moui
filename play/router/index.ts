/*
 * @Description:
 * @Author: JESS
 * @Date: 2022-06-22 09:14:07
 * @FilePath: \moui\play\router\index.ts
 * @LastEditTime: 2022-06-22 13:36:56
 * @LastEditors: JESS
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/card'
    },
    {
        path: '/card',
        name: 'Card',
        meta: {
            title: 'm-card',
        },
        component: () => import("../view/Card/index.vue")
    }, {
        path: '/border',
        name: 'Border',
        meta: {
            title: 'm-border',
        },
        component: () => import("../view/Border/index.vue")
    }, {
        path: '/button',
        name: 'Button',
        meta: {
            title: 'm-button',
        },
        component: () => import("../view/Button/index.vue")
    }, {
        path: '/container',
        name: 'Container',
        meta: {
            title: 'm-container',
        },
        component: () => import("../view/Container/index.vue")
    }, {
        path: '/pagenation',
        name: 'Pagenation',
        meta: {
            title: 'm-pagenation',
        },
        component: () => import("../view/Pagenation/index.vue")
    }, {
        path: '/tabs',
        name: 'Tabs',
        meta: {
            title: 'm-tabs',
        },
        component: () => import("../view/Tabs/index.vue")
    }, {
        path: '/input',
        name: 'Input',
        meta: {
            title: 'm-input',
        },
        component: () => import("../view/Input/index.vue")
    },

]
let router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})
export default router;
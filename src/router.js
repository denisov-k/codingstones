import Vue from 'vue'
import Router from 'vue-router'
import Header from './layouts/Header';

import UsersService from './services/UsersService';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            components: {
                header: Header,
                default: () => import('@/views/Home.vue')
            },
            meta: {
                title: 'CodingStones',
                description: '',
                viewTitle: '',
                viewDescription: '',
                icon: '',
                visible: true,
                authGroups: [],
            },
            children: [],
        },
        {
            path: '/tariffs',
            name: 'tariffs',
            components: {
                header: Header,
                default: () => import('@/views/Tariffs.vue')
            },
            meta: {
                title: 'Покупка',
                description: '',
                viewTitle: '',
                viewDescription: '',
                icon: '',
                visible: true,
                authGroups: [],
            },
            children: [],
        },
        {
            path: '/classic_analytic',
            name: 'classic_analytic',
            components: {
                default: () => import('@/views/Analytics/Classic.vue')
            },
            meta: {
                title: 'Классическая аналитика',
                description: '',
                viewTitle: '',
                viewDescription: '',
                icon: '',
                visible: true,
                authGroups: [],
            },
            children: [],
        },
        {
            path: '/gamification',
            name: 'gamification',
            components: {
                default: () => import('@/views/Analytics/Gamification.vue')
            },
            meta: {
                title: 'Геймификация',
                description: '',
                viewTitle: '',
                viewDescription: '',
                icon: '',
                visible: true,
                authGroups: [],
            },
            children: [],
        },
        {
            path: '/personal_account',
            name: 'personal_account',
            components: {
                default: () => import('@/views/Analytics/PersonalAccount.vue')
            },
            meta: {
                title: 'Личный кабинет',
                description: '',
                viewTitle: '',
                viewDescription: '',
                icon: '',
                visible: true,
                authGroups: [],
            },
            children: [],
        },
        {
            path: '/smart_feed',
            name: 'smart_feed',
            components: {
                default: () => import('@/views/Analytics/SmartFeed.vue')
            },
            meta: {
                title: 'Умная лента',
                description: '',
                viewTitle: '',
                viewDescription: '',
                icon: '',
                visible: true,
                authGroups: [],
            },
            children: [],
        }
    ]
})

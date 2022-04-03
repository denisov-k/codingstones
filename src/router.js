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
        }
    ]
})

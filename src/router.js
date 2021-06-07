import Vue from 'vue'
import Router from 'vue-router'
import Header from './layouts/Header';
import Aside from './layouts/Aside';
import AsideBlank from './layouts/AsideBlank';
import UsersService from './services/UsersService';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            components: {
                header: Header,
                aside: Aside,
                default: () => import('@/views/Home/')
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
                aside: Aside,
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

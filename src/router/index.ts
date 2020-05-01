import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import LocalesRoot from '../views/LocalesRoot.vue';
import Home from '../views/Home.vue';
import i18next from 'i18next';
import { i18nextVm } from '@/translations/i18next';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'Root',
        redirect: '/zh-hant',
    },
    {
        path: '/:lang',
        component: LocalesRoot,
        children: [
            {
                path: '',
                name: 'Home',
                component: Home,
            },
            {
                path: 'map',
                name: 'Map',
                component: () => import(/* webpackChunkName: "map" */ '../views/Map.vue'),
            },
        ],
    },
];

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes,
});

const routeLangToLng: Map<string, string> = new Map([
    ['zh-hant', 'zh-Hant'],
    ['ja-jp', 'ja-JP'],
]);

router.beforeEach((to, from, next) => {
    i18next.changeLanguage(routeLangToLng.get(to.params.lang) || 'zh-Hant');
    i18nextVm.$data.lastUpdated = Date.now();
    next();
});

export default router;

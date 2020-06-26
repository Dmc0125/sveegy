import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

import Landing from '../views/landing/Landing.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Landing page',
    component: Landing,
  },
  {
    path: '/icons',
    name: 'Icons',
    component: () => import('../views/icons/Icons.vue'),
    children: [
      {
        path: ':id',
        name: 'Icon',
        component: () => import('../views/icons/icon/Icon.vue'),
      },
    ],
  },
  {
    path: '/license',
    name: 'License',
    component: () => import('../views/license/License.vue'),
  },
  {
    path: '/not-found',
    name: 'Not found',
    component: () => import('../views/not-found/NotFound.vue'),
  },
  {
    path: '*',
    redirect: '/not-found',
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;

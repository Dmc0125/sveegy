import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import icons from '@/svg-icons/svg-icons'

import Landing from '../views/landing/Landing.vue'

const routes: RouteRecordRaw[] = [
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
        beforeEnter: (to, from, next) => {
          const { id } = to.params

          // eslint-disable-next-line no-restricted-globals
          if (!isNaN(Number(id)) && icons.length > Number(id)) {
            return next()
          }

          if (icons.find(({ id: _id }) => _id === to.params.id)) {
            return next()
          }

          return next({
            path: '/not-found',
          })
        },
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
    path: '/:pathMatch(.*)*',
    redirect: '/not-found',
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router

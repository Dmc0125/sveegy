import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import icons from '@/svg-icons'

import Landing from '../views/Landing.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Landing page',
    component: Landing,
  },
  {
    path: '/icons',
    name: 'Icons',
    component: () => import('../views/Icons.vue'),
    children: [
      {
        path: ':id',
        name: 'Icon',
        component: () => import('../views/IconPopup.vue'),
        beforeEnter: (to, from, next) => {
          const { id } = to.params

          if (icons.find(({ id: _id }) => _id === id)) {
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
    component: () => import('../views/License.vue'),
  },
  {
    path: '/not-found',
    name: 'Not found',
    component: () => import('../views/NotFound.vue'),
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

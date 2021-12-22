import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import icons from '@/assets/icons.json'
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
        // eslint-disable-next-line consistent-return
        beforeEnter: (to, from) => {
          const { id: routeId } = to.params

          if (typeof routeId !== 'string' || !routeId.endsWith('-icon')) {
            return { path: '/not-found' }
          }

          const iconId = routeId.slice(0, -5)
          if (!icons.find(({ id: _id }) => _id === iconId)) {
            return { path: '/not-found' }
          }
        },
        props: (route) => {
          const icon = icons.find(({ id }) => id === route.params.id.slice(0, -5))
          return {
            id: icon?.id,
            variations: icon?.variations,
            paths: icon?.paths,
          }
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
  // {
  //   path: '/:pathMatch(.*)*',
  //   redirect: '/not-found',
  // },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router

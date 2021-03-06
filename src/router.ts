import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import store from '../store/index'

function guardStuff(to: { path: string },from: object, next: (arg0?: { name: string } ) => any) {
  const loggedInStatus = store.getters.loggedInGetter
  if(to.path !== '/login' && !loggedInStatus){
   return next({name: 'login'})
  }
   next()

}
const routes: Array<RouteRecordRaw> = [
  { path: '', redirect: 'login' },
  {
    path: '/devices',
    name: 'Devices',
    component: () => import('@/pages/Devices.vue'),
    beforeEnter: guardStuff,
  },
  {
    path: '/preferences',
    name: 'Preferences',
    component: () => import('@/pages/Preferences.vue'),
  },
  {
    path: '/support',
    name: 'Support',
    component: () => import('@/pages/Support.vue'),
  },
  {
    path: '/account',
    name: 'Account',
    component: () => import('@/pages/Account.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/Login.vue'),
  },
  {
    path: '/challenge',
    name: 'challenge',
    component: () => import('@/task/Challenge.vue'),
    children: [
      {
        path: '',
        name: 'challenge-task',
        component: () => import('@/task/pages/Task.vue'),
      },
      {
        path: 'resources',
        name: 'challenge-resources',
        component: () => import('@/task/pages/Resources.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'active',
  routes,
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import Detail from '../views/Detail.vue'
import Home from '../views/Home.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    },
  ]
})

export default router
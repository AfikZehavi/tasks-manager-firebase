import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import taskDetails from '../views/task-details.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/task/:id',
      name: 'taskDetails',
      component: taskDetails
    },
  ]
})

export default router

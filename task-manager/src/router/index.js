import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import taskDetails from '../views/task-details.vue'
import taskEdit from '../views/task-edit.vue'

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
    {
      path: '/task/edit/:id?',
      name: 'taskEdit',
      component: taskEdit
    },

  ]
})

export default router

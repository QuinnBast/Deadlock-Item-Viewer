import { createRouter, createWebHistory } from 'vue-router'
import ItemView from "@/views/ItemView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ItemView,
    },
    {
      path: '/items',
      name: 'items',
      component: ItemView,
    },
  ]
})

export default router

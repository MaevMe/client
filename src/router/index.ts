import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'guilds',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Guilds.vue'),
    },
    {
      path: '/callback/',
      name: 'callback',
      component: () => import('../views/Callback.vue'),
    },
    {
      path: '/server/:guildID',
      name: 'server',
      component: () => import('../views/Server.vue'),
    },
  ],
})

export default router

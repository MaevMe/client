import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '../stores/user'
import { storeToRefs } from 'pinia'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'guilds',
      // component: () => import('../views/Guilds.vue'),
      components: {
        default: () => import('../views/Home.vue'),
        user: () => import('../views/Guilds.vue'),
      },
    },
    {
      path: '/callback',
      name: 'callback',
      components: {
        default: () => import('../views/Callback.vue'),
        // user: () => {
        //   window.location.href = 'https://www.maev.me'
        // },
      },
    },
    {
      path: '/server/:guildID',
      name: 'server',
      components: {
        default: () => {
          window.location.href = 'https://www.maev.me'
        },
        user: () => import('../views/Server.vue'),
      },
    },
  ],
})

export default router

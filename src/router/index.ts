import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '../stores/user'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'guilds',
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
}).beforeEach((to, from, next) => {
  const publicViews = ['/', '/callback']
  const needsAuth = !publicViews.includes(to.path)

  const user = useUserStore()
  const userIsLoggedIn = !!user.user.username

  if (needsAuth && !userIsLoggedIn) {
    console.log('not authenticated')
    next('/')
  } else {
    next()
  }
})

export default router

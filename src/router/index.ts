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
      path: '/callback',
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

// router.beforeEach((to, from, next) => {
//   const publicViews = ['/', '/callback']
//   const needsAuth = publicViews.some(view => to.path.startsWith(view))

//   const user = useUserStore()
//   const userIsLoggedIn = !!user.user.username

//   if (needsAuth && !userIsLoggedIn) {
//     next('/')
//   } else {
//     next()
//   }
// })

export default router

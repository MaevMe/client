import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '../stores/user'
import { storeToRefs } from 'pinia'

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
//   const needsAuth = !publicViews.some(view => to.path.startsWith(view))

//   const { user } = storeToRefs(useUserStore())
//   const userIsLoggedIn = !!user.value?.username

//   if (needsAuth && !userIsLoggedIn) {
//     next('/')
//   } else {
//     next()
//   }
// })

export default router

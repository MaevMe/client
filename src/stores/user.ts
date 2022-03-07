import { defineStore } from 'pinia'
import api from '../utils/api'

import type User from '@/types/User'

export const useUserStore = defineStore('user', {
  state: () => ({ user: null as null | User }),
  getters: {},
  actions: {
    async getUser() {
      this.user = await (await api.post('/me', {}, { withCredentials: true })).data
    },
    async logout() {
      await api.get('/logout')
      localStorage.clear()
      this.user = null
    },
  },
})

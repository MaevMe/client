import { defineStore } from 'pinia'
import type { RESTGetAPICurrentUserResult } from 'discord-api-types'
import axios from 'axios'

export const useUserStore = defineStore('user', {
  state: () => ({ user: {} as RESTGetAPICurrentUserResult }),
  getters: {},
  actions: {
    async getUser() {
      this.user = await (await axios.get('https://api.maev.me/me', { withCredentials: true })).data
    },
  },
})

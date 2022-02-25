import { defineStore } from 'pinia'
import type { RESTGetAPICurrentUserResult } from 'discord-api-types'
import axios from 'axios'

export const useUserStore = defineStore('user', {
  state: () => ({ user: {} as RESTGetAPICurrentUserResult }),
  getters: {},
  actions: {
    async getUser() {
      this.user = await (
        await axios.post(
          'https://api.maev.me/me',
          {},
          {
            withCredentials: true,
          }
        )
      ).data

      console.log('we are getting a user')
    },
  },
})

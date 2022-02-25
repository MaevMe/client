import { defineStore } from 'pinia'
import type {
  RESTGetAPICurrentUserResult,
  RESTGetAPICurrentUserGuildsResult,
} from 'discord-api-types'
import axios from 'axios'

type User = RESTGetAPICurrentUserResult & {
  guilds: RESTGetAPICurrentUserGuildsResult
}

export const useUserStore = defineStore('user', {
  state: () => ({ user: {} as User }),
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

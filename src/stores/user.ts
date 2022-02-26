import { defineStore } from 'pinia'
import type {
  RESTGetAPICurrentUserResult,
  RESTGetAPICurrentUserGuildsResult,
} from 'discord-api-types'
import api from '../utils/api'

type User = RESTGetAPICurrentUserResult & {
  guilds: RESTGetAPICurrentUserGuildsResult
}

export const useUserStore = defineStore('user', {
  state: () => ({ user: null as null | User }),
  getters: {},
  actions: {
    async getUser() {
      this.user = await (await api.get('/me', { withCredentials: true })).data
    },
  },
})

import type { APIChannel } from 'discord-api-types/v9'

type Server = {
  id: string
  name: string
  tempVoiceChannels: {
    active: boolean
    createChannel: string
    namingFormat: string
    categoryID: string
  }
  categories: APIChannel[]
  voiceChannels: APIChannel[]
}

export default Server

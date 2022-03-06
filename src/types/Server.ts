import type { APIGuild } from 'discord-api-types/v9'

type Channel = {
  id: string
  name: string
}

type Server = {
  id: string
  tempVoiceChannels: {
    active: boolean
    createChannelID: string
    namingFormat: string
    categoryID: string
    userLimit: number
    includeTextChannel: boolean
    usingCreatedChannels: boolean
  }
  guild: APIGuild
  categories: Channel[]
  voiceChannels: Channel[]
}

export default Server

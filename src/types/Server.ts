type Server = {
  id: string
  name: string
  tempVoiceChannels: {
    active: boolean
    createChannel: string
    namingFormat: string
    categoryID: string
  }
  categories: any[]
  voiceChannels: any[]
}

export default Server

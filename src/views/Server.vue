<script setup lang="ts">
  import axios from 'axios'
  import { onMounted, ref } from 'vue'
  import { useRoute } from 'vue-router'

  const createChannel = ref()
  const namingFormat = ref()
  const category = ref()
  let server: any = {}
  let saved = ''

  onMounted(async () => {
    const route = useRoute()
    const { guildID } = route.params

    console.log('guildID: ', guildID)

    server = await (
      await axios.get(`https://api.maev.me/server/${guildID}`, {
        withCredentials: true,
      })
    ).data

    createChannel.value = server.tempVoiceChannels.createChannel
    namingFormat.value = server.tempVoiceChannels.namingFormat
    category.value = server.tempVoiceChannels.category
  })

  const save = async () => {
    const route = useRoute()
    const { guildID } = route.params

    server.tempVoiceChannels.createChannel = createChannel.value
    server.tempVoiceChannels.namingFormat = namingFormat.value
    server.tempVoiceChannels.category = category.value

    try {
      await axios.post(`https://api.maev.me/server/${guildID}`)
      saved = 'Saved'
    } catch (err) {
      console.error(err)
      saved = 'Unable to save'
    }
  }
</script>

<template>
  <div>{{ server.name }}</div>

  <div>
    Channel to join:
    <select v-model="createChannel">
      <option v-for="channel in server.voiceChannels" value="channel.id">
        {{ channel.name }}
      </option>
    </select>
  </div>

  <div>
    Name format:
    <input v-model="namingFormat" type="text" />
  </div>

  <div>
    Category:
    <select v-model="category">
      <option v-for="channel in server.categories" value="channel.id">
        {{ channel.name }}
      </option>
    </select>
  </div>

  <button v-on:click="save">Save</button>
  {{ saved }}
</template>

<style lang="scss"></style>

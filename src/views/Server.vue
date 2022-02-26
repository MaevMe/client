<script setup lang="ts">
  import api from '@/utils/api'
  import { onMounted, ref, watch } from 'vue'
  import { useRoute } from 'vue-router'
  import type Server from '../types/Server'

  const createChannel = ref()
  const namingFormat = ref()
  const category = ref()
  let server = ref<null | Server>(null)
  let saved = ''

  onMounted(async () => {
    const route = useRoute()
    const { guildID } = route.params

    console.log(await (await api.get(`/server/${guildID}`, { withCredentials: true })).data)
    server = await (await api.get(`/server/${guildID}`, { withCredentials: true })).data
  })

  watch(server, value => {
    console.log('@server', value)
  })

  // const save = async () => {
  //   const route = useRoute()
  //   const { guildID } = route.params

  //   server.tempVoiceChannels.createChannel = createChannel.value
  //   server.tempVoiceChannels.namingFormat = namingFormat.value
  //   server.tempVoiceChannels.category = category.value

  //   try {
  //     await api.post(`/server/${guildID}`)
  //     saved = 'Saved'
  //   } catch (err) {
  //     console.error(err)
  //     saved = 'Unable to save'
  //   }
  // }
</script>

<template>
  <div>{{ server?.name }}</div>

  <div>
    Channel to join:
    <select v-model="createChannel">
      <option v-for="channel in server?.voiceChannels" value="channel.id">
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
      <option v-for="channel in server?.categories" value="channel.id">
        {{ channel.name }}
      </option>
    </select>
  </div>

  <!-- <button v-on:click="save">Save</button>
  {{ saved }} -->
</template>

<style lang="scss"></style>

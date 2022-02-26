<script setup lang="ts">
  import api from '@/utils/api'
  import { onMounted, ref, watch } from 'vue'
  import { useRoute } from 'vue-router'
  import type Server from '../types/Server'

  let createChannel = ref('')
  let namingFormat = ref('')
  let category = ref('')
  let server = ref<null | Server>(null)
  let saved = ''

  onMounted(async () => {
    const route = useRoute()
    const { guildID } = route.params

    server = await (await api.get(`/server/${guildID}`, { withCredentials: true })).data
  })

  watch(server, value => {
    console.log('@server', value)

    if (value) {
      category.value = value.tempVoiceChannels.categoryID
      namingFormat.value = value.tempVoiceChannels.namingFormat
      createChannel.value = value.tempVoiceChannels.createChannel
    }
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

  <div class="settings-card">
    Channel to join:
    <select v-model="createChannel" v-if="server?.voiceChannels">
      <option v-for="channel in server.voiceChannels" value="channel.id">
        {{ channel.name }}
      </option>
    </select>
  </div>

  <div class="settings-card">
    Name format:
    <input v-model="namingFormat" type="text" />
  </div>

  <div class="settings-card">
    Category:
    <select v-model="category" v-if="server?.categories">
      <option v-for="channel in server.categories" value="channel.id">
        {{ channel.name }}
      </option>
    </select>
  </div>

  <!-- <button v-on:click="save">Save</button>
  {{ saved }} -->
</template>

<style lang="scss">
  .settings-card {
    background: grey;
  }
</style>

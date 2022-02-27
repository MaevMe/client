<script setup lang="ts">
  import router from '@/router'
  import api from '@/utils/api'
  import type Server from '../types/Server'
  import { onMounted, ref, watch } from 'vue'
  import { useUserStore } from '../stores/user'
  import { storeToRefs } from 'pinia'
  import { useRoute } from 'vue-router'
  const { user } = storeToRefs(useUserStore())

  let server = ref<null | Server>(null)
  let saved = ''

  onMounted(async () => {
    const route = useRoute()
    const { guildID } = route.params

    server.value = (await (
      await api.get(`/server/${guildID}`, { withCredentials: true })
    ).data) as Server
  })

  watch(server, value => {
    if (!user.value?.guilds.some(({ id }) => id === value?.id)) {
      router.push('/')
    }
  })

  const routerTest = useRoute()

  const save = async () => {
    const { guildID } = routerTest.params

    try {
      await api.post(`/server/${guildID}`, { serverData: server.value })
      saved = 'Saved'
    } catch (err) {
      console.error(err)
      saved = 'Unable to save'
    }
  }
</script>

<template>
  <div>{{ server?.name }}</div>

  {{ user?.guilds }}
  <div class="settings-card">
    Channel to join:
    <select v-model="server.tempVoiceChannels.createChannel" v-if="server">
      <option
        v-for="channel in server.voiceChannels"
        value="channel.id"
        :selected="server.tempVoiceChannels.createChannel === channel.id"
      >
        {{ channel.name }}
      </option>
      <option v-if="!server.tempVoiceChannels.createChannel" disabled selected hidden>
        Pick existing VC
      </option>
    </select>
  </div>

  <div class="settings-card">
    Name format:
    <input v-if="server" v-model="server.tempVoiceChannels.namingFormat" type="text" />
  </div>

  <div class="settings-card">
    Category:
    <select v-model="server.tempVoiceChannels.createChannel" v-if="server">
      <option
        v-for="channel in server.categories"
        value="channel.id"
        :selected="server.tempVoiceChannels.categoryID === channel.id"
      >
        {{ channel.name }}
      </option>
      <option v-if="!server.tempVoiceChannels.categoryID" disabled selected hidden>
        Pick existing Category
      </option>
    </select>
  </div>

  <div>
    Create voice channels for me:
    <input type="checkbox" v-model="server.tempVoiceChannels.usingCreatedChannels" v-if="server" />
  </div>

  <button @click.prevent="save">Save</button>

  <!-- <button v-on:click="save">Save</button>
  {{ saved }} -->
</template>

<style lang="scss">
  .settings-card {
    background: grey;
  }
</style>

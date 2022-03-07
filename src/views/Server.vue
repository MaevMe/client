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

  watch(
    server,
    value => {
      if (!user.value?.guilds.some(({ id }) => id === value?.guild.id)) {
        router.push('/')
      }
    },
    { deep: true }
  )

  const routerTest = useRoute()
  const save = async () => {
    const { guildID } = routerTest.params

    try {
      const { data } = await api.post(`/server/${guildID}`, server.value)
      const updates = data.tempVoiceChannels as any
      server.value = { ...updates, ...server.value }
      console.log(data)
      saved = 'Saved'
    } catch (err) {
      console.error(err)
      saved = 'Unable to save'
    }
  }
</script>

<template>
  <div class="settings">
    <div class="column">
      <div class="settings-card">
        {{ server?.guild.name }}
      </div>

      <div class="settings-card">
        Name format:
        <input v-if="server" v-model="server.tempVoiceChannels.namingFormat" type="text" />
      </div>
    </div>

    <div class="column">
      <div class="settings-card">
        Use temp vc
        <input type="checkbox" v-model="server.tempVoiceChannels.active" v-if="server" />
      </div>

      <div class="settings-card">
        <select v-model="server.tempVoiceChannels.createChannelID" v-if="server">
          <option
            v-if="!server.tempVoiceChannels.createChannelID"
            value=""
            disabled
            selected
            hidden>
            Pick existing VC
          </option>

          <option
            v-for="channel in server.voiceChannels"
            :value="channel.id"
            :selected="server.tempVoiceChannels.createChannelID === channel.id">
            {{ channel.name }}
          </option>
        </select>

        <div class="settings-card">
          <select v-model="server.tempVoiceChannels.categoryID" v-if="server">
            <option v-if="!server.tempVoiceChannels.categoryID" value="" disabled selected hidden>
              Pick existing Category
            </option>

            <option
              v-for="channel in server.categories"
              :value="channel.id"
              :selected="server.tempVoiceChannels.categoryID === channel.id">
              {{ channel.name }}
            </option>
          </select>
        </div>

        <div>
          <input
            type="checkbox"
            v-model="server.tempVoiceChannels.usingCreatedChannels"
            v-if="server" />
          Create for me
        </div>
      </div>
    </div>

    <button @click.prevent="save">Save</button>
  </div>
</template>

<style lang="scss">
  .settings {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(18.75rem, 1fr));
    justify-content: center;
    gap: 1rem;

    width: max-content;
    width: calc(80vw - 18rem);
    padding: 2rem;

    .column {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    &-card {
      background: $neutral150;
      border-radius: 0.5rem;
      padding: 1rem;
    }
  }

  input,
  option,
  select {
    color: $black;
  }
</style>

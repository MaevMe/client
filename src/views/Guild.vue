<script setup lang="ts">
  import axios from 'axios'
  import { onMounted } from 'vue'
  import { useRoute } from 'vue-router'

  onMounted(async () => {
    const route = useRoute()
    const { guildID } = route.params

    const data = await axios.get(`https://api.maev.me/server/${guildID}`, {
      withCredentials: true,
    })
  })
</script>

<template>
  <div>{{ $data }}</div>
</template>

<style lang="scss"></style>

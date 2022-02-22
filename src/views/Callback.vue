<script setup lang="ts">
  import axios from 'axios'
  import { onMounted } from 'vue'
  import { useRoute } from 'vue-router'

  onMounted(async () => {
    const route = useRoute()
    const { code } = route.query

    await axios.patch(`https://api.maev.me/callback?code=${code}`, {
      withCredentials: true,
    })
  })
</script>

<template>
  <div>Redirecting</div>
</template>

<style lang="scss"></style>

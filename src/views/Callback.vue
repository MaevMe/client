<script setup lang="ts">
  import api from '@/utils/api'
  import { onMounted } from 'vue'
  import { useRoute } from 'vue-router'

  onMounted(async () => {
    const route = useRoute()
    const { code } = route.query

    const {
      data: { session },
    } = await api.post('/callback', { code }, { withCredentials: true })

    if (session) {
      localStorage.setItem('user', 'true')
      window.location.href = import.meta.env.VITE_CLIENT as string
    }
  })
</script>

<template>
  <h2>Getting user...</h2>
</template>

<style lang="scss"></style>

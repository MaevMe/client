<script setup lang="ts">
  import router from '@/router'
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
      // TODO: Avoid needing a hard refresh to update user
      router.push('/')
    }
  })
</script>

<template>
  <h2>Getting user...</h2>
</template>

<style lang="scss"></style>

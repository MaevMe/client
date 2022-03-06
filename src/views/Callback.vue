<script setup lang="ts">
  import router from '@/router'
  import api from '@/utils/api'
  import { onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  import { useUserStore } from '../stores/user'

  onMounted(async () => {
    const route = useRoute()
    const userStore = useUserStore()
    const { code } = route.query

    const {
      data: { session },
    } = await api.post('/callback', { code }, { withCredentials: true })

    if (session) {
      localStorage.setItem('user', 'true')
      userStore.getUser().then(() => router.push('/'))
    }
  })
</script>

<template>
  <h2>Getting user...</h2>
</template>

<style lang="scss"></style>

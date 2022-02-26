<script setup lang="ts">
  import { useUserStore } from '../stores/user'
  import { onMounted } from 'vue'
  const user = useUserStore()

  onMounted(() => {
    if (localStorage.getItem('user')) user.getUser()
  })

  user.$subscribe((_, value) => {
    console.log('@user', value.user)
  })
</script>

<template>
  <div v-if="user.user.username">
    {{ user.user.username }}

    <RouterLink to="/about">About</RouterLink>
  </div>

  <div v-else>
    <a href="https://api.maev.me/forward">
      <button>Sign In</button>
    </a>
  </div>
</template>

<style scoped>
  h1 {
    color: red;
  }
</style>

<script setup lang="ts">
  import { useUserStore } from '../stores/user'
  const user = useUserStore()
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

<script setup lang="ts">
  import { useUserStore } from '../stores/user'
  const user = useUserStore()
  const userIsLoggedIn = !!user.user.username
</script>

<template>
  <nav>
    <h1>Maev</h1>

    <div v-if="userIsLoggedIn">
      {{ user.user.username }}
      <!-- <RouterLink to="/about">About</RouterLink> -->
    </div>

    <div v-else>
      <a href="https://api.maev.me/forward">
        <button>Sign In</button>
      </a>
    </div>
  </nav>
</template>

<style scoped>
  nav {
    display: flex;
    gap: 1.5rem;
  }
</style>

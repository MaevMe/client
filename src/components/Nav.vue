<script setup lang="ts">
  import { useUserStore } from '../stores/user'
  import { storeToRefs } from 'pinia'
  const { user } = storeToRefs(useUserStore())

  const forwardURL = import.meta.env.VITE_SERVER + '/forward'
</script>

<template>
  <nav>
    <h1>Maev</h1>

    <div v-if="user?.username">
      {{ user.username }}
      <!-- <RouterLink to="/about">About</RouterLink> -->
    </div>

    <div v-else>
      <a :href="forwardURL">
        <button>Sign In</button>
      </a>
    </div>
  </nav>
</template>

<style scoped>
  nav {
    display: flex;
    gap: 1.5rem;
    align-items: center;
  }
</style>

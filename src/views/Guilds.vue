<script setup lang="ts">
  import { useUserStore } from '../stores/user'
  import { storeToRefs } from 'pinia'
  const { user } = storeToRefs(useUserStore())
</script>

<template>
  <RouterLink v-for="guild in user?.guilds" :to="`/server/${guild.id}`">
    <div className="guild">{{ guild.name }}</div>
  </RouterLink>
</template>

<style lang="scss">
  .guild {
    background: grey;
    padding: 1rem;
  }
</style>

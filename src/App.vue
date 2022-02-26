<!-- TODO: Delete namecheap and super (notion) accounts -->

<script setup lang="ts">
  import Nav from './components/Nav.vue'
  import { useUserStore } from './stores/user'
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
  <header>
    <Nav />
  </header>

  <main v-if="user.user.username">
    <router-link v-for="guild in user.user.guilds" :to="`/server/${guild.id}`">
      <div>{{ guild.name }}</div>
    </router-link>
  </main>
  <main v-else>
    <h1>No user logged in, so no guilds displayed.</h1>
  </main>

  <RouterView />
</template>

<style lang="scss">
  #app {
    background: white;
    display: grid;
    place-content: center;
    margin: 0 auto;
    width: 50vw;
    height: 95vh;
    font-family: sans-serif;
    text-align: center;
  }
</style>

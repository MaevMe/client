<!-- TODO: Delete namecheap and super (notion) accounts -->

<script setup lang="ts">
  import Nav from './components/Nav.vue'
  import { useUserStore } from './stores/user'
  import { onMounted } from 'vue'

  const user = useUserStore()
  const userIsLoggedIn = !!user.user.username

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

  <main v-if="userIsLoggedIn">
    <RouterView />
  </main>
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

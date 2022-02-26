<!-- TODO: Delete namecheap and super (notion) accounts -->

<script setup lang="ts">
  import Nav from './components/Nav.vue'
  import { useUserStore } from './stores/user'
  import { onMounted } from 'vue'

  const userStore = useUserStore()

  onMounted(() => {
    if (localStorage.getItem('user')) userStore.getUser()
  })
</script>

<template>
  <header>
    <Nav />
  </header>

  <main>
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

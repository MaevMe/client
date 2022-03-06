<!-- TODO: Delete namecheap and super (notion) accounts -->

<script setup lang="ts">
  import Nav from './components/Nav.vue'
  import { useUserStore } from './stores/user'
  import { onMounted } from 'vue'

  const userStore = useUserStore()

  onMounted(() => {
    if (localStorage.getItem('user')) userStore.getUser()
    // TODO: Research if there are better methods to set meta data
    document.title = 'Hello World'
  })
</script>

<template>
  <header>
    <Nav />
  </header>

  <main>
    <RouterView name="user" v-if="userStore" />
    <RouterView v-else />
  </main>
</template>

<style lang="scss" src="./scss/reset.scss"></style>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;700&display=swap');

  body {
    background: $black;
    color: $white;
  }

  #app {
    display: grid;
    place-content: center;
    margin: 0 auto;
    width: 70vw;
    height: 95vh;
    font-family: 'Quicksand', sans-serif;

    & > main {
      width: 70vw;

      & > div {
        width: 100%;
      }
    }
  }
</style>

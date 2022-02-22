<!-- TODO: Delete namecheap and super (notion) accounts -->

<script setup lang="ts">
  import { onMounted } from 'vue'
  import HelloWorld from '@/components/HelloWorld.vue'
  import { useUserStore } from './stores/user'

  const user = useUserStore()

  // onMounted(() => {
  //   user.getUser()
  // })

  const test = () => {
    user.getUser()
  }

  user.$subscribe((mutation, value) => {
    console.log('@user', value.user)
  })
</script>

<template>
  <header>
    <div class="wrapper">
      <HelloWorld
        msg="Just wait for the request to stop pending, and see the errors."
      />
      {{ user.user.username }}

      <!-- <nav>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/new">New</RouterLink>
      </nav> -->
    </div>
  </header>

  <a href="https://api.maev.me/forward">
    <button>Sign In</button>
  </a>
  <div v-on:click="test">
    <button>Test</button>
  </div>

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

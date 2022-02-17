<!-- TODO: Delete namecheap and super (notion) accounts -->

<script setup lang="ts">
import { onMounted } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'
import { useUserStore } from './stores/user'

const ok = useUserStore()

onMounted(() => {
  ok.getUser()
})

ok.$subscribe((mutation, value) => {
  console.log('@user', value.user)
})
</script>

<template>
  <header>
    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      {{ ok.user.username }}

      <!-- <nav>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/new">New</RouterLink>
      </nav> -->
    </div>
  </header>

  <a href="http://localhost:5050/forward">
    <button>Sign in!</button>
  </a>

  <!-- <RouterView /> -->
</template>

<style lang="scss">
#app {
  background: white;
}
</style>

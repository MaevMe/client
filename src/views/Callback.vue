<script setup lang="ts">
  import axios from 'axios'
  import { onMounted } from 'vue'
  import { useRoute } from 'vue-router'

  onMounted(async () => {
    const route = useRoute()
    const { code } = route.query

    // window.location.href = `https://base-maev.herokuapp.com/callback?code=${code}`

    console.log('code:', code)

    const { data } = await axios.post(
      'https://base-maev.herokuapp.com/callback',
      {
        code,
      },
      { withCredentials: true }
    )
    console.log('@data', data)
  })
</script>

<template>
  <div>Redirecting</div>
</template>

<style lang="scss"></style>

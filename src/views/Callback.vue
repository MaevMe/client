<script setup lang="ts">
  import axios from 'axios'
  import { onMounted } from 'vue'
  import { useRoute } from 'vue-router'

  onMounted(() => {
    const route = useRoute()
    console.log(route.query)
    const code = route.query.code
    axios.get(`https://api.maev.me/callback?code=${code}`, {
      withCredentials: true,
    })
  })
</script>

<script setup lang="ts">
  import { useUserStore } from '../stores/user'
  import { storeToRefs } from 'pinia'

  import icon from '../assets/gi-yellow.png'

  const { user } = storeToRefs(useUserStore())
</script>

<template>
  <div class="guilds">
    <RouterLink v-for="guild in user?.guilds" :to="`/server/${guild.id}`">
      <div className="guild">
        <div class="info">
          <h2>
            {{ guild.name.length > 9 ? guild.name.substring(0, 9).trim() + '..' : guild.name }}
          </h2>
          <p>{{ guild.owner ? 'Owner' : 'Admin' }}</p>
        </div>

        <img
          class="icon"
          :src="
            guild.icon
              ? 'https://cdn.discordapp.com/icons/' + guild.id + '/' + guild.icon + '.png'
              : icon
          "
          alt="" />
      </div>
    </RouterLink>
  </div>
</template>

<style lang="scss">
  .guilds {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    gap: 2rem;
  }

  .guild {
    display: flex;
    justify-content: space-between;
    gap: 1.5rem;

    background: $neutral150;
    border-radius: $br;
    padding: 1.25rem;

    h2 {
      font-size: 1.25rem;
      font-weight: 600;
    }

    p {
      font-size: 0.875rem;
      opacity: 0.85;
    }

    .icon {
      width: 3.75rem;
      height: 3.75rem;
      max-width: 3.75rem;
      max-height: 3.75rem;
      min-width: 3.75rem;
      min-height: 3.75rem;
      object-fit: cover;
      object-position: center;
      border-radius: 100%;
    }
  }
</style>

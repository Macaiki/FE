<template>
  <div class="flex justify-start text-white">
    <router-link to="/" class="mx-4 font-semibold rounded">
      For You
    </router-link>
    <router-link to="/trending" class="mx-4 font-semibold rounded">
      Trending
    </router-link>
    <router-link to="/community" class="mx-4 font-semibold rounded">
      Community
    </router-link>
  </div>
</template>
<style scoped>
a.nuxt-link-exact-active {
  @apply text-purple-600 border-b-2 border-purple-600
}
</style>
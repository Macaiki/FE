<template>
  <nav>
    <header class="bg-neutral-800">
      <div class="flex justify-between items-center p-4">
        <div class="h-auto">
          <img src="~/assets/images/logo.png" alt="">
        </div>
        <div class="flex items-center">
          <div class="flex items-center">
            <span class="ml-2" @click="search()">
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.2292 19.7083C15.7395 19.7083 19.3958 16.052 19.3958 11.5417C19.3958 7.03134 15.7395 3.375 11.2292 3.375C6.71884 3.375 3.0625 7.03134 3.0625 11.5417C3.0625 16.052 6.71884 19.7083 11.2292 19.7083Z" stroke="#F6F7FC" stroke-width="2.45" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M21.4375 21.75L16.9968 17.3093" stroke="#F6F7FC" stroke-width="2.45" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
          </div>
        </div>
      </div>
      <div class="flex justify-start text-white">
        <router-link to="/" class="mx-4 rounded font-semibold">
          For You
        </router-link>
        <router-link to="/trending" class="mx-4 rounded font-semibold">
          Trending
        </router-link>
        <router-link to="/community" class="mx-4 rounded font-semibold">
          Community
        </router-link>
      </div>
    </header>
    <div id="search">

    </div>
  </nav>
</template>
<style>
.nuxt-link-exact-active, a:hover{
  @apply text-purple-400 border-b-2 border-b-purple-400 pb-2
}
a:hover{
  @apply border-none
}
</style>
<script>
export default {
  layout: 'header-nav',
  // OR
  layout (context) {
    return 'header-nav'
  },
  name: 'HomePage',
  data () {
    return {
      search: function () {
        this.$router.push({ name: 'search' })
      }
    }
  }
}
</script>
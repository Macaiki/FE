<template>
  <nav>
    <header class="bg-neutral-800">
      <div class="flex items-center justify-between p-4">
        <div class="h-auto">
          <img src="~/assets/images/logo.png" alt="">
        </div>
        <div class="flex items-center">
          <router-link to="/" class="pb-2 mx-4 font-semibold text-white rounded">
            Home
          </router-link>
          <router-link to="/community" class="pb-2 mx-4 font-semibold text-white rounded">
            Community
          </router-link>
        </div>
        <div class="flex items-center">
          <div class="flex items-center lg:hidden">
            <span class="ml-2" @click="search()">
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.2292 19.7083C15.7395 19.7083 19.3958 16.052 19.3958 11.5417C19.3958 7.03134 15.7395 3.375 11.2292 3.375C6.71884 3.375 3.0625 7.03134 3.0625 11.5417C3.0625 16.052 6.71884 19.7083 11.2292 19.7083Z" stroke="#F6F7FC" stroke-width="2.45" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M21.4375 21.75L16.9968 17.3093" stroke="#F6F7FC" stroke-width="2.45" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
          </div>
          <div class="items-center hidden border rounded lg:flex border-slate-500 focus:border-purple-400 hover:border">
            <form @submit.prevent="search" class="flex items-center">
              <input type="text" class="px-4 py-2 text-white outline-none focus:outline-none bg-neutral-800" placeholder="Search" v-model="searchTerm">
              <button type="submit" class="px-4 py-2 ">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.2292 19.7083C15.7395 19.7083 19.3958 16.052 19.3958 11.5417C19.3958 7.03134 15.7395 3.375 11.2292 3.375C6.71884 3.375 3.0625 7.03134 3.0625 11.5417C3.0625 16.052 6.71884 19.7083 11.2292 19.7083Z" stroke="#F6F7FC" stroke-width="2.45" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M21.4375 21.75L16.9968 17.3093" stroke="#F6F7FC" stroke-width="2.45" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </form>
            <div class="flex items-center justify-between">
              <div class="">
                Notif
              </div>
              <div class="">
                <img src="" alt="">
              </div>
            </div>          
          </div>
        </div>
      </div>
    </header>
    <div id="search">
    </div>
  </nav>
</template>
<style scoped>
.nuxt-link-exact-active, a:hover{
  @apply text-purple-400
}
</style>
<script>
export default {
  layout: 'header-nav',
  // OR
  // v-model searchTerm
  layout (context) {
    return 'header-nav'
  },
  name: 'HomePage',
  data () {
    return {
      searchTerm: '',
      search: function () {
        this.$router.push({ name: 'search' })
      }
    }
  }
}
</script>
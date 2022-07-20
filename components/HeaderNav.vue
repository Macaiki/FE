<template>
  <nav>
    <header class="bg-neutral-800">
      <div class="container flex items-center justify-between p-4 mx-auto">
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
          <div class="items-center hidden lg:flex">
            <form @submit.prevent="search" class="flex items-center border rounded border-slate-500 focus:border-purple-400 hover:border">
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
                <svg class="w-6 h-6 fill-white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path></svg>
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
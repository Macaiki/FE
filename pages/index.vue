<template>
  <div class="block">
    <div class="w-full p-4 mx-auto mt-12 rounded-md shadow" id="lazyload">
      <div class="flex space-x-4 animate-pulse">
        <div class="w-10 h-10 rounded-full bg-slate-200"></div>
        <div class="flex-1 py-1 space-y-6">
          <div class="h-10 rounded bg-slate-200"></div>
          <div class="space-y-3">
            <div class="grid grid-cols-3 gap-4">
              <div class="h-2 col-span-2 rounded bg-slate-200"></div>
              <div class="h-2 col-span-1 rounded bg-slate-200"></div>
            </div>
            <div class="h-20 rounded bg-slate-200"></div>
          </div>
        </div>
      </div>
    </div>
    <PostDetail
      v-for="item in threads"
      :key="item.id"
      :item="item"
      :page="page"
    ></PostDetail>
  </div>
</template>

<script>
// import { mapActions } from 'vuex'
// import axios from '@nuxtjs/axios'
export default {
  layout: 'index',
  name: 'IndexPage',
  data() {
    return {
      page: 'index',
      token: null,
      threads: null,
    }
  },

  async mounted() {
    this.token = localStorage.getItem('token')
    let url = '/api/threads'
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Bearer ' + this.token,
    }
    await this.$axios
      .get(url, { headers: headers })
      .then((response) => {
        console.log(response.data.Data)
        this.$store.commit('threads/setThreads', response.data.Data)
        this.threads = this.$store.state.threads.threads
        document.getElementById('lazyload').remove()
      })
      .catch((error) => {
        console.log(error)
        //if 401
        if (error.response.status === 401) {
          // localStorage.clear()
          // this.$router.push('/auth/login')
        }
      })
  }
}
</script>

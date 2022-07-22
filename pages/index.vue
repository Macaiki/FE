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
      :key="item.ID"
      :item="item"
      :page="page"
    ></PostDetail>
  </div>
</template>

<script>
import {mapActions,mapState} from 'vuex';
export default {
  layout: 'index',
  name: 'IndexPage',
  data() {
    return {
      page: 'index',
      token: null,
    }
  },
  computed:{
    threads(){
      return this.$store.state.threads.threads
    },
    user(){
      return this.$store.state.users.user
    }
  },

  async mounted() {
      await this.getThreads().then(() => {  
        this.disableLoading()
      })
  },
  methods: {
   ...mapActions({
      getThreads: 'threads/handleGetThreads',
   }),
    disableLoading(){
        document.getElementById('lazyload').remove()
    }
  }
}
</script>

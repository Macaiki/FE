<template>
  <div class="w-full">
    <header-nav></header-nav>
    <div class="container flex justify-between mx-auto">
      <div class="block w-8/12">
        <PostDetail  v-for="item in threads" :key="item.id" :item="item" :page="page"></PostDetail>  
      </div>
      <div class="w-4/12">
        <sidebar-index></sidebar-index>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderNav from '~/layouts/HeaderNav.vue';
import {mapActions,mapState} from 'vuex'

export default {
  components: { HeaderNav },
  name: 'IndexPage',
  data(){
    return {
      page: "index",
      token: null
    }
  },
  computed: {
   },
   mounted() {
    this.token = localStorage.getItem('token')?localStorage.getItem('token'):null
    if(this.token){
      this.$store.dispatch('getUser',this.token)
    }else{
      this.$router.push('/auth/login')
    }
    this.handleGetThreads();
    },
   methods: {
    ...mapActions('threads',['handleGetThreads']),
   }
  }
</script>

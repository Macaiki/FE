<template>
  <div class="w-full">
    <header-nav></header-nav>
    <div class="container flex justify-between mx-auto">
      <div class="block w-8/12">
        <PostDetail  v-for="item in 10" :key="item" :item="item"></PostDetail>  
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
  computed: {
    threads () {
      return this.$store.state.threads.threads
    }
  },
  mounted() {
    this.handleGetThreads();
    console.log(this.threads)
  },
  methods: {
        ...mapActions('threads',['handleGetThreads']),


  },
}
</script>

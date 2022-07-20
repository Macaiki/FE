<template>
  <div class="w-full">
    <header-nav></header-nav>
    <div class="container flex justify-between mx-auto">
      <div class="block w-8/12 m-4">
        <CreatePost></CreatePost>
        <PostType/>
        <nuxt />
      </div>
      <div class="w-4/12">
        <sidebar-index>
        </sidebar-index>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderNav from '~/components/HeaderNav.vue';
import {mapActions,mapGetters} from 'vuex'
import PostType from '~/components/PostType.vue';
import CreatePost from '~/components/CreatePost.vue';

export default {
  components: { HeaderNav, PostType, CreatePost },
  name: 'IndexPage',
  data(){
    return {
      token: null,
      threads: null
    }
  },
  computed: {
      getThreadsInStore() {
        return this.$store.state.threads.threads
      },
      getPersonalUserInStore() {
        return this.$store.state.users.user
      }
   },
   mounted() {
    this.token = localStorage.getItem('token')?localStorage.getItem('token'):null
    if(this.token){
      this.getUser(this.token)
    }else{
      this.$router.push('/auth/login')
    }
    this.threads = this.handleGetThreads()
    },
   methods: {
    ...mapActions({
        handleGetThreads: 'threads/handleGetThreads',
        // user
        getUser: 'users/handelGetUser',
    }),
   }
  }
</script>

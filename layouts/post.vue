<template>
  <div class="w-full">
    <header-nav></header-nav>
    <div class="container flex justify-between mx-auto">
      <div class="block w-8/12 m-4">
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
      },
      getNotification(){
        return this.$store.state.notification.notification
      }
   },
  async mounted() {
    this.token = localStorage.getItem('token')?localStorage.getItem('token'):null
    if(this.token){
      await this.getUser(this.token)
    }else{
      this.$router.push('auth/login')
    }
  },
   methods: {
    ...mapActions({
        getUser: 'users/handelGetUser',
    }),
   }
  }
</script>

<template>
  <div>
    <BackgroundLogin/>
    <div class="absolute items-center block w-full py-8 -translate-x-1/2 -translate-y-1/2 rounded-md top-1/2 left-1/2 md:max-w-2xl md:bg-zinc-700">
      <div class="mx-8 mb-12 text-center">
        <router-link to="/">
          <img src="~/assets/images/logo.png" alt="background" class="w-32 mb-4 md:mx-auto">
        </router-link>
        <span class="text-white md:hidden">
          Login dulu yuk, agar bisa menikmati fitur-fitur Macaiki dengan nyaman.
        </span>
        <span class="hidden text-purple-600 text-medium md:block">
          Berbagi pengetahuan, cerita, hobi, dan pengalaman unik lainnya.
        </span>
      </div>
      <div class="py-4 mx-8 text-center text-white bg-purple-600 rounded" v-if="message !== null">
        {{ message }}
      </div>
      <form class="mx-8 border-gray-300 md:border-b" method="POST" @submit.prevent="login()">
        <label for="email" class="block w-full">
          <span class="font-medium text-gray-300">Email</span>
          <input type="email" name="email" id="email" placeholder="Email" required v-model="email">
        </label>
        <label for="password" class="block w-full mt-4">
          <span class="font-medium text-gray-300">Password</span>
          <input type="password" name="password" id="password" placeholder="Password" required v-model="password">
        </label>
        
        <button type="submit" class="flex justify-center w-full px-4 py-2 mt-4 text-white bg-purple-600 rounded hover:bg-purple-400 md:py-4">
          <svg class="hidden w-5 h-5 mr-3 -ml-1 text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="login-loading">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Login
        </button>
        <span class="block w-full pb-4 mt-4 text-center">
          <router-link to="/auth/forgot-password" class="text-xs text-purple-400 md:text-base hover:text-white">
            Forgetten Password?
          </router-link>
        </span>
      </form>
      <div class="hidden px-8 md:block">
        <span class="block w-full text-center">
          <router-link to="/auth/register" type="submit" class="w-full px-4 py-2 mt-4 text-white border-2 border-purple-600 rounded hover:bg-purple-600 md:py-4">
              Register
          </router-link>
        </span>
      </div>
    </div>
    <span class="absolute w-full text-center text-white bottom-10 md:hidden">
      Don't have account yet? 
      <router-link to="/auth/register" class="text-purple-600 hover:text-purple-400">
        Register Here
      </router-link>
    </span>
  </div>
</template>

<style scoped>
input{
  @apply w-full px-4 py-2 font-light text-white bg-transparent border border-gray-300 rounded outline-none caret-purple-400 focus:border-purple-400 md:py-4;
}
</style>
<script>
//import axios
import { mapActions } from 'vuex'
import axios from 'axios'
export default {
  name: 'LoginPage',
  
  data() {
    return {
      email: '',
      password: '',
      message: null,
      token: null,
    }
  },
  mounted(){
    localStorage.removeItem('token')
    if(this.$route.params.message){
      this.message = this.$route.params.message
    }
  },
  methods: {
    login() {
      var loading = document.querySelector('#login-loading')
      this.message = null
      loading.classList.add('animate-spin')
      loading.classList.toggle('hidden')
        axios.post('/api/login', {
        email: this.email,
        password: this.password
      })
      .then(res => {
        // console.log(res)
        localStorage.setItem('token', res.data.Data.token)
        this.$router.push('/')
      }).catch(err => {
        console.log(err.response.data.Meta.message)
        this.message = err.response.data.Meta.message
      }).finally(() => {
        loading.classList.add('animate-spin')
        loading.classList.toggle('hidden')
      })
    },
    ...mapActions({
        getUser: 'users/handelGetUser',
    }),
   }
}
</script>

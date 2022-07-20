<template>
  <div>
    <BackgroundLogin/>
    <div class="absolute items-center block w-full py-8 -translate-x-1/2 -translate-y-1/2 rounded-md top-1/2 left-1/2 md:max-w-2xl md:bg-zinc-700">
      <div class="mx-8 text-center">
        <router-link to="/">
          <img src="~/assets/images/logo.png" alt="background" class="w-32 mb-4 md:mx-auto">
        </router-link>
        <span class="text-white md:hidden">
          register dulu yuk, agar bisa menikmati fitur-fitur Macaiki dengan nyaman.
        </span>
        <span class="hidden text-purple-600 text-medium md:block">
          Berbagi pengetahuan, cerita, hobi, dan pengalaman unik lainnya.
        </span>
      </div>
      <form class="mx-8 mt-12 border-gray-300 md:border-b" method="POST" @submit.prevent="register">
        <label for="email" class="block w-full">
          <span class="font-medium text-gray-300">Email</span>
          <input type="email" name="email" id="email" placeholder="Email" required v-model="email">
        </label>
        <label for="username" class="block w-full">
          <span class="font-medium text-gray-300">Username</span>
          <input type="username" name="username" id="username" placeholder="Username" required v-model="username">
        </label>
        <label for="password" class="block w-full mt-4">
          <span class="font-medium text-gray-300">Password</span>
          <input type="password" name="password" id="password" placeholder="Password" required v-model="password">
        </label>
        <label for="confirmpassword" class="block w-full mt-4">
          <span class="font-medium text-gray-300">Confirm Password</span>
          <input type="password" name="confirmpassword" id="confirmpassword" placeholder="Confirm Password" required v-model="confirmpassword">
        </label>
        
        <button type="submit" class="flex justify-center w-full px-4 py-2 mt-4 text-white bg-purple-600 rounded hover:bg-purple-400 md:py-4">
          <svg class="hidden w-5 h-5 mr-3 -ml-1 text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="register-loading">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Register
        </button>
        <span class="block w-full pb-4 mt-4 text-center">
          <router-link to="/auth/forgot-password" class="text-xs text-purple-400 md:text-base hover:text-white">
            Forgetten Password?
          </router-link>
        </span>
      </form>
      <div class="hidden px-8 md:block">
        <span class="block w-full text-center">
          <router-link to="/auth/login" type="submit" class="w-full px-4 py-2 mt-4 text-white border-2 border-purple-600 rounded hover:bg-purple-600 md:py-4">
              Login
          </router-link>
        </span>
      </div>
    </div>
    <span class="absolute w-full text-center text-white bottom-10 md:hidden">
      Don't have account yet? 
      <router-link to="/auth/register" class="text-purple-600 hover:text-purple-400 md:py-4">
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
import axios from 'axios'
import {mapActions,mapState} from 'vuex'

export default {
  name: 'registerPage',
  
  data() {
    return {
      email: '',
      username: '',
      password: '',
      confirmpassword: '',
      token: null,
    }
  },
  mounted(){
    this.token = localStorage.getItem('token')?localStorage.getItem('token'):null
    if(this.token){
      this.$router.push('/')

    }
  },
  methods: {
    ...mapActions('register',['handleRegister']),
    async register() {
        var loading = document.querySelector('#register-loading')
        loading.classList.add('animate-spin')
        loading.classList.toggle('hidden')
        const payload = {
               email: this.email,
               username: this.username,
               password: this.password,
               passwordConfirmation: this.confirmpassword
        }
        this.handleRegister(payload)
    }
  }
  
}
</script>
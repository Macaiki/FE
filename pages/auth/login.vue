<template>
  <div>
    <BackgroundLogin/>
    <div class="absolute items-center block w-full py-8 -translate-x-1/2 -translate-y-1/2 rounded-md top-1/2 left-1/2 md:max-w-2xl md:bg-zinc-700">
      <div class="mx-8">
        <img src="~/assets/images/logo.png" alt="background" class="w-32 mb-4 md:mx-auto">
        <span class="text-xs text-white md:hidden">
          Login dulu yuk, agar bisa menikmati fitur-fitur Macaiki dengan nyaman.
        </span>
        <span class="hidden text-xs text-white md:block">
          Login dulu yuk, agar bisa menikmati fitur-fitur Macaiki dengan nyaman.
        </span>
      </div>
      <form class="mx-8 mt-12 border-gray-300 md:border-b">
        <label for="email" class="block w-full">
          <span class="font-medium text-gray-300">Email</span>
          <input type="email" name="email" id="email" placeholder="Email" required>
        </label>
        <label for="password" class="block w-full mt-4">
          <span class="font-medium text-gray-300">Password</span>
          <input type="password" name="password" id="password" placeholder="Password" required>
        </label>
        
        <button type="submit" class="w-full px-4 py-2 mt-4 text-white bg-purple-600 rounded hover:bg-purple-400">
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
          <router-link to="/auth/register" type="submit" class="w-full px-4 py-2 mt-4 text-white bg-purple-600 rounded hover:bg-purple-400">
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
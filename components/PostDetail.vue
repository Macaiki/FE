<template>
  <div class="m-4 rounded-xl bg-neutral-800">
    <div class="block px-8 py-4">
      <div class="flex justify-between">
        <div class="flex">
          <div class="w-10 h-10 mr-4 rounded-full">
            <img :src="item.userProfilePictureURL" class="w-10 h-10 mr-2 rounded-full" />
          </div>
          <div class="block">
            <div class="w-full">
              <span class="text-white text-semibold">{{ item.userName }}</span> · <span class="text-blue-500 cursor-pointer hover:text-blue-300" v-if="item.isFollowed == 0">Follow</span>
            </div>
            <div class="w-full text-gray-300">
              <span class="text-sm">{{ item.userProfession }}</span> · <span class="text-sm ">{{ waktu }}</span> <span class="text-sm" v-if="edited!==null"> ·  {{ edited }}</span>
            </div>
          </div>
        </div>
        <div class="text-white">
          <img :src="item.imageURL" class="w-6 h-6 mr-2 rotate-90 lg:hidden"/>
        </div>
      </div>
      <div class="block text-white">
        <h4 class="w-full my-4 text-xl text-bold">{{ item.title }}</h4>
        <p class="my-2 text-sm">
          {{ item.body }}
          <router-link to="/post" class="text-blue-500 cursor-pointer hover:text-blue-300" v-if="page === 'index'">...Baca Selengkapnya</router-link>
        </p>
      </div>
    </div>
    <div class="block"> 
      <img :src="item.imageURL" class="w-full px-8 lg:px-0" />
    </div>
    <div class="flex justify-between px-8 py-2 text-sm">
      <div class="flex justify-between">
        <div class="flex">
          <span class="flex items-center px-8 py-2 border border-gray-600 rounded-l-lg cursor-pointer hover:bg-gray-600" :class="[item.isUpvoted !== 0 ? 'text-purple-600':'text-white', '']" @click="upvote">
            <svg class="w-4 h-4 mr-4" :class="[item.isUpvoted !== 0 ? 'stroke-purple-600':'stroke-white', '']" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 12.6666V3.33325" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M3.33325 7.99992L7.99992 3.33325L12.6666 7.99992" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            {{ item.upvotesCount }}
          </span>
          <span class="flex items-center px-8 py-2 text-sm text-white border border-gray-600 rounded-r-lg cursor-pointer hover:bg-gray-600" :class="[item.isDownvoted !== 0 ? 'text-purple-600':'text-white', '']" @click="downvote">
            <svg class="w-4 h-4" :class="[item.isDownvoted !== 0 ? 'stroke-purple-600':'stroke-white', '']" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 3.33325V12.6666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12.6666 8L7.99992 12.6667L3.33325 8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
        </div>
        <div class="flex">
          <router-link to="/post" class="flex items-center px-4 py-2 ml-6 rounded-lg cursor-pointer group hover:bg-gray-700">
            <svg class="w-6 h-6 stroke-white" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 6.66669C13.0023 7.5466 12.7967 8.41461 12.4 9.20002C11.9296 10.1412 11.2065 10.9328 10.3116 11.4862C9.41677 12.0396 8.3855 12.3329 7.33333 12.3334C6.45342 12.3356 5.58541 12.1301 4.8 11.7334L1 13L2.26667 9.20002C1.86995 8.41461 1.66437 7.5466 1.66667 6.66669C1.66707 5.61452 1.96041 4.58325 2.51381 3.68839C3.06722 2.79352 3.85884 2.0704 4.8 1.60002C5.58541 1.20331 6.45342 0.997725 7.33333 1.00002H7.66667C9.05623 1.07668 10.3687 1.66319 11.3528 2.64726C12.3368 3.63132 12.9233 4.94379 13 6.33335V6.66669Z" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span class="ml-2 text-white">Comment</span>
          </router-link>
          <div class="flex items-center px-4 py-2 ml-6 rounded-lg cursor-pointer group hover:bg-gray-700">
            <svg class="w-6 h-6 stroke-white" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5.33325C13.1046 5.33325 14 4.43782 14 3.33325C14 2.22868 13.1046 1.33325 12 1.33325C10.8954 1.33325 10 2.22868 10 3.33325C10 4.43782 10.8954 5.33325 12 5.33325Z" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M4 10C5.10457 10 6 9.10457 6 8C6 6.89543 5.10457 6 4 6C2.89543 6 2 6.89543 2 8C2 9.10457 2.89543 10 4 10Z" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 14.6667C13.1046 14.6667 14 13.7713 14 12.6667C14 11.5622 13.1046 10.6667 12 10.6667C10.8954 10.6667 10 11.5622 10 12.6667C10 13.7713 10.8954 14.6667 12 14.6667Z" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M5.72656 9.00659L10.2799 11.6599" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M10.2732 4.34009L5.72656 6.99342" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span class="ml-2 text-white">Share</span>
          </div>
        </div>
      </div>
      <div class="items-center hidden px-4 rounded-lg cursor-pointer lg:flex hover:bg-gray-700">
        <img src="~/assets/svg/more-horizontal.svg" class="w-6 h-6"/>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PostDetail',
  props: {
    item: {
      type: Object,
      required: true
    },
    page: {
      type: String,
      default: 'post'
    }
  },
  data() {
    return {
      edited: null,
      waktu: null,
    }
  },
  mounted(){
    const date = new Date(this.item.createdAt)
    this.waktu = new Intl.DateTimeFormat('id-ID', { dateStyle: 'long', timeStyle: 'medium' }).format(date)
    if(this.item.createdAt == this.item.updatedAt){
      this.edited = null
    }else{
      this.edited = "Edited"
    }
  },
  computed: {
    isUpvoted: function(){
      return this.item.isUpvoted
    },
    isDownvoted: function(){
      return this.item.isDownvoted
    }
  },
  methods:{
    upvote(){
      this.$store.commit('threads/upvote', {
        id: this.item.id
      })
    },
    downvote(){
      this.$store.commit('threads/downvote', {
        id: this.item.id
      })
    },
  }
}
</script>

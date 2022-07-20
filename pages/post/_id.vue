<template>
  <div class="container justify-between block mx-auto">
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
    <div class="m-4 rounded-xl bg-neutral-800">
      <div class="block px-8 py-4">
        <div class="flex justify-between">
          <!-- <div class="flex">
          <div class="w-10 h-10 mr-4 rounded-full">
            <img :src="threads.userProfilePictureURL" class="w-10 h-10 mr-2 rounded-full" />
          </div>
          <div class="block">
            <div class="w-full">
              <span class="text-white text-semibold">{{ threads.userName }}</span> · <span class="text-blue-500 cursor-pointer hover:text-blue-300" v-if="threads.isFollowed == 0">Follow</span>
            </div>
            <div class="w-full text-gray-300">
              <span class="text-sm" v-if="threads.userProfession !== ''">{{ threads.userProfession }} ·</span><span class="text-sm ">{{ waktu }}</span> <span class="text-sm" v-if="edited!==null"> ·  {{ edited }}</span>
            </div>
          </div>
        </div> -->
          <div class="text-white">
            <img
              :src="threads.imageURL"
              class="w-6 h-6 mr-2 rotate-90 lg:hidden"
            />
          </div>
        </div>
        <div class="block text-white">
          <h4 class="w-full my-4 text-xl text-bold">{{ threads.title }}</h4>
          <p class="my-2 text-sm">
            {{ threads.body }}
          </p>
        </div>
      </div>
      <div class="block">
        <img :src="threads.imageURL" class="w-full px-8 lg:px-0" />
      </div>
      <div class="flex justify-between px-8 py-2 text-sm">
        <div class="flex justify-between">
          <div class="flex">
            <span
              class="flex px-8 py-2 border border-gray-600 rounded-l-lg cursor-pointer threadss-center hover:bg-gray-600"
              :class="[
                threads.isUpvoted !== 0 ? 'text-purple-600' : 'text-white',
                '',
              ]"
              @click="upvote"
            >
              <svg
                class="w-4 h-4 mr-4"
                :class="[
                  threads.isUpvoted !== 0
                    ? 'stroke-purple-600'
                    : 'stroke-white',
                  '',
                ]"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 12.6666V3.33325"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.33325 7.99992L7.99992 3.33325L12.6666 7.99992"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              {{ threads.upvotesCount }}
            </span>
            <span
              class="flex px-8 py-2 text-sm text-white border border-gray-600 rounded-r-lg cursor-pointer threadss-center hover:bg-gray-600"
              :class="[
                threads.isDownvoted !== 0 ? 'text-purple-600' : 'text-white',
                '',
              ]"
              @click="downvote"
            >
              <svg
                class="w-4 h-4"
                :class="[
                  threads.isDownvoted !== 0
                    ? 'stroke-purple-600'
                    : 'stroke-white',
                  '',
                ]"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 3.33325V12.6666"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.6666 8L7.99992 12.6667L3.33325 8"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </div>
          <div class="flex">
            <div
              class="flex px-4 py-2 ml-6 rounded-lg cursor-pointer threadss-center group hover:bg-gray-700"
            >
              <svg
                class="w-6 h-6 stroke-white"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 5.33325C13.1046 5.33325 14 4.43782 14 3.33325C14 2.22868 13.1046 1.33325 12 1.33325C10.8954 1.33325 10 2.22868 10 3.33325C10 4.43782 10.8954 5.33325 12 5.33325Z"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4 10C5.10457 10 6 9.10457 6 8C6 6.89543 5.10457 6 4 6C2.89543 6 2 6.89543 2 8C2 9.10457 2.89543 10 4 10Z"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 14.6667C13.1046 14.6667 14 13.7713 14 12.6667C14 11.5622 13.1046 10.6667 12 10.6667C10.8954 10.6667 10 11.5622 10 12.6667C10 13.7713 10.8954 14.6667 12 14.6667Z"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.72656 9.00659L10.2799 11.6599"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.2732 4.34009L5.72656 6.99342"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span class="ml-2 text-white">Share</span>
            </div>
          </div>
        </div>
        <div
          class="hidden px-4 rounded-lg cursor-pointer threadss-center lg:flex hover:bg-gray-700"
        >
          <img src="~/assets/svg/more-horizontal.svg" class="w-6 h-6" />
        </div>
      </div>
    </div>
    <AddComments :comment="comment" />
  </div>
</template>

<script>
import HeaderNav from '~/components/HeaderNav.vue'
import AddComments from '~/components/AddComments.vue'
import axios from 'axios'
export default {
  components: { HeaderNav, AddComments },
  layout: 'index',
  name: 'PostPage',
  mounted() {
    axios
      .get('/api/threads/' + this.$route.params.id)
      .then((response) => {
        this.threads = response.data.Data
        console.log(this.threads.title)
        // axios.get('/api/users/' + this.item.user_id).then((response) => {
        //   console.log(response.data.Data)
        //   this.user = response.data.Data
        // })
        document.getElementById('lazyload').remove()
      })
      .catch((error) => {
        console.log(error)
      })
  },
  data() {
    return {
      item: null,
      user: null,
      comment: [],
      threads: []
    }
  },
}
</script>

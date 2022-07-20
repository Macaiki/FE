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

      <!-- <PostPage :item="item" ></PostPage> -->
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
        console.log(response.data.Data)
        this.item = response.data.Data
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
      page: 'post',
      item: null,
      user: null,
      comment: null
    }
  },
}
</script>

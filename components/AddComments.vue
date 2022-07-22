<template>
  <form class="flex w-full">
    <div class="flex w-10/12 m-4">
      <img src="~/assets/images/pict-profile.jpg" class="w-16 h-16 mr-4 rounded-full"/>
      <textarea class="w-full p-2 text-white border-2 border-gray-700 rounded-lg bg-zinc-800" v-model="komentar" id="comment"></textarea>
    </div>
    <div class="flex items-start w-2/12 m-4">
      <button class="w-full p-3 text-white bg-purple-700 rounded-lg" type="submit" @click="addComment">Submit</button>
    </div>
  </form>
</template>

<script>
export default{
  name: 'AddComments',
  props: {
    comment: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      komentar: ''
    }
  },
  methods: {
    addComment(){
    let data = {
        comment: this.komentar,
      }
    let url = 'api/threads';
    this.$axios.post(url,data).then(response => {
        console.log(response)
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>
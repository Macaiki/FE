<template>
  <form class="flex">
    <div class="flex w-10/12 m-4">
      <img src="~/assets/images/pict-profile.jpg" class="w-16 h-16 mr-4 rounded-full"/>
      <textarea class="w-full p-2 text-white border-2 border-gray-700 rounded-lg bg-zinc-800" v-model="comment" id="comment"></textarea>
    </div>
    <div class="flex items-start w-2/12 m-4">
      <button class="w-full p-3 text-white bg-purple-700 rounded-lg" type="submit">Submit</button>
    </div>
  </form>
</template>

<script>
export default{
  name: 'AddComments',
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      comment: ''
    }
  },
}
</script>
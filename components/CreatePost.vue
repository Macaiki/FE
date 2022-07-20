<template>
  <div class="flex p-4 mx-4 rounded-xl bg-neutral-800">
    <div class="rounded-full">
      <img class="w-20 h-20 rounded-full" src="https://picsum.photos/200/200" />
    </div>
    <div class="w-full">
      <form class="block w-full">
        <input type="text" class="w-full p-2 pb-4 text-white border-2 border-gray-700 rounded-lg bg-zinc-800" v-model="title" id="title" placeholder="Title"/>
        <textarea v-model="body" placeholder="Isi Post" class="w-full border border-gray-700"></textarea>
        <button class="w-64 p-3 text-white bg-purple-700 rounded-lg" type="submit">Submit</button>
      </form>
    </div>
    <!-- <div class="w-20 h-20">
      <svg class="w-20 h-20" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"></path></svg>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'CreatePost',
  data() {
    return {
      title: '',
      body: '',
    };
  },
}
</script>

<style lang="scss" scoped></style>

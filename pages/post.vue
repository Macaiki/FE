<template>
  <div class="w-full">
    <header-nav></header-nav>
    <div class="container flex justify-between mx-auto">
      <div class="block w-8/12">
        <PostDetail :key="item" :item="item" :page="post"></PostDetail> 
        <AddComments/>
      </div>
      <div class="w-4/12">
        <sidebar-index></sidebar-index>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderNav from '~/components/HeaderNav.vue'
import AddComments from '~/components/AddComments.vue'
export default {
  components: { HeaderNav, AddComments },
  name: 'PostPage',
  data(){
    return {
      page: "post"
    }
  }
}
</script>

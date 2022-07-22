<template>
  <div class="mx-8 bg-neutral-800 block relative">
    <duv class="w-full">
      <img :src="user.backgroundImageURL"/>
      <div class="flex items-start">
        <div class="w-20 h-20 rounded-full">
          <img :src="user.profileImageURL"/>
        </div>
      </div>
    </duv>
  </div>
</template>

<script>
  export default {
    layout: 'profile',
    data() {
      return {
        user:[],
        threads: []
      }
    },
    async mounted() {
      const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ` + localStorage.getItem('token')
      }
      await this.$api.get('/current-user/profile', {
        headers
      }).then(res => {
        this.user = res.data.Data
        console.log(this.user)
      }).catch(err => {
        if (err.response.status === 401) {
          this.$router.push('/auth/login')
        }
        console.log(err)
      })
      await this.$api.get('/current-user/threads', {
        headers
      }).then(res => {
        this.threads = res.data.Data
      })
    }
  }
</script>

<style scoped>

</style>
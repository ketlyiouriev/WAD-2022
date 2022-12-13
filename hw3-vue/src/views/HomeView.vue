<template>
  <div class="content-container">
    <Sidebar/>
    <Posts/>
    <Sidebar/>
  </div>
  <div>
    <button v-on:click="ResetLikesAct">Reset likes</button>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
import Posts from "@/components/Posts";

export default {
  name: 'HomeView',
  components: {
    Sidebar, Posts
  },
  methods: {
    ResetLikesAct: function() {
      this.$store.commit('resetPostsLikes')
    }
  },
}
</script>

<style scoped>
button {
  background-color: rgb(75, 95, 159);
  border: none;
  border-radius: 5px;
  color: white;
  padding: 10px;
  margin-bottom: 10px;
  text-align: center;
  text-decoration: none;
  font-size: 15px;
  cursor: pointer;
}
.content-container {
  display: flex;
}
</style>
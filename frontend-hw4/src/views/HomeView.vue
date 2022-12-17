<template>
  <div class="content-container">
    <Sidebar/>
    <Posts/>
    <Sidebar/>
  </div>
  <div class="buttons">
    <button @click='this.$router.push("/addpost")'>Add Post</button>
    <button @click="DeleteAll">Delete All</button>
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
    /*AddPostAct: function() {
      this.$store.commit('resetPostsLikes')
    }*/
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
  margin-left: 240px;
  margin-right: 240px;
  text-align: center;
  text-decoration: none;
  font-size: 15px;
  cursor: pointer;
}
.content-container {
  display: flex;
}
</style>
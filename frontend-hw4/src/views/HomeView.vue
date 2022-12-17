<template>
   <div class="logOut-div">
      <button class="logOut-button" @click="logOut">Log out</button>
    </div>
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
    },
    logOut() {
      fetch("http://localhost:3000/auth/logout", {
          credentials: 'include', //  Don't forget to specify this if you need cookies
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log('jwt removed');
        //console.log('jwt removed:' + auth.authenticated());
        this.$router.push("/login");
        //location.assign("/");
      })
      .catch((e) => {
        console.log(e);
        console.log("error logout");
      });
    },
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

.logOut-button{
  background-color: rgb(255, 151, 66);
}
.content-container {
  display: flex;
}

.logOut-div{
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
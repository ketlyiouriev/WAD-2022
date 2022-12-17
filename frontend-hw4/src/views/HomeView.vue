<template>
   <div class="logOut-div">
      <button class="logOut-button" @click="logOut">Log out</button>
    </div>
  <div class="content-container">
    <Sidebar/>
    <Posts/>
    <Sidebar/>
  </div>
  <div class="buttons">
    <button @click='this.$router.push("/addpost")'>Add Post</button>
    <button @click="deleteAll">Delete All</button>
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
    },*/
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
    deleteAll() {
        fetch("http://localhost:3000/posts/", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => {
          console.log(response.data);
          this.$router.go("/");
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }
}
</script>

<style scoped>
button {
  background-color: rgb(255, 151, 66);
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

.logOut-button{
  margin-top: 1%;
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
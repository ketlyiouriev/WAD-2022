<template>
  <Sidebar/>
  <div>
    <button v-on:click="ResetLikesAct">Reset likes</button>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'

export default {
  name: 'HomeView',
  components: {
    Sidebar
  },
  methods: {
    ResetLikesAct: function() {
      this.$store.dispatch("ResetLikesAct")
  }
  }
}
</script>

<style scoped>
button {
  background-color: rgb(75, 95, 159);
  border: none;
  border-radius: 5px;
  color: white;
  padding: 10px;
  margin: 10px;
  text-align: center;
  text-decoration: none;
  font-size: 15px;
  cursor: pointer;
}
</style>
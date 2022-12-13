<template>
    <div class="about">
      <h1>Contact us!</h1>
    </div>
    <button @click='this.$router.push("/addpost")' id="addpost_button" class="button" type="submit">Add Post</button>
    <button @click='this.$router.push("/apost")' id="apost_button" class="button" type="submit">A Post</button>
</template>

<style>
.button {
  padding: 5px;
  margin: 20px;
  cursor: pointer;
}
</style>
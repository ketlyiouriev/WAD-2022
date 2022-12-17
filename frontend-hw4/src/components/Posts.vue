<template>
    <div class="content">
        <Post v-for="post in posts" :post="post" :key="post.id" />
    </div>
</template>

<script>
import Post from "@/components/Post";

export default {
    name: "Posts",
    data: function() {
        return {
            posts:[],
        }
    },
    mounted() {
        fetch('http://localhost:300/posts/')
        .then((response) => response.json())
        .then(data => this.posts = data)
        .catch(err => console.log(err.message));
        console.log("Mounted!")
    }
    /*components: { Post },
    computed: {
        posts() {
            return this.$store.state.posts;
        }
    },
    beforeCreate() {
        this.$store.dispatch('getPosts')
    }*/
};
</script>

<style scoped>
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
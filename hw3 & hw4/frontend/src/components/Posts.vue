<template>
    <div class="content">
        <Post v-for="post in posts" :post="post" :key="post.id" />
    </div>
</template>

<script>
import Post from "@/components/Post";

export default {
    name: "Posts",
    components: { Post },
    computed: {
        posts() {
            return this.$store.state.posts;
        }
    },
    beforeCreate() {
        this.$store.dispatch('getPosts')
    }
};
</script>

<style scoped>
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
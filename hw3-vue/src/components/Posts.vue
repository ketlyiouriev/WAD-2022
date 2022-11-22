<template>
    <div class="content">
        <Post v-for="post in $store.state.posts" :post="post" :key="post.id" />
    </div>
</template>

<script>
import Post from "@/components/Post";

export default {
    name: "Posts",
    components: { Post },
};
</script>

<style scoped>
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
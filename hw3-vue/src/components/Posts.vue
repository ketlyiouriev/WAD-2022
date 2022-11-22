<template>
    <div class="scroll-content">
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

.scroll-content {
    
    overflow: scroll;
}

</style>
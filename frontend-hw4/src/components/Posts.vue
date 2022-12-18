<template>
    <div class="content">
        <div v-for="post in posts" :key="post.id">
            <Post :post="post" :key="post.id" />
        </div>
    </div>
</template>

<script>
import Post from "@/components/Post";

export default {
    name: "Posts",
    components: { Post },
    props: ["posts"],
    mounted() {
        console.log(this.posts)
    }
}

</script>

<style scoped>
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
}

</style>
<template>
    <div class="post-box"> 
    <div class="post-header">
        <img :src="post.user_icon" width="60" height="60" alt="My Profile">
        <p>{{ post.datetime }}</p>
    </div>
    <div class="post-body">
        <p>{{ post.post_content }}</p>
        <img v-if="post.image != null" :src="post.image" alt="post-image">
    </div>
    <div class="post-footer">
        <img @click="increaseLike" :src="post.like_button" width="50" height="50" alt="My Profile">
        <p>{{ post.likes_count }} likes</p>
    </div>
    </div>
</template>


<script>
export default {
    name: "Post",
    props: ["post"],
    methods: {
        increaseLike: function() {
            this.$store.commit('incrementPostLike', this.post.id)
        }
    }
};
</script>

<style scoped>
.post-box {
    display: flex;
    flex-direction: column;
    height: auto;
    width: 600px;
    padding: 20px;
    margin: 25px;
    font-family: "sans-serif";
    font-size: 1.1em;
    border: 1px solid rgb(75, 95, 159);
    border-radius: 10px;
    background-color: rgba(169, 169, 169, 0.61);
}
.post-header img, .post-footer img {
    float: left;
}
img + p {
    float: right;
}
.post-body > p {
    margin: 5% 5% 5% 5%;
}
.post-body img {
    margin: 0% 5% 5% 5%;
    width: 80%;
    height: 350px;
}
</style>
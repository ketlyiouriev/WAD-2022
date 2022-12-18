<template>
    <div class="post-box">
    <div class="post-header">
        <img :src="profileImage" width="60" height="60" alt="My Profile">
        <p>{{ datetime }}</p>
        <p>{{ post.post_title }}</p>
    </div>
    <div class="post-body">
        <p>{{ content }}</p>
    </div>
    <div class="post-footer">
        <img @click="increaseLike" :src="likeUrl" width="50" height="50" alt="My Profile">
        <p>{{ likes }} likes</p>
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
    },
    computed: {
        likeUrl() {
            return require('../assets/like_button.png')
        },
        profileImage() {
            return require('../assets/profile_logo.png')
        },
        datetime() {
            return this.post ? this.post.datetime : ""
        },
        likes() {
            return this.post ? this.post.likes_count : ""
        },
        content() {
            return this.post ? this.post.post_content : ""

        }
    },
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
    cursor: pointer;
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
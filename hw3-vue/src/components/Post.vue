<template>
    <div class="post-box"> 
        <div class="post-header">
            <a class="profile_logo" href=""><img :src="post.user_icon" alt="My Profile"></a>
            <p>{{ post.datetime }}</p>
        </div>
        <div class="post-body">
            <p>{{ post.post_content }}</p>
            <a class="image" href=""><img v-if="post.image != null" :src="post.image" alt="post-image"></a>
        </div>
        <div class="post-footer">
            <a href=""><img :src="post.like_button" alt="My Profile"></a>
        </div>
    </div>
</template>


<script>
export default {
    name: "Post",
    props: ["post"],
};
</script>

<style scoped>
.post-box {
    display: flex;
    font-family: "sans-serif";
    font-size: 1.1em;
    flex-direction: column;
    width: 80%;
    height: auto;
    padding: 20px;
    margin-left: 10%;
    margin-bottom: 5%;
    border: 1px solid rgb(75, 95, 159);
    border-radius: 10px;
    background-color: rgba(169, 169, 169, 0.61);
}

.profile_logo {
    float: left;
}

img + p {
    float: right;
}

.post-body > p {
    margin: 5% 5% 5% 5%;
    overflow: -moz-hidden-unscrollable;
}

.post-body img {
    margin: 5% 5% 5% 5%;
    width: 80%;
    height: 350px;
}
</style>
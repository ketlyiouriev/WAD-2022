<template>
    <div class="content">
        <Post v-for="post in posts" :key="post.id" />
    </div>
</template>

<script>
import Post from "@/components/Post";

export default {
    name: "Posts",
    components: { Post },
    data: function() {
        return {
            posts: [],
        }
    },
    /*mounted() {
        var data = {
        datetime: "10.10.2022",
        post_title: "Afternoon library visit",
        post_content: "Went to the University of Tartu Library for the first time today!",
        };
        fetch("http://localhost:3000/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        .then((response) => {
            console.log(response.data);
            this.$router.push("/");
        })
        .catch((e) => {
            console.log(e);
            console.log("error");
        });
    },*/
    mounted() {
        fetch('http://localhost:3000/posts/')
        .then((response) => response.json())
        .then(data => this.posts = data)
        .catch(err => console.log(err.message));
        console.log("mounted")
    }
}
    /*computed: {
        posts() {
            return this.$store.state.posts;
        }
    },
    beforeCreate() {
        this.$store.dispatch('getPosts')
    }
};*/
</script>

<style scoped>
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
}

</style>
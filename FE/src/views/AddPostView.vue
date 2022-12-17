<template>
    <div class="addpost_content">
        <h2>Add Post</h2>
        <form class="addpost_form" v-on:submit="submit">
            <div class="form_body">
                <label for="body"></label>
                <p>Post Body</p>
                <input v-model.trim="body" type="body" placeholder="Body" required><br>
            </div>
            <button @click="addPost" id="addpost_button" class="button" type="submit">Add</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "AddPost",
        data() {
            return {
                body: "",
            };
    },
    methods: {
        submit() {
            this.submitted = true;
            // redirectib home page'ile, kus all posts
        },
        addPost() {
            this.$router.push("/")
        }
    }
}
</script>

<style scoped>
.addpost_content {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 3% 28%;
    border: 1px solid rgb(75, 95, 159);
    border-radius: 10px;
    background-color: rgba(169, 169, 169, 0.61);
    font-family: "sans-serif";
}
h2 {
    padding: 10px;
    padding-bottom: 0px;
    color: rgb(75, 95, 159);
}
p {
    font-size: 1.2em;
    padding-right: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
}
.addpost_form {
    display: flex;
    flex-direction: column;
    margin: 20px;
}
.form_body {
    display: flex;
    flex-direction: row;
}
input[type=body] {
    padding: 20px;
}
#addpost_button {
    padding: 5px;
    margin-top: 20px;
    cursor: pointer;
}
@media (max-width: 480px) {
    .addpost_content a {
        text-align: center;
    }
    .addpost_form {
        width: 80%;
    }
}
</style>
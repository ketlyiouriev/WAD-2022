<template>
    <div class="addpost_content">
        <h2>Add Post</h2>
        <form class="addpost_form">
            <div class="form_body">
                <div>
                    <label for="title">Post Title</label>
                    <input v-model.trim="post_title" type="title" placeholder="Title" required><br>
                </div>
                <div>
                    <label for="body">Post Body</label>
                    <input v-model.trim="post_content" type="body" placeholder="Body" required><br>
                </div>
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
                post_title: "",
                post_content: "",
            };
        },
        methods: {
            addPost() {
                const current = new Date();
                const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
            var data = {
                datetime: date,
                post_title: this.post_title,
                post_content: this.post_content,
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
        },
    },
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
label {
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
    flex-direction: column;
}
input {
    padding: 20px;
    margin: 10px;
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
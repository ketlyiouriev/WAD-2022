<template>
    <div class="apost_content">
        <h2>A Post</h2>
        <form class="apost_form" v-on:submit="submit">
            <div class="form_body">
                <label for="body"></label>
                <p>Post Body</p>
                <input v-model.trim="body" type="body" placeholder="Body" required><br>
            </div>
            <div class="buttons">
                <button @click="updatePost" id="updatepost_button" class="button" type="submit">Update</button>
                <button @click="deletePost" id="deletepost_button" class="button" type="submit">Delete</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "APost",
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
    }
}
</script>

<style scoped>
.apost_content {
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
.apost_form {
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
.button {
  padding: 5px;
  margin-top: 10px;
  width: 100%;
  cursor: pointer;
}
.buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
}
@media (max-width: 480px) {
    .apost_content a {
        text-align: center;
    }
    .apost_form {
        width: 80%;
    }
}
</style>
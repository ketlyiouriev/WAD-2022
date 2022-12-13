<template>
    <div class="login_content">
        <h2>Please Login</h2>
        <form class="login_form" v-on:submit="submit">
            <label for="email"></label>
            <input v-model.trim="email" type="email" placeholder="Email" required><br>
            <label for="password"></label>
            <input v-model="password" type="password" placeholder="Password" required><br>
            <div class="buttons">
                <button @click='this.$router.push("/signup")' id="signup_button" class="button" type="submit">Sign Up</button>
                <p>or</p>
                <button @click="LogIn" id="login_button" class="button" type="submit">Login</button>
            </div>
        </form>
    </div>
</template>

<script>
  export default {
    name: "Login",

    data() {
        return {
            email: "",
            password: "",
            submitted: false,
            isValid: false,
        };
    },
    methods: {
        submit() {
            this.submitted = true;
            this.isValid = checkPassword(this.password); // siin probleem
            if (this.isValid) {
                this.$router.push("/")
            }
        },

        LogIn() {
            var data = {
                email: this.email,
                password: this.password
            };
            // using Fetch - post method - send an HTTP post request to the specified URI with the defined body
            fetch("http://localhost:3000/auth/login", {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                credentials: 'include', //  Don't forget to specify this if you need cookies
                body: JSON.stringify(data),
            })
            .then((response) => response.json())
            .then((data) => {
            console.log(data);
            //this.$router.push("/");
            location.assign("/");
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
.login_content {
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
}
.login_form {
  display: flex;
  flex-direction: column;
  margin: 20px;
}

input[type=email], input[type=password] {
  padding: 10px;
}
.button {
  padding: 10px;
  cursor: pointer;
  margin: 10px;
}

@media (max-width: 480px) {
.login_content a {
      text-align: center;
  }
.login_form {
      width: 80%;
  }
}

.buttons {
    display: flex;
}

</style>
<template>
    <div class="signup_content">
        <h2>Please Sign Up</h2>
        <form class="login_form" >
            <label for="email"></label>
            <input v-model.trim="email" type="email" name="email" placeholder="Email" required><br>
            <label for="password"></label>
            <input v-model="password" type="password" name="password" placeholder="Password" :class="{ error: !isValid && submitted}" required><br>
            <button id="login_button" class="button" @click.stop.prevent="submit()" type="submit">Sign Up</button>
        </form>
        <div class="invalidPassword" v-if="!isValid && submitted">
            <ol>
                <h3>Invalid password</h3>
                <li>Password length must be between 8 and 15 characters.</li>
                <li>Password must include at least one uppercase and two lowercase letters.</li>
                <li>Password must include at least one numeric value.</li>
                <li>Password must start with an uppercase letter.</li>
                <li>Password must include the character '_'.</li>
            </ol>
        </div>
    </div>
</template>

<script>
  export default {
    name: "SignUp",

    data: function() {
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
            this.isValid = checkPassword(this.password);
            if (this.isValid) {
                this.signup();
            }
        },

        signup() {
          var data = {
            email: this.email,
            password: this.password
        };
      // using Fetch - post method - send an HTTP post request to the specified URI with the defined body
      fetch("http://localhost:3000/auth/signup", {
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
        this.$router.push("/");
      })
      .catch((e) => {
        console.log(e);
        console.log("error");
      });
    },
    },
  }
  function checkPassword(password) {
    return (
        /^[A-Z]{1}.{7,13}$/.test(password) &&   /* starts with uppercase letter & 8 <= password.length < 15 */
        /_/.test(password) &&                   /* includes '_' symbol */
        /[0-9]/.test(password) &&               /* includes numeric value */
        /[a-z].*[a-z]/.test(password)           /* contains 2 or more lowercase letters */
    );}

</script>


<style scoped>
.signup_content {
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
#login_button {
  padding: 5px;
  cursor: pointer;
}
@media (max-width: 480px) {
  .signup_content a {
      text-align: center;
  }
  .login_form {
      width: 80%;
  }
}
.invalidPassword{
  text-align: left;
  background-color: rgb(190, 123, 123);
  width: 65%;
}
</style>
<template>
    <div class="login_content">
        <h2>Please log in</h2>
        <form action="index.html" class="login_form">
            <label for="email"></label>
            <input v-model="email" type="email" placeholder="Email" required><br>
            <label for="password"></label>
            <input v-model="password" type="password" placeholder="Password" required><br>
            <button id="login_button" class="button" type="submit">Login</button>
        </form>
    </div>
</template>

<script>
  export default {
    name: "SignUp",

    data() {
        return {
            email: "",
            password: "",
            formSubmitted: false,
            isValid: false,
        };
    }
  }
  function checkPassword(password) {
    return (
        /^[A-Z]{1}.{7,13}$/.test(password) &&   /* starts with uppercase letter & 8 <= password.length < 15 */
        /_/.test(password) &&   /* includes '_' symbol */
        /[0-9]/.test(password) &&   /* includes numeric value */
        /[a-z].*[a-z]/.test(password)  /* contains 2 or more lowercase letters */ 
    );}

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

#login_button {
  padding: 5px;
  cursor: pointer;
}

@media (max-width: 480px) {
  .login_content a {
      text-align: center;
  }
  .login_form {
      width: 80%;
  }
}
</style>
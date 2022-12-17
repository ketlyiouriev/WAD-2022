<template>
    <header>
        <div class="links">
            <router-link to="/">Home</router-link>
            <p>|</p>
            <router-link to="/contacts">Contacts</router-link>
<!--            <router-link to="/signup">Sign Up</router-link> -->
<!--              <p>|</p>  -->
<!--             <router-link to="/login">Login</router-link>   -->
        </div>
        <img src="@/assets/profile_logo.png" width="80" height="80" alt="My Profile">
    </header>
</template>
  
<script>
export default {
    name: "Header"
}
</script>
  
<style scoped>
header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: rgb(75, 95, 159);
    position: sticky;
}

.links {
    display: flex;
    flex-direction: row;
    align-items: center;
}

a, p {
    padding: 10px;
    color: #ffffff;
    font-family: "sans-serif";
    font-size: 2em;
    text-decoration: none;
}

a:hover {
    background-color: #a1add1;
    border-radius: 5px;
    transition: 0.3s ease;
}

img {
    padding: 10px;
    float: right;
}
</style>
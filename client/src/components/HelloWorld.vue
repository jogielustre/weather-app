<template>    
  <header>
    <!--
    <img alt="Vue logo" src="./assets/logo.png">
    -->
    <h1>{{ msg }}</h1>
  </header>
  
  <div class="hello">
    <h3>Welcome to weather forecast web application. <br> 
      Please login with your Github user to use the application and view the weather in your city.</h3>
      <button @click="loginWithGitHub">Login</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'HelloWorld',
      props: {
        msg: String
      }
    };
  },

  methods: {
    loginWithGitHub() {
      window.location.href = 'http://localhost:3000/auth/github'; // Redirect to your Nest.js OAuth endpoint
    },
  },
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px;
  text-align: center;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

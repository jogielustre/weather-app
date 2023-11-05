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
      <router-link :to="home">
        <button>
          Login
        </button>
      </router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
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

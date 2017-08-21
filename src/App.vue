<template>
  <!--导航栏-->
  <div id="app">
    <div>
      <ul>
        <router-link to="/">Hello</router-link>
        <router-link to="/world">World</router-link>
        <router-link to="/panda">Panda</router-link>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.router-link-active{
  color: #ff1619;
}


</style>

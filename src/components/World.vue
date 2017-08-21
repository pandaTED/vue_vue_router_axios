<template>
  <div class="world">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'world',
    data () {
      return {
        msg: 'This is World'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

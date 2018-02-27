<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
  /* mounted、updated、destroyed */
  export default {
    name: 'person',
    data () {
      return {
        msg: 'This is person',
        counter: 12,
        items: []
      }
    },
    created: function () {
      console.log('Person------->Create')
    },
    mounted: function () {
      console.log('Person------->mounted')
    },
    updated: function () {
      console.log('Person------>updated')
    },
    destroyed: function () {
      console.log('Person------>destroyed')
    },
    methods: {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

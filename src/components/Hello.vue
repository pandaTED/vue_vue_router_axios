<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button v-on:click="counter1">Add 1</button>
    <p>点击了{{counter}}</p>
    <button @click="zhihu">Click request Zhihu</button>
    <ol>
      <li v-for="item in items">
       {{ item.title }}
      </li>
    </ol>
  </div>
</template>

<script>
  /* mounted、updated、destroyed */
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'This is Hello',
        counter: 12,
        items: []
      }
    },
    created: function () {
      console.log('Hello------->Create')
    },
    mounted: function () {
      console.log('Hello------->mounted')
    },
    updated: function () {
      console.log('Hello------>updated')
    },
    destroyed: function () {
      console.log('Hello------>destroyed')
    },
    methods: {
      hello1: function () {
        alert('Hello World')
      },
      counter1: function (val) {
        this.counter = this.counter + 1
      },
      zhihu: function () {
        this.axios.get('/api/11').then((response) => {
          this.items = response.data.stories
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

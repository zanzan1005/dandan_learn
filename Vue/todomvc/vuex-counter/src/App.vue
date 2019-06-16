<template>
  <div id="app">
    {{$store.state.count}}
    <button @click='increment'>+</button>
    <button @click='decrement'>-</button>
  </div>
</template>

<script>

import { mapActions } from 'vuex'
export default {
  name: 'App',
  components: {
    
  },
  methods: mapActions(['increment'])
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
</style>

<template>
  <div class="hello">
    <p>name: {{ this.name }}</p>
    <p>job: {{ this.job }}</p>
    <h1>{{ greet() }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      name: '狗蛋',
      job: 'web开发',
      website: 'https://oceanwu.ke.qq.com/'
    } 
  },
  methods: {
    greet: function () {
      return "Good night"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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

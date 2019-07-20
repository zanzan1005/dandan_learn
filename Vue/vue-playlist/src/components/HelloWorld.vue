<template>
  <div class="hello">
    <p>name: {{ name }}</p>
    <p>job: {{ job }}</p>
    <h1>{{ greet("noon") }}</h1>
    <input type="text" v-bind:value="job">
    <a v-bind:href="website">腾讯课堂</a>
    <p v-html="websiteTage"></p>
    <button v-on:click="add(1)">加一岁</button>
    <button v-on:click="reduce(1)">减一岁</button>
    <button v-on:click="add(10)">加10岁</button>
    <button v-on:click="reduce(10)">减10岁</button>
    <p>My age is {{age}}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      age: 20,
      name: '狗蛋',
      job: 'web开发',
      website: 'https://oceanwu.ke.qq.com/',
      websiteTage: "<a href='https://oceanwu.ke.qq.com/'>腾讯课堂</a>"
    } 
  },
  methods: {
    greet: function (time) {
      return "Good " + " " + time + " " + "!"
    },
    add: function (add) {
      this.age += add
    },
    reduce: function (red) {
      this.age -= red
    }
  }
}
</script>


<style scoped>

</style>

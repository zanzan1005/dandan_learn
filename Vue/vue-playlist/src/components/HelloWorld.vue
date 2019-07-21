<template>
  <div class="hello">
    <p>name: {{ name }}</p>
    <p>job: {{ job }}</p>
    <h1>{{ greet("noon") }}</h1>
    <input type="text" v-bind:value="job">
    <a v-bind:href="website">腾讯课堂</a>
    <p v-html="websiteTage"></p>
    <button @click="add(1)">加一岁</button>
    <button @click="reduce(1)">减一岁</button>
    <button @click="add(10)">加10岁</button>
    <button @click="reduce(10)">减10岁</button>
    <p>My age is {{age}}</p>
    <div class="box" @mousemove="move">{{x}},{{y}}</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      age: 20,
      x: 0,
      y: 0,
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
    },
    move: function (event) {
      // console.log(event)
      this.x = event.offsetX;
      this.y = event.offsetY;
    }
  }
}
</script>


<style scoped>
.box{
  width: 500px;
  height: 400px;
  border: 1px solid #000;
}
</style>

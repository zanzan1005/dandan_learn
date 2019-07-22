<template>
 <div>
   请输入名字：
   <input type="text" @keyup.enter="addName"><br><br>
   请输入年龄：
   <input type="text" @keyup.enter="addAge">
 </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    addName() {
    console.log("您正在输入名字！")
  },
  addAge() {
    console.log("您正在输入年龄！")
  }
}
  
}
</script>

<style scoped>

</style>

<template>
  <div class="login">
    <div class="login-bg">
      <h1 class="login-title">
        <img src="../../assets/img/logo.png" alt />
      </h1>

      <md-field class="login-input">
        <md-input-item ref="name" title="手机号" placeholder="请输入手机号" v-model="user.name" type="phone"></md-input-item>
        <md-input-item ref="id" title="密码" type="password" placeholder="请输入密码" v-model="user.password"></md-input-item>
      </md-field>
      <div class="login-btn">
        <span @click="loginOnClick">
          <md-button type="primary" round>登录</md-button>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'mand-mobile'
export default {
  name: "Login",
  data () {
    return {
      userData: null,
      user: {
        name: '15330734121',
        password: '123456'
      }
    }
  },
  methods: {
    loginOnClick () {
      this.loginAjax()
    },
    loginAjax() {
      let params = {
        userName : this.user.name,
        passWord : this.user.password
      }
      this.$http.post('/user',params).then(res => {
        this.userData = res.data.data
        let tmpUser = JSON.stringify(this.user.data)
        // 存到vuex里面
        Toast.succeed(`欢迎回来，${this.userData.name}`,1500)
      })
    }
  }
};
</script>

<style lang="stylus" scoped>
.login 
  position fixed
  top 0
  left 0
  z-index 100
  width 100vw
  height 100vh
  overflow hidden
  background url('../../assets/img/login-bg.jpg')
  background-size 100% 100%
  padding 20px
  &-input 
    margin-top 60px
  &-title 
    margin-top 70px
    text-align center
    img 
      width 402px
      height 101px
      margin 0 auto
  &-btn 
    width 100%
    margin 70px auto
    font-size 130px
    color #ffffff
    text-align center
.login-bg 
  position absolute 
  z-index 200
  top 0
  left 0
  width 100vw
  height 100vh
</style>
<style lang="stylus">
.login 
  .md-field 
    background transparent
  .md-input-item-content:before
    background #000000
  .md-field-item-title 
    font-size 20px
  .md-input-item-input
    font-size 20px
  .md-button.block
    width 50%
    margin 0 auto
    height 50px
    font-size 22px
    margin-top -50px
</style>

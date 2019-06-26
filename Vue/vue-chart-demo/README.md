- vuex 大型化由modules来支持，只有一个单一状态树，其余四个都是分支
this.$store.user.
- user
  state info 登陆 注册 退出
  actions
  mutations
  vuex的工作状态是先设计，搭好结构，，围绕着我们的状态（token => 令牌环）
  第三方用token (更加高级的第三方登陆)
  this.$store.user.token 跳转到登录页面？
- 登录鉴权



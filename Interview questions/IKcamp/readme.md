## h5  vs 小程序
- 小程序对比H5有更好的体验(更快的加载)
- 微信给小程序提供了更强大的能力，小程序可以调用到原生APP更多的功能

## 设计一个项目
1. 配置
    1. 写死的常量
2. 多处公用的方法
    1. 防抖 util
3. 环境的区分
    1. 开发环境
        1. 错误提示 日志打印 目的是为了更好的开发体验
    2. 测试环境
    3. 线上环境
4. css划分
    1. css重置 reset css
    2. base.css 公用的样式
5. 请求封装
    1.  header: 
    {
      comtent-type:
    }
    wx.request({content-type}) //a
    wx.request({content-type}) //b
6. 请求字段统一处理
    1. 请求结果统一处理

## for of 
  用于遍历 可迭代 对象
  比如： Array Map Set String
    可迭代 对象有两个要求
    1.存在Symbol.iterator 属性
    2.Symbol.interator 是一个方法 返回next属性
    ```
    Symbol.interator = () => ({
      next: () => {
        return {
          done:
          value:
        }
      }
    })
    ```

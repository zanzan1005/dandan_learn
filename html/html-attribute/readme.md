## script
1. 下载
2. 执行

1. async
  1. html parse / 下载 并行
  2. 下载完成就执行 顺序无法控制
2. defer
  1. html parse / 下载 并行
  2. 整个文档加载完成之后，按照script 在文档中出现的顺序执行
3. 没有属性
  1. html parse 和 js 下载 执行 都是互斥的

## crossorigin
  用于 可以引入跨域资源的标签： img link script
  crossorigin 代表要协商跨域
  普通<script>标签是可以加载跨域脚本的，
  但如果给跨域<script>标签添加了crossorigin属性，
（且服务器端没有设置Access-Control-Allow-Origin 响应头）
1. anonymous
  如果使用了这个值，会在请求头加一个origin属性
  如果未设置 cros，跨域js发生了错误，将会向window.onerror 提供很少的信息，通过crossorigin 属性得到详细的信息
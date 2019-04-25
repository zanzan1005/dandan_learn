兼容性 不行
scroll-behavior:smooth

chrome 支持css,但是其他的主流浏览器怎么办？
scroll-behavior 失效
JS写

scroll-behavior  IE不支持
兼容 hack  ie 里面使用JS来支持
window.scrollTo(0,1/8); ie使用
requestAnimationFrame (递归函数)
浏览器判断
## why

以前 async mode 现在 concurrent mode
目的：让react 整体渲染有一个优先级的排比
1. js 单线程
2. js 解析
3. http
  js线程和ui是互斥的 js可以操作dom
4.卡顿， js 执行占据了很大的空间，导致ui得不到响应
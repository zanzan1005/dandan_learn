1. 三个容器 背后 100% 宽度 圆 已经拖动了的进度条
2. touchStart touchMove touched
3. 改变 width left

````js
new Progress('selector',{
  onDrag: () => {},
  onDragStart: () => {},
  onDragEnd: () => {},
  progress: 0.5,
  disableDrag: false
})
`````
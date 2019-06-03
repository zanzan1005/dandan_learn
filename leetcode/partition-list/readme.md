[26] 链表 LinkedList 指针

- 算法 
- 数据结构 LinkedList(链表)
- webpack 跑起来
给定一个链表(实现一个),和一个特定值x,对链表进行分隔
使所有的节点都在大于会等于X的节点之前
LinkedList (n)LinkedListNode 
存储数据可以不连续(相对于数组而言)
保证原来的顺序
head -> next -> node1 -> ..node -> tail -> next = null

head = 1->4->3->2->5->2  x=3
1->2->2->4->3->5
- 一分为2 结点 val后的next属性
  两个链表 next属性 小的链表的next -> 大链表的头结点
  怎么在组成链表的过程之中来打乱顺序？
  lowerHeader
  lowerTail
  highHeader
  highTail
  lowerHeader = head
  4? 跳过  1 -> next 放开 1->4  1结点，将它的next 属性置为null
  1 -> lowerHeader -> next 2 -> 2(最后的2)->4->
  4 -> highHeader-> ...... ->5
  while 一下就可以
  



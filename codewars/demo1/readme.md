有一段字符

- 如果字符超过140字，返回false
- 如果是空字符串，返回false （做边界判断）
- 以#开始
- 每个单词都大写

- 将单词字符串变成单词数组 split('')分割单词
- 数组里每个元素都是单词，每个单词首字母大写
map 遍历每个元素，使用箭头函数
- 每个单词charAt(0) 第一个字符 toUpperCase()
- 除了第一个字符后，其余的呢？slice(1) 从哪个位置开始切割   
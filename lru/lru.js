var LRUCache = function (capacity) {
    this.capacity = capacity;
    this.obj = {};//存放数据
    // 最近最少使用？
    // 数组可以，对象不行
    // 开头[0]    结尾 .length-1
    // obj 存取，数组来存储重要的东西
    // unshift pop()
    // unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度。
    this.arr = [];
}
//作缓存
LRUCache.prototype.get = function (key) {
    var val = this.obj[key];
    if (val > 0) {
        // 最近最少使用
        var index = this.arr.indexOf(key);
        this.arr.splice(index, 1);
        this.arr.unshift(key);
        return val;
    } else {
        return -1;
    }
}
LRUCache.prototype.set = function (key, val) {
    // 之前已存在（更新操作）
    if (this.obj[key]) {
        this.obj[key] = value;//先处理更新状态，这是独立的一种状态
        var index = this.arr.indexOf(key);
        this.arr.splice(index, 1);//切割  splice() 方法向/从数组中添加/删除项目，然后返回被删除的项目 index	必需。整数，规定添加/删除项目的位置，使用负数可从数组结尾处规定位置
        this.arr.unshift(key);//到达第一位
        return;
    }
    // 空间不够了怎么办？
    if (this.capacity === this.arr.length) {
        // 满了
        var k = this.arr.pop();//替换
        //pop()函数
        // 定义：该函数从数组中删除最后项，并返回该删除项。
        //         this.obj[k] = undefined;

    }
    // 1，1
    this.obj[key] = val;//数据存储好了
    this.arr.unshift(key);//最近最常使用
}

var cache = new LRUCache(2);
cache.set(1,1);
cache.set(2,2);
console.log(cache.get(1));
cache.set(3,3);
console.log(cache.get(2));
cache.set(4,4);
console.log(cache.get(1));
console.log(cache.get(3));
console.log(cache.get(4));
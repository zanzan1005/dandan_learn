//位移运算（右移）
// 二进制位 0000 1011
// 11（十进制）右移一位 0000 0101 （5）
//            左移一位 00001 0110 
// 利用位移运算，前后移位可以得到/2 *2 的效果
// console.log(11 >> 1);
// console.log(11 << 1);//左移一位


// 猛哥给蜗牛买香蕉
// N piles of bananas
// 每挂香蕉上的香蕉数量不一样

// [3,6,7,11],  H小时内吃完，1小时吃几根香蕉(reduce()方法)
// 一小时内吃mid根香蕉,一次只吃一把，一小时最少吃几根可以在H小时内吃完

/**
 * @desc 最少的吃香蕉速度，在规定时间内吃完
 * @param {number[]} piles 
 * @param {number} H 
 * @return {number}
 */
function minEatingSpeed(piles, H) {
    let lo = 1;
    hi = Math.max(...piles);
    //二分查找，一直丢一半，
    while (lo <= hi) {
        // lo++;
        查中间的数
        let mid = lo + ((hi - lo) >> 1);
        if (canEatAllBananas(piles, H, mid)) {
            hi = mid - 1;
        } else {
            //没有吃完 如何吃完？
            // 小的值已经没有意义了
            lo = mid + 1;
        }
        return lo;
    }


    /**
     * @desc 判断能否吃完香蕉
     * @param {number[]} piles 
     * @param {number} H 
     * @param {number} mid 
     * @return {boolean}
     */
    //boolean
    function canEatAllBananas(piles, H, mid) {
        let h = 0;
        // mid,余下吃完，
        for (let pile of piles) {
            h += Math.ceil(pile / mid);

            //math.ceil(x)返回大于等于参数x的最小整数,即对浮点数向上取整.
        }
        return h <= H;
    }
}

let piles = [3, 6, 7, 11];
// console.log(canEatAllBananas(piles, 8, 4));
console.log(minEatingSpeed([3,6,7,11],8));

// 1.吃完香蕉是目标？
// H 小时内吃完
// 2.最小的一个数

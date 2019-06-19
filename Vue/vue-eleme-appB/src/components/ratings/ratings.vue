<template>
<div class="centent">
  <div class="ratings">
    <div class="left">
      <ul>
        <li class="score">{{seller.score}}</li>
        <li class="overall">综合评分</li>
        <li class="rankRate">高于周边商家的{{seller.rankRate}}%</li>
      </ul>
    </div>
    <div class="right">
      <ul>
        <li>服务态度</li>
        <li>商品评分</li>
        <li class="time">送达时间
          <span>38分钟</span>
        </li>
      </ul>
      <div class="star">
        <ul>
          <li class="light"><a href="javascript:;">1</a></li>
          <li><a href="javascript:;">2</a></li>
          <li><a href="javascript:;">3</a></li>
          <li><a href="javascript:;">4</a></li>
          <li><a href="javascript:;">5</a></li>
        </ul>

      </div>
    </div>
  </div>
</div>
</template>

<script>
import ratings from '@/components/star/star'
export default {
  name: 'ratings',
  props: {
    ratings: {
      type: Object
    }
  },
  data () {
    return {
      seller:{}
    }
  },
   created() {
    this.$http
      .get(
        "https://www.easy-mock.com/mock/5ca2c29464930718b239eb94/lm/vue-eleme-seller"
      )
      .then(res => {
        console.log(res);
        this.seller = res.data.data;
      })
  },
}
</script>


<style>
.ratings{
  display: flex;
  height: 120px;
  background-color: #fff;
  border-bottom: 10px solid #f1f4f6;
  /* border: 1px solid red; */
}
.left{
  width: 40%;
  text-align: center;
  margin-top: 10px;
  height: 85px;
  border-right: 1px solid #d0d0d0;
}
.right{
  width: 60%;
  /* border: 1px solid red; */
}
.score{
  color: #f6930f;
  font-size: 25px;
  padding-top: 15px;
}
.overall{
  color: #44494a;
  font-size: 12px;
  font-weight: bold;
  padding-top: 5px;
}
.rankRate{
  color: #919398;
  font-size: 12px;
  text-align: center;
  padding-top: 5px;
}
.right ul{
  color: #000;
  font-weight: bold;
  font-size: 12px;
  margin-top: 18px;
  margin-left: 15px;
}
.right li{
  padding-top: 9px;
  padding-left: 10px;
}
.right span{
  color: grey;
  margin-left: 9px;
}
</style>

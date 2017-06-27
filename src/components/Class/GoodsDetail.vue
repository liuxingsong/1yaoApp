<template>
  <div id="goodsDetail">
    <my-classheader id="header" class="header">
      <div id="middle" slot="middle">
        <a class="active">商品</a>
        <a>详情</a>
        <a>问答</a>
        <span>转发</span>
      </div>
    </my-classheader>
    <my-content classs="content">
      <mt-swipe :auto="4000" class="swipeImg">
        <mt-swipe-item v-for="(ele,index) in goodsDetailMsg.photos" :key="index">
            <img :src="ele.url" alt="">
        </mt-swipe-item>
      </mt-swipe>
      <div class="detail">
        {{goodsDetailMsg.detail}}
      </div>
      <div class="type">
        <i>{{goodsDetailMsg.type}}</i>
        <span>{{goodsDetailMsg.subtitle}}</span>
      </div>
      <h4 class="price">￥ {{goodsDetailMsg.price}}</h4>
    </my-content>
    <div class="detail-footer">
      <ul>
        <li><span>收藏</span><span>购物车</span></li>
        <li>资讯药师</li>
        <li>购买登记</li>
      </ul>
    </div>
  </div>
</template>
<script>
  import ClassHeader from './ClassHeader'
  export default {
    name: "goodsDetail",
    data: function data() {
      return {
        goodsDetailMsg:[]
      }
    },
    mounted() {
      //do something after mounting vue instance
      this.$http.get("/static/mock/goodsDetailMsg.json")
      .then((res)=>{
        console.log(res)
        this.goodsDetailMsg = res.body
      })
    },
    components: {
      "my-classheader":ClassHeader
    }
  }
</script>
<style scoped>
  #header{background: #f9f9f9}
  #middle a{margin: 0 10px;line-height: 30px;padding-bottom: 5px}
  #middle span{float: right;}
  .active{color: red;border-bottom: 1px solid red}
  .content{height: 100%;text-align: left;}
  .swipeImg{width: 100%;height: 260px}
  .detail{padding: 10px;color: red;border-bottom: 3px solid #e6e6e6;font-size: 14px}
  .type{padding: 20px 10px;border-bottom: 1px solid #e6e6e6}
  .type i{display: inline-block;font-size: 7px;color: #fff;background: #0093e7;font-style: normal;}
  .type span{font-size: 18px;color: #000}
  .price{color: red;padding:10px}
  .detail-footer{width: 100%;position: fixed;bottom: 0;left: 0}
  .detail-footer ul{width: 100%;height: 50px;display: flex;justify-content: space-around;border-top: 1px solid #e6e6e6}
  .detail-footer ul li{width: 33%;text-align: center;list-style: none;line-height: 50px}
  .detail-footer ul li:nth-of-type(1) span{display: inline-block;width: 50%;font-size: 12px}
  .detail-footer ul li:nth-of-type(2){background: #FF9402;color: #fff}
  .detail-footer ul li:nth-of-type(3){background: #f99;color: #fff}
</style>

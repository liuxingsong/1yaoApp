<template>
  <div class="goods-list" ref="goods-list">
    <ul>
      <li v-for="(ele,index) in goodsData" :key="index">
        <img :src="ele.goodsListImg" alt="">
        <p>{{ele.goodsName}}</p>
        <span>￥ {{ele.price}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
  import IScroll from 'iscroll'
  // console.log(IScroll);
  export default {
    name: "goods-list",
    props: {
      goodsData:{
        type:Array,
        default(){
          return []
        }
      }
    },
    mounted() {
      //do something after mounting vue instance
      this.myScroll = new IScroll(this.$refs["goods-list"],{
        scrollbars:true
      })
    },
    updated() {
      //do something after updating vue instance
      this.myScroll.refresh()
    }
  }
</script>
<style lang="scss" scoped>
  .goods-list{
    overflow: hidden;
    width: 100%;
    ul{
      width: 100%;
      overflow: hidden;
      li{
        width: 50%;
        overflow: hidden;
        float: left;
        height: 300px;
        img{
          width: 90%;
          height: 180px;
          margin: 5px auto;
        }
        p{
          padding: 5px;
          text-align: left;
          height: 40px;
          overflow: hidden;
        }
        span{
          display: block;
          width: 90%;
          padding: 5px;
          text-align: left;
          color: red
        }
      }
    }
  }
</style>

<template>
  <div id="goodsListDetail">
      <my-classheader :searchMsg="searchMsg" class="header"></my-classheader>
      <my-content classs="content">
        <ul class="sortWhy">
          <li>黄褐斑 ^</li>
          <li>综合排序 ^</li>
          <li>* 列表</li>
          <li>* 筛选</li>
        </ul>
        <ul class="sellWhy">
          <li>自营</li>
          <li>促销 ^</li>
          <li>品牌 ^</li>
          <li>药品…^</li>
        </ul>
       <div class="goodsListDetail">
         <mt-loadmore
         :top-method="loadTop"
         :bottom-method="loadBottom"
         :auto-fill="false"
         :bottom-distance="-10"
         :bottom-all-loaded="allLoaded"
         ref="loadmore">
         <ul>
           <li v-for="(ele,index) in goodsDetailList" :key="index" @click="gotoDetailMsg()">
               <div class="goodsImg">
                 <img :src="ele.icon" alt="">
               </div>
               <div class="goodsMsg">
                 <span class="type">{{ele.type}}</span>
                 <span>{{ele.name}} {{ele.triggerType}}</span>
                 <p class="subtitle">{{ele.subtitle}}</p>
                 <p class="price">￥ {{ele.price}}</p>
                 <p class="number">{{ele.number}}条问答</p>
               </div>
           </li>
         </ul>
         </mt-loadmore>
       </div>
      </my-content>

  </div>
</template>
<script>
  import ClassHeader from './ClassHeader'
  export default {
    name: "goodsListDetail",
    data: function data() {
      return {
        searchMsg:'',
        allLoaded: false,
        goodsDetailList:[]
      }
    },
    mounted() {
      this.loadTop()
    },
    methods: {
      loadTop(){
        this.$http.get('/static/mock/goodsDetailList.json')
        .then((res)=>{
          // console.log(res.body.thridCategory)
          this.goodsDetailList = res.body.thridCategory
          this.searchMsg = res.body.name
        })
        this.allLoaded = false;
        this.$refs.loadmore.onTopLoaded('111',1000)
      },
      loadBottom(){
        this.$http.get('/static/mock/goodsDetailListMore.json')
        .then((res)=>{
          this.goodsDetailList = this.goodsDetailList.concat(res.body.thridCategory)
        })
        this.allLoaded = true;// 若数据已全部获取完毕
        this.$refs.loadmore.onBottomLoaded('5555',1000);
      },
      gotoDetailMsg(){
        this.$router.push({
          name:'goodsDetail'
        })
      }
    },
    components: {
      'my-classheader':ClassHeader
    }
  }
</script>
<style scoped>
  li{
    list-style: none;
  }
  .sortWhy{
    width: 100%;border-bottom:1px solid #e6e6e6;height:45px;line-height: 45px
  }
  .sortWhy li{
    padding:0 18px;float: left;
  }
  .sellWhy{
      width: 100%;border-bottom:1px solid #e6e6e6;height:40px;display: flex;
      justify-content: space-around;align-items: center;
  }
  .sellWhy li{
    width: 20%;height:30px;background: #f9f9f9;line-height: 30px;
    border-radius:5px;font-size: 14px
  }
  .goodsListDetail{
    padding: 0;margin:0;font-size: 14px;float: left;width: 100%
  }
  .goodsListDetail li{
    width: 94%;overflow: hidden;border-bottom: 1px solid #e6e6e6;padding: 10px 3%
  }
  .goodsListDetail .goodsImg{
    width: 30%;float: left
  }
  .goodsListDetail .goodsImg img{
    width: 100%;
  }
  .goodsListDetail .goodsMsg{
    width: 65%;float: left;text-align:left;padding-left: 5%
  }
  .type{
    display: inline-block;width: 36px;text-align: center;line-height: 20px;
    background: #5dc3f1;color: #fff;border-radius: 3px;margin-right: 5px
  }
  .subtitle{
    border: 1px solid red;color: red;width: 36px;text-align: center;border-radius: 3px;margin: 8px 0
  }
  .price{
    color: #e72418;margin: 5px 0
  }
  .number{
    color: #b6b6b6;margin: 10px 0
  }
</style>

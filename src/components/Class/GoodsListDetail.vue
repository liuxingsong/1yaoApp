<template>
  <div id="goodsListDetail">
      <my-classheader :searchMsg="searchMsg" class="header">
        <span slot="right" class="iconfontlxs bayCar"><router-link :to="'/cart'">&#xe60e;</router-link></span>
      </my-classheader>
      <my-content classs="content iconfontlxs">
        <ul class="sortWhy">
          <li class="iconfontlxs">黄褐斑 &#xe604;</li>
          <li class="iconfontlxs">综合排序 &#xe604;</li>
          <li class="iconfontlxs">&#xe640; 列表</li>
          <li class="iconfontlxs">&#xe62d; 筛选</li>
        </ul>
        <ul class="sellWhy">
          <li>自营</li>
          <li class="iconfontlxs">促销 &#xe604;</li>
          <li class="iconfontlxs">品牌 &#xe604;</li>
          <li class="iconfontlxs">药品…&#xe604;</li>
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
      <div class="seek-track">
        <div class="seek">
          <span class="iconfontlxs">&#xe698;</span>
          <p>咨询</p>
        </div>
        <div class="track">
          <span class="iconfontlxs">&#xe636;</span>
          <p>足迹</p>
        </div>
      </div>
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
        this.$router.push({name:'goodsDetail'})
      }
    },
    components: {
      'my-classheader':ClassHeader
    }
  }
</script>
<style scoped>
  li{list-style: none;}
  .header .bayCar{font-size: 24px}
  .sortWhy{width: 100%;border-bottom:1px solid #e6e6e6;height:45px;line-height: 45px}
  .sortWhy li{padding:0 16px;float: left;font-size: 15px}
  .sellWhy{width:100%;border-bottom:1px solid #e6e6e6;height:40px;display: flex;justify-content: space-around;align-items: center;}
  .sellWhy li{width: 20%;height:30px;background: #f9f9f9;color: #000;line-height: 30px; border-radius:5px;font-size: 14px}
  .goodsListDetail{padding: 0;margin:0;font-size: 14px;float: left;width: 100%}
  .goodsListDetail li{width: 94%;overflow: hidden;border-bottom: 1px solid #e6e6e6;padding: 10px 3%}
  .goodsListDetail .goodsImg{width: 30%;float: left}
  .goodsListDetail .goodsImg img{width: 100%;}
  .goodsListDetail .goodsMsg{width: 65%;float: left;text-align:left;padding-left: 5%}
  .type{display: inline-block;width: 36px;text-align: center;line-height: 20px;
    background: #5dc3f1;color: #fff;border-radius: 3px;margin-right: 5px}
  .subtitle{border: 1px solid red;color: red;width: 36px;text-align: center;border-radius: 3px;margin: 8px 0}
  .price{color: #e72418;margin: 5px 0}
  .number{color: #b6b6b6;margin: 10px 0}
  .seek-track{position: fixed;right: 20px;bottom: 30px;color: #000}
  .seek-track div{width: 40px;height:35px;border-radius: 50%;border: 1px solid #999;line-height: 15px;padding-top: 5px;margin-top: 5px}
  .seek-track div p{font-size: 9px}
  @font-face {
    font-family: 'iconfontlxs';  /* project id 338449 */
    src: url('//at.alicdn.com/t/font_qevtd960osqncdi.eot');
    src: url('//at.alicdn.com/t/font_qevtd960osqncdi.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_qevtd960osqncdi.woff') format('woff'),
    url('//at.alicdn.com/t/font_qevtd960osqncdi.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_qevtd960osqncdi.svg#iconfont') format('svg');
  }
  .iconfontlxs{
      font-family:"iconfontlxs" !important;
      font-size:16px;font-style:normal;
      -webkit-font-smoothing: antialiased;
      -webkit-text-stroke-width: 0.2px;
      -moz-osx-font-smoothing: grayscale;}
</style>

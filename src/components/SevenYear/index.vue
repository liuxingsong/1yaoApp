<template>
  <div id="sevenYear">
    <my-sy-heder id="header" class="header">
      <div id="middle" slot="middle">
        <a class="active">商品</a>
        <span class="iconfontlxs shareicon">&#xe60f;</span>
      </div>
    </my-sy-heder>
    <my-content classs="content" @click="gotop()">
      <img :src="sevenYearData.img01" alt="" class="bigImg" >
      <img :src="sevenYearData.img02" alt="" class="bigImg">
      <img :src="sevenYearData.img03" alt="" class="bigImg">
      <ul class="typeTitle">
        <li v-for="(ele,index) in sevenYearData.title" :key="index">
          <router-link :to="'#'">{{ele}}</router-link>
        </li>
      </ul>
      <div class="goodsMsgList" v-for="(ele,index) in sevenYearData.data" :key="index">
        <img :src="ele.img" alt="" class="titImg">
        <ul>
          <li v-for="(el,ind) in ele.goodsMsg" :key="ind">
            <router-link :to="'/goodsDetail'">
              <img :src="el.img" alt="">
              <span>{{el.name}}</span>
              <p>￥ {{el.price}}</p>
            </router-link>
          </li>
        </ul>
      </div>
      <img :src="sevenYearData.img10" alt="" class="bigImg">
      <img :src="sevenYearData.img11" alt="" class="bigImg">
    </my-content>
    <div class="timeBack">
      {{hour}} : {{minute}} : {{second}}
    </div>
  </div>
</template>
<!-- <img :src="sevenYearData.img01" alt="" class="bigImg">
<img :src="sevenYearData.img02" alt="" class="bigImg">
<img :src="sevenYearData.img03" alt="" class="bigImg">
<mt-navbar v-model="selected" class="typeTitle">
  <ul>
    <li v-for="(ele,index) in sevenYearData.title" :key="index">
      <mt-tab-item :id="index">
        <router-link :to="'#'">{{ele}}</router-link>
      </mt-tab-item>
    </li>
  </ul>
</mt-navbar>

<mt-tab-container v-model="selected" class="goodsMsgList">
  <ul>
    <li v-for="(ele,index) in sevenYearData.data" :key="index">
      <img :src="ele.img" alt="" class="titImg">
      <mt-tab-container-item :id="index">
          <mt-cell v-for="(el,ind) in ele.goodsMsg" :key="ind" class="agoods">
            <router-link :to="'/goodsDetail'">
              <img :src="el.img" alt="">
              <span>{{el.name}}</span>
              <p>￥ {{el.price}}</p>
            </router-link>
          </mt-cell>
      </mt-tab-container-item>
    </li>
  </ul>
</mt-tab-container>
<img :src="sevenYearData.img10" alt="" class="bigImg">
<img :src="sevenYearData.img11" alt="" class="bigImg"> -->
<script>
  import ClassHeader from '../Class/ClassHeader'
  export default {
    name: "sevenYear",
    data: function data() {
      return {
        selected:"0",
        sevenYearData:[],
        hour:"00",
        minute:"00",
        second:"00"
      }
    },
    methods: {
      timeBack() {
        var time = new Date().getTime()
        var time2 = new Date("2017/07/02").getTime()
        var hour = parseInt((time2-time)/1000/60/60)
        this.hour = hour>9?hour:"0"+hour
        var minute = Math.floor(((time2-time)/1000/60/60-hour)*60)
        this.minute = minute>9?minute:"0"+minute
        var second = Math.floor((time2-time)/1000-hour*3600-minute*60)
        this.second = second>9?second:"0"+second
      }
    },
    mounted () {
      setInterval(this.timeBack,1000)

      //do something after mounting vue instance
      this.$http.get("/static/mock/sevenYear.json")
      .then((res)=>{
        console.log(res.body);
        this.sevenYearData = res.body
      })

    },
    components: {
      "my-sy-heder":ClassHeader
    }
}
</script>
<style scoped>
  #sevenYear .header{background: #f9f9f9 }
  .content{width: 100%;background: #ffc097}
  .content .bigImg{width: 100%;float: left;}
 .header .shareicon{float: right;font-size: 26px;margin-top: 3px}
 .typeTitle{height: 50px;line-height: 50px;background:#07e69f;width: 100%;
   overflow-x: auto;;white-space:nowrap;float: left;clear: both;}
 .typeTitle li{height: 40px;line-height: 40px;display:inline-block; font-size:18px; padding:0 10px;}
 .typeTitle a{color: #000;border: none}
 .router-link-exact-active{color: #fff;border-bottom: 1px solid #fff;padding-bottom: 5px}
 .goodsMsgList{width: 100%}
 .goodsMsgList .titImg{width: 100%}
 .goodsMsgList ul{width: 100%;overflow: hidden;}
 .goodsMsgList li{width:30%;height:200px;padding-top: 10px;float: left;background-color: #fff;margin: 10px 0 0 2.5%;
   border-bottom: 0;}
 .goodsMsgList li img{width: 80%;margin: 20 auto;}
 .goodsMsgList li span{display: block;text-align: left;height:40px ;font-size: 12px;padding: 10px 10px;color: #000}
 .goodsMsgList li p{text-align: left;color: red;padding: 10px 10px}
  @font-face {font-family: 'iconfontlxs';  /* project id 338449 */
    src: url('//at.alicdn.com/t/font_qevtd960osqncdi.eot');
    src: url('//at.alicdn.com/t/font_qevtd960osqncdi.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_qevtd960osqncdi.woff') format('woff'),
    url('//at.alicdn.com/t/font_qevtd960osqncdi.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_qevtd960osqncdi.svg#iconfont') format('svg');}
  .iconfontlxs{font-family:"iconfontlxs" !important;
      font-size:16px;font-style:normal;
      -webkit-font-smoothing: antialiased;
      -webkit-text-stroke-width: 0.2px;
      -moz-osx-font-smoothing: grayscale;}

  .timeBack{width: 200px;height: 50px;line-height: 50px;position: fixed;top: 55px;left:20px;background: #f9f9f9}
</style>

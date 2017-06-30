<template>
  <div class="man">
    <my-header :title="title">
      <div slot="right">更多</div>
    </my-header>
    <my-content>
      <div>
          <img class="man-banner" src="http://p4.maiyaole.com/img/cmsPage/2016d004f2ff1227132949/nanxing_00.jpg" alt="">
          <div class="man-nav">
              <div class="man-nav-list"> 
                <a class="man-nav-lists" href="https://m.111.com.cn/cmsPage/2016012842/index.html"> <img src="//p4.maiyaole.com/img/cmsPage/2016d004f2ff1227132949/nanxing_01.jpg" /> </a> 
                <a class="man-nav-lists" href="//m.111.com.cn/cmsPage/20172f8dc9cd0116135322/index.html"> <img src="//p3.maiyaole.com/img/cmsPage/2016d004f2ff1227132949/nanxing_02.jpg" /> </a> 
                <a class="man-nav-lists" href="https://m.111.com.cn/cmsPage/2016060702/index.html"> <img src="//p2.maiyaole.com/img/cmsPage/2016d004f2ff1227132949/nanxing_03.jpg" /> </a> 
              </div>
              <div class="man-nav-list"> 
                <a class="man-nav-lists" href="https://m.111.com.cn/cmsPage/2016080205/index.html"> <img src="//p2.maiyaole.com/img/cmsPage/2016d004f2ff1227132949/nanxing_04.jpg" /> </a> 
                <a class="man-nav-lists" href="https://m.111.com.cn/cmsPage/2016080203/index.html"> <img src="//p1.maiyaole.com/img/cmsPage/2016d004f2ff1227132949/nanxing_05.jpg" /> </a> 
                <a class="man-nav-lists" href="https://m.111.com.cn/cmsPage/2016080102/index.html"> <img src="//p3.maiyaole.com/img/cmsPage/2016d004f2ff1227132949/nanxing_06.jpg" /> </a> 
              </div>     
              <div class="man-nav-list"> 
                <a class="man-nav-lists" href="https://www.111.com.cn/cmsPage/2016080239/index.html"> <img src="//p3.maiyaole.com/img/cmsPage/2016d004f2ff1227132949/nanxing_07.jpg" /> </a> 
                <a class="man-nav-lists" href="https://m.111.com.cn/cmsPage/2016080209/index.html"> <img src="//p3.maiyaole.com/img/cmsPage/2016d004f2ff1227132949/nanxing_08.jpg" /> </a> 
                <a class="man-nav-lists" href="https://m.111.com.cn/cmsPage/2016072923/index.html"> <img src="//p1.maiyaole.com/img/cmsPage/2016d004f2ff1227132949/nanxing_09.jpg" /> </a> 
              </div>                      
          </div>
          <h3>尖峰时刻</h3>
          <ul class="man-list">
            <li class="man-list-data" v-for="(ele,index) in listData" :key="index">
            <img :src="ele.itemInfo.mainimg3" >
            <p class="man-list-text">{{ele.flashSaleProductName}}</p>
            <p class="man-list-price">¥{{ele.promotionPrice}}</p>
            <a class="man-list-buy" href="javascript:;">购买</a>
            </li>
          </ul>    
      </div>    
    </my-content>

  </div>
</template>

<script>

export default {
  name: 'man',
  data () {
    return {
      title:"男性专场",
      listData:[]
    }
  },
  mounted(){
    this.$http.get("http://m.111.com.cn/promotion/getrobTomorrowData.action?callback=&_=1498707092911")
    .then(res=>res.json())
    .then((data)=>{
      this.listData = data.jsonData.tomorrow
    })

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.man{background-color:#f3f3f3;}
.man-banner{width:100%;}

.man-nav-lists{display:inline-block;width:32%;font-size:0;}
.man-nav-lists img{width:100%;}

h3{line-height:45px;background-color:white;}

.man-list{padding-top:10px;padding-left:12px;overflow:hidden;}
.man-list-data{width:46%;height:260px;background-color:white;float:left;
margin-right:4%;margin-bottom:10px;position:relative;}
.man-list-data img{width:80%;}
.man-list-price{position:absolute;bottom:10px;color:red;padding-left:20px;font-size:18px;
line-height:26px;}
.man-list-text{margin-top:10px;font-size:14px;}
.man-list-buy{display:inline-block;line-height:26px;width:60px;position:absolute;
bottom:10px;right:10px;text-align:center;background-color:red;color:white;}
</style>
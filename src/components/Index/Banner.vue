

<template>
  <div class="index-banner">
    <div class="index-swiper">
      <mt-swipe :auto="4000">
        <mt-swipe-item>
          <img src="http://p3.maiyaole.com/img/cmsPage/2016070402/zhongxiyao0626.jpg" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="http://p3.maiyaole.com/img/cmsPage/2016070402/zhongxiyao0623.jpg" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="http://p3.maiyaole.com/img/cmsPage/2016070402/3zhongxiyao0626.jpg" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="http://p2.maiyaole.com/img/cmsPage/2016070402/huishi0620.jpg" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="http://p1.maiyaole.com/img/cmsPage/2016070402/yinxing0624.jpg" alt="">
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="index-nav-box">
      <ul>
        <li>
          <img src="http://p3.maiyaole.com/img/cmsPage/2016070402/qingsong11.png" alt="">
          <p>轻松找药</p>
        </li>
        <li>
          <img src="http://p3.maiyaole.com/img/cmsPage/2016070402/nanke%20(1).png" alt="">
          <p>男性</p>
        </li>
        <li>
          <img src="http://p1.maiyaole.com/img/cmsPage/2016070402/fukeicon.png" alt="">
          <p>女性</p>
        </li>
        <li>
          <img src="http://p4.maiyaole.com/img/cmsPage/2016070402/wo-0815.png" alt="">
          <p>我的</p>
        </li>
      </ul>
      <ul>
        <li>
          <img src="http://p1.maiyaole.com/img/cmsPage/2016070402/manxingbing.png" alt="">
          <p>慢病</p>
        </li>
        <li>
          <img src="http://p1.maiyaole.com/img/cmsPage/2016070402/zibuicon.png" alt="">
          <p>滋补调养</p>
        </li>
        <li>
          <img src="http://p1.maiyaole.com/img/cmsPage/2016070402/lianxian.png" alt="">
          <p>连线名医</p>
        </li>
        <li>
          <img src="http://p4.maiyaole.com/img/cmsPage/2016070402/fenleiicon.png" alt="">
          <p>分类</p>
        </li>
      </ul>        
    </div>
    <div class="index-notice">
      这里有通知
    </div>
  </div>
</template>
<script>
  export default {
    name: 'lh-banner',
    props: {
      bannerData:{
        type:Array,
        default(){
          return []
        }
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .index-swiper{height:140px;background:white;}
  .index-swiper img{width:100%;height:100%;}

  .index-nav-box {height:140px;padding:10px 0;font-size:14px;border-bottom:1px solid #ccc;background:white;}
  .index-nav-box ul{display:flex;}  
  .index-nav-box ul li{flex:1;height:70px;}
  .index-nav-box li img{width:45%;}

  .index-notice{padding:6px 10px;border-top:1px solid #ccc;
  border-bottom:1px solid #ccc;line-height:30px;margin:8px 0;background:white;}

</style>

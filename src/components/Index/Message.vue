<template>
  <div class="message">
    <my-header :title="title">
      <div slot="right">更多</div>
    </my-header>
    <div>
      <div class="showImgDIv"> 
          <img src="http://p1.maiyaole.com/img/cmsPage/2017425a64f90510151606/huiren20170519_app_01.jpg" class="cms_main_img"  /> 
      </div> 
      <div class="showImgDIv"> 
          <img src="http://p3.maiyaole.com/img/cmsPage/2017425a64f90510151606/huiren20170519_app_02.jpg" class="cms_main_img" onclick="window.open('http://m.111.com.cn/product/7732881.html')" /> 
      </div> 
      <div class="showImgDIv"> 
          <img src="http://p3.maiyaole.com/img/cmsPage/2017425a64f90510151606/huiren20170519_app_03.jpg" class="cms_main_img"  /> 
      </div> 
      <div class="showImgDIv"> 
          <img src="http://p4.maiyaole.com/img/cmsPage/2017425a64f90510151606/huiren20170519_app_04.jpg" class="cms_main_img" onclick="window.open('http://m.111.com.cn/product/972542.html')" /> 
      </div> 
      <div class="showImgDIv"> 
          <img src="http://p3.maiyaole.com/img/cmsPage/2017425a64f90510151606/huiren20170519_app_05.jpg" class="cms_main_img"  /> 
      </div> 
      <div class="showImgDIv"> 
          <img src="http://p3.maiyaole.com/img/cmsPage/2017425a64f90510151606/huiren20170519_app_06.jpg" class="cms_main_img" onclick="window.open('http://m.111.com.cn/product/50707045.html')" /> 
      </div> 
      <div class="showImgDIv"> 
          <img src="http://p1.maiyaole.com/img/cmsPage/2017425a64f90510151606/huiren20170519_app_07.jpg" class="cms_main_img"  /> 
      </div> 
      <div class="showImgDIv"> 
          <img src="http://p4.maiyaole.com/img/cmsPage/2017425a64f90510151606/huiren20170519_app_09.jpg" class="cms_main_img"  /> 
      </div> 
      <div class="showImgDIv"> 
          <img src="http://p3.maiyaole.com/img/cmsPage/2017425a64f90510151606/huiren20170519_app_10.jpg" class="cms_main_img"  /> 
      </div> 
      <div class="showImgDIv"> 
          <img src="http://p3.maiyaole.com/img/cmsPage/2017425a64f90510151606/huiren20170519_app_11.jpg" class="cms_main_img"  /> 
      </div> 
      <div class="showImgDIv"> 
          <img src="http://p4.maiyaole.com/img/cmsPage/2017425a64f90510151606/huiren20170519_app_12.jpg" class="cms_main_img"  /> 
      </div> 
      <div class="showImgDIv"> 
          <img src="http://p3.maiyaole.com/img/cmsPage/2017425a64f90510151606/huiren20170519_app_13.jpg" class="cms_main_img"  /> 
      </div> 
      <div class="showImgDIv"> 
          <img src="http://p4.maiyaole.com/img/cmsPage/2017425a64f90510151606/huiren20170519_app_14.jpg" class="cms_main_img"  /> 
      </div>    
    </div>
  </div>
</template>

<script>

export default {
  name: 'message',
  data () {
    return {
      title:"中西药品"
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.showImgDIv img{width:100%;}


</style>

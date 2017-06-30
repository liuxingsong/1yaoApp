<template>
  <div class="family">
    <my-header :title="title">
      <div slot="right">更多</div>
    </my-header>
    <my-content>
      <div class="family-index">
        <img src="http://p2.maiyaole.com/img/cmsPage/2015070701/01.png" alt="">
        <div>
          <img class="img1" src="http://p2.maiyaole.com/img/cmsPage/2015070701/04.png" alt="">
          <div class="text1">
            <img class="img" src="http://p2.maiyaole.com/img/cmsPage/2015070701/06.png" alt="">
            <div>
              <img class="img2" src="http://p2.maiyaole.com/img/cmsPage/2015070701/09.png" alt="">
              <img class="img3" src="http://p2.maiyaole.com/img/cmsPage/2015070701/11.png" alt="">
            </div>
          </div>
        </div>
        <img src="http://p2.maiyaole.com/img/cmsPage/2015070701/16.png" alt="">
        <div class="text4">
          <img class="img4" src="http://p2.maiyaole.com/img/cmsPage/2015070701/20.png" alt="">
          <div class="text2">
            <img class="img" src="http://p2.maiyaole.com/img/cmsPage/2015070701/18.png" alt="">
            <img class="img" src="http://p2.maiyaole.com/img/cmsPage/2015070701/22.png" alt="">
          </div>
        </div>
        <div class="text3">
          <img class="img5" src="http://p2.maiyaole.com/img/cmsPage/2015070701/25.png" alt="">
          <img class="img5" src="http://p2.maiyaole.com/img/cmsPage/2015070701/27.png" alt="">
          <img class="img5" src="http://p2.maiyaole.com/img/cmsPage/2015070701/29.png" alt="">
        </div>
      </div>    
    </my-content>

  </div>
</template>

<script>

export default {
  name: 'family',
  data () {
    return {
      title:"家庭小药箱"
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.family{background-color:#f3f3f3;}
.family-index{font-size:0;}
.family img{width:100%;}
.family .img1{width:50%;float:left;display:block;}
.family .text1{float:right;width:50%;overflow:hidden;}
.family .img2{width:49%;float:left;}
.family .img3{width:46%;float:right;margin-right:2%;}
.family .text2{float:left;width:50%;overflow:hidden;}
.family .img4{width:49%;float:right;}
.family .text4{overflow:hidden;}
.family .img5{width:33%;display:inline-block;}
</style>
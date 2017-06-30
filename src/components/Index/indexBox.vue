

<template>
  <div class="index-box">
    <div class="index-promotion-goods">
      <router-link to="/together">
        <img src="http://p3.maiyaole.com/img/cmsPage/2015092201/1qiqiang0519.jpg" alt="">
      </router-link>
      <a href="javascript: return 0;">
        <img src="http://p1.maiyaole.com/img/cmsPage/2015092201/manbing0519%20%282%29.jpg" alt="">
      </a>
      <a href="#/family">
        <img src="http://p3.maiyaole.com/img/cmsPage/2015092201/xiaoyaox0519.jpg" alt="">
      </a>
      <a href="javascript: return 0;">
        <img src="http://p1.maiyaole.com/img/cmsPage/2016070402/h5kouchao0118.jpg" alt="">
      </a>
    </div>
    <div class="index-main">
      <div class="index-main-box" v-for="(ele,index) in classData" :key="index" >
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1498543897676&di=dfb29246d4ff7fc3939f0d2ca108dd89&imgtype=0&src=http%3A%2F%2Fwww.84ju.com%2Fstatic%2Fupload%2F2014%2F0728%2F14065203728389.jpg" alt="">
        <ul>
          <li v-for="(data,id) in ele.thridCategory" :key="id" >
            <img :src="data.icon" alt="">
            <p>{{data.name}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'lh-box',
    data () {
      return {
        classData:[]
      }
    },
    mounted(){
      this.$http.get("http://s.maiyaole.com/js/wap/json/getsecondcategory_99.json")
      .then(res=>{
        this.classData = res.data.data.categoryinfo
      })
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .index-promotion-goods{height:180px;}
  .index-promotion-goods a{float:left;width:50%;height:90px;border:1px solid #ccc;box-sizing:border-box;}
  .index-promotion-goods a img{width:100%;height:100%;}

  .index-main-box{margin-top:20px;margin-bottom:20px;}
  .index-main-box img{width:100%;}
  .index-main-box ul{overflow:scroll;white-space:nowrap;}
  .index-main-box ul li{display:inline-block;width:21%;margin:8px 2%;font-size:12px;}
  .index-main-box li img{width:100%;}

</style>

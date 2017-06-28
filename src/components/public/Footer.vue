<template id="">
  <div class="footer">
    <ul>
      <li v-for="(ele,index) in listData" :key="index"><router-link :to="ele.path">{{ele.gotoPage}}</router-link></li>
    </ul>
  </div>
</template>
<script >
  export default{
    name:'my-footer',
    data(){
      return {
        'listData':[
          {path:'/index',gotoPage:'首页'},
          {path:'/class',gotoPage:'分类'},
          {path:'/sevenYear',gotoPage:'周年庆'},
          {path:'/cart',gotoPage:'购物车'},
          {path:'/mine',gotoPage:'我的'}
        ]
      }
    }
  }
</script>
<style media="screen">
    .footer{
      position: fixed;bottom: 0;left: 0;height: 50px;line-height: 50px;
      border-top: 1px solid #999;width: 100%;background: #fff;z-index: 10
    }
    .footer ul li{
      float: left;list-style: none;width: 20%;text-align: center;

    }
</style>

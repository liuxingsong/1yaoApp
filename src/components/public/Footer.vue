<template id="">
  <div class="footer">
    <ul >
      <li>
        <router-link :to="'/index'"><span class="iconfontlxs">&#xe687;</span><p>首页</p></router-link>
      </li>
      <li>
        <router-link :to="'/class'"><span class="iconfontlxs">&#xe621;</span><p>分类</p></router-link>
      </li>
      <li>
        <router-link :to="'/sevenYear'"><span class="iconfontlxs">&#xe697;</span></router-link>
      </li>
      <li>
        <router-link :to="'/cart'"><span class="iconfontlxs">&#xe6b3;</span><p>购物车</p></router-link>
      </li>
      <li>
        <router-link :to="'/mine'"><span class="iconfontlxs">&#xe612;</span><p>我的</p></router-link>
      </li>
    </ul>

  </div>
</template>
<script >
  export default{
    name:'my-footer',
    data(){
      return {
      }
    }
  }
</script>
<style media="screen" scoped>
    a{color: #000;}
    .footer{
      position: fixed;bottom: 0;left: 0;height: 50px;
      border-top: 1px solid #999;width: 100%;background: rgba(245,245,245,.9);z-index: 10
    }
    .footer ul li{
      float: left;list-style: none;width: 20%;text-align: center;padding-top: 3px
    }
    .footer ul li:nth-of-type(3){
      position: relative;
    }
    .footer ul li:nth-of-type(3) .iconfontlxs{
      font-size: 50px;color: red;position: absolute;top: -10px;left: 6px;border: 4px solid #fff;background: #fff;
      border-radius: 50%
    }
    .footerRouter{
      color: #000
    }
    .footerRouter span{
      font-size: 20px;
    }
    .footerRouter p{
      line-height: 20px;font-size: 14px
    }
    .router-link-exact-active{color: red}
    @font-face {
      font-family: 'iconfontlxs';  /* project id 338449 */
      src: url('//at.alicdn.com/t/font_0ee4cg3eoxqrggb9.eot');
      src: url('//at.alicdn.com/t/font_0ee4cg3eoxqrggb9.eot?#iefix') format('embedded-opentype'),
      url('//at.alicdn.com/t/font_0ee4cg3eoxqrggb9.woff') format('woff'),
      url('//at.alicdn.com/t/font_0ee4cg3eoxqrggb9.ttf') format('truetype'),
      url('//at.alicdn.com/t/font_0ee4cg3eoxqrggb9.svg#iconfont') format('svg');
    }
    .iconfontlxs{font-family:"iconfontlxs" !important;
        font-size:16px;font-style:normal;
        -webkit-font-smoothing: antialiased;
        -webkit-text-stroke-width: 0.2px;
        -moz-osx-font-smoothing: grayscale;}
</style>

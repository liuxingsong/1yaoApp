<template>
  <div class="header">
    <span class="left">
      <slot name="left" >
        <a href="javascript:history.go(-1);" class="iconfontlxs">&#xe62c;</a>
      </slot>
    </span>
    <div class="search">
      <slot name="middle">
        <span class="iconfontlxs searchicon">&#xe6f7;</span>
        <input type="text" name="" :placeholder="searchMsg" >
      </slot>
    </div>
    <span class="right iconfontlxs" @click="show = !show">
      <slot name="right">&#xe7b2;
        <transition name="fade">
          <ul v-show="show" class="showNav">
              <li>
                <router-link :to="'/index'"><span class="iconfontlxs">&#xe687;</span><span>首页</span></router-link>
              </li>
              <li>
                <router-link :to="'/class'"><span class="iconfontlxs">&#xe621;</span><span>分类</span></router-link>
              </li>
              <li>
                <router-link :to="'/cart'"><span class="iconfontlxs">&#xe6b3;</span><span>购物车</span></router-link>
              </li>
              <li>
                <router-link :to="'/mine'"><span class="iconfontlxs">&#xe612;</span><span>我的</span></router-link>
              </li>
          </ul>
        </transition>
      </slot>
    </span>
  </div>
</template>

<script>
  export default{
    name:'my-header',
    data(){
      return {
        show:false
      }
    },
    props: {
      searchMsg:{
        type:String,
        default:""
      }
    }
  }
</script>
<style scoped>
  .iconfontlxs{color: #999}
  a{ text-decoration: none;color: #999}
  .header{height: 44px;width: 100%;position: fixed;top: 0;left: 0;color: #000;
    border-bottom: 1px solid #e6e6e6;text-align: center;display:
    flex;background: #fff;z-index: 10;display: flex;align-items:center}
  .left,.right{  display: block;width: 12%;text-align: center}
  .header  .right{font-size: 28px}
  .search{flex: 1;background:#f9f9f9;border-radius:15px;height:35PX;line-height:30px;overflow: hidden;}
  .searchicon{display: inline-block;margin: 3px 5px 0 0}
  .search input{width: 80%;height: 90%; border: none;background: #f9f9f9;outline:none;}
  .showNav{width: 100px ;background: #f9f9f9;border: 1px solid #e6e6e6;position: fixed;
  top: 50px ;right: 5px}
  .showNav li{line-height: 28px;font-size: 14px;border-bottom: 1px solid #e6e6e6;text-align: left;}
  .showNav li span{display: inline-block;margin-left: 10px;color: #000}
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to {
    opacity: 0
  }
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

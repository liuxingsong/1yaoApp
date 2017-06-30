

<template>
  <div class="lh-header">
    <div class="left">
      <a href="javascript:;">
        <span class="iconfont">
          &#xe631;
        </span>
        <p>扫一扫</p>      
      </a>
    </div>
    <div class="search">
      <span class="iconfont "></span>
      <input type="text" name="" :placeholder="searchMsg" >
    </div>
    <div class="right">
      <a href="javascript:;">
        <span class="iconfont">
          &#xe613;
        </span>
        <p>消息</p>
      </a>
    </div>

  </div>
</template>

<script>
  export default{
    name:'lh-header',
    props: {
      searchMsg:{
        type:String,
        default:"5555"
      }
    }
  }
</script>
<style scoped>
  a{
    text-decoration: none;color: #999
  }
  .lh-header{
    height: 44px;width: 100%;position: fixed;top: 0;left: 0;color: #000;
    border-bottom: 1px solid #e6e6e6;text-align: center;display:
    flex;background: #fff;z-index: 10;display: flex;align-items:center
  }
  .left,.right{
    display: block;width: 12%;text-align: center
  }
  .left,.right{
    font-size: 18px;font-weight: 700;color: #999;
  }
  .left p,.right p{
    font-size:12px;
  }

  .search{
    flex: 1;background:#e6e6e6;border-radius:15px;height:30PX;line-height:30px;overflow: hidden;
  }
  .search input{
    width: 80%;height: 90%; border: none;background: #e6e6e6;outline:none;
  }

  @font-face {
    font-family: 'iconfont';  /* project id 337892 */ 
    src: url('//at.alicdn.com/t/font_pp7b61121d78pvi.eot');
    src: url('//at.alicdn.com/t/font_pp7b61121d78pvi.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_pp7b61121d78pvi.woff') format('woff'),
    url('//at.alicdn.com/t/font_pp7b61121d78pvi.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_pp7b61121d78pvi.svg#iconfont') format('svg');
  }

  .iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;}

</style>
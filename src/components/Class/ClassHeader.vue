<template>
  <div class="header">
    <span class="left">
      <slot name="left" >
        <a href="javascript:history.go(-1);"><</a>
      </slot>
    </span>
    <div class="search">
      <slot name="middle">
        <span class="iconfont "></span>
        <input type="text" name="" :placeholder="searchMsg" >
      </slot>
    </div>
    <span class="right">
      <slot name="right" >...</slot>
    </span>
  </div>
</template>

<script>
  export default{
    name:'my-header',
    props: {
      searchMsg:{
        type:String,
        default:""
      }
    }
  }
</script>
<style scoped>
  a{
    text-decoration: none;color: #999
  }
  .header{
    height: 44px;width: 100%;position: fixed;top: 0;left: 0;color: #000;
    border-bottom: 1px solid #e6e6e6;text-align: center;display:
    flex;background: #fff;z-index: 10;display: flex;align-items:center
  }
  .left,.right{
    display: block;width: 12%;text-align: center
  }
  .right{
    font-size: 18px;font-weight: 700;color: #999;margin-bottom: 10px
  }
  .search{
    flex: 1;background:#f9f9f9;border-radius:15px;height:30PX;line-height:30px;overflow: hidden;
  }
  .search input{
    width: 80%;height: 90%; border: none;background: #f9f9f9;outline:none;
  }

</style>

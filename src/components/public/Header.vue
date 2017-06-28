<template>
  <div class="header">
    <span>
      <slot name="left">
        <a href="javascript:history.go(-1);"><</a>
      </slot>
    </span>
    <h3>{{title}}</h3>
    <span><slot name="right">菜单</slot></span>
  </div>
</template>

<script >
  export default{
    name:'my-header',
    props: {
      title:{
        type:String,
        default:'头部'
      }
    }
  }
</script>
<style media="screen">
  *{
    margin: 0;
    padding:0
  }
  a{
    text-decoration: none;
  }
  .header{
    height: 44px;width: 100%;position: fixed;top: 0;left: 0;color: #000;
    line-height: 44px;border-bottom: 1px solid #e6e6e6;text-align: center;
    display: flex;background: #fff;z-index: 10
  }
  .header span{display: block;width: 20%;text-align: center;
  }
  .header h3{flex: 1
  }
</style>

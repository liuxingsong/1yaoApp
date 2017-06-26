<template>
  <div class="header">
    <span class="left">
      <slot name="left" >
        <a href="javascript:history.go(-1);"><</a>
      </slot>
    </span>
    <div class="search">

      <input type="text" name="" :placeholder="searchMsg" >
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
        default:"5555"
      }
    }
  }
</script>
<style scoped lang="sass">
  .header
    height: 44px;width: 100%;position: fixed;top: 0;left: 0;color: #000
    line-height: 44px;border-bottom: 1px solid #e6e6e6;text-align: center
    display: flex;background: #e6e6e6;z-index: 10;display: flex

  .left,.right
    display: block;width: 12%;text-align: center

  .search
    flex: 1;background:#999;border-radius:10px;height:30PX


</style>

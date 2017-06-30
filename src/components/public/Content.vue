<template>
  <div class="content">
    <slot></slot>
  </div>
</template>

<script>
  export default{
    name:'my-content',
    data () {
      return {
        msg:'AAAAAA'
      }
    }
  }
</script>
<style >
  *{
    margin: 0;
    padding:0
  }
  .header ~ .content { padding-top:45px;}
  .lh-header ~ .content { padding-top:45px;}
  .footer ~ .content { padding-bottom:50px;}
</style>

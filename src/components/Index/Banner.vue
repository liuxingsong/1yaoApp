

<template>
  <div class="banner-list">
      <ul>
        <li v-for="(ele,index) in bannerData" :key="index">
          <img v-if="index<4" :src="ele.goodsListImg" alt="5555">
        </li>
      </ul>
  </div>
</template>
<script>
import Banner from "./Banner"
  export default {
    name: 'banner-list',
    props: {
      bannerData:{
        type:Array,
        default(){
          return []
        }
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1{
    font-weight: normal;
  }

</style>

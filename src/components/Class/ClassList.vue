<template>
  <div class="class-nav-bar">
    <ul>
      <li v-for="(ele,index) in classData" :key="index" @click="getGoodsData(ele.id,index)"
      :class="{active:isA==index}">
        {{ele.name}}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "class-list",
  data(){
    return {
      isA: 0
    }
  },
  props: {
    classData:{
      type:Array,
      default(){
        return []
      }
    }
  },
  methods: {
    getGoodsData(id,index) {
      this.toggle(index)
      this.$emit("get-goods-data",id)
    },
    toggle (index) {
      this.isA = index;
    }
  }
}
</script>
<style>
.class-nav-bar{
  width: 20%;
  float: left;
  position: fixed;
  left: 0;
  top: 45px
}
.class-nav-bar ul{
  width: 100%;
}
.class-nav-bar ul li{
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background: #F8F8F8;
  border: 1px solid #E4E4E4;
  border-top: none;
  border-left: none;
  list-style: none
}
.class-nav-bar .active{
  color: #0695DB;
  background: #fff;
  border: none;
  border-left: 2px solid #0695DB;
  border-bottom: 1px solid #E4E4E4
}
</style>

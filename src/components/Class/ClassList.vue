<template>
  <div class="sub-header">
    <ul class="class-list">
      <li v-for="(ele,index) in classData" :key="index" @click="getGoodsData(ele.classID)">
        {{ele.className}}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "class-list",
  props: {
    classData:{
      type:Array,
      default(){
        return []
      }
    }
  },
  methods: {
    getGoodsData(id) {
      this.$emit("get-goods-data",id)
    }
  }
}
</script>
<style>
.sub-header{
  height: 40px;line-height: 40px;width: 100%;border-bottom: 1px solid #e6e6e6
}
.class-list{
  white-space: nowrap;overflow-x: auto;
}
.class-list li{
  list-style: none;
  display:inline-block; font-size:14px; padding:0 10px;
}
</style>

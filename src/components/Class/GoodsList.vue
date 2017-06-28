<template>
  <div class="goods-list" ref="goods-list">
    <ul>
      <li v-for="(ele,index) in goodsData" :key="index">
        <h4>{{ele.name}}</h4>
        <div class="" v-for="(el,ind) in ele.thridCategory" :key="ind" class="goodsMsg"
       @click="gotoDetail(el.id)">
          <img :src="el.icon" alt="1yao">
          <p>{{el.name}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  import IScroll from 'iscroll'
  // console.log(IScroll);
  export default {
    name: "goods-list",
    props: {
      goodsData:{
        type:Array,
        default(){
          return []
        }
      }
    },
    methods: {
      gotoDetail(id){
        this.$router.push({
          name:'goodsListDetail',
          params:{
            id:id
          }
        })
      }
    },
    mounted() {
      //do something after mounting vue instance
      this.myScroll = new IScroll(this.$refs["goods-list"],{
        scrollbars:true
      })
    },
    updated() {
      //do something after updating vue instance
      this.myScroll.refresh()
    }
  }
</script>
<style scoped>
  .goods-list{overflow: hidden;width: 80%;float:right}
  .goods-list ul li{width: 100%;overflow: hidden;}
  .goods-list ul li h4{font-size: 14px;line-height: 40px;text-align: left;color: #5e5e5e;font-weight:500;
  border-bottom: 1px solid #E4E4E4;margin: 0 10px}
  .goods-list .goodsMsg{width: 33%;float:left;overflow: hidden;padding:15px 0;}
  .goods-list .goodsMsg img{width: 70%;}
  .goods-list .goodsMsg p{font-size: 13px;color: #000}

</style>

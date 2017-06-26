

<template>
  <div class="list-page">
    <my-classheader>
    </my-classheader>
    <my-footer></my-footer>

    <my-content>
      <my-class-list :class-data="classData" @get-goods-data="getGoodsData"></my-class-list>
      <my-goods-list :goods-data="goodsData"></my-goods-list>
    </my-content>
  </div>
</template>

<script>
import GoodsList from './GoodsList'
import ClassList from './ClassList'
import ClassHeader from './ClassHeader'

export default {
  name: 'list-page',
  data(){
    return {
      goodsData:[],
      classData:[]
    }
  },
  components: {
    'my-class-list':ClassList,
    'my-goods-list':GoodsList,
    'my-classheader':ClassHeader
  },
  methods: {
    getGoodsData(id) {
      this.$http.jsonp("http://datainfo.duapp.com/shopdata/getGoods.php?classID="+id)
      .then((res)=>{
        // console.log(res.data);
        this.goodsData = res.data
      })
    }
  },
  mounted() {
    //do something after mounting vue instance
    this.$http.get("http://datainfo.duapp.com/shopdata/getclass.php")
    .then((res)=>{
      this.classData  = res.data
    })
    this.getGoodsData(0)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*.list-page{
  width: 100%;height: 100%;overflow: hidden;padding-bottom: 50px;
}*/

</style>

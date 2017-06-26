

<template>
  <div id="box">
    <my-footer></my-footer>
    <my-content>
        <my-cart-list :cart-data = "cartData" @change-msg = "changeMsg" ref="cart-list"></my-cart-list>
    </my-content>
  </div>
</template>

<script>
import CartList from './CartList'
export default {
  name: 'cart',
  data(){
    return {
      cartData: []
    }
  },
  components: {
    'my-cart-list':CartList
  },
  methods:{
    changeMsg(type,index){
      var num = this.cartData[index].number*1+type
      var id = this.cartData[index].goodsID
      if(type){
        this.$http.get(`http://datainfo.duapp.com/shopdata/updatecar.php?userID=tom666&goodsID=${id}&number=${num}`)
        .then((res)=>{
          this.cartData[index].number = num;
        })
      }else{
        this.$http.get(`http://datainfo.duapp.com/shopdata/updatecar.php?userID=tom666&goodsID=${id}&number=0`)
        .then((res)=>{
          // var el = this.$refs["cart-list"].$refs["item"+index][0] //li
          // el.className = "cart-item itemRemove";
          // el.addEventListener("animationend",()=>{
            //等动画结束以后，在删除
              this.cartData.splice(index,1,{})
          // })
        })
      }
    }
  },
  mounted(){
    this.$http.jsonp("http://datainfo.duapp.com/shopdata/getCar.php?userID=tom666")
    .then(res=>{
      if(res){
        // console.log(res);
        this.cartData=res.data
      }
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>

</style>

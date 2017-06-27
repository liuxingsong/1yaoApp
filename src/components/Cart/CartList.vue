<template>
  <div class="cartList">
    <ul>
      <li v-for="(data,index) in cartData"
      :ref="'item'+index"
      v-if="data.number"
      class="cart-item">
          <img :src="data.goodsListImg" alt=""/>
          <div class="detail">
            <span v-text="data.goodsName" ></span>
            <p>￥ {{data.price}}</p>
          </div>
          <div class="btns">
            <button class="remove" @click="changeMsg(0,index)">删除</button>

            <div class="addOrDown">
              <button @click="changeMsg(-1,index)">-</button>
              {{data.number}}
              <button @click="changeMsg(1,index)">+</button>
            </div>
          </div>
      </li>
    </ul>
    <div class="allPrice">
      总计：
    </div>
  </div>
</template>
<script >
export default {
  name: "my-cart-list",
  props:{
    cartData:{
      type:Array,
      default(){
        return []
      }
    }
  },
  methods: {
    changeMsg(type,index) {
        this.$emit("change-msg",type,index)
    }
  }

}
</script>
<style scoped>
  *{
    margin: 0;
    padding: 0
  }
  body{
    margin: 0;
    padding:0
  }
  h1{
    font-weight: normal;
  }
  .cartList{
    width: 100%;

  }
  .cartList ul{
    padding-left: 0
  }
  .cartList ul li{
    width: 90%;
    list-style: none;
    background: rgba(255, 0, 0, 0.1);
    padding: 10px 5%;
    display: flex;
    flex-direction: row;
  }
  .cartList ul li img{
    display:block;
    width: 30%;
    height: 150px;
    border-radius: 20%
  }
  .cartList ul li .detail{
    display: inline-block;
    width: 40%;
    padding: 20px 5%;
    position: relative;
  }
  .detail span{
    display: block;
    height: 50px;
  }
  .detail p{
    position: absolute;
    bottom: 3px;
    color: red;
    font-size: 18px
  }
  .allPrice{
    height: 35px;
    line-height: 35px;
    padding-left: 20px;
    background: #e6e6e6;
    width: 30%;
    line-height:
  }
  .btns{
    position: relative;

  }
  .remove{
    position: absolute;
    top: 20px;
    right: 0;
    width: 60px;
    height: 25px;
    line-height: 25px;
    text-align: center;
    background: rgba(255, 0, 15, 0.3);
    border: 0;
    border-radius: 8px;

  }
  .addOrDown{
    width: 70px;
    margin-top: 100px;
    background:#e6e6e6;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .addOrDown button{
    border: 0;
    width: 20px
  }
</style>

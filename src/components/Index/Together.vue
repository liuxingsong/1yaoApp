<template>
  <div class="together">
    <div class="Tg-header">
      <img src="http://s.maiyaole.com/subject/yiqiqiang/images/benqi.png"/>
      <div class="Tg-tomorrow">
        <p class="Tg-tomorrow-top">下期</p>
        <p class="Tg-tomorrow-bottom">即将开始</p>
      </div>
    </div>
    <div class="Tg-content">
      <div class="Tg-time">距离结束还有 
        <span>{{hour}}</span>：
        <span>{{minute}}</span>：
        <span>{{second}}</span>
      </div>
      <ul class="Tg-list">
        <li v-for="(ele,index) in listData" :key="index">
          <img class="Tg-list-img" :src="ele.itemInfo.mainimg3" alt="">
          <div class="Tg-list-text">
            <h2>{{ele.flashSaleProductName}}</h2>
            <p class="Tg-txt">{{ele.promotionalCopy}}</p>
            <p class="Tg-price">¥{{ele.promotionPrice}}.00</p>
            <a class="Tg-buy" href="javascript:;">限时抢购</a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'together',
  data () {
    return {
      hour:"00",
      minute:"00",
      second:"00",
      listData:[]
    }
  },
  methods:{
    getTime(){
      var time = new Date();
      this.hour = (23-time.getHours())>9?(23-time.getHours()):"0"+(23-time.getHours());
      this.minute = (60-time.getMinutes())>9?(60-time.getMinutes()):"0"+(60-time.getMinutes());
      this.second = (60-time.getSeconds())>9?(60-time.getSeconds()):"0"+(60-time.getSeconds());
    }
  },
  mounted(){
    setInterval(this.getTime,1000)
    this.$http.get("http://m.111.com.cn/promotion/getrobTodayData.action?callback=&_=1498789256556")
    .then(res=>res.json())
    .then((data)=>{
      this.listData = data.jsonData.today
      console.log(this.listData)
    })
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.Tg-header{height:60px;background-color:#2e373f;position:relative;}
.Tg-header img{width:36%;position:absolute;left:7%;}
.Tg-header .Tg-tomorrow{width:50%;float:right;color:#ccc;}
.Tg-header .Tg-tomorrow .Tg-tomorrow-top{height:26px;padding-top:12px;font-size:18px;}
.Tg-header .Tg-tomorrow .Tg-tomorrow-bottom{font-size:14px;}

.Tg-time{line-height:45px;font-size:14px;background-color:#f8f8f8;}
.Tg-time span{background-color:#666;color:white;padding:2px;border-radius:3px;}

.Tg-list li{padding:20px 10px;min-height:160px;box-sizing:border-box;}
.Tg-list .Tg-list-img{width:30%;float:left;}
.Tg-list .Tg-list-text{width:65%;float:right;text-align:left;position:relative;min-height:120px;}
.Tg-list h2{font-size:16px;font-weight:100;}
.Tg-price{position:absolute;bottom:10px;color:red;font-size:18px;
line-height:26px;}
.Tg-txt{margin-top:2px;font-size:10px;}
.Tg-buy{display:inline-block;line-height:34px;width:100px;position:absolute;
bottom:10px;right:10px;text-align:center;background-color:#ff6666;color:white;border-radius:4px;}
</style>
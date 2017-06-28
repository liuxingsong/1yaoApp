<template>
  <div class="index">
    <my-footer></my-footer>
    <lh-header></lh-header>
    <my-content>
      <lh-banner></lh-banner>
      <lh-box></lh-box>
    </my-content>
  </div>

</template>

<script>
import Header from "./header"
import Banner from "./Banner"
import IndexBox from "./indexBox"

export default {
  name: 'index',
  data () {
    return {
      classData:[]
    }
  },
  components:{
    "lh-header":Header,
    "lh-banner":Banner,
    "lh-box":IndexBox
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index{background:#f3f3f3;}


</style>

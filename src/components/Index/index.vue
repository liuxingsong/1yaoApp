<template>
  <div class="index">

     <my-footer></my-footer>
     <my-content>1111111</my-content>
  </div>

</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      selected: "1"
    }
  },
  methods: {
    fn1 () {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

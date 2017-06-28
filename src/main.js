// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import Vuex from 'vuex'
Vue.use(Vuex)

import Footer from './components/public/Footer'
import myHeader from './components/public/Header'
import Content from './components/public/Content'
import store from './store'

import "./assets/animate.css"

import MintUi from "mint-ui"
Vue.use(MintUi)




Vue.component("my-header",myHeader)
Vue.component("my-footer",Footer)
Vue.component("my-content",Content)


// var VueTouch = require('vue-touch') //引入vue-touch
// Vue.use(VueTouch, {name: 'v-touch'}) //使用vue-touch

Vue.config.productionTip = false
Vue.use(VueResource)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App
   }
})

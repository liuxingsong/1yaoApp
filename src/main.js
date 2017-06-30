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


import 'mint-ui/lib/style.css'


// import {Button} from "mint-ui"
// import { Header } from 'mint-ui';
// import { Tabbar, TabItem, Navbar } from 'mint-ui';
// import { TabContainer, TabContainerItem } from 'mint-ui';
// import { Loadmore } from 'mint-ui';
// import { Lazyload } from 'mint-ui';
// import { Swipe, SwipeItem } from 'mint-ui';
// import { Cell } from 'mint-ui';
// import { Popup } from 'mint-ui';
// import { Actionsheet } from 'mint-ui';
// import { Search } from 'mint-ui';
//
// Vue.component(Search.name, Search);
// Vue.component(Actionsheet.name, Actionsheet);
// Vue.component(Popup.name, Popup);
// Vue.component(Cell.name, Cell);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.use(Lazyload);
// Vue.component(Loadmore.name, Loadmore);
// Vue.component(TabContainer.name, TabContainer);
// Vue.component(TabContainerItem.name, TabContainerItem);
// Vue.component(Tabbar.name, Tabbar);
// Vue.component(Navbar.name, Navbar);
// Vue.component(TabItem.name, TabItem);
// Vue.component(Header.name, Header);
// Vue.component(Button.name,Button)



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

import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Class from '@/components/Class'
import Cart from '@/components/Cart'
import Mine from '@/components/Mine'
import SevenYear from '@/components/SevenYear'
import GoodsListDetail from '@/components/Class/GoodsListDetail'
import GoodsDetail from '@/components/Class/GoodsDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path:'/index',
      name:'index',
      component:Index
    },
    {
      path:'/class',
      name:'class',
      component:Class
    },
    {
      path:'/cart',
      name:'cart',
      component:Cart
    },
    {
      path:'/sevenYear',
      name:'sevenYear',
      component:SevenYear
    },
    {
      path:'/mine',
      name:'mine',
      component:Mine
    },
    {
      path:'/goodsListDetail/:id',
      name:'goodsListDetail',
      component:GoodsListDetail
    },
    {
      path:'/goodsDetail',
      name:'goodsDetail',
      component:GoodsDetail
    }
  ]
})

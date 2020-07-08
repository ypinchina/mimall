import Vue from 'vue'
import Router from 'vue-router' 
import Home from './pages/home'
import Index from './pages/index'
import Product from './pages/product'
import Detail from './pages/detail'
import OrderList from './pages/orderList'
import OrderPay from './pages/orderPay'
import OrderConfirm from './pages/orderConfirm'
import Cart from './pages/cart'
import Order from './pages/order'
import alipay from './pages/alipay'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect: '/index',
      children: [
        {
          name: 'index',
          path: '/index',
          component:Index
        }, {
          name: 'product',
          path: '/product/:id',
          component: Product
        }, {
          name: 'detail',
          path: '/detail/:id',
          component: Detail
        }
      ]
    }, {
      name: 'cart',
      path: '/cart',
      component: Cart
    }, {
      name: 'order',
      path: '/order',
      component: Order,
      children: [
        {
          name: 'order-confirm',
          path: '/confirm',
          component: OrderConfirm
        }, {
          name: 'list',
          path: '/orderList',
          component: OrderList
        }, {
          name: 'orderPay',
          path: '/orderPay',
          component: OrderPay
        }
      ]
    }, {
      name: 'alipay',
      path: '/alipay',
      component: alipay
    }
  ]
}) 
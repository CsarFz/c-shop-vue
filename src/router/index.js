import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Login from "../views/Login.vue";
import SignUp from "../views/SignUp.vue";
import Profile from "../views/Profile.vue";
import Products from "../views/Products.vue";
import DetailsProducts from "../views/DetailsProduct.vue";
import ShoppingCart from "../views/ShoppingCart.vue";
import Checkout from "../views/Checkout.vue";
import NotFound from "../views/NotFound.vue";

import Toasted from "vue-toasted";

Vue.use(Toasted, { iconPack : 'fontawesome' })
Vue.use(VueRouter)

const routes = [
  { path: "*", redirect: "/404" },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      guest: true
    }
  },
  {
    path: "/signup",
    name: "singup",
    component: SignUp,
    meta: {
      guest: true
    }
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
    meta: {
      guest: true
    }
  },
  {
    path: "/products",
    name: "products",
    component: Products,
    meta: {
      guest: true
    }
  },
  {
    path: "/products/:id",
    component: DetailsProducts,
    meta: {
      guest: true
    }
  },
  {
    path: "/cart",
    component: ShoppingCart,
    meta: {
      guest: true
    }
  },
  {
    path: "/checkout",
    component: Checkout,
    meta: {
      guest: true
    }
  },
  { path: '/404', component: NotFound } 
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

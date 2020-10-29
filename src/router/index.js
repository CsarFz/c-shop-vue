import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';

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

Vue.use(Toasted, {
  iconPack: 'fontawesome'
})
Vue.use(VueRouter)

const routes = [{
    path: "*",
    redirect: "/404"
  },
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
      auth: true
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
      auth: true
    }
  },
  {
    path: "/checkout",
    component: Checkout,
    meta: {
      auth: true
    }
  },
  {
    path: '/404',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.auth)) {
    if (!store.getters.isLoggedIn) {
      next({
        name: "login"
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router
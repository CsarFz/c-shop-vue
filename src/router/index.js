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
import Orders from "../views/Orders.vue";
import OrderDetails from "../components/OrderDetails.vue";
import Search from "../views/Search.vue";
import NotFound from "../views/NotFound.vue";

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
    name: "signup",
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
    component: Products
  },
  {
    path: "/products/:id",
    name: "product",
    component: DetailsProducts,
    props: true
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
    name: "checkout",
    component: Checkout,
    props: true,
    meta: {
      auth: true
    }
  },
  {
    path: "/orders",
    component: Orders,
    meta: {
      auth: true
    }
  },
  {
    path: "/orders/:id",
    name: "order",
    component: OrderDetails,
    props: true
  },
  {
    path: "/search",
    name: "search",
    component: Search,
    props: true
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
      next("login");
    } else {
      next();
    }
  } else {
    next();
  }

  if (to.matched.some(record => record.meta.guest)) {
    if (store.getters.isLoggedIn) {
      next({
        path: "/"
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router
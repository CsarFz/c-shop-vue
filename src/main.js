import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
  BootstrapVue,
  IconsPlugin
} from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Toasted from "vue-toasted";

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Toasted, {
  iconPack: 'fontawesome'
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
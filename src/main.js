import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//Styles
import './assets/styles/index.css';

// Plugins
import Gyphy from './plugins/giphy.js'

Vue.config.productionTip = false;
Vue.use(Gyphy)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

// mYD6eV7LUml6b5cGJzYSNG1iJE6rBXC8
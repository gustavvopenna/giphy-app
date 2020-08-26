import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueToast from 'vue-toast-notification';

//Firebase instance
import "@/plugins/firebase";
import { auth } from "@/plugins/firebase"

//Styles
import './assets/styles/index.css';

// Plugins
import Gyphy from './plugins/giphy.js'

Vue.config.productionTip = false;

Vue.use(Gyphy)
Vue.use(VueToast);

let app
auth.onAuthStateChanged((user) => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }

  if (user) {
    store.commit('setUser', user)
  }
})
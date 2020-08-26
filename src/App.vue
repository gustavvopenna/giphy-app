<template>
  <div id="app">
    <div class="block sm:hidden">
      <NavbarMobile />
      <router-view />
    </div>
    <div class="hidden sm:block">
      <NavbarDesktop />
      <router-view />
    </div>
    <Popup @close="handlePopupClose">
      <Register v-if="$store.state.registerRequested" />
      <Login v-if="$store.state.loginRequested" />
    </Popup>
  </div>
</template>

<script>
//Libraries
import { mapMutations } from "vuex";

// Componets
import NavbarMobile from "@/components/NavbarMobile.vue";
import NavbarDesktop from "@/components/NavbarDesktop.vue";
import Popup from "@/components/Popup.vue";
import Register from "@/components/Register.vue";
import Login from "@/components/Login.vue";

// Css
import "vue-toast-notification/dist/theme-default.css";

export default {
  components: {
    NavbarMobile,
    NavbarDesktop,
    Popup,
    Register,
    Login
  },
  methods: {
    ...mapMutations([
      "setdisplayPopup",
      "setRegisterRequested",
      "setLoginRequested"
    ]),
    handlePopupClose() {
      this.setdisplayPopup(false);
      this.setRegisterRequested(false);
      this.setLoginRequested(false);
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

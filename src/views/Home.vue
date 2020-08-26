<template>
  <div class="home pt-20 sm:max-w-5xl mx-auto max-w-full px-2 sm:px-0 sm:ml-64">
    <h1
      class="mt-1 mb-2 text-4xl text-gray-900 font-bold capitalize"
    >{{ $store.state.currentSearch }}</h1>
    <SearchBar />
    <Gifs msg="Welcome to Your Vue.js App" />
    <Popup @close="handlePopupClose">
      <Register v-if="$store.state.registerRequested" />
      <Login v-if="$store.state.loginRequested" />
    </Popup>
  </div>
</template>

<script>
//Libraries
import { mapMutations } from "vuex";

// Components
import SearchBar from "@/components/SearchBar.vue";
import Gifs from "@/components/Gifs.vue";
import Popup from "@/components/Popup.vue";
import Register from "@/components/Register.vue";
import Login from "@/components/Login.vue";

export default {
  name: "Home",
  components: {
    Gifs,
    SearchBar,
    Popup,
    Register,
    Login
  },
  data() {
    return {
      customComponent: "Register"
    };
  },
  mounted() {
    this.setCustomComponent();
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
    },
    setCustomComponent() {
      if (this.$store.state.loginRequested) this.customComponent = "Login";
      this.customComponent = "Register";
    }
  }
};
</script>
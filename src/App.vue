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
  </div>
</template>

<script>
import NavbarMobile from "@/components/NavbarMobile.vue";
import NavbarDesktop from "@/components/NavbarDesktop.vue";
import "vue-toast-notification/dist/theme-default.css";

export default {
  components: {
    NavbarMobile,
    NavbarDesktop
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

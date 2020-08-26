<template>
  <div class="hidden sm:block fixed top-0 left-0 min-h-full bg-blue-1000 w-64">
    <div class="flex flex-col justify-between h-screen">
      <div class="p-4">
        <Avatar class="mb-16" size="md" :border="true" />
        <SearchBar width="w-full" class="mb-10" />
        <ul>
          <MenuItem
            v-for="item in menuItems"
            :key="item.name"
            render="router-link"
            tag="li"
            :to="item.path"
            exact
          >{{ item.name }}</MenuItem>
        </ul>
        <Divider />
        <MenuItem v-if="!isUserAuth" @click="handlePopup('register')">Registrate</MenuItem>
        <MenuItem v-if="!isUserAuth" @click="handlePopup('login')">Iniciar sesión</MenuItem>
        <MenuItem v-else @click="signOut">Cerrar sesión</MenuItem>
      </div>
      <UserBadge />
    </div>
  </div>
</template>

<script>
// Libraries
import { mapMutations, mapGetters, mapActions } from "vuex";

// Components
import SearchBar from "@/components/SearchBar";
import MenuItem from "@/components/MenuItem";
import Divider from "@/components/Divider";
import UserBadge from "@/components/UserBadge";
import Avatar from "@/components/Avatar";

// Data
import { menuItems } from "@/data/menuItems.js";

export default {
  name: "NavbarDesktop",
  components: {
    SearchBar,
    MenuItem,
    Divider,
    UserBadge,
    Avatar
  },
  data() {
    return {
      menuItems,
      avatar: null
    };
  },
  computed: {
    ...mapGetters(["getUser", "isUserAuth"])
  },
  mounted() {
    this.getAvatar();
  },
  methods: {
    ...mapActions(["signOutAction"]),
    ...mapMutations([
      "setdisplayPopup",
      "setRegisterRequested",
      "setLoginRequested"
    ]),
    handlePopup(type) {
      this.setdisplayPopup(true);
      if (type === "register") this.setRegisterRequested(true);
      else this.setLoginRequested(true);
    },
    async getAvatar() {
      const avatar = await this.$gf.random({ tag: "colors", type: "gifs" });
      this.avatar = avatar.data.image_original_url;
    },
    signOut() {
      this.signOutAction();
    }
  }
};
</script>

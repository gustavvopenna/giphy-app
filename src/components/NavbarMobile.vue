<template>
  <div class="fixed w-full z-10">
    <div
      class="flex justify-between items-center top-0 w-full h-16 p-2 bg-gray-100 border-b border-gray-200"
    >
      <Avatar size="sm" :border="true" class="border-purple-1000" />
      <button @click="toggleMenu">
        <MenuIcon class="w-8 h-8" />
      </button>
    </div>
    <!-- Overlay menu -->
    <div
      v-show="isOpen"
      class="fixed h-full bg-purple-1000 opacity-98 w-full flex justify-center items-center"
    >
      <ul>
        <MenuItem
          v-for="item in menuItems"
          :key="item.name"
          render="router-link"
          tag="li"
          :to="item.path"
        >
          <span @click="toggleMenu">{{ item.name }}</span>
        </MenuItem>
        <MenuItem v-if="!isUserAuth" @click="handlePopup('register')">
          <span @click="toggleMenu">Registrate</span>
        </MenuItem>
        <MenuItem v-if="!isUserAuth" @click="handlePopup('login')">
          <span @click="toggleMenu">Iniciar sesión</span>
        </MenuItem>
        <MenuItem v-else @click="signOut">
          <span @click="toggleMenu">Cerrar sesión</span>
        </MenuItem>
        <!-- <span v-if="isUserAuth" class="text-white">{{ getUser.email }}</span> -->
        <UserBadge />
      </ul>
    </div>
  </div>
</template>

<script>
// Libraries
import { mapMutations, mapGetters, mapActions } from "vuex";

// Components
import MenuItem from "@/components/MenuItem";
import Avatar from "@/components/Avatar";
import UserBadge from "@/components/UserBadge";

// Icons
import MenuIcon from "@/assets/icons/menu.svg";

// Data
import { menuItems } from "@/data/menuItems.js";

export default {
  name: "NavbarMobile",
  components: {
    MenuIcon,
    MenuItem,
    Avatar,
    UserBadge
  },
  data() {
    return {
      isOpen: false,
      menuItems
    };
  },
  computed: {
    ...mapGetters(["getUser", "isUserAuth"])
  },
  methods: {
    ...mapActions(["signOutAction"]),
    ...mapMutations([
      "setdisplayPopup",
      "setRegisterRequested",
      "setLoginRequested"
    ]),
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    handlePopup(type) {
      this.setdisplayPopup(true);
      if (type === "register") this.setRegisterRequested(true);
      else this.setLoginRequested(true);
    },
    signOut() {
      this.signOutAction();
    }
  }
};
</script>

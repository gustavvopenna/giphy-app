<template>
  <div class="fixed w-full z-10">
    <div
      class="flex justify-between items-center top-0 w-full h-16 p-2 bg-gray-100 border-b border-gray-200"
    >
      <div
        class="rounded-full h-10 w-10 bg-white overflow-hidden border-2 border-purple-1000 border-opacity-50"
      >
        <img src="../assets/images/giphy.webp" />
      </div>
      <button @click="toggleMenu">
        <MenuIcon class="w-8 h-8" />
      </button>
    </div>
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
          class="text-white font-bold text-5xl transform ease-in-out duration-200 hover:scale-110 cursor-pointer"
        >
          <span @click="toggleMenu">{{ item.name }}</span>
        </MenuItem>
      </ul>
    </div>
  </div>
</template>

<script>
// Components
import MenuItem from "@/components/MenuItem";

// Icons
import MenuIcon from "@/assets/icons/menu.svg";

// Data
import { menuItems } from "@/data/menuItems.js";

export default {
  name: "NavbarMobile",
  components: {
    MenuIcon,
    MenuItem
  },
  data() {
    return {
      isOpen: false,
      menuItems
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>

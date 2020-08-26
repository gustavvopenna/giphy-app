<template>
  <div class="hidden sm:block fixed top-0 left-0 min-h-full bg-blue-1000 w-64">
    <div class="flex flex-col justify-between h-screen">
      <div class="p-4">
        <div
          class="mb-16 rounded-full h-16 w-16 bg-gray-100 overflow-hidden border-2 border-gray-100"
        >
          <img src="../assets/images/giphy.webp" />
        </div>
        <SearchBar width="w-full" class="mb-10" />
        <ul>
          <router-link
            v-for="item in menuItems"
            :key="item.name"
            tag="li"
            :to="item.path"
            class="mb-3 py-1 px-2 text-white font-bold sm:font-medium sm:text-left text-xl transform ease-in-out duration-200 cursor-pointer hover:bg-blue-1100 rounded"
            active-class="bg-blue-1100"
            exact
          >{{ item.name }}</router-link>
        </ul>
        <div v-if="!isUserAuth" class="border-t border-gray-100 border-opacity-50 pt-4">
          <div
            @click="handlePopup('register')"
            class="mb-3 py-1 px-2 text-white font-bold sm:font-medium sm:text-left text-xl transform ease-in-out duration-200 cursor-pointer hover:bg-blue-1100 rounded"
          >Registrate</div>
          <div
            @click="handlePopup('login')"
            class="mb-3 py-1 px-2 text-white font-bold sm:font-medium sm:text-left text-xl transform ease-in-out duration-200 cursor-pointer hover:bg-blue-1100 rounded"
          >Iniciar sesión</div>
        </div>
        <div v-else class="border-t border-gray-100 border-opacity-50 pt-4">
          <div
            @click="signOut"
            class="mb-3 py-1 px-2 text-white font-bold sm:font-medium sm:text-left text-xl transform ease-in-out duration-200 cursor-pointer hover:bg-blue-1100 rounded"
          >Cerrar sesión</div>
        </div>
      </div>
      <div v-if="isUserAuth" class="flex items-center p-4 font-medium">
        <div class="rounded-full bg-gray-200 w-10 h-10 mr-2 overflow-hidden">
          <img :src="avatar" />
        </div>
        <span class="text-white">{{ getUser.email }}</span>
      </div>
    </div>
  </div>
</template>

<script>
// Libraries
import { mapMutations, mapGetters, mapActions } from "vuex";

// Components
import SearchBar from "@/components/SearchBar";

// Data
import { menuItems } from "@/data/menuItems.js";

export default {
  name: "NavbarDesktop",
  components: {
    SearchBar
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

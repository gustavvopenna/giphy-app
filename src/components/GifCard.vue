<template>
  <div class="w-1/2 sm:w-auto">
    <transition name="fade">
      <div v-show="isLoad" class="group relative rounded bg-gray-100 m-1 overflow-hidden">
        <img @load="loaded" :src="image" class="h-auto sm:h-48 bg-gray-100" />
        <div class="group flex absolute justify-end top-0 sm:top-auto sm:bottom-0 w-full p-2">
          <ClipboardCopyIcon
            class="transform mr-2 inline-block opacity-0 group-hover:opacity-100 hover:scale-110 text-white transition ease-in-out duration-200 cursor-pointer"
          />
          <HeartIcon
            @click="addToFavorites"
            class="transform inline-block opacity-0 group-hover:opacity-100 hover:scale-110 text-white transition ease-in-out duration-200 cursor-pointer"
          />
        </div>
      </div>
    </transition>
    <div
      v-show="!isLoad"
      class="m-1 sm:w-40 h-20 sm:h-48 bg-gray-100 flex justify-center items-center"
    >
      <Loader />
    </div>
  </div>
</template>

<script>
// Components
import Loader from "../components/Loader";

// Icons
import ClipboardCopyIcon from "../assets/icons/clipboard-copy.svg";
import HeartIcon from "../assets/icons/heart.svg";

export default {
  name: "GifCard",
  components: {
    Loader,
    ClipboardCopyIcon,
    HeartIcon
  },
  props: {
    image: {
      type: String,
      required: true
    },
    gif: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isLoad: false,
      favorite: false
    };
  },
  methods: {
    loaded() {
      this.isLoad = true;
    },
    async addToFavorites() {
      const { created } = await this.$store.dispatch(
        "createFavorite",
        this.gif.id
      );
      if (created) {
        this.$toast.success("Gif agregado a favoritos", {
          position: "bottom-right"
        });
      }
      this.favorite = true;
    }
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
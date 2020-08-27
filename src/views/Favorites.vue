<template>
  <div class="sm:ml-64">
    <div class="home pt-20 sm:max-w-5xl mx-auto max-w-full px-2 sm:px-0">
      <h1 class="mt-1 mb-2 text-4xl text-gray-900 font-bold capitalize">Favorites</h1>
      <div v-if="favoriteGifs" class="flex flex-wrap justify-center">
        <GifCard
          v-for="gif in favoriteGifs"
          :key="gif.id"
          :image="gif.images.original.webp"
          :gif="gif"
        />
      </div>
    </div>
  </div>
</template>

<script>
// Libraries
import { mapActions, mapGetters } from "vuex";

// Components
import GifCard from "@/components/GifCard";

export default {
  name: "Favorites",
  components: {
    GifCard
  },
  data() {
    return {
      favoriteGifs: null
    };
  },
  computed: {
    ...mapGetters(["getFavorites"])
  },
  async mounted() {
    await this.getFavoritesAction();
    await this.fetchGifs();
  },
  methods: {
    ...mapActions(["getFavoritesAction"]),
    async fetchGifs() {
      const gifsIds = this.getFavorites.map(fav => fav.gifId);
      const gifs = await this.$gf.gifs(gifsIds);
      this.favoriteGifs = gifs.data;
    }
  }
};
</script>

<template>
  <div class="home pt-20 sm:max-w-5xl mx-auto max-w-full px-2 sm:px-0 sm:ml-64">
    <h1 class="mt-1 mb-2 text-4xl text-gray-900 font-bold capitalize">Trending</h1>
    <div class="flex flex-wrap justify-center">
      <GifCard v-for="gif in gifs" :key="gif.id" :image="gif.images.original.url" :gif="gif" />
    </div>
  </div>
</template>

<script>
// Components
import GifCard from "../components/GifCard";

export default {
  name: "Trending",
  components: {
    GifCard
  },
  data() {
    return {
      gifs: null
    };
  },
  mounted() {
    this.getTrendingGifs();
  },
  methods: {
    async getTrendingGifs() {
      const { data } = await this.$gf.trending({
        limit: 10
      });
      this.gifs = data;
    }
  }
};
</script>

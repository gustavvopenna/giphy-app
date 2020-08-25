<template>
  <div class="flex flex-wrap justify-center">
    <GifCard v-for="giph in giphs" :key="giph.id" :image="giph.images.original.url" />
  </div>
</template>

<script>
// Components
import GifCard from "../components/GifCard";

export default {
  name: "Gifs",
  components: {
    GifCard
  },
  data() {
    return {
      giphs: null
    };
  },
  computed: {
    currentSearch() {
      const defaultSearch = "dogs";
      return this.$store.state.currentSearch || defaultSearch;
    }
  },
  watch: {
    currentSearch: function() {
      this.getGiphs();
    }
  },
  mounted() {
    this.getGiphs();
  },
  methods: {
    async getGiphs() {
      const { data } = await this.$gf.search(this.currentSearch, {
        sort: "relevant",
        limit: 10
      });
      console.log(data);
      this.giphs = data;
    }
  }
};
</script>


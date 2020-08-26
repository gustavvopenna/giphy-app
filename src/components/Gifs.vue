<template>
  <div class="flex flex-wrap justify-center">
    <GifCard v-for="giph in giphs" :key="giph.id" :image="giph.images.original.url" :gif="giph" />
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
  props: {
    subject: {
      type: String,
      default: "dogs"
    }
  },
  data() {
    return {
      giphs: null
    };
  },
  computed: {
    currentSearch() {
      return this.$store.state.currentSearch || this.subject;
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
      this.giphs = data;
    }
  }
};
</script>


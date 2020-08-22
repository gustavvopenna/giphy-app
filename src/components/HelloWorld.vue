<template>
  <div class="flex">
    <div v-for="giph in giphs" :key="giph.id" class="rounded bg-gray-100 mx-1">
      <h1 class="font-bold text-2xl">{{ giph.title }}</h1>
      <video :src="giph.images.downsized_small.mp4" autoplay loop />
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      giphs: null
    };
  },
  mounted() {
    this.getGiphs();
  },
  methods: {
    async getGiphs() {
      console.log("1");
      console.log(this.$gf);
      const { data } = await this.$gf.trending({ limit: 10 });
      console.log(data, "data");
      this.giphs = data;
    }
  }
};
</script>


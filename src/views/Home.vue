<template>
  <div class="sm:ml-64">
    <div class="home pt-20 sm:max-w-5xl mx-auto max-w-full px-2 sm:px-0">
      <h1
        class="mt-1 mb-2 text-4xl text-gray-900 font-bold capitalize"
      >{{ $store.state.currentSearch }}</h1>
      <SearchBar />
      <Gifs />
    </div>
  </div>
</template>

<script>
// Components
import SearchBar from "@/components/SearchBar.vue";
import Gifs from "@/components/Gifs.vue";

export default {
  name: "Home",
  components: {
    Gifs,
    SearchBar
  }
};
</script>
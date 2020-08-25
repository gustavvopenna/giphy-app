<template>
  <div class="home sm:max-w-6xl mx-auto max-w-full px-2 sm:px-0">
    <SearchBar />
    <h1 class="text-4xl text-gray-900 font-bold capitalize">{{ $store.state.currentSearch }}</h1>
    <Gifs msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import Gifs from "@/components/Gifs.vue";
import SearchBar from "@/components/SearchBar.vue";

export default {
  name: "Home",
  components: {
    Gifs,
    SearchBar
  }
};
</script>

<template>
  <form @submit="handleSubmit" :class="`mb-4 ${width}`">
    <label :class="`inline-flex items-center relative ${width}`">
      <input
        name="search"
        type="text"
        v-model="search"
        placeholder="Search gifs"
        class="w-full px-4 bg-gray-200 text-gray-600 rounded p-2 outline-none focus:shadow-outline"
      />
      <button type="submit" class="absolute right-0 mr-1 outline-none focus:outline-none">
        <SearchIcon class="text-gray-600" />
      </button>
    </label>
  </form>
</template>

<script>
// TODO: check if Label tag as a container is "good practice"

// Libraries
import { mapMutations } from "vuex";

// Icons
import SearchIcon from "../assets/icons/search.svg";

export default {
  name: "SearchBar",
  props: {
    width: {
      type: String,
      default: "w-auto"
    }
  },
  components: {
    SearchIcon
  },
  data() {
    return {
      search: ""
    };
  },
  methods: {
    ...mapMutations(["setCurrentSearch"]),
    handleSubmit(e) {
      e.preventDefault();
      this.setCurrentSearch(this.search);
      this.search = "";
    }
  }
};
</script>

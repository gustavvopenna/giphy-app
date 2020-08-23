<template>
  <div class="flex flex-wrap">
    <div
      v-for="giph in giphs"
      :key="giph.id"
      class="group relative rounded bg-gray-100 m-1 overflow-hidden"
    >
      <img :src="giph.images.original.url" class="h-40" />
      <div class="flex absolute justify-end bottom-0 w-full p-2">
        <ClipboardCopyIcon
          class="mr-2 inline-block opacity-0 group-hover:opacity-100 hover:text-blue-700 text-white transition ease-in-out duration-200 cursor-pointer"
        />
        <HeartIcon
          class="inline-block opacity-0 group-hover:opacity-100 hover:text-red-600 text-white transition ease-in-out duration-200 cursor-pointer"
        />
      </div>
    </div>
  </div>
</template>

<script>
// Icons
import ClipboardCopyIcon from "../assets/icons/clipboard-copy.svg";
import HeartIcon from "../assets/icons/heart.svg";

export default {
  name: "HelloWorld",
  components: {
    ClipboardCopyIcon,
    HeartIcon
  },
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
      const { data } = await this.$gf.search("dogs", {
        sort: "relevant",
        limit: 10
      });
      console.log(data);
      this.giphs = data;
    }
  }
};
</script>


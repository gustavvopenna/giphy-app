<template>
  <div v-if="isUserAuth" class="flex items-center p-4 font-medium">
    <Avatar size="sm" class="mr-2" :image="avatar" />
    <span class="text-white">{{ getUser.email }}</span>
  </div>
</template>

<script>
// Libraries
import { mapGetters } from "vuex";

// Components
import Avatar from "@/components/Avatar";

export default {
  name: "UserBadge",
  components: {
    Avatar
  },
  data() {
    return {
      avatar: null
    };
  },
  mounted() {
    this.getAvatar();
  },
  computed: {
    ...mapGetters(["getUser", "isUserAuth"])
  },
  methods: {
    async getAvatar() {
      const avatar = await this.$gf.random({ tag: "colors", type: "gifs" });
      this.avatar = avatar.data.image_original_url;
    }
  }
};
</script>

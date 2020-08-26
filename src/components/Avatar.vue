<template>
  <div :class="{ ...customClasses }">
    <img :src="image" class="object-cover h-full" />
  </div>
</template>

<script>
export default {
  name: "Avatar",
  props: {
    border: {
      type: Boolean,
      default: false
    },
    image: {
      type: String,
      default: require("../assets/images/giphy.webp")
    },
    size: {
      type: String,
      default: null,
      validator(value) {
        return ["sm", "md", "lg"].includes(value);
      }
    }
  },
  computed: {
    customClasses() {
      return {
        // Default styles
        "rounded-full bg-gray-100 overflow-hidden": true,
        // Default styles if size prop is not defined
        "h-10 w-10": !this.size,
        // Styles apply for 'sm' size
        "w-10 h-10 ": this.size === "sm",
        // Styles apply for 'md' size
        "h-16 w-16": this.size === "md",
        // Styles apply for 'lg' size
        "h-20 w-20": this.size === "lg",
        // styles if border prop is true
        "border-2 border-gray-100": this.border
      };
    }
  }
};
</script>

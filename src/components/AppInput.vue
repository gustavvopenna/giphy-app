<template>
  <input
    :type="type"
    :placeholder="placeholder"
    @input="handleInput"
    class="w-full mt-4 p-2 rounded shadow-xs bg-white"
  />
</template>

<script>
export default {
  name: "AppInput",
  props: {
    type: {
      type: String,
      default: "text"
    },
    placeholder: {
      type: String,
      default: ""
    },
    value: {
      type: String
    }
  },
  data() {
    return {
      content: this.value
    };
  },
  methods: {
    handleInput(e) {
      this.$emit("input", e.target.value);
    }
  }
};
</script>

<template>
  <component
    :is="render"
    v-bind="$attrs"
    v-on="$listeners"
    class="sm:mb-3 sm:py-1 sm:px-2 text-white font-bold sm:font-medium sm:text-left text-5xl sm:text-xl transform ease-in-out duration-200 cursor-pointer hover:bg-blue-1100 rounded"
    active-class="sm:bg-blue-1100"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: "MenuItem",
  inheritAttrs: false,
  props: {
    render: {
      type: String,
      default: "div"
    }
  }
};
</script>
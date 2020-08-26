<template>
  <div v-if="$store.state.displayPopup" class="fixed inset-0 bg-gray-800 bg-opacity-98">
    <div class="w-full h-full flex justify-center items-center">
      <div class="bg-gray-100 rounded max-w-sm p-4 mx-4 sm:mx-0">
        <div class="text-right">
          <button
            @click="close"
            class="p-2 -mr-2 -mt-2 rounded-full transform ease-in-out duration-200 hover:rotate-90"
          >
            <CloseIcon />
          </button>
        </div>
        <div>Hola, bienvenido a Worgiphy</div>
        <!-- <component v-if="ChildComponent" :is="importedComponent" /> -->
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
// Icons
import CloseIcon from "../assets/icons/close.svg";

export default {
  name: "Popup",
  components: {
    CloseIcon
  },
  props: {
    ChildComponent: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      importedComponent: null
    };
  },
  created() {
    // this.importChildComponent();
  },
  methods: {
    // importChildComponent() {
    //   this.importedComponent = require(`@/components/${this.ChildComponent}.vue`).default;
    // },
    close() {
      this.$emit("close");
    }
  }
};
</script>

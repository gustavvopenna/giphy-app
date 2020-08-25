import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentSearch: 'dogs'
  },
  mutations: {
    setCurrentSearch(state, search) {
      state.currentSearch = search
    }
  },
  actions: {},
  modules: {}
});

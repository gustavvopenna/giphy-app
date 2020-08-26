import Vue from "vue";
import Vuex from "vuex";
import firebase from 'firebase/app';
import { favoritesCollection, auth } from '../plugins/firebase'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    error: null,
    currentSearch: 'dogs',
    displayPopup: false,
    registerRequested: false,
    loginRequested: false,
    favorites: []
  },
  getters: {
    getUser(state) {
      return state.user;
    },
    isUserAuth(state) {
      return !!state.user;
    },
    getError(state) {
      return state.error;
    },
    getFavorites(state) {
      return state.favorites
    }
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setError(state, payload) {
      state.error = payload;
    },
    setCurrentSearch(state, search) {
      state.currentSearch = search
    },
    setdisplayPopup(state, payload) {
      state.displayPopup = payload
    },
    setRegisterRequested(state, payload) {
      state.loginRequested = false
      state.registerRequested = payload
    },
    setLoginRequested(state, payload) {
      state.registerRequested = false
      state.loginRequested = payload
    },
    setFavorites(state, payload) {
      state.favorites = payload
    }
  },
  actions: {
    registerAction({ commit }, payload) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then(response => {
          commit("setUser", response.user);
        })
        .catch(error => {
          commit("setError", error.message);
        });
    },
    logInAction({ commit }, payload) {
      return firebase
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.password)
        .then(response => {
          commit("setUser", response.user);
        })
        .catch(error => {
          commit("setError", error.message);
        });
    },
    signOutAction({ commit }) {
      firebase
        .auth()
        .signOut()
        .then(() => {
          commit("setUser", null);
        })
        .catch(error => {
          commit("setError", error.message);
        });
    },
    async createFavorite(_, favoriteId) {
      const favorite = await favoritesCollection.add({
        createdOn: new Date(),
        userId: auth.currentUser.uid,
        gifId: favoriteId
      })
      if (favorite) return { created: true }
      else return { created: false }
    },
    async getFavoritesAction({ commit, state }) {
      const favoritesArr = []
      const favorites = await favoritesCollection.where("userId", "==", state.user.uid).get()
      favorites.forEach((doc) => favoritesArr.push(doc.data()))
      commit('setFavorites', favoritesArr)
    }
  },
  modules: {}
});

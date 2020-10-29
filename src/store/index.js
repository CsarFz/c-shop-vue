import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      isLoggedIn: false,
      data: {
        username: "",
      }
    }
  },
  getters: {
    isLoggedIn: state => {
      return state.user.isLoggedIn;
    }
  },
  mutations: {
    SET_LOGGED_IN(state, value) {
      state.user.isLoggedIn = value;
    },
    SET_USER(state, data) {
      state.user.data = data;
    }
  },
  actions: {
    setUser({
      commit
    }, user) {
      commit("SET_LOGGED_IN", user !== null);
      if (user) {
        commit("SET_USER", {
          email: user.username,
        });
      } else {
        commit("SET_USER", null);
      }
    }
  },
  modules: {},
  plugins: [createPersistedState()]
})
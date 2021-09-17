import Vue from 'vue';
import Vuex from 'vuex';

import app from './modules/app'
import getters from './getters'

import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    app,
  },
  state: {},
  mutations: {},
  actions: {},
  getters,
  plugins: [createPersistedState({
    reducer(val) {
      return {
        app: val.app
      }
    }
  })]
});

export default store

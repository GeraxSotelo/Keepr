import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
import router from "./router";

Vue.use(Vuex);

let baseUrl = location.host.includes("localhost") ? "https://localhost:5001/" : "/";

let api = Axios.create({
  baseURL: baseUrl + "api/",
  timeout: 3000,
  withCredentials: true
});

export default new Vuex.Store({
  state: {
    publicKeeps: [],
    vaults: []
  },
  mutations: {
    setPublicKeeps(state, data) {
      state.publicKeeps = data;
    },
    setVaults(state, data) {
      state.vaults = data;
    }
  },
  actions: {
    setBearer({ }, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },

    async getPublicKeeps({ commit, dispatch }) {
      let res = await api.get("keeps");
      commit("setPublicKeeps", res.data);
    },

    async getVaults({ commit, dispatch }) {
      let res = await api.get("vaults");
      console.log(res.data);
      commit("setVaults", res.data);
    },

    async createVault({ commit, dispatch }, vaultData) {
      let res = await api.post("vaults", vaultData);
      console.log(res.data);

      // commit("addVault", res.data);
    }
  }
});

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
    privateKeeps: [],
    vaults: [],
    activeVault: {}
  },
  mutations: {
    setPublicKeeps(state, data) {
      state.publicKeeps = data;
    },
    setPrivateKeeps(state, data) {
      state.privateKeeps = data;
    },
    setVaults(state, data) {
      state.vaults = data;
    },
    addVault(state, data) {
      state.vaults.push(data);
    },
    setActiveVault(state, data) {
      state.activeVault = data;
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

    async createKeep({ commit, dispatch }, payload) {
      let res = await api.post("keeps/", payload.keepData);
      if (payload.vaultData != NaN) {
        dispatch("createVaultKeep", { KeepId: res.data.id, VaultId: payload.vaultId });
      }
    },

    async getKeepsByVaultId({ commit, dispatch }, vaultId) {
      let res = await api.get("vaults/" + vaultId + "/keeps");
      commit("setPrivateKeeps", res.data);
    },

    async getVaults({ commit, dispatch }) {
      let res = await api.get("vaults");
      commit("setVaults", res.data);
    },

    async createVault({ commit, dispatch }, vaultData) {
      let res = await api.post("vaults", vaultData);
      commit("addVault", res.data);
    },

    async getVaultById({ commit, dispatch }, vaultId) {
      let res = await api.get("vaults/" + vaultId);
      commit("setActiveVault", res.data);
    },

    async deleteVault({ commit, dispatch }, id) {
      let res = await api.delete("vaults/" + id);
      dispatch("getVaults");
    },

    async createVaultKeep({ commit, dispatch }, payload) {
      let vk = await api.post("vaultkeeps", { KeepId: payload.KeepId, VaultId: payload.VaultId });
    }
  }
});

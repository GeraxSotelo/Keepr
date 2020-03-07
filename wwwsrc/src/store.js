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
    userKeeps: [],
    activeKeep: {},
    vaultKeeps: [],
    vaults: [],
    activeVault: {}
  },
  mutations: {
    setPublicKeeps(state, data) {
      state.publicKeeps = data;
    },
    setUserKeeps(state, data) {
      state.userKeeps = data;
    },
    addToUserKeeps(state, data) {
      state.userKeeps.push(data);
    },
    setActiveKeep(state, data) {
      state.activeKeep = data;
    },
    setVaultKeeps(state, data) {
      state.vaultKeeps = data;
    },
    resetVaultKeeps(state) {
      state.vaultKeeps = [];
    },
    setVaults(state, data) {
      state.vaults = data;
    },
    addVault(state, data) {
      state.vaults.push(data);
    },
    setActiveVault(state, data) {
      state.activeVault = data;
    },
    resetActiveKeep(state) {
      state.activeKeep = {};
    },
    resetActiveVault(state) {
      state.activeVault = {};
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
      if (!isNaN(payload.vaultId)) {
        dispatch("createVaultKeep", { KeepId: res.data.id, VaultId: payload.vaultId });
      }
      if (res.data.isPrivate) {
        commit("addToUserKeeps", res.data);
      }
    },

    async getKeepById({ commit, dispatch }, keepId) {
      let res = await api.get("keeps/" + keepId);
      commit("setActiveKeep", res.data);
    },

    async getKeepsByUserId({ commit, dispatch }) {
      let res = await api.get("keeps/userkeeps");
      commit("setUserKeeps", res.data);
    },

    async getKeepsByVaultId({ commit, dispatch }, vaultId) {
      commit("resetVaultKeeps");
      let res = await api.get("vaults/" + vaultId + "/keeps");
      commit("setVaultKeeps", res.data);
    },

    async editKeep({ commit, dispatch }, keep) {
      let res = await api.put("keeps/" + keep.id, keep);
      console.log(res.data);
    },

    async removeKeep({ commit, dispatch }, payload) {
      let res = await api.put("vaultkeeps/removekeep", payload);
      dispatch("getKeepsByVaultId", payload.VaultId);
    },

    async deleteKeep({ commit, dispatch }, id) {
      let res = await api.delete("keeps/" + id);
      dispatch("getKeepsByUserId");
    },

    resetActiveKeep({ commit }) {
      commit("resetActiveKeep");
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

    async resetActiveVault({ commit }) {
      commit("resetActiveVault");
    },

    async deleteVault({ commit, dispatch }, id) {
      let res = await api.delete("vaults/" + id);
      dispatch("getVaults");
    },

    async createVaultKeep({ commit, dispatch }, payload) {
      let vk = await api.post("vaultkeeps", { KeepId: payload.KeepId, VaultId: payload.VaultId });
    },

    async keepCount({ commit, dispatch }, update) {
      let res = await api.put("keeps/" + update.id, update);
      dispatch("getKeepById", update.id);
    },
    async increasePublicViewCount({ commit, dispatch }, update) {
      let res = await api.put("keeps/" + update.id + "/publicview", update);
      commit("setActiveKeep", res.data);
    }
  }
});

<template>
  <div class="dashboard container-fluid">
    <div class="row justify-content-around pb-1">
      <div class="col-12 text-center">
        <h1>My Keeps</h1>
      </div>
      <div class="col-6 text-right">
        <button class="btn btn-primary">Create Keep</button>
      </div>
      <div class="col-6 text-left">
        <button @click="createVault" class="btn btn-success">Create Vault</button>
      </div>
    </div>

    <div class="row justify-content-around pt-1">
      <div class="col-12 col-sm-6 col-md-4 pt-1 pb-1" v-for="vault in vaults" :key="vault.id">
        <router-link :to="{name:'vaultdetails', params: { vaultId: vault.id}}">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title text-white">{{vault.name}}</h5>
              <h6 class="card-subtitle mb-2 text-white">{{vault.description}}</h6>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import NS from "../NotificationService.js";
import { onAuth } from "@bcwdev/auth0-vue";
export default {
  name: "Dashboard",
  mounted() {
    onAuth().then(res => {
      this.$store.dispatch("getVaults");
    });
    //TODO  make this method in the store!!!
    // this.$store.dispatch("resetActiveVault");
  },
  computed: {
    vaults() {
      return this.$store.state.vaults;
    }
  },
  methods: {
    async createVault() {
      let vaultData = await NS.inputVaultData("Enter Vault Info", {});
      if (vaultData) {
        this.$store.dispatch("createVault", vaultData);
      }
    }
  }
};
</script>

<style scoped>
.card {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("../assets/vault.jpg") no-repeat center;
  background-size: cover;
  border-radius: 10px;
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.35);
  cursor: pointer;
  min-width: 10rem;
  height: 15rem;
}
.card:hover {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("../assets/vault-open.jpg") no-repeat center;
  background-size: cover;
  box-shadow: 5px 15px 30px rgba(0, 0, 0, 0.4);
  transform: scale(1.03);
}
</style>

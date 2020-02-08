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

    <div class="row pt-1">
      <div class="col-12 col-md-4" v-for="vault in vaults" :key="vault.id">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title text-white">{{vault.name}}</h5>
            <h6 class="card-subtitle mb-2 text-white">{{vault.description}}</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NS from "../NotificationService.js";
import { onAuth } from "@bcwdev/auth0-vue";
export default {
  mounted() {
    onAuth().then(res => {
      this.$store.dispatch("getVaults");
    });
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
    url("https://lh3.googleusercontent.com/proxy/QP2rOBkd00j6GvwpJyM4mRMa6prpwSbxNVXb2gXLRXM83NWnoOV3ho5moxxgko7KMB-yt0hPE0gxUDBvfkvl11aO0ltLpnDnQDovIXiZoX9M9S3g65XF7mhVZkav5oeNig")
      no-repeat center;
  background-size: cover;
  border-radius: 10px;
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.35);
  width: 18rem;
  height: 15rem;
  max-width: 18rem;
}
.card:hover {
  box-shadow: 5px 15px 30px rgba(0, 0, 0, 0.4);
  transform: scale(1.03);
}
</style>

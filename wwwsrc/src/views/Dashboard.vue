<template>
  <div class="dashboard container-fluid">
    <div class="row justify-content-around pb-3 pt-2">
      <div class="col-12 text-center">
        <h1>My Keeps</h1>
      </div>
      <div class="col-6 text-right mt-1 mb-3">
        <button @click="createKeep" class="btn btn-primary">Create Keep</button>
      </div>
      <div class="col-6 text-left mt-1 mb-3">
        <button @click="createVault" class="btn btn-success">Create Vault</button>
      </div>
    </div>

    <div class="row justify-content-around pt-1">
      <div class="col-12 col-sm-6 col-md-4 pt-1 pb-3 mb-3" v-for="vault in vaults" :key="vault.id">
        <div class="card">
          <div class="delete-vault text-right w-100">
            <i @click="deleteVault(vault.id)" class="far fa-times-circle"></i>
          </div>
          <div class="card-body text-center">
            <h5 class="card-title text-white">{{vault.name}}</h5>
            <h6 class="card-subtitle mb-2 text-white">{{vault.description}}</h6>
          </div>
          <router-link class="vault-link" :to="{name:'vaultdetails', params: { vaultId: vault.id}}"></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NS from "../NotificationService.js";
import { onAuth } from "@bcwdev/auth0-vue";
import Swal from "sweetalert2";

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
    async createKeep() {
      let vaults = this.getVaultInfo();
      let vaultId = 0;
      let keepData = await NS.inputKeepData("Enter Keep Info");
      if (keepData) {
        if (keepData.IsPrivate == true) {
          let id = await NS.pickVault(vaults);
          vaultId = parseInt(id);
        }
        this.$store.dispatch("createKeep", {
          keepData,
          vaultId
        });
      }
    },
    getVaultInfo() {
      let vaults = [...this.vaults];
      let newVaults = {};
      vaults.map(vault => {
        newVaults[vault.id] = vault.name;
      });
      return newVaults;
    },
    async createVault() {
      let vaultData = await NS.inputVaultData("Enter Vault Info", {});
      if (vaultData) {
        this.$store.dispatch("createVault", vaultData);
      }
    },
    deleteVault(id) {
      this.$store.dispatch("deleteVault", id);
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

.card-body {
  flex: 0 1 auto;
  padding: 0.3em 0 0 0;
}

.vault-link {
  flex: 1 1 auto;
}

.delete-vault {
  height: 1.5em;
  position: absolute;
  top: -10%;
}

.fa-times-circle {
  cursor: pointer;
  display: none;
  padding: 0.25em;
}

.card:hover .fa-times-circle,
.delete-vault:hover .fa-times-circle {
  display: inline-block;
}
</style>

<template>
  <div class="dashboard container-fluid bg-light">
    <div class="row justify-content-around pb-3 pt-5">
      <div class="col-12 text-center mt-5">
        <h1>My Keeps</h1>
      </div>
      <div class="col-6 text-right mt-1 mb-3">
        <button @click="createKeep" class="btn create-keep-btn">Create Keep</button>
      </div>
      <div class="col-6 text-left mt-1 mb-3">
        <button @click="createVault" class="btn create-vault-btn">Create Vault</button>
      </div>
    </div>

    <div class="row justify-content-around pt-1">
      <div class="col-12 col-sm-6 col-md-4 pt-1 pb-3 mb-3" v-for="vault in vaults" :key="vault.id">
        <div class="bg-image">
          <div class="card">
            <div class="delete-vault text-right w-100">
              <i @click="deleteVault(vault.id)" class="far fa-times-circle"></i>
            </div>
            <div class="card-body text-center">
              <h5 class="card-title text-white">{{vault.name}}</h5>
              <h6 class="card-subtitle mb-2 text-white">{{vault.description}}</h6>
            </div>
            <router-link
              class="vault-link"
              :to="{name:'vaultdetails', params: { vaultId: vault.id}}"
            ></router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="row pt-5">
      <div class="col-12 text-center pb-2">
        <h1>My Created Keeps</h1>
      </div>
      <div class="col-6 col-md-3 pt-1 pb-1 mt-3 mb-5" v-for="keep in userKeeps" :key="keep.id">
        <Keep :keepData="keep" />
      </div>
    </div>
  </div>
</template>

<script>
import { onAuth } from "@bcwdev/auth0-vue";
import Swal from "sweetalert2";
import NS from "../NotificationService.js";
import Keep from "@/components/Keep.vue";
export default {
  name: "Dashboard",
  mounted() {
    onAuth().then(res => {
      this.$store.dispatch("getVaults");
      this.$store.dispatch("getKeepsByUserId");
    });
    this.$store.dispatch("resetActiveKeep");
    this.$store.dispatch("resetActiveVault");
  },
  computed: {
    vaults() {
      return this.$store.state.vaults;
    },
    userKeeps() {
      return this.$store.state.userKeeps;
    }
  },
  methods: {
    //TODO make keep count go up if placed in vault
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
  },
  components: {
    Keep
  }
};
</script>

<style scoped>
.create-keep-btn,
.create-vault-btn {
  background: linear-gradient(to bottom, #a6afb4, rgb(230, 230, 230), #a6afb4);
  border: 1px solid rgb(104, 104, 104);
}
.card {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  border-radius: 10px;
  min-width: 10rem;
  height: 15rem;
}

.card:hover {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
}
.bg-image,
.bg-image:hover {
  background: url("../assets/vault.jpg") no-repeat center;
  background-size: cover;
  border-radius: 10px;
  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.35);
  transition: all 0.3s ease-in-out;
}
.bg-image:hover {
  background-image: url("../assets/vault-open.jpg");
  transform: scale(1.03);
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.4);
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

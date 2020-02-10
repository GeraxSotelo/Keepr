<template>
  <div class="keep">
    <div class="card">
      <img :src="keepData.img" class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">{{keepData.name}}</h5>
        <p class="card-text">{{keepData.description}}</p>
        <hr />
        <div class="row">
          <div class="col-12 d-flex text-center justify-content-between">
            <div class="w-100">
              <i class="fas fa-eye"></i>
            </div>
            <div class="cp w-100">
              <i class="fas fa-share-alt"></i>
            </div>
            <div @click="keep(keepData.id)" class="cp w-100">
              <i class="fas fa-box-open"></i>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="stats-container col-12 d-flex text-center justify-content-between">
            <div class="w-100">
              <p>Views:</p>
              <p>{{keepData.views}}</p>
            </div>
            <div class="w-100">
              <p>Shares:</p>
              <p>{{keepData.shares}}</p>
            </div>
            <div class="w-100">
              <p>Keeps:</p>
              <p>{{keepData.keeps}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NS from "../NotificationService.js";
export default {
  name: "Keep",
  props: ["keepData"],
  data() {
    return {};
  },
  computed: {
    vaults() {
      return this.$store.state.vaults;
    }
  },
  methods: {
    async keep(KeepId) {
      let vaults = this.getVaultInfo();
      if (this.$auth.isAuthenticated) {
        let id = await NS.pickVault(vaults);
        let VaultId = parseInt(id);
        if (!isNaN(VaultId)) {
          this.$store.dispatch("createVaultKeep", { KeepId, VaultId });
        }
      } else {
        NS.errorMessage("You must be logged in to keep");
      }
    },
    getVaultInfo() {
      let vaults = [...this.vaults];
      let newVaults = {};
      vaults.map(vault => {
        newVaults[vault.id] = vault.name;
      });
      return newVaults;
    }
  }
};
</script>

<style scoped>
.cp {
  cursor: pointer;
}
.card {
  max-width: 18rem;
  box-shadow: 5px 15px 10px rgba(0, 0, 0, 0.15);
  transition: 0.25s ease;
}
.card:hover {
  box-shadow: 5px 15px 30px rgba(0, 0, 0, 0.3);
  transform: scale(1.03);
}
.card-img-top {
  max-width: 18rem;
  border-radius: 10px 10px 0 0;
  /* max-height: 18rem; */
}
.card,
.card-body {
  border-radius: 10px;
}
.stats-container p {
  font-size: 0.8em;
  margin-bottom: 0;
}
</style>
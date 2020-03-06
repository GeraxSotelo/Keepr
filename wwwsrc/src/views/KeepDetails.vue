<template>
  <div class="keep-details container-fluid bg-light">
    <div class="row text-center pb-2">
      <div class="col-12 pt-2 pb-2">
        <h1>{{keep.name}}</h1>
      </div>
      <div class="col-12 pt-2 pb-5">
        <img class="keep-img" :src="keep.img" />
      </div>
    </div>
    <div class="row">
      <div class="col-12 text-center">
        <h3>{{keep.description}}</h3>
      </div>
    </div>
    <hr />
    <div class="row pt-2">
      <div class="col-12 d-flex text-center justify-content-between mt-2">
        <div class="w-100">
          <i class="fas fa-eye stats-icon"></i>
        </div>
        <div class="cp w-100">
          <div class="btn-group dropup">
            <div data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i class="fas fa-share-alt stats-icon"></i>
            </div>
            <div v-if="this.$auth.isAuthenticated" class="dropdown-menu text-center p-0">
              <div class="dropdown-item p-1">
                <div
                  @click="increaseShareCount()"
                  class="fb-share-button"
                  :data-href="keep.img"
                  data-layout="button"
                  data-size="large"
                >
                  <a
                    target="_blank"
                    :href="'https://www.facebook.com/sharer/sharer.php?u='+keep.img+'&amp;src=sdkpreparse'"
                    class="fb-xfbml-parse-ignore"
                  >
                    <i class="fab fa-facebook"></i>
                  </a>
                </div>
              </div>

              <div class="dropdown-item p-1">
                <a
                  @click="increaseShareCount()"
                  class="twitter-share-button"
                  :href="'https://twitter.com/intent/tweet?url='+keep.img"
                  data-size="large"
                >
                  <i class="fab fa-twitter-square"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div @click="collectKeep(keep.id)" class="cp w-100">
          <i class="fas fa-box-open stats-icon"></i>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="stats-container col-12 d-flex text-center justify-content-between">
        <div class="w-100">
          <p>Views:</p>
          <p>{{keep.views}}</p>
        </div>
        <div class="w-100">
          <p>Shares:</p>
          <p>{{keep.shares}}</p>
        </div>
        <div class="w-100">
          <p>Keeps:</p>
          <p>{{keep.keeps}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onAuth } from "@bcwdev/auth0-vue";
import NS from "../NotificationService.js";
export default {
  name: "KeepDetails",
  mounted() {
    onAuth().then(res => {
      this.$store.dispatch("getKeepById", this.keepId);
      this.$store.dispatch("getVaults");
    });
  },
  props: ["keepId"],
  data() {
    return {};
  },
  computed: {
    keep() {
      return this.$store.state.activeKeep;
    },
    vaults() {
      return this.$store.state.vaults;
    }
  },
  methods: {
    async collectKeep(KeepId) {
      let vaults = this.getVaultInfo();
      if (this.$auth.isAuthenticated) {
        let id = await NS.pickVault(vaults);
        let VaultId = parseInt(id);
        if (!isNaN(VaultId)) {
          this.$store.dispatch("createVaultKeep", { KeepId, VaultId });
          this.increaseKeepCount();
        }
      } else {
        NS.errorMessage("You must be logged in to keep");
      }
    },
    getVaultInfo() {
      let newVaults = {};
      this.vaults.map(vault => {
        newVaults[vault.id] = vault.name;
      });
      return newVaults;
    },
    increaseViewCount() {
      this.keep.views++;
      this.$store.dispatch("keepCount", this.keep);
    },
    increaseKeepCount() {
      this.keep.keeps++;
      this.increaseViewCount();
    },
    increaseShareCount() {
      this.keep.shares++;
      this.increaseViewCount();
    }
  }
};
</script>

<style scoped>
.keep-details {
  margin-top: 5em;
  min-height: 90vh;
}
.keep-img {
  max-width: 20em;
  max-height: 30em;
}
.stats-icon {
  font-size: 2.5em;
}
.cp {
  cursor: pointer;
}
.dropdown-menu {
  min-width: 7rem;
}
.dropdown-item {
  border: 1px solid rgb(248, 248, 248);
  font-size: 1.2em;
}
</style>
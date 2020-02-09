<template>
  <div class="vault-details container-fluid">
    <div class="row text-center">
      <div class="col-12">
        <h1>{{vault.name}}</h1>
      </div>
      <div class="col-12">
        <h3>{{vault.description}}</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-6 col-md-3" v-for="keep in privateKeeps" :key="keep.id">
        <Keep :keepData="keep" />
      </div>
    </div>
  </div>
</template>

<script>
import Keep from "@/components/Keep.vue";
import { onAuth } from "@bcwdev/auth0-vue";
export default {
  name: "VaultDetails",
  props: ["vaultId"],
  mounted() {
    onAuth().then(res => {
      this.$store.dispatch("getVaultById", this.vaultId);
      this.$store.dispatch("getKeepsByVaultId", this.vaultId);
    });
  },
  data() {
    return {};
  },
  computed: {
    vault() {
      return this.$store.state.activeVault;
    },
    privateKeeps() {
      return this.$store.state.privateKeeps;
    }
  },
  methods: {},
  components: {
    Keep
  }
};
</script>

<style scoped>
.vault-details {
  background: linear-gradient(
      rgba(150, 150, 150, 0.35),
      rgba(150, 150, 150, 0.35)
    ),
    url("https://imageresizer.static9.net.au/CS7kcoyO0-JzNC-bOYkoq_Hsu2A=/smart/https%3A%2F%2Fprod.static9.net.au%2F_%2Fmedia%2F2017%2F12%2F07%2F14%2F08%2Fbitcoin-vault-fin-cut-4.jpg")
      no-repeat center;
  background-size: cover;
  min-height: 100vh;
}
</style>
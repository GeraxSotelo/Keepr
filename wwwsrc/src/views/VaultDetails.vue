<template>
  <div class="vault-details container-fluid">
    <div class="row text-center">
      <div class="col-12">
        <h1>{{vault.name}}</h1>
        <h1>{{vault.description}}</h1>
      </div>
      <div class="col-12">
        <h3></h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VaultDetails",
  props: ["vaultId"],
  mounted() {
    this.$store.dispatch("getVaultById", this.vaultId);
  },
  data() {
    return {};
  },
  computed: {
    vault() {
      return this.$store.state.activeVault;
    }
  },
  methods: {}
};
</script>

<style scoped>
.vault-details {
  background: linear-gradient(
      rgba(100, 100, 100, 0.35),
      rgba(100, 100, 100, 0.35)
    ),
    url("https://imageresizer.static9.net.au/CS7kcoyO0-JzNC-bOYkoq_Hsu2A=/smart/https%3A%2F%2Fprod.static9.net.au%2F_%2Fmedia%2F2017%2F12%2F07%2F14%2F08%2Fbitcoin-vault-fin-cut-4.jpg")
      no-repeat center;
  background-size: cover;
  min-height: 100vh;
}
</style>
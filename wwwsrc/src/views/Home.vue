<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col-12 text-center">
        <h1>Welcome Home</h1>
      </div>
    </div>
    <div class="row">
      <div class="card-container col-6 col-md-3" v-for="keep in publicKeeps" :key="keep.id">
        <Keep :keepData="keep" />
      </div>
    </div>
  </div>
</template>

<script>
import Keep from "@/components/Keep.vue";
export default {
  name: "home",
  mounted() {
    this.$store.dispatch("getPublicKeeps");
  },
  computed: {
    publicKeeps() {
      return this.$store.state.publicKeeps;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    }
  },
  components: {
    Keep
  }
};
</script>

<style scoped>
</style>

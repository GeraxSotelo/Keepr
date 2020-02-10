<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col-12 text-center">
        <h1>Kreepr</h1>
      </div>
    </div>
    <div class="row">
      <div
        class="card-container col-6 col-md-3 pt-1 pb-1 mt-3 mb-3"
        v-for="keep in publicKeeps"
        :key="keep.id"
      >
        <Keep :keepData="keep" />
      </div>
    </div>
  </div>
</template>

<script>
import { onAuth } from "@bcwdev/auth0-vue";
import Keep from "@/components/Keep.vue";
export default {
  name: "home",
  mounted() {
    this.$store.dispatch("getPublicKeeps");
    onAuth().then(res => {
      this.$store.dispatch("getVaults");
    });
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

<template>
  <div class="home container-fluid bg-light">
    <div class="row pt-5">
      <div class="col-12 text-center mt-5">
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
    <div class="row">
      <div class="col-12 w-100 pl-5">
        <div v-masonry gutter="15" transition-duration="0.3s" item-selector=".item" class="ml-5">
          <div v-masonry-tile class="item" v-for="(keep, index) in publicKeeps" :key="keep.id">
            <Keep :keepData="keep" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onAuth } from "@bcwdev/auth0-vue";
import { VueMasonryPlugin } from "vue-masonry";
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
    },
    shuffle() {
      this.publicKeeps.sort(function() {
        return Math.random() - 0.5;
      });
    }
  },
  components: {
    Keep
  }
};
</script>

<style scoped>
</style>

<template>
  <div class="home container-fluid bg-light">
    <div class="row bg-lgrey pt-5">
      <div class="col-12 text-center mt-5">
        <h1>Keepr</h1>
      </div>
    </div>
    <div class="row bg-lgrey">
      <div class="col-12 w-100 pl-5">
        <div v-masonry gutter="15" transition-duration="0.3s" item-selector=".item" class="ml-5">
          <div v-masonry-tile class="item mt-2" v-for="(keep) in publicKeeps" :key="keep.id">
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
    this.$store.dispatch("resetActiveKeep");
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
.home h1 {
  font-family: "Seaweed Script";
}

.bg-lgrey {
  background-color: lightgrey;
}
</style>

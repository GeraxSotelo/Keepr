<template>
  <div class="home container-fluid bg-light">
    <div class="row home-top-bg align-items-center">
      <div class="col-12 text-center">
        <div>
          <h1>Keepr</h1>
        </div>
      </div>
    </div>
    <div class="row bg-lgrey pt-4">
      <div class="col-12 text-center mt-3">
        <h2>Public Keeps</h2>
      </div>
    </div>
    <div class="row bg-lgrey">
      <div class="col-12 w-100 pl-5">
        <div v-masonry gutter="15" transition-duration="0.3s" item-selector=".item" class="ml-5">
          <div v-masonry-tile class="item mt-3" v-for="(keep) in publicKeeps" :key="keep.id">
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
.home-top-bg {
  background: url("../assets/collection.jpg") no-repeat center;
  background-size: cover;
  height: 500px;
}
.home h1 {
  color: white;
  font-family: "Seaweed Script";
  font-size: 5em;
  text-shadow: 2px 2px 3px black;
}

.bg-lgrey {
  background-color: lightgrey;
}

@media only screen and (max-width: 768px) {
  .home-top-bg {
    height: 375px;
  }
}
</style>

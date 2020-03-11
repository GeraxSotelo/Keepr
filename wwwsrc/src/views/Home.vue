<template>
  <div class="home container-fluid">
    <div class="row home-top-bg align-items-center">
      <div class="col-12 text-center">
        <div>
          <h1>Keepr</h1>
        </div>
      </div>
    </div>
    <div class="row pt-4">
      <div class="col-12 text-center mt-3">
        <h3 class="pb-2 pk-title">PUBLIC KEEPS</h3>
        <SearchBox @search="onSearchChange" class="mb-5" />
        <hr class="pb-2" />
      </div>
    </div>
    <div class="row">
      <div class="col-12 w-100 pl-5">
        <div v-masonry gutter="15" transition-duration="0.3s" item-selector=".item" class="ml-5">
          <div v-masonry-tile class="item mt-3" v-for="(keep) in filteredKeeps" :key="keep.id">
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
import SearchBox from "@/components/SearchBox.vue";
export default {
  name: "home",
  mounted() {
    this.$store.dispatch("getPublicKeeps");
    this.$store.dispatch("resetActiveKeep");
    onAuth().then(res => {
      this.$store.dispatch("getVaults");
    });
  },
  data() {
    return {
      searchfield: ""
    };
  },
  computed: {
    publicKeeps() {
      return this.$store.state.publicKeeps;
    },
    filteredKeeps() {
      return this.publicKeeps.filter(k => {
        return k.name.toLowerCase().includes(this.searchfield.toLowerCase());
      });
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
    onSearchChange(text) {
      this.searchfield = text;
    }
  },
  components: {
    Keep,
    SearchBox
  }
};
</script>

<style scoped>
.home {
  background-color: #eef9bf;
}
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
.pk-title {
  letter-spacing: 0.75em;
}
hr {
  border-color: black;
  width: 50%;
}

@media only screen and (max-width: 768px) {
  .home-top-bg {
    height: 375px;
  }
}
</style>

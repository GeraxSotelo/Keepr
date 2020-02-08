<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col-12 text-center">
        <h1>Welcome Home</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-6 col-md-3" v-for="keep in publicKeeps" :key="keep.id">
        <div class="card">
          <img :src="keep.img || 'https://via.placeholder.com/150'" class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title">{{keep.name}}</h5>
            <p class="card-text">{{keep.description}}</p>
            <a href="#" class="btn btn-primary">Go</a>
            <div class="d-flex justify-content-around">
              <span>Views: {{keep.views}}</span>
              <span>Shares: {{keep.shares}}</span>
              <span>Keeps: {{keep.keeps}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
  }
};
</script>

<style scoped>
.card {
  max-width: 18rem;
}
.card-img-top {
  max-width: 18rem;
}
</style>

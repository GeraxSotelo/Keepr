<template>
  <div class="home container-fluid">
    <row>
      <div class="col-12 text-center">
        <h1>Welcome Home</h1>
      </div>
    </row>
    <div class="row">
      <div class="col-6 col-md-3" v-for="keep in publicKeeps" :key="keep.id">
        <div class="card" style="width: 18rem;">
          <img src="https://via.placeholder.com/150" class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title">{{keep.name}}</h5>
            <p class="card-text">{{keep.description}}</p>
            <a href="#" class="btn btn-primary">Go</a>
            <div>
              <span>{{keep.views}}</span>
              <span>{{keep.shares}}</span>
              <span>{{keep.keeps}}</span>
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

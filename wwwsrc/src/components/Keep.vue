<template>
  <div class="keep">
    <div class="card">
      <img :src="keepData.img" class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">{{keepData.name}}</h5>
        <p class="card-text">{{keepData.description}}</p>
        <a href="#" class="btn btn-primary">Go</a>
        <div class="d-flex justify-content-around">
          <span>Views: {{keepData.views}}</span>
          <span>Shares: {{keepData.shares}}</span>
          <span>Keeps: {{keepData.keeps}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Keep",
  props: ["keepData"],
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
.card {
  max-width: 18rem;
  box-shadow: 5px 15px 10px rgba(0, 0, 0, 0.15);
  transition: 0.25s ease;
}
.card:hover {
  box-shadow: 5px 15px 30px rgba(0, 0, 0, 0.3);
  transform: scale(1.03);
}
.card-img-top {
  max-width: 18rem;
  /* max-height: 18rem; */
}
.card,
.card-img-top,
.card-body {
  border-radius: 10px;
}
</style>
<template>
  <div class="search-box">
    <input type="text" placeholder="Search Keeps" v-model="searchfield" @input="sendText" />
  </div>
</template>

<script>
export default {
  name: "SearchBox",
  props: ["searchChange"],
  data() {
    return {
      searchfield: ""
    };
  },
  methods: {
    sendText() {
      this.$emit("search", this.searchfield);
    }
  }
};
</script>

<style scoped>
input {
  border: 0;
  border-bottom: 2px solid #1eb2a6;
  text-align: center;
  background: transparent;
}

input:focus {
  outline: 0;
}
</style>
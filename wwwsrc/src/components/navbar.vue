<template>
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
    <router-link class="navbar-brand" :to="{ name: 'home' }">
      <span>Keepr</span>
    </router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item" :class="{ active: $route.name == 'home' }">
          <router-link :to="{ name: 'home' }" class="nav-link">Home</router-link>
        </li>
        <li
          class="nav-item"
          v-if="$auth.isAuthenticated"
          :class="{ active: $route.name == 'dashboard' }"
        >
          <router-link class="nav-link" :to="{ name: 'dashboard' }">My Dashboard</router-link>
        </li>
      </ul>
      <span class="navbar-text">
        <button class="btn login-btn" @click="login" v-if="!$auth.isAuthenticated">Login</button>
        <button class="btn logout-btn" @click="logout" v-else>Logout</button>
      </span>
    </div>
  </nav>
</template>

<script>
import axios from "axios";

let _api = axios.create({
  baseURL: "https://localhost:5001",
  withCredentials: true
});
export default {
  name: "Navbar",
  methods: {
    async login() {
      await this.$auth.loginWithPopup();
      await this.$auth.getUserData();
      this.$store.dispatch("setBearer", this.$auth.bearer);
      console.log("this.$auth.user: ");
      console.log(this.$auth.user);
    },
    async logout() {
      await this.$auth.logout();
      this.$store.dispatch("resetBearer");
      this.$router.push({ name: "home" });
    }
  }
};
</script>

<style scoped>
.navbar {
  background-color: #6a8caf;
}
.navbar .navbar-brand {
  font-family: "Seaweed Script";
}
.login-btn {
  color: white;
  background-color: transparent;
  border-color: white;
}
.logout-btn {
  color: #fff;
  background-color: #75b79e;
  border-color: #cecece;
}
</style>

import Vue from "vue";
import Router from "vue-router";
// @ts-ignore
import Home from "./views/Home.vue";
// @ts-ignore
import Dashboard from "./views/Dashboard.vue";
// @ts-ignore
import VaultDetails from "./views/VaultDetails.vue";
// @ts-ignore
import KeepDetails from "./views/KeepDetails.vue";
import { authGuard } from "@bcwdev/auth0-vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
      beforeEnter: authGuard
    },
    {
      path: "/vaultdetails/:vaultId",
      name: "vaultdetails",
      component: VaultDetails,
      beforeEnter: authGuard,
      props: true
    },
    {
      path: "/keepdetails/:keepId",
      name: "keepdetails",
      component: KeepDetails,
      props: true
    }
  ]
});

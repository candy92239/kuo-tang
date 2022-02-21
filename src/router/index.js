import { createRouter, createWebHashHistory } from "vue-router";
import Routes from "@/datas/routes.js";

const routes = Routes;

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

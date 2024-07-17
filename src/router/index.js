import Routes from "@/datas/routes.js";
import { createRouter, createWebHistory } from "vue-router";

const routes = Routes;

const router = createRouter({
  history: createWebHistory("/kuo-tang/"),
  routes,
});

export default router;

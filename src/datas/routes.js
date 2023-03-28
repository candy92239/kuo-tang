import Home from "../views/Home.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { transition: "slide-left" },
  },
  {
    path: "/kuo-tang/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    meta: { transition: "slide-left" },
  },
  {
    path: "/kuo-tang/about",
    name: "Contact",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Contact.vue"),
    meta: { transition: "slide-left" },
  },
  {
    path: "/kuo-tang/about",
    name: "eLearning Demo",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/DEVLdemo.vue"),
  },
];

export default routes;

import Home from "../views/Home.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { transition: "slide-left", showInMenu: true },
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    meta: { transition: "slide-left", showInMenu: true },
  },
  {
    path: "/contact",
    name: "Contact",
    component: () =>
      import(/* webpackChunkName: "contact" */ "../views/Contact.vue"),
    meta: { transition: "slide-left", showInMenu: true },
  },
  {
    path: "/devl",
    name: "eLearning Demo",
    component: () =>
      import(/* webpackChunkName: "devl" */ "../views/DEVLdemo.vue"),
    meta: { showInMenu: false },
  },
];

export default routes;

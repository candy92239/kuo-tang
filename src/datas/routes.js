import Home from "../views/Home.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { transition: "slide-left", showInMenu: true },
    children: [
      {
        path: "design",
        name: "MediaDesign",
      },
    ],
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
  {
    path: "/oise_rwl",
    name: "OISE RWL",
    component: () =>
      import(/* webpackChunkName: "animation" */ "../views/home/Sub_OISE.vue"),
    meta: { showInMenu: false },
  },
  {
    path: "/msh",
    name: "MSH",
    component: () =>
      import(/* webpackChunkName: "animation" */ "../views/home/Sub_MSH.vue"),
    meta: { showInMenu: false },
  },
  {
    path: "/postcard",
    name: "Postcard",
    component: () =>
      import(
        /* webpackChunkName: "animation" */ "../views/home/Sub_postcard.vue"
      ),
    meta: { showInMenu: false },
  },
];

export default routes;

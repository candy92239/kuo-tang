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
    component: () => import("../views/About.vue"),
    meta: { transition: "slide-left", showInMenu: true },
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/Contact.vue"),
    meta: { transition: "slide-left", showInMenu: true },
  },
  {
    path: "/devl",
    name: "eLearning Demo",
    component: () => import("../views/DEVLdemo.vue"),
    meta: { showInMenu: false },
  },
  {
    path: "/oise_rwl",
    name: "OISE RWL",
    component: () => import("../views/home/Sub_OISE.vue"),
    meta: { showInMenu: false },
  },
  {
    path: "/msh",
    name: "MSH",
    component: () => import("../views/home/Sub_MSH.vue"),
    meta: { showInMenu: false },
  },
  {
    path: "/postcard",
    name: "Postcard",
    component: () => import("../views/home/Sub_postcard.vue"),
    meta: { showInMenu: false },
  },
  {
    path: "/book",
    name: "Children Book",
    component: () => import("../views/home/Sub_book.vue"),
    meta: { showInMenu: false },
  },
  {
    path: "/digital",
    name: "Digital Illustration",
    component: () => import("../views/home/Sub_digital.vue"),
    meta: { showInMenu: false },
  },
];

export default routes;

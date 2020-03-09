import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/samples/:handsomeParam?",
    name: "Samples",
    component: () => import("../views/Samples.vue"),
    props: true
  },
  {
    path: "/big-picture",
    name: "big-picture",
    component: () => import("../views/BigPicture.vue")
  },
  {
    path: "/advanced-features",
    name: "advanced-features",
    component: () => import("../views/AdvancedFeatures.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

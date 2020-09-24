import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Contact from "../views/Contact.vue";
import Sample from "../views/Sample.vue";
import Blog from "../views/Blog.vue";
import Concept from "../views/Concept.vue";
import TransitionName from "../views/TransitionName.vue";
// import Header from "../compoents/Header.vue";
// Vue.component('app-header', Header);

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/sample",
    name: "Sample",
    component: Sample,
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
  },
  {
    path: "/concept",
    name: "Concept",
    component: Concept,
  },
  {
    path: "/transition-name",
    name: "TransitionName",
    component: TransitionName,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;

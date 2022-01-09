import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import DataBind from "../views/DataBind.vue";
import MethodComputed from "../views/MethodComputed.vue";
import page404 from "../views/page404.vue";
import Store from "../views/Store.vue";
import CompProps from "../views/CompProps.vue";
import Comp from "../views/Comp.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/MethodComputed",
    name: "MethodComputed",
    component: MethodComputed,
  },
  {
    path: "/DataBind",
    name: "DataBind",
    component: DataBind,
  },
  {
    path: "/Store",
    name: "Store",
    component: Store,
  },
  {
    path: "/CompProps",
    name: "CompProps",
    component: CompProps,
  },
  {
    path: "/Comp",
    name: "Comp",
    component: Comp,
  },
  {
    path: "/:catchAll(.*)",
    name: "page404",
    component: page404,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

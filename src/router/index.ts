import { createRouter, createWebHistory } from "vue-router";

import Main from "../components/Main.vue";
import Settings from "../components/Settings.vue";
import Welcome from "../components/Welcome.vue";
import Changelog from "../components/Changelog.vue";

const routes = [
  {
    path: "/",
    name: "Welcome",
    component: Welcome,
  },
  {
    path: "/main",
    name: "Main",
    component: Main,
  },
  {
    path: "/settings",
    name: "Settings",
    component: Settings,
  },
  {
    path: "/changelog",
    name: "Changelog",
    component: Changelog,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
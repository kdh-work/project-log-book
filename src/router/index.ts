import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

// 라우터 메타데이터 타입 정의
declare module "vue-router" {
  interface RouteMeta {
    title: string;
    section?: string;
  }
}

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    meta: { title: "Home", section: "Intro" },
    component: () => import("../pages/Home.vue"),
  },
  {
    path: "/about",
    name: "About",
    meta: { title: "About", section: "Intro" },
    component: () => import("../pages/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

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
    path: "/multichart",
    name: "MultiChart",
    meta: { title: "Multi-Chart", section: "Tools" },
    component: () => import("../pages/MultiChart.vue"),
  },
  {
    path: "/playchart",
    name: "PlayChart",
    meta: { title: "Play-Chart", section: "Tools" },
    component: () => import("../pages/PlayChart.vue"),
  },
  {
    path: "/detailchart",
    name: "DetailChart",
    meta: { title: "Detail-Chart", section: "Tools" },
    component: () => import("../pages/DetailChart.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

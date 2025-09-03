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
  {
    path: "/fixlistOrigin",
    name: "FixListOrigin",
    meta: { title: "Fix-List-Origin", section: "Docs" },
    component: () => import("../pages/FixListOrigin.vue"),
  },
  {
    path: "/fixlist",
    name: "FixList",
    meta: { title: "Fix-List", section: "Docs" },
    component: () => import("../pages/FixList.vue"),
  },
  {
    path: "/playtimeserieschart",
    name: "PlayTimeSeriesChart",
    meta: { title: "Play Time Series Chart", section: "Tools" },
    component: () => import("../pages/PlayTimeSeriesChart.vue"),
  },
  {
    path: "/dynamicstep",
    name: "DynamicStep",
    meta: { title: "Dynamic Step", section: "Tools" },
    component: () => import("../pages/DynamicStep.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

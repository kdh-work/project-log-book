import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

// 정적 import로 변경 (GitHub Pages 호환성을 위해)
import Home from "../pages/Home.vue";
import MultiChart from "../pages/MultiChart.vue";
import PlayChart from "../pages/PlayChart.vue";
import DetailChart from "../pages/DetailChart.vue";
import FixListOrigin from "../pages/FixListOrigin.vue";
import FixList from "../pages/FixList.vue";
import PlayTimeSeriesChart from "../pages/PlayTimeSeriesChart.vue";
import DynamicStep from "../pages/DynamicStep.vue";

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
    component: Home,
  },
  {
    path: "/multichart",
    name: "MultiChart",
    meta: { title: "Multi-Chart", section: "Tools" },
    component: MultiChart,
  },
  {
    path: "/playchart",
    name: "PlayChart",
    meta: { title: "Play-Chart", section: "Tools" },
    component: PlayChart,
  },
  {
    path: "/detailchart",
    name: "DetailChart",
    meta: { title: "Detail-Chart", section: "Tools" },
    component: DetailChart,
  },
  {
    path: "/fixlistOrigin",
    name: "FixListOrigin",
    meta: { title: "Fix-List-Origin", section: "Docs" },
    component: FixListOrigin,
  },
  {
    path: "/fixlist",
    name: "FixList",
    meta: { title: "Fix-List", section: "Docs" },
    component: FixList,
  },
  {
    path: "/playtimeserieschart",
    name: "PlayTimeSeriesChart",
    meta: { title: "Play Time Series Chart", section: "Tools" },
    component: PlayTimeSeriesChart,
  },
  {
    path: "/dynamicstep",
    name: "DynamicStep",
    meta: { title: "Dynamic Step", section: "Tools" },
    component: DynamicStep,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// 라우터 디버깅
router.beforeEach((to, from, next) => {
  console.log("🚀 라우터 이동 시작:", { from: from.path, to: to.path, name: to.name });
  next();
});

router.afterEach((to, from) => {
  //console.log("✅ 라우터 이동 완료:", { from: from.path, to: to.path, name: to.name });
  console.log("라우터 이동 완료 1: ", { from: from.path });
  console.log("라우터 이동 완료 2: ", { to: to.path });
  console.log("라우터 이동 완료 3: ", { name: to.name });
});

// 라우터 에러 핸들링 (정적 import 사용으로 에러 발생 가능성 감소)
router.onError((error) => {
  console.error("🚨 라우터 에러 발생:", error);
  // 에러 발생 시 홈으로 리다이렉트
  console.log("라우터 에러로 인한 홈 리다이렉트");
  router.push('/');
});

export default router;

<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">Multi-Chart</h1>
    <p class="text-gray-600 mb-6">
      다양한 차트를 한 번에 볼 수 있는 멀티 차트 도구입니다.
    </p>

    <!-- 반응형 그리드: 화면 크기에 따라 열 수 조정 -->
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-6"
    >
      <!-- 차트 1: 막대 차트 -->
      <div class="bg-white p-4 rounded-lg shadow min-h-[300px] overflow-hidden">
        <h3 class="text-lg font-semibold mb-2">막대 차트</h3>
        <div
          ref="barChart"
          class="w-full h-64 min-h-[256px] overflow-hidden"
        ></div>
      </div>

      <!-- 차트 2: 선 차트 -->
      <div class="bg-white p-4 rounded-lg shadow min-h-[300px] overflow-hidden">
        <h3 class="text-lg font-semibold mb-2">선 차트</h3>
        <div
          ref="lineChart"
          class="w-full h-64 min-h-[256px] overflow-hidden"
        ></div>
      </div>

      <!-- 차트 3: 파이 차트 -->
      <div class="bg-white p-4 rounded-lg shadow min-h-[300px] overflow-hidden">
        <h3 class="text-lg font-semibold mb-2">파이 차트</h3>
        <div
          ref="pieChart"
          class="w-full h-64 min-h-[256px] overflow-hidden"
        ></div>
      </div>

      <!-- 차트 4: 도넛 차트 -->
      <div class="bg-white p-4 rounded-lg shadow min-h-[300px] overflow-hidden">
        <h3 class="text-lg font-semibold mb-2">도넛 차트</h3>
        <div
          ref="doughnutChart"
          class="w-full h-64 min-h-[256px] overflow-hidden"
        ></div>
      </div>

      <!-- 차트 5: 영역 차트 -->
      <div class="bg-white p-4 rounded-lg shadow min-h-[300px] overflow-hidden">
        <h3 class="text-lg font-semibold mb-2">영역 차트</h3>
        <div
          ref="areaChart"
          class="w-full h-64 min-h-[256px] overflow-hidden"
        ></div>
      </div>

      <!-- 차트 6: 산점도 -->
      <div class="bg-white p-4 rounded-lg shadow min-h-[300px] overflow-hidden">
        <h3 class="text-lg font-semibold mb-2">산점도</h3>
        <div
          ref="scatterChart"
          class="w-full h-64 min-h-[256px] overflow-hidden"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import * as echarts from "echarts";

// 차트 DOM 참조
const barChart = ref<HTMLElement>();
const lineChart = ref<HTMLElement>();
const pieChart = ref<HTMLElement>();
const doughnutChart = ref<HTMLElement>();
const areaChart = ref<HTMLElement>();
const scatterChart = ref<HTMLElement>();

// ECharts 인스턴스들
let barChartInstance: echarts.ECharts | null = null;
let lineChartInstance: echarts.ECharts | null = null;
let pieChartInstance: echarts.ECharts | null = null;
let doughnutChartInstance: echarts.ECharts | null = null;
let areaChartInstance: echarts.ECharts | null = null;
let scatterChartInstance: echarts.ECharts | null = null;

// 공통 데이터 (모든 차트에서 사용)
const commonData = [
  { name: "1월", value: 120 },
  { name: "2월", value: 200 },
  { name: "3월", value: 150 },
  { name: "4월", value: 80 },
  { name: "5월", value: 70 },
  { name: "6월", value: 110 },
];

// 차트 초기화 함수
const initCharts = () => {
  // 막대 차트
  if (barChart.value) {
    barChartInstance = echarts.init(barChart.value);
    barChartInstance.setOption({
      title: { text: "월별 매출" },
      xAxis: { type: "category", data: commonData.map((d) => d.name) },
      yAxis: { type: "value" },
      series: [
        {
          data: commonData.map((d) => d.value),
          type: "bar",
          itemStyle: { color: "#5470c6" },
        },
      ],
    });
  }

  // 선 차트
  if (lineChart.value) {
    lineChartInstance = echarts.init(lineChart.value);
    lineChartInstance.setOption({
      title: { text: "월별 트렌드" },
      xAxis: { type: "category", data: commonData.map((d) => d.name) },
      yAxis: { type: "value" },
      series: [
        {
          data: commonData.map((d) => d.value),
          type: "line",
          smooth: true,
          itemStyle: { color: "#91cc75" },
        },
      ],
    });
  }

  // 파이 차트
  if (pieChart.value) {
    pieChartInstance = echarts.init(pieChart.value);
    pieChartInstance.setOption({
      title: { text: "카테고리별 비율" },
      series: [
        {
          data: commonData,
          type: "pie",
          radius: "60%",
        },
      ],
    });
  }

  // 도넛 차트
  if (doughnutChart.value) {
    doughnutChartInstance = echarts.init(doughnutChart.value);
    doughnutChartInstance.setOption({
      title: { text: "도넛 차트" },
      series: [
        {
          data: commonData,
          type: "pie",
          radius: ["40%", "70%"],
        },
      ],
    });
  }

  // 영역 차트
  if (areaChart.value) {
    areaChartInstance = echarts.init(areaChart.value);
    areaChartInstance.setOption({
      title: { text: "영역 차트" },
      xAxis: { type: "category", data: commonData.map((d) => d.name) },
      yAxis: { type: "value" },
      series: [
        {
          data: commonData.map((d) => d.value),
          type: "line",
          areaStyle: {},
          itemStyle: { color: "#fac858" },
        },
      ],
    });
  }

  // 산점도
  if (scatterChart.value) {
    scatterChartInstance = echarts.init(scatterChart.value);
    scatterChartInstance.setOption({
      title: { text: "산점도" },
      xAxis: { type: "value" },
      yAxis: { type: "value" },
      series: [
        {
          data: commonData.map((d, i) => [i, d.value]),
          type: "scatter",
          symbolSize: 20,
          itemStyle: { color: "#ee6666" },
        },
      ],
    });
  }
};

// 차트 해제 함수
const disposeCharts = () => {
  barChartInstance?.dispose();
  lineChartInstance?.dispose();
  pieChartInstance?.dispose();
  doughnutChartInstance?.dispose();
  areaChartInstance?.dispose();
  scatterChartInstance?.dispose();
};

onMounted(() => {
  initCharts();
});

onUnmounted(() => {
  disposeCharts();
});
</script>

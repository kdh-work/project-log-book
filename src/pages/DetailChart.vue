<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">Detail-Chart</h1>
    <p class="text-gray-600 mb-6">
      각 차트를 클릭하여 모달로 확대해서 볼 수 있습니다.
    </p>

    <!-- 반응형 그리드: 화면 크기에 따라 열 수 조정 -->
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-4"
    >
      <!-- 차트 1: 막대 차트 -->
      <div class="bg-white p-4 rounded-lg shadow relative min-h-[300px]">
        <div class="flex justify-between items-center mb-2">
          <h3 class="text-lg font-semibold">막대 차트</h3>
          <button
            @click="openModal('bar')"
            class="text-blue-500 hover:text-blue-700 text-sm font-medium"
          >
            확대 보기
          </button>
        </div>
        <div ref="barChart" class="w-full h-64 min-h-[256px]"></div>
      </div>

      <!-- 차트 2: 선 차트 -->
      <div class="bg-white p-4 rounded-lg shadow relative min-h-[300px]">
        <div class="flex justify-between items-center mb-2">
          <h3 class="text-lg font-semibold">선 차트</h3>
          <button
            @click="openModal('line')"
            class="text-blue-500 hover:text-blue-700 text-sm font-medium"
          >
            확대 보기
          </button>
        </div>
        <div ref="lineChart" class="w-full h-64 min-h-[256px]"></div>
      </div>

      <!-- 차트 3: 파이 차트 -->
      <div class="bg-white p-4 rounded-lg shadow relative min-h-[300px]">
        <div class="flex justify-between items-center mb-2">
          <h3 class="text-lg font-semibold">파이 차트</h3>
          <button
            @click="openModal('pie')"
            class="text-blue-500 hover:text-blue-700 text-sm font-medium"
          >
            확대 보기
          </button>
        </div>
        <div ref="pieChart" class="w-full h-64 min-h-[256px]"></div>
      </div>

      <!-- 차트 4: 도넛 차트 -->
      <div class="bg-white p-4 rounded-lg shadow relative min-h-[300px]">
        <div class="flex justify-between items-center mb-2">
          <h3 class="text-lg font-semibold">도넛 차트</h3>
          <button
            @click="openModal('doughnut')"
            class="text-blue-500 hover:text-blue-700 text-sm font-medium"
          >
            확대 보기
          </button>
        </div>
        <div ref="doughnutChart" class="w-full h-64 min-h-[256px]"></div>
      </div>

      <!-- 차트 5: 영역 차트 -->
      <div class="bg-white p-4 rounded-lg shadow relative min-h-[300px]">
        <div class="flex justify-between items-center mb-2">
          <h3 class="text-lg font-semibold">영역 차트</h3>
          <button
            @click="openModal('area')"
            class="text-blue-500 hover:text-blue-700 text-sm font-medium"
          >
            확대 보기
          </button>
        </div>
        <div ref="areaChart" class="w-full h-64 min-h-[256px]"></div>
      </div>

      <!-- 차트 6: 산점도 -->
      <div class="bg-white p-4 rounded-lg shadow relative min-h-[300px]">
        <div class="flex justify-between items-center mb-2">
          <h3 class="text-lg font-semibold">산점도</h3>
          <button
            @click="openModal('scatter')"
            class="text-blue-500 hover:text-blue-700 text-sm font-medium"
          >
            확대 보기
          </button>
        </div>
        <div ref="scatterChart" class="w-full h-64 min-h-[256px]"></div>
      </div>
    </div>

    <!-- 모달 -->
    <a-modal
      v-model:open="isModalOpen"
      :title="modalTitle"
      width="80%"
      :footer="null"
      @cancel="closeModal"
    >
      <div class="w-full h-96" ref="modalChart"></div>
    </a-modal>
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
const modalChart = ref<HTMLElement>();

// ECharts 인스턴스들
let barChartInstance: echarts.ECharts | null = null;
let lineChartInstance: echarts.ECharts | null = null;
let pieChartInstance: echarts.ECharts | null = null;
let doughnutChartInstance: echarts.ECharts | null = null;
let areaChartInstance: echarts.ECharts | null = null;
let scatterChartInstance: echarts.ECharts | null = null;
let modalChartInstance: echarts.ECharts | null = null;

// 모달 상태
const isModalOpen = ref(false);
const modalTitle = ref("");
const currentChartType = ref("");

// 공통 데이터
const commonData = [
  { name: "1월", value: 120 },
  { name: "2월", value: 200 },
  { name: "3월", value: 150 },
  { name: "4월", value: 80 },
  { name: "5월", value: 70 },
  { name: "6월", value: 110 },
];

// 차트 옵션 생성 함수
const getChartOption = (type: string) => {
  const baseOption = {
    title: { text: `${type} 차트` },
  };

  switch (type) {
    case "bar":
      return {
        ...baseOption,
        xAxis: { type: "category", data: commonData.map((d) => d.name) },
        yAxis: { type: "value" },
        series: [
          {
            data: commonData.map((d) => d.value),
            type: "bar",
            itemStyle: { color: "#5470c6" },
          },
        ],
      };

    case "line":
      return {
        ...baseOption,
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
      };

    case "pie":
      return {
        ...baseOption,
        series: [
          {
            data: commonData,
            type: "pie",
            radius: "60%",
          },
        ],
      };

    case "doughnut":
      return {
        ...baseOption,
        series: [
          {
            data: commonData,
            type: "pie",
            radius: ["40%", "70%"],
          },
        ],
      };

    case "area":
      return {
        ...baseOption,
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
      };

    case "scatter":
      return {
        ...baseOption,
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
      };

    default:
      return baseOption;
  }
};

// 모달 열기
const openModal = (chartType: string) => {
  currentChartType.value = chartType;
  modalTitle.value = `${chartType} 차트 - 확대 보기`;
  isModalOpen.value = true;

  // 모달이 열린 후 차트 초기화
  setTimeout(() => {
    if (modalChart.value) {
      modalChartInstance = echarts.init(modalChart.value);
      modalChartInstance.setOption(getChartOption(chartType));
    }
  }, 100);
};

// 모달 닫기
const closeModal = () => {
  isModalOpen.value = false;
  if (modalChartInstance) {
    modalChartInstance.dispose();
    modalChartInstance = null;
  }
};

// 차트 초기화 함수
const initCharts = () => {
  // 막대 차트
  if (barChart.value) {
    barChartInstance = echarts.init(barChart.value);
    barChartInstance.setOption(getChartOption("bar"));
  }

  // 선 차트
  if (lineChart.value) {
    lineChartInstance = echarts.init(lineChart.value);
    lineChartInstance.setOption(getChartOption("line"));
  }

  // 파이 차트
  if (pieChart.value) {
    pieChartInstance = echarts.init(pieChart.value);
    pieChartInstance.setOption(getChartOption("pie"));
  }

  // 도넛 차트
  if (doughnutChart.value) {
    doughnutChartInstance = echarts.init(doughnutChart.value);
    doughnutChartInstance.setOption(getChartOption("doughnut"));
  }

  // 영역 차트
  if (areaChart.value) {
    areaChartInstance = echarts.init(areaChart.value);
    areaChartInstance.setOption(getChartOption("area"));
  }

  // 산점도
  if (scatterChart.value) {
    scatterChartInstance = echarts.init(scatterChart.value);
    scatterChartInstance.setOption(getChartOption("scatter"));
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
  modalChartInstance?.dispose();
};

onMounted(() => {
  initCharts();
});

onUnmounted(() => {
  disposeCharts();
});
</script>

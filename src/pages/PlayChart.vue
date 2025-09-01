<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">Play-Chart</h1>
    <p class="text-gray-600 mb-6">
      실시간으로 데이터가 흐르는 라이브 차트입니다.
    </p>

    <!-- 컨트롤 패널 -->
    <div class="bg-white p-4 rounded-lg shadow mb-6">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-4">
          <button
            @click="togglePlay"
            :class="[
              'px-4 py-2 rounded font-semibold transition-colors',
              isPlaying
                ? 'bg-red-500 text-white hover:bg-red-600'
                : 'bg-green-500 text-white hover:bg-green-600',
            ]"
          >
            {{ isPlaying ? "정지" : "재생" }}
          </button>
          <span class="text-sm text-gray-600">
            상태: {{ isPlaying ? "실시간 업데이트 중" : "정지됨" }}
          </span>
        </div>
        <div class="text-sm text-gray-500">
          마지막 업데이트: {{ lastUpdateTime }}
        </div>
      </div>
    </div>

    <!-- 6개 차트를 2x3 그리드로 배치 -->
    <div class="grid grid-cols-2 gap-4">
      <!-- 차트 1: 막대 차트 -->
      <div class="bg-white p-4 rounded-lg shadow">
        <h3 class="text-lg font-semibold mb-2">실시간 막대 차트</h3>
        <div ref="barChart" class="w-full h-64"></div>
      </div>

      <!-- 차트 2: 선 차트 -->
      <div class="bg-white p-4 rounded-lg shadow">
        <h3 class="text-lg font-semibold mb-2">실시간 선 차트</h3>
        <div ref="lineChart" class="w-full h-64"></div>
      </div>

      <!-- 차트 3: 파이 차트 -->
      <div class="bg-white p-4 rounded-lg shadow">
        <h3 class="text-lg font-semibold mb-2">실시간 파이 차트</h3>
        <div ref="pieChart" class="w-full h-64"></div>
      </div>

      <!-- 차트 4: 도넛 차트 -->
      <div class="bg-white p-4 rounded-lg shadow">
        <h3 class="text-lg font-semibold mb-2">실시간 도넛 차트</h3>
        <div ref="doughnutChart" class="w-full h-64"></div>
      </div>

      <!-- 차트 5: 영역 차트 -->
      <div class="bg-white p-4 rounded-lg shadow">
        <h3 class="text-lg font-semibold mb-2">실시간 영역 차트</h3>
        <div ref="areaChart" class="w-full h-64"></div>
      </div>

      <!-- 차트 6: 산점도 -->
      <div class="bg-white p-4 rounded-lg shadow">
        <h3 class="text-lg font-semibold mb-2">실시간 산점도</h3>
        <div ref="scatterChart" class="w-full h-64"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from "vue";
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

// 실시간 데이터 상태
const isPlaying = ref(false);
const lastUpdateTime = ref("");
let updateInterval: NodeJS.Timeout | null = null;

// 실시간 데이터 (최근 10개 데이터 포인트 유지)
const realtimeData = ref<Array<{ name: string; value: number }>>([]);

// 랜덤 데이터 생성 함수
const generateRandomData = () => {
  const categories = ["A", "B", "C", "D", "E", "F"];
  return categories.map((category) => ({
    name: category,
    value: Math.floor(Math.random() * 200) + 50, // 50-250 사이의 랜덤 값
  }));
};

// 시간 포맷 함수
const formatTime = (date: Date) => {
  return date.toLocaleTimeString("ko-KR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
};

// 실시간 데이터 업데이트
const updateRealtimeData = () => {
  const newData = generateRandomData();
  realtimeData.value = newData;
  lastUpdateTime.value = formatTime(new Date());

  // 모든 차트 업데이트
  updateAllCharts();
};

// 모든 차트 업데이트
const updateAllCharts = () => {
  const data = realtimeData.value;

  // 막대 차트 업데이트
  if (barChartInstance) {
    barChartInstance.setOption({
      xAxis: { data: data.map((d) => d.name) },
      series: [{ data: data.map((d) => d.value) }],
    });
  }

  // 선 차트 업데이트
  if (lineChartInstance) {
    lineChartInstance.setOption({
      xAxis: { data: data.map((d) => d.name) },
      series: [{ data: data.map((d) => d.value) }],
    });
  }

  // 파이 차트 업데이트
  if (pieChartInstance) {
    pieChartInstance.setOption({
      series: [{ data: data }],
    });
  }

  // 도넛 차트 업데이트
  if (doughnutChartInstance) {
    doughnutChartInstance.setOption({
      series: [{ data: data }],
    });
  }

  // 영역 차트 업데이트
  if (areaChartInstance) {
    areaChartInstance.setOption({
      xAxis: { data: data.map((d) => d.name) },
      series: [{ data: data.map((d) => d.value) }],
    });
  }

  // 산점도 업데이트
  if (scatterChartInstance) {
    scatterChartInstance.setOption({
      series: [{ data: data.map((d, i) => [i, d.value]) }],
    });
  }
};

// 재생/정지 토글
const togglePlay = () => {
  if (isPlaying.value) {
    // 정지
    if (updateInterval) {
      clearInterval(updateInterval);
      updateInterval = null;
    }
    isPlaying.value = false;
  } else {
    // 재생
    updateInterval = setInterval(updateRealtimeData, 1000); // 1초마다 업데이트
    isPlaying.value = true;
    updateRealtimeData(); // 즉시 한 번 실행
  }
};

// 차트 초기화 함수
const initCharts = () => {
  // 초기 데이터 생성
  realtimeData.value = generateRandomData();
  lastUpdateTime.value = formatTime(new Date());

  // 막대 차트
  if (barChart.value) {
    barChartInstance = echarts.init(barChart.value);
    barChartInstance.setOption({
      title: { text: "실시간 막대 차트" },
      xAxis: { type: "category", data: realtimeData.value.map((d) => d.name) },
      yAxis: { type: "value" },
      series: [
        {
          data: realtimeData.value.map((d) => d.value),
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
      title: { text: "실시간 선 차트" },
      xAxis: { type: "category", data: realtimeData.value.map((d) => d.name) },
      yAxis: { type: "value" },
      series: [
        {
          data: realtimeData.value.map((d) => d.value),
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
      title: { text: "실시간 파이 차트" },
      series: [
        {
          data: realtimeData.value,
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
      title: { text: "실시간 도넛 차트" },
      series: [
        {
          data: realtimeData.value,
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
      title: { text: "실시간 영역 차트" },
      xAxis: { type: "category", data: realtimeData.value.map((d) => d.name) },
      yAxis: { type: "value" },
      series: [
        {
          data: realtimeData.value.map((d) => d.value),
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
      title: { text: "실시간 산점도" },
      xAxis: { type: "value" },
      yAxis: { type: "value" },
      series: [
        {
          data: realtimeData.value.map((d, i) => [i, d.value]),
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
  if (updateInterval) {
    clearInterval(updateInterval);
  }
  disposeCharts();
});
</script>

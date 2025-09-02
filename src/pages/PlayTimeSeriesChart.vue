<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">Play Time Series Chart</h1>
         <p class="text-gray-600 mb-6">
       6개의 타임시리즈 차트가 10초마다 실시간으로 업데이트됩니다.
     </p>

    <!-- 컨트롤 버튼 -->
    <div class="mb-6 flex items-center space-x-4">
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
      <span class="text-sm text-gray-600 ml-4">
        상태: {{ isPlaying ? "실시간 업데이트 중" : "정지됨" }}
      </span>
      <span class="text-sm text-gray-500">
        다음 업데이트: {{ nextUpdateTime }}
      </span>
    </div>

    <!-- 반응형 그리드: 6개 차트를 2x3으로 배치 -->
    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      <!-- 차트 1: CPU 사용률 -->
      <div class="bg-white p-4 rounded-lg shadow">
        <h3 class="text-lg font-semibold mb-3 text-blue-600">CPU 사용률 (%)</h3>
        <div ref="cpuChart" class="w-full h-64"></div>
      </div>

      <!-- 차트 2: 메모리 사용률 -->
      <div class="bg-white p-4 rounded-lg shadow">
        <h3 class="text-lg font-semibold mb-3 text-green-600">메모리 사용률 (%)</h3>
        <div ref="memoryChart" class="w-full h-64"></div>
      </div>

      <!-- 차트 3: 네트워크 트래픽 -->
      <div class="bg-white p-4 rounded-lg shadow">
        <h3 class="text-lg font-semibold mb-3 text-purple-600">네트워크 트래픽 (MB/s)</h3>
        <div ref="networkChart" class="w-full h-64"></div>
      </div>

      <!-- 차트 4: 디스크 I/O -->
      <div class="bg-white p-4 rounded-lg shadow">
        <h3 class="text-lg font-semibold mb-3 text-orange-600">디스크 I/O (MB/s)</h3>
        <div ref="diskChart" class="w-full h-64"></div>
      </div>

      <!-- 차트 5: 온도 -->
      <div class="bg-white p-4 rounded-lg shadow">
        <h3 class="text-lg font-semibold mb-3 text-red-600">시스템 온도 (°C)</h3>
        <div ref="temperatureChart" class="w-full h-64"></div>
      </div>

      <!-- 차트 6: 전력 소비 -->
      <div class="bg-white p-4 rounded-lg shadow">
        <h3 class="text-lg font-semibold mb-3 text-indigo-600">전력 소비 (W)</h3>
        <div ref="powerChart" class="w-full h-64"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import * as echarts from "echarts";

// 차트 DOM 참조
const cpuChart = ref<HTMLElement>();
const memoryChart = ref<HTMLElement>();
const networkChart = ref<HTMLElement>();
const diskChart = ref<HTMLElement>();
const temperatureChart = ref<HTMLElement>();
const powerChart = ref<HTMLElement>();

// ECharts 인스턴스들
let cpuChartInstance: echarts.ECharts | null = null;
let memoryChartInstance: echarts.ECharts | null = null;
let networkChartInstance: echarts.ECharts | null = null;
let diskChartInstance: echarts.ECharts | null = null;
let temperatureChartInstance: echarts.ECharts | null = null;
let powerChartInstance: echarts.ECharts | null = null;

// 상태 관리
const isPlaying = ref(false);
const nextUpdateTime = ref("--:--");
let updateInterval: NodeJS.Timeout | null = null;
let updateTimer: NodeJS.Timeout | null = null;

// 차트 데이터 (최근 20개 포인트 유지)
const maxDataPoints = 20;
const chartData = {
  cpu: [] as [string, number][],
  memory: [] as [string, number][],
  network: [] as [string, number][],
  disk: [] as [string, number][],
  temperature: [] as [string, number][],
  power: [] as [string, number][],
};

// 현재 시간을 포맷팅하는 함수
function formatTime(date: Date): string {
  return date.toLocaleTimeString('ko-KR', { 
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit' 
  });
}

// 다음 업데이트 시간을 계산하는 함수
function updateNextUpdateTime() {
  const now = new Date();
  const next = new Date(now.getTime() + 10000); // 10초 후
  nextUpdateTime.value = formatTime(next);
}

// 랜덤 데이터 생성 함수들
function generateCPUData(): number {
  return Math.floor(Math.random() * 40) + 20; // 20-60%
}

function generateMemoryData(): number {
  return Math.floor(Math.random() * 30) + 50; // 50-80%
}

function generateNetworkData(): number {
  return Math.random() * 100 + 50; // 50-150 MB/s
}

function generateDiskData(): number {
  return Math.random() * 80 + 20; // 20-100 MB/s
}

function generateTemperatureData(): number {
  return Math.random() * 20 + 40; // 40-60°C
}

function generatePowerData(): number {
  return Math.random() * 100 + 200; // 200-300W
}

// 차트 옵션 생성 함수
function getChartOption(
  title: string,
  data: [string, number][],
  color: string,
  yAxisName: string
) {
  return {
    title: {
      text: title,
      textStyle: { fontSize: 14, fontWeight: 'bold' },
      left: 'center',
      top: 10
    },
    tooltip: {
      trigger: 'axis',
      formatter: function(params: any) {
        const data = params[0];
        let timeStr = '';
        
        // 타임시리즈 차트에서는 data.value[0]에 시간 값이 들어있음
        if (data.value && data.value[0]) {
          try {
            const date = new Date(data.value[0]);
            if (!isNaN(date.getTime())) {
              timeStr = formatTime(date);
            } else {
              timeStr = String(data.value[0]);
            }
          } catch (e) {
            timeStr = String(data.value[0]);
          }
        } else if (data.name) {
          // data.name이 있는 경우 (폴백)
          try {
            const date = new Date(data.name);
            if (!isNaN(date.getTime())) {
              timeStr = formatTime(date);
            } else {
              timeStr = String(data.name);
            }
          } catch (e) {
            timeStr = String(data.name);
          }
        } else {
          // 시간 정보가 없는 경우
          timeStr = '--:--:--';
        }
        
        const value = Math.round(data.value[1] * 100) / 100; // 소수점 2번째 자리까지 반올림
        return `${timeStr} - ${value}${yAxisName}`;
      }
    },
    grid: {
      left: '10%',
      right: '10%',
      top: '25%',
      bottom: '15%'
    },
    xAxis: {
      type: 'time',
      axisLabel: {
        formatter: function(value: number) {
          const date = new Date(value);
          return formatTime(date);
        },
        interval: 0,
        rotate: 45,
        fontSize: 10,
        margin: 15
      },
      axisTick: {
        alignWithLabel: true
      }
    },
    yAxis: {
      type: 'value',
      name: yAxisName,
      nameLocation: 'middle',
      nameGap: 30
    },
         series: [{
       name: title,
       type: 'line',
       data: data,
       smooth: false,
       symbol: 'none',
       lineStyle: { color: color, width: 2 },
       areaStyle: {
         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
           { offset: 0, color: color + '40' },
           { offset: 1, color: color + '10' }
         ])
       }
     }]
  };
}

// 데이터 업데이트 함수
function updateChartData() {
  const now = new Date();
  const timeStr = now.toISOString();

  // 각 차트별로 새로운 데이터 생성
  const newData = {
    cpu: generateCPUData(),
    memory: generateMemoryData(),
    network: generateNetworkData(),
    disk: generateDiskData(),
    temperature: generateTemperatureData(),
    power: generatePowerData()
  };

  // 데이터 추가 및 최대 포인트 수 유지
  Object.keys(chartData).forEach(key => {
    const chartKey = key as keyof typeof chartData;
    chartData[chartKey].push([timeStr, newData[chartKey]]);
    
    if (chartData[chartKey].length > maxDataPoints) {
      chartData[chartKey].shift();
    }
  });

  // 차트 업데이트
  if (cpuChartInstance) {
    cpuChartInstance.setOption({
      series: [{ data: chartData.cpu }]
    });
  }
  if (memoryChartInstance) {
    memoryChartInstance.setOption({
      series: [{ data: chartData.memory }]
    });
  }
  if (networkChartInstance) {
    networkChartInstance.setOption({
      series: [{ data: chartData.network }]
    });
  }
  if (diskChartInstance) {
    diskChartInstance.setOption({
      series: [{ data: chartData.disk }]
    });
  }
  if (temperatureChartInstance) {
    temperatureChartInstance.setOption({
      series: [{ data: chartData.temperature }]
    });
  }
  if (powerChartInstance) {
    powerChartInstance.setOption({
      series: [{ data: chartData.power }]
    });
  }

  // 다음 업데이트 시간 갱신
  updateNextUpdateTime();
}

// 차트 초기화 함수
function initCharts() {
  if (cpuChart.value) {
    cpuChartInstance = echarts.init(cpuChart.value);
    cpuChartInstance.setOption(getChartOption('CPU 사용률', chartData.cpu, '#3B82F6', '%'));
  }
  
  if (memoryChart.value) {
    memoryChartInstance = echarts.init(memoryChart.value);
    memoryChartInstance.setOption(getChartOption('메모리 사용률', chartData.memory, '#10B981', '%'));
  }
  
  if (networkChart.value) {
    networkChartInstance = echarts.init(networkChart.value);
    networkChartInstance.setOption(getChartOption('네트워크 트래픽', chartData.network, '#8B5CF6', 'MB/s'));
  }
  
  if (diskChart.value) {
    diskChartInstance = echarts.init(diskChart.value);
    diskChartInstance.setOption(getChartOption('디스크 I/O', chartData.disk, '#F97316', 'MB/s'));
  }
  
  if (temperatureChart.value) {
    temperatureChartInstance = echarts.init(temperatureChart.value);
    temperatureChartInstance.setOption(getChartOption('시스템 온도', chartData.temperature, '#EF4444', '°C'));
  }
  
  if (powerChart.value) {
    powerChartInstance = echarts.init(powerChart.value);
    powerChartInstance.setOption(getChartOption('전력 소비', chartData.power, '#6366F1', 'W'));
  }
  
  // 모든 차트를 연결하여 동기화
  const allCharts = [
    cpuChartInstance,
    memoryChartInstance,
    networkChartInstance,
    diskChartInstance,
    temperatureChartInstance,
    powerChartInstance
  ].filter(chart => chart !== null);
  
  if (allCharts.length > 0) {
    echarts.connect(allCharts);
  }
}

// 재생/정지 토글 함수
function togglePlay() {
  if (isPlaying.value) {
    stopPlay();
  } else {
    startPlay();
  }
}

// 재생 시작 함수
function startPlay() {
  isPlaying.value = true;
  
  // 즉시 첫 데이터 생성
  updateChartData();
  
  // 10초마다 업데이트
  updateInterval = setInterval(updateChartData, 10000);
  
  // 다음 업데이트 시간 표시
  updateNextUpdateTime();
}

// 재생 정지 함수
function stopPlay() {
  isPlaying.value = false;
  
  if (updateInterval) {
    clearInterval(updateInterval);
    updateInterval = null;
  }
  
  nextUpdateTime.value = "--:--";
}

// 윈도우 리사이즈 대응
function handleResize() {
  const charts = [
    cpuChartInstance,
    memoryChartInstance,
    networkChartInstance,
    diskChartInstance,
    temperatureChartInstance,
    powerChartInstance
  ];
  
  charts.forEach(chart => {
    if (chart) {
      chart.resize();
    }
  });
}

// 컴포넌트 마운트 시
onMounted(() => {
  initCharts();
  window.addEventListener('resize', handleResize);
});

// 컴포넌트 언마운트 시
onUnmounted(() => {
  stopPlay();
  window.removeEventListener('resize', handleResize);
  
  // 차트 인스턴스 정리
  const charts = [
    cpuChartInstance,
    memoryChartInstance,
    networkChartInstance,
    diskChartInstance,
    temperatureChartInstance,
    powerChartInstance
  ];
  
  charts.forEach(chart => {
    if (chart) {
      chart.dispose();
    }
  });
});
</script>

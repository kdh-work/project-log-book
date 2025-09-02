<template>
  <div class="step-three-container">
    <div class="bg-white p-6 rounded-lg shadow">
      <h2 class="text-xl font-semibold mb-4 text-purple-600">Step Three</h2>
      <p class="text-gray-700 mb-6">
        이것은 세 번째 단계입니다. 데이터 처리 및 분석 단계입니다.
      </p>
      
      <!-- Step Three의 주요 콘텐츠 -->
      <div class="space-y-4">
        <div class="bg-purple-50 p-4 rounded-lg border border-purple-200">
          <h3 class="font-medium text-purple-800 mb-2">데이터 처리</h3>
          <p class="text-sm text-purple-600">
            입력된 데이터를 처리하고 변환합니다.
          </p>
        </div>
        
        <div class="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
          <h3 class="font-medium text-indigo-800 mb-2">분석 수행</h3>
          <p class="text-sm text-indigo-600">
            다양한 분석 알고리즘을 적용합니다.
          </p>
        </div>
        
        <div class="bg-pink-50 p-4 rounded-lg border border-pink-200">
          <h3 class="font-medium text-pink-800 mb-2">결과 생성</h3>
          <p class="text-sm text-pink-600">
            분석 결과를 생성하고 정리합니다.
          </p>
        </div>
      </div>
      
      <!-- 진행률 표시 -->
      <div class="mt-6">
        <div class="flex justify-between text-sm text-gray-600 mb-2">
          <span>처리 진행률</span>
          <span>{{ progress }}%</span>
        </div>
        <div class="w-full bg-gray-200 rounded-full h-2">
          <div class="bg-purple-600 h-2 rounded-full transition-all duration-300" :style="{ width: progress + '%' }"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const progress = ref(0);

// 컴포넌트 마운트 시 실행
onMounted(() => {
  console.log('Step Three 컴포넌트가 마운트되었습니다.');
  
  // 진행률 애니메이션
  const interval = setInterval(() => {
    progress.value += 10;
    if (progress.value >= 100) {
      clearInterval(interval);
    }
  }, 200);
});
</script>

<style scoped>
.step-three-container {
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

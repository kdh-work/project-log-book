<template>
  <div class="step-five-container">
    <div class="bg-white p-6 rounded-lg shadow">
      <h2 class="text-xl font-semibold mb-4 text-indigo-600">Step Five</h2>
      <p class="text-gray-700 mb-6">
        이것은 마지막 단계입니다. 모든 과정이 완료되었습니다.
      </p>
      
      <!-- Step Five의 주요 콘텐츠 -->
      <div class="space-y-4">
        <div class="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
          <h3 class="font-medium text-indigo-800 mb-2">완료 요약</h3>
          <p class="text-sm text-indigo-600">
            모든 단계가 성공적으로 완료되었습니다.
          </p>
        </div>
        
        <div class="bg-emerald-50 p-4 rounded-lg border border-emerald-200">
          <h3 class="font-medium text-emerald-800 mb-2">결과 다운로드</h3>
          <p class="text-sm text-emerald-600">
            최종 결과를 다운로드할 수 있습니다.
          </p>
        </div>
        
        <div class="bg-cyan-50 p-4 rounded-lg border border-cyan-200">
          <h3 class="font-medium text-cyan-800 mb-2">프로젝트 종료</h3>
          <p class="text-sm text-cyan-600">
            프로젝트를 성공적으로 마무리합니다.
          </p>
        </div>
      </div>
      
      <!-- 완료 상태 표시 -->
      <div class="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
        <div class="flex items-center space-x-2">
          <div class="w-4 h-4 bg-green-500 rounded-full"></div>
          <span class="text-green-800 font-medium">모든 단계 완료!</span>
        </div>
        <p class="text-sm text-green-600 mt-2">
          축하합니다! 모든 단계를 성공적으로 완료했습니다.
        </p>
      </div>
      
      <!-- 완료 시간 표시 -->
      <div class="mt-4 text-center">
        <p class="text-sm text-gray-500">
          완료 시간: {{ completionTime }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const completionTime = ref('');

// 컴포넌트 마운트 시 실행
onMounted(() => {
  console.log('Step Five 컴포넌트가 마운트되었습니다.');
  // 완료 시간 포맷팅
  completionTime.value = new Date().toLocaleString('ko-KR');
});
</script>

<style scoped>
.step-five-container {
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

/* 완료 상태 애니메이션 */
.bg-green-50 {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
}
</style>

<template>
  <div class="step-four-container">
    <div class="bg-white p-6 rounded-lg shadow">
      <h2 class="text-xl font-semibold mb-4 text-orange-600">Step Four</h2>
      <p class="text-gray-700 mb-6">
        이것은 네 번째 단계입니다. 결과 검토 및 최종 확인 단계입니다.
      </p>
      
      <!-- Step Four의 주요 콘텐츠 -->
      <div class="space-y-4">
        <div class="bg-orange-50 p-4 rounded-lg border border-orange-200">
          <h3 class="font-medium text-orange-800 mb-2">결과 검토</h3>
          <p class="text-sm text-orange-600">
            생성된 결과를 상세히 검토합니다.
          </p>
        </div>
        
        <div class="bg-red-50 p-4 rounded-lg border border-red-200">
          <h3 class="font-medium text-red-800 mb-2">품질 검사</h3>
          <p class="text-sm text-red-600">
            결과의 품질과 정확성을 검사합니다.
          </p>
        </div>
        
        <div class="bg-teal-50 p-4 rounded-lg border border-teal-200">
          <h3 class="font-medium text-teal-800 mb-2">최종 승인</h3>
          <p class="text-sm text-teal-600">
            모든 검토가 완료되면 최종 승인합니다.
          </p>
        </div>
      </div>
      
      <!-- 체크리스트 -->
      <div class="mt-6">
        <h4 class="font-medium text-gray-800 mb-3">검토 체크리스트</h4>
        <div class="space-y-2">
          <div class="flex items-center space-x-2">
            <div class="w-4 h-4 bg-green-500 rounded flex items-center justify-center">
              <span class="text-white text-xs">✓</span>
            </div>
            <span class="text-sm text-gray-700">데이터 정확성 확인</span>
          </div>
          <div class="flex items-center space-x-2">
            <div class="w-4 h-4 bg-green-500 rounded flex items-center justify-center">
              <span class="text-white text-xs">✓</span>
            </div>
            <span class="text-sm text-gray-700">결과 유효성 검증</span>
          </div>
          <div class="flex items-center space-x-2">
            <div class="w-4 h-4 bg-green-500 rounded flex items-center justify-center">
              <span class="text-white text-xs">✓</span>
            </div>
            <span class="text-sm text-gray-700">최종 승인 완료</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

// 컴포넌트 마운트 시 실행
onMounted(() => {
  console.log('Step Four 컴포넌트가 마운트되었습니다.');
});
</script>

<style scoped>
.step-four-container {
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

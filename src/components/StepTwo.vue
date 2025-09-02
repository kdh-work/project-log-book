<template>
  <div class="step-two-container">
    <div class="bg-white p-6 rounded-lg shadow">
      <h2 class="text-xl font-semibold mb-4 text-green-600">Step Two</h2>
      <p class="text-gray-700 mb-6">
        이것은 두 번째 단계입니다. 첫 번째 단계가 완료된 후 진행됩니다.
      </p>
      
      <!-- Step Two의 주요 콘텐츠 -->
      <div class="space-y-4">
        <div class="bg-green-50 p-4 rounded-lg border border-green-200">
          <h3 class="font-medium text-green-800 mb-2">데이터 입력</h3>
          <p class="text-sm text-green-600">
            필요한 데이터를 입력하고 검증합니다.
          </p>
        </div>
        
        <div class="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <h3 class="font-medium text-blue-800 mb-2">검증 과정</h3>
          <p class="text-sm text-blue-600">
            입력된 데이터의 유효성을 검증합니다.
          </p>
        </div>
        
        <div class="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
          <h3 class="font-medium text-yellow-800 mb-2">검토 및 확인</h3>
          <p class="text-sm text-yellow-600">
            모든 데이터를 검토하고 최종 확인합니다.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

// 컴포넌트 마운트 시 실행
onMounted(() => {
  console.log('Step Two 컴포넌트가 마운트되었습니다.');
});
</script>

<style scoped>
.step-two-container {
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

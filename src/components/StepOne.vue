<template>
  <div class="step-one-container">
    <div class="bg-white p-6 rounded-lg shadow">
      <h2 class="text-xl font-semibold mb-4 text-blue-600">Step One</h2>
      <p class="text-gray-700 mb-6">
        이것은 첫 번째 단계입니다. 사용자가 가장 먼저 보게 되는 화면입니다.
      </p>
      
      <!-- Step One의 주요 콘텐츠 -->
      <div class="space-y-4">
                 <div class="bg-blue-50 p-4 rounded-lg border border-blue-200">
           <h3 class="font-medium text-blue-800 mb-2">장치유형 설정하기</h3>
           <p class="text-sm text-blue-600 mb-3">
             설정한 장치유형에 따라 스텝이 달라집니다.
           </p>
          
          <!-- 프로젝트 유형 선택 selectbox -->
          <a-select
            v-model:value="selectedProjectType"
            placeholder="프로젝트 유형을 선택하세요"
            style="width: 100%"
            size="large"
            @change="handleProjectTypeChange"
          >
            <a-select-option value="1">서버1</a-select-option>
            <a-select-option value="2">서버2</a-select-option>
            <a-select-option value="3">네트워크1</a-select-option>
            <a-select-option value="4">네트워크2</a-select-option>
            <a-select-option value="5">네트워크3</a-select-option>
            <a-select-option value="6">로드밸런서</a-select-option>
            <a-select-option value="7">스토리지</a-select-option>
          </a-select>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useStepStore } from '../stores/stepStore';

// Pinia store 사용
const stepStore = useStepStore();

// 선택된 프로젝트 유형 (store에서 가져옴)
const selectedProjectType = ref<string>(stepStore.getSelectedDeviceType);

// 컴포넌트 마운트 시 실행
onMounted(() => {
  console.log('Step One 컴포넌트가 마운트되었습니다.');
  // store에서 기존 선택된 값이 있으면 복원
  if (stepStore.getSelectedDeviceType) {
    selectedProjectType.value = stepStore.getSelectedDeviceType;
  }
  
  // 마운트 시에는 stepCompleted 이벤트를 emit하지 않음
  // 사용자가 실제로 선택을 완료했을 때만 emit
});

// 프로젝트 유형 변경 핸들러
const handleProjectTypeChange = (value: string) => {
  selectedProjectType.value = value;
  // Pinia store에 저장
  stepStore.setDeviceType(value);
  console.log('선택된 장치 유형:', value);
  
  // 부모 컴포넌트에게 단계 완료를 알림 (자동 진행하지 않음)
  emit('stepCompleted', { step: 'stepOne', isCompleted: true, deviceType: value });
};

// 부모 컴포넌트와 통신할 수 있는 emit 정의
const emit = defineEmits<{
  stepCompleted: [data: any];
  stepReset: [];
  stepBack: [];
}>();

</script>

<style scoped>
.step-one-container {
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

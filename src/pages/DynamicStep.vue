<template>
  <div class="p-4 pr-96">
    <h1 class="text-2xl font-bold mb-4">Dynamic Step</h1>
    <p class="text-gray-600 mb-6">동적 단계별 기능을 구현할 페이지입니다.</p>

    <!-- 메인 콘텐츠 영역 -->
    <div class="bg-white p-6 rounded-lg shadow">
      <h2 class="text-lg font-semibold mb-4">메인 콘텐츠</h2>
      <p class="text-gray-700 mb-6">
        여기에 메인 콘텐츠가 들어갑니다. 오른쪽에 고정된 사이드바가 있습니다.
        {{ currentStep }}
      </p>

      <!-- 디버깅 정보 -->
      <div class="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded">
        <p class="text-sm text-yellow-800">
          <strong>현재 단계:</strong> {{ currentStep }} ({{
            stepStore.getCurrentStepName
          }})<br />
          <strong>컴포넌트:</strong> {{ stepStore.getCurrentStepComponent
          }}<br />
          <strong>장치 유형:</strong>
          {{ stepStore.getSelectedDeviceType || "선택되지 않음" }}<br />
          <strong>전체 단계:</strong> {{ stepStore.getDeviceStepList.length }}개
        </p>
      </div>

      <!-- Step 컴포넌트들이 렌더링되는 영역 -->
      <div class="step-content-area">
        <!-- 동적 컴포넌트 렌더링 -->
        <component
          v-if="currentStepComponent && stepStore.getCurrentStepComponent"
          :is="currentStepComponent"
          @stepCompleted="handleStepCompleted"
          @stepReset="handleStepReset"
          @stepBack="handleStepBack"
        />
        <div v-else class="text-center py-8 text-gray-500">
          <p>Step 컴포넌트를 불러오는 중...</p>
          <p class="text-sm mt-2">
            현재 단계: {{ stepStore.getCurrentStepComponent || "로딩 중" }}
          </p>
        </div>
      </div>

      <!-- 네비게이션 버튼들 -->
      <div class="mt-6 flex justify-center space-x-4">
        <!-- 이전 버튼 (currentStep > 0일 때만 표시) -->
        <button
          v-if="!stepStore.isFirstStep"
          @click="handlePreviousStep"
          class="px-6 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
        >
          이전
        </button>

        <!-- 다음 버튼 (마지막 단계가 아닐 때만 표시) -->
        <button
          v-if="!stepStore.isLastStep"
          @click="handleNextStep"
          class="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          다음
        </button>
      </div>
    </div>
  </div>

  <!-- 오른쪽 고정 사이드바 -->
  <div
    class="fixed right-0 top-0 bottom-0 w-80 bg-white shadow-lg border-l border-gray-200 z-10"
  >
    <div class="p-4 h-full overflow-y-auto">
      <h3 class="text-lg font-semibold mb-4">단계별 진행 상황</h3>

      <!-- 장치 유형이 선택되지 않은 경우 -->
      <div v-if="!stepStore.getSelectedDeviceType" class="text-center py-8">
        <p class="text-gray-500 mb-2">장치 유형을 선택해주세요</p>
        <p class="text-sm text-gray-400">
          Step 1에서 장치 유형을 선택하면 단계가 표시됩니다.
        </p>
      </div>

      <!-- 장치 유형별 StepList 표시 -->
      <div v-else class="space-y-3">
        <div class="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
          <h4 class="font-medium text-blue-800 mb-1">선택된 장치 유형</h4>
          <p class="text-sm text-blue-600">
            {{ getDeviceTypeName(stepStore.getSelectedDeviceType) }}
          </p>
        </div>

        <!-- 단계별 진행 상황 -->
        <div
          v-for="(step, index) in stepStore.getDeviceStepList"
          :key="step.step"
          class="p-3 rounded-lg border transition-all duration-200"
          :class="{
            'bg-green-50 border-green-200': index < currentStep,
            'bg-blue-50 border-blue-200': index === currentStep,
            'bg-gray-50 border-gray-200': index > currentStep,
          }"
        >
          <div class="flex items-center justify-between">
            <div>
              <h5 class="font-medium text-gray-800">{{ step.name }}</h5>
              <p class="text-sm text-gray-600">{{ step.component }}</p>
            </div>
            <div class="flex items-center space-x-2">
              <!-- 진행 상태 표시 -->
              <div
                v-if="index < currentStep"
                class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center"
              >
                <span class="text-white text-xs">✓</span>
              </div>
              <div
                v-else-if="index === currentStep"
                class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center"
              >
                <span class="text-white text-xs">●</span>
              </div>
              <div
                v-else
                class="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center"
              >
                <span class="text-gray-500 text-xs">○</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStepStore } from "../stores/stepStore";
import StepOne from "../components/StepOne.vue";
import StepTwo from "../components/StepTwo.vue";
import StepThree from "../components/StepThree.vue";
import StepFour from "../components/StepFour.vue";
import StepFive from "../components/StepFive.vue";

// Pinia store 사용
const stepStore = useStepStore();

// 디버깅: 현재 상태 로그
console.log("DynamicStep 컴포넌트 로드됨");
console.log("현재 단계:", stepStore.currentStep);
console.log("현재 단계 컴포넌트:", stepStore.getCurrentStepComponent);
console.log("첫 번째 단계인가?", stepStore.isFirstStep);
console.log("마지막 단계인가?", stepStore.isLastStep);

// 현재 활성화된 단계 관리 (store에서 가져옴)
const currentStep = computed(() => {
  console.log("currentStep computed 실행:", stepStore.currentStep);
  return stepStore.currentStep;
});

// 현재 단계 컴포넌트 (store에서 가져옴)
const currentStepComponent = computed(() => {
  try {
    const componentName = stepStore.getCurrentStepComponent;
    console.log("컴포넌트 이름:", componentName);

    if (!componentName) {
      console.log("컴포넌트 이름이 없음, StepOne 반환");
      return StepOne;
    }

    switch (componentName) {
      case "StepOne":
        return StepOne;
      case "StepTwo":
        return StepTwo;
      case "StepThree":
        return StepThree;
      case "StepFour":
        return StepFour;
      case "StepFive":
        return StepFive;
      default:
        console.log("알 수 없는 컴포넌트:", componentName, "StepOne 반환");
        return StepOne;
    }
  } catch (error) {
    console.error("컴포넌트 로딩 중 오류:", error);
    return StepOne;
  }
});

// 장치 유형 이름 가져오기
const getDeviceTypeName = (deviceType: string) => {
  const deviceNames: { [key: string]: string } = {
    "1": "서버1",
    "2": "서버2",
    "3": "네트워크1",
    "4": "네트워크2",
    "5": "네트워크3",
    "6": "로드밸런서",
    "7": "스토리지",
  };
  return deviceNames[deviceType] || deviceType;
};

// Step 컴포넌트 이벤트 핸들러
const handleStepCompleted = (data: any) => {
  console.log("Step이 완료되었습니다:", data);
  // 자동으로 다음 단계로 진행하지 않음 - 사용자가 버튼을 눌러야 함
  // stepStore.goToNextStep();
};

const handleStepReset = () => {
  console.log("Step이 초기화되었습니다.");
  // 현재 단계 초기화
  stepStore.resetStep(currentStep.value);
};

const handleStepBack = () => {
  console.log("이전 단계로 돌아갑니다.");
  // 이전 단계로 이동
  stepStore.goToPreviousStep();
};

const handleNextStep = () => {
  console.log("다음 단계로 이동합니다.");
  stepStore.goToNextStep();
};

const handlePreviousStep = () => {
  console.log("이전 단계로 이동합니다.");
  stepStore.goToPreviousStep();
};

// 여기에 동적 단계별 기능을 구현할 예정입니다.
</script>

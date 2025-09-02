import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useStepStore = defineStore('step', () => {
  // 상태 (State)
  const currentStep = ref(0); // 숫자로 관리 (0부터 시작)
  const selectedDeviceType = ref<string>('');
  
  // 장치 유형별 StepList 정의
  const deviceStepLists = {
    '1': [ // 서버1
      { step: 0, name: "Step 1", component: "StepOne" },
      { step: 1, name: "Step 2", component: "StepTwo" },
      { step: 2, name: "Step 5", component: "StepFive" }
    ],
    '2': [ // 서버2
      { step: 0, name: "Step 1", component: "StepOne" },
      { step: 1, name: "Step 2", component: "StepTwo" },
      { step: 2, name: "Step 4", component: "StepFour" },
      { step: 3, name: "Step 5", component: "StepFive" }
    ],
    '3': [ // 네트워크1
      { step: 0, name: "Step 1", component: "StepOne" },
      { step: 1, name: "Step 3", component: "StepThree" },
      { step: 2, name: "Step 5", component: "StepFive" }
    ],
    '4': [ // 네트워크2
      { step: 0, name: "Step 1", component: "StepOne" },
      { step: 1, name: "Step 3", component: "StepThree" },
      { step: 2, name: "Step 5", component: "StepFive" }
    ],
    '5': [ // 네트워크3
      { step: 0, name: "Step 1", component: "StepOne" },
      { step: 1, name: "Step 3", component: "StepThree" },
      { step: 2, name: "Step 5", component: "StepFive" }
    ],
    '6': [ // 로드밸런서
      { step: 0, name: "Step 1", component: "StepOne" },
      { step: 1, name: "Step 5", component: "StepFive" }
    ],
    '7': [ // 스토리지
      { step: 0, name: "Step 1", component: "StepOne" },
      { step: 1, name: "Step 5", component: "StepFive" }
    ]
  };
  
  // 현재 장치 유형에 따른 StepList
  const stepList = computed(() => {
    console.log('stepList computed - selectedDeviceType:', selectedDeviceType.value);
    
    if (!selectedDeviceType.value) {
      console.log('장치 유형이 선택되지 않음, 기본 StepList 반환');
      return [
        { step: 0, name: "Step 1", component: "StepOne" }
      ];
    }
    
    const deviceList = deviceStepLists[selectedDeviceType.value as keyof typeof deviceStepLists];
    console.log('장치 유형별 StepList:', deviceList);
    
    if (!deviceList || deviceList.length === 0) {
      console.log('장치 유형에 해당하는 StepList가 없음, 기본 반환');
      return [
        { step: 0, name: "Step 1", component: "StepOne" }
      ];
    }
    
    return deviceList;
  });
  
  const stepData = ref({
    stepOne: {
      isCompleted: false,
      deviceType: '',
      timestamp: null as Date | null
    },
    stepTwo: {
      isCompleted: false,
      data: {},
      timestamp: null as Date | null
    },
    stepThree: {
      isCompleted: false,
      processedData: {},
      timestamp: null as Date | null
    },
    stepFour: {
      isCompleted: false,
      reviewResults: {},
      timestamp: null as Date | null
    },
    stepFive: {
      isCompleted: false,
      finalResults: {},
      timestamp: null as Date | null
    }
  });

  // 게터 (Getters)
  const getCurrentStepInfo = computed(() => {
    const list = stepList.value;
    console.log('getCurrentStepInfo - list:', list, 'currentStep:', currentStep.value);
    
    if (!list || list.length === 0) {
      console.log('StepList가 비어있음');
      return null;
    }
    
    const foundStep = list.find(step => step.step === currentStep.value);
    if (foundStep) {
      console.log('현재 단계 찾음:', foundStep);
      return foundStep;
    }
    
    console.log('현재 단계를 찾을 수 없음, 첫 번째 단계 반환:', list[0]);
    return list[0];
  });

  const getCurrentStepComponent = computed(() => {
    const stepInfo = getCurrentStepInfo.value;
    if (!stepInfo) {
      console.log('Step 정보가 없음, StepOne 반환');
      return 'StepOne';
    }
    const component = stepInfo.component || 'StepOne';
    console.log('현재 단계 컴포넌트:', component, '현재 단계:', currentStep.value);
    return component;
  });

  const getCurrentStepName = computed(() => {
    const stepInfo = getCurrentStepInfo.value;
    if (!stepInfo) {
      return 'Step 1';
    }
    return stepInfo.name || 'Step 1';
  });

  const isFirstStep = computed(() => currentStep.value === 0);
  
  const isLastStep = computed(() => {
    const length = stepList.value.length;
    return length > 0 ? currentStep.value === length - 1 : true;
  });

  const getSelectedDeviceType = computed(() => {
    return selectedDeviceType.value;
  });

  // 장치 유형별 StepList 가져오기
  const getDeviceStepList = computed(() => {
    if (!selectedDeviceType.value) return [];
    return deviceStepLists[selectedDeviceType.value as keyof typeof deviceStepLists] || [];
  });

  // 액션 (Actions)
  const setCurrentStep = (step: number) => {
    const length = stepList.value.length;
    if (length > 0 && step >= 0 && step < length) {
      console.log('단계 변경:', currentStep.value, '->', step);
      currentStep.value = step;
    }
  };

  const setDeviceType = (deviceType: string) => {
    selectedDeviceType.value = deviceType;
    stepData.value.stepOne.deviceType = deviceType;
    stepData.value.stepOne.isCompleted = true;
    stepData.value.stepOne.timestamp = new Date();
    
    // 장치 유형이 변경되면 첫 번째 단계로 리셋
    currentStep.value = 0;
    console.log('장치 유형 변경:', deviceType, '새로운 StepList:', stepList.value);
  };

  const goToNextStep = () => {
    if (!isLastStep.value) {
      console.log('다음 단계로 이동:', currentStep.value, '->', currentStep.value + 1);
      currentStep.value += 1;
    }
  };

  const goToPreviousStep = () => {
    if (!isFirstStep.value) {
      console.log('이전 단계로 이동:', currentStep.value, '->', currentStep.value - 1);
      currentStep.value -= 1;
    }
  };

  const completeStep = (stepIndex: number, data: any = {}) => {
    const stepNames = ['stepOne', 'stepTwo', 'stepThree', 'stepFour', 'stepFive'];
    const stepName = stepNames[stepIndex];
    
    if (stepData.value[stepName as keyof typeof stepData.value]) {
      stepData.value[stepName as keyof typeof stepData.value].isCompleted = true;
      stepData.value[stepName as keyof typeof stepData.value].timestamp = new Date();
      
      // 추가 데이터가 있으면 저장
      if (Object.keys(data).length > 0) {
        Object.assign(stepData.value[stepName as keyof typeof stepData.value], data);
      }
    }
  };

  const resetStep = (stepIndex: number) => {
    const stepNames = ['stepOne', 'stepTwo', 'stepThree', 'stepFour', 'stepFive'];
    const stepName = stepNames[stepIndex];
    
    if (stepData.value[stepName as keyof typeof stepData.value]) {
      stepData.value[stepName as keyof typeof stepData.value].isCompleted = false;
      stepData.value[stepName as keyof typeof stepData.value].timestamp = null;
    }
  };

  const resetAllSteps = () => {
    console.log('모든 단계 초기화');
    // 각 단계별로 인덱스를 사용하여 resetStep 호출
    for (let i = 0; i < 5; i++) {
      resetStep(i);
    }
    selectedDeviceType.value = '';
    currentStep.value = 0;
    console.log('초기화 완료 - 현재 단계:', currentStep.value);
  };

  // 초기 상태를 명시적으로 0으로 설정
  currentStep.value = 0;
  
  // 초기 상태 로그
  console.log('StepStore 초기화 - 현재 단계:', currentStep.value);
  console.log('초기 stepList:', stepList.value);

  return {
    // 상태
    currentStep,
    selectedDeviceType,
    stepList,
    stepData,
    
    // 게터
    getCurrentStepInfo,
    getCurrentStepComponent,
    getCurrentStepName,
    isFirstStep,
    isLastStep,
    getSelectedDeviceType,
    getDeviceStepList,
    
    // 액션
    setCurrentStep,
    setDeviceType,
    completeStep,
    resetStep,
    resetAllSteps,
    goToNextStep,
    goToPreviousStep
  };
});

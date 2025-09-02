<template>
  <div class="p-4">
    <h1 class="text-3xl font-bold mb-6 text-gray-800">🔧 Fix-List</h1>
    <p class="text-gray-600 mb-8 text-lg">
      프로젝트 개발 과정에서 해결된 문제들과 개선사항들을 확인할 수 있습니다.
    </p>

    <!-- 문제 해결 카드들 -->
    <div class="space-y-6">
      <ProblemCard
        icon="🗑️"
        title="불필요한 파일 정리"
        description="FixList2.vue 파일 삭제로 코드베이스 정리"
        date="2025.09.03"
        color="orange"
        :problems="[
          'FixList2.vue 파일이 사용되지 않음',
          '중복된 기능으로 인한 혼란',
          '프로젝트 구조 복잡성 증가',
        ]"
        :solutions="[
          'FixList2.vue 파일 완전 삭제',
          '중복 기능 통합',
          '코드베이스 단순화',
        ]"
        files="src/pages/FixList2.vue (삭제됨)"
      />

      <ProblemCard
        icon="📈"
        title="시계열 차트 기능 추가"
        description="PlayTimeSeriesChart 페이지 신규 구현"
        date="2025.09.03"
        color="purple"
        :problems="[
          '시계열 데이터 시각화 기능 부재',
          '시간 기반 차트 분석 도구 부족',
          '데이터 트렌드 분석 기능 미흡',
        ]"
        :solutions="[
          'PlayTimeSeriesChart.vue 페이지 신규 생성',
          '시계열 차트 컴포넌트 구현',
          '시간 기반 데이터 시각화 기능 추가',
        ]"
        files="src/pages/PlayTimeSeriesChart.vue"
      />

      <ProblemCard
        icon="🔄"
        title="동적 스텝 시스템 구축"
        description="Pinia store 기반 동적 스텝 처리 시스템 구현"
        date="2025.09.03"
        color="blue"
        :problems="[
          '정적 스텝 처리로 인한 유연성 부족',
          '상태 관리 시스템 부재',
          '스텝 간 데이터 공유 및 동기화 문제',
        ]"
        :solutions="[
          'Pinia store 기반 상태 관리 시스템 구축',
          'StepOne~StepFive 컴포넌트 체계적 구현',
          'DynamicStep 페이지로 동적 스텝 처리',
          'stores 디렉토리 구조 정립',
        ]"
        files="src/components/StepOne.vue, StepTwo.vue, StepThree.vue, StepFour.vue, StepFive.vue, src/pages/DynamicStep.vue, src/stores/"
      />

      <ProblemCard
        icon="🎯"
        title="레이아웃 스크롤 문제"
        description="LNB와 Header 고정, Content만 스크롤"
        date="2025.09.02"
        color="blue"
        :problems="[
          'LNB와 Header가 화면 전체 스크롤에 따라 움직임',
          'Content 영역이 아닌 전체 화면에서 스크롤 발생',
          '사용자 경험 저하',
        ]"
        :solutions="[
          'position: fixed 적용',
          'zIndex 설정으로 레이어 관리',
          'Content 영역에만 overflow: auto',
        ]"
        files="DocsLayout.vue"
      />

      <ProblemCard
        icon="📊"
        title="차트 겹침 문제"
        description="반응형 그리드 시스템으로 차트 겹침 방지"
        date="2025.09.02"
        color="green"
        :problems="[
          '화면 크기를 줄이면 차트들이 겹치는 현상',
          '고정된 2열 그리드로 인한 반응형 부족',
          '차트 컨테이너 크기 제한 없음',
        ]"
        :solutions="[
          '반응형 그리드: grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
          '최소 높이 설정: min-h-[300px]',
          'overflow-hidden으로 영역 제한',
        ]"
        files="MultiChart.vue, DetailChart.vue, PlayChart.vue"
      />

      <ProblemCard
        icon="🐛"
        title="TypeScript 타입 오류"
        description="브라우저 환경에 맞는 타입 수정"
        date="2025.09.02"
        color="purple"
        :problems="[
          'NodeJS.Timeout 타입을 찾을 수 없음',
          '브라우저 환경에서 Node.js 타입 사용 시 발생',
          '컴파일 오류로 빌드 실패',
        ]"
        :solutions="[
          'NodeJS.Timeout → number',
          '브라우저 환경에 맞는 타입 사용',
          'setInterval 반환값 타입 고려',
        ]"
        files="PlayChart.vue"
      />
      <ProblemCard
        icon="🔧"
        title="Lnb 컴포넌트 오타 수정"
        description="selectedKey 변수명 오타 수정"
        date="25.09.01"
        color="orange"
        :problems="[
          ':selectedKeys=\'[selectdKey]\' 오타 발생',
          'selectdKey → selectedKey',
          '메뉴 선택 상태가 제대로 표시되지 않음',
        ]"
        :solutions="[
          'selectdKey → selectedKey로 수정',
          '변수명 일치성 확인',
          '메뉴 선택 상태 정상 작동',
        ]"
        files="Lnb.vue"
      />

      <ProblemCard
        icon="🗑️"
        title="미사용 컴포넌트 정리"
        description="HelloWorld.vue 컴포넌트 제거"
        date="25.09.01"
        color="indigo"
        :problems="[
          'HelloWorld.vue 컴포넌트가 사용되지 않음',
          '프로젝트 복잡성 증가',
          '불필요한 코드 유지',
        ]"
        :solutions="[
          'HelloWorld.vue 파일 완전 삭제',
          '관련 import 문 제거',
          '코드베이스 정리 및 단순화',
        ]"
        files="HelloWorld.vue (삭제됨)"
      />

      <ProblemCard
        icon="🔗"
        title="메뉴 시스템 통합"
        description="DocsLayout과 Lnb 컴포넌트 통합"
        date="25.09.01"
        color="teal"
        :problems="[
          'DocsLayout에서 하드코딩된 메뉴 사용',
          'Lnb 컴포넌트가 사용되지 않음',
          '코드 중복 및 일관성 부족',
        ]"
        :solutions="[
          'DocsLayout에서 Lnb 컴포넌트 사용',
          '하드코딩된 메뉴 제거',
          '라우터 메타데이터 기반 자동 메뉴 생성',
        ]"
        files="DocsLayout.vue, Lnb.vue"
      />

      <ProblemCard
        icon="📝"
        title="라우터 타입 import 문제"
        description="RouteRecordRaw 타입 import 방식 수정"
        date="25.09.01"
        color="pink"
        :problems="[
          'RouteRecordRaw를 직접 import 시도',
          '\'Cannot read properties of undefined\' 오류 발생',
          '타입과 런타임 import 혼재',
        ]"
        :solutions="[
          'import type { RouteRecordRaw }로 분리',
          '타입 import와 런타임 import 구분',
          'TypeScript 컴파일 오류 해결',
        ]"
        files="router/index.ts"
      />

      <ProblemCard
        icon="🛡️"
        title="타입 정의 강화"
        description="RouteMeta 인터페이스 확장 및 타입 안전성 향상"
        date="25.09.01"
        color="cyan"
        :problems="[
          '라우터 메타데이터에 대한 타입 정의 부족',
          'r.matched[0]?.meta?.section 접근 시 오류',
          '타입 안전성 부족',
        ]"
        :solutions="[
          'declare module \'vue-router\'로 RouteMeta 확장',
          'r.meta?.section으로 직접 접근',
          'try-catch 블록으로 오류 처리 강화',
        ]"
        files="router/index.ts, Lnb.vue"
      />
    </div>

    <!-- 통계 섹션 -->
    <div
      class="mt-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-6 text-white"
    >
      <h3 class="text-xl font-bold mb-4">📈 해결 현황 요약</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="text-center">
          <div class="text-3xl font-bold">11</div>
          <div class="text-blue-100">해결된 문제</div>
        </div>
        <div class="text-center">
          <div class="text-3xl font-bold">10</div>
          <div class="text-blue-100">수정된 파일</div>
        </div>
        <div class="text-center">
          <div class="text-3xl font-bold">100%</div>
          <div class="text-blue-100">해결률</div>
        </div>
      </div>
    </div>

    <!-- 개선 방향 -->
    <div class="mt-8 bg-white rounded-lg shadow-lg p-6">
      <h3 class="text-xl font-bold text-gray-800 mb-4">🚀 향후 개선 방향</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="space-y-2">
          <div class="flex items-center text-gray-700">
            <span class="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
            접근성 향상 (키보드 네비게이션)
          </div>
          <div class="flex items-center text-gray-700">
            <span class="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
            다크 모드 테마 전환
          </div>
          <div class="flex items-center text-gray-700">
            <span class="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
            Fix-List 고도화
          </div>
        </div>
        <div class="space-y-2">
          <div class="flex items-center text-gray-700">
            <span class="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
            차트 자동 리사이즈
          </div>
          <div class="flex items-center text-gray-700">
            <span class="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
            성능 모니터링
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProblemCard from "../components/ProblemCard.vue";
</script>

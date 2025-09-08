<template>
  <div class="p-4">
    <h1 class="text-3xl font-bold mb-6 text-gray-800">🔧 Fix-Lis-Origin</h1>
    <p class="text-gray-600 mb-8 text-lg">
      프로젝트 개발 과정에서 해결된 문제들과 개선사항들을 확인할 수 있습니다.
    </p>

    <!-- 문제 해결 카드들 -->
    <div class="space-y-6">
      <!-- 문제 1: GitHub Pages 동적 Import 실패 -->
      <div class="bg-white rounded-lg shadow-lg p-6 border-l-4 border-purple-500">
        <div class="flex items-center mb-4">
          <div
            class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4"
          >
            <span class="text-2xl">🚀</span>
          </div>
          <div class="flex-1">
            <div class="flex items-center gap-3 mb-1">
              <h3 class="text-xl font-bold text-gray-800 !mb-0">
                GitHub Pages 동적 Import 실패 문제
              </h3>
              <span
                class="text-xs font-medium px-2 py-1 rounded-full"
                :class="`bg-purple-100 text-$purple-800`"
              >
                2025.09.08
              </span>
            </div>
            <p class="text-gray-600">배포 환경에서 동적 import가 전면적으로 실패하는 문제 해결</p>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h4 class="font-semibold text-gray-700 mb-2">❌ 문제 상황</h4>
            <ul class="text-gray-600 space-y-1 text-sm">
              <li>• GitHub Pages에서 동적 import 모듈 로드 실패</li>
              <li>• <code class="bg-gray-100 px-1 rounded">Failed to fetch dynamically imported module</code> 에러 발생</li>
              <li>• 모든 페이지에서 빈 화면 표시</li>
              <li>• 라우터 이동은 되지만 컴포넌트 로드 실패</li>
            </ul>
          </div>

          <div>
            <h4 class="font-semibold text-gray-700 mb-2">✅ 해결 방법</h4>
            <ul class="text-gray-600 space-y-1 text-sm">
              <li>• 동적 import를 정적 import로 전면 변경</li>
              <li>• Vite 설정에서 <code class="bg-gray-100 px-1 rounded">manualChunks: undefined</code> 추가</li>
              <li>• 라우터에서 <code class="bg-gray-100 px-1 rounded">import.meta.env.BASE_URL</code> 사용</li>
              <li>• 모든 컴포넌트를 파일 상단에서 미리 import</li>
              <li>• GitHub Pages 호환성 문제 완전 해결</li>
            </ul>
          </div>
        </div>

        <div class="mt-4 p-3 bg-purple-50 rounded-lg">
          <span class="text-sm text-purple-700">
            <strong>파일:</strong> src/router/index.ts, vite.config.ts | <strong>상태:</strong> ✅ 해결됨
          </span>
        </div>
      </div>

      <!-- 문제 2: 레이아웃 스크롤 -->
      <div class="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
        <div class="flex items-center mb-4">
          <div
            class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4"
          >
            <span class="text-2xl">🎯</span>
          </div>
          <div class="flex-1">
            <div class="flex items-center gap-3 mb-1">
              <h3 class="text-xl font-bold text-gray-800 !mb-0">
                레이아웃 스크롤 문제
              </h3>
              <span
                class="text-xs font-medium px-2 py-1 rounded-full"
                :class="`bg-blue-100 text-$blue-800`"
              >
                2025.09.02
              </span>
            </div>
            <p class="text-gray-600">LNB와 Header 고정, Content만 스크롤</p>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h4 class="font-semibold text-gray-700 mb-2">❌ 문제 상황</h4>
            <ul class="text-gray-600 space-y-1 text-sm">
              <li>• LNB와 Header가 화면 전체 스크롤에 따라 움직임</li>
              <li>• Content 영역이 아닌 전체 화면에서 스크롤 발생</li>
              <li>• 사용자 경험 저하</li>
            </ul>
          </div>

          <div>
            <h4 class="font-semibold text-gray-700 mb-2">✅ 해결 방법</h4>
            <ul class="text-gray-600 space-y-1 text-sm">
              <li>
                •
                <code class="bg-gray-100 px-1 rounded">position: fixed</code>
                적용
              </li>
              <li>
                • <code class="bg-gray-100 px-1 rounded">zIndex</code> 설정으로
                레이어 관리
              </li>
              <li>
                • Content 영역에만
                <code class="bg-gray-100 px-1 rounded">overflow: auto</code>
              </li>
            </ul>
          </div>
        </div>

        <div class="mt-4 p-3 bg-blue-50 rounded-lg">
          <span class="text-sm text-blue-700">
            <strong>파일:</strong> DocsLayout.vue | <strong>상태:</strong> ✅
            해결됨
          </span>
        </div>
      </div>

      <!-- 문제 3: 차트 겹침 -->
      <div
        class="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500"
      >
        <div class="flex items-center mb-4">
          <div
            class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4"
          >
            <span class="text-2xl">📊</span>
          </div>
          <div class="flex-1">
            <div class="flex items-center gap-3 mb-1">
              <h3 class="text-xl font-bold text-gray-800 !mb-0">
                차트 겹침 문제
              </h3>
              <span
                class="text-xs font-medium px-2 py-1 rounded-full"
                :class="`bg-green-100 text-$green-800`"
              >
                2025.09.02
              </span>
            </div>
            <p class="text-gray-600">반응형 그리드 시스템으로 차트 겹침 방지</p>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h4 class="font-semibold text-gray-700 mb-2">❌ 문제 상황</h4>
            <ul class="text-gray-600 space-y-1 text-sm">
              <li>• 화면 크기를 줄이면 차트들이 겹치는 현상</li>
              <li>• 고정된 2열 그리드로 인한 반응형 부족</li>
              <li>• 차트 컨테이너 크기 제한 없음</li>
            </ul>
          </div>

          <div>
            <h4 class="font-semibold text-gray-700 mb-2">✅ 해결 방법</h4>
            <ul class="text-gray-600 space-y-1 text-sm">
              <li>
                • 반응형 그리드:
                <code class="bg-gray-100 px-1 rounded"
                  >grid-cols-1 sm:grid-cols-2 lg:grid-cols-3</code
                >
              </li>
              <li>
                • 최소 높이 설정:
                <code class="bg-gray-100 px-1 rounded">min-h-[300px]</code>
              </li>
              <li>
                •
                <code class="bg-gray-100 px-1 rounded">overflow-hidden</code
                >으로 영역 제한
              </li>
            </ul>
          </div>
        </div>

        <div class="mt-4 p-3 bg-green-50 rounded-lg">
          <span class="text-sm text-green-700">
            <strong>파일:</strong> MultiChart.vue, DetailChart.vue,
            PlayChart.vue | <strong>상태:</strong> ✅ 해결됨
          </span>
        </div>
      </div>

      <!-- 문제 4: TypeScript 오류 -->
      <div
        class="bg-white rounded-lg shadow-lg p-6 border-l-4 border-purple-500"
      >
        <div class="flex items-center mb-4">
          <div
            class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4"
          >
            <span class="text-2xl">🐛</span>
          </div>
          <div>
            <div class="flex items-center gap-3 mb-1">
              <h3 class="text-xl font-bold text-gray-800 !mb-0">
                TypeScript 타입 오류
              </h3>
              <span
                class="text-xs font-medium px-2 py-1 rounded-full"
                :class="`bg-purple-100 text-$purple-800`"
              >
                2025.09.02
              </span>
            </div>
            <p class="text-gray-600">브라우저 환경에 맞는 타입 수정</p>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h4 class="font-semibold text-gray-700 mb-2">❌ 문제 상황</h4>
            <ul class="text-gray-600 space-y-1 text-sm">
              <li>
                •
                <code class="bg-gray-100 px-1 rounded">NodeJS.Timeout</code>
                타입을 찾을 수 없음
              </li>
              <li>• 브라우저 환경에서 Node.js 타입 사용 시 발생</li>
              <li>• 컴파일 오류로 빌드 실패</li>
            </ul>
          </div>

          <div>
            <h4 class="font-semibold text-gray-700 mb-2">✅ 해결 방법</h4>
            <ul class="text-gray-600 space-y-1 text-sm">
              <li>
                • <code class="bg-gray-100 px-1 rounded">NodeJS.Timeout</code> →
                <code class="bg-gray-100 px-1 rounded">number</code>
              </li>
              <li>• 브라우저 환경에 맞는 타입 사용</li>
              <li>
                •
                <code class="bg-gray-100 px-1 rounded">setInterval</code> 반환값
                타입 고려
              </li>
            </ul>
          </div>
        </div>

        <div class="mt-4 p-3 bg-purple-50 rounded-lg">
          <span class="text-sm text-purple-700">
            <strong>파일:</strong> PlayChart.vue | <strong>상태:</strong> ✅
            해결됨
          </span>
        </div>
      </div>

      <!-- 문제 5: Lnb 컴포넌트 오타 수정 -->
      <div
        class="bg-white rounded-lg shadow-lg p-6 border-l-4 border-orange-500"
      >
        <div class="flex items-center mb-4">
          <div
            class="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4"
          >
            <span class="text-2xl">🔧</span>
          </div>
          <div>
            <div class="flex items-center gap-3 mb-1">
              <h3 class="text-xl font-bold text-gray-800 !mb-0">
                Lnb 컴포넌트 오타 수정
              </h3>
              <span
                class="text-xs font-medium px-2 py-1 rounded-full"
                :class="`bg-orange-100 text-$orange-800`"
              >
                2025.09.01
              </span>
            </div>
            <p class="text-gray-600">selectedKey 변수명 오타 수정</p>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h4 class="font-semibold text-gray-700 mb-2">❌ 문제 상황</h4>
            <ul class="text-gray-600 space-y-1 text-sm">
              <li>
                •
                <code class="bg-gray-100 px-1 rounded"
                  >:selectedKeys=\'[selectdKey]\'</code
                >
                오타 발생
              </li>
              <li>• selectdKey → selectedKey</li>
              <li>• 메뉴 선택 상태가 제대로 표시되지 않음</li>
            </ul>
          </div>

          <div>
            <h4 class="font-semibold text-gray-700 mb-2">✅ 해결 방법</h4>
            <ul class="text-gray-600 space-y-1 text-sm">
              <li>• selectdKey → selectedKey로 수정</li>
              <li>• 변수명 일치성 확인</li>
              <li>• 메뉴 선택 상태 정상 작동</li>
            </ul>
          </div>
        </div>

        <div class="mt-4 p-3 bg-orange-50 rounded-lg">
          <span class="text-sm text-orange-700">
            <strong>파일:</strong> LNB.vue | <strong>상태:</strong> ✅ 해결됨
          </span>
        </div>
      </div>

      <!-- 문제 6: 미사용 컴포넌트 정리 -->
      <div
        class="bg-white rounded-lg shadow-lg p-6 border-l-4 border-indigo-500"
      >
        <div class="flex items-center mb-4">
          <div
            class="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4"
          >
            <span class="text-2xl">🗑️</span>
          </div>
          <div>
            <div class="flex items-center gap-3 mb-1">
              <h3 class="text-xl font-bold text-gray-800 !mb-0">
                미사용 컴포넌트 정리
              </h3>
              <span
                class="text-xs font-medium px-2 py-1 rounded-full"
                :class="`bg-indigo-100 text-$indigo-800`"
              >
                2025.09.01
              </span>
            </div>
            <p class="text-gray-600">HelloWorld.vue 컴포넌트 제거</p>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h4 class="font-semibold text-gray-700 mb-2">❌ 문제 상황</h4>
            <ul class="text-gray-600 space-y-1 text-sm">
              <li>• HelloWorld.vue 컴포넌트가 사용되지 않음</li>
              <li>• 프로젝트 복잡성 증가</li>
              <li>• 불필요한 코드 유지</li>
            </ul>
          </div>

          <div>
            <h4 class="font-semibold text-gray-700 mb-2">✅ 해결 방법</h4>
            <ul class="text-gray-600 space-y-1 text-sm">
              <li>• HelloWorld.vue 파일 완전 삭제</li>
              <li>• 관련 import 문 제거</li>
              <li>• 코드베이스 정리 및 단순화</li>
            </ul>
          </div>
        </div>

        <div class="mt-4 p-3 bg-indigo-50 rounded-lg">
          <span class="text-sm text-indigo-700">
            <strong>파일:</strong> HelloWorld.vue(삭제됨) |
            <strong>상태:</strong> ✅ 해결됨
          </span>
        </div>
      </div>

      <!-- 문제 7: 메뉴 시스템 통합 -->
      <div class="bg-white rounded-lg shadow-lg p-6 border-l-4 border-teal-500">
        <div class="flex items-center mb-4">
          <div
            class="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4"
          >
            <span class="text-2xl">🔗</span>
          </div>
          <div>
            <div class="flex items-center gap-3 mb-1">
              <h3 class="text-xl font-bold text-gray-800 !mb-0">
                메뉴 시스템 통합
              </h3>
              <span
                class="text-xs font-medium px-2 py-1 rounded-full"
                :class="`bg-teal-100 text-$teal-800`"
              >
                2025.09.01
              </span>
            </div>
            <p class="text-gray-600">DocsLayout과 Lnb 컴포넌트 통합</p>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h4 class="font-semibold text-gray-700 mb-2">❌ 문제 상황</h4>
            <ul class="text-gray-600 space-y-1 text-sm">
              <li>• DocsLayout에서 하드코딩된 메뉴 사용</li>
              <li>• Lnb 컴포넌트가 사용되지 않음</li>
              <li>• 코드 중복 및 일관성 부족</li>
            </ul>
          </div>

          <div>
            <h4 class="font-semibold text-gray-700 mb-2">✅ 해결 방법</h4>
            <ul class="text-gray-600 space-y-1 text-sm">
              <li>• DocsLayout에서 Lnb 컴포넌트 사용</li>
              <li>• 하드코딩된 메뉴 제거</li>
              <li>• 라우터 메타데이터 기반 자동 메뉴 생성</li>
            </ul>
          </div>
        </div>

        <div class="mt-4 p-3 bg-teal-50 rounded-lg">
          <span class="text-sm text-teal-700">
            <strong>파일:</strong> DocsLayout.vue, Lnb.vue |
            <strong>상태:</strong> ✅ 해결됨
          </span>
        </div>
      </div>

      <!-- 문제 8: 라우터 타입 import 문제 -->
      <div class="bg-white rounded-lg shadow-lg p-6 border-l-4 border-pink-500">
        <div class="flex items-center mb-4">
          <div
            class="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mr-4"
          >
            <span class="text-2xl">📝</span>
          </div>
          <div>
            <div class="flex items-center gap-3 mb-1">
              <h3 class="text-xl font-bold text-gray-800 !mb-0">
                라우터 타입 import 문제
              </h3>
              <span
                class="text-xs font-medium px-2 py-1 rounded-full"
                :class="`bg-pink-100 text-$pink-800`"
              >
                2025.09.01
              </span>
            </div>
            <p class="text-gray-600">RouteRecordRaw 타입 import 방식 수정</p>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h4 class="font-semibold text-gray-700 mb-2">❌ 문제 상황</h4>
            <ul class="text-gray-600 space-y-1 text-sm">
              <li>• RouteRecordRaw를 직접 import 시도</li>
              <li>• 'Cannot read properties of undefined' 오류 발생</li>
              <li>• 타입과 런타임 import 혼재</li>
            </ul>
          </div>

          <div>
            <h4 class="font-semibold text-gray-700 mb-2">✅ 해결 방법</h4>
            <ul class="text-gray-600 space-y-1 text-sm">
              <li>
                •
                <code class="bg-gray-100 px-1 rounded"
                  >import type { RouteRecordRaw }</code
                >
                로 분리
              </li>
              <li>• 타입 import와 런타임 import 구분</li>
              <li>• TypeScript 컴파일 오류 해결</li>
            </ul>
          </div>
        </div>

        <div class="mt-4 p-3 bg-pink-50 rounded-lg">
          <span class="text-sm text-pink-700">
            <strong>파일:</strong> router/index.ts | <strong>상태:</strong> ✅
            해결됨
          </span>
        </div>
      </div>

      <!-- 문제 9: 타입 정의 강화 -->
      <div class="bg-white rounded-lg shadow-lg p-6 border-l-4 border-cyan-500">
        <div class="flex items-center mb-4">
          <div
            class="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mr-4"
          >
            <span class="text-2xl">🛡️</span>
          </div>
          <div>
            <div class="flex items-center gap-3 mb-1">
              <h3 class="text-xl font-bold text-gray-800 !mb-0">
                타입 정의 강화
              </h3>
              <span
                class="text-xs font-medium px-2 py-1 rounded-full"
                :class="`bg-cyan-100 text-$cyan-800`"
              >
                2025.09.01
              </span>
            </div>
            <p class="text-gray-600">
              RouteMeta 인터페이스 확장 및 타입 안전성 향상
            </p>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h4 class="font-semibold text-gray-700 mb-2">❌ 문제 상황</h4>
            <ul class="text-gray-600 space-y-1 text-sm">
              <li>• 라우터 메타데이터에 대한 타입 정의 부족</li>
              <li>
                •
                <code class="bg-gray-100 px-1 rounded"
                  >r.matched[0]?.meta?.section</code
                >
                접근 시 오류
              </li>
              <li>• 타입 안전성 부족</li>
            </ul>
          </div>

          <div>
            <h4 class="font-semibold text-gray-700 mb-2">✅ 해결 방법</h4>
            <ul class="text-gray-600 space-y-1 text-sm">
              <li>• declare module 'vue-router'로 RouteMeta 확장</li>
              <li>
                •
                <code class="bg-gray-100 px-1 rounded">r.meta?.section</code>
                직접 접근
              </li>
              <li>• try-catch 블록으로 오류 처리 강화</li>
            </ul>
          </div>
        </div>

        <div class="mt-4 p-3 bg-cyan-50 rounded-lg">
          <span class="text-sm text-cyan-700">
            <strong>파일:</strong> router/index.ts, Lnb.vue |
            <strong>상태:</strong> ✅ 해결됨
          </span>
        </div>
      </div>
      <!--여기까지 THE END-->
    </div>

    <!-- 통계 섹션 -->
    <div
      class="mt-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-6 text-white"
    >
      <h3 class="text-xl font-bold mb-4">📈 해결 현황 요약</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="text-center">
          <div class="text-3xl font-bold">9</div>
          <div class="text-blue-100">해결된 문제</div>
        </div>
        <div class="text-center">
          <div class="text-3xl font-bold">9</div>
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
// 컴포넌트 로직이 필요한 경우 여기에 추가
</script>

<style scoped>
/* 추가 스타일링이 필요한 경우 여기에 추가 */
</style>

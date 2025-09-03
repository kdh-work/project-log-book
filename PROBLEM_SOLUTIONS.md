# 🚀 프로젝트 문제 해결 기록

## 📋 개요

이 문서는 프로젝트 개발 과정에서 발생한 문제들과 그 해결 방법을 기록한 문서입니다.

---

## 🎯 해결된 문제 1: 레이아웃 스크롤 문제

### ❌ 문제 상황

- LNB(Left Navigation Bar)와 Header가 화면 전체 스크롤에 따라 움직임
- Content 영역이 아닌 전체 화면에서 스크롤 발생
- 사용자 경험 저하

### ✅ 해결 방법

**DocsLayout.vue 수정**

```vue
<template>
  <a-layout style="height: 100vh; overflow: hidden">
    <!-- LNB 영역 - 고정 -->
    <a-layout-sider
      collapsible
      :style="{
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
        zIndex: 1000,
      }"
    >
      <div class="text-white text-center py-4 font-bold">Project</div>
      <Lnb />
    </a-layout-sider>

    <!-- Content 영역 - LNB 너비만큼 왼쪽 여백 추가 -->
    <a-layout :style="{ marginLeft: '200px' }">
      <!-- Header 영역 - 고정 -->
      <a-layout-header
        class="bg-white px-4"
        :style="{
          height: '48.09px',
          position: 'fixed',
          top: 0,
          right: 0,
          left: '200px',
          zIndex: 999,
          borderBottom: '1px solid #f0f0f0',
        }"
      />

      <!-- Content 영역 - Header 높이만큼 위 여백 추가하고 스크롤 가능 -->
      <a-layout-content
        class="p-4 bg-gray-50"
        :style="{
          marginTop: '48.09px',
          height: 'calc(100vh - 48.09px)',
          overflow: 'auto',
          padding: '24px',
          minWidth: '800px',
        }"
      >
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
```

### 🔧 핵심 변경사항

1. **전체 레이아웃**: `height: 100vh; overflow: hidden`
2. **LNB 고정**: `position: fixed` + `zIndex: 1000`
3. **Header 고정**: `position: fixed` + `zIndex: 999`
4. **Content 스크롤**: `overflow: auto` + 적절한 여백 설정

---

## 🎯 해결된 문제 2: 차트 겹침 문제

### ❌ 문제 상황

- 화면 크기를 줄이면 차트들이 겹치는 현상 발생
- 고정된 2열 그리드로 인한 반응형 부족
- 차트 컨테이너 크기 제한 없음

### ✅ 해결 방법

**모든 차트 페이지에 반응형 그리드 적용**

#### MultiChart.vue, DetailChart.vue, PlayChart.vue

```vue
<!-- 반응형 그리드: 화면 크기에 따라 열 수 조정 -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-6">
  <!-- 차트 컨테이너 -->
  <div class="bg-white p-4 rounded-lg shadow min-h-[300px] overflow-hidden">
    <h3 class="text-lg font-semibold mb-2">차트 제목</h3>
    <div ref="chartRef" class="w-full h-64 min-h-[256px] overflow-hidden"></div>
  </div>
</div>
```

### 🔧 핵심 변경사항

1. **반응형 그리드**:

   - 모바일: `grid-cols-1` (1열)
   - 태블릿: `sm:grid-cols-2` (2열)
   - 데스크톱: `lg:grid-cols-3` (3열)
   - 대형 화면: `xl:grid-cols-2` (2열)

2. **차트 겹침 방지**:
   - `min-h-[300px]`: 컨테이너 최소 높이
   - `min-h-[256px]`: 차트 영역 최소 높이
   - `overflow-hidden`: 영역 벗어남 방지
   - `gap-6`: 차트 간 여백 증가

---

## 🎯 해결된 문제 3: TypeScript 타입 오류

### ❌ 문제 상황

- `NodeJS.Timeout` 타입을 찾을 수 없는 오류
- 브라우저 환경에서 Node.js 타입 사용 시 발생

### ✅ 해결 방법

**PlayChart.vue 수정**

```typescript
// 변경 전
let updateInterval: NodeJS.Timeout | null = null;

// 변경 후
let updateInterval: number | null = null;
```

### 🔧 핵심 변경사항

- 브라우저 환경에 맞는 `number` 타입 사용
- `setInterval` 반환값이 `number` 타입임을 고려

---

## 📱 반응형 디자인 개선사항

### 1. **화면 크기별 최적화**

- **작은 화면**: 1열 배치로 가독성 향상
- **중간 화면**: 2열 배치로 공간 효율성 극대화
- **큰 화면**: 3열 배치로 정보 밀도 증가

### 2. **사용자 경험 개선**

- LNB와 Header 고정으로 항상 접근 가능
- Content 영역만 스크롤로 자연스러운 탐색
- 차트 겹침 방지로 깔끔한 시각적 표현

### 3. **성능 최적화**

- `overflow: hidden`으로 불필요한 스크롤 방지
- 적절한 `zIndex` 설정으로 레이어 순서 관리
- `minWidth` 설정으로 최소 레이아웃 보장

---

## 🛠️ 사용된 기술 스택

- **프레임워크**: Vue 3 + TypeScript
- **UI 라이브러리**: Ant Design Vue
- **차트 라이브러리**: ECharts
- **CSS 프레임워크**: Tailwind CSS
- **레이아웃**: CSS Grid + Flexbox

---

## 📝 향후 개선 방향

1. **접근성 향상**: 키보드 네비게이션 지원
2. **다크 모드**: 테마 전환 기능 추가
3. **차트 반응형**: 화면 크기 변경 시 차트 자동 리사이즈
4. **성능 모니터링**: 차트 렌더링 성능 최적화

---

## 📅 해결 일자

- **레이아웃 스크롤 문제**: 2024년
- **차트 겹침 문제**: 2024년
- **TypeScript 타입 오류**: 2024년

---

_이 문서는 프로젝트 개발 과정의 문제 해결 기록으로, 향후 유사한 문제 발생 시 참고 자료로 활용할 수 있습니다._


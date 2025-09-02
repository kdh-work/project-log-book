<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
    <!-- Hero Section -->
    <div class="bg-white shadow-lg rounded-lg mx-4 mt-4 p-8 text-center">
      <div class="mb-6">
        <h1 class="text-4xl font-bold text-gray-800 mb-2">권다혜</h1>
        <h2 class="text-2xl font-semibold text-blue-600 mb-4">Frontend Developer</h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          복잡한 기능을 사용자 친화적으로 구현하기 위해 고민하는는 개발자입니다.
        </p>
      </div>
    </div>

    <!-- Main Content Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mx-4 mt-6">
      
      <!-- 기술 스택 섹션 -->
      <div class="lg:col-span-1">
        <div class="bg-white shadow-lg rounded-lg p-6">
          <h3 class="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="text-2xl mr-2">🛠️</span>
            기술 스택
          </h3>
          <div class="space-y-3">
            <div class="flex items-center p-3 bg-blue-50 rounded-lg">
              <div class="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
              <span class="font-medium text-blue-800">Vue.js</span>
            </div>
            <div class="flex items-center p-3 bg-green-50 rounded-lg">
              <div class="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
              <span class="font-medium text-green-800">JavaScript</span>
            </div>
            <div class="flex items-center p-3 bg-purple-50 rounded-lg">
              <div class="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
              <span class="font-medium text-purple-800">TypeScript</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 경력 섹션 -->
      <div class="lg:col-span-2">
        <div class="bg-white shadow-lg rounded-lg p-6">
          <h3 class="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="text-2xl mr-2">💼</span>
            경력 사항
          </h3>
          
          <!-- 오케스트로 -->
          <div class="mb-6 p-4 border-l-4 border-blue-500 bg-blue-50 rounded-r-lg">
            <div class="flex justify-between items-start mb-2">
              <h4 class="text-lg font-semibold text-blue-800">오케스트로</h4>
              <span class="text-sm text-blue-600 bg-blue-100 px-2 py-1 rounded-full">2022.07 ~ 재직중</span>
            </div>
            <p class="text-blue-700 font-medium mb-2">Frontend Developer</p>
            <p class="text-gray-600 text-sm">모니터링 솔루션 개발 및 SI 사업 수행</p>
          </div>

          <!-- 대보정보통신 -->
          <div class="p-4 border-l-4 border-green-500 bg-green-50 rounded-r-lg">
            <div class="flex justify-between items-start mb-2">
              <h4 class="text-lg font-semibold text-green-800">대보정보통신</h4>
              <span class="text-sm text-green-600 bg-green-100 px-2 py-1 rounded-full">2021.12 ~ 2022.06</span>
            </div>
            <p class="text-green-700 font-medium mb-2">SI Developer</p>
            <p class="text-gray-600 text-sm">SI 사업 수행 및 제안서 작성</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 현재 프로젝트 섹션 -->
    <div class="mx-4 mt-6 mb-8">
      <div class="bg-white shadow-lg rounded-lg p-6">
        <h3 class="text-xl font-bold text-gray-800 mb-4 flex items-center">
          <span class="text-2xl mr-2">🚀</span>
          현재 프로젝트
        </h3>
        <div class="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-6 text-white">
          <h4 class="text-xl font-bold mb-2">Project Log Book</h4>
          <p class="text-blue-100 mb-4">
            개발 과정과 문제 해결 사례를 레퍼런스로 기록하기 위한 프로젝트 로그북입니다.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div>
              <div class="text-2xl font-bold">Vue 3</div>
              <div class="text-blue-100 text-sm">프레임워크</div>
            </div>
            <div>
              <div class="text-2xl font-bold">TypeScript</div>
              <div class="text-blue-100 text-sm">개발 언어</div>
            </div>
            <div>
              <div class="text-2xl font-bold">Tailwind CSS</div>
              <div class="text-blue-100 text-sm">스타일링</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 연락처 섹션 -->
    <div class="mx-4 mb-8">
      <div class="bg-white shadow-lg rounded-lg p-6 text-center">
        <h3 class="text-xl font-bold text-gray-800 mb-4 flex items-center justify-center">
          <span class="text-2xl mr-2">📧</span>
          kdhtoon@gmail.com
        </h3>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 필요한 경우 여기에 로직 추가
</script>

<style scoped>
/* 추가 스타일링이 필요한 경우 */
</style>

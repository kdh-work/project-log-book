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

<script setup lang="ts">
import Lnb from "./Lnb.vue";
</script>

<template>
  <a-layout style="min-height: 100vh">
    <!-- LNB 영역 -->
    <a-layout-sider collapsible>
      <div class="text-white text-center py-4 font-bold">Project</div>
      <Lnb />
    </a-layout-sider>

    <!-- Content 영역 -->
    <a-layout>
      <a-layout-header class="bg-white px-4">Header</a-layout-header>
      <a-layout-content class="p-4 bg-gray-50">
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">
import Lnb from "./Lnb.vue";
</script>

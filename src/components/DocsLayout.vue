<template>
  <a-layout style="min-height: 100vh">
    <!-- LNB 영역 -->
    <a-layout-sider collapsible>
      <div class="text-white text-center py-4 font-bold">Project</div>
      <a-menu
        theme="dark"
        mode="inline"
        :selectedKeys="[selectedKey]"
        @click="onMenuClick"
      >
        <a-menu-item key="Home">Home</a-menu-item>
        <a-menu-item key="About">About</a-menu-item>
      </a-menu>
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
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const selectedKey = ref("Home");

function onMenuClick({ key }: { key: string }) {
  selectedKey.value = key;
  router.push({ name: key });
}
</script>

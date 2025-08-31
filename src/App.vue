<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>

  <HelloWorld msg="Vite + Vue" />

  <!-- Tailwind 테스트 -->
  <div class="text-red-500 font-bold">Tailwind v4 OK</div>
  <div class="p-4 bg-yellow-200 text-red-500 font-bold">
    Tailwind v4 OK
  </div>
</template>

<!-- 1) Tailwind v4 엔트리: 외부 CSS만 로드 (내용 넣지 말 것) -->
<style src="./assets/tailwind.css"></style>

<!-- 2) 컴포넌트 전용 스타일 -->
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover { filter: drop-shadow(0 0 2em #646cffaa); }
.logo.vue:hover { filter: drop-shadow(0 0 2em #42b883aa); }
</style>

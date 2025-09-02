<template>
  <div
    class="bg-white rounded-lg shadow-lg p-6 border-l-4"
    :class="`border-${color}-500`"
  >
    <div class="flex items-center mb-4">
      <div
        class="w-12 h-12 rounded-full flex items-center justify-center mr-4"
        :class="`bg-${color}-100`"
      >
        <span class="text-2xl">{{ icon }}</span>
      </div>
      <div class="flex-1">
        <div class="flex items-center gap-3 mb-1">
          <h3 class="text-xl font-bold text-gray-800">{{ title }}</h3>
          <span
            class="text-xs font-medium px-2 py-1 rounded-full"
            :class="`bg-${color}-100 text-${color}-800`"
          >
            {{ date }}
          </span>
        </div>
        <p class="text-gray-600">{{ description }}</p>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div>
        <h4 class="font-semibold text-gray-700 mb-2">❌ 문제 상황</h4>
        <ul class="text-gray-600 space-y-1 text-sm">
          <li
            v-for="problem in problems"
            :key="problem"
            class="flex items-start"
          >
            <span class="mr-2">•</span>
            <span v-html="problem"></span>
          </li>
        </ul>
      </div>

      <div>
        <h4 class="font-semibold text-gray-700 mb-2">✅ 해결 방법</h4>
        <ul class="text-gray-600 space-y-1 text-sm">
          <li
            v-for="solution in solutions"
            :key="solution"
            class="flex items-start"
          >
            <span class="mr-2">•</span>
            <span v-html="solution"></span>
          </li>
        </ul>
      </div>
    </div>

    <div class="mt-4 p-3 rounded-lg" :class="`bg-${color}-50`">
      <span class="text-sm" :class="`text-${color}-700`">
        <strong>파일:</strong> {{ files }} | <strong>상태:</strong> ✅ 해결됨
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
interface ProblemCardProps {
  icon: string;
  title: string;
  description: string;
  date: string;
  color:
    | "blue"
    | "green"
    | "purple"
    | "orange"
    | "indigo"
    | "teal"
    | "pink"
    | "cyan";
  problems: string[];
  solutions: string[];
  files: string;
}

defineProps<ProblemCardProps>();
</script>

<style scoped>
/* Tailwind CSS 클래스들이 동적으로 적용되도록 보장 */
</style>

<template>
  <a-menu
    theme="dark"
    mode="inline"
    :selectedKeys="[selectedKey]"
    @click="onClick"
  >
    <template v-for="g in groups" :key="g.title">
      <a-menu-item v-for="it in g.items" :key="it.name">
        {{ it.title }}
      </a-menu-item>
    </template>
  </a-menu>
</template>
<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

interface LnbItem {
  name: string;
  title: string;
  path: string;
  section?: string;
}
const props = defineProps<{ items?: LnbItem[] }>();

const router = useRouter();
const route = useRoute();
const selectedKey = ref<string>("");

/** 기본값: router meta로 자동 생성 (meta.title 필수) */
const autoItems = computed<LnbItem[]>(() => {
  try {
    const routes = router.getRoutes();
    console.log("🛣️ 모든 라우트:", routes);
    
    const filteredRoutes = routes.filter((r) => !r.children.length && r.meta?.title);
    console.log("🔍 필터링된 라우트:", filteredRoutes);
    
    const items = filteredRoutes.map((r) => ({
      name: r.name as string,
      title: r.meta?.title || "Untitled",
      path: r.path,
      section: r.meta?.section || "Docs",
    }));
    
    console.log("📝 생성된 autoItems:", items);
    return items;
  } catch (error) {
    console.error("❌ Error in autoItems:", error);
    return [];
  }
});

const items = computed(() =>
  props.items?.length ? props.items : autoItems.value
);

const groups = computed(() => {
  console.log("📊 groups 계산 시작, items:", items.value);
  
  const map: Record<string, { title: string; items: LnbItem[] }> = {};
  for (const it of items.value) {
    const k = it.section || "Docs";
    console.log(`📁 아이템 "${it.title}" → 섹션 "${k}"`);
    
    if (!map[k]) map[k] = { title: k, items: [] };
    map[k].items.push(it);
  }
  
  const result = Object.values(map);
  console.log("📋 최종 groups:", result);
  return result;
});

function onClick({ key }: { key: string }) {
  console.log("🔍 Lnb onClick 이벤트 발생:", { key });
  console.log("📋 현재 items:", items.value);
  
  const target = items.value.find((i) => i.name === key);
  console.log("🎯 찾은 target:", target);
  
  if (target) {
    console.log("✅ 라우터 이동 시도:", target.path);
    router.push(target.path);
  } else {
    console.error("❌ target을 찾을 수 없음:", key);
  }
}

watch(
  () => route.name,
  (n) => {
    selectedKey.value = String(n ?? "");
  },
  { immediate: true }
);
</script>

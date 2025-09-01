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
    return router
      .getRoutes()
      .filter((r) => !r.children.length && r.meta?.title)
      .map((r) => ({
        name: r.name as string,
        title: r.meta?.title || "Untitled",
        path: r.path,
        section: r.meta?.section || "Docs",
      }));
  } catch (error) {
    console.error("Error in autoItems:", error);
    return [];
  }
});

const items = computed(() =>
  props.items?.length ? props.items : autoItems.value
);

const groups = computed(() => {
  const map: Record<string, { title: string; items: LnbItem[] }> = {};
  for (const it of items.value) {
    const k = it.section || "Docs";
    if (!map[k]) map[k] = { title: k, items: [] };
    map[k].items.push(it);
  }
  return Object.values(map);
});

function onClick({ key }: { key: string }) {
  const target = items.value.find((i) => i.name === key);
  if (target) router.push(target.path);
}

watch(
  () => route.name,
  (n) => {
    selectedKey.value = String(n ?? "");
  },
  { immediate: true }
);
</script>

<template>
  <!-- 手工验证页：vue 模式下补全 / Hover / snippets（与 index.html 同口径） -->
  <b-panel title="手工验证" background>
    <b-button type="" :plain="true" round>Default</b-button>
    <b-search-select v-model="value" :load="onLoad" placeholder="" @ />
    <b-flex-box>
      <template #fixed>固定区</template>
      <template #fluid>
        <b-list-async :load="onLoad" #>
          <template #item="{ item }">{{ item.name }}</template>
        </b-list-async>
      </template>
    </b-flex-box>
    <b-date-range-picker v-model="range" accounting-day="" />
  </b-panel>
</template>

<script setup lang="ts">
const value = '';
const range = [];
const onLoad = async ({ skip, take, keyword }: any) => ({ list: [], total: 0 });
</script>

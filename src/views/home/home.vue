<template>
  <h1>{{ store.counter }}</h1>
  <h2>{{ store.name }}</h2>
  <button @click="handleClick">增加</button>
</template>

<script setup lang="ts">
import { useStore } from '@/stores/counter';
import { piniaInstance } from '@/stores/index';
import { MutationType } from 'pinia';
import type { SubscriptionCallbackMutation } from 'pinia';

defineOptions({
  name: 'Home'
});

const store = useStore();
function handleClick() {
  store.$patch({
    counter: store.counter + 1,
    name: store.name + '312'
  });
}

store.$subscribe((mutations, state) => {
  if (mutations.type === MutationType.patchObject) {
    mutations.payload.counter;
  }
});
</script>

<style scoped lang="scss"></style>

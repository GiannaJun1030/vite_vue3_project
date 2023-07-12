<template>
  <div class="bg">
    {{ a }}
  </div>
  <input type="text" v-model="a.name" />
</template>

<script setup lang="ts">
import { reactive } from 'vue';
let a = reactive({ name: '', age: '' });
</script>

<style lang="scss" scoped>
.bg {
  @include useTheme {
    background-color: getVar('bgColor');
    color: getVar('color');
  }
}
</style>

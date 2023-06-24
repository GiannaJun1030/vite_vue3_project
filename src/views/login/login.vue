<template>
  <div w-full h-full flex justify-center items-center translate-y--80px>
    <div w-350px h-auto>
      <h1 text-center>后台管理系统</h1>
      <login-form @login="handleLogin" />
    </div>
  </div>
</template>

<script setup lang="ts">
import LoginForm from './login-form.vue';
import { login } from '@/api/index.ts';
import to from 'await-to-js';

defineOptions({ name: 'Login' });

// 处理登录事件
async function handleLogin(form) {
  const [result, err] = await to(login({ data: { ...form } }));
  if (err) return console.error(err);
}
</script>

<style lang="scss" scoped></style>

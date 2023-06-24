<template>
  <div w-full h-auto>
    <el-form
      p="20px 20px 0"
      border="solid #e2e8f0 1 rounded-5px"
      ref="ruleFormRef"
      label-width="60px"
      status-icon
      :rules="rules"
      :model="ruleForm"
    >
      <el-form-item label="账号:" prop="name">
        <el-input v-model="ruleForm.name" placeholder="请输入账号" />
      </el-form-item>
      <el-form-item label="密码:" prop="password">
        <el-input
          v-model="ruleForm.password"
          placeholder="请输入密码"
          type="password"
          show-password
        />
      </el-form-item>
    </el-form>
    <div text="12px #0ea5e9" flex justify-between mt-5px mb-5px>
      <el-checkbox v-model="isRmbPwd" label="记住密码" size="small" />
      <div leading-24px>忘记密码</div>
    </div>
    <el-button w-full type="primary" @click="handleClickLogin" size="large">
      立即登录
    </el-button>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import to from 'await-to-js';
import type { ILoginForm } from './types';
import type { FormInstance, FormRules } from 'element-plus';
// emit事件
const emits = defineEmits<{
  login: [form: { name: string; password: string }];
}>();

// 点击登录
async function handleClickLogin() {
  const [err] = await to(ruleFormRef.value!.validate());
  if (err) return console.error(err);
  emits('login', { ...ruleForm });
}

// form实例
const ruleFormRef = ref<FormInstance>();
// 是否记住密码
const isRmbPwd = ref(false);
// 表单内容
const ruleForm = reactive<ILoginForm>({
  name: 'coderwhy',
  password: '123456'
});
// 表单验证规则
const rules = reactive<FormRules<ILoginForm>>({
  name: [{ required: true, message: '请输入账号', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
});
</script>

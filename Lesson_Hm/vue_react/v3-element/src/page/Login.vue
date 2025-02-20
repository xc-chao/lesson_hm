<template>
    <el-form
      ref="formRef"
      :model="form"
      :rules="rules"
      label-width="auto"
      style="position:absolute; left:45%;"
    >
      <!-- 用户名 -->
      <el-form-item prop="name">
        <label for="username">用户名</label>
        <el-input 
          id="username" 
          v-model="form.name" 
          size="small"
        />
      </el-form-item>
  
      <!-- 密码 -->
      <el-form-item prop="password">
        <label for="password">密码</label>
        <el-input 
          id="password" 
          v-model="form.password" 
          size="small" 
          type="password"
        />
      </el-form-item>   
  
      <el-form-item>
        <el-button type="primary" @click="onSubmit" :loading="loading">登录</el-button>
      </el-form-item>
    </el-form>
  </template>
  
  <script setup>
  import { reactive, ref } from 'vue'
  
  // 表单实例
  const formRef = ref(null)
  
  // 表单数据
  const form = reactive({
    name: '',
    password: ''
  })
  
  // 加载状态
  const loading = ref(false)
  
  // 验证规则
  const rules = {
    name: [
      { required: true, message: '请输入用户名', trigger: 'blur'},
      { min: 5, max: 10, message: '长度在5-10个字符', trigger: 'blur' }
    ],
    password: [
      { required: true, message: '请输入密码', trigger: 'blur' },
      { min: 5, max: 10, message: '长度在5-10个字符', trigger: 'blur' }
    ]
  }
  
  // 登录
  const onSubmit = async () => {
    await formRef.value.validate((valid) => {
    if (valid) {
      console.log('验证成功');
    } else {
      console.log('验证失败');
    }
  });
  }
  
  </script>
  
  <style scoped>
  /* 样式可以根据需要添加 */
  </style>
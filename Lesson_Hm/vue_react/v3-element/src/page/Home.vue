<template>
    <el-container>
      <el-header>
        <el-menu
          :default-active="1"
          class="el-menu-demo"
          mode="horizontal"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="1">
          处理中心
          </el-menu-item>
          <el-submenu index="2">
            <template #title>
              我的工作台
            </template>
            <el-menu-item index="2-1">
              选项一
            </el-menu-item>
            <el-menu-item index="2-2">
              选项二
            </el-menu-item>
            <el-menu-item index="2-3">
              选项三
            </el-menu-item>
          </el-submenu>
          <el-menu-item index="3">
          消息中心
          </el-menu-item>
        </el-menu>
      </el-header>
      <el-container style="padding: 20px;">
        <el-aside width="200px">
          <div style="padding: 20px;">
            <router-link to="/">
              Home
            </router-link>
          </div>
          <div>
            <router-link to="/about">
              About
            </router-link>
          </div>
        </el-aside>
        <el-container>
          <el-main>
            <router-view />
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </template>
  
  <script setup>
  console.log('home')
  </script>
  
  <style scoped>
  
  </style>
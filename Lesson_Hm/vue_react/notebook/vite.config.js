import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createStyleImportPlugin } from 'vite-plugin-style-import'
import path from 'path'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),createStyleImportPlugin({
    libs:[
      {
        libraryName:'zarm',
        esModule:true,
        resolveStyle:name=>`zarm/es/${name}/style/css`
      }
    ]
  })],
  // 配置css模块化
  css:{
    modules:{
      // 引入的class 命名格式 驼峰命名法
      localsConvention:'dashesOnly'
    }
  },
  // 配置路径别名
  resolve:{
    // 配置路径别名，@ 代表src utils 代表src/utils
    // __dirname 代表当前文件所在的目录绝对路径
    alias:{
      '@':path.resolve(__dirname,'src'),
      'utils':path.resolve(__dirname,'src/utils'),
    }
  },
  server:{
    proxy:{
      '/api':{
        target: 'http://localhost:3000/api',
        changeOrigin: true,
        // 正则表达式 去除/api 只要不是/api开头的路径
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})

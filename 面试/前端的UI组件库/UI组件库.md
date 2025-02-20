# UI组件库

## Element UI
Element UI 是一个基于 Vue.js 2.0 的桌面端组件库，提供了丰富的组件来帮助开发者快速构建美观的应用界面。它以易用性、丰富性和可定制性著称，非常适合用于开发企业级应用。其组件包括布局、表单元素、数据展示等多种类型，支持按需加载以优化项目体积。

## Zarm
Zarm 是由众安科技开发的移动端 Vue 组件库，专注于提供高质量的移动组件，旨在提升移动端Web应用的开发效率和用户体验。它的设计风格现代简洁，拥有良好的适应性和自定义能力，适用于各类移动Web项目的快速开发。

## Vant
Vant 是一个轻量、可靠的移动端 Vue 组件库，特别适合电商类应用场景。它以体积小、性能优越而受到青睐，包含了许多常用的移动端组件，如按钮、弹出框、列表等。Vant 强调组件的灵活性和可复用性，并且支持通过 CDN 快速接入和使用。

## Iconfont
Iconfont 并不是一个传统的UI组件库，而是阿里巴巴推出的一个图标管理平台，提供矢量图标下载、在线存储、格式转换等功能。通过 Iconfont，开发者可以方便地管理和使用大量图标资源，既可以直接使用 SVG 格式的图标，也可以将其作为字体文件集成到网页或应用中，极大地提高了图标的使用效率和灵活性。

### vite工程化启动组件库，按需加载
**如果是在react中**
在 Vite 中，您可以使用 vite-plugin-style-import 插件来实现类似的按需加载样式功能。这个插件可以帮助您自动导入指定库的样式文件，从而实现按需加载。

首先，确保安装了必要的依赖：

npm install vite-plugin-style-import --save-dev（项目依赖） 缩写 -S

使用createStyleImportPlugin插件 从 vite-plugin-style-import 中导入

 plugins: [react(),createStyleImportPlugin({
    libs:[
      {
        libraryName:'zarm',
        esModule:true,
        resolveStyle:name=>`zarm/es/${name}/style/css`
      }
    ]
  })]
plugins是一个数组，用于配置 Vite 插件。
react()是一个 Vite 插件，用于支持 React 项目。
createStyleImportPlugin是一个 Vite 插件，用于自动导入样式文件。
libs是一个数组，用于配置需要按需加载的库。

**如果是在vue中**
对于 Vue 项目，您确实需要使用适用于 Vue 的插件来替换 react()，而不是简单地将 react() 更改为 vue()。在 Vite 中，Vue 的支持是通过 @vitejs/plugin-vue 插件提供的。因此，如果您正在开发一个 Vue 项目，并希望实现类似的按需加载样式功能，您的配置应该做如下调整：

首先，确保安装了必要的依赖：

npm install @vitejs/plugin-vue create-style-import-plugin --save-dev（项目依赖） 缩写 -S
然后，在您的 Vite 配置文件（通常是 vite.config.js 或 vite.config.ts）中进行如下配置：

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import styleImport from 'create-style-import-plugin';

export default defineConfig({
  plugins: [
    vue(), // 使用 @vitejs/plugin-vue 来支持 Vue 单文件组件
    createStyleImportPlugin({
      libs: [
        {
          libraryName: 'zarm',
          esModule: true,
          resolveStyle: name => `zarm/es/${name}/style/css`
        }
        // 可以在这里添加其他库的按需加载配置
      ]
    })
  ]
});
在这个配置中：

**vue()**是来自 @vitejs/plugin-vue 的默认导出函数，它提供了对 Vue 单文件组件（SFCs）的支持。
**createStyleImportPlugin({...})** 用于自动导入指定库的样式文件，根据实际使用的组件按需加载样式。
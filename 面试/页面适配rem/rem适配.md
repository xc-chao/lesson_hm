# 页面适配
- 移动端适配
  rem 10rem = 宽度
  - lib-flexible rem 适配
  - postcss-pxtorem 包 自动化px 转rem 提高开发效率
    - postcss 允许开发者通过一系列插件来处理和增强 css 文件，使其具备更高的可维护性、兼容性和性能。

## lib-flexible 包
**lib-flexible**：是一个用于移动端适配的 JavaScript 库，它可以根据设备的屏幕宽度动态调整根元素的 font-size，
从而实现响应式布局。通过使用 lib-flexible，我们可以轻松地实现移动端页面的自适应，
无需手动计算和调整字体大小。

## postcss-pxtorem 包
**postcss-pxtorem**：是一个 PostCSS 插件，它可以将 CSS 文件中的像素单位（px）自动转换为 rem 单位，
从而简化了响应式设计的工作量。结合 lib-flexible 使用，可以极大地提高开发效率和页面的适应性。
手动创建posstcss.config.js文件 进行配置
import pxtorem from 'postcss-pxtorem'
export default {
  plugins: [
    pxtorem({
      rootValue: 37.5,  1rem = 37.5px
      propList: ['*'],
      selectorBlackList: ['.norem'],// 过滤掉.norem-开头的class，不进行rem转换
    }),
  ],
}


### 手写监听窗口大小 resize事件
function adjustFontSize() {
    const docEl = document.documentElement;
    const clientWidth = docEl.clientWidth;
    if (!clientWidth) return;
    // 假设设计稿宽度为750px，这里可以根据实际情况调整
    docEl.style.fontSize = `${clientWidth / 7.5}px`; 1rem = 100px
}

// 初始化时调用一次
adjustFontSize();

// 监听窗口大小变化
window.addEventListener('resize', adjustFontSize);
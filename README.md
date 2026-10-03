# ChenYY — A little out of orbit.

一小片互联网，自由生长。个人主页、GitHub 和三个小工具的导航入口。

界面采用暖纸色、朱红与衬线排版，以原创 SVG 轨道艺术和五张插画卡片串联。支持手机布局、可记忆的明暗主题、键盘导航，以及系统的减少动态效果偏好。字体服务不可用时会使用本地备用字体。

## 本地运行

需要 Node.js 20.19+ 或 22.12+。

```sh
npm install
npm run dev
```

访问 http://localhost:3000。导航页不需要 API Key。

```sh
npm run lint    # TypeScript 检查
npm run build   # 生成 dist/
npm run preview
```

## 修改入口

在 `src/components/NavigationCards.tsx` 中修改 `sites` 数组的链接和文案。

- `src/components/Artwork.tsx`：轨道雕塑与卡片插画
- `src/index.css`：主题变量、布局与响应式样式
- `src/App.tsx`：页面结构与主题切换

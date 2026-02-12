# React Todo App

现代化的Todo应用，采用React + TypeScript + Vite构建，具有美观的TEA风格UI设计。

## ✨ 功能特性

- ✅ 添加、编辑、删除任务
- ✅ 标记任务完成状态
- ✅ 任务过滤（全部/进行中/已完成）
- ✅ 实时统计和进度显示
- ✅ 现代化UI设计（渐变背景、卡片布局、平滑动画）
- ✅ 响应式设计，支持移动端
- ✅ 单页应用路由支持

## 🚀 在线预览

- **GitHub仓库**: https://github.com/mhlmr521/react-todo-app

## 🛠️ 技术栈

- **前端框架**: React 18
- **类型系统**: TypeScript
- **构建工具**: Vite
- **样式**: 现代CSS + 渐变效果
- **图标**: Lucide React
- **部署**: Nginx + Docker

## 📦 本地开发

### 安装依赖
```bash
npm install
```

### 启动开发服务器
```bash
npm run dev
```

### 构建生产版本
```bash
npm run build
```

### 预览构建结果
```bash
npm run preview
```

## 🔄 更新流程

### 1. 本地开发
```bash
# 修改代码后
git add .
git commit -m "描述修改内容"
git push
```

### 2. 部署到服务器
- 推送到GitHub后，可以手动同步到服务器
- 或使用GitHub Actions自动部署（正在配置中）

## 📁 项目结构

```
src/
├── components/          # React组件
│   ├── TodoInput.tsx   # 任务输入组件
│   ├── TodoList.tsx    # 任务列表组件
│   ├── TodoItem.tsx    # 单个任务组件
│   ├── TodoFilter.tsx  # 过滤器组件
│   └── TodoStats.tsx   # 统计组件
├── hooks/              # 自定义Hooks
│   └── useTodos.ts     # 任务管理Hook
├── types/              # 类型定义
│   └── todo.ts         # Todo类型
├── App.tsx             # 主应用组件
├── main.tsx            # 应用入口
└── index.css           # 全局样式
```

## 🎨 设计特色

- **渐变背景**: 紫蓝色渐变，营造现代感
- **卡片设计**: 毛玻璃效果，层次分明
- **平滑动画**: 所有交互都有过渡效果
- **响应式布局**: 适配各种屏幕尺寸
- **优雅配色**: 专业的色彩搭配

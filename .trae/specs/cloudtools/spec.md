# CloudTools 个人全能工具站 - 产品需求文档

## Overview
- **Summary**: CloudTools 是一个轻量级全功能个人工具站，基于 Cloudflare 全栈技术构建，实现零服务器、零成本/低成本部署，提供高性能的个人工具集。
- **Purpose**: 为用户提供一站式的个人工具解决方案，包括 MBTI 测试、星座测试、个人博客、在线记事本和实用小工具集，无需服务器，隐私优先，全球快速访问。
- **Target Users**: 个人用户，需要日常工具、自我探索和个人记录的用户。

## Goals
- 构建基于 Cloudflare 全栈技术的个人工具站
- 实现零服务器、零成本/低成本部署
- 提供高性能、全球快速访问的用户体验
- 覆盖多种个人工具功能，满足日常需求
- 确保数据隐私和安全性
- 实现现代美观的用户界面
- 保证代码可读性和可维护性

## Non-Goals (Out of Scope)
- 多用户系统和用户登录
- 复杂的后端服务器架构
- 大型数据库和高并发处理
- 商业化功能和付费服务
- 复杂的权限管理系统

## Background & Context
- 随着个人工具需求的增长，用户需要一个集成多种功能的平台
- Cloudflare 提供了丰富的 Serverless 服务，适合构建零成本/低成本的个人工具站
- 现代前端技术如 Next.js 和 Tailwind CSS 提供了良好的开发体验和用户体验
- 无服务器架构可以减少运维成本和复杂性

## Functional Requirements
- **FR-1**: MBTI 测试模块
  - 提供完整的 MBTI 测试题库
  - 支持测试结果分析和详情展示
  - 支持测试结果分享功能

- **FR-2**: 星座测试模块
  - 提供每日、每周、每月运势
  - 支持星座详情查询
  - 基于出生日期的星座匹配

- **FR-3**: 个人博客模块
  - 支持 Markdown 编辑
  - 提供分类和标签功能
  - 支持博客搜索功能
  - 支持云端存储和同步

- **FR-4**: 在线记事本模块
  - 支持笔记的增删改查操作
  - 提供云端同步功能
  - 支持笔记分类管理
  - 支持本地备份

- **FR-5**: 实用小工具集
  - 计算器功能
  - 密码生成器
  - 时间转换工具
  - 二维码生成器

- **FR-6**: 基础模块
  - 首页设计
  - 导航系统
  - 设置页面
  - 主题切换（暗黑/亮色模式）
  - PWA 支持（离线可用）

## Non-Functional Requirements
- **NFR-1**: 性能要求
  - 全球加载时间 < 2s
  - 边缘渲染，减少延迟
  - 静态资源 CDN 加速
  - 无卡顿的用户体验
  - PWA 离线可用

- **NFR-2**: UI/UX 要求
  - 现代极简设计风格
  - 响应式布局（移动端/PC）
  - 支持暗黑/亮色模式
  - 流畅的动画效果
  - 操作极简，用户友好

- **NFR-3**: 代码要求
  - TypeScript 强类型
  - 模块化设计
  - 组件复用
  - 完整的注释
  - ESLint/Prettier 代码规范
  - 易拓展的架构

- **NFR-4**: 部署要求
  - 100% Cloudflare 原生部署
  - 零服务器架构
  - 自动 CI/CD 部署
  - 免费额度够用

- **NFR-5**: 安全要求
  - 无用户登录设计（个人工具，隐私优先）
  - Cloudflare Turnstile 防刷
  - 数据加密
  - XSS 防护

- **NFR-6**: 拓展要求
  - 插件化架构
  - 新增功能无需重构
  - 支持自定义工具

- **NFR-7**: 数据要求
  - 云端自动同步（D1）
  - 本地备份
  - 轻量存储
  - 无冗余数据

- **NFR-8**: 兼容性要求
  - 支持所有现代浏览器
  - 移动端适配完美

## 技术栈

### 前端核心
- **框架**: Next.js 15 (App Router, TypeScript) —— 支持 SSG/ISR/Edge 渲染，Cloudflare Pages 原生支持，SEO 友好
- **UI 组件**: ShadCN UI + Tailwind CSS v3 —— 现代无设计感，自定义性强，体积小
- **图标**: Lucide React —— 轻量矢量图标
- **状态管理**: Zustand —— 轻量，无模板代码
- **表单校验**: Zod —— 类型安全校验
- **工具库**: Day.js（时间）、QRCode（二维码）、Markdown-it（博客编辑）

### Cloudflare 全栈服务
- **部署托管**: Cloudflare Pages —— 全球 CDN，自动部署，免费
- **边缘函数**: Cloudflare Workers —— 处理后端 API、运势接口、数据操作
- **数据库**: Cloudflare D1 (SQLite) —— 轻量关系型数据库，存博客/笔记
- **键值存储**: Cloudflare KV —— 存配置、缓存、测试结果
- **安全验证**: Cloudflare Turnstile —— 无感人机验证
- **对象存储（可选）**: Cloudflare R2 —— 存博客图片

### 开发/构建
- **语言**: TypeScript —— 强类型，可读性/可维护性拉满
- **包管理器**: pnpm —— 速度快，依赖干净
- **代码规范**: ESLint + Prettier —— 统一代码风格
- **版本控制**: Git + GitHub —— 自动部署到 Pages

## Constraints
- **Technical**: Cloudflare 服务的限制和配额
- **Business**: 零成本/低成本部署
- **Dependencies**: Cloudflare 生态系统服务

## Assumptions
- 用户使用现代浏览器
- Cloudflare 免费额度满足个人使用需求
- 用户接受无登录的个人工具设计
- 数据存储在 Cloudflare D1 和 KV 中是安全的

## Acceptance Criteria

### AC-1: MBTI 测试功能
- **Given**: 用户访问 MBTI 测试页面
- **When**: 用户完成测试并提交
- **Then**: 系统显示详细的测试结果和分析
- **Verification**: `human-judgment`

### AC-2: 星座测试功能
- **Given**: 用户访问星座测试页面并输入出生日期
- **When**: 用户提交查询
- **Then**: 系统显示对应的星座信息和运势
- **Verification**: `human-judgment`

### AC-3: 个人博客功能
- **Given**: 用户访问博客页面
- **When**: 用户创建、编辑或删除博客
- **Then**: 系统保存并同步到云端
- **Verification**: `programmatic`

### AC-4: 在线记事本功能
- **Given**: 用户访问记事本页面
- **When**: 用户创建、编辑或删除笔记
- **Then**: 系统保存并同步到云端
- **Verification**: `programmatic`

### AC-5: 实用小工具功能
- **Given**: 用户访问小工具页面
- **When**: 用户使用各种工具
- **Then**: 系统正确执行工具功能
- **Verification**: `programmatic`

### AC-6: 性能要求
- **Given**: 用户从不同地区访问网站
- **When**: 页面加载
- **Then**: 加载时间 < 2s
- **Verification**: `programmatic`

### AC-7: UI/UX 要求
- **Given**: 用户在不同设备上访问网站
- **When**: 页面渲染
- **Then**: 响应式布局正常，动画流畅
- **Verification**: `human-judgment`

### AC-8: 部署要求
- **Given**: 代码推送到 GitHub
- **When**: Cloudflare Pages 自动部署
- **Then**: 部署成功，网站可访问
- **Verification**: `programmatic`

## Open Questions
- [ ] 具体的 MBTI 测试题库内容
- [ ] 星座运势数据的来源
- [ ] 博客和记事本的存储容量限制
- [ ] 小工具的具体功能细节
- [ ] PWA 离线功能的具体实现
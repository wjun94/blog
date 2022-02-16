import { defineConfig } from 'dumi';

export default defineConfig({
  title: '笔记',
  mode: 'doc',
  // 设置路由前缀，通常用于部署到非根目录。
  base: process.env.NODE_ENV === 'development' ? '/' : '/blog',
  publicPath: process.env.NODE_ENV === 'development' ? '/' : '/blog/',
  // more config: https://d.umijs.org/config
});

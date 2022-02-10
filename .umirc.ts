import { defineConfig } from 'dumi';

export default defineConfig({
  title: '笔记',
  mode: 'doc',
  publicPath: process.env.NODE_ENV === 'development' ? '/' : './',
  // more config: https://d.umijs.org/config
});

import { defineConfig } from 'dumi';

console.log(process.env.NODE_ENV);

export default defineConfig({
  title: '笔记',
  mode: 'doc',
  publicPath: process.env.NODE_ENV === 'development' ? '/' : './',
  // more config: https://d.umijs.org/config
});

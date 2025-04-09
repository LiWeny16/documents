import { defineConfig } from 'dumi';

export default defineConfig({
  base: '/documents/',
  publicPath: '/documents/',
  resolve: {
    docDirs: ['docs_origin'],
  },
  outputPath: 'docs',
  logo: '/icons/192x192.png', // 左上角 Logo（放在 public 目录）
  themeConfig: {
    name: 'LetShare!',
  },
});

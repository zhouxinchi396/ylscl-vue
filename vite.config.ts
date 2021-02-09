import { SharedConfig } from 'vite';
import path from 'path';

const pathResolve = (pathStr: string) => {
  return path.resolve(__dirname, pathStr);
};

const config: SharedConfig = {
  alias: {
    // 键必须以斜线开始和结束
    '/@/': pathResolve('./src')
  },
}
module.exports = config;

// module.exports = {
//   alias: {
//     // 键必须以斜线开始和结束
//     '/@/': pathResolve('./src')
//   },
//   hostname: '0.0.0.0',
//   port: 8080,
//   // 是否自动在浏览器打开
//   open: true,
//   // 是否开启 https
//   https: false,
//   // 服务端渲染
//   ssr: false,
//   /**
//    * 在生产中服务时的基本公共路径。
//    * @default '/'
//    */
//   base: './',
//   /**
//    * 与“根”相关的目录，构建输出将放在其中。如果目录存在，它将在构建之前被删除。
//    * @default 'dist'
//    */
//   outDir: 'dist',
//   publicPath: './',
//   outputDir: "dist", // 输出文件目录
//   lintOnSave: false, // eslint 是否在保存时检查
//   assetsDir: 'static', // 配置js、css静态资源二级目录的位置  
// }
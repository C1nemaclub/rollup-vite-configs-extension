// // rollup.config.js

// import babel from '@rollup/plugin-babel';
// import commonjs from '@rollup/plugin-commonjs';
// import resolve from '@rollup/plugin-node-resolve';
// import replace from '@rollup/plugin-replace';

// import {
//   chromeExtension,
//   simpleReloader,
// } from 'rollup-plugin-chrome-extension';

// export default {
//   input: 'src/manifest.json',
//   output: {
//     dir: 'dist',
//     format: 'esm',
//   },
//   plugins: [
//     // always put chromeExtension() before other plugins
//     chromeExtension({
//       // allow sidePanel permission
//       // see: https://developer.chrome.com/docs/extensions/mv3/manifest/sidePanel/
//       // extendManifest: {
//       //   permissions: ['sidePanel'],
//       // },
//       // firstClassManifest: true,
//     }),
//     simpleReloader(),
//     // the plugins below are optional
//     resolve({
//       extensions: ['.js', '.jsx'],
//     }),
//     commonjs(),
//     babel({
//       babelHelpers: 'bundled',
//       presets: ['@babel/preset-react'],
//       extensions: ['.js', '.jsx'],
//     }),
//     replace({
//       preventAssignment: false,
//       'process.env.NODE_ENV': '"development"',
//     }),
//   ],
// };

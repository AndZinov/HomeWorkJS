import { babel } from '@rollup/plugin-babel';
import styles from "rollup-plugin-styles";
import image from 'rollup-plugin-img';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload'


export default {
    input: './Lesson-17 Webpack,Rollup/Lesson material/index.js',
    output: {
      file: './/Lesson-17 Webpack,Rollup/Lesson material/build/bundle.js',
      format: 'cjs'
    },
    plugins: [
      babel({
         babelHelpers: 'bundled',
         presets: ["@babel/env"]
         }),
      styles(),
      image({
        limit: 100000,
      }),
      serve({
        open: true,
        contentBase: './Lesson-17 Webpack,Rollup/Lesson material',
        port: 8001,
      }),
      livereload(),
    ]
  };
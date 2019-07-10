import vue from 'rollup-plugin-vue'
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'src/components/Header.vue',
  output: {
    format: 'cjs',
    file: 'dist/Header.js'
  },
  external: [
    'vue',
    "@contentarchitect/editor"
  ],
  plugins: [
    vue(),
    commonjs(),
  ]
}
import vue from 'rollup-plugin-vue'
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'src/components/Header.vue',
  output: {
    format: 'umd',
    file: 'dist/Header.js',
    name: "Header"
  },
  plugins: [
    vue(),
    commonjs(),
  ]
}
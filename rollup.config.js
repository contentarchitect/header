import vue from 'rollup-plugin-vue'
import svg from 'rollup-plugin-vue-inline-svg'

export default {
  input: './src/main.js',
  external: ['vue', "@contentarchitect/editor"],
  output: {
    file: 'dist/header.js',
    format: 'umd',
    name: "Header",
    globals: {
      vue: "Vue",
      "@contentarchitect/editor": "ContentArchitect"
    }
  },
  plugins: [
    svg(),
    vue(),
  ]
}
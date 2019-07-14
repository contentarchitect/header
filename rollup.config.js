import vue from 'rollup-plugin-vue'
import commonjs from 'rollup-plugin-commonjs';

export default [
  {
    input: 'src/components/Header.vue',
    output: {
      format: 'iife',
      file: 'dist/Header.iife.js',
      name: "Header"
    },
    plugins: [
      vue(),
      commonjs(),
    ]
  },
  {
    input: 'src/components/Header.vue',
    output: {
      format: 'umd',
      file: 'dist/Header.umd.js',
      name: "Header"
    },
    plugins: [
      vue(),
      commonjs(),
    ]
  },
  {
    input: 'src/components/Header.vue',
    output: {
      format: 'cjs',
      file: 'dist/Header.cjs.js',
      name: "Header"
    },
    plugins: [
      vue(),
      commonjs(),
    ]
  },
  {
    input: 'src/components/Header.vue',
    output: {
      format: 'amd',
      file: 'dist/Header.amd.js',
      name: "Header"
    },
    plugins: [
      vue(),
      commonjs(),
    ]
  }
]
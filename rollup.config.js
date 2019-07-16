import vue from 'rollup-plugin-vue'
import commonjs from 'rollup-plugin-commonjs';

export default [
  {
    input: 'src/components/Header.vue',
    output: {
      format: 'iife',
      file: 'dist/Header.iife.js',
      name: "Header",
      globals: {
        "@contentarchitect/base": "base"
      },
    },
    external: [ "@contentarchitect/base" ],
    plugins: [
      commonjs(),
      vue(),
    ]
  },
  {
    input: 'src/components/Header.vue',
    output: {
      format: 'umd',
      file: 'dist/Header.umd.js',
      name: "Header",
      globals: {
        "@contentarchitect/base": "base"
      },
    },
    external: [ "@contentarchitect/base" ],
    plugins: [
      commonjs(),
      vue(),
    ]
  },
  {
    input: 'src/components/Header.vue',
    output: {
      format: 'cjs',
      file: 'dist/Header.cjs.js',
      name: "Header"
    },
    external: [ "@contentarchitect/base" ],
    plugins: [
      commonjs(),
      vue(),
    ]
  },
  {
    input: 'src/components/Header.vue',
    output: {
      format: 'amd',
      file: 'dist/Header.amd.js',
      name: "Header"
    },
    external: [ "@contentarchitect/base" ],
    plugins: [
      commonjs(),
      vue(),
    ]
  },
  {
    input: 'src/components/Header.vue',
    output: {
      format: 'esm',
      file: 'dist/Header.esm.js',
    },
    external: [ "@contentarchitect/base" ],
    plugins: [
      commonjs(),
      vue(),
    ]
  },
]
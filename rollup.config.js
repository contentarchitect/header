import vue from 'rollup-plugin-vue'
import svg from 'rollup-plugin-vue-inline-svg'
import { terser } from "rollup-plugin-terser";

export default {
  input: './src/main.js',
  external: ['vue', "@contentarchitect/editor"],
  output: [
		{
			file: 'dist/header.js',
			format: 'umd',
			name: 'Header',
			globals: {
				vue: "Vue",
				'@contentarchitect/editor': 'ContentArchitect'
			}
		},
		{
			file: 'dist/header.min.js',
			format: 'umd',
			name: 'Header',
			globals: {
				vue: "Vue",
				'@contentarchitect/editor': 'ContentArchitect'
			},
			plugins: [
				terser({
					keep_classnames: true
				})
			]
		},
	],
  plugins: [
    svg(),
    vue(),
  ]
}
import typescript from '@rollup/plugin-typescript'
import resolve from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'
import htmlTemplate from 'rollup-plugin-generate-html-template'

export default {
  input: './src/main.ts',
  output: {
    file: './dist/build.js',
    format: 'es',
  },
  plugins: [
    typescript(),
    resolve(),
    terser(),
    htmlTemplate({
      template: './index.html',
      target: 'dist/index.html',
    }),
  ],
}

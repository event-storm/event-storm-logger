import copy from 'rollup-plugin-copy';
import { terser } from 'rollup-plugin-terser';
import resolve from 'rollup-plugin-node-resolve';

const config = {
  input: './src/index.js',
  output: [
    {
      dir: 'dist',
      format: 'cjs',
      sourcemap: false,
      entryFileNames: 'index.js',
    },
  ],
  plugins: [
    resolve(),
    terser(),
    copy({
      targets: [
        { src: './package.json', dest: './dist' },
        { src: './LICENSE', dest: './dist' },
        { src: './README.md', dest: './dist' },
        { src: './types', dest: './dist' },
      ],
    }),
  ],
};

export default config;

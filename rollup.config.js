import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

import pkg from './package.json';

const output = [
  { file: pkg.module, format: 'es' },
  { file: pkg.main, format: 'cjs', name: pkg.name },
];

process.env.NODE_ENV = 'build';

export default {
  input: 'src/index.js',
  output,
  plugins: [
    resolve({
      mainFields: ['module', 'main', 'jsnext:main'],
    }),
    commonjs({
      include: 'node_modules/**',
    }),
  ],
  external: ['ramda'],
};

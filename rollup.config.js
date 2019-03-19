import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { uglify } from 'rollup-plugin-uglify';
import { minify } from 'uglify-es';

import pkg from './package.json';

const output = [
  { file: pkg.module, format: 'es' },
  { file: pkg.main, format: 'cjs', name: pkg.name },
];

process.env.NODE_ENV = 'build';

export default {
  input: 'src/index.js',
  output,
  plugins: [resolve(), commonjs(), uglify({}, minify)],
  sourcemap: true,
};

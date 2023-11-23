import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import pkg from './package.json' assert {type: 'json'};

const production = !process.env.ROLLUP_WATCH;

export default {
  input:    'src/index.ts',
  output:   [
    {
      file:    pkg.main,
      format:  'umd',
      name:    'index.cjs.js',
      exports: 'default'
    },
    {
      file:    pkg.module,
      format:  'es',
      exports: 'default'
    },
    {
      file:    pkg.browser,
      format:  'cjs',
      exports: 'default'
    }
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {})
  ],
  plugins:  [
    resolve(),
    typescript({sourceMap: !production}),
    commonjs(),
    production && terser({format: {comments: false}})
  ]
};

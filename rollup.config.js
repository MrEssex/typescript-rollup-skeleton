import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'umd',
      name: 'index.cjs.js',
      exports: 'default',
    },
    {
      file: pkg.module,
      format: 'es',
      exports: 'default',
    },
    {
      file: pkg.browser,
      format: 'cjs',
      exports: 'default',
    },
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
  plugins: [
    typescript({
      typescript: require('typescript'), // eslint-disable-line global-require
    }),
  ],
};

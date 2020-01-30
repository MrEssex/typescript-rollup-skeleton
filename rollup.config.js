import typescript from "rollup-plugin-typescript2";
import pkg from "./package.json";

export default {
  input: "src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "umd",
      name: "index.cjs.js"
    },
    {
      file: pkg.module,
      format: "es"
    },
    {
      file: pkg.browser,
      format: "cjs"
    }
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {})
  ],
  plugins: [
    typescript({
      typescript: require("typescript")
    })
  ]
};

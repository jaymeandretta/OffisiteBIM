import resolve from "@rollup/plugin-node-resolve";

export default {
  input: "./assets/scripts/index.js",
  output: [
    {
      format: "esm",
      file: "./assets/scripts/bundle.js",
    },
  ],
  plugins: [resolve()],
};

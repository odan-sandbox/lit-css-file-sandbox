import { defineConfig, Plugin } from "vite";
import { transform } from "@babel/core";
import { transform as litCssTransform } from "@pwrs/lit-css";

function babelPlugin(): Plugin {
  return {
    name: "babel-plugin",
    transform(code, id) {
      if (id.endsWith(".ts")) {
        const result = transform(code);
        return result?.code;
      }
      return code;
    },
  };
}

function litCssPlugin(): Plugin {
  return {
    name: "lit-css-plugin",
    async transform(code, id) {
      if (id.endsWith(".lit-css")) {
        const result = await litCssTransform({ css: code });
        return result;
      }
    },
  };
}

export default defineConfig({
  plugins: [babelPlugin(), litCssPlugin()],
});

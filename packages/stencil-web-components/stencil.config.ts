import { Config } from "@stencil/core";
import { reactOutputTarget } from "@stencil/react-output-target";
import { postcss } from "@stencil/postcss";

export const config: Config = {
  globalStyle: "src/global/app.css",
  namespace: "stencil-web-components",
  buildDist: true,
  outputTargets: [
    {
      type: "www",
      serviceWorker: null,
      baseUrl: "http://localhost:5000",
    },
    {
      type: "dist",
      esmLoaderPath: "../loader",
    },
    {
      type: "dist-hydrate-script",
    },
    { type: "docs-readme" },
    { type: "docs-vscode", file: "docs-vscode.json" },
    { type: "docs-json", file: "docs-json.json" },
    reactOutputTarget({
      componentCorePackage: "stencil-web-components",
      proxiesFile: "../nextjs-app/src/stencil-web-components.ts",
    }),
  ],
  plugins: [
    postcss({
      plugins: [
        require("tailwindcss")("./tailwind.config.js"),
        require("postcss-preset-env")({ stage: 1 }),
      ],
    }),
  ],
};

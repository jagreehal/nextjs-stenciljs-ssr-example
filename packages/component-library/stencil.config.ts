import { Config } from "@stencil/core";
import { reactOutputTarget } from "@stencil/react-output-target";

export const config: Config = {
  namespace: "component-library",
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
      componentCorePackage: "component-library",
      proxiesFile: "../component-library-react/src/components.ts",
      includeDefineCustomElements: true,
    }),
  ],
};

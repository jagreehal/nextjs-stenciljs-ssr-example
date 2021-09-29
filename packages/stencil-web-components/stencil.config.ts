import { Config } from "@stencil/core";
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: "stencil-web-components",
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: 'stencil-web-components',
      proxiesFile: '../stencil-react-components/src/components.ts',
      includeDefineCustomElements: true,
    }),
    {
      type: "dist",
      esmLoaderPath: "../loader"
    },
    {
      type: "docs-json",
      file: "dist/docs-json.json"
    },
    {
      type: "docs-readme"
    },
    {
      type: "dist-hydrate-script"
    },
    {
      type: "docs-vscode",
      file: "dist/docs-vscode.json"
    }
  ]
};

const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  reactStrictMode: false,
  // // webpack: (config) => {
  // //   config.plugins.push(
  // //     new CopyPlugin({
  // //       patterns: [
  // //         {
  // //           from: 'node_modules/component-library/dist',
  // //           to: 'public/component-library',
  // //         },
  // //       ],
  // //     })
  // //   );

  // //   return config;
  // },
};

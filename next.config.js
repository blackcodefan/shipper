const withPlugins = require("next-compose-plugins");
const withAntdLess = require("next-plugin-antd-less");

module.exports = withPlugins(
  [
    [
      withAntdLess,
      {
        modifyVars: {
          "@primary-color": "#20a5f5",
          "@primary-color-hover": "#4D6FE7",
          "@primary-color-active": "#4D6FE7",
          "@info-color": "#503E9D",
          "@success-color": "#419D3E",
          "@processing-color": "#503E9D",
          "@error-color": "#FF665C",
          "@highlight-color": "#FF0000",
          "@warning-color": "#FACD5D",
          "@normal-color": "#000000",
          "@white": "#FFFFFF",
          "@black": "#000000",
          // Button Settings
          "@btn-font-weight": 400,
          // Header settings
          "@layout-header-background": "transparent",
          "@layout-header-height": "64px",
          "@layout-header-padding": "0 50px",
          "@layout-sider-background": "transparent",
          "@layout-body-background": "transparent",
          "@layout-footer-background": "transparent",
          "@layout-footer-padding": "24px 50px",
        },
        cssLoaderOptions: {},
      },
    ],
  ],
  {
    env: {
      GOOGLE_MAP_API_KEY: "AIzaSyAxMFdV9CXB5tJg9M1hMW4Mse-SPMrkvAo",
    },
  }
);

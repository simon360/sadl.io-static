module.exports = {
  stories: [
    "../src/components/**/*.stories.js",
    "../src/theme/**/*.stories.js",
  ],
  addons: ["@storybook/addon-actions", "@storybook/addon-links"],

  webpackFinal: async (config, { configType }) => {
    // Ensure the default CSS handler doesn't import any CSS modules
    for (let i = 0; i < config.module.rules.length; i++) {
      if (config.module.rules[i].test.test("file.css")) {
        config.module.rules[i].exclude = /\.module\.css$/
      }
    }

    // Add in CSS module support
    config.module.rules.push({
      test: /\.module\.css$/,
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            importLoaders: 1,
            modules: true,
            localIdentName: "[name]__[local]--[hash:base64:5]",
          },
        },
      ],
    })

    return config
  },
}

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

      if (config.module.rules[i].test.test("file.js")) {
        // Gatsby files need transpiling
        config.module.rules[i].exclude = [/node_modules\/(?!(gatsby)\/)/]

        // Language options for Gatsby
        config.module.rules[i].use[0].options.plugins = [
          // use @babel/plugin-proposal-class-properties for class arrow functions
          require.resolve("@babel/plugin-proposal-class-properties"),
          // use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
          require.resolve("babel-plugin-remove-graphql-queries"),
        ]
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

    // Prefer Gatsby ES6 entrypoint (module) over commonjs (main) entrypoint
    config.resolve.mainFields = ["browser", "module", "main"]

    return config
  },
}

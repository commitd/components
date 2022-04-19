const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
  webpackFinal: async (config) => {
    config.resolve.plugins = config.resolve.plugins || []
    config.module.rules = config.module.rules || []
    config.resolve.plugins.push(new TsconfigPathsPlugin({ configFile: 'tsconfig.storybook.json'}))
    config.module.rules.push({
      test: /\.stories\.tsx/,
      use: [{ loader: 'story-description-loader', options: { isTSX: true } }],
    })
    return config
  },
  stories: ['../src/**/*.stories.@(ts|tsx|mdx)'],
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false,
      },
    },
    'storybook-dark-mode',
  ],
  typescript: {
    check: true,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => {
        return prop.parent
          ? /@radix-ui/.test(prop.parent.fileName) ||
              !/node_modules/.test(prop.parent.fileName)
          : true
      },
    },
  },
}

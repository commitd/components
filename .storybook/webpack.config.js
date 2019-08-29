const createCompiler = require("@storybook/addon-docs/mdx-compiler-plugin")
const path = require("path")

const ROOT = path.resolve(__dirname, "../")
const PUBLIC = path.resolve(__dirname, "../public")
const NODE_MODULES = path.resolve(__dirname, "../node_modules")

module.exports = ({ config, _mode }) => {
  config.module.rules.push({
    test: /\.(png|svg|jpg|gif)$/,
    use: ["file-loader"]
  })
  config.module.rules.push({
    test: /\.mdx$/,
    use: [
      {
        loader: "babel-loader",
        // may or may not need this line depending on your app's setup
        options: { plugins: ["@babel/plugin-transform-react-jsx"] }
      },
      {
        loader: "@mdx-js/loader",
        options: {
          compilers: [createCompiler({})]
        }
      }
    ]
  })
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve("babel-loader"),
        options: {
          presets: [require.resolve("babel-preset-react-app")]
        }
      },
      require.resolve("react-docgen-typescript-loader")
    ]
  })
  config.module.rules.push({
    test: /\.(stories|story)\.[tj]sx?$/,
    loader: require.resolve("@storybook/source-loader"),
    exclude: [/node_modules/],
    enforce: "pre"
  })
  config.resolve.extensions.push(
    ".ts",
    ".tsx",
    ".mdx",
    ".png",
    ".svg",
    ".jpg",
    ".gif",
    ".css"
  )
  config.resolve.alias = {
    "@images": path.resolve(PUBLIC, "images"),
    "@fonts": path.resolve(PUBLIC, "fonts"),
    "@components": path.resolve(ROOT, "src"),
    react: path.resolve(NODE_MODULES, "react"),
    "react-dom": path.resolve(NODE_MODULES, "react-dom")
  }
  return config
}

const createCompiler = require("@storybook/addon-docs/mdx-compiler-plugin")
const path = require("path")

const ROOT = path.resolve(__dirname, "../")
const PUBLIC = path.resolve(__dirname, "../public")
const NODE_MODULES = path.resolve(__dirname, "../node_modules")

module.exports = ({ config, _mode }) => {
  // svg
  config.resolve.extensions.push(".svg")
  config.module.rules = config.module.rules.map(data => {
    if (/svg\|/.test(String(data.test)))
      data.test = /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/

    return data
  })
  config.module.rules.push({
    test: /\.svg$/,
    use: [
      {
        loader: "babel-loader"
      },
      {
        loader: "react-svg-loader",
        options: {
          jsx: false
        }
      }
    ]
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

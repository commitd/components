import * as path from "path"
import externalLinks from "remark-external-links"
import emoji from "remark-emoji"
import images from "remark-images"

const PUBLIC = path.resolve(__dirname, "public")

export default {
  title: "Committed Components",
  port: 3100,
  description: "Committed design system an components library",
  typescript: true,
  //ignore: ["site-map.md", "readme.md", "src/theme/**"],
  htmlContext: {
    favicon: "public/images/favicon.png"
  },
  public: "public",
  wrapper: `docs/theme/wrapper`,
  mdPlugins: [externalLinks, emoji, images],
  themeConfig: {
    colors: {
      primary: "#FFBB00"
    },
    // logo: {
    //   src: "public/images/Avatar1-YellowTrans-32px.png",
    //   width: 32
    // }
    logo: {
      src: "public/images/Committed-Colour-512px.png",
      width: 230
    }
  },
  menu: [
    "Introduction",
    "Getting Started",
    "Design Principles",
    "Voice",
    "Colour",
    "Components",
    "Status"
  ],
  onCreateWebpackChain: config => {
    config.resolve.alias
      .set("@fonts", `${PUBLIC}/fonts`)
      .set("@images", `${PUBLIC}/images`)
    return config
  },
  notUseSpecifiers: true,
  filterComponents: files => files.filter(file => /([^d]\.tsx?)$/.test(file))
  //   modifyBundlerConfig: config => {
  //     /* do your magic here */
  //   },
  //   plugins: []
}

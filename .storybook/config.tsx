import React from "react"
import { configure } from "@storybook/react"
import { addParameters, addDecorator } from "@storybook/react"
import { DocsPage, DocsContainer } from "@storybook/addon-docs/blocks"
import { theme, ThemeProvider } from "@components"
import { withA11y } from "@storybook/addon-a11y"

addDecorator(storyFn => <ThemeProvider>{storyFn()}</ThemeProvider>)
addDecorator(withA11y)

addParameters({
  docsContainer: DocsContainer,
  docs: DocsPage
})

configure(require.context("../src/stories", true, /\.(tsx|mdx)$/), module)

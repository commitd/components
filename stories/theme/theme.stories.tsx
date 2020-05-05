import React from 'react'
import { ThemeProvider } from '../../src'
import { Background, Overview } from '../util'

export default {
  title: 'Components|Themes',
}

export const light = () => (
  <ThemeProvider choice="light">
    <Background>
      <Overview />
    </Background>
  </ThemeProvider>
)

light.story = {
  parameters: { docs: { disable: true } },
}

export const dark = () => (
  <ThemeProvider choice="dark">
    <Background>
      <Overview />
    </Background>
  </ThemeProvider>
)

dark.story = {
  parameters: { docs: { disable: true } },
}

export const materialColours = () => (
  <ThemeProvider createPaletteOptions={() => undefined}>
    <Background>
      <Overview />
    </Background>
  </ThemeProvider>
)

materialColours.story = {
  parameters: { docs: { disable: true } },
}

export const materialLight = () => (
  <ThemeProvider
    choice="light"
    createPaletteOptions={() => undefined}
    createOverrides={() => undefined}
    createFonts={() => undefined}
    createShape={() => undefined}
    createSpacing={() => undefined}
    createTypography={() => undefined}
  >
    <Background>
      <Overview />
    </Background>
  </ThemeProvider>
)

materialLight.story = {
  parameters: { docs: { disable: true } },
}

export const materialDark = () => (
  <ThemeProvider
    choice="dark"
    createPaletteOptions={() => undefined}
    createOverrides={() => undefined}
    createFonts={() => undefined}
    createShape={() => undefined}
    createSpacing={() => undefined}
    createTypography={() => undefined}
  >
    <Background>
      <Overview />
    </Background>
  </ThemeProvider>
)

materialDark.story = {
  parameters: { docs: { disable: true } },
}

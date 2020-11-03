import React from 'react'
import { MaterialThemeProvider, ThemeProvider } from '../../src'
import { Background, Overview } from '../util'

export default {
  title: 'Components/Themes',
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

export const materialLight = () => (
  <MaterialThemeProvider choice="light">
    <Background>
      <Overview />
    </Background>
  </MaterialThemeProvider>
)

materialLight.story = {
  parameters: { docs: { disable: true } },
}

export const materialDark = () => (
  <MaterialThemeProvider choice="dark">
    <Background>
      <Overview />
    </Background>
  </MaterialThemeProvider>
)

materialDark.story = {
  parameters: { docs: { disable: true } },
}

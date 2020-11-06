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

light.parameters = { docs: { disable: true } }

export const dark = () => (
  <ThemeProvider choice="dark">
    <Background>
      <Overview />
    </Background>
  </ThemeProvider>
)

dark.parameters = { docs: { disable: true } }

export const materialLight = () => (
  <MaterialThemeProvider choice="light">
    <Background>
      <Overview />
    </Background>
  </MaterialThemeProvider>
)

materialLight.parameters = { docs: { disable: true } }

export const materialDark = () => (
  <MaterialThemeProvider choice="dark">
    <Background>
      <Overview />
    </Background>
  </MaterialThemeProvider>
)

materialDark.parameters = { docs: { disable: true } }

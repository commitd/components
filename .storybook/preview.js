import React from 'react'
import { addParameters, addDecorator } from '@storybook/react'
import committedTheme from './theme.js'

import { ThemeProvider } from '../src'

addDecorator(storyFn => <ThemeProvider>{storyFn()}</ThemeProvider>)
addParameters({
  options: {
    // Currently require here aswell as in manager.js - should be able to remove in 6.0
    theme: committedTheme,
    storySort: (a, b) => {
      if (a[0] === b[0]) {
        return 0
      }
      if (
        a[1].parameters &&
        a[1].parameters.order &&
        b[1].parameters &&
        b[1].parameters.order
      ) {
        return a[1].parameters.order - b[1].parameters.order
      } else {
        return a[1].id.localeCompare(b[1].id, { numeric: true })
      }
    }
  }
})

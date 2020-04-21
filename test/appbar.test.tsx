import React from 'react'
import * as ReactDOM from 'react-dom'
import { ThemeProvider, AppBar } from '../src'

describe('AppBar', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <ThemeProvider>
        <AppBar />
      </ThemeProvider>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})

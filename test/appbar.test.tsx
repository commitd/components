import React from 'react'
import * as ReactDOM from 'react-dom'
import { ThemeProvider, AppBar, createCommittedThemes } from '../src'

describe('AppBar', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <ThemeProvider {...createCommittedThemes()}>
        <AppBar />
      </ThemeProvider>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})

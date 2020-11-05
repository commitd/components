import React from 'react'
import { render } from './test-utils'
import { AppBar, Toolbar } from '../src'

describe('AppBar', () => {
  it('renders without crashing', () => {
    const { asFragment } = render(
      <AppBar>
        <Toolbar></Toolbar>
      </AppBar>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})

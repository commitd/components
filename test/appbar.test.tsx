import React from 'react'
import { render } from './test-utils'
import { AppBar } from '../src'

describe('AppBar', () => {
  it('renders without crashing', () => {
    const { asFragment } = render(<AppBar />)
    expect(asFragment()).toMatchSnapshot()
  })
})

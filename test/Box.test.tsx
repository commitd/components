import React from 'react'
import { render } from './test-utils'
import { Box } from '../src'

describe('Box', () => {
  it('renders without crashing', () => {
    const { asFragment } = render(<Box />)
    expect(asFragment()).toMatchSnapshot()
  })
})

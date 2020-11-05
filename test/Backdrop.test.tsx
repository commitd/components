import React from 'react'
import { render } from './test-utils'
import { Backdrop } from '../src'

describe('Backdrop', () => {
  it('renders without crashing', () => {
    const { asFragment } = render(<Backdrop open={true} />)
    expect(asFragment()).toMatchSnapshot()
  })
})

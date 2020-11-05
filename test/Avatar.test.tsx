import React from 'react'
import { render } from './test-utils'
import { Avatar } from '../src'

describe('Avatar', () => {
  it('renders without crashing', () => {
    const { asFragment } = render(<Avatar />)
    expect(asFragment()).toMatchSnapshot()
  })
})

import React from 'react'
import { useWidth } from '../src'
import { render, screen } from './test-utils'

const Width = () => {
  const width = useWidth()
  return <p id="width">{width}</p>
}

describe('useWidth', () => {
  it('defaults to xs', () => {
    render(<Width />)
    expect(screen.getByText('xs')).toBeInTheDocument()
  })
})

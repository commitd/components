import React from 'react'
import { useWidth } from '../src'
import { renderLight, screen } from './setupTests'

const Width = () => {
  const width = useWidth()
  return <p id="width">{width}</p>
}

describe('useWidth', () => {
  it('defaults to xs', () => {
    renderLight(<Width />)
    expect(screen.getByText('xs')).toBeInTheDocument()
  })
})

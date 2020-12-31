import React, { RefObject } from 'react'
import { renderLight, renderDark, userEvent } from './setupTests'
import { Button } from '../src'
import { Cartesian } from '../stories/util/Cartesian'

it('renders light without crashing', () => {
  const { asFragment } = renderLight(<Button />)
  expect(asFragment()).toMatchSnapshot()
})

it('renders dark without crashing', () => {
  const { asFragment } = renderDark(<Button />)
  expect(asFragment()).toMatchSnapshot()
})

it('expect click to call handler', () => {
  const text = 'Test'
  const onClick = jest.fn()
  const { getByText } = renderLight(<Button onClick={onClick}>{text}</Button>)
  userEvent.click(getByText(text))
  expect(onClick).toHaveBeenCalled()
})

it('expect to pass ref', () => {
  const ref = {} as RefObject<HTMLButtonElement>
  renderLight(<Button ref={ref} />)
  expect(ref.current).toBeTruthy()
})

it('renders all variants', () => {
  const { asFragment } = renderLight(
    <Cartesian
      component={Button}
      color={['primary', 'secondary', 'default']}
      variant={['contained', 'outlined', 'text']}
      disabled={[false, true]}
      size={['small', 'medium', 'large']}
      children="Button"
    />
  )
  expect(asFragment()).toMatchSnapshot()
})

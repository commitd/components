import React from 'react'
import { renderLight, renderDark } from './setupTests'
import { Drawer } from '../src'

it('renders light without crashing', () => {
  const { asFragment } = renderLight(<Drawer open={false} />)
  expect(asFragment()).toMatchSnapshot()
})

it('renders dark without crashing', () => {
  const { asFragment } = renderDark(<Drawer open={false} />)
  expect(asFragment()).toMatchSnapshot()
})
it('renders open without crashing', () => {
  const { asFragment } = renderLight(<Drawer open={true} />)
  expect(asFragment()).toMatchSnapshot()
})

it('renders open without crashing', () => {
  const { asFragment } = renderDark(<Drawer open={true} />)
  expect(asFragment()).toMatchSnapshot()
})

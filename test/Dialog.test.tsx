import React from 'react'
import { renderLight, renderDark } from './setupTests'
import { Dialog } from '../src'

it('renders light without crashing', () => {
  const { asFragment } = renderLight(<Dialog open={false} />)
  expect(asFragment()).toMatchSnapshot()
})

it('renders dark without crashing', () => {
  const { asFragment } = renderDark(<Dialog open={false} />)
  expect(asFragment()).toMatchSnapshot()
})
it('renders open without crashing', () => {
  const { asFragment } = renderLight(<Dialog open={true} />)
  expect(asFragment()).toMatchSnapshot()
})

it('renders open without crashing', () => {
  const { asFragment } = renderDark(<Dialog open={true} />)
  expect(asFragment()).toMatchSnapshot()
})

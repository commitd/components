import React from 'react'
import { renderLight, renderDark } from './setupTests'
import { Container } from '../src'

it('renders light without crashing', () => {
  const { asFragment } = renderLight(<Container maxWidth="md">Test</Container>)
  expect(asFragment()).toMatchSnapshot()
})

it('renders dark without crashing', () => {
  const { asFragment } = renderDark(<Container maxWidth="md">Test</Container>)
  expect(asFragment()).toMatchSnapshot()
})

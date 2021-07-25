import React from 'react'
import { renderLight, renderDark } from 'test-utils'
import { Default } from './Text.stories'
import { Caption, Strike, Span, Monospace } from './'

it('renders Text light without error', () => {
  const { asFragment } = renderLight(<Default />)
  expect(asFragment()).toBeDefined()
})

it('renders Text dark without error', () => {
  const { asFragment } = renderDark(<Default />)
  expect(asFragment()).toBeDefined()
})

it('renders Span light without error', () => {
  const { asFragment } = renderLight(<Span>Test</Span>)
  expect(asFragment()).toBeDefined()
})

it('renders Span dark without error', () => {
  const { asFragment } = renderDark(<Span>Test</Span>)
  expect(asFragment()).toBeDefined()
})

it('renders Strike light without error', () => {
  const { asFragment } = renderLight(<Strike>Strike</Strike>)
  expect(asFragment()).toBeDefined()
})

it('renders Strike dark without error', () => {
  const { asFragment } = renderDark(<Strike>Strike</Strike>)
  expect(asFragment()).toBeDefined()
})

it('renders Monospace light without error', () => {
  const { asFragment } = renderLight(<Monospace>Monospace</Monospace>)
  expect(asFragment()).toBeDefined()
})

it('renders Monospace dark without error', () => {
  const { asFragment } = renderDark(<Monospace>Monospace</Monospace>)
  expect(asFragment()).toBeDefined()
})

it('renders Caption light without error', () => {
  const { asFragment } = renderLight(<Caption>Caption</Caption>)
  expect(asFragment()).toBeDefined()
})

it('renders Caption dark without error', () => {
  const { asFragment } = renderDark(<Caption>Caption</Caption>)
  expect(asFragment()).toBeDefined()
})

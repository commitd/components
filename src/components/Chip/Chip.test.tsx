import React from 'react'
import { renderDark, renderLight, screen, userEvent } from 'test-utils'
import { Chip } from '.'
import { All, Default } from './Chip.stories'

it('renders light without error', () => {
  const { asFragment } = renderLight(<Default />)
  expect(asFragment()).toBeDefined()
})

it('renders dark without error', () => {
  const { asFragment } = renderDark(<Default />)
  expect(asFragment()).toBeDefined()
})

it('renders all without error', () => {
  const { asFragment } = renderDark(<All />)
  expect(asFragment()).toBeDefined()
})

it('Clicking close calls the onClose', () => {
  const onClose = jest.fn()
  renderLight(<Chip onClose={onClose}>Close</Chip>)

  userEvent.click(screen.getByRole('button'))

  expect(onClose).toHaveBeenCalled()
})

it('Clicking interactive calls the onClick', () => {
  const onClick = jest.fn()
  renderLight(
    <Chip as="button" onClick={onClick}>
      Interactive
    </Chip>
  )

  userEvent.click(screen.getByRole('button'))

  expect(onClick).toHaveBeenCalled()
})

it('Clicking interactive does not call onClose', () => {
  const onClick = jest.fn()
  const onClose = jest.fn()
  renderDark(
    <Chip as="button" onClick={onClick} onClose={onClose}>
      Interactive
    </Chip>
  )

  userEvent.click(screen.getByRole('button', { name: /interactive/i }))

  expect(onClick).toHaveBeenCalled()
  expect(onClose).not.toHaveBeenCalled()
})

it('Clicking close does not call the interactive button', () => {
  const onClick = jest.fn()
  const onClose = jest.fn()
  renderDark(
    <Chip as="button" onClick={onClick} onClose={onClose}>
      Interactive
    </Chip>
  )

  userEvent.click(screen.getByRole('button', { name: /close/i }))

  expect(onClose).toHaveBeenCalled()
  expect(onClick).not.toHaveBeenCalled()
})

import React from 'react'
import { renderLight, renderDark, screen, waitFor } from 'test-utils'
import userEvent from '@testing-library/user-event'
import { Default } from './Accordion.stories'
import { Accordion, AccordionItem, AccordionHeader, AccordionContent } from './'

it('renders light without error', () => {
  const { asFragment } = renderLight(<Default type="single" />)
  expect(asFragment()).toBeDefined()
})

it('renders dark without error', () => {
  const { asFragment } = renderDark(<Default type="multiple" />)
  expect(asFragment()).toBeDefined()
})

it('starts closed', () => {
  renderLight(
    <Accordion type="single">
      <AccordionItem value="item-1">
        <AccordionHeader>Item 1</AccordionHeader>
        <AccordionContent>Panel 1</AccordionContent>
      </AccordionItem>
    </Accordion>
  )
  expect(screen.getByLabelText(/Item 1/i)).toBeInTheDocument()
  expect(screen.queryByText(/Panel 1/i)).not.toBeInTheDocument()
})

it('Can open panel', async () => {
  renderLight(
    <Accordion type="single">
      <AccordionItem value="item-1">
        <AccordionHeader>Item 1</AccordionHeader>
        <AccordionContent>Panel 1</AccordionContent>
      </AccordionItem>
    </Accordion>
  )
  userEvent.click(screen.getByRole('button', { name: /Item 1/i }))
  await waitFor(() => {
    expect(screen.getByText(/Panel 1/i)).toBeInTheDocument()
  })
})

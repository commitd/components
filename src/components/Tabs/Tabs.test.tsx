import React from 'react'
import { renderDark, renderLight, screen, userEvent } from 'test-utils'
import { Default } from './Tabs.stories'

it('renders light without error', () => {
  renderLight(<Default {...Default.args} />)
  expect(screen.getByText('Tab one content')).toBeInTheDocument()
})

it('renders dark without error', () => {
  renderDark(<Default {...Default.args} />)
  userEvent.click(screen.getByRole('tab', { name: /two/i }))
  expect(screen.getByText('Tab two content')).toBeInTheDocument()
})

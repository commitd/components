import React from 'react'
import { ThemeProvider } from '.'
import { act, renderDark, renderLight, renderPlain, screen } from '../../test'
import {
  UtilityUseThemeController,
  UtilityUseThemeResolve,
} from './ThemeProvider.stories'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let addEventListener: jest.Mock

beforeEach(() => {
  addEventListener = jest.fn()

  // Official way to supply missing window method https://jestjs.io/docs/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener,
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  })
})

it('renders light without error', () => {
  const { asFragment } = renderPlain(<ThemeProvider />)
  expect(asFragment()).toBeDefined()
  expect(addEventListener).toHaveBeenCalledTimes(4)
})

it('renders dark without error', () => {
  const { asFragment } = renderPlain(<ThemeProvider choice="dark" />)
  expect(asFragment()).toBeDefined()
  expect(addEventListener).toHaveBeenCalledTimes(4)
})

it('changing system/window theme changes to dark sets the theme', async () => {
  renderPlain(
    <ThemeProvider>
      <UtilityUseThemeResolve />
    </ThemeProvider>
  )

  act(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
    const listener = addEventListener.mock.calls[0][1] as (e: {
      matches: string
    }) => void
    listener({ matches: 'dark' })
  })

  expect(await screen.findByText('#000000')).toBeInTheDocument()
})

it('changing system/window theme to light sets the theme', async () => {
  renderPlain(
    <ThemeProvider>
      <UtilityUseThemeResolve />
    </ThemeProvider>
  )
  act(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
    const listener = addEventListener.mock.calls[1][1] as (e: {
      matches: string
    }) => void
    listener({ matches: 'light' })
  })

  expect(await screen.findByText('#f7f7f7')).toBeInTheDocument()
})

it('changing system/window when theme selected does not change the theme', () => {
  renderPlain(
    <ThemeProvider choice="light">
      <UtilityUseThemeResolve />
    </ThemeProvider>
  )
  act(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
    const listener = addEventListener.mock.calls[0][1] as (e: {
      matches: string
    }) => void
    listener({ matches: 'dark' })
  })
  expect(screen.queryByText('#000000')).not.toBeInTheDocument()
})

it('renders switch within light theme', () => {
  const { asFragment } = renderLight(<UtilityUseThemeController />)
  expect(asFragment()).toBeDefined()
})

it('renders switch within dark theme', () => {
  const { asFragment } = renderDark(<UtilityUseThemeController />)
  expect(asFragment()).toBeDefined()
})

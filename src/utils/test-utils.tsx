/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Import setupTests for your unit tests and you can use `renderLight` and `renderDark` to render elements wrapped in a ComponentsProvider.
 * To render without a theme provider use `renderPlain`.
 *
 * N.B. This adds a simple custom id generator so ids match between snapshots.
 *
 */
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderOptions, RenderResult } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import ResizeObserver from 'resize-observer-polyfill'
import { ComponentsProvider } from '..'
import './domrect-polyfill'
// organize-imports-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as ___ from '@testing-library/react/node_modules/@testing-library/dom/types/queries' // NOSONAR

// Use the polyfill for the ResizeObserver.
// This is used in some components.
global.ResizeObserver = ResizeObserver
// releasePointerCapture called by some radix components but not in js-dom
global.HTMLElement.prototype.releasePointerCapture = () => undefined

const LightTheme: React.FC = ({ children }) => (
  <ComponentsProvider theme={{ choice: 'light' }}>
    {children}
  </ComponentsProvider>
)

const DarkTheme: React.FC = ({ children }) => (
  <ComponentsProvider theme={{ choice: 'dark' }}>{children}</ComponentsProvider>
)

export const renderPlain = render

export const renderLight = (
  ui: Readonly<React.ReactElement>,
  options?: Omit<RenderOptions, 'queries'>
): RenderResult => render(ui, { wrapper: LightTheme, ...options })

export const renderDark = (
  ui: Readonly<React.ReactElement>,
  options?: Omit<RenderOptions, 'queries'>
): RenderResult => render(ui, { wrapper: DarkTheme, ...options })

// re-export everything
export * from '@testing-library/react'
export { userEvent }

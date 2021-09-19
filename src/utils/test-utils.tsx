/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Import setupTests for your unit tests and you can use `renderLight` and `renderDark` to render elements wrapped in a ThemeProvider.
 * To render without a theme provider use `renderPlain`.
 *
 * N.B. This adds a simple custom id generator so ids match between snapshots.
 *
 */
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import './domrect-polyfill'
import { render, RenderOptions, RenderResult } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { ThemeProvider } from '..'
import ResizeObserver from 'resize-observer-polyfill'

// Use the polyfill for the ResizeObserver.
// This is used in some components.
global.ResizeObserver = ResizeObserver

const LightTheme: React.FC = ({ children }) => (
  <ThemeProvider choice="light">{children}</ThemeProvider>
)

const DarkTheme: React.FC = ({ children }) => (
  <ThemeProvider choice="dark">{children}</ThemeProvider>
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

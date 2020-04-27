import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderOptions } from '@testing-library/react'
import { ThemeProvider } from '../src'

const Light: React.FC = ({ children }) => {
  return <ThemeProvider choice="light">{children}</ThemeProvider>
}

const Dark: React.FC = ({ children }) => {
  return <ThemeProvider choice="dark">{children}</ThemeProvider>
}

export const renderLight = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'queries'>
) => render(ui, { wrapper: Light, ...options })

export const renderDark = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'queries'>
) => render(ui, { wrapper: Dark, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { renderLight as render }

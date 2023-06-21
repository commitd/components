import { DocsContainer as BaseContainer } from '@storybook/addon-docs'
import { themes } from '@storybook/theming'
import React from 'react'
import { useDarkMode } from 'storybook-dark-mode'
import { ComponentsProvider } from '../../src'

export const DocsContainer = ({ context, children, ...props }) => {
  const dark = useDarkMode()

  return (
    <BaseContainer
      {...props}
      context={context}
      theme={dark ? themes.dark : themes.light}
    >
      <ComponentsProvider>{children}</ComponentsProvider>
    </BaseContainer>
  )
}

import { DocsContainer as BaseContainer } from '@storybook/addon-docs/blocks'
import { themes } from '@storybook/theming'
import React from 'react'
import { useDarkMode } from 'storybook-dark-mode'
import { ComponentsProvider } from '../../src'

export const DocsContainer = ({ context, children, ...props }) => {
  const dark = useDarkMode()

  return (
    <BaseContainer
      context={{
        ...context,
        storyById: (id) => {
          const storyContext = context.storyById(id)
          return {
            ...storyContext,
            parameters: {
              ...storyContext?.parameters,
              docs: {
                ...storyContext?.parameters?.docs,
                theme: dark ? themes.dark : themes.light,
              },
            },
          }
        },
      }}
      {...props}
    >
      <ComponentsProvider>{children}</ComponentsProvider>
    </BaseContainer>
  )
}

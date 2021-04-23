import React from 'react'
import { DocsContainer as BaseContainer } from '@storybook/addon-docs/blocks'
import { useDarkMode } from 'storybook-dark-mode'
import { themes } from '@storybook/theming'

export const DocsContainer = ({ context, ...props }) => {
  const dark = useDarkMode()

  return (
    <BaseContainer
      context={{
        ...context,
        parameters: {
          ...context.parameters,
          docs: {
            ...context.parameters.docs,
            theme: dark ? themes.dark : themes.light,
          },
        },
      }}
      {...props}
    />
  )
}

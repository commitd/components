import { ComponentsProvider } from '@committed/ds'
import { DocsContainer as BaseContainer } from '@storybook/addon-docs'
import { themes } from '@storybook/theming'
import React, { useEffect } from 'react'
import { useDarkMode } from 'storybook-dark-mode'

export const DocsContainer = ({ context, children, ...props }) => {
  const dark = useDarkMode()

  useEffect(() => {
    const backgroundColor = dark ? themes.dark.appBg : themes.light.appBg
    document.body.style.backgroundColor = backgroundColor || 'inherit'
    const sbDocs = Array.from(document.getElementsByClassName('sbdocs'))
    sbDocs.forEach(
      (sbDoc) =>
        ((sbDoc as HTMLElement).style.backgroundColor = backgroundColor),
    )
  }, [dark])

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

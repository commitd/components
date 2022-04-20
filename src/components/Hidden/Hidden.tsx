import { useBoolean, useKeyboard } from '@committed/hooks'
import { Root } from '@radix-ui/react-visually-hidden'
import React, { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

/**
 * Hidden component
 *
 * Visually hides the component while preserving the content in a screen accessible way.
 *
 * Based on [Radix VisuallyHidden](https://www.radix-ui.com/docs/primitives/utilities/visually-hidden).
 *
 * Has additional development mode function to show the hidden element when `alt` is pressed.
 */
export const Hidden = forwardRef<
  ElementRef<typeof Root>,
  ComponentPropsWithoutRef<typeof Root>
>(({ children, ...props }, forwardedRef) => {
  const [forceShow, { setTrue, setFalse }] = useBoolean(false)
  useKeyboard('', setFalse, { event: 'keyup', development: true })
  useKeyboard('alt', setTrue, {
    event: 'keydown',
    ignoreRepeat: true,
    development: true,
  })

  if (forceShow) {
    return <span>{children}</span>
  }
  return (
    <Root {...props} ref={forwardedRef}>
      {children}
    </Root>
  )
})

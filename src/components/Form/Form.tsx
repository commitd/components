import React, { ComponentProps, ElementRef, forwardRef } from 'react'
import { styled } from '../../stitches.config'
import { Button } from '../Button'
const DEFAULT_TAG = 'form'

/**
 * Form component
 *
 * Is a styled version of the `form` html tag for use with `FormControl`s.
 */
export const Form = styled(DEFAULT_TAG, {
  boxSizing: 'border-box',
  outline: 'none',

  display: 'flex',
  flexDirection: 'column',
  gap: '$5',
})

export type FormButtonProps = {
  /** A record of form errors. If any present the button is disabled */
  errors?: Record<string, string | null | undefined>
} & ComponentProps<typeof Button>

export const FormButton = forwardRef<
  ElementRef<typeof Button>,
  FormButtonProps
>(({ errors, children = 'Submit', ...props }, forwardedRef) => {
  const disabled =
    Object.values(errors ?? {}).filter((t) => typeof t === 'string').length > 0

  return (
    <Button
      type="submit"
      variant="primary"
      disabled={disabled}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </Button>
  )
})

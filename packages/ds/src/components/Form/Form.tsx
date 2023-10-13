import { css } from '@committed/ds-ss'
import { ComponentProps, ElementRef, forwardRef } from 'react'
import { component } from '../../utils'
import { Button } from '../Button'
const DEFAULT_TAG = 'form' as const

/**
 * Form component
 *
 * Is a styled version of the `form` html tag for use with `FormControl`s.
 */
export const Form = component(
  DEFAULT_TAG,
  'c-form',
  css({
    boxSizing: 'border-box',
    outline: 'none',

    display: 'flex',
    flexDirection: 'column',
    gap: '$5',
  }),
)
Form.displayName = 'Form'

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
      variant="solid"
      disabled={disabled}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </Button>
  )
})
FormButton.displayName = 'FormButton'

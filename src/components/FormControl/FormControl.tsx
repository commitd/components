import React, {
  ElementRef,
  forwardRef,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { styled } from '../../stitches.config'
import { Text } from '../Text'
import {
  DEFAULT_FORM_STATE,
  FormControlContext,
  useFormControlState,
} from './FormControlContext'

const DEFAULT_TAG = 'div'

const Root = styled(DEFAULT_TAG, {
  // Reset
  boxSizing: 'border-box',
  outline: 'none',

  display: 'inline-flex',
  flexDirection: 'column',
})

type FormControlProps = {
  children: React.ReactNode
}

export const FormControl = forwardRef<
  ElementRef<typeof DEFAULT_TAG>,
  FormControlProps
>(({ children }, forwardedRef) => {
  const value = useState(DEFAULT_FORM_STATE)

  return (
    <FormControlContext.Provider value={value}>
      <Root ref={forwardedRef}>{children}</Root>
    </FormControlContext.Provider>
  )
})

const StyledFormControlText = styled(Text, {
  variants: {
    state: {
      invalid: {
        color: '$error',
      },
      valid: {
        color: '$success',
      },
      disabled: {
        color: '$grey9',
      },
    },
    size: {}, // to avoid ts-error
  },
  defaultVariants: {
    size: '-1',
  },
})

interface FormControlHelpProps {
  defaultText?: string | null
  validText?: string | null
  errorText?: string | null
}

export const FormControlHelp = ({
  defaultText = '',
  errorText,
  validText,
}: FormControlHelpProps): React.ReactElement => {
  const { formControlId, error, valid, disabled } = useFormControlState()
  const ref = useRef<HTMLSpanElement>(null)

  // Similar effect as in Radix-ui label
  useEffect(() => {
    if (formControlId) {
      const element = document.getElementById(formControlId)
      const label = ref.current
      if (label && element) {
        const id = `description-${formControlId}`
        const getAriaDescribed = () => element.getAttribute('aria-describedby')
        const ariaDescribedBy = [id, getAriaDescribed()]
          .filter(Boolean)
          .join(' ')
        element.setAttribute('aria-describedby', ariaDescribedBy)
        label.setAttribute('id', id)
        return () => {
          /**
           * We get the latest attribute value because at the time that this cleanup fires,
           * the values from the closure may have changed.
           */
          const currentAriaDescribedBy = getAriaDescribed()?.replace(
            formControlId,
            ''
          )
          if (currentAriaDescribedBy === '') {
            element.removeAttribute('aria-describedby')
          } else if (currentAriaDescribedBy) {
            element.setAttribute('aria-describedby', currentAriaDescribedBy)
          }
        }
      }
    }
    return undefined
  }, [formControlId])

  const text = useMemo(() => {
    if (disabled) {
      return defaultText
    }
    if (error) {
      if (errorText) {
        return errorText
      } else {
        return defaultText
      }
    }
    if (valid) {
      if (validText) {
        return validText
      }
    }
    return defaultText
  }, [disabled, error, valid, defaultText, errorText, validText])

  const state = useMemo(() => {
    if (disabled) {
      return 'disabled'
    }
    if (error) {
      if (errorText) {
        return 'invalid'
      } else {
        return undefined
      }
    }
    if (valid) {
      if (validText) {
        return 'valid'
      }
    }
    return undefined
  }, [disabled, error, valid, errorText, validText])

  return (
    <StyledFormControlText ref={ref} state={state}>
      {text}
    </StyledFormControlText>
  )
}

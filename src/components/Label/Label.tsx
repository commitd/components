import { Root } from '@radix-ui/react-label'
import React, { ComponentProps, ElementRef, forwardRef } from 'react'
import type { CSSProps, VariantProps } from '../../stitches.config'
import { styled } from '../../stitches.config'
import { usePossibleFormControlState } from '../FormControl/FormControlContext'
import { Text } from '../Text'

const StyledLabel = styled(Root, {
  cursor: 'default',
  boxSizing: 'border-box',
  variants: {
    variant: {
      above: {
        display: 'inline-block',
        verticalAlign: 'middle',
        mb: '$2',
        mt: '$4',
      },
      inline: {
        display: 'flex',
        gap: '$1',
        mr: '$3',
        alignItems: 'center',
        // To allow for control shadow
        overflow: 'visible',
      },
      wrapping: {
        display: 'flex',
        flexDirection: 'column',
        gap: '$1',
        // To allow for control shadow
        overflow: 'visible',
      },
    },
    disabled: {
      true: {
        color: '$grey9',
      },
    },
  },
})

type LabelVariants = VariantProps<typeof StyledLabel> &
  VariantProps<typeof Text>
type LabelProps = ComponentProps<typeof Root> & CSSProps & LabelVariants

interface LabelOptionalProps {
  /** To override text */
  text?: string
}

/**
 * Consistent optional marker
 */
export const LabelOptional: React.FC<LabelOptionalProps> = ({
  text = '(optional)',
}) => (
  <>
    {' '}
    <Text css={{ color: '$grey9' }}>{text}</Text>
  </>
)

export const Label = forwardRef<ElementRef<typeof StyledLabel>, LabelProps>(
  ({ children, ...props }, forwardedRef) => {
    const context = usePossibleFormControlState()
    const contextProps: { id?: string; disabled?: boolean } = {}
    if (context) {
      contextProps.id = `label-${context.formControlId}`
      contextProps.disabled = context.disabled
    }
    return (
      <Text
        {...contextProps}
        as={StyledLabel}
        nowrap
        {...props}
        ref={forwardedRef}
      >
        {children}
      </Text>
    )
  }
)
Label.toString = () => `.${Text.className}`

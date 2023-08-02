import { Root } from '@radix-ui/react-label'
import React, { ComponentProps, ElementRef, forwardRef } from 'react'

import { RecipeVariantProps, css, cva } from '@committed/ss/css'
import { styled } from '@committed/ss/jsx'
import { usePossibleFormControlState } from '../FormControl/FormControlContext'
import { Text } from '../Text'
import { text } from '../Text/Text'

const label = cva({
  base: { cursor: 'default', boxSizing: 'border-box' },
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

const StyledLabel = styled(Root, label)

type LabelVariants = RecipeVariantProps<typeof label> &
  RecipeVariantProps<typeof text>
type LabelProps = ComponentProps<typeof Root> & LabelVariants

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
    <Text className={css({ color: '$grey9' })}>{text}</Text>
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
Label.displayName = 'Label'

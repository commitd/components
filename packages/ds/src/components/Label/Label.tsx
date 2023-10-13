'use client'
import { Root } from '@radix-ui/react-label'
import React, { ComponentProps } from 'react'

import { RecipeVariantProps, css, cva, styled } from '@committed/ds-ss'
import { forwardRefExtend } from '../../utils'
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
        color: '$neutral.9',
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

const labelColor = css({ color: '$neutral.9' })
/**
 * Consistent optional marker
 */
export const LabelOptional: React.FC<LabelOptionalProps> = ({
  text = '(optional)',
}) => (
  <>
    {' '}
    <Text className={labelColor}>{text}</Text>
  </>
)

export const Label = forwardRefExtend<typeof Text, LabelProps>(
  ({ children, ...props }, forwardedRef) => {
    const context = usePossibleFormControlState()
    const contextProps: { id?: string; disabled?: boolean } = {}
    if (context) {
      contextProps.id = `label-${context.formControlId}`
      contextProps.disabled = context.disabled
    }
    return (
      <Text {...contextProps} asChild nowrap {...props} ref={forwardedRef}>
        <StyledLabel>{children}</StyledLabel>
      </Text>
    )
  },
)
Label.displayName = 'Label'

import { Root } from '@radix-ui/react-label'
import React, { ComponentProps, ElementRef, forwardRef } from 'react'
import type { CSSProps, VariantProps } from '../../stitches.config'
import { styled } from '../../stitches.config'
import { Text } from '../Text'

const StyledLabel = styled(Root, {
  cursor: 'default',

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
      },
      wrapping: {
        display: 'flex',
        gap: '$1',
        alignItems: 'center',
      },
    },
  },
})

type LabelVariants = VariantProps<typeof StyledLabel> &
  VariantProps<typeof Text>
type LabelProps = ComponentProps<typeof Root> & CSSProps & LabelVariants

export const Label = forwardRef<ElementRef<typeof StyledLabel>, LabelProps>(
  (props, forwardedRef) => {
    return <Text as={StyledLabel} nowrap {...props} ref={forwardedRef} />
  }
)
Label.toString = () => `.${Text.className}`

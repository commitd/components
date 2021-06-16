import { Root } from '@radix-ui/react-label'
import type * as Polymorphic from '@radix-ui/react-polymorphic'
import React, { forwardRef } from 'react'
import type { CSSProps, StitchesVariants } from 'stitches.config'
import { styled } from 'stitches.config'
import { StyledText } from '../Text/Text'

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

type LabelVariants = StitchesVariants<typeof StyledLabel> &
  StitchesVariants<typeof StyledText>
type LabelOwnProps = Polymorphic.OwnProps<typeof Root> &
  CSSProps &
  LabelVariants

type LabelComponent = Polymorphic.ForwardRefComponent<
  Polymorphic.IntrinsicElement<typeof Root>,
  LabelOwnProps
>

export const Label = forwardRef((props, forwardedRef) => {
  return <StyledText as={StyledLabel} nowrap {...props} ref={forwardedRef} />
}) as LabelComponent
Label.toString = () => `.${StyledLabel.className}`

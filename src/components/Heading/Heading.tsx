import * as Polymorphic from '@radix-ui/react-polymorphic'
import React, { forwardRef } from 'react'
import { CSS, StitchesVariants } from 'stitches.config'
import { Text, StyledText } from '../Text/Text'

const DEFAULT_TAG = 'h3'

type HeadingCSSProp = { css?: CSS }
type HeadingVariants = StitchesVariants<typeof StyledText>
type HeadingOwnProps = HeadingCSSProp &
  HeadingVariants & {
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  }

type HeadingComponent = Polymorphic.ForwardRefComponent<
  typeof DEFAULT_TAG,
  HeadingOwnProps
>

export const Heading = forwardRef(
  ({ variant = DEFAULT_TAG, css, ...props }, forwardedRef) => {
    let headingProps: Partial<HeadingVariants> = { size: 1 }
    const headingCss: CSS = {}
    switch (variant) {
      case 'h1': {
        headingProps = { size: 7, weight: 'bold' }
        break
      }
      case 'h2': {
        headingProps = { size: 6, weight: 'bold' }
        break
      }
      case 'h3': {
        headingProps = { size: 5, weight: 'bold' }
        break
      }
      case 'h4': {
        headingProps = { size: 4, weight: 'bold' }
        break
      }
      case 'h5': {
        headingProps = { size: 3, weight: 'bold' }
        break
      }
      case 'h6': {
        headingProps = { size: 2, weight: 'bold' }
        break
      }
      default: {
        throw new Error(`unknown variant ${variant}`)
      }
    }

    return (
      <Text
        as={variant}
        css={{ ...headingCss, ...css } as CSS}
        {...headingProps}
        {...props}
        ref={forwardedRef}
      />
    )
  }
) as HeadingComponent
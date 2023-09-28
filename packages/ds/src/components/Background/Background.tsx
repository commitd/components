import { styled } from '@committed/ss/jsx'
import { SurfaceVariants } from '@committed/utilities'
import React from 'react'
import {
  BackgroundProps,
  CComponent,
  component,
  forwardRefExtend,
} from '../../utils'

const Base = styled(component('div', 'c-background'), {})

/**
 * Background utility component
 * <p>
 * Adds background directly to the child, if single element.
 * Background css properties and shorthands are exposed as props.
 *
 */
export const Background: CComponent<'div', BackgroundProps & SurfaceVariants> =
  forwardRefExtend(({ children, ...props }, forwardedRef) => {
    return (
      <Base
        asChild={React.Children.count(children) == 1}
        {...props}
        ref={forwardedRef}
      >
        {children}
      </Base>
    )
  })
Background.displayName = 'Background'

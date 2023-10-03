import { styled } from '@committed/ss/jsx'
import { SystemProperties } from '@committed/ss/types/style-props'
import React from 'react'
import { CComponent, component, forwardRefExtend } from '../../utils'

const Base = styled(component('div', 'c-padding'), {})
export type PaddingProps = Pick<
  SystemProperties,
  | 'p'
  | 'padding'
  | 'pl'
  | 'paddingLeft'
  | 'pr'
  | 'paddingRight'
  | 'pt'
  | 'paddingTop'
  | 'pb'
  | 'paddingBottom'
  | 'px'
  | 'paddingX'
  | 'py'
  | 'paddingY'
  | 'ps'
  | 'paddingStart'
  | 'pe'
  | 'paddingEnd'
>
/**
 * Padding utility component
 * <p>
 * Adds padding directly to the child, if single element.
 * Padding css properties and shorthands are exposed as props and have access to spacing design tokens.
 *
 */
export const Padding: CComponent<'div', PaddingProps> = forwardRefExtend<
  typeof Base,
  PaddingProps
>(({ children, ...props }, forwardedRef) => {
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
Padding.displayName = 'Padding'

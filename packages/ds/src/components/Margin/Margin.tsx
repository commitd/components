import { styled } from '@committed/ss/jsx'
import { SystemProperties } from '@committed/ss/types/style-props'
import React from 'react'
import { CComponent, component, forwardRefExtend } from '../../utils'

const Base = styled(component('div', 'c-margin'), {})
export type MarginProps = Pick<
  SystemProperties,
  | 'm'
  | 'margin'
  | 'ml'
  | 'marginLeft'
  | 'mr'
  | 'marginRight'
  | 'mt'
  | 'marginTop'
  | 'mb'
  | 'marginBottom'
  | 'mx'
  | 'marginX'
  | 'my'
  | 'marginY'
  | 'ms'
  | 'marginStart'
  | 'me'
  | 'marginEnd'
>
/**
 * Margin utility component
 * <p>
 * Adds margin directly to the child, if single element.
 * Marin css properties and shorthands are exposed as props and have access to spacing design tokens.
 *
 */
export const Margin: CComponent<'div', MarginProps> = forwardRefExtend<
  typeof Base,
  MarginProps
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
Margin.displayName = 'Margin'

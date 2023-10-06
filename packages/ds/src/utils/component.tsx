import { css, cx } from '@committed/ss'
import { Slot } from '@radix-ui/react-slot'
import { ComponentProps, ComponentType, ElementType } from 'react'
import { forwardRefExtend } from './forwardRef'
import { PolyCComponentProps } from './types'

type ClassList = string[]

export function component<T extends ElementType>(
  component: T,
  ...classList: ClassList
) {
  return forwardRefExtend<T, PolyCComponentProps>(
    function Component(props, forwardedRef) {
      const { asChild, className, css: cssProp, ...elementProps } = props
      const remainingProps = elementProps as ComponentProps<T>
      const ComposedComponent = (asChild ? Slot : component) as ComponentType<
        ComponentProps<T>
      >
      return (
        <ComposedComponent
          {...remainingProps}
          className={cx(...classList, css(cssProp), className)}
          ref={forwardedRef}
        />
      )
    },
  )
}

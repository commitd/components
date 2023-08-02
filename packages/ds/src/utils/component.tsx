import { css, cx } from '@committed/ss/css'
import { Slot } from '@radix-ui/react-slot'
import { ComponentProps, ComponentType, ElementType } from 'react'
import { fixedForwardRef } from './forwardRef'
import { CComponentProps } from './types'

type ClassList = string[]

export function component<T extends ElementType>(
  component: T,
  ...classList: ClassList
) {
  return fixedForwardRef<T, CComponentProps>(
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

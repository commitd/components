import { SystemStyleObject, css, cx } from '@committed/ss'
import { Slot } from '@radix-ui/react-slot'
import { ComponentProps, ComponentType, ElementType } from 'react'
import { forwardRefExtend } from './forwardRef'
import { PolyCComponentProps } from './types'

type ArgList = Array<string | SystemStyleObject>

function isCss(value: unknown): value is SystemStyleObject {
  return typeof value === 'object' && value !== null
}
function isString(value: unknown): value is string {
  return typeof value === 'string'
}

export function component<T extends ElementType>(
  component: T,
  ...argList: ArgList
) {
  return forwardRefExtend<T, PolyCComponentProps>(
    function Component(props, forwardedRef) {
      const { asChild, className, css: cssProp, ...elementProps } = props
      const remainingProps = elementProps as ComponentProps<T>
      const ComposedComponent = (asChild ? Slot : component) as ComponentType<
        ComponentProps<T>
      >
      const classList = argList.filter(isString)
      const cssList = argList.filter(isCss)

      return (
        <ComposedComponent
          {...remainingProps}
          className={cx(...classList, css(...cssList, cssProp), className)}
          ref={forwardedRef}
        />
      )
    },
  )
}

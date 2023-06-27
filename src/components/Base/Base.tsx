import type { HTMLPolymorphicProps } from '@polymorphic-factory/react'
import { forwardRef, polymorphicFactory } from '@polymorphic-factory/react'
import type { ElementType } from 'react'
import React from 'react'
import { css, cx } from '../../../styled-system/css'

export interface CSSProps {
  css?: Parameters<typeof css>[0]
  className?: string
}

function styled<C extends ElementType = ElementType>(originalComponent: C) {
  return forwardRef<C, CSSProps & HTMLPolymorphicProps<C>>((props, ref) => {
    const { as, css: stitchesCss = {}, className, ...restProps } = props
    const Component = as || originalComponent
    return (
      <Component
        {...restProps}
        ref={ref}
        className={cx(css(stitchesCss), className)}
      />
    )
  })
}

export const poly = polymorphicFactory({
  styled,
})

export type BaseProps = HTMLPolymorphicProps<'div'> & CSSProps

export const Base = poly('div')

import { cva, styled } from '@committed/ss'
import React, { FC, PropsWithChildren } from 'react'
import { ConditionalWrapper, component } from '../../utils'
import {
  ThemeProvider,
  ThemeProviderProps,
} from '../ThemeProvider/ThemeProvider'
import { ToastProvider, ToastViewport } from '../Toast'
import { ToasterProvider } from '../Toast/Toaster'
import { TooltipProvider } from '../Tooltip'

//---------------------------- Props ----------------------------------//

export type ThemeProviderPropsWithoutChildren = Omit<
  ThemeProviderProps,
  'children'
>
export type TooltipProviderPropsWithoutChildren = Omit<
  React.ComponentProps<typeof TooltipProvider>,
  'children'
>
export type ToastProviderPropsWithoutChildren = Omit<
  React.ComponentProps<typeof ToastProvider>,
  'children'
>
export type ToasterProviderPropsWithoutChildren = Omit<
  React.ComponentProps<typeof ToasterProvider>,
  'children'
>
export type ToastViewportPropsWithoutChildren = Omit<
  React.ComponentProps<typeof ToastViewport>,
  'children'
>

export type ComponentsProviderProps = {
  /**
   * ThemeProvider configuration options
   */
  theme?: false | ThemeProviderPropsWithoutChildren
  /**
   * Tooltip configuration options
   */
  tooltip?: false | TooltipProviderPropsWithoutChildren
  /**
   * Toast configuration options
   */
  toast?:
    | false
    | (ToastProviderPropsWithoutChildren & ToasterProviderPropsWithoutChildren)
  /**
   * Toast viewport configuration options
   */
  viewport?: false | ToastViewportPropsWithoutChildren
  /**
   * By default the children are put into their own stacking context to better separate the content from the portalled dialog elements. Set false to turn this off and control it yourself.
   */
  isolated?: boolean
}

const isolate = cva({
  variants: { isolated: { false: {}, true: { isolation: 'isolate' } } },
})

const Isolate = styled(component('div', 'c-isolate'), isolate)
Isolate.displayName = 'Isolate'

const Toaster = ({
  label,
  duration,
  swipeDirection,
  swipeThreshold,
  children,
  ...toasterProps
}: ToastProviderPropsWithoutChildren &
  ToasterProviderPropsWithoutChildren & {
    children?: React.ReactNode
  }) => (
  <ToastProvider
    label={label}
    duration={duration}
    swipeDirection={swipeDirection}
    swipeThreshold={swipeThreshold}
  >
    <ToasterProvider duration={duration} {...toasterProps}>
      {children}
    </ToasterProvider>
  </ToastProvider>
)

/**
 * The `ComponentsProvider` should wrap you application.
 *
 * It contains context providers for different components and the `ThemeProvider`.
 * The providers can be used separately as required.
 *
 * For each provider/component a configuration object can be passed with the relevant props.
 * To disable a particular provider set the configuration parameter to `false`.
 */
export const ComponentsProvider: FC<
  PropsWithChildren<ComponentsProviderProps>
> = ({
  theme = {},
  tooltip = {},
  toast = {},
  viewport = {},
  isolated = true,
  children,
}) => {
  return (
    <ConditionalWrapper
      condition={toast}
      props={
        toast as ToastProviderPropsWithoutChildren &
          ToasterProviderPropsWithoutChildren
      }
      wrapper={Toaster}
    >
      <ConditionalWrapper
        condition={tooltip}
        props={tooltip as TooltipProviderPropsWithoutChildren}
        wrapper={TooltipProvider}
      >
        <ConditionalWrapper
          condition={theme}
          props={theme as ThemeProviderPropsWithoutChildren}
          wrapper={ThemeProvider}
        >
          <>
            <Isolate isolated={isolated}>{children}</Isolate>
            {viewport && <ToastViewport {...viewport} />}
          </>
        </ConditionalWrapper>
      </ConditionalWrapper>
    </ConditionalWrapper>
  )
}
ComponentsProvider.displayName = 'ComponentsProvider'

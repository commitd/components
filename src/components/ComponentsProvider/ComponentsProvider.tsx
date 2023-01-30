import React, { FC, PropsWithChildren, useCallback } from 'react'
import { CSSProps, styled } from '../../stitches.config'
import { ConditionalWrapper } from '../../utils'
import { ThemeProvider, ThemeProviderProps } from '../ThemeProvider'
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
} & CSSProps

const Isolate = styled('div', {
  variants: { isolated: { false: {}, true: { isolation: 'isolate' } } },
})

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
  css,
  isolated = true,
  children,
}) => {
  const toastWrapper = useCallback(
    (wrappedChildren) => {
      const {
        label,
        duration,
        swipeDirection,
        swipeThreshold,
        ...toasterProps
      } = toast as ToastProviderPropsWithoutChildren &
        ToasterProviderPropsWithoutChildren
      return (
        <ToastProvider
          label={label}
          duration={duration}
          swipeDirection={swipeDirection}
          swipeThreshold={swipeThreshold}
        >
          <ToasterProvider duration={duration} {...toasterProps}>
            {wrappedChildren}
          </ToasterProvider>
        </ToastProvider>
      )
    },
    [toast]
  )

  const tooltipWrapper = useCallback(
    (wrappedChildren) => (
      <TooltipProvider {...tooltip}>{wrappedChildren}</TooltipProvider>
    ),
    [tooltip]
  )

  const themeWrapper = useCallback(
    (wrappedChildren) => (
      <ThemeProvider {...theme}>{wrappedChildren}</ThemeProvider>
    ),
    [theme]
  )

  return (
    <ConditionalWrapper condition={toast} wrapper={toastWrapper}>
      <ConditionalWrapper condition={tooltip} wrapper={tooltipWrapper}>
        <ConditionalWrapper condition={theme} wrapper={themeWrapper}>
          <>
            <Isolate css={css} isolated={isolated}>
              {children}
            </Isolate>
            {viewport && <ToastViewport {...viewport} />}
          </>
        </ConditionalWrapper>
      </ConditionalWrapper>
    </ConditionalWrapper>
  )
}

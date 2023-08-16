import { cva } from '@committed/ss/css'
import { styled } from '@committed/ss/jsx'
import React, { FC, PropsWithChildren, useCallback } from 'react'
// import { ToastProvider, ToastViewport } from '../../../../../components/Toast'
// import { ToasterProvider } from '../../../../../components/Toast/Toaster'
import { ConditionalWrapper, component } from '../../utils'
import {
  ThemeProvider,
  ThemeProviderProps,
} from '../ThemeProvider/ThemeProvider'
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
// export type ToastProviderPropsWithoutChildren = Omit<
//   React.ComponentProps<typeof ToastProvider>,
//   'children'
// >
// export type ToasterProviderPropsWithoutChildren = Omit<
//   React.ComponentProps<typeof ToasterProvider>,
//   'children'
// >
// export type ToastViewportPropsWithoutChildren = Omit<
//   React.ComponentProps<typeof ToastViewport>,
//   'children'
// >

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
  // toast?:
  //   | false
  //   | (ToastProviderPropsWithoutChildren & ToasterProviderPropsWithoutChildren)
  /**
   * Toast viewport configuration options
   */
  // viewport?: false | ToastViewportPropsWithoutChildren
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
  // toast = {},
  // viewport = {},
  isolated = true,
  children,
}) => {
  // const toastWrapper = useCallback(
  //   (wrappedChildren: React.ReactNode) => {
  //     const {
  //       label,
  //       duration,
  //       swipeDirection,
  //       swipeThreshold,
  //       ...toasterProps
  //     } = toast as ToastProviderPropsWithoutChildren &
  //       ToasterProviderPropsWithoutChildren
  //     return (
  //       <ToastProvider
  //         label={label}
  //         duration={duration}
  //         swipeDirection={swipeDirection}
  //         swipeThreshold={swipeThreshold}
  //       >
  //         <ToasterProvider duration={duration} {...toasterProps}>
  //           {wrappedChildren}
  //         </ToasterProvider>
  //       </ToastProvider>
  //     )
  //   },
  //   [toast]
  // )

  const tooltipWrapper = useCallback(
    (wrappedChildren: React.ReactNode) => (
      <TooltipProvider {...tooltip}>{wrappedChildren}</TooltipProvider>
    ),
    [tooltip],
  )

  const themeWrapper = useCallback(
    (wrappedChildren: React.ReactNode) => (
      <ThemeProvider {...theme}>{wrappedChildren}</ThemeProvider>
    ),
    [theme],
  )

  return (
    // <ConditionalWrapper condition={toast} wrapper={toastWrapper}>
    <ConditionalWrapper condition={tooltip} wrapper={tooltipWrapper}>
      <ConditionalWrapper condition={theme} wrapper={themeWrapper}>
        <>
          <Isolate isolated={isolated}>{children}</Isolate>
          {/* {viewport && <ToastViewport {...viewport} />} */}
        </>
      </ConditionalWrapper>
    </ConditionalWrapper>
    // </ConditionalWrapper>
  )
}
ComponentsProvider.displayName = 'ComponentsProvider'

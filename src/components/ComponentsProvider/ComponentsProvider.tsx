import React, { FC, PropsWithChildren } from 'react'
import { ConditionalWrapper } from '../../utils'
import { ThemeProvider, ThemeProviderProps } from '../ThemeProvider'
import { ToastProvider, ToastViewport } from '../Toast'
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
  toast?: false | ToastProviderPropsWithoutChildren
  /**
   * Toast viewport configuration options
   */
  viewport?: false | ToastViewportPropsWithoutChildren
}

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
> = ({ theme = {}, tooltip = {}, toast = {}, viewport = {}, children }) => (
  <ConditionalWrapper
    condition={toast}
    wrapper={(wrappedChildren) => (
      <ToastProvider {...toast}>{wrappedChildren}</ToastProvider>
    )}
  >
    <ConditionalWrapper
      condition={tooltip}
      wrapper={(wrappedChildren) => (
        <TooltipProvider {...tooltip}>{wrappedChildren}</TooltipProvider>
      )}
    >
      <ConditionalWrapper
        condition={theme}
        wrapper={(wrappedChildren) => (
          <ThemeProvider {...theme}>{wrappedChildren}</ThemeProvider>
        )}
      >
        <>
          {children}
          {viewport && <ToastViewport {...viewport} />}
        </>
      </ConditionalWrapper>
    </ConditionalWrapper>
  </ConditionalWrapper>
)

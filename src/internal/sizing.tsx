import React from 'react'
import { sizing, SizingProps } from '@material-ui/system'
import { styled } from '@material-ui/styles'
export type { SizingProps } from '@material-ui/system'

// The natural typing causes typescript to error, hence the casts to force it.
export const withSizing = <P extends object>(
  WrappedComponent: React.ElementType<P>
) =>
  (styled(WrappedComponent)(sizing) as unknown) as React.ComponentType<
    P & SizingProps
  >

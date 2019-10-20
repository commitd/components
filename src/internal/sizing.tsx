import React from 'react'
import { sizing, SizingProps } from '@material-ui/system'
import { styled } from '@material-ui/styles'

export type SizingProps = SizingProps

export const withSizing = <P extends object>(
  WrappedComponent: React.ElementType<P>
) => styled(WrappedComponent)(sizing) as React.ComponentType<P & SizingProps>

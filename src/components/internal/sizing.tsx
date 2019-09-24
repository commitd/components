import React from 'react'
import { sizing, SizingProps as MaterialSixingProps } from '@material-ui/system'
import { styled } from '@material-ui/styles'

export type SizingProps = MaterialSixingProps

export const withSizing = <P extends object>(
  WrappedComponent: React.ComponentType<P & SizingProps>
) => styled(WrappedComponent)(sizing)
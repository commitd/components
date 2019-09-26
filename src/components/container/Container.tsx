import * as React from 'react'
import MaterialContainer, {
  ContainerProps as MaterialContainerProps
} from '@material-ui/core/Container'

export type ContainerProps = MaterialContainerProps

export const Container: React.ComponentType<ContainerProps> = MaterialContainer
Container.displayName = 'Container'

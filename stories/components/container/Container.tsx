import * as React from 'react'
import { ContainerProps } from '@material-ui/core/Container'
export type { ContainerProps }

export type ContainerDocsProps = Omit<
  ContainerProps,
  keyof React.HTMLAttributes<HTMLDivElement>
>
export const ContainerDocs: React.FC<ContainerDocsProps> = () => null

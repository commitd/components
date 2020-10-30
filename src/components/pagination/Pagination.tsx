import React from 'react'
import MaterialPagination, {
  PaginationProps as MaterialPaginationProps,
} from '@material-ui/lab/Pagination'
import { withPositioningProps, PositioningProps } from '../../internal'

export type PaginationProps = MaterialPaginationProps & PositioningProps

export const Pagination: React.ComponentType<PaginationProps> = withPositioningProps<
  MaterialPaginationProps
>(MaterialPagination)

Pagination.defaultProps = {
  shape: 'rounded',
}

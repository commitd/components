import * as React from 'react'
import { TableProps } from '@material-ui/core/Table'
import { TableBodyProps } from '@material-ui/core/TableBody'
import { TableCellProps } from '@material-ui/core/TableCell'
import { TableFooterProps } from '@material-ui/core/TableFooter'
import { TableHeadProps } from '@material-ui/core/TableHead'
import { TablePaginationProps } from '@material-ui/core/TablePagination'
import { TableRowProps } from '@material-ui/core/TableRow'
import { TableSortLabelProps } from '@material-ui/core/TableSortLabel'

type TableDocsProps = Omit<
  TableProps,
  keyof React.HTMLAttributes<HTMLTableElement>
>
type TableBodyDocsProps = Omit<
  TableBodyProps,
  keyof React.HTMLAttributes<HTMLTableSectionElement>
>
type TableCellDocsProps = Omit<
  TableCellProps,
  keyof React.HTMLAttributes<HTMLTableCellElement>
>
type TableFooterDocsProps = Omit<
  TableFooterProps,
  keyof React.HTMLAttributes<HTMLTableSectionElement>
>
type TableHeadDocsProps = Omit<
  TableHeadProps,
  keyof React.HTMLAttributes<HTMLTableSectionElement>
>
type TablePaginationDocsProps = Omit<
  TablePaginationProps,
  keyof React.HTMLAttributes<HTMLTableCellElement>
>

type TableRowDocsProps = Omit<
  TableRowProps,
  keyof React.HTMLAttributes<HTMLTableRowElement>
>
type TableSortLabelDocsProps = Omit<
  TableSortLabelProps,
  keyof React.HTMLAttributes<HTMLSpanElement>
>

export const TableDocs: React.FC<TableDocsProps> = () => null
export const TableBodyDocs: React.FC<TableBodyDocsProps> = () => null
export const TableCellDocs: React.FC<TableCellDocsProps> = () => null
export const TableFooterDocs: React.FC<TableFooterDocsProps> = () => null
export const TableHeadDocs: React.FC<TableHeadDocsProps> = () => null
export const TablePaginationDocs: React.FC<TablePaginationDocsProps> = () =>
  null
export const TableRowDocs: React.FC<TableRowDocsProps> = () => null
export const TableSortLabelDocs: React.FC<TableSortLabelDocsProps> = () => null

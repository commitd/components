import { FC, HTMLAttributes } from 'react'
import Table, { TableProps } from '@material-ui/core/Table'
import TableBody, { TableBodyProps } from '@material-ui/core/TableBody'
import TableCell, { TableCellProps } from '@material-ui/core/TableCell'
import TableFooter, { TableFooterProps } from '@material-ui/core/TableFooter'
import TableHead, { TableHeadProps } from '@material-ui/core/TableHead'
import TablePagination, {
  TablePaginationProps
} from '@material-ui/core/TablePagination'
import TableRow, { TableRowProps } from '@material-ui/core/TableRow'
import TableSortLabel, {
  TableSortLabelProps
} from '@material-ui/core/TableSortLabel'

export type TableProps = TableProps
export type TableBodyProps = TableBodyProps
export type TableCellProps = TableCellProps
export type TableFooterProps = TableFooterProps
export type TableHeadProps = TableHeadProps
export type TablePaginationProps = TablePaginationProps
export type TableRowProps = TableRowProps
export type TableSortLabelProps = TableSortLabelProps

export {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel
}

type TableDocsProps = Omit<TableProps, keyof HTMLAttributes<HTMLTableElement>>
type TableBodyDocsProps = Omit<
  TableBodyProps,
  keyof HTMLAttributes<HTMLTableSectionElement>
>
type TableCellDocsProps = Omit<
  TableCellProps,
  keyof HTMLAttributes<HTMLTableCellElement>
>
type TableFooterDocsProps = Omit<
  TableFooterProps,
  keyof HTMLAttributes<HTMLTableSectionElement>
>
type TableHeadDocsProps = Omit<
  TableHeadProps,
  keyof HTMLAttributes<HTMLTableSectionElement>
>
type TablePaginationDocsProps = Omit<
  TablePaginationProps,
  keyof HTMLAttributes<HTMLTableCellElement>
>

type TableRowDocsProps = Omit<
  TableRowProps,
  keyof HTMLAttributes<HTMLTableRowElement>
>
type TableSortLabelDocsProps = Omit<
  TableSortLabelProps,
  keyof HTMLAttributes<HTMLSpanElement>
>

export const TableDocs: FC<TableDocsProps> = () => null
export const TableBodyDocs: FC<TableBodyDocsProps> = () => null
export const TableCellDocs: FC<TableCellDocsProps> = () => null
export const TableFooterDocs: FC<TableFooterDocsProps> = () => null
export const TableHeadDocs: FC<TableHeadDocsProps> = () => null
export const TablePaginationDocs: FC<TablePaginationDocsProps> = () => null
export const TableRowDocs: FC<TableRowDocsProps> = () => null
export const TableSortLabelDocs: FC<TableSortLabelDocsProps> = () => null

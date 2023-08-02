import { RecipeVariantProps, css, cva } from '@committed/ss/css'
import { styled } from '@committed/ss/jsx'
import React from 'react'

import { SystemStyleObject } from '@committed/ss/types'
import { RecipeVariantRecord } from '@committed/ss/types/recipe'
import { withClasses } from '../../utils'

//------- Utility wrappers --------------//

const TABLE_CLASS = 'c-table'
const TABLE_ROW_CLASS = 'c-table-row'
const TABLE_CELL_CLASS = 'c-table-cell'
const TABLE_HEAD_CLASS = 'c-table-head'
const TABLE_BODY_CLASS = 'c-table-body'
const TABLE_FOOT_CLASS = 'c-table-foot'
const TABLE_CAPTION_CLASS = 'c-table-caption'

export const TableHead = withClasses(
  'thead',
  TABLE_HEAD_CLASS,
  css({
    display: 'table-header-group',
  })
)

export const TableBody = withClasses(
  'tbody',
  TABLE_BODY_CLASS,
  css({
    display: 'table-row-group',
  })
)

export const TableFoot = withClasses(
  'tfoot',
  TABLE_FOOT_CLASS,
  css({
    display: 'table-footer-group',
  })
)

export const TableCaption = withClasses(
  'caption',
  TABLE_CAPTION_CLASS,
  css({
    display: 'table-caption',
  })
)

//-------- Functional wrappers ----------//

const row = cva({
  base: { display: 'table-row' },
  variants: {
    selected: {
      true: {
        backgroundColor: '$selection',
      },
    },
  },
})

type TableRowVariants = RecipeVariantProps<typeof row>
type TableRowProps = TableRowVariants & React.HTMLProps<'tr'>

export const TableRow = styled(
  withClasses('tr', TABLE_ROW_CLASS),
  row
) as React.FC<TableRowProps>

const cell = cva({
  base: { display: 'table-cell' },

  variants: {
    align: {
      left: {
        textAlign: 'left',
      },
      right: {
        textAlign: 'right',
      },
      center: {
        textAlign: 'center',
      },
      justify: {
        textAlign: 'justify',
      },
    },
    selected: {
      true: {
        backgroundColor: '$selection',
      },
    },
  },
})
type TableCellVariants = RecipeVariantProps<typeof cell>
type TableCellProps = TableCellVariants & React.HTMLProps<'td'>
export const TableCell = styled(
  withClasses('td', TABLE_CELL_CLASS),
  cell
) as React.FC<TableCellProps>

const DEFAULT_TAG = 'table'

const base = {
  display: 'table',
  width: '100%',
  borderCollapse: 'collapse',
  borderSpacing: 0,
  borderRadius: '$default',
  border: '1px solid $grey5',
  boxShadow: '$1',
  fontFamily: '$text',
  textAlign: 'left',

  [`& caption,& .${TABLE_CAPTION_CLASS}`]: {
    fontSize: '$-1',
    padding: '$2',
    color: '$textSecondary',
    textAlign: 'center',
    captionSide: 'bottom',
  },

  [`& tr,& .${TABLE_ROW_CLASS}`]: {
    color: 'inherit',
    verticalAlign: 'middle',
    outline: 0,
    borderBottom: '1px solid $grey5',
  },
  [`& td,& th,& .${TABLE_CELL_CLASS}`]: {
    verticalAlign: 'inherit',
    textAlign: 'inherit',
    px: '$2',
    py: '$2',
  },
  [`& th`]: {
    fontWeight: '$bold',
  },
  [`& thead td,& thead th,& .${TABLE_HEAD_CLASS} td,& .${TABLE_HEAD_CLASS} th,& .${TABLE_HEAD_CLASS} .${TABLE_CELL_CLASS}`]:
    {
      fontWeight: '$regular',
    },
  [`& tfoot td,& tfoot th,& .${TABLE_FOOT_CLASS} td,& .${TABLE_FOOT_CLASS} th,& .${TABLE_FOOT_CLASS} .${TABLE_CELL_CLASS}`]:
    {},

  [`& thead,& .${TABLE_HEAD_CLASS}`]: {
    backgroundColor: '$grey2',
    color: '$grey10',
  },
} as SystemStyleObject

const hover = {
  row: {
    [`& tbody tr:hover,& tbody ${TableRow}:hover,& ${TableBody} tr:hover,& ${TableBody} ${TableRow}:hover`]:
      {
        backgroundColor: '$grey4',
      },
    [`& tbody tr[class*="selected"],& tbody ${TableRow}[class*="selected"],& ${TableBody} tr[class*="selected"],& ${TableBody} ${TableRow}[class*="selected"]`]:
      {
        backgroundColor: '$selection',
      },
    [`& tbody td[class*="selected"],& tbody ${TableCell}[class*="selected"],& ${TableBody} td[class*="selected"],& ${TableBody} ${TableCell}[class*="selected"]`]:
      {
        backgroundColor: '$selection',
      },
  },
  cell: {
    [`& tbody td:hover,& tbody ${TableCell}:hover,& ${TableBody} td:hover,& ${TableBody} ${TableCell}:hover`]:
      {
        backgroundColor: '$grey4',
      },
    [`& tbody td[class*="selected"],& tbody ${TableCell}[class*="selected"],& ${TableBody} td[class*="selected"],& ${TableBody} ${TableCell}[class*="selected"]`]:
      {
        backgroundColor: '$selection',
      },
    [`& tbody tr[class*="selected"],& tbody ${TableRow}[class*="selected"],& ${TableBody} tr[class*="selected"],& ${TableBody} ${TableRow}[class*="selected"]`]:
      {
        backgroundColor: '$selection',
      },
  },
} as RecipeVariantRecord

const striped = {
  true: {
    [`& tr:nth-child(even),& ${TableRow}:nth-child(even)`]: {
      backgroundColor: '$grey2',
    },
    borderColor: '$grey2',
  },
} as RecipeVariantRecord

const sticky = {
  true: {
    position: 'relative',
    borderCollapse: 'separate',
    [`& thead td,& thead th,& ${TableHead} td,& ${TableHead} th,& ${TableHead} ${TableCell}`]:
      {
        position: 'sticky',
        top: 0,
        zIndex: 2,
      },
    [`& thead,& ${TableHead}`]: {
      position: 'sticky',
      top: 0,
      zIndex: 2,
      boxShadow: '$1',
    },
  },
} as RecipeVariantRecord

const table = cva({
  base,
  variants: {
    hover,
    striped,
    sticky,
  },
})

type TableVariants = RecipeVariantProps<typeof table>
type TableProps = TableVariants & React.HTMLProps<'table'>

/**
 * Table component
 *
 * The table can be used to wrap standard table subcomponents when no extra functionality is required.
 * A full set of subcomponents is provided with extra props to support different use cases.
 */
export const Table = styled(
  withClasses(DEFAULT_TAG, TABLE_CLASS),
  table
) as React.FC<TableProps>

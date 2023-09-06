import { RecipeVariantProps, css, cva } from '@committed/ss/css'
import { styled } from '@committed/ss/jsx'
import React from 'react'

import { SystemStyleObject } from '@committed/ss/types'
import { RecipeVariantRecord } from '@committed/ss/types/recipe'
import { CComponent, component } from '../../utils'

//------- Utility wrappers --------------//

const TABLE_CLASS = 'c-table'
const TABLE_ROW_CLASS = 'c-table-row'
const TABLE_CELL_CLASS = 'c-table-cell'
const TABLE_HEAD_CLASS = 'c-table-head'
const TABLE_BODY_CLASS = 'c-table-body'
const TABLE_FOOT_CLASS = 'c-table-foot'
const TABLE_CAPTION_CLASS = 'c-table-caption'

export const TableHead = component(
  'thead',
  TABLE_HEAD_CLASS,
  css({
    display: 'table-header-group',
  }),
)

export const TableBody = component(
  'tbody',
  TABLE_BODY_CLASS,
  css({
    display: 'table-row-group',
  }),
)

export const TableFoot = component(
  'tfoot',
  TABLE_FOOT_CLASS,
  css({
    display: 'table-footer-group',
  }),
)

export const TableCaption = component(
  'caption',
  TABLE_CAPTION_CLASS,
  css({
    display: 'table-caption',
  }),
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

type TableRowProps = RecipeVariantProps<typeof row>

export const TableRow: CComponent<'tr', TableRowProps> = styled(
  component('tr', TABLE_ROW_CLASS),
  row,
)

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
  component('td', TABLE_CELL_CLASS),
  cell,
) as React.FC<TableCellProps>

const DEFAULT_TAG = 'table'

const base = {
  display: 'table',
  width: '100%',
  borderCollapse: 'collapse',
  borderSpacing: 0,
  borderRadius: '$default',
  border: '1px solid token(colors.$neutral.5)',
  boxShadow: '$1',
  fontFamily: '$text',
  textAlign: 'left',

  [`& caption,& .${TABLE_CAPTION_CLASS}`]: {
    fontSize: '$-1',
    padding: '$2',
    color: '$text.secondary',
    textAlign: 'center',
    captionSide: 'bottom',
  },

  [`& tr,& .${TABLE_ROW_CLASS}`]: {
    color: 'inherit',
    verticalAlign: 'middle',
    outline: 0,
    borderBottom: '1px solid token(colors.$neutral.5)',
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
    backgroundColor: '$neutral.2',
    color: '$neutral.10',
  },
} as SystemStyleObject

const hover = {
  row: {
    [`& tbody tr:hover,& tbody .${TABLE_ROW_CLASS}:hover,& .${TABLE_BODY_CLASS} tr:hover,& .${TABLE_BODY_CLASS} .${TABLE_ROW_CLASS}:hover`]:
      {
        backgroundColor: '$neutral.4',
      },
    [`& tbody tr[class*="selected"],& tbody .${TABLE_ROW_CLASS}[class*="selected"],& .${TABLE_BODY_CLASS} tr[class*="selected"],& .${TABLE_BODY_CLASS} .${TABLE_ROW_CLASS}[class*="selected"]`]:
      {
        backgroundColor: '$selection',
      },
    [`& tbody td[class*="selected"],& tbody .${TABLE_CELL_CLASS}[class*="selected"],& .${TABLE_BODY_CLASS} td[class*="selected"],& .${TABLE_BODY_CLASS} .${TABLE_CELL_CLASS}[class*="selected"]`]:
      {
        backgroundColor: '$selection',
      },
  },
  cell: {
    [`& tbody td:hover,& tbody .${TABLE_CELL_CLASS}:hover,& .${TABLE_BODY_CLASS} td:hover,& .${TABLE_BODY_CLASS} .${TABLE_CELL_CLASS}:hover`]:
      {
        backgroundColor: '$neutral.4',
      },
    [`& tbody td[class*="selected"],& tbody .${TABLE_CELL_CLASS}[class*="selected"],& .${TABLE_BODY_CLASS} td[class*="selected"],& .${TABLE_BODY_CLASS} .${TABLE_CELL_CLASS}[class*="selected"]`]:
      {
        backgroundColor: '$selection',
      },
    [`& tbody tr[class*="selected"],& tbody .${TABLE_ROW_CLASS}[class*="selected"],& .${TABLE_BODY_CLASS} tr[class*="selected"],& .${TABLE_BODY_CLASS} .${TABLE_ROW_CLASS}[class*="selected"]`]:
      {
        backgroundColor: '$selection',
      },
  },
} as RecipeVariantRecord

const striped = {
  true: {
    [`& tr:nth-child(even),& .${TABLE_ROW_CLASS}:nth-child(even)`]: {
      backgroundColor: '$neutral.2',
    },
    borderColor: '$neutral.2',
  },
} as RecipeVariantRecord

const sticky = {
  true: {
    position: 'relative',
    borderCollapse: 'separate',
    [`& thead td,& thead th,& .${TABLE_HEAD_CLASS} td,& .${TABLE_HEAD_CLASS} th,& .${TABLE_HEAD_CLASS} .${TABLE_CELL_CLASS}`]:
      {
        position: 'sticky',
        top: 0,
        zIndex: 2,
      },
    [`& thead,& .${TABLE_HEAD_CLASS}`]: {
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

type TableProps = RecipeVariantProps<typeof table>

/**
 * Table component
 *
 * The table can be used to wrap standard table subcomponents when no extra functionality is required.
 * A full set of subcomponents is provided with extra props to support different use cases.
 */
export const Table: CComponent<'table', TableProps> = styled(
  component(DEFAULT_TAG, TABLE_CLASS),
  table,
)

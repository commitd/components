import { styled } from '../../stitches.config'

//------- Utility wrappers --------------//

export const TableHead = styled('thead', {
  display: 'table-header-group',
})
export const TableBody = styled('tbody', {
  display: 'table-row-group',
})
export const TableFoot = styled('tfoot', {
  display: 'table-footer-group',
})
export const TableCaption = styled('caption', {
  display: 'table-caption',
})

//-------- Functional wrappers ----------//

export const TableRow = styled('tr', {
  display: 'table-row',

  variants: {
    selected: {
      true: {
        backgroundColor: '$selection',
      },
    },
  },
})

export const TableCell = styled('td', {
  display: 'table-cell',

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

const DEFAULT_TAG = 'table'

/**
 * Table component
 *
 * The table can be used to wrap standard table subcomponents when no extra functionality is required.
 * A full set of subcomponents is provided with extra props to support different use cases.
 */
export const Table = styled(DEFAULT_TAG, {
  display: 'table',
  width: '100%',
  borderCollapse: 'collapse',
  borderSpacing: 0,
  borderRadius: '$default',
  border: '1px solid $grey5',
  boxShadow: '$1',
  fontFamily: '$text',
  textAlign: 'left',

  [`& caption,& ${TableCaption}`]: {
    fontSize: '$-1',
    padding: '$2',
    color: '$textSecondary',
    textAlign: 'center',
    captionSide: 'bottom',
  },

  [`& tr,& ${TableRow}`]: {
    color: 'inherit',
    verticalAlign: 'middle',
    outline: 0,
    borderBottom: '1px solid $grey5',
  },
  [`& td,& th,& ${TableCell}`]: {
    verticalAlign: 'inherit',
    textAlign: 'inherit',
    px: '$2',
    py: '$2',
  },
  [`& th`]: {
    fontWeight: '$bold',
  },
  [`& thead td,& thead th,& ${TableHead} td,& ${TableHead} th,& ${TableHead} ${TableCell}`]: {
    fontWeight: '$regular',
  },
  [`& tfoot td,& tfoot th,& ${TableFoot} td,& ${TableFoot} th,& ${TableFoot} ${TableCell}`]: {},

  [`& thead,& ${TableHead}`]: {
    backgroundColor: '$grey2',
    color: '$grey10',
  },

  variants: {
    hover: {
      row: {
        [`& tbody tr:hover,& tbody ${TableRow}:hover,& ${TableBody} tr:hover,& ${TableBody} ${TableRow}:hover`]: {
          backgroundColor: '$grey4',
        },
        [`& tbody tr[class*="selected"],& tbody ${TableRow}[class*="selected"],& ${TableBody} tr[class*="selected"],& ${TableBody} ${TableRow}[class*="selected"]`]: {
          backgroundColor: '$selection',
        },
        [`& tbody td[class*="selected"],& tbody ${TableCell}[class*="selected"],& ${TableBody} td[class*="selected"],& ${TableBody} ${TableCell}[class*="selected"]`]: {
          backgroundColor: '$selection',
        },
      },
      cell: {
        [`& tbody td:hover,& tbody ${TableCell}:hover,& ${TableBody} td:hover,& ${TableBody} ${TableCell}:hover`]: {
          backgroundColor: '$grey4',
        },
        [`& tbody td[class*="selected"],& tbody ${TableCell}[class*="selected"],& ${TableBody} td[class*="selected"],& ${TableBody} ${TableCell}[class*="selected"]`]: {
          backgroundColor: '$selection',
        },
        [`& tbody tr[class*="selected"],& tbody ${TableRow}[class*="selected"],& ${TableBody} tr[class*="selected"],& ${TableBody} ${TableRow}[class*="selected"]`]: {
          backgroundColor: '$selection',
        },
      },
    },
    striped: {
      true: {
        [`& tr:nth-child(even),& ${TableRow}:nth-child(even)`]: {
          backgroundColor: '$grey2',
        },
        borderColor: '$grey2',
      },
    },
    sticky: {
      true: {
        position: 'relative',
        borderCollapse: 'separate',
        [`& thead td,& thead th,& ${TableHead} td,& ${TableHead} th,& ${TableHead} ${TableCell}`]: {
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
    },
  },
})

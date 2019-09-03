import * as React from 'react'
import { styled } from '@material-ui/styles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'
import MaterialTable, {
  TableProps as MaterialTableProps
} from '@material-ui/core/Table'

export type TableProps = MaterialTableProps

export const Table = styled(MaterialTable)(({ theme }: { theme: Theme }) => ({
  '& thead': {
    '& th': {
      fontWeight: 'bold',
      color: theme.palette.text.primary
    },
    borderBottom: `2px solid ${theme.palette.brand.main}`
  },
  '& tr:nth-child(even)': {
    backgroundColor: theme.palette.grey[100]
  }
}))
Table.displayName = 'Table'

export default Table as React.FC<TableProps>

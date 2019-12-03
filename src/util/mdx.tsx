import React from 'react'
import { styled } from '@material-ui/styles'
import { Box } from '../components/box/Box'
import { Display } from '../components/typography/Display'
import { Divider } from '../components/divider/Divider'
import { Link } from '../components/link/Link'
import { Text } from '../components/typography/Text'
import {
  Table,
  TableHead,
  TableRow,
  TableCell
} from '../components/table/Table'
import { theme } from '../theme'

// https://mdxjs.com/getting-started#table-of-components

const StripedTable = styled(Table)({
  '& tr:nth-child(even)': {
    backgroundColor: theme.palettes.neutral[100]
  }
})

type ComponentType =
  | 'wrapper'
  | 'p'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'thematicBreak'
  | 'blockquote'
  | 'ul'
  | 'ol'
  | 'li'
  | 'table'
  | 'th'
  | 'thead'
  | 'tr'
  | 'td'
  | 'pre'
  | 'code'
  | 'em'
  | 'strong'
  | 'delete'
  | 'inlineCode'
  | 'hr'
  | 'img'
export type Components = {
  [key in ComponentType]?: React.ComponentType
} & {
  a: React.ComponentType<{
    children: React.ReactNode
    href: string
    title: string
  }>
}

export const components: Components = {
  h1: props => <Display.d1 mb={[2, 3]} mt={[3, 4]} {...props} />,
  h2: props => <Display.d2 mb={[2, 3]} mt={[2, 3]} {...props} />,
  h3: props => <Display.d3 mb={[1, 2]} mt={[2, 3]} {...props} />,
  h4: props => <Display.d4 mb={[1, 2]} mt={[2, 2]} {...props} />,
  h5: props => <Display.d5 mb={1} mt={1} {...props} />,
  h6: props => <Display.d6 mb={1} mt={1} {...props} />,
  thematicBreak: props => <Divider my={3} {...props} />,
  hr: props => <Divider my={2} {...props} />,
  p: props => <Text {...props} my={3} />,
  em: props => <Text {...props} italic component="span" />,
  strong: props => <Text {...props} bold component="span" />,
  delete: props => <Text {...props} strike component="span" />,
  a: ({ children, href, ...props }) => (
    <Link variant="styled" href={href} {...props} />
  ),
  blockquote: props => (
    <Box
      borderLeft={`solid ${theme.spacing(2)}px ${theme.palettes.brand[200]}`}
      pl={3}
    >
      <Text {...props} />
    </Box>
  ),
  table: StripedTable,
  thead: TableHead,
  tr: TableRow,
  td: ({ align, ...props }: any) => (
    <TableCell align={align ? align : 'left'} {...props} />
  ),
  th: ({ align, ...props }: any) => (
    <TableCell align={align ? align : 'left'} {...props} />
  ),
  li: props => (
    <li>
      <Text {...props} />
    </li>
  )
}

// export shortcodes for convenience
import * as allComponents from '../components'
export const shortcodes = allComponents

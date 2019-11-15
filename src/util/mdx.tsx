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
  h1: Display.d1,
  h2: Display.d2,
  h3: Display.d3,
  h4: Display.d4,
  h5: Display.d5,
  h6: Display.d6,
  thematicBreak: Divider,
  hr: Divider,
  p: ({ children }) => <Text component="p">{children}</Text>,
  em: ({ children }) => (
    <Text component="p" italic>
      {children}
    </Text>
  ),
  strong: ({ children }) => (
    <Text component="p" bold>
      {children}
    </Text>
  ),
  delete: ({ children }) => (
    <s>
      <Text component="p">{children}</Text>
    </s>
  ),
  a: ({ children, href, ...props }) => (
    <Link variant="styled" href={href} {...props}>
      {children}
    </Link>
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
  )
}

// export shortcodes for convenience
import * as shortcodes from '../components'
export { shortcodes }

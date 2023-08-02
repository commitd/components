import * as Icons from '@mdi/js'
import { Meta, Story } from '@storybook/react'
import React from 'react'
import { useVirtual } from 'react-virtual'
import { Box, Svg } from '..'
import { Copy } from '../../docs/util'

export default {
  title: 'Components/Icons',
  // To get correct props
  component: Svg,
  parameters: {
    docs: {
      description: {
        component: `Use \`@mdi/js\` for icons. 
        
Import the required path and uses it as a \`path\` prop in an \`Svg\` component. 
All Icons are shown below but you can get a searchable version at <https://materialdesignicons.com/>. 

We recommend setting up a project Icons file to allow easy changing of all semantically equivalent icons. 
Only the imported paths should be included in your final bundle through tree-shaking.`,
      },
    },
  },
} as Meta

export const Default: Story = (
  args: Omit<React.ComponentProps<typeof Svg>, 'path'>
) => <Svg {...args} path={Icons.mdiAccount} />

const keys = Object.keys(Icons)
const numberOfIcons = keys.length
const iconSize = 56

const Icon: React.FC<{ name: string }> = ({ name }) => {
  // @ts-ignore
  const path = Icons[name]
  return (
    <Copy
      css={{ p: '$4' }}
      content={name}
      multiline
      copy={`import { ${name} } from '@mdi/js'
export const ${name.substring(
        3
      )}: React.FC<React.ComponentProps<typeof Svg>> = (props) => (
  <Svg path={${name}} {...props} />
)`}
    >
      <Svg path={path} />
    </Copy>
  )
}

/**
 * All the icons are shown below.
 *
 * If you can spot the icon you need here then click to copy a the code required e.g..
 *
 * ```
 * import { mdiAccount } from '@mdi/js'
 *
 * export const Account: React.FC<React.ComponentProps<typeof Svg>> = (props) => (
 *     <Svg path={mdiAccount} {...props} />
 * )
 * ```
 */
export function IconGrid() {
  const parentRef = React.useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = React.useState({ rows: 0, columns: 0 })

  React.useEffect(() => {
    const current = parentRef.current
    const columns =
      current === null ? 0 : Math.floor(current.offsetWidth / iconSize)
    const rows = current === null ? 0 : Math.ceil(numberOfIcons / columns)
    setDimensions({
      columns,
      rows,
    })
  }, [parentRef.current, setDimensions])

  const rowVirtualizer = useVirtual({
    size: dimensions.rows,
    parentRef,
    estimateSize: React.useCallback(() => iconSize, []),
    overscan: 20,
  })

  const columnVirtualizer = useVirtual({
    horizontal: true,
    size: dimensions.columns,
    parentRef,
    estimateSize: React.useCallback(() => iconSize, []),
    overscan: 20,
  })

  return (
    <Box
      ref={parentRef}
      css={{
        height: `80vh`,
        overflow: 'auto',
      }}
    >
      <Box
        css={{
          margin: 'auto',
          height: `${rowVirtualizer.totalSize}px`,
          width: `${columnVirtualizer.totalSize}px`,
          position: 'relative',
        }}
      >
        {rowVirtualizer.virtualItems.map((virtualRow) => (
          <React.Fragment key={virtualRow.index}>
            {columnVirtualizer.virtualItems.map((virtualColumn) => (
              <Box
                css={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: `${virtualColumn.size}px`,
                  height: `${virtualRow.size}px`,
                  transform: `translateX(${virtualColumn.start}px) translateY(${virtualRow.start}px)`,
                }}
              >
                <Icon
                  key={virtualColumn.index}
                  name={
                    keys[
                      dimensions.columns * virtualRow.index +
                        virtualColumn.index
                    ]
                  }
                />
              </Box>
            ))}
          </React.Fragment>
        ))}
      </Box>
    </Box>
  )
}

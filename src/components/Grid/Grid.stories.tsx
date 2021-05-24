import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Grid } from '.'
import { Box, Row } from '../'
import { CSS } from 'stitches.config'

export default {
  title: 'Components/Grid',
  component: Grid,
} as Meta

const keys = ['yellow', 'sand', 'blue', 'green', 'red', 'orange']
const randomColor = (): CSS['backgroundColor'] => {
  const color = keys[Math.floor(Math.random() * keys.length)]
  return `$${color}300`
}

const border = '1px solid $greyLine'

type BoxProps = React.ComponentProps<typeof Box>
type GridBoxProps = Omit<BoxProps, 'css'> & {
  css?: CSS
}

const GridBox: React.FC<GridBoxProps> = ({ css, ...props }) => (
  <Box
    css={
      {
        minWidth: '25px',
        minHeight: '25px',
        p: '$2',
        border,
        backgroundColor: randomColor(),
        ...css,
      } as CSS
    }
    {...props}
  />
)

export const Default: React.FC = () => (
  <Grid
    css={{
      gridTemplateColumns: '40px 50px auto 50px 40px',
      gridTemplateRows: '25% 50px',
    }}
  >
    <GridBox />
    <GridBox />
    <GridBox />
    <GridBox />
    <GridBox />
    <GridBox />
    <GridBox />
    <GridBox />
    <GridBox />
    <GridBox />
  </Grid>
)

/**
 *
 * ## Areas
 *
 * Defines a grid template by referencing the names of the grid areas which are specified with the grid-area property.
 * Repeating the name of a grid area causes the content to span those cells. A period signifies an empty cell. The syntax itself provides a visualization of the structure of the grid.
 *
 * Values:
 *
 * - grid-area-name - the name of a grid area specified with grid-area
 * - . - a period signifies an empty grid cell
 * - none - no grid areas are defined
 *
 */
export const Areas = () => (
  <Grid
    css={{
      gridTemplateColumns: '100px 100px 100px 100px',
      gridTemplateRows: '50px 100px 50px',
      gridTemplateAreas: `'header header header header' 'sidebar . main main' 'footer footer footer footer'`,
    }}
  >
    <GridBox css={{ gridArea: 'header' }}>Header</GridBox>
    <GridBox css={{ gridArea: 'sidebar' }}>Sidebar</GridBox>
    <GridBox css={{ gridArea: 'main' }}>Main</GridBox>
    <GridBox css={{ gridArea: 'footer' }}>Footer</GridBox>
  </Grid>
)

/**
 *
 * `gridTemplate` and `grid` can be used as a shorthand notation, however, as in this example it can be difficult to follow.
 * For clarity, we recommend using the more verbose versions except for simple layouts.
 */
export const AreasShorthand = () => (
  <Grid
    css={{
      gridTemplate: `'header header header header' 50px 'sidebar . main main' 100px 'footer footer footer footer' 50px / 100px 100px 100px 100px`,
    }}
  >
    <GridBox css={{ gridArea: 'header' }}>Header</GridBox>
    <GridBox css={{ gridArea: 'sidebar' }}>Sidebar</GridBox>
    <GridBox css={{ gridArea: 'main' }}>Main</GridBox>
    <GridBox css={{ gridArea: 'footer' }}>Footer</GridBox>
  </Grid>
)

/**
 *
 * ## Gaps
 *
 * Specifies the size of the grid lines.
 * You can think of it like setting the width of the gutters between the columns/rows.
 * We use the spacing in the theme. `gap` only supports the case where both the row
 * and column spacing is the same.
 */
export const Gaps = () => (
  <Grid
    css={{
      rowGap: '$3',
      columnGap: '$2',
      gridTemplateColumns: '$9 $9 $9',
      gridTemplateRows: '$9 $9 $9',
    }}
  >
    <GridBox />
    <GridBox />
    <GridBox />
    <GridBox />
    <GridBox />
    <GridBox />
    <GridBox />
    <GridBox />
    <GridBox />
  </Grid>
)

export const GapSame = () => (
  <Grid
    css={{
      gap: '$2',
      gridTemplateColumns: '$9 $9',
      gridAutoRows: '$sizes$9',
    }}
  >
    <GridBox />
    <GridBox />
    <GridBox />
    <GridBox />
  </Grid>
)

const Template: Story<{
  justifyItems: CSS['justifyItems']
  alignItems: CSS['alignItems']
}> = ({ justifyItems, alignItems }) => (
  <Grid
    css={{
      justifyItems,
      alignItems,
      border,
      gridTemplateColumns: '$7 $7',
      gridTemplateRows: '$7 $7',
      width: '$10',
    }}
  >
    <GridBox />
    <GridBox />
    <GridBox />
    <GridBox />
  </Grid>
)

/**
 *
 * Aligns grid items along the inline (row) axis (as opposed to align-items which aligns along the column axis).
 * This value applies to all grid items inside the container.
 *
 * Values:
 *
 * - `start` - aligns items to be flush with the start edge of their cell
 * - `end` - aligns items to be flush with the end edge of their cell
 * - `center` - aligns items in the center of their cell
 * - `stretch` - fills the whole width of the cell (this is the default)
 *
 */
export const JustifyItems = () => (
  <Row css={{ gap: '$3' }}>
    <Grid
      css={{
        justifyItems: 'start',
        border,
        gridTemplateColumns: '$7 $7',
        gridTemplateRows: '$7 $7',
      }}
    >
      <GridBox />
      <GridBox />
      <GridBox />
      <GridBox />
    </Grid>
    <Grid
      css={{
        justifyItems: 'end',
        border,
        gridTemplateColumns: '$7 $7',
        gridTemplateRows: '$7 $7',
      }}
    >
      <GridBox />
      <GridBox />
      <GridBox />
      <GridBox />
    </Grid>
    <Grid
      css={{
        justifyItems: 'center',
        border,
        gridTemplateColumns: '$7 $7',
        gridTemplateRows: '$7 $7',
      }}
    >
      <GridBox />
      <GridBox />
      <GridBox />
      <GridBox />
    </Grid>
    <Grid
      css={{
        justifyItems: 'stretch',
        border,
        gridTemplateColumns: '$7 $7',
        gridTemplateRows: '$7 $7',
      }}
    >
      <GridBox />
      <GridBox />
      <GridBox />
      <GridBox />
    </Grid>
  </Row>
)

/**
 *
 * Aligns grid items along the column axis (as opposed to justify-items which aligns along the inline (row) axis).
 * This value applies to all grid items inside the container.
 *
 * Values:
 *
 * - `start` - aligns items to be flush with the start edge of their cell
 * - `end` - aligns items to be flush with the end edge of their cell
 * - `center` - aligns items in the center of their cell
 * - `stretch` - fills the whole height of the cell (this is the default)
 */
export const AlignItems = () => (
  <Row css={{ gap: '$3' }}>
    <Grid
      css={{
        alignItems: 'start',
        border,
        gridTemplateColumns: '$7 $7',
        gridTemplateRows: '$7 $7',
      }}
    >
      <GridBox />
      <GridBox />
      <GridBox />
      <GridBox />
    </Grid>
    <Grid
      css={{
        alignItems: 'end',
        border,
        gridTemplateColumns: '$7 $7',
        gridTemplateRows: '$7 $7',
      }}
    >
      <GridBox />
      <GridBox />
      <GridBox />
      <GridBox />
    </Grid>
    <Grid
      css={{
        alignItems: 'center',
        border,
        gridTemplateColumns: '$7 $7',
        gridTemplateRows: '$7 $7',
      }}
    >
      <GridBox />
      <GridBox />
      <GridBox />
      <GridBox />
    </Grid>
    <Grid
      css={{
        alignItems: 'stretch',
        border,
        gridTemplateColumns: '$7 $7',
        gridTemplateRows: '$7 $7',
      }}
    >
      <GridBox />
      <GridBox />
      <GridBox />
      <GridBox />
    </Grid>
  </Row>
)

/**
 *
 * ## Place Items
 *
 * `place-items` sets both the align-items and justify-items properties in a single declaration.
 * It does not support breakpoint changing.
 *
 * Values:
 *
 * - `align-items / justify-items` - The first value sets align-items, the second value justify-items. If the second value is omitted, the first value is assigned to both properties.
 *   All major browsers except Edge support the place-items shorthand property.
 *
 * ## Justify Content
 *
 * Sometimes the total size of your grid might be less than the size of its grid container.
 * This could happen if all of your grid items are sized with non-flexible units like px.
 * In this case you can set the alignment of the grid within the grid container.
 * This property aligns the grid along the inline (row) axis (as opposed to align-content which aligns the grid along the column axis).
 *
 * Values:
 *
 * - `start` - aligns the grid to be flush with the start edge of the grid container
 * - `end` - aligns the grid to be flush with the end edge of the grid container
 * - `center` - aligns the grid in the center of the grid container
 * - `stretch` - resizes the grid items to allow the grid to fill the full width of the grid container
 * - `space-around` - places an even amount of space between each grid item, with half-sized spaces on the far ends
 * - `space-between` - places an even amount of space between each grid item, with no space at the far ends
 * - `space-evenly` - places an even amount of space between each grid item, including the far ends
 */
export const JustifyContent = () => (
  <Row css={{ gap: '$3', flexWrap: 'wrap' }}>
    <Grid
      css={{
        justifyContent: 'start',
        border,
        gridTemplateColumns: '$7 $7',
        gridTemplateRows: '$7 $7',
        width: '$10',
      }}
    >
      <GridBox />
      <GridBox />
      <GridBox />
      <GridBox />
    </Grid>
    <Grid
      css={{
        justifyContent: 'end',
        border,
        gridTemplateColumns: '$7 $7',
        gridTemplateRows: '$7 $7',
        width: '$10',
      }}
    >
      <GridBox />
      <GridBox />
      <GridBox />
      <GridBox />
    </Grid>
    <Grid
      css={{
        justifyContent: 'center',
        border,
        gridTemplateColumns: '$7 $7',
        gridTemplateRows: '$7 $7',
        width: '$10',
      }}
    >
      <GridBox />
      <GridBox />
      <GridBox />
      <GridBox />
    </Grid>
    <Grid
      css={{
        justifyContent: 'stretch',
        border,
        gridTemplateColumns: '$7 $7',
        gridTemplateRows: '$7 $7',
        width: '$10',
      }}
    >
      <GridBox />
      <GridBox />
      <GridBox />
      <GridBox />
    </Grid>
    <Grid
      css={{
        justifyContent: 'space-around',
        border,
        gridTemplateColumns: '$7 $7',
        gridTemplateRows: '$7 $7',
        width: '$10',
      }}
    >
      <GridBox />
      <GridBox />
      <GridBox />
      <GridBox />
    </Grid>
    <Grid
      css={{
        justifyContent: 'space-between',
        border,
        gridTemplateColumns: '$7 $7',
        gridTemplateRows: '$7 $7',
        width: '$10',
      }}
    >
      <GridBox />
      <GridBox />
      <GridBox />
      <GridBox />
    </Grid>
    <Grid
      css={{
        justifyContent: 'space-evenly',
        border,
        gridTemplateColumns: '$7 $7',
        gridTemplateRows: '$7 $7',
        width: '$10',
      }}
    >
      <GridBox />
      <GridBox />
      <GridBox />
      <GridBox />
    </Grid>
  </Row>
)

/**
 *
 * Sometimes the total size of your grid might be less than the size of its grid container. This could happen if all of your grid items are sized with non-flexible units like px. In this case you can set the alignment of the grid within the grid container. This property aligns the grid along the block (column) axis (as opposed to justify-content which aligns the grid along the inline (row) axis).
 *
 * Values:
 *
 * - `start` - aligns the grid to be flush with the start edge of the grid container
 * - `end` - aligns the grid to be flush with the end edge of the grid container
 * - `center` - aligns the grid in the center of the grid container
 * - `stretch` - resizes the grid items to allow the grid to fill the full height of the grid container
 * - `space-around` - places an even amount of space between each grid item, with half-sized spaces on the far ends
 * - `space-between` - places an even amount of space between each grid item, with no space at the far ends
 * - `space-evenly` - places an even amount of space between each grid item, including the far ends
 */
export const AlignContent = () => (
  <Row css={{ gap: '$3', flewWrap: 'wrap' }}>
    <Grid
      css={{
        height: '$10',
        alignContent: 'start',
        border,
        gridTemplateColumns: '$7 $7',
        gridTemplateRows: '$7 $7',
      }}
    >
      <GridBox />
      <GridBox />
      <GridBox />
      <GridBox />
    </Grid>
    <Grid
      css={{
        minHeight: '$10',
        alignContent: 'end',
        border,
        gridTemplateColumns: '$7 $7',
        gridTemplateRows: '$7 $7',
      }}
    >
      <GridBox />
      <GridBox />
      <GridBox />
      <GridBox />
    </Grid>
    <Grid
      css={{
        minHeight: '$10',
        alignContent: 'center',
        border,
        gridTemplateColumns: '$7 $7',
        gridTemplateRows: '$7 $7',
      }}
    >
      <GridBox />
      <GridBox />
      <GridBox />
      <GridBox />
    </Grid>
    <Grid
      css={{
        minHeight: '$10',
        alignContent: 'stretch',
        border,
        gridTemplateColumns: '$7 $7',
        gridTemplateRows: '$7 $7',
      }}
    >
      <GridBox />
      <GridBox />
      <GridBox />
      <GridBox />
    </Grid>
    <Grid
      css={{
        minHeight: '$10',
        alignContent: 'space-around',
        border,
        gridTemplateColumns: '$7 $7',
        gridTemplateRows: '$7 $7',
      }}
    >
      <GridBox />
      <GridBox />
      <GridBox />
      <GridBox />
    </Grid>
    <Grid
      css={{
        minHeight: '$10',
        alignContent: 'space-between',
        border,
        gridTemplateColumns: '$7 $7',
        gridTemplateRows: '$7 $7',
      }}
    >
      <GridBox />
      <GridBox />
      <GridBox />
      <GridBox />
    </Grid>
    <Grid
      css={{
        minHeight: '$10',
        alignContent: 'space-evenly',
        border,
        gridTemplateColumns: '$7 $7',
        gridTemplateRows: '$7 $7',
      }}
    >
      <GridBox />
      <GridBox />
      <GridBox />
      <GridBox />
    </Grid>
  </Row>
)

/**
 * ## Place Content
 *
 * `place-content` sets both the align-content and justify-content properties in a single declaration.
 * It does not support breakpoit changing.
 * All major browsers except Edge support the place-content shorthand property.
 *
 * Values:
 *
 * - `start` - aligns the grid to be flush with the start edge of the grid container
 * - `end` - aligns the grid to be flush with the end edge of the grid container
 * - `center` - aligns the grid in the center of the grid container
 * - `stretch` - resizes the grid items to allow the grid to fill the full height of the grid container
 * - `space-around` - places an even amount of space between each grid item, with half-sized spaces on the far ends
 * - `space-between` - places an even amount of space between each grid item, with no space at the far ends
 * - `space-evenly` - places an even amount of space between each grid item, including the far ends
 *
 * ## Flow
 *
 * If you have grid items that you don't explicitly place on the grid,
 * the auto-placement algorithm kicks in to automatically place the items.
 * This property controls how the auto-placement algorithm works.
 *
 * Values:
 *
 * - `row` - tells the auto-placement algorithm to fill in each row in turn, adding new rows as necessary (default)
 * - `column` - tells the auto-placement algorithm to fill in each column in turn, adding new columns as necessary
 * - `dense` - tells the auto-placement algorithm to attempt to fill in holes earlier in the grid if smaller items come up later
 */
export const GridAutoFlow = () => (
  <Row css={{ gap: '$3' }}>
    <Grid
      css={{
        gridAutoFlow: 'row',
        gridTemplateColumns: '$7 $7',
        gridTemplateRows: '$7 $7',
      }}
    >
      <GridBox>1</GridBox>
      <GridBox>2</GridBox>
      <GridBox>3</GridBox>
      <GridBox>4</GridBox>
    </Grid>
    <Grid
      css={{
        gridAutoFlow: 'column',
        gridTemplateColumns: '$7 $7',
        gridTemplateRows: '$7 $7',
      }}
    >
      <GridBox>1</GridBox>
      <GridBox>2</GridBox>
      <GridBox>3</GridBox>
      <GridBox>4</GridBox>
    </Grid>
  </Row>
)

/**
 *
 * ## Item coverage
 *
 * `grid-column-start`, `grid-column-end`, `grid-row-start`, `grid-row-end` determine a grid item's location
 * within the grid by referring to specific grid lines.
 * `grid-column-start/grid-row-start` is the line where the item begins, and
 * `grid-column-end/grid-row-end` is the line where the item ends.
 *
 * Values:
 *
 * - `line` - can be a number to refer to a numbered grid line, or a name to refer to a named grid line
 * - `span <number>` - the item will span across the provided number of grid tracks
 * - `span <name>` - the item will span across until it hits the next line with the provided name
 * - `auto` - indicates auto-placement, an automatic span, or a default span of one
 */
export const GridItems = () => (
  <Grid
    css={{
      gridTemplateColumns: '$7 $7 $7 $7',
      gridTemplateRows: '$7 $7 $7 $7',
    }}
  >
    <GridBox>1</GridBox>
    <GridBox
      css={{
        gridColumnStart: '3',
        gridColumnEnd: '5',
        gridRowStart: '1',
        gridRowEnd: '3',
      }}
    >
      2
    </GridBox>
    <GridBox>3</GridBox>
    <GridBox>4</GridBox>
    <GridBox>5</GridBox>
  </Grid>
)

/**
 * If no `grid-column-end/grid-row-end` is declared, the item will span 1 track by default.
 *
 * Items can overlap each other. You can use z-index to control their stacking order.
 *
 * `grid-column` and `grid-row` are shorthand for `grid-column-start` + `grid-column-end`,
 * and `grid-row-start` + `grid-row-end`, respectively.
 *
 * Values:
 *
 * - `<start-line> / <end-line>` - each one accepts all the same values as the longhand version, including span
 *
 * If no end line value is declared, the item will span 1 track by default.
 *
 * ## Item Grid Area
 *
 * `gridArea` Gives an item a name so that it can be referenced by a template created with the `grid-template-areas` property.
 * Alternatively, this property can be used as an even shorter shorthand for `grid-row-start + grid-column-start + grid-row-end + grid-column-end`.
 *
 * Values:
 *
 * `name` - a name of your choosing
 * `row-start / column-start / row-end / column-end` - can be numbers or named lines
 */
export const ItemArea = () => (
  <Grid
    css={{
      gridTemplateColumns: '$7 $7 $7 $7',
      gridTemplateRows: '$7 $7 $7 $7',
    }}
  >
    <GridBox>1</GridBox>
    <GridBox css={{ gridArea: '1 / 3 / 3 / 5' }}>2</GridBox>
    <GridBox>3</GridBox>
    <GridBox>4</GridBox>
    <GridBox>5</GridBox>
  </Grid>
)

/**
 * ## Justify Self
 *
 * `justify-self` aligns a grid item inside a cell along the row axis
 * (as opposed to align-self which aligns along the column axis).
 * This value applies to a grid item inside a single cell.
 *
 * Values:
 *
 * - `start` - aligns the grid item to be flush with the start edge of the cell
 * - `end` - aligns the grid item to be flush with the end edge of the cell
 * - `center` - aligns the grid item in the center of the cell
 * - `stretch` - fills the whole width of the cell (this is the default)
 *
 * To set alignment for all the items in a grid, this behavior can also be set on the grid container via the justify-items property.
 *
 * ## Align Self
 *
 * Aligns a grid item inside a cell along the column axis (as opposed to justify-self which aligns along the row axis).
 * This value applies to the content inside a single grid item.
 *
 * Values:
 *
 * - `start` - aligns the grid item to be flush with the start edge of the cell
 * - `end` - aligns the grid item to be flush with the end edge of the cell
 * - `center` - aligns the grid item in the center of the cell
 * - `stretch` - fills the whole height of the cell (this is the default)
 *
 * ## Place Self
 *
 * `place-self` sets both the align-self and justify-self properties in a single declaration.
 *
 * Values:
 *
 * - `auto` - The “default” alignment for the layout mode.
 * - `start` - aligns the grid item to be flush with the start edge of the cell
 * - `end` - aligns the grid item to be flush with the end edge of the cell
 * - `center` - aligns the grid item in the center of the cell
 * - `stretch` - fills the whole height of the cell (this is the default)
 */
export const Self = () => (
  <Grid
    css={{
      border,
      gridTemplateColumns: '100px 100px',
      gridTemplateRows: '100px 100px',
    }}
  >
    <GridBox
      css={{
        placeSelf: 'center',
      }}
    />
    <GridBox
      css={{
        alignSelf: 'start',
        justifySelf: 'end',
      }}
    />
    <GridBox
      css={{
        justifySelf: 'start',
        alignSelf: 'end',
      }}
    />
    <GridBox
      css={{
        placeSelf: 'stretch',
      }}
    />
  </Grid>
)

// Much of this is taken from [A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/), see for further details.
export const Credit = () => null

import { Grid } from '@committed/ds'
import { GridBox } from './parts/GridBox'

export const GridExample = () => (
  <Grid
    css={{
      gridTemplateColumns: '100px 100px 100px 100px',
      gridTemplateRows: '50px 100px 50px',
      gridTemplateAreas: `'header header header header' 'sidebar . main main' 'footer footer footer footer'`,
    }}
  >
    <GridBox
      css={{
        gridArea: 'header',
      }}
    >
      Header
    </GridBox>
    <GridBox
      css={{
        gridArea: 'sidebar',
      }}
    >
      Sidebar
    </GridBox>
    <GridBox
      css={{
        gridArea: 'main',
      }}
    >
      Main
    </GridBox>
    <GridBox
      css={{
        gridArea: 'footer',
      }}
    >
      Footer
    </GridBox>
  </Grid>
)

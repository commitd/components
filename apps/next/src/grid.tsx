import { Grid } from '@committed/ds'
import { ExampleComponent } from './parts/ExampleComponent'

export const GridExample = () => (
  <Grid
    css={{
      gridTemplateColumns: '100px 100px 100px 100px',
      gridTemplateRows: '50px 100px 50px',
      gridTemplateAreas: `'header header header header' 'sidebar . main main' 'footer footer footer footer'`,
    }}
  >
    <ExampleComponent
      css={{
        gridArea: 'header',
      }}
    >
      Header
    </ExampleComponent>
    <ExampleComponent
      css={{
        gridArea: 'sidebar',
      }}
    >
      Sidebar
    </ExampleComponent>
    <ExampleComponent
      css={{
        gridArea: 'main',
      }}
    >
      Main
    </ExampleComponent>
    <ExampleComponent
      css={{
        gridArea: 'footer',
      }}
    >
      Footer
    </ExampleComponent>
  </Grid>
)

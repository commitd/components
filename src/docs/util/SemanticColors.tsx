import React from 'react'
import type { CSS } from '../../stitches.config'
import { Grid, Heading } from '../../components'
import { Color } from './Colors'

interface SemanticColorsProps {
  name: string
  theme: any
  css?: CSS
}

export const SemanticColors = ({ name, theme, css }: SemanticColorsProps) => {
  return (
    <Grid
      css={
        {
          gridTemplateColumns: '1fr 1fr 1fr',
          gridTemplateRows: '$9 $6',
          gridTemplateAreas: `'main main main' 'background lowlight highlight'`,
          ...css,
        } as CSS
      }
    >
      <Color css={{ gridArea: 'main' }} theme={theme} name={name} weight={''}>
        <Heading
          css={{ color: `$${name}Contrast`, margin: 'auto' }}
          variant="h5"
        >
          {name}
        </Heading>
      </Color>
      <Color
        css={{ gridArea: 'background' }}
        theme={theme}
        name={name}
        weight={'Background'}
      />
      <Color
        css={{ gridArea: 'lowlight' }}
        theme={theme}
        name={name}
        weight={'Lowlight'}
      />
      <Color
        css={{ gridArea: 'highlight' }}
        theme={theme}
        name={name}
        weight={'Highlight'}
      />
    </Grid>
  )
}

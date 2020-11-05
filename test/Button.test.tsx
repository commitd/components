import React from 'react'
import { render } from './test-utils'
import { Box, Button } from '../src'

describe('Button', () => {
  it('renders without crashing', () => {
    const { asFragment } = render(
      <>
        <Box>
          <Button m={1} disabled={false} color="default">
            Default
          </Button>
          <Button m={1} disabled={true} color="default">
            Default
          </Button>
        </Box>
        <Box>
          <Button m={1} disabled={false} color="primary">
            Primary
          </Button>
          <Button m={1} disabled={true} color="primary">
            Primary
          </Button>
        </Box>
        <Box>
          <Button m={1} disabled={false} color="secondary">
            Secondary
          </Button>
          <Button m={1} disabled={true} color="secondary">
            Secondary
          </Button>
        </Box>
        <Box>
          <Button m={1} disabled={false} variant="outlined" color="default">
            Default
          </Button>
          <Button m={1} disabled={true} variant="outlined" color="default">
            Default
          </Button>
        </Box>
        <Box>
          <Button m={1} disabled={false} variant="outlined" color="primary">
            Primary
          </Button>
          <Button m={1} disabled={true} variant="outlined" color="primary">
            Primary
          </Button>
        </Box>
        <Box>
          <Button m={1} disabled={false} variant="outlined" color="secondary">
            Secondary
          </Button>
          <Button m={1} disabled={true} variant="outlined" color="secondary">
            Secondary
          </Button>
        </Box>
        <Box>
          <Button m={1} disabled={false} variant="text" color="default">
            Default
          </Button>
          <Button m={1} disabled={true} variant="text" color="default">
            Default
          </Button>
        </Box>
        <Box>
          <Button m={1} disabled={false} variant="text" color="primary">
            Primary
          </Button>
          <Button m={1} disabled={true} variant="text" color="primary">
            Primary
          </Button>
        </Box>
        <Box>
          <Button m={1} disabled={false} variant="text" color="secondary">
            Secondary
          </Button>
          <Button m={1} disabled={true} variant="text" color="secondary">
            Secondary
          </Button>
        </Box>
      </>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})

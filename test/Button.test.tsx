import React, { RefObject } from 'react'
import { renderLight, renderDark, userEvent } from './setupTests'
import { Box, Button } from '../src'

it('renders light without crashing', () => {
  const { asFragment } = renderLight(<Button />)
  expect(asFragment()).toMatchSnapshot()
})

it('renders dark without crashing', () => {
  const { asFragment } = renderDark(<Button />)
  expect(asFragment()).toMatchSnapshot()
})

it('expect click to call handler', () => {
  const text = 'Test'
  const onClick = jest.fn()
  const { getByText } = renderLight(<Button onClick={onClick}>{text}</Button>)
  userEvent.click(getByText(text))
  expect(onClick).toHaveBeenCalled()
})

it('expect to pass ref', () => {
  const ref = {} as RefObject<HTMLButtonElement>
  renderLight(<Button ref={ref} />)
  expect(ref.current).toBeTruthy()
})

it('renders all variants', () => {
  const { asFragment } = renderLight(
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

import React from 'react'
import { render } from './test-utils'
import {
  Card,
  CardActionArea,
  CardMedia,
  CardHeader,
  CardContent,
} from '../src'

describe('Box', () => {
  it('renders without crashing', () => {
    const { asFragment } = render(
      <Card>
        <CardActionArea>
          <CardMedia
            height="120px"
            image="data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7"
            title="Committed image"
          />
          <CardHeader>Full Card Action</CardHeader>
          <CardContent>
            <p>The whole card can be an action area</p>
          </CardContent>
        </CardActionArea>
      </Card>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})

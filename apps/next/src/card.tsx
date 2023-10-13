import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeading,
  CardLeadIn,
  CardSubheading,
  IconButton,
  Inline,
  Svg,
  Text,
} from '@committed/ds'
import { css } from '@committed/ds-ss'
import { mdiComment, mdiOpenInNew, mdiPencil, mdiThumbUp } from '@mdi/js'

export const CardExample = () => (
  <Inline wrap>
    <Card>
      <CardHeading>
        Heading
        <IconButton variant="text">
          <Svg path={mdiPencil} />
        </IconButton>
      </CardHeading>
      <CardContent>
        <Text>Lorem Ipsum is simply dummy text...</Text>
      </CardContent>
      <CardActions>
        <Button variant="solid" colorPalette="$primary">
          Action
        </Button>
      </CardActions>
    </Card>
    <Card>
      <CardHeading>
        Heading
        <IconButton variant="text">
          <Svg path={mdiPencil} />
        </IconButton>
      </CardHeading>
      <CardSubheading>Subheading</CardSubheading>
      <CardContent>
        <Text>Lorem Ipsum is simply dummy text...</Text>
      </CardContent>
      <CardActions>
        <Button variant="text" color="neutral">
          Cancel
        </Button>
        <Button variant="solid" color="primary">
          Action
        </Button>
      </CardActions>
    </Card>
    <Card>
      <CardLeadIn>
        Lead in
        <IconButton path={mdiPencil} variant="text" />
      </CardLeadIn>
      <CardHeading asChild>
        <h3>Header</h3>
      </CardHeading>
      <CardContent>
        <Text>Lorem Ipsum is simply dummy text...</Text>
      </CardContent>
      <CardActions justifyContent="flex-start">
        <IconButton
          path={mdiThumbUp}
          variant="text"
          className={css({
            color: 'info',
          })}
        />
        <IconButton
          path={mdiOpenInNew}
          variant="text"
          className={css({
            color: '$text.secondary',
          })}
        />
        <IconButton
          path={mdiComment}
          variant="text"
          className={css({
            color: '$text.secondary',
          })}
        />
      </CardActions>
    </Card>
  </Inline>
)

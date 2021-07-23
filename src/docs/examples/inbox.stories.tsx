import { mdiDelete, mdiFastForward, mdiReply, mdiReplyAll } from '@mdi/js'
import React from 'react'
import {
  AppBar,
  AppBarActions,
  AppBarHeading,
  Avatar,
  Box,
  Card,
  CardBody,
  darkTheme,
  IconButton,
  lightTheme,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paragraph,
  Row,
  Svg,
  ThemeProvider,
  ThemeSwitch,
} from '../../'
import { randomColor } from '../util'

const Delete: React.FC<React.ComponentProps<typeof Svg>> = (props) => (
  <Svg path={mdiDelete} {...props} />
)
const FastForward: React.FC<React.ComponentProps<typeof Svg>> = (props) => (
  <Svg path={mdiFastForward} {...props} />
)
const Reply: React.FC<React.ComponentProps<typeof Svg>> = (props) => (
  <Svg path={mdiReply} {...props} />
)
const ReplyAll: React.FC<React.ComponentProps<typeof Svg>> = (props) => (
  <Svg path={mdiReplyAll} {...props} />
)

export default {
  title: 'Examples/Inbox',
}

export const Inbox = () => {
  const Header = () => (
    <AppBar css={{ position: 'relative' }}>
      <Avatar css={{ mr: '$3' }} src="https://i.pravatar.cc/40" />
      <AppBarHeading>Inbox</AppBarHeading>
      <AppBarActions>
        <ThemeSwitch />
      </AppBarActions>
    </AppBar>
  )

  const Actions = () => (
    <Row css={{ position: 'absolute', right: '$6' }}>
      <Box css={{ flexGrow: 1 }} />
      <IconButton variant="tertiary">
        <Delete />
      </IconButton>
      <IconButton variant="tertiary">
        <Reply />
      </IconButton>
      <IconButton variant="tertiary">
        <ReplyAll />
      </IconButton>
      <IconButton variant="tertiary">
        <FastForward />
      </IconButton>
    </Row>
  )

  const Email = () => (
    <Box css={{ mx: '$3', my: '$1' }}>
      <Box css={{ my: '$1', p: '$4', backgroundColor: '$paper' }}>
        <Actions />
        <ListItem>
          <ListItemIcon>
            <Avatar css={{ m: '$1', backgroundColor: randomColor() }}>
              CC
            </Avatar>
          </ListItemIcon>
          <ListItemText
            text={'This is the best email ever'}
            subtext="test@committed.test"
          />
        </ListItem>
        <CardBody>
          <Paragraph weight="bold" css={{ textTransform: 'uppercase' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            accusantium dicta quo eveniet, nesciunt unde quam dolorum accusamus
            omnis eligendi similique id hic.
          </Paragraph>
          <img src={`https://picsum.photos/300/200?random=1`} />
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            accusantium dicta quo eveniet, nesciunt unde quam dolorum accusamus
            omnis eligendi similique id hic. Qui voluptates modi soluta facilis
            ullam maiores.
          </Paragraph>
          <img src={`https://picsum.photos/300/200?random=2`} />
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            accusantium dicta quo eveniet, nesciunt unde quam dolorum accusamus
            omnis eligendi similique id hic. Qui voluptates modi soluta facilis
            ullam maiores.
          </Paragraph>
        </CardBody>
      </Box>
    </Box>
  )

  const EmailItem = ({
    initials,
    subject,
    from,
  }: {
    initials: string
    subject: string
    from: string
  }) => (
    <ListItem css={{}} key={subject}>
      <ListItemIcon>
        <Avatar css={{ my: '$5', size: '$6' }} backgroundColor={randomColor()}>
          {initials}
        </Avatar>
      </ListItemIcon>
      <ListItemText text={subject} subtext={from} />
    </ListItem>
  )

  const Emails = () => (
    <Box>
      <Card css={{ height: '100%' }}>
        <List>
          <EmailItem
            initials="CF"
            from="opensource@committed.test"
            subject="Checkout Components"
          />
          <EmailItem
            initials="SH"
            from="test@committed.test"
            subject="Checkout Components!!!"
          />
          <EmailItem
            initials="JE"
            from="je@committed.test"
            subject="Checkout Components 🎉🎉🎉"
          />
          <EmailItem
            initials="ST"
            from="st@committed.test"
            subject="Checkout Components!🎉"
          />
          <EmailItem
            initials="MC"
            from="mc@committed.test"
            subject="Checkout Components ✨✨✨"
          />
          <EmailItem
            initials="KA"
            from="ka@committed.test"
            subject="🔥🔥🔥 Checkout Components"
          />
        </List>
      </Card>
    </Box>
  )

  return (
    <ThemeProvider light={lightTheme} dark={darkTheme}>
      <Box
        css={{
          position: 'relative',
          minHeight: '50vh',
          backgroundColor: '$background',
        }}
      >
        <Header />
        <Row>
          <Emails />
          <Email />
        </Row>
      </Box>
    </ThemeProvider>
  )
}

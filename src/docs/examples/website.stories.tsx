import { mdiEmail, mdiPhone } from '@mdi/js'
import { Story } from '@storybook/react'
import React from 'react'
import {
  AppBar,
  AppBarActions,
  AppBarButton,
  AppBarHeading,
  Avatar,
  Box,
  Card,
  CardBody,
  Column,
  Container,
  Divider,
  Flex,
  Heading,
  Link,
  Paragraph,
  Row,
  Spinner,
  Svg,
  Text,
  ThemeProvider,
  ThemeSwitch,
} from '../../'

const Email: React.FC<React.ComponentProps<typeof Svg>> = (props) => (
  <Svg path={mdiEmail} {...props} />
)

const Call: React.FC<React.ComponentProps<typeof Svg>> = (props) => (
  <Svg path={mdiPhone} {...props} />
)

export default {
  title: 'Examples/Website',
}

const footerHeight = '200px'

export const Website: Story = () => {
  const Header = () => (
    <AppBar css={{ position: 'relative' }}>
      <AppBarHeading>Website</AppBarHeading>
      <AppBarActions>
        <Avatar src="https://i.pravatar.cc/40" />
        <ThemeSwitch css={{ my: 'auto', mx: '$3' }} />
        <AppBarButton>Logout</AppBarButton>
      </AppBarActions>
    </AppBar>
  )

  const Post = ({ name, index }: { name: string; index: number }) => (
    <Card
      css={{
        m: '$5',
        backgroundColor: '$primary !important',
        color: '$primaryContrast !important',
      }}
      variant="ghost"
      interactive
    >
      <img src={`https://picsum.photos/300/200?random=${index}`} />
      <CardBody>{name}</CardBody>
    </Card>
  )

  const Content = () => (
    <Container>
      <Heading
        font="display"
        css={{ m: '$6', display: 'block', textAlign: 'center' }}
      >
        Our work and Open Source
      </Heading>
      <Paragraph css={{ m: '$3', textAlign: 'center' }}>
        We believe we can all move forward faster by being open. Learn more
        about our contributions.
      </Paragraph>
      <Divider css={{ my: '$3' }} />
      <Flex
        css={{
          justifyContent: 'center',
          alignContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        {[
          'Speedy Spotless',
          'ARGA',
          'Eastern Galaxy',
          'Pribox',
          'Rejux',
          'Baleen',
        ].map((name, index) => (
          <Post key={name} name={name} index={index} />
        ))}
      </Flex>
      <Box css={{ mb: '$5' }}>
        <Spinner
          css={{ size: '$8', display: 'block', mx: 'auto', color: '$grey4' }}
        />
      </Box>
    </Container>
  )

  const Logo = () => (
    <img
      width="128px"
      src="https://committed.software/Committed_Dark.svg"
      alt="Committed Logo"
    />
  )

  const Footer = () => (
    <Row
      css={{
        p: '$5',
        position: 'absolute',
        bottom: '0',
        width: '100%',
        height: footerHeight,
        justifyContent: 'space-around',
        backgroundColor: '$brand',
        color: '$brandContrast',
      }}
    >
      <Column css={{ justifyContent: 'center', alignItems: 'center' }}>
        <Logo />
      </Column>
      <Column css={{ gap: '$3', color: '$white' }}>
        <Link>Work</Link>
        <Link>Blog</Link>
        <Link>Careers</Link>
        <Link>Contact</Link>
      </Column>
      <Column>
        <Flex css={{ p: '$3' }}>
          <Box css={{ p: '$1' }}>
            <Call />
          </Box>
          <Text css={{ color: '$white', p: '$1' }}>(+44) 01242 220 347</Text>
        </Flex>
        <Flex css={{ p: '$3' }}>
          <Box css={{ p: '$1' }}>
            <Email />
          </Box>
          <Text css={{ color: '$white', p: '$1' }}>contct@committed.io</Text>
        </Flex>
      </Column>
      <Column>
        <Text css={{ color: '$white' }}>3 Strand Court</Text>
        <Text css={{ color: '$white' }}>Bath Road</Text>
        <Text css={{ color: '$white' }}>Cheltenham</Text>
        <Text css={{ color: '$white' }}>Gloucestershire</Text>
        <Text css={{ color: '$white' }}>GL53 7LW</Text>
      </Column>
    </Row>
  )

  return (
    <ThemeProvider>
      <Box
        css={{
          position: 'relative',
          maxHeight: '80vh',
          backgroundColor: '$paper',
        }}
      >
        <Box css={{ pb: footerHeight, maxHeight: '80vh', overflow: 'scroll' }}>
          <Header />
          <Content />
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  )
}

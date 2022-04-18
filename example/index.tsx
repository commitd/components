import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as C from '../dist/committed-components.cjs.js'
import { mdiPhone, mdiEmail } from '@mdi/js'

const footerHeight = '200px'

const Header = () => (
  <C.AppBar css={{ position: 'relative' }}>
    <C.AppBarHeading>
      <C.Avatar src="https://i.pravatar.cc/40" /> Example
    </C.AppBarHeading>
    <C.AppBarActions>
      <C.ThemeSwitch />

      <C.ConfirmDialog>
        <C.ConfirmDialogTrigger>
          <C.AppBarButton>Logout</C.AppBarButton>
        </C.ConfirmDialogTrigger>
        <C.ConfirmDialogContent
          description="Are you sure you want to logout?"
          title="Confirm Dialog"
        >
          <C.ConfirmDialogActions confirm="Yes" />
        </C.ConfirmDialogContent>
      </C.ConfirmDialog>
    </C.AppBarActions>
  </C.AppBar>
)

const Post = ({ name, index }: { name: string; index: number }) => (
  <C.Card css={{ m: '$5' }}>
    <C.Column
      css={{
        backgroundColor: '$primary',
      }}
    >
      <img
        alt="example"
        src={`https://picsum.photos/300/200?random=${index}`}
      />
      <C.Box css={{ p: '$4', pb: '$3' }}>
        <C.Text
          weight="bold"
          css={{ textTransform: 'uppercase', color: '$primaryContrast' }}
        >
          {name}
        </C.Text>
      </C.Box>
    </C.Column>
  </C.Card>
)

const Content = () => (
  <C.Container>
    <C.Column css={{ alignItems: 'center' }}>
      <C.Heading
        variants="h1"
        css={{ p: '$4', align: 'center' }}
        font="display"
      >
        Our work and Open Source
      </C.Heading>
      <C.Text align="center">
        We believe we can all move forward faster by being open. Learn more
        about our contributions.
      </C.Text>
      <C.Divider my={3} />
      <C.Flex
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
      </C.Flex>
      <C.Spinner
        css={{ size: '128px', color: '$grey3 !important', mb: '$5' }}
      />
    </C.Column>
  </C.Container>
)

const Logo = () => {
  const [choice] = C.useThemeController()
  const logo =
    choice == 'light'
      ? 'https://committed.software/Committed_Dark.png'
      : 'https://committed.software/Committed_Light.png'
  return <img width="128px" src={logo} alt="Committed Logo" />
}

const Footer = () => (
  <C.Row
    css={{
      p: '$3',
      position: 'absolute',
      bottom: '0',
      width: '100%',
      height: footerHeight,
      justifyContent: 'space-around',
      backgroundColor: '$primary',
      color: '$primaryContrast',
    }}
  >
    <C.Column css={{ justifyContent: 'center', alignItems: 'center' }}>
      <Logo />
    </C.Column>
    <C.Column>
      <C.Heading variant="h5">Links</C.Heading>
      <C.Link>Work</C.Link>
      <C.Link>Blog</C.Link>
      <C.Link>Careers</C.Link>
      <C.Link>Contact</C.Link>
    </C.Column>
    <C.Column>
      <C.Flex css={{ p: '$3' }}>
        <C.Box css={{ p: '$1' }}>
          <C.Svg path={mdiPhone} />
        </C.Box>
        <C.Text css={{ p: '$1', color: 'inherit' }}>(+44) 01242 220 347</C.Text>
      </C.Flex>
      <C.Flex css={{ p: '$3' }}>
        <C.Box css={{ p: '$1' }}>
          <C.Svg path={mdiEmail} />
        </C.Box>
        <C.Text css={{ p: '$1', color: 'inherit' }}>contct@committed.io</C.Text>
      </C.Flex>
    </C.Column>
    <C.Column>
      <C.Heading variant="h5" mb={0}>
        Address
      </C.Heading>
      <C.Text css={{ color: 'inherit' }}>3 Strand Court</C.Text>
      <C.Text css={{ color: 'inherit' }}>Bath Road</C.Text>
      <C.Text css={{ color: 'inherit' }}>Cheltenham</C.Text>
      <C.Text css={{ color: 'inherit' }}>Gloucestershire</C.Text>
      <C.Text css={{ color: 'inherit' }}>GL53 7LW</C.Text>
    </C.Column>
  </C.Row>
)

const App = () => (
  <C.ThemeProvider>
    <C.Box
      css={{ position: 'relative', minHeight: '100vh', background: '$paper' }}
    >
      <C.Box css={{ pb: footerHeight }}>
        <Header />
        <Content />
      </C.Box>
      <Footer />
    </C.Box>
  </C.ThemeProvider>
)

ReactDOM.render(<App />, document.getElementById('root'))

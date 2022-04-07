import {
  mdiAbTesting,
  mdiAlarm,
  mdiCart,
  mdiChat,
  mdiClipboardAccount,
  mdiDelete,
  mdiEmail,
  mdiEmailEdit,
  mdiFolder,
  mdiInbox,
  mdiPlay,
  mdiSkipNext,
  mdiSkipPrevious,
} from '@mdi/js'
import React from 'react'
import * as C from '../../index'

export default {
  title: 'Examples/Overview',
}

const ComponentCard = C.styled(C.Card, {
  display: 'flex',
  flexDirection: 'row',
  flexGrow: 1,
  gap: '$3',
  p: '$3',
  m: '$1',
  justifyContent: 'space-evenly',
})

const ComponentColumn = C.styled(C.Column, {
  gap: '$3',
})

export const Overview: Story = () => (
  <C.Column>
    <C.Caption>
      <C.Link href="/components/?path=/docs/components-button--default-story">
        Buttons
      </C.Link>
    </C.Caption>
    <C.Column css={{ flexWrap: 'wrap' }}>
      <ComponentCard>
        <ComponentColumn>
          <C.Button variant="primary">Primary</C.Button>
          <C.Button variant="secondary">Secondary</C.Button>
          <C.Button variant="tertiary">Tertiary</C.Button>
        </ComponentColumn>
        <ComponentColumn>
          <C.Button destructive variant="primary">
            Primary
          </C.Button>
          <C.Button destructive variant="secondary">
            Secondary
          </C.Button>
          <C.Button destructive variant="tertiary">
            Tertiary
          </C.Button>
        </ComponentColumn>
        <ComponentColumn>
          <C.Button disabled variant="primary">
            Primary
          </C.Button>
          <C.Button disabled variant="secondary">
            Secondary
          </C.Button>
          <C.Button disabled variant="tertiary">
            Tertiary
          </C.Button>
        </ComponentColumn>
      </ComponentCard>
      <C.Caption>
        <C.Link href="/components/?path=/docs/components-iconbutton--default-story">
          Icon Buttons
        </C.Link>
      </C.Caption>
      <ComponentCard>
        <C.IconButton
          path={mdiDelete}
          variant="tertiary"
          destructive
          aria-label="delete"
        />
        <C.IconButton
          path={mdiDelete}
          aria-label="delete"
          disabled
          variant="primary"
        />
        <C.IconButton
          path={mdiAlarm}
          variant="secondary"
          aria-label="add an alarm"
        />
        <C.IconButton
          path={mdiCart}
          variant="primary"
          aria-label="add to shopping cart"
        />
      </ComponentCard>
      <C.Caption>
        <C.Link href="/components/?path=/docs/components-badge--default-story">
          Badges
        </C.Link>
      </C.Caption>
      <ComponentCard>
        <C.Badge content={'default'}>
          <C.IconButton path={mdiEmail} variant="tertiary" />
        </C.Badge>
        <C.Badge variant="primary" content={4}>
          <C.IconButton path={mdiEmail} variant="tertiary" />
        </C.Badge>
        <C.Badge variant="success" content={87}>
          <C.IconButton path={mdiEmail} variant="tertiary" />
        </C.Badge>
        <C.Badge variant="error" content={1000} max={999}>
          <C.IconButton path={mdiEmail} variant="tertiary" />
        </C.Badge>
      </ComponentCard>
    </C.Column>
    <C.Caption>
      <C.Link href="/components/?path=/docs/components-avatar--default-story">
        Avatars
      </C.Link>
    </C.Caption>
    <ComponentCard>
      <C.Avatar src="https://i.pravatar.cc/40" />
      <C.Avatar backgroundColor="$primary" color="$primaryContrast">
        CF
      </C.Avatar>
      <C.Avatar backgroundColor="$success" color="$successContrast">
        SH
      </C.Avatar>
      <C.Avatar>
        <C.Svg path={mdiFolder} />
      </C.Avatar>
      <C.Avatar backgroundColor="$black" color="$white">
        <C.Svg path={mdiAbTesting} />
      </C.Avatar>
      <C.Avatar backgroundColor="$primaryHover" color="$text">
        <C.Svg path={mdiClipboardAccount} />
      </C.Avatar>
    </ComponentCard>
    <C.Caption>
      <C.Link href="/components/?path=/docs/components-chip--default-story">
        Chips
      </C.Link>
    </C.Caption>
    <ComponentCard>
      <C.Chip variant="info" onClose={() => {}}>
        Chip
      </C.Chip>
      <C.Chip variant="info">Chip</C.Chip>
      <C.Chip
        variant="success"
        interactive
        as="button"
        onClick={() => {}}
        onClose={() => {}}
      >
        Chip
      </C.Chip>
      <C.Chip as="a" interactive variant="warning" onClick={() => {}}>
        Chip
      </C.Chip>
    </ComponentCard>
    <C.Caption>
      <C.Link href="/components/?path=/docs/components-input--simple">
        Input
      </C.Link>
    </C.Caption>
    <ComponentCard css={{ justifyContent: 'flex-start' }}>
      {React.createElement(() => {
        const currencies = [
          {
            value: 'USD',
            label: '$',
          },
          {
            value: 'EUR',
            label: '€',
          },
          {
            value: 'BTC',
            label: '฿',
          },
          {
            value: 'JPY',
            label: '¥',
          },
        ]
        const [values, setValues] = React.useState({
          name: 'Cat in the Hat',
          age: '',
          multiline: 'Controlled',
          currency: 'EUR',
        })
        const handleChange = (name: string) => (newValue: string) =>
          setValues({ ...values, [name]: newValue })
        return (
          <form noValidate autoComplete="off">
            <C.Flex css={{ flexWrap: 'wrap', alignContent: 'space-between' }}>
              <C.Input
                id="standard-name"
                label="Name"
                value={values.name}
                onValueChange={handleChange('name')}
              />
              <C.Input
                id="standard-uncontrolled"
                label="Uncontrolled"
                defaultValue="foo"
              />
              <C.Input
                required
                id="standard-required"
                label="Required"
                defaultValue="Hello World"
              />
              <C.Input
                state="invalid"
                id="standard-error"
                label="Error"
                defaultValue="Hello World"
              />
              <C.Input
                disabled
                id="standard-disabled"
                label="Disabled"
                defaultValue="Hello World"
              />
              <C.Input
                id="standard-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
              />
              <C.TextArea
                id="standard-multiline-flexible"
                label="Multiline"
                value={values.multiline}
                onValueChange={handleChange('multiline')}
              />
              <C.TextArea
                state="valid"
                id="standard-multiline-static"
                label="Valid Multiline"
                defaultValue="Default Value"
                css={{ minHeight: '250px' }}
              />
              <C.Input
                id="standard-read-only-input"
                label="Read Only"
                defaultValue="Hello World"
                readOnly
              />
              <C.Input
                id="standard-helperText"
                label="Placeholder"
                placeholder="Some placeholder"
              />
              <C.Input
                id="standard-number"
                label="Number"
                value={values.age}
                onValueChange={handleChange('age')}
                type="number"
              />
              <C.Select
                id="standard-select-currency"
                label="Select"
                value={values.currency}
                onValueChange={handleChange('currency')}
                placeholder="Please select your currency"
              >
                {currencies.map((option) => (
                  <C.SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </C.SelectItem>
                ))}
              </C.Select>
            </C.Flex>
          </form>
        )
      })}
    </ComponentCard>
    <C.Caption>
      <C.Link href="/components/?path=/docs/components-checkbox--default-story">
        Checkbox
      </C.Link>
      ,{' '}
      <C.Link href="/components/?path=/docs/components-radio--default-story">
        Radio
      </C.Link>{' '}
      and{' '}
      <C.Link href="/components/?path=/docs/components-switch--default-story">
        Switch
      </C.Link>
    </C.Caption>
    {React.createElement(() => {
      const [checked, setChecked] = React.useState(true)
      return (
        <ComponentCard>
          <ComponentColumn>
            <C.Checkbox
              label="True"
              checked={checked}
              onCheckedChange={() => setChecked(!checked)}
              variant="primary"
            />
            <C.Checkbox
              label="False"
              checked={!checked}
              onCheckedChange={() => setChecked(!checked)}
              variant="secondary"
            />
          </ComponentColumn>
          <C.RadioGroup
            value={`${checked}`}
            onValueChange={() => setChecked(!checked)}
          >
            <C.Radio value={`${true}`} label="True" />
            <C.Radio value={`${false}`} label="False" />
          </C.RadioGroup>
          <ComponentColumn>
            <C.Switch
              checked={checked}
              onCheckedChange={() => setChecked(!checked)}
              variant="primary"
            />
            <C.Switch
              checked={!checked}
              onCheckedChange={() => setChecked(!checked)}
              variant="secondary"
              destructive
            />
          </ComponentColumn>
        </ComponentCard>
      )
    })}
    <C.Caption>
      <C.Link href="/components/?path=/docs/components-slider--default-story">
        Slider
      </C.Link>
    </C.Caption>
    <ComponentCard css={{ width: '100%' }}>
      <C.Slider aria-labelledby="continuous-slider" />
      <C.Slider defaultValue={[80]} step={10} />
      <C.Slider value={[30]} disabled />
      <C.Slider defaultValue={[30, 60]} />
    </ComponentCard>
    <C.Caption>
      <C.Link href="/components/?path=/docs/components-list--default-story">
        Lists
      </C.Link>
    </C.Caption>
    <ComponentCard>
      <C.Box css={{ minWidth: '500px', m: '$3', backgroundColor: '$paper' }}>
        <C.List as="nav" aria-label="main mailbox folders">
          <C.ListItem interactive>
            <C.ListItemIcon>
              <C.Svg path={mdiInbox} />
            </C.ListItemIcon>
            <C.ListItemText text="Inbox" />
          </C.ListItem>
          <C.ListItem interactive>
            <C.ListItemIcon>
              <C.Svg path={mdiEmailEdit} />
            </C.ListItemIcon>
            <C.ListItemText text="Drafts" />
          </C.ListItem>
        </C.List>
        <C.Divider />
        <C.List as="nav" aria-label="secondary mailbox folders">
          <C.ListItem interactive>
            <C.ListItemText text="Trash" />
          </C.ListItem>
          <C.ListItem interactive>
            <C.ListItemText text="Spam" />
          </C.ListItem>
        </C.List>
      </C.Box>
    </ComponentCard>
    <ComponentCard>
      <C.Box css={{ minWidth: '500px', m: '$3', backgroundColor: '$paper' }}>
        <C.List>
          {['18 June 2014', '20 July 2015', '3 January 2018'].map(
            (item, index) => (
              <C.ListItem key={index} role={undefined} interactive>
                <C.ListItemIcon>
                  <C.Checkbox tabIndex={-1} aria-labelledby={'1'} />
                </C.ListItemIcon>
                <C.ListItemText
                  id={'' + index}
                  text={`Line item ${index + 1}`}
                  subtext={item}
                />
                <C.ListItemSecondaryAction>
                  <C.IconButton path={mdiChat} />
                </C.ListItemSecondaryAction>
              </C.ListItem>
            )
          )}
        </C.List>
      </C.Box>
    </ComponentCard>
    <C.Caption>
      <C.Link href="/components/?path=/docs/components-card--default-story">
        Cards
      </C.Link>
    </C.Caption>
    <C.Card>
      <C.CardHeading>Committed Card</C.CardHeading>
      <C.CardBody>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Id nibh tortor id
        aliquet lectus. Feugiat nibh sed pulvinar proin gravida hendrerit
        lectus. Facilisis magna etiam tempor orci eu lobortis elementum.
      </C.CardBody>
      <C.CardActions>
        <C.Button variant="tertiary">Yes</C.Button>
        <C.Button variant="tertiary">No</C.Button>
      </C.CardActions>
    </C.Card>
    {/* <C.Card m={3} elevation={6}>
        <C.CardHeading css={{ color: '$successContrast' }}>Card</C.CardHeading>
        <C.CardActions>
          <C.Checkbox
            icon={<C.Svg path={mdiHeartOutline} css={{ color: '$grey6' }} />}
            checkedIcon={<C.Svg path={mdiHeart} css={{ color: '$red8' }} />}
          />
          <C.Checkbox
            icon={<C.Svg path={mdiBookmarkOutline} css={{ color: '$grey6' }} />}
            checkedIcon={<C.Svg path={mdiBookmark} css={{ color: '$info8' }} />}
          />
          <C.IconButton path={mdiShareVariant} />
        </C.CardActions>
      </C.Card> */}
    <C.Card css={{ mx: 'auto', my: '$3' }}>
      <C.CardHeading>Title</C.CardHeading>
      <C.CardSubheading>Subtitle</C.CardSubheading>
      <C.CardBody css={{ alignItems: 'center', p: '$3' }}>
        <C.Flex css={{ justifyContent: 'space-evenly' }}>
          <C.IconButton variant="tertiary" path={mdiSkipPrevious} />
          <C.IconButton variant="tertiary">
            <C.Svg path={mdiPlay} css={{ size: '$6' }} />
          </C.IconButton>
          <C.IconButton variant="tertiary" path={mdiSkipNext} />
        </C.Flex>
      </C.CardBody>
      <img
        width="200px"
        height="200px"
        src="https://picsum.photos/id/645/200/200"
        title="Picsum"
      />
    </C.Card>
    <C.Caption>
      <C.Link href="/components/?path=/docs/components-table--default-story">
        Tables
      </C.Link>
    </C.Caption>
    <ComponentCard>
      <C.Box css={{ m: '$2', p: '$3', backgroundColor: '$paper' }}>
        <C.Table striped>
          <C.TableHead>
            <C.TableRow>
              <C.TableCell>Dessert (100g serving)</C.TableCell>
              <C.TableCell>Calories</C.TableCell>
              <C.TableCell>Fat&nbsp;(g)</C.TableCell>
              <C.TableCell>Carbs&nbsp;(g)</C.TableCell>
              <C.TableCell>Protein&nbsp;(g)</C.TableCell>
            </C.TableRow>
          </C.TableHead>
          <C.TableBody>
            {[
              ['Frozen yoghurt', 159, 6.0, 24, 4.0],
              ['Ice cream sandwich', 237, 9.0, 37, 4.3],
              ['Eclair', 262, 16.0, 24, 6.0],
              ['Cupcake', 305, 3.7, 67, 4.3],
              ['Gingerbread', 356, 16.0, 49, 3],
            ].map((row) => (
              <C.TableRow key={row[0]} align="right">
                <C.TableCell as="th" align="left" scope="row">
                  {row[0]}
                </C.TableCell>
                <C.TableCell>{row[1]}</C.TableCell>
                <C.TableCell>{row[2]}</C.TableCell>
                <C.TableCell>{row[3]}</C.TableCell>
                <C.TableCell>{row[4]}</C.TableCell>
              </C.TableRow>
            ))}
          </C.TableBody>
        </C.Table>
      </C.Box>
    </ComponentCard>
    <C.Caption>
      <C.Link href="/components/?path=/docs/components-tabs--appbar">
        Tabs
      </C.Link>
    </C.Caption>
    <ComponentCard>
      <C.TabsRoot defaultValue="tab1" variant="primary">
        <C.TabsList>
          <C.Tab value="tab1">One</C.Tab>
          <C.Tab value="tab2">Two</C.Tab>
          <C.Tab value="tab3">Three</C.Tab>
        </C.TabsList>
        <C.TabContent value="tab1">Tab one content</C.TabContent>
        <C.TabContent value="tab2">Tab two content</C.TabContent>
        <C.TabContent value="tab3">Tab three content</C.TabContent>
      </C.TabsRoot>
    </ComponentCard>
    <C.Caption>
      <C.Link href="/components/?path=/docs/design-system-typography--typography">
        Text
      </C.Link>
    </C.Caption>
    <ComponentCard
      css={{
        width: '100%',
        overflow: 'none',
      }}
    >
      <C.Column
        css={{
          width: '100%',
          overflow: 'auto',
        }}
      >
        <C.Text>System Text</C.Text>
        <C.Heading variant="h2">h2. Heading</C.Heading>
        <C.Heading variant="h3">h3. Heading</C.Heading>
        <C.Heading variant="h4">h4. Heading</C.Heading>
        <C.Subheading variant="h3">
          subheading. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Quos blanditiis tenetur
        </C.Subheading>
        <C.Text>
          Text. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur.
        </C.Text>
        <C.Caption>
          Caption. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur.
        </C.Caption>
        <C.Text>Display Text</C.Text>
        <C.Heading font="display" variant="h1">
          d1. Heading
        </C.Heading>
        <C.Heading font="display" variant="h2">
          d2. Heading
        </C.Heading>
        <C.Strike>
          Strike. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur.
        </C.Strike>
        <C.Monospace>
          Monospace. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur.
        </C.Monospace>
      </C.Column>
    </ComponentCard>
  </C.Column>
)

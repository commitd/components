import { Avatar, Box, Chip, Link } from '@committed/ds'
import { css } from '@committed/ds-ss'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFoot,
  TableHead,
  TableRow,
} from '@committed/ds/src/components/Table'
import { faker } from '@faker-js/faker'
import { Meta, StoryFn, StoryObj } from '@storybook/react'
import React from 'react'

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  subcomponents: {
    TableHead,
    TableBody,
    TableFoot,
    TableRow,
    TableCell,
    TableCaption,
  },
  argTypes: {
    striped: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
      description: 'Set the table to have a striped background',
    },
    sticky: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
      description: 'Set the header to be sticky',
    },
    hover: {
      control: {
        type: 'select',
        options: ['row', 'cell'],
      },
      defaultValue: undefined,
      description: 'Set to highlight the hovered row',
    },
  },
}
export default meta
type Story = StoryObj<typeof Table>

type User = {
  id: string
  avatar: string
  username: string
  email: string
  age: number
  visits: number
  progress: number
  status: React.ReactNode
}

function createStatus() {
  const statusChance = faker.number.float({ min: 0, max: 1 })
  if (statusChance > 0.75) {
    return <Chip color="$success">active</Chip>
  }
  if (statusChance > 0.5) {
    return <Chip color="$warn">dormant</Chip>
  }
  if (statusChance > 0.25) {
    return <Chip color="$info">new</Chip>
  }
  return <Chip color="$error">suspended</Chip>
}

function buildUser(): User {
  return {
    id: faker.string.uuid(),
    avatar: faker.internet.avatar(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    age: faker.number.int(100),
    visits: faker.number.int(1000),
    progress: faker.number.int(100),
    status: createStatus(),
  }
}

const users = new Array(5).fill(0).map(buildUser)

export const Default: Story = {
  render: (args) => {
    return (
      <Table css={{ background: '$surface.solid' }} {...args}>
        <thead>
          <tr>
            <th></th>
            <th>Username</th>
            <th>Email</th>
            <th>Age</th>
            <th>Visits</th>
            <th>Progress</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <Avatar alt={user.username} src={user.avatar} />
              </td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
              <td>{user.visits}</td>
              <td>{user.progress}</td>
              <td>{user.status}</td>
              <td>
                <Link href="#">Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    )
  },
}

/**
 * `Table` has props to make the table header sticky.
 * This example is in a fixed height box to demonstrate.
 */
export const Sticky: Story = {
  ...Default,
  args: { sticky: true },
  decorators: [
    (S) => <Box className={css({ height: 200, overflow: 'auto' })}>{S()}</Box>,
  ],
}

/**
 * The `Table` rows can be striped.
 */
export const Striped: Story = {
  ...Default,
  args: { striped: true },
}

/**
 * The rows can highlight on hover.
 */
export const HighlightRows: Story = {
  ...Default,
  args: { striped: true, hover: 'row' },
}

/**
 * The cells can highlight on hover.
 */
export const HighlightCells: Story = {
  ...Default,
  args: { striped: true, hover: 'cell' },
}

/**
 * `TableCell` and `TableRow` have a selected prop to support indicate selection.
 * This must be controlled.
 *
 */
export const Selection: StoryFn = () => {
  const [selected, setSelected] = React.useState<string | null>(null)
  return (
    <Table css={{ background: '$surface.solid' }} hover="row" striped>
      <TableHead>
        <TableRow>
          <TableCell></TableCell>
          <TableCell>Username</TableCell>
          <TableCell>email</TableCell>
          <TableCell>age</TableCell>
          <TableCell>visits</TableCell>
          <TableCell>progress</TableCell>
          <TableCell>status</TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user) => {
          const isSelected = user.id === selected
          return (
            <TableRow
              css={{ cursor: 'pointer' }}
              key={user.id}
              onClick={() =>
                isSelected ? setSelected(null) : setSelected(user.id)
              }
              selected={isSelected}
            >
              <td>
                <Avatar alt={user.username} src={user.avatar} />
              </td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
              <td>{user.visits}</td>
              <td>{user.progress}</td>
              <td>{user.status}</td>
              <td>
                <Link href="#">Edit</Link>
              </td>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}

/**
 * The table supports the standard html subcomponents, as in the first example.
 * However, there are more features available on supplied subcomponents.
 *
 * The `TableCaption`, `TableHead`, `TableBody` and `TableFoot` simply supports the `css` prop incase a particular styling for that part is required. See contrived example.
 *
 */
export const UtilityClasses: StoryFn = (args) => {
  return (
    <Table css={{ background: '$surface.solid' }} {...args}>
      <TableCaption className={css({ fontWeight: '$light' })}>
        A Caption for the table
      </TableCaption>
      <TableHead className={css({ fontFamily: '$monospace' })}>
        <TableRow>
          <TableCell></TableCell>
          <TableCell>Username</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Age</TableCell>
          <TableCell>Visits</TableCell>
          <TableCell>Progress</TableCell>
          <TableCell>Status</TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell>
              <Avatar alt={user.username} src={user.avatar} />
            </TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.age}</TableCell>
            <TableCell>{user.visits}</TableCell>
            <TableCell>{user.progress}</TableCell>
            <TableCell>{user.status}</TableCell>
            <TableCell>
              <Link href="#">Edit</Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFoot
        className={css({
          backgroundColor: '$black',
          color: '$white',
          textAlign: 'center',
        })}
      >
        <TableRow>
          <TableCell colSpan={8}>
            <Link href="#">Documentation</Link>
          </TableCell>
        </TableRow>
      </TableFoot>
    </Table>
  )
}

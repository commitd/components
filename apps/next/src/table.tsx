import { Avatar, Chip, Link } from '@committed/ds'
import { Table } from '@committed/ds/src/components/Table'
import { faker } from '@faker-js/faker'
import React from 'react'

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

export const TableExample = () => (
  <Table surface="solid" striped>
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

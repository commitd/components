# Committed Components

[![Committed Badge](https://img.shields.io/endpoint?url=https%3A%2F%2Fcommitted.software%2Fbadge)](https://committed.io)
[![Build Status](https://drone.committed.software/api/badges/commitd/components/status.svg)](https://drone.committed.software/commitd/components)
[![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg)](https://committed.software/components)

For documentation see https://committed.software/components

## Install

```bash
yarn add @commitd/components
```

## Usage

```tsx
import * as React from 'react'

import { CommitdComponent } from '@commitd/components'

class Example extends React.Component {
  render() {
    return <CommitdComponent />
  }
}
```

## Development

The main build is performed using Rollup:

```bash
yarn build
```

We use storybook to develop and document the components, this is run in development using

```bash
yarn storybook
```

## CI

Pull requests go through CI checks using Drone. Merged pull requests to master update the deployed documentation and can update the package in the GitHub registry if the version number is updated.

## License

© [Committed Software](https://github.com/commitd)

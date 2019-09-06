# Committed Components

![](https://github.com/commitd/components/workflows/Build/badge.svg)
![](https://github.com/commitd/components/workflows/Publish/badge.svg)

For documentation see https://committed.software/components

## Install

```bash
yarn add @commitd/components
```

## Usage

```tsx
import * as React from 'react'

import MyComponent from '@commitd/components'

class Example extends React.Component {
  render() {
    return <MyComponent />
  }
}
```

## Development

The main build is currently performed using Rollup:

```bash
yarn build
```

However, to experiment we currently have a webpack and straight typescript builds, `yarn webpack` and `yarn tsc` respectively.
We expect to down-select later to have a single build system.

We use storybook to develop and document the components, this is run in development using

```bash
yarn storybook
```

## CI

Pull requests go through CI checks using GitHub actions. Merged pull requests to master update the deployed documentation and can update the package in the GitHub registry if the version number is updated.

## License

© [Committed Software](https://github.com/commitd)

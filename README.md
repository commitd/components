# Committed Components

> Committed Component Library

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

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

The main build is currently performed using Rollup and `yarn build`.

However, to experiment we currently have a webpack and straight typescript builds, `yarn webpack` and `yarn tsc` respectively.
We expect to down-select later to have a single build system.

We use storybook to develop and document the components, this is run in development using

```bash
yarn storybook
```

and to create a production version

```bash
yarn build-storybook
```

## License

© [Committed Software](https://github.com/commitd)

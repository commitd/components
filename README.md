# Committed Components

[![Committed Badge](https://img.shields.io/endpoint?url=https%3A%2F%2Fcommitted.software%2Fbadge)](https://committed.io)
[![Build Status](https://drone.committed.software/api/badges/commitd/components/status.svg)](https://drone.committed.software/commitd/components)
[![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg)](https://committed.software/components)

For documentation see https://committed.software/components

## Install

```bash
yarn add @committed/components
```

## Usage

```tsx
import * as React from 'react'

import { Component } from '@committed/components'

class Example extends React.Component {
  render() {
    return <Component />
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

## Dev Containers

This project contains a [VSCode Dev Container Configuration](https://code.visualstudio.com/docs/remote/containers).

To use this, you must install the [VSCode Remote Container Extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers).

Once this is installed, you should be prompted (when opening the project in it's root directory) to `Reopen in Container`. If this prompt does not appear, open the Command Palette and run `Remote Containers: Rebuild and Reopen in Container`.

This will re-open the project, with the project files mounted in a Docker container, which will include all the VSCode extensions from the dev container (e.g. useful extensions, formatters etc).

## CI

Pull requests go through CI checks using Drone. Merged pull requests to master update the deployed documentation and can update the package in the GitHub registry if the version number is updated.

## License

[MIT](/LICENSE) - © Committed Software 2019 https://committed.io

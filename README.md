# Committed Design System

[![Committed Badge](https://img.shields.io/endpoint?url=https%3A%2F%2Fcommitted.io%2Fbadge)](https://committed.io)
![Build Status](https://github.com/commitd/components/workflows/build/badge.svg?branch=main)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=commitd_components&metric=alert_status&token=aa002ca75e2f3a6d028af9074bceeda1ffa2f9f7)](https://sonarcloud.io/dashboard?id=commitd_components)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=commitd_components&metric=coverage&token=aa002ca75e2f3a6d028af9074bceeda1ffa2f9f7)](https://sonarcloud.io/dashboard?id=commitd_components)
![GitHub repo size](https://img.shields.io/github/repo-size/commitd/components)
[![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg)](https://committed.software/components)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

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

We are using npm v7, and due to issues with peer dependencies we are currently required to do

```bash
npm install --force
```

The main build is performed using esbuild:

```bash
npm run build
```

We use storybook to develop and document the components, this is run in development using

```bash
npm run storybook
```

The tests can be run with

```bash
npm test
```

## Dev Containers

This project contains a [VSCode Dev Container Configuration](https://code.visualstudio.com/docs/remote/containers).

To use this, you must install the [VSCode Remote Container Extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers).

Once this is installed, you should be prompted (when opening the project in it's root directory) to `Reopen in Container`. If this prompt does not appear, open the Command Palette and run `Remote Containers: Rebuild and Reopen in Container`.

This will re-open the project, with the project files mounted in a Docker container, which will include all the VSCode extensions from the dev container (e.g. useful extensions, formatters etc).

## CI

Pull requests go through CI checks using Github Actions. Releases update the deployed documentation and update the package in the NPM registry.

## License

[MIT](/LICENSE) - © Committed Software 2019-2022 https://committed.io

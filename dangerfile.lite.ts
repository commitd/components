//import { danger, warn, fail } from 'danger'
import { DangerDSLType } from 'danger'
declare var danger: DangerDSLType
declare function warn(params: string): void

import { includes } from 'lodash'
import * as fs from 'fs'
import * as path from 'path'

const modifiedFiles = danger.git.modified_files
const newFiles = danger.git.created_files
const allFiles = [...modifiedFiles, ...newFiles]

// Keep lockfile up to date
const packageChanged = includes(modifiedFiles, 'package.json')
const lockfileChanged = includes(modifiedFiles, 'package-lock.json')
if (packageChanged && !lockfileChanged) {
  const message =
    'Changes were made to package.json, but not to package-lock.json'
  const idea = 'Perhaps you need to run `yarn install` or commit the lockfile?'
  warn(`${message} - <i>${idea}</i>`)
}
if (!packageChanged && lockfileChanged) {
  const message =
    'Changes were made to package-lock.json, but not to package.json'
  const idea = 'Perhaps you need to commit the package.json?'
  warn(`${message} - <i>${idea}</i>`)
}

// Request changes to src also include changes to tests.
const hasSrcChanges = allFiles.some((p) => includes(p, '.tsx'))
const hasStoriesChanges = allFiles.some((p) => includes(p, '.stories.'))

if (hasSrcChanges && !hasStoriesChanges) {
  warn(
    'This PR does not include changes to stories, even though it affects app code.'
  )
}

const storiesFolderPath = 'src/components'
const hasStories = (folderName) =>
  fs
    .readdirSync(path.join(storiesFolderPath, folderName))
    .filter((f) => f.includes('.stories.')).length > 0

// A component should have a corresponding story
// Start with a full list of all Components folders, then look
// through contents for a stories file
const componentsFolderPath = 'src/components'

const isDirectory = (fileName) => {
  return fs.lstatSync(path.join(componentsFolderPath, fileName)).isDirectory()
}

const components = fs.readdirSync(componentsFolderPath).filter(isDirectory)

components.forEach((component) => {
  if (!hasStories(component)) {
    fail(`Could not find stories for component: ${component}`)
  }
})

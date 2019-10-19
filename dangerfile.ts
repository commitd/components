import { danger, warn } from 'danger'
import { includes } from 'lodash'
import spellcheck from 'danger-plugin-spellcheck'

// No PR is too small to include a description of why you made a change
if (danger.github.pr.body.length < 10) {
  warn('Please include a description of your PR changes.')
}

// Check that someone has been assigned to this PR
if (danger.github.pr.assignee === null) {
  warn(
    'Please assign someone to merge this PR, and optionally include people who should review.'
  )
}

const modifiedFiles = danger.git.modified_files
const newFiles = danger.git.created_files
const allFiles = [...modifiedFiles, ...newFiles]

// Keep lockfile up to date
const packageChanged = includes(modifiedFiles, 'package.json')
const lockfileChanged = includes(modifiedFiles, 'yarn.lock')
if (packageChanged && !lockfileChanged) {
  const message = 'Changes were made to package.json, but not to yarn.lock'
  const idea = 'Perhaps you need to run `yarn install` or commit the lockfile?'
  warn(`${message} - <i>${idea}</i>`)
}
if (!packageChanged && lockfileChanged) {
  const message = 'Changes were made to yarn.lock, but not to package.json'
  const idea = 'Perhaps you need to commit the package.json?'
  warn(`${message} - <i>${idea}</i>`)
}

// Request changes to src also include changes to tests.
const hasSrcChanges = allFiles.some(p => includes(p, '.tsx'))
const hasStoriesChanges = allFiles.some(p => includes(p, '.stories.'))

if (hasSrcChanges && !hasStoriesChanges) {
  warn(
    'This PR does not include changes to stories, even though it affects app code.'
  )
}

spellcheck({ settings: 'spellcheck.json' })

import { danger, warn } from 'danger'
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

spellcheck({ settings: 'spellcheck.json' })

// Re-run the danger lite
import './dangerfile.lite'

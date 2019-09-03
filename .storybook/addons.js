import '@storybook/addon-docs/register'
import '@storybook/addon-actions/register'
import '@storybook/addon-links/register'
import '@storybook/addon-a11y/register'
import { STORY_CHANGED } from '@storybook/core-events'

import addonAPI from '@storybook/addons'

let firstLoad = true
addonAPI.register('committed/components', storybookAPI => {
  // This doesn't currently work due to a bug in storybook
  // storybookAPI.on(STORY_CHANGED, (kind, story) => {
  //   console.log('called')
  //   if (firstLoad) {
  //     firstLoad = false // make sure to set this flag to false, otherwise you will never be able to look at another story.
  //     storybookAPI.selectStory('Design System', 'Introduction')
  //   }
  // })
})

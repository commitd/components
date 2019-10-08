import '@storybook/addon-docs/register'
import '@storybook/addon-actions/register'
import '@storybook/addon-links/register'
import '@storybook/addon-a11y/register'
import { STORIES_CONFIGURED } from '@storybook/core-events'

import addonAPI from '@storybook/addons'

addonAPI.register('committed/components', storybookAPI => {
  storybookAPI.on(STORIES_CONFIGURED, (kind, story) => {
    if (storybookAPI.getUrlState().path === '/story/*') {
      storybookAPI.selectStory('Design System', 'Introduction')
    }
  })
})

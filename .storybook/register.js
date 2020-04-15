import { STORIES_CONFIGURED, STORY_MISSING } from '@storybook/core-events'
import { addons } from '@storybook/addons'

addons.register('committed/components', storybookAPI => {
  storybookAPI.on(STORIES_CONFIGURED, (kind, story) => {
    if (storybookAPI.getUrlState().path === '/story/*') {
      storybookAPI.selectStory('Design System', 'Introduction')
    }
  })
  storybookAPI.on(STORY_MISSING, (kind, story) => {
    storybookAPI.selectStory('Design System', 'Introduction')
  })
})

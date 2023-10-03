import { componentsConfig } from '@committed/ds'

export default componentsConfig({
  include: [
    // using this instead of the above will trigger a refresh when the preset is changed
    // but config:change is not triggered
    //
    // touching this config will trigger a refresh and config:change is triggered
    // but still the style is not updated until storybook reload
    '../../packages/preset/src/**/*.ts*',
    './stories/**/*.{js,jsx,ts,tsx}',
  ],
  exclude: [],
  hooks: {
    'config:resolved': (conf) => {
      console.log('🐼 config:resolve')
    },
    'config:change': (conf) => {
      console.log(
        '🐼 config:change',
        JSON.stringify(conf?.theme?.recipes, null, 5),
      )
    },
    'generator:css': (file, _css) => {
      console.log('🐼 generator:css', file)
      // console.log('🐼 generator:css', _css)
    },
  },
})

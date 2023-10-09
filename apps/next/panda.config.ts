import { componentsConfig } from '@committed/ds'

export default componentsConfig({
  include: [
    '../../preset/src/**/*.ts*',
    './app/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
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

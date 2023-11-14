import { componentsConfig } from '@committed/ds/config'

export default componentsConfig(
  {
    include: [
      '../../preset/src/**/*.ts*',
      './app/**/*.{js,jsx,ts,tsx}',
      './src/**/*.{js,jsx,ts,tsx}',
    ],
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
  },
  {
    primary: 'plum',
    secondary: 'sky',
    neutral: 'mauve',
    info: 'sky',
    warn: 'orange',
    error: 'red',
    success: 'jade',
  },
)

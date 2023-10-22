import { componentsConfig } from '@committed/ds'

export default componentsConfig(
  {
    include: ['./stories/**/*.{js,jsx,ts,tsx}'],
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
    primary: 'blue',
    secondary: 'mint',
    neutral: 'slate',
    info: 'sky',
    warn: 'amber',
    error: 'tomato',
    success: 'grass',
  },
)

import * as MaterialIcons from '@material-ui/icons'

const icons = Object.keys(MaterialIcons).filter(key => key.endsWith('Sharp'))

export const Icons = icons.reduce((obj, key) => {
  obj[key.slice(0, -5)] = MaterialIcons[key]
  return obj
}, {})

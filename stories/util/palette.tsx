// import React from 'react'

// import { Color } from './colors'
// import {
//   Flex,
//   Box,
//   Heading,
//   Theme,
//   withTheme,
//   Palette as CreatePalette,
//   PaletteColor,
// } from '../../src'

// type PaletteKeys = keyof CreatePalette

// export interface PaletteProps {
//   name: PaletteKeys
//   theme: Theme
//   width?: number
// }

// export const Palette = withTheme<React.FC<PaletteProps>>(
//   ({ name, theme, width = 1 / 3 }: PaletteProps) => {
//     const colors = theme.palette[name] as PaletteColor
//     return (
//       <Box p={1} width={width}>
//         <Color
//           alignItems="center"
//           justifyContent="center"
//           height="75px"
//           color={colors.main}
//           style={{ color: colors.contrastText }}
//         >
//           <Heading.h5 theme={theme}>{name}</Heading.h5>
//         </Color>
//         <Flex>
//           <Color placement="bottom" color={colors.light} />
//           <Color placement="bottom" color={colors.dark} />
//         </Flex>
//       </Box>
//     )
//   }
// )

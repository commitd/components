// import React, { useState } from 'react'
// import { Box, Tooltip, BoxProps, copyToClipboard } from '../../src'

// export type CopyProps = BoxProps & {
//   title: string
//   placement?: 'top' | 'bottom'
// }

// export const Copy = ({ title, placement, children, ...others }: CopyProps) => {
//   const [copied, setCopied] = useState(false)

//   return (
//     <Tooltip
//       key={`${name}`}
//       title={copied ? 'Copied' : title}
//       placement={placement}
//       onClose={() => setCopied(false)}
//     >
//       <Box
//         {...others}
//         onClick={() => {
//           copyToClipboard(title)
//           setCopied(true)
//         }}
//       >
//         {children}
//       </Box>
//     </Tooltip>
//   )
// }

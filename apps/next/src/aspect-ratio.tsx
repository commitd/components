import { Box, Image } from '@committed/ds'
import { AspectRatio } from '@committed/ds-ss'

export const AspectRatioExample = () => (
  <Box css={{ height: '300px', width: '200px', overflow: 'hidden' }}>
    <AspectRatio ratio={9 / 16}>
      <Image
        css={{ objectFit: 'cover', width: '100%', height: '100%' }}
        alt="Photo by Damian Markutt @wildandfree_photography"
        src="https://images.unsplash.com/photo-1572302895496-a09d147fa902?w=300&dpr=2&q=80"
      />
    </AspectRatio>
  </Box>
)

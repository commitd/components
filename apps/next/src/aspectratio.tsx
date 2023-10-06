import { Image } from '@committed/ds'
import { AspectRatio } from '@committed/ss'

export const AspectRatioExample = () => (
  <AspectRatio ratio={0.5625}>
    <Image
      alt="Photo by Damian Markutt @wildandfree_photography"
      src="https://images.unsplash.com/photo-1572302895496-a09d147fa902?w=300&dpr=2&q=80"
    />
  </AspectRatio>
)

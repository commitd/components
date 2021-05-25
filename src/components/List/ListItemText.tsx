import React from 'react'
import { styled } from 'stitches.config'
import { Box, Text } from '..'

/**
 * ListItemText component
 */
export const StyledListItemText = styled('div', {
  marginTop: '$2',
  marginBottom: '$2',
  flex: '1',
  textAlign: 'left',
})

type StyledListItemTextProps = React.ComponentProps<typeof StyledListItemText>
export type ListItemTextProps = StyledListItemTextProps & {
  text: string
  subtext?: string
}

export const ListItemText: React.FC<ListItemTextProps> = ({
  text,
  subtext,
}) => (
  <StyledListItemText>
    <Box>
      <Text>{text}</Text>
    </Box>
    {subtext != null && (
      <Box>
        <Text size="-2">{subtext}</Text>
      </Box>
    )}
  </StyledListItemText>
)
ListItemText.toString = () => `.${StyledListItemText.className}`

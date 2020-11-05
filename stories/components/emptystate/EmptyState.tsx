import { Flex, Heading, Text } from '../../../src'
import React from 'react'

interface EmptyStateProps {
  message?: React.ReactNode
  help?: string
  size?: 'small' | 'default'
  logo?: string
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  message = 'No results found',
  size = 'default',
  help,
  logo,
}) => {
  return (
    <Flex justifyContent="center" width={1} padding={5}>
      <Flex flexDirection="column" alignItems="center">
        {logo ? (
          <img
            src={logo}
            alt=""
            style={{
              filter: 'grayscale(75%) opacity(75%)',
              width: size === 'small' ? 100 : undefined,
            }}
          />
        ) : null}
        <Heading.h4 mt={3}>{message}</Heading.h4>
        {help && (
          <Text variant="caption" mt={2}>
            {help}
          </Text>
        )}
      </Flex>
    </Flex>
  )
}

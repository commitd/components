import React from 'react'
import { styled } from '@material-ui/styles'
import { Theme, colors } from '../../theme'

const defaultText = colors.committedGrey[50]

// @ts-ignore
export const CodeStyle: React.FC = styled('div')(
  ({ theme }: { theme: Theme }) => ({
    '& code[class*="language-"], & pre[class*="language-"]': {
      color: defaultText,
      background: 'none',
      fontFamily: theme.fonts.monospace.fontFamily,
      fontSize: theme.typography.body1.fontSize,
      textAlign: 'left',
      whiteSpace: 'pre',
      wordSpacing: 'normal',
      wordBreak: 'normal',
      wordWrap: 'normal',
      lineHeight: theme.typography.body1.lineHeight,
      tabSize: 2,
      hyphens: 'none',
    },
    /* Code blocks */
    "& pre[class*='language-']": {
      padding: theme.spacing(3),
      margin: `${theme.spacing(2)} 0`,
      overflow: 'auto',
      borderRadius: theme.shape.borderRadius,
    },
    "& div[class='gatsby-highlight']": {
      paddingBottom: theme.spacing(4),
    },
    "& :not(pre) > code[class*='language-'], & pre[class*='language-']": {
      background: colors.committedGrey[800],
    },
    /* Inline code */
    "& :not(pre) > code[class*='language-']": {
      padding: theme.spacing(1),
      borderRadius: theme.shape.borderRadius,
      whiteSpace: 'normal',
    },
    '& .namespace': {
      opacity: 0.7,
    },
    '& .language-css .token.string, & .style .token.string': {
      color: defaultText,
    },
    '& .token': {
      '&.comment, &.prolog, &.doctype, &.cdata': {
        color: colors.committedGrey[200],
      },
      '&.property, &.tag, &.constant, &.symbol, &.deleted': {
        color: colors.lightBlueVivid[100],
      },
      '&.boolean, &.number': {
        color: colors.red[300],
      },
      '&.selector, &.attr-name, &.string, &.char, &.builtin, &.inserted': {
        color: colors.teal[300],
      },
      '&.operator, &.entity, &.url, &.variable, &.punctuation': {
        color: defaultText,
      },
      '&.atrule, &.attr-value, &.function': {
        color: colors.committedYellow[500],
      },
      '&.keyword': {
        color: colors.committedYellow[200],
      },
      '&.regex, &.important': {
        color: colors.orange[200],
      },
      '&.important, &.bold': {
        fontWeight: 'bold',
      },
      '&.italic': {
        fontStyle: 'italic',
      },
      '&.entity': {
        cursor: 'help',
      },
    },
  })
)

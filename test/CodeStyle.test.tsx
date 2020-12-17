import React from 'react'
import { renderLight, renderDark } from './setupTests'
import { CodeStyle } from '../src'

const Example = () => (
  <CodeStyle>
    <div
      dangerouslySetInnerHTML={{
        __html:
          '<pre class="language-json"><code class="language-json"><span class="token punctuation">{</span>\n' +
          '  <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n' +
          '    <span class="token property">"format"</span><span class="token operator">:</span> <span class="token string">"prettier --write \'{**/*.js,*.ts,*.tsx,*.json,*.md,*.mdx}\'"</span><span class="token punctuation">,</span>\n' +
          '    <span class="token property">"format-check"</span><span class="token operator">:</span> <span class="token string">"prettier --check \'{**/*.js,*.ts,*.tsx,*.json,*.md,*.mdx}\'"</span>\n' +
          '  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n' +
          '  <span class="token property">"prettier"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n' +
          '    <span class="token property">"semi"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n' +
          '    <span class="token property">"singleQuote"</span><span class="token operator">:</span> <span class="token boolean">true</span>\n' +
          '  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n' +
          '  <span class="token property">"husky"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n' +
          '    <span class="token property">"hooks"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n' +
          '      <span class="token property">"pre-commit"</span><span class="token operator">:</span> <span class="token string">"pretty-quick --staged"</span>\n' +
          '    <span class="token punctuation">}</span>\n' +
          '  <span class="token punctuation">}</span>\n' +
          '<span class="token punctuation">}</span>\n' +
          '</code></pre>',
      }}
    />
  </CodeStyle>
)

it('renders light without crashing', () => {
  const { asFragment } = renderLight(<Example />)
  expect(asFragment()).toMatchSnapshot()
})

it('renders dark without crashing', () => {
  const { asFragment } = renderDark(<Example />)
  expect(asFragment()).toMatchSnapshot()
})

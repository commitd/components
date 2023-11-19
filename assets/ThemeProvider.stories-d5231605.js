import{a as e,j as c,F as Q}from"./jsx-runtime-03b4ddbf.js";import{a as R,c as V,t as p}from"./component-92c13614.js";import"./index-76fb7be0.js";import{C as W}from"./Card-bb787615.js";import{T as h,u as J,a as X}from"./ThemeProvider-eacd95b7.js";import{A as Y,a as Z,b as ee,c as re}from"./Accordion-13d177bd.js";import{M as l,P as d,S as r}from"./Text-561f173c.js";import{S as oe}from"./Switch-cf69787b.js";import{P as ne}from"./Paper-e773ea24.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-de833af9.js";import"./index-421204d3.js";import"./index-7896d420.js";import"./index-45a327ec.js";import"./index-77dbc890.js";import"./index-add592e3.js";import"./index-c6da0816.js";import"./index-f8c8b8ff.js";import"./index-c6b1b4f9.js";import"./Button-23e6de97.js";import"./Svg-cfd7f95e.js";import"./Icons-43292f8c.js";import"./mdi-685d5538.js";import"./index-11a3acc1.js";import"./index-1a2315aa.js";const Ue={title:"Components/ThemeProvider",component:h,decorators:[]},q=R(ne,V({padding:"$4",width:"100%",height:"300px"})),z={render:i=>e(h,{local:!0,...i,children:e(q,{children:"Example"})})},m={render:()=>e(q,{children:"Example"}),parameters:{docs:{source:{code:`
<ThemeProvider>
  <Paper>Example</Paper>
</ThemeProvider>
`}}}},o={...z,args:{choice:"dark"},parameters:{docs:{source:{code:`
<ThemeProvider choice='dark'>
  <Paper>Example</Paper>
</ThemeProvider>
`}}}},n={...z,args:{choice:"light"},parameters:{docs:{source:{code:`
<ThemeProvider choice='light' light={lightTheme}>
  <Paper>Example</Paper>
</ThemeProvider>
`}}}},s=()=>e(h,{local:!0,children:e(W,{css:{padding:"$6",margin:"$2"},children:e(()=>{const[G,K]=X();return e(oe,{checked:G=="dark",onCheckedChange:K})},{})})}),t=()=>{const[i]=J();return e(Y,{type:"single",children:c(Z,{value:"item-1",children:[e(ee,{children:e(l,{children:"Show theme"})}),e(re,{children:e(l,{children:JSON.stringify(i,null,2)})})]})})},a=()=>(J(),c(Q,{children:[c(d,{children:["The token ",e(r,{font:"monospace",children:"spacing.$3"})," resolves to"," ",e(r,{font:"monospace",children:p("spacing.$3")})]}),c(d,{children:["The token ",e(r,{font:"monospace",children:"colors.$success.3"})," resolves to"," ",e(r,{font:"monospace",children:p("colors.$success.3")})]}),c(d,{children:["The token ",e(r,{font:"monospace",children:"colors.$surface.solid"})," resolves to ",e(r,{font:"monospace",children:p("colors.$surface.solid")})]})]}));var u,g,T;m.parameters={...m.parameters,docs:{...(u=m.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <Example>Example</Example>,
  parameters: {
    docs: {
      source: {
        code: \`
<ThemeProvider>
  <Paper>Example</Paper>
</ThemeProvider>
\`
      }
    }
  }
}`,...(T=(g=m.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};var P,f,S,v,k;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
  ...Template,
  args: {
    choice: 'dark'
  },
  parameters: {
    docs: {
      source: {
        code: \`
<ThemeProvider choice='dark'>
  <Paper>Example</Paper>
</ThemeProvider>
\`
      }
    }
  }
}`,...(S=(f=o.parameters)==null?void 0:f.docs)==null?void 0:S.source},description:{story:"Selects the Dark theme",...(k=(v=o.parameters)==null?void 0:v.docs)==null?void 0:k.description}}};var C,y,x,$,A;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  ...Template,
  args: {
    choice: 'light'
  },
  parameters: {
    docs: {
      source: {
        code: \`
<ThemeProvider choice='light' light={lightTheme}>
  <Paper>Example</Paper>
</ThemeProvider>
\`
      }
    }
  }
}`,...(x=(y=n.parameters)==null?void 0:y.docs)==null?void 0:x.source},description:{story:`Selects the Light theme

(NB As this provider is nested we provide the lightTheme explicitly so it will override any higher level dark theme.)`,...(A=($=n.parameters)==null?void 0:$.docs)==null?void 0:A.description}}};var E,w,U,b,M;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
  const CustomSwitch = () => {
    const [choice, toggleChoice] = useThemeController();
    return <Switch checked={choice == 'dark'} onCheckedChange={toggleChoice} />;
  };
  return <ThemeProvider local={true}>
      <Card css={{
      padding: '$6',
      margin: '$2'
    }}>
        <CustomSwitch />
      </Card>
    </ThemeProvider>;
}`,...(U=(w=s.parameters)==null?void 0:w.docs)==null?void 0:U.source},description:{story:"The `useThemeController` hook can be used to get the theme choice state and a toggle function.\nThis can be used to build a custom theme switch.",...(M=(b=s.parameters)==null?void 0:b.docs)==null?void 0:M.description}}};var D,F,N,j,H;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  const [theme] = useTheme();
  return <Accordion type="single">
      <AccordionItem value="item-1">
        <AccordionHeader>
          <Monospace>Show theme</Monospace>
        </AccordionHeader>
        <AccordionContent>
          <Monospace>{JSON.stringify(theme, null, 2)}</Monospace>
        </AccordionContent>
      </AccordionItem>
    </Accordion>;
}`,...(N=(F=t.parameters)==null?void 0:F.docs)==null?void 0:N.source},description:{story:"The `useTheme` hook can be used to get the current theme.",...(H=(j=t.parameters)==null?void 0:j.docs)==null?void 0:H.description}}};var I,L,O,_,B;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
  const [theme] = useTheme();
  return <>
      <Paragraph>
        The token <Span font="monospace">spacing.$3</Span> resolves to{' '}
        <Span font="monospace">{token('spacing.$3')}</Span>
      </Paragraph>
      <Paragraph>
        The token <Span font="monospace">colors.$success.3</Span> resolves to{' '}
        <Span font="monospace">{token('colors.$success.3')}</Span>
      </Paragraph>
      <Paragraph>
        The token <Span font="monospace">colors.$surface.solid</Span> resolves
        to <Span font="monospace">{token('colors.$surface.solid')}</Span>
      </Paragraph>
    </>;
}`,...(O=(L=a.parameters)==null?void 0:L.docs)==null?void 0:O.source},description:{story:`The \`token\` function also provides a utility to dereference theme tokens.
This can be used in case the theme details are required outside of the normal css landscape.

NB this currently resolves to intermediate css vars but this may change later.`,...(B=(_=a.parameters)==null?void 0:_.docs)==null?void 0:B.description}}};const be=["Default","Dark","Light","UtilityUseThemeController","UtilityUseTheme","UtilityTokenFunction"];export{o as Dark,m as Default,n as Light,a as UtilityTokenFunction,t as UtilityUseTheme,s as UtilityUseThemeController,be as __namedExportsOrder,Ue as default};
//# sourceMappingURL=ThemeProvider.stories-d5231605.js.map

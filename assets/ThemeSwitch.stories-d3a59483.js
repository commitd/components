import{a as t,j as h}from"./jsx-runtime-03b4ddbf.js";import{w as L,u as m,a as d,e as g}from"./index-4345948b.js";import{g as U,d as F}from"./component-92c13614.js";import{r as M}from"./index-76fb7be0.js";import{L as W,D as q}from"./Icons-43292f8c.js";import{I as z}from"./Button-23e6de97.js";import{a as C,T as H}from"./ThemeProvider-eacd95b7.js";import{A as P,a as E,b as k}from"./AppBar-b94fd8b6.js";import{P as I}from"./Paper-e773ea24.js";import{C as O}from"./Container-5f3b1837.js";import{H as j}from"./Heading-1229930b.js";import"./_commonjsHelpers-de833af9.js";import"./_baseIsEqual-f876697f.js";import"./index-03bbf7d1.js";import"./uniq-da390a93.js";import"./index-d38bc732.js";import"./index-356e4a49.js";import"./extends-98964cd2.js";import"./mdi-685d5538.js";import"./Svg-cfd7f95e.js";import"./Box-f074bc4b.js";import"./Link-72161c25.js";import"./Inline-fdf2c0ff.js";import"./Text-561f173c.js";var G=globalThis&&globalThis.__rest||function(e,a){var i={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&a.indexOf(r)<0&&(i[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)a.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(i[r[o]]=e[r[o]]);return i};const J="c-theme-switch",_=U((e,a)=>{var{className:i,choice:r,toggle:o}=e,N=G(e,["className","choice","toggle"]);const l=r==="light",R=l?"Use dark theme":"Use light theme",D=l?t(W,{}):t(q,{});return t(z,Object.assign({ref:a,className:F(J,i),onClick:o,title:R,"aria-label":"switch-theme",variant:"solid"},N,{children:D}))}),p=M.forwardRef((e,a)=>{const[i,r]=C();return t(_,Object.assign({},e,{ref:a,choice:i,toggle:r}))});p.displayName="ThemeSwitch";p.__docgenInfo={description:"The theme switch component can be used to switch from light to dark mode explicitly.\n\nUse the underlying hook `useThemeController` to create your own theme switch.",methods:[],displayName:"ThemeSwitch"};const fe={title:"Components/ThemeSwitch",component:p},n=e=>h(H,{local:!0,children:[h(P,{children:[t(E,{children:"Example"}),t(k,{children:t(p,{...e})})]}),t(I,{children:t(O,{css:{height:"200px"},children:t(j,{variant:"h4",children:"Theme switch"})})})]});n.parameters={docs:{source:{code:`
  <ThemeProvider>
    <AppBar>
      <AppBarHeading>Example</AppBarHeading>
      <AppBarActions>
        <ThemeSwitch {...args} />
      </AppBarActions>
    </AppBar>
    <Paper>
      <Container css={{ height: '200px' }}>
        <Heading variant="h4">Theme switch</Heading>
      </Container>
    </Paper>
  </ThemeProvider>
  `}}};const s=()=>{const[e,a]=C();return h(H,{local:!0,choice:e,children:[h(P,{children:[t(E,{children:"Example"}),t(k,{children:t(_,{choice:e,toggle:a})})]}),t(I,{children:t(O,{css:{height:"200px"},children:t(j,{variant:"h4",children:"Theme switch"})})})]})},c={render:n,play:async({canvasElement:e})=>{const a=L(e),r=(await a.findByTestId("theme-provider")).className.includes("light")?"light":"dark",o=await a.findByRole("button");m.click(o),await d(async()=>g(await a.findByTestId("theme-provider")).toHaveClass(r==="light"?"dark":"light")),m.keyboard("[Enter]"),await d(async()=>g(await a.findByTestId("theme-provider")).toHaveClass(r==="light"?"light":"dark"))}};var u,w,f;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`args => <ThemeProvider local>
    <AppBar>
      <AppBarHeading>Example</AppBarHeading>
      <AppBarActions>
        <ThemeSwitch {...args} />
      </AppBarActions>
    </AppBar>
    <Paper>
      <Container css={{
      height: '200px'
    }}>
        <Heading variant="h4">Theme switch</Heading>
      </Container>
    </Paper>
  </ThemeProvider>`,...(f=(w=n.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var T,v,y,A,B;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  const [choice, toggle] = useThemeController();
  return <ThemeProvider local choice={choice}>
      <AppBar>
        <AppBarHeading>Example</AppBarHeading>
        <AppBarActions>
          <ControlledThemeSwitch choice={choice} toggle={toggle} />
        </AppBarActions>
      </AppBar>
      <Paper>
        <Container css={{
        height: '200px'
      }}>
          <Heading variant="h4">Theme switch</Heading>
        </Container>
      </Paper>
    </ThemeProvider>;
}`,...(y=(v=s.parameters)==null?void 0:v.docs)==null?void 0:y.source},description:{story:`A controllable version of the theme switch is provided which only has the UI.

This an be used in situations where you need a different mechanism for theme switching such as Server Side Rendering.

Here we just reuse the \`useThemeController\` hook as an example.`,...(B=(A=s.parameters)==null?void 0:A.docs)==null?void 0:B.description}}};var S,b,x;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: Default,
  play: async ({
    canvasElement
  }) => {
    const screen = within(canvasElement);
    const wrapper = await screen.findByTestId('theme-provider');
    const current = wrapper.className.includes('light') ? 'light' : 'dark';
    const button = await screen.findByRole('button');
    userEvent.click(button);
    await waitFor(async () => expect(await screen.findByTestId('theme-provider')).toHaveClass(current === 'light' ? 'dark' : 'light'));
    userEvent.keyboard('[Enter]');
    await waitFor(async () => expect(await screen.findByTestId('theme-provider')).toHaveClass(current === 'light' ? 'light' : 'dark'));
  }
}`,...(x=(b=c.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};const Te=["Default","SSR","TestThemeSwitch"];export{n as Default,s as SSR,c as TestThemeSwitch,Te as __namedExportsOrder,fe as default};
//# sourceMappingURL=ThemeSwitch.stories-d3a59483.js.map

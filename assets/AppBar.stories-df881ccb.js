import{j as r,a as e}from"./jsx-runtime-03b4ddbf.js";import{M as V,L as B,R as _,a as g}from"./index-7c826001.js";import{V as D}from"./Variants-32aa23ce.js";import"./component-92c13614.js";import"./index-76fb7be0.js";import{Z as G}from"./ZigZag-9eaeeca7.js";import{A as n,a as o,b as p,c as s,d as l,e as i}from"./AppBar-b94fd8b6.js";import{W as O}from"./NavigationMenu-2098b277.js";import{L as A}from"./Link-72161c25.js";import{P as q}from"./Padding-12a74279.js";import{B as T}from"./Box-f074bc4b.js";import{s as z}from"./index-db6c2d3d.js";import"./Grid-599ad893.js";import"./Tooltip-53dd1a2c.js";import"./extends-98964cd2.js";import"./index-45a327ec.js";import"./index-421204d3.js";import"./index-296a96c6.js";import"./index-77dbc890.js";import"./index-add592e3.js";import"./_commonjsHelpers-de833af9.js";import"./index-f8c8b8ff.js";import"./index-01bbf444.js";import"./index-1a2315aa.js";import"./index-251d008c.js";import"./index-c6da0816.js";import"./index-207695d4.js";import"./Text-561f173c.js";import"./ConditionalWrapper-8865b2c1.js";import"./Heading-1229930b.js";import"./Button-23e6de97.js";import"./Svg-cfd7f95e.js";import"./Inline-fdf2c0ff.js";import"./index-c6b1b4f9.js";import"./index-7896d420.js";import"./index-11a3acc1.js";import"./Paper-e773ea24.js";import"./Icons-43292f8c.js";import"./mdi-685d5538.js";const Ne={title:"Components/AppBar",component:n,subcomponents:{AppBarHeading:o,AppBarActions:p,AppBarButton:s,AppBarMenu:l,AppBarMenuItem:i}},c=()=>r(n,{children:[e(o,{children:"Example"}),e(p,{children:e(s,{children:"Login"})})]}),t=h=>r(n,{...h,children:[e(o,{children:"Example"}),r(l,{children:[e(i,{href:"/feed",children:"Feed"}),e(i,{href:"/browse",children:"Browse"})]}),e(p,{children:e(s,{children:"Login"})})]}),m=()=>r(n,{children:[e(o,{children:"Example"}),r(l,{children:[e(i,{href:"/feed",children:"Feed"}),e(i,{href:"/browse",children:"Browse"})]})]}),a=()=>r(n,{children:[e(o,{children:"Example"}),e(l,{children:e(O,{variant:"text",items:[{trigger:"Wrapped List",links:[{href:"/design-system-colour--page",content:{title:"Colors",text:"Beautiful, thought-out palettes with auto dark mode."}},{href:"/components-icons--icon-grid",content:{title:"Icons",text:"A collection of available icons based on material designs."}}]},{href:"https://components.committed.software",text:"Storybook"},{href:"https://github.com/commitd/components",text:"Github"}]})}),e(p,{children:e(s,{children:"Login"})})]}),d=()=>r(V,{children:[r(n,{children:[e(o,{children:e(A,{asChild:!0,variant:"clear",children:e(B,{to:"./",children:"Example"})})}),e(p,{children:e(A,{asChild:!0,variant:"clear",children:e(B,{to:"/login",children:e(s,{children:"Login"})})})})]}),e(q,{p:"$3",children:e(T,{children:r(_,{children:[e(g,{index:!0,element:e("div",{children:"Hello Router"})}),e(g,{path:"/login",element:e("div",{children:"Logon"})})]})})})]}),u=()=>e(T,{children:e(G,{children:e(D,{gridCss:{gridTemplateColumns:"1fr",padding:"$4"},component:t,surface:z})})});var f,x,L;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  return <AppBar>
      <AppBarHeading>Example</AppBarHeading>
      <AppBarActions>
        <AppBarButton>Login</AppBarButton>
      </AppBarActions>
    </AppBar>;
}`,...(L=(x=c.parameters)==null?void 0:x.docs)==null?void 0:L.source}}};var M,k,b,v,R;t.parameters={...t.parameters,docs:{...(M=t.parameters)==null?void 0:M.docs,source:{originalSource:`args => {
  return <AppBar {...args}>
      <AppBarHeading>Example</AppBarHeading>
      <AppBarMenu>
        <AppBarMenuItem href="/feed">Feed</AppBarMenuItem>
        <AppBarMenuItem href="/browse">Browse</AppBarMenuItem>
      </AppBarMenu>
      <AppBarActions>
        <AppBarButton>Login</AppBarButton>
      </AppBarActions>
    </AppBar>;
}`,...(b=(k=t.parameters)==null?void 0:k.docs)==null?void 0:b.source},description:{story:"AppBarMenuItem components extend Link and have all of the same props.",...(R=(v=t.parameters)==null?void 0:v.docs)==null?void 0:R.description}}};var W,w,y;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`() => {
  return <AppBar>
      <AppBarHeading>Example</AppBarHeading>
      <AppBarMenu>
        <AppBarMenuItem href="/feed">Feed</AppBarMenuItem>
        <AppBarMenuItem href="/browse">Browse</AppBarMenuItem>
      </AppBarMenu>
    </AppBar>;
}`,...(y=(w=m.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var H,I,C,E,S;a.parameters={...a.parameters,docs:{...(H=a.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
  const list = {
    trigger: 'Wrapped List',
    links: [{
      href: '/design-system-colour--page',
      content: {
        title: 'Colors',
        text: 'Beautiful, thought-out palettes with auto dark mode.'
      }
    }, {
      href: '/components-icons--icon-grid',
      content: {
        title: 'Icons',
        text: 'A collection of available icons based on material designs.'
      }
    }]
  };
  const storybookLink = {
    href: 'https://components.committed.software',
    text: 'Storybook'
  };
  const githubLink = {
    href: 'https://github.com/commitd/components',
    text: 'Github'
  };
  return <AppBar>
      <AppBarHeading>Example</AppBarHeading>
      <AppBarMenu>
        <WrappedNavigationMenu variant="text" items={[list, storybookLink, githubLink]} />
      </AppBarMenu>
      <AppBarActions>
        <AppBarButton>Login</AppBarButton>
      </AppBarActions>
    </AppBar>;
}`,...(C=(I=a.parameters)==null?void 0:I.docs)==null?void 0:C.source},description:{story:`The App Bar can also make use of a wrapped Navigation Menu in place of AppBarMenuItem for more expanded usage.
See [Navigation Menu](/docs/components-navigationmenu--default) for more details on it's use.`,...(S=(E=a.parameters)==null?void 0:E.docs)==null?void 0:S.description}}};var Z,N,$;d.parameters={...d.parameters,docs:{...(Z=d.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
  return <MemoryRouter>
      <AppBar>
        <AppBarHeading>
          <Link asChild variant="clear">
            <RouterLink to="./">Example</RouterLink>
          </Link>
        </AppBarHeading>
        <AppBarActions>
          <Link asChild variant="clear">
            <RouterLink to="/login">
              <AppBarButton>Login</AppBarButton>
            </RouterLink>
          </Link>
        </AppBarActions>
      </AppBar>
      <Padding p="$3">
        <Box>
          <Routes>
            <Route index element={<div>Hello Router</div>} />
            <Route path="/login" element={<div>Logon</div>} />
          </Routes>
        </Box>
      </Padding>
    </MemoryRouter>;
}`,...($=(N=d.parameters)==null?void 0:N.docs)==null?void 0:$.source}}};var F,P,j;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`() => {
  return <Box>
      <ZigZag>
        <Variants gridCss={{
        gridTemplateColumns: '1fr',
        padding: '$4'
      }} component={WithMenu} surface={surfaces} />
      </ZigZag>
    </Box>;
}`,...(j=(P=u.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};const $e=["Default","WithMenu","WithMenuWithoutActions","WithNavigationMenu","WithReactRouter","Surfaces"];export{c as Default,u as Surfaces,t as WithMenu,m as WithMenuWithoutActions,a as WithNavigationMenu,d as WithReactRouter,$e as __namedExportsOrder,Ne as default};
//# sourceMappingURL=AppBar.stories-df881ccb.js.map

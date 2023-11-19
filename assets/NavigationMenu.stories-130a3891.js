import{j as n,a as t,F as j}from"./jsx-runtime-03b4ddbf.js";import{N as d,a as i,b as m,c as e,d as s,e as v,f as o,g as p,h as a,i as r,j as u,k as N,W as O}from"./NavigationMenu-2098b277.js";import{L as z}from"./Logo-25278444.js";import{B as G}from"./Box-f074bc4b.js";import{T as R}from"./Text-561f173c.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./component-92c13614.js";import"./extends-98964cd2.js";import"./index-add592e3.js";import"./index-421204d3.js";import"./index-45a327ec.js";import"./index-77dbc890.js";import"./index-c6b1b4f9.js";import"./index-c6da0816.js";import"./index-f8c8b8ff.js";import"./index-7896d420.js";import"./index-296a96c6.js";import"./index-11a3acc1.js";import"./index-207695d4.js";import"./Button-23e6de97.js";import"./Svg-cfd7f95e.js";import"./Paper-e773ea24.js";import"./Icons-43292f8c.js";import"./mdi-685d5538.js";const pt={title:"Components/NavigationMenu",component:d,subcomponents:{NavigationMenuContent:i,NavigationMenuIndicator:m,NavigationMenuItem:e,NavigationMenuLink:s,NavigationMenuList:v,NavigationMenuTrigger:o,NavigationMenuViewport:p,NavigationMenuContentList:a,NavigationMenuContentListItem:r,NavigationMenuContentListLink:u}},h=M=>n(d,{children:[n(v,{children:[n(e,{children:[t(o,{caret:!0,children:"Components"}),t(i,{children:n(a,{layout:"row",children:[t(r,{href:"https://components.committed.software",children:t(u,{title:"Storybook",text:"A live storybook version of the current committed components."})}),t(r,{href:"/design-system-colour--page",children:t(u,{title:"Colors",text:"Beautiful, thought-out palettes with auto dark mode."})}),t(r,{href:"/components-icons--icon-grid",children:t(u,{title:"Icons",text:"A collection of available icons based on material designs."})})]})})]}),t(e,{children:t(s,{underline:!0,href:"https://github.com/commitd/components",children:"Github"})}),t(m,{})]}),t(N,{children:t(p,{})})]}),c=()=>n(j,{children:[n(d,{children:[n(v,{children:[t(e,{children:t(s,{href:"/components-button--default#variant",children:"Default"})}),t(e,{children:t(s,{href:"/components-button--default#variant",variant:"solid",underline:!0,children:"Solid"})}),t(e,{children:t(s,{href:"/components-button--default#variant",variant:"outline",underline:!0,children:"Outline"})}),t(e,{children:t(s,{href:"/components-button--default#variant",variant:"text",underline:!0,children:"Text"})}),t(m,{})]}),t(N,{children:t(p,{})})]}),n(d,{css:{paddingTop:"$2"},children:[n(v,{children:[n(e,{children:[t(o,{caret:!0,children:"Default"}),t(i,{children:t(a,{layout:"row"})})]}),n(e,{children:[t(o,{caret:!0,variant:"solid",children:"Solid"}),t(i,{children:t(a,{layout:"row"})})]}),n(e,{children:[t(o,{caret:!0,variant:"outline",children:"Outline"}),t(i,{children:t(a,{layout:"row"})})]}),n(e,{children:[t(o,{caret:!0,variant:"text",colorPalette:"$info",children:"Text+Color"}),t(i,{children:t(a,{layout:"row"})})]}),t(m,{})]}),t(N,{children:t(p,{})})]})]}),g=()=>t(O,{items:[{trigger:"Wrapped List",links:[{href:"/design-system-colour--page",content:{title:"Colors",text:"Beautiful, thought-out palettes with auto dark mode."}},{href:"/components-icons--icon-grid",content:{title:"Icons",text:"A collection of available icons based on material designs."}}]},{href:"https://components.committed.software",text:"Storybook"},{href:"https://github.com/commitd/components",text:"Github"}]}),l=()=>n(d,{children:[n(v,{children:[n(e,{children:[t(o,{caret:!1,children:"Alternative Content"}),t(i,{children:n(a,{layout:"row",children:[t(r,{href:"https://components.committed.software",css:{gridRow:"span 3"},children:n(G,{css:{display:"flex",justifyContent:"center",flexDirection:"column",width:"100%",height:"100%",background:"linear-gradient(135deg, token(colors.$neutral.11) 0%, token(colors.$neutral.8) 100%);",borderRadius:"6px",padding:"25px"},children:[t(z,{css:{size:"$10"}}),t(R,{size:"$4",weight:"bold",css:{color:"$primary",marginTop:"16px",marginBottom:"7px"},children:"Components"})]})}),t(r,{href:"/design-system-colour--page",children:t(u,{title:"Colors",text:"Beautiful, thought-out palettes with auto dark mode."})}),t(r,{href:"/components-icons--icon-grid",children:t(u,{title:"Icons"})})]})})]}),t(m,{})]}),t(N,{children:t(p,{})})]});var f,L,C;h.parameters={...h.parameters,docs:{...(f=h.parameters)==null?void 0:f.docs,source:{originalSource:`args => <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger caret={true}>Components</NavigationMenuTrigger>
        <NavigationMenuContent>
          <NavigationMenuContentList layout="row">
            <NavigationMenuContentListItem href="https://components.committed.software">
              <NavigationMenuContentListLink title="Storybook" text="A live storybook version of the current committed components." />
            </NavigationMenuContentListItem>
            <NavigationMenuContentListItem href="/design-system-colour--page">
              <NavigationMenuContentListLink title="Colors" text="Beautiful, thought-out palettes with auto dark mode." />
            </NavigationMenuContentListItem>
            <NavigationMenuContentListItem href="/components-icons--icon-grid">
              <NavigationMenuContentListLink title="Icons" text="A collection of available icons based on material designs." />
            </NavigationMenuContentListItem>
          </NavigationMenuContentList>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuLink underline href="https://github.com/commitd/components">
          Github
        </NavigationMenuLink>
      </NavigationMenuItem>

      <NavigationMenuIndicator />
    </NavigationMenuList>

    <NavigationViewportPosition>
      <NavigationMenuViewport />
    </NavigationViewportPosition>
  </NavigationMenu>`,...(C=(L=h.parameters)==null?void 0:L.docs)==null?void 0:C.source}}};var b,k,w,y,x;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  return <>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink href="/components-button--default#variant">
              Default
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/components-button--default#variant" variant="solid" underline>
              Solid
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/components-button--default#variant" variant="outline" underline>
              Outline
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/components-button--default#variant" variant="text" underline>
              Text
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuIndicator />
        </NavigationMenuList>

        <NavigationViewportPosition>
          <NavigationMenuViewport />
        </NavigationViewportPosition>
      </NavigationMenu>

      <NavigationMenu css={{
      paddingTop: '$2'
    }}>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger caret>Default</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuContentList layout="row"></NavigationMenuContentList>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger caret variant="solid">
              Solid
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuContentList layout="row"></NavigationMenuContentList>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger caret variant="outline">
              Outline
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuContentList layout="row"></NavigationMenuContentList>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger caret variant="text" colorPalette="$info">
              Text+Color
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuContentList layout="row"></NavigationMenuContentList>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuIndicator />
        </NavigationMenuList>

        <NavigationViewportPosition>
          <NavigationMenuViewport />
        </NavigationViewportPosition>
      </NavigationMenu>
    </>;
}`,...(w=(k=c.parameters)==null?void 0:k.docs)==null?void 0:w.source},description:{story:"Links and triggers follow the same variant formats as Buttons, namely Primary, Secondary, Tertiary and Brand. By Default, Secondary is used.",...(x=(y=c.parameters)==null?void 0:y.docs)==null?void 0:x.description}}};var I,T,B,V,A;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
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
  return <WrappedNavigationMenu items={[list, storybookLink, githubLink]} />;
}`,...(B=(T=g.parameters)==null?void 0:T.docs)==null?void 0:B.source},description:{story:`NavigationMenu also provides a wrapped version, aimed primary at use in [AppBar](/docs/components-appbar--default)
as show [here](/docs/components-appbar--with-navigation-menu), however can also be used elsewhere as a simplified version as shown in this example.`,...(A=(V=g.parameters)==null?void 0:V.docs)==null?void 0:A.description}}};var S,$,P,D,W;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  const MyAltContent = <NavigationMenuContentListItem href="https://components.committed.software" css={{
    gridRow: 'span 3'
  }}>
      <Box css={{
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      width: '100%',
      height: '100%',
      background: \`linear-gradient(135deg, token(colors.$neutral.11) 0%, token(colors.$neutral.8) 100%);\`,
      borderRadius: '6px',
      padding: '25px'
    }}>
        <Logo css={{
        size: '$10'
      }} />
        <Text size={'$4'} weight={'bold'} css={{
        color: '$primary',
        marginTop: '16px',
        marginBottom: '7px'
      }}>
          Components
        </Text>
      </Box>
    </NavigationMenuContentListItem>;
  return <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger caret={false}>
            Alternative Content
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuContentList layout="row">
              {MyAltContent}
              <NavigationMenuContentListItem href="/design-system-colour--page">
                <NavigationMenuContentListLink title="Colors" text="Beautiful, thought-out palettes with auto dark mode." />
              </NavigationMenuContentListItem>
              <NavigationMenuContentListItem href="/components-icons--icon-grid">
                <NavigationMenuContentListLink title="Icons" />
              </NavigationMenuContentListItem>
            </NavigationMenuContentList>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuIndicator />
      </NavigationMenuList>

      <NavigationViewportPosition>
        <NavigationMenuViewport />
      </NavigationViewportPosition>
    </NavigationMenu>;
}`,...(P=($=l.parameters)==null?void 0:$.docs)==null?void 0:P.source},description:{story:`Content does not need to be limited to simple text based links, such as NavigationMenuContentListLink,
but instead can be any customised react node instead.`,...(W=(D=l.parameters)==null?void 0:D.docs)==null?void 0:W.description}}};const ht=["Default","Variants","Wrapped","AlternativeContent"];export{l as AlternativeContent,h as Default,c as Variants,g as Wrapped,ht as __namedExportsOrder,pt as default};
//# sourceMappingURL=NavigationMenu.stories-130a3891.js.map

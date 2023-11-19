import{j as r,a as o}from"./jsx-runtime-03b4ddbf.js";import{j as T}from"./mdi-685d5538.js";import{P as s,a as c,b as p,c as l,d as e}from"./Popover-7d7d988f.js";import{B as n}from"./Button-23e6de97.js";import{H as h}from"./Heading-1229930b.js";import{P as v,T as x,M as $}from"./Text-561f173c.js";import{B as w}from"./Background-c315c9de.js";import{S as H}from"./Svg-cfd7f95e.js";import{P as Y}from"./Padding-12a74279.js";import{R as S}from"./Flex-1cfc0a73.js";import{I as b}from"./Inline-fdf2c0ff.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./component-92c13614.js";import"./extends-98964cd2.js";import"./index-45a327ec.js";import"./index-421204d3.js";import"./index-296a96c6.js";import"./index-77dbc890.js";import"./index-add592e3.js";import"./index-56d74ee5.js";import"./index-f8c8b8ff.js";import"./index-01bbf444.js";import"./index-1a2315aa.js";import"./index-251d008c.js";import"./index-c6da0816.js";import"./Paper-e773ea24.js";import"./ConditionalWrapper-8865b2c1.js";import"./Box-f074bc4b.js";const io={title:"Components/Popover",component:s,subcomponents:{PopoverTrigger:c,PopoverContent:p,PopoverAnchor:l,PopoverClose:e}},t=d=>r(s,{...d,children:[o(c,{children:o(n,{children:"Trigger"})}),r(p,{children:[o(h,{variant:"h5",children:"Popover content"}),o(v,{children:"Are you sure you wanna do this?"}),o(e,{children:o(n,{variant:"solid",children:"Yes"})})]})]}),a=d=>r(s,{children:[r(x,{children:["You can use a"," ",o(l,{children:o(w,{bg:"$info.3",children:o($,{inline:!0,children:"PopoverAnchor"})})})," ","to anchor the popover to a different element"," ",o(c,{children:o(H,{css:{color:"$text.secondary",cursor:"pointer"},path:T})})]}),r(p,{children:[o(h,{variant:"h5",children:"Popover content"}),o(v,{children:"Are you sure you wanna do this?"}),o(e,{children:o(n,{variant:"solid",children:"Yes"})})]})]}),i=d=>r(s,{children:[o(l,{children:o(Y,{p:"$4",children:o(w,{bg:"$info.3",children:o(S,{justifyContent:"center",children:r(x,{children:["The ",o($,{children:"PopoverAnchor"})," can have the trigger"," ",o(c,{children:o(H,{css:{color:"$text.secondary",cursor:"pointer"},path:T})})," ","nested inside"]})})})})}),r(p,{children:[o(h,{variant:"h5",children:"Popover content"}),o(v,{children:"Are you sure you want to delete this?"}),r(b,{align:"right",children:[o(e,{children:o(n,{variant:"text",colorPalette:"$neutral",children:"No"})}),o(e,{children:o(n,{variant:"solid",destructive:!0,children:"Yes"})})]})]})]});var u,g,P;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`args => <Popover {...args}>
    <PopoverTrigger>
      <Button>Trigger</Button>
    </PopoverTrigger>
    <PopoverContent>
      <Heading variant="h5">Popover content</Heading>
      <Paragraph>Are you sure you wanna do this?</Paragraph>
      <PopoverClose>
        <Button variant="solid">Yes</Button>
      </PopoverClose>
    </PopoverContent>
  </Popover>`,...(P=(g=t.parameters)==null?void 0:g.docs)==null?void 0:P.source}}};var m,f,A;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`args => <Popover>
    <Text>
      You can use a{' '}
      <PopoverAnchor>
        <Background bg="$info.3">
          <Monospace inline>PopoverAnchor</Monospace>
        </Background>
      </PopoverAnchor>{' '}
      to anchor the popover to a different element{' '}
      <PopoverTrigger>
        <Svg css={{
        color: '$text.secondary',
        cursor: 'pointer'
      }} path={mdiAlertCircleOutline} />
      </PopoverTrigger>
    </Text>
    <PopoverContent>
      <Heading variant="h5">Popover content</Heading>
      <Paragraph>Are you sure you wanna do this?</Paragraph>
      <PopoverClose>
        <Button variant="solid">Yes</Button>
      </PopoverClose>
    </PopoverContent>
  </Popover>`,...(A=(f=a.parameters)==null?void 0:f.docs)==null?void 0:A.source}}};var C,y,B;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`args => <Popover>
    <PopoverAnchor>
      <Padding p="$4">
        <Background bg="$info.3">
          <Row justifyContent="center">
            <Text>
              The <Monospace>PopoverAnchor</Monospace> can have the trigger{' '}
              <PopoverTrigger>
                <Svg css={{
                color: '$text.secondary',
                cursor: 'pointer'
              }} path={mdiAlertCircleOutline} />
              </PopoverTrigger>{' '}
              nested inside
            </Text>
          </Row>
        </Background>
      </Padding>
    </PopoverAnchor>
    <PopoverContent>
      <Heading variant="h5">Popover content</Heading>
      <Paragraph>Are you sure you want to delete this?</Paragraph>
      <Inline align="right">
        <PopoverClose>
          <Button variant="text" colorPalette="$neutral">
            No
          </Button>
        </PopoverClose>
        <PopoverClose>
          <Button variant="solid" destructive>
            Yes
          </Button>
        </PopoverClose>
      </Inline>
    </PopoverContent>
  </Popover>`,...(B=(y=i.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};const so=["Default","Anchored","NestedAnchored"];export{a as Anchored,t as Default,i as NestedAnchored,so as __namedExportsOrder,io as default};
//# sourceMappingURL=Popover.stories-bf7d358d.js.map

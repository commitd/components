import{a as n,j as t}from"./jsx-runtime-03b4ddbf.js";import{H as a}from"./Heading-1229930b.js";import{C as o}from"./Flex-1cfc0a73.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./component-92c13614.js";import"./extends-98964cd2.js";import"./Text-561f173c.js";import"./Box-f074bc4b.js";const J={title:"Components/Heading",component:a},s=q=>n(a,{...q,children:"This is a Heading"}),e=()=>t(o,{children:[n(a,{variant:"h1",children:"Heading 1"}),n(a,{variant:"h2",children:"Heading 2"}),n(a,{variant:"h3",children:"Heading 3"}),n(a,{variant:"h4",children:"Heading 4"}),n(a,{variant:"h5",children:"Heading 5"}),n(a,{variant:"h6",children:"Heading 6"})]}),i=()=>t(o,{children:[n(a,{variant:"h1",font:"display",children:"Heading 1"}),n(a,{variant:"h2",font:"display",children:"Heading 2"}),n(a,{variant:"h3",font:"display",children:"Heading 3"}),n(a,{variant:"h4",font:"display",children:"Heading 4"}),n(a,{variant:"h5",font:"display",children:"Heading 5"}),n(a,{variant:"h6",font:"display",children:"Heading 6"})]}),r=()=>n(a,{variant:"h1",size:"$5",css:{color:"$primary"},italic:!0,children:"Different h1"}),d=()=>t(o,{children:[n(a,{as:"h1",children:"Heading 1"}),n(a,{as:"h2",children:"Heading 2"}),n(a,{variant:"h4",as:"h3",children:"Heading 3"}),n(a,{variant:"h4",as:"h4",children:"Heading 4"}),n(a,{variant:"h5",as:"h5",children:"Heading 5"}),n(a,{variant:"h5",as:"h6",children:"Heading 6"})]});var g,h,c;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:"args => <Heading {...args}>This is a Heading</Heading>",...(c=(h=s.parameters)==null?void 0:h.docs)==null?void 0:c.source}}};var H,l,p,m,v;e.parameters={...e.parameters,docs:{...(H=e.parameters)==null?void 0:H.docs,source:{originalSource:`() => <Column>
    <Heading variant="h1">Heading 1</Heading>
    <Heading variant="h2">Heading 2</Heading>
    <Heading variant="h3">Heading 3</Heading>
    <Heading variant="h4">Heading 4</Heading>
    <Heading variant="h5">Heading 5</Heading>
    <Heading variant="h6">Heading 6</Heading>
  </Column>`,...(p=(l=e.parameters)==null?void 0:l.docs)==null?void 0:p.source},description:{story:"The standard heading hX ass are supported, this, by default also adjusts the html tag",...(v=(m=e.parameters)==null?void 0:m.docs)==null?void 0:v.description}}};var u,f,y,C,T;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`() => <Column>
    <Heading variant="h1" font="display">
      Heading 1
    </Heading>
    <Heading variant="h2" font="display">
      Heading 2
    </Heading>
    <Heading variant="h3" font="display">
      Heading 3
    </Heading>
    <Heading variant="h4" font="display">
      Heading 4
    </Heading>
    <Heading variant="h5" font="display">
      Heading 5
    </Heading>
    <Heading variant="h6" font="display">
      Heading 6
    </Heading>
  </Column>`,...(y=(f=i.parameters)==null?void 0:f.docs)==null?void 0:y.source},description:{story:"The display font can be used when a different heading style is required, say for blog posts.",...(T=(C=i.parameters)==null?void 0:C.docs)==null?void 0:T.description}}};var x,b,D,S,j;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`() => <Heading variant="h1" size="$5" css={{
  color: '$primary'
}} italic>
    Different h1
  </Heading>`,...(D=(b=r.parameters)==null?void 0:b.docs)==null?void 0:D.source},description:{story:"The underlying text component props are still available if the need to be used.",...(j=(S=r.parameters)==null?void 0:S.docs)==null?void 0:j.description}}};var P,$,_,z,A;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`() => <Column>
    <Heading as="h1">Heading 1</Heading>
    <Heading as="h2">Heading 2</Heading>
    <Heading variant="h4" as="h3">
      Heading 3
    </Heading>
    <Heading variant="h4" as="h4">
      Heading 4
    </Heading>
    <Heading variant="h5" as="h5">
      Heading 5
    </Heading>
    <Heading variant="h5" as="h6">
      Heading 6
    </Heading>
  </Column>`,...(_=($=d.parameters)==null?void 0:$.docs)==null?void 0:_.source},description:{story:"The the heading renders as the relevant `h?` element by default, use the `as` props to render as a different heading element.",...(A=(z=d.parameters)==null?void 0:z.docs)==null?void 0:A.description}}};const K=["Default","As","Display","TextProps","Polymorphic"];export{e as As,s as Default,i as Display,d as Polymorphic,r as TextProps,K as __namedExportsOrder,J as default};
//# sourceMappingURL=Heading.stories-a7d6b081.js.map

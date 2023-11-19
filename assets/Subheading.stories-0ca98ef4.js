import{a,j as c}from"./jsx-runtime-03b4ddbf.js";import{a as V,c as z,s as A,f as B}from"./component-92c13614.js";import{t as q}from"./Text-561f173c.js";import{C as b}from"./Flex-1cfc0a73.js";import{H as e}from"./Heading-1229930b.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./extends-98964cd2.js";import"./Box-f074bc4b.js";var F=globalThis&&globalThis.__rest||function(h,o){var d={};for(var i in h)Object.prototype.hasOwnProperty.call(h,i)&&o.indexOf(i)<0&&(d[i]=h[i]);if(h!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(h);r<i.length;r++)o.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(h,i[r])&&(d[i[r]]=h[i[r]]);return d};const D="div",G={h1:"$3",h2:"$3",h3:"$2",h4:"$2",h5:"$1",h6:"$1"},L=V(D,"c-subheading",z({fontWeight:"$regular",color:"$text.secondary",marginTop:"$1",marginBottom:"$4"})),N=A(L,q),n=B((h,o)=>{var d,{variant:i="h3",as:r=D,children:I}=h,U=F(h,["variant","as","children"]);return a(N,Object.assign({size:(d=G[i])!==null&&d!==void 0?d:"$3",role:"doc-subtitle"},U,{asChild:!0,ref:o,children:a(r,{children:I})}))});n.displayName="Subheading";const Z={title:"Components/Subheading",component:n},u={args:{children:"This is a subheading"}},t=()=>c(b,{children:[a(n,{variant:"h1",children:"Subheading 1"}),a(n,{variant:"h2",children:"Subheading 2"}),a(n,{variant:"h3",children:"Subheading 3"}),a(n,{variant:"h4",children:"Subheading 4"}),a(n,{variant:"h5",children:"Subheading 5"}),a(n,{variant:"h6",children:"Subheading 6"})]}),s=()=>c(b,{children:[a(e,{variant:"h1",children:"Heading 1"}),a(n,{variant:"h1",children:"This is the subheading for h1"}),a(e,{variant:"h2",children:"Heading 2"}),a(n,{variant:"h2",children:"This is the subheading for h2"}),a(e,{variant:"h3",children:"Heading 3"}),a(n,{variant:"h3",children:"This is the subheading for h3"}),a(e,{variant:"h4",children:"Heading 4"}),a(n,{variant:"h4",children:"This is the subheading for h4"}),a(e,{variant:"h5",children:"Heading 5"}),a(n,{variant:"h5",children:"This is the subheading for h5"}),a(e,{variant:"h6",children:"Heading 6"}),a(n,{variant:"h6",children:"This is the subheading for h6"})]}),g=()=>c(b,{children:[a(e,{variant:"h1",children:"Heading 1"}),a(n,{variant:"h1",as:"h2",children:"This h2 the subheading for h1"}),a(e,{variant:"h2",children:"Heading 2"}),a(n,{variant:"h2",as:"h3",children:"This h3 the subheading for h2"}),a(e,{variant:"h3",children:"Heading 3"}),a(n,{variant:"h3",as:"h4",children:"This h4 the subheading for h3"}),a(e,{variant:"h4",children:"Heading 4"}),a(n,{variant:"h4",as:"h5",children:"This h5 the subheading for h4"}),a(e,{variant:"h5",children:"Heading 5"}),a(n,{variant:"h5",as:"h6",children:"This h6 the subheading for h5"}),a(e,{variant:"h6",children:"Heading 6"}),a(n,{variant:"h6",children:"This div the subheading for h6"})]});var l,v,p;u.parameters={...u.parameters,docs:{...(l=u.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: 'This is a subheading'
  }
}`,...(p=(v=u.parameters)==null?void 0:v.docs)==null?void 0:p.source}}};var S,m,f,H,T;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`() => <Column>
    <Subheading variant="h1">Subheading 1</Subheading>
    <Subheading variant="h2">Subheading 2</Subheading>
    <Subheading variant="h3">Subheading 3</Subheading>
    <Subheading variant="h4">Subheading 4</Subheading>
    <Subheading variant="h5">Subheading 5</Subheading>
    <Subheading variant="h6">Subheading 6</Subheading>
  </Column>`,...(f=(m=t.parameters)==null?void 0:m.docs)==null?void 0:f.source},description:{story:"The standard heading hX variants are supported, this, by default also adjusts the html tag",...(T=(H=t.parameters)==null?void 0:H.docs)==null?void 0:T.description}}};var y,O,$,C,j;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`() => <Column>
    <Heading variant="h1">Heading 1</Heading>
    <Subheading variant="h1">This is the subheading for h1</Subheading>
    <Heading variant="h2">Heading 2</Heading>
    <Subheading variant="h2">This is the subheading for h2</Subheading>
    <Heading variant="h3">Heading 3</Heading>
    <Subheading variant="h3">This is the subheading for h3</Subheading>
    <Heading variant="h4">Heading 4</Heading>
    <Subheading variant="h4">This is the subheading for h4</Subheading>
    <Heading variant="h5">Heading 5</Heading>
    <Subheading variant="h5">This is the subheading for h5</Subheading>
    <Heading variant="h6">Heading 6</Heading>
    <Subheading variant="h6">This is the subheading for h6</Subheading>
  </Column>`,...($=(O=s.parameters)==null?void 0:O.docs)==null?void 0:$.source},description:{story:"The display font can be used when a different heading style is required, say for blog posts.",...(j=(C=s.parameters)==null?void 0:C.docs)==null?void 0:j.description}}};var x,_,w,P,E;g.parameters={...g.parameters,docs:{...(x=g.parameters)==null?void 0:x.docs,source:{originalSource:`() => <Column>
    <Heading variant="h1">Heading 1</Heading>
    <Subheading variant="h1" as="h2">
      This h2 the subheading for h1
    </Subheading>
    <Heading variant="h2">Heading 2</Heading>
    <Subheading variant="h2" as="h3">
      This h3 the subheading for h2
    </Subheading>
    <Heading variant="h3">Heading 3</Heading>
    <Subheading variant="h3" as="h4">
      This h4 the subheading for h3
    </Subheading>
    <Heading variant="h4">Heading 4</Heading>
    <Subheading variant="h4" as="h5">
      This h5 the subheading for h4
    </Subheading>
    <Heading variant="h5">Heading 5</Heading>
    <Subheading variant="h5" as="h6">
      This h6 the subheading for h5
    </Subheading>
    <Heading variant="h6">Heading 6</Heading>
    <Subheading variant="h6">This div the subheading for h6</Subheading>
  </Column>`,...(w=(_=g.parameters)==null?void 0:_.docs)==null?void 0:w.source},description:{story:"The the subheading renders as a `div` by default, use the as props to render as a heading element.",...(E=(P=g.parameters)==null?void 0:P.docs)==null?void 0:E.description}}};const aa=["Default","Variants","InUse","Polymorphic"];export{u as Default,s as InUse,g as Polymorphic,t as Variants,aa as __namedExportsOrder,Z as default};
//# sourceMappingURL=Subheading.stories-0ca98ef4.js.map

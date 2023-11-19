import{j as l,a}from"./jsx-runtime-03b4ddbf.js";import{s as O,b as D,g as F}from"./component-92c13614.js";import{F as v}from"./Flex-1cfc0a73.js";import{H as c}from"./Heading-1229930b.js";import{a as t}from"./Icons-43292f8c.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./extends-98964cd2.js";import"./Box-f074bc4b.js";import"./Text-561f173c.js";import"./mdi-685d5538.js";import"./Svg-cfd7f95e.js";var j=globalThis&&globalThis.__rest||function(i,d){var o={};for(var e in i)Object.prototype.hasOwnProperty.call(i,e)&&d.indexOf(e)<0&&(o[e]=i[e]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,e=Object.getOwnPropertySymbols(i);s<e.length;s++)d.indexOf(e[s])<0&&Object.prototype.propertyIsEnumerable.call(i,e[s])&&(o[e[s]]=i[e[s]]);return o};const E="span",f=20,m=O(E,D({base:{display:"inline-flex",position:"relative",flexShrink:0,verticalAlign:"middle"}}));m.displayName="BadgeRoot";const R=D({base:{top:"0",right:"0",transform:"scale(1) translate(90%, -70%)",transformOrigin:"100% 0%",display:"flex",padding:"0 token(sizes.$1)",zIndex:1,position:"absolute",flexWrap:"wrap",fontSize:"$-2",alignItems:"center",fontWeight:500,lineHeight:1,alignContent:"center",flexDirection:"row",justifyContent:"center",backgroundColor:"colorPalette.9",color:"colorPalette.text"},variants:{status:{false:{height:f,minWidth:f,borderRadius:"$pill"},true:{height:"$2",minWidth:"$2",padding:0,borderRadius:"$round"}},variant:{neutral:{colorPalette:"$neutral"},ghost:{},primary:{colorPalette:"$primary"},secondary:{colorPalette:"$secondary"},error:{colorPalette:"$error"},info:{colorPalette:"$info"},success:{colorPalette:"$success"},warn:{colorPalette:"$warning"}}},defaultVariants:{variant:"neutral",status:!1}}),I=O(E,R),r=F((i,d)=>{var{children:o,content:e,max:s}=i,_=j(i,["children","content","max"]);return l(m,{children:[o,a(I,Object.assign({},_,{ref:d,status:!1,children:typeof e=="number"&&s!=null&&e>s?`${s}+`:e}))]})});r.displayName="Badge";const n=F((i,d)=>{var{children:o}=i,e=j(i,["children"]);return l(m,{children:[o,a(I,Object.assign({},e,{status:!0,ref:d}))]})});n.displayName="Status";const Q={title:"Components/Badge",component:r},h=()=>l(v,{css:{gap:"$6",flexWrap:"wrap"},children:[a(r,{content:"text",children:a(c,{variant:"h5",children:"Default"})}),a(r,{variant:"primary",content:9,max:99,children:a(c,{variant:"h5",children:"Primary"})}),a(r,{variant:"ghost",content:99,max:99,children:a(c,{variant:"h5",children:"Ghost"})}),a(r,{variant:"secondary",content:999,max:99,children:a(c,{variant:"h5",children:"Secondary"})}),a(r,{variant:"error",content:9999,max:99,children:a(c,{variant:"h5",children:"Error"})}),a(r,{variant:"success",content:99999,max:99,children:a(c,{variant:"h5",children:"Success"})}),a(r,{variant:"info",content:999999,max:99,children:a(c,{variant:"h5",children:"Warning"})})]}),g=()=>l(v,{css:{gap:"$6",flexWrap:"wrap"},children:[a(r,{content:"text",children:a(t,{})}),a(r,{variant:"primary",content:4,children:a(t,{})}),a(r,{variant:"ghost",content:4,children:a(t,{})}),a(r,{variant:"secondary",content:4,children:a(t,{})}),a(r,{variant:"error",content:4,children:a(t,{})}),a(r,{variant:"success",content:4,children:a(t,{})}),a(r,{variant:"info",content:4,children:a(t,{})})]}),p=()=>l(v,{css:{gap:"$6",flexWrap:"wrap"},children:[a(n,{children:a(c,{variant:"h5",children:"Default"})}),a(n,{variant:"primary",children:a(c,{variant:"h5",children:"Primary"})}),a(n,{variant:"secondary",children:a(c,{variant:"h5",children:"Secondary"})}),a(n,{variant:"error",children:a(c,{variant:"h5",children:"Error"})}),a(n,{variant:"success",children:a(c,{variant:"h5",children:"Success"})}),a(n,{variant:"info",children:a(c,{variant:"h5",children:"Warning"})})]}),u=()=>l(v,{css:{gap:"$6",flexWrap:"wrap"},children:[a(n,{children:a(t,{})}),a(n,{variant:"primary",children:a(t,{})}),a(n,{variant:"ghost",children:a(t,{})}),a(n,{variant:"secondary",children:a(t,{})}),a(n,{variant:"error",children:a(t,{})}),a(n,{variant:"success",children:a(t,{})}),a(n,{variant:"info",children:a(t,{})})]});var x,S,y;h.parameters={...h.parameters,docs:{...(x=h.parameters)==null?void 0:x.docs,source:{originalSource:`() => <Flex css={{
  gap: '$6',
  flexWrap: 'wrap'
}}>
    <Badge content={'text'}>
      <Heading variant="h5">Default</Heading>
    </Badge>
    <Badge variant="primary" content={9} max={99}>
      <Heading variant="h5">Primary</Heading>
    </Badge>
    <Badge variant="ghost" content={99} max={99}>
      <Heading variant="h5">Ghost</Heading>
    </Badge>
    <Badge variant="secondary" content={999} max={99}>
      <Heading variant="h5">Secondary</Heading>
    </Badge>
    <Badge variant="error" content={9999} max={99}>
      <Heading variant="h5">Error</Heading>
    </Badge>
    <Badge variant="success" content={99999} max={99}>
      <Heading variant="h5">Success</Heading>
    </Badge>
    <Badge variant="info" content={999999} max={99}>
      <Heading variant="h5">Warning</Heading>
    </Badge>
  </Flex>`,...(y=(S=h.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var B,H,$;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`() => <Flex css={{
  gap: '$6',
  flexWrap: 'wrap'
}}>
    <Badge content={'text'}>
      <Check />
    </Badge>
    <Badge variant="primary" content={4}>
      <Check />
    </Badge>
    <Badge variant="ghost" content={4}>
      <Check />
    </Badge>
    <Badge variant="secondary" content={4}>
      <Check />
    </Badge>
    <Badge variant="error" content={4}>
      <Check />
    </Badge>
    <Badge variant="success" content={4}>
      <Check />
    </Badge>
    <Badge variant="info" content={4}>
      <Check />
    </Badge>
  </Flex>`,...($=(H=g.parameters)==null?void 0:H.docs)==null?void 0:$.source}}};var b,C,k;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`() => <Flex css={{
  gap: '$6',
  flexWrap: 'wrap'
}}>
    <Status>
      <Heading variant="h5">Default</Heading>
    </Status>
    <Status variant="primary">
      <Heading variant="h5">Primary</Heading>
    </Status>
    <Status variant="secondary">
      <Heading variant="h5">Secondary</Heading>
    </Status>
    <Status variant="error">
      <Heading variant="h5">Error</Heading>
    </Status>
    <Status variant="success">
      <Heading variant="h5">Success</Heading>
    </Status>
    <Status variant="info">
      <Heading variant="h5">Warning</Heading>
    </Status>
  </Flex>`,...(k=(C=p.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var w,P,W;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`() => <Flex css={{
  gap: '$6',
  flexWrap: 'wrap'
}}>
    <Status>
      <Check />
    </Status>
    <Status variant="primary">
      <Check />
    </Status>
    <Status variant="ghost">
      <Check />
    </Status>
    <Status variant="secondary">
      <Check />
    </Status>
    <Status variant="error">
      <Check />
    </Status>
    <Status variant="success">
      <Check />
    </Status>
    <Status variant="info">
      <Check />
    </Status>
  </Flex>`,...(W=(P=u.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};const X=["Default","Icons","StatusBadge","DottedIcons"];export{h as Default,u as DottedIcons,g as Icons,p as StatusBadge,X as __namedExportsOrder,Q as default};
//# sourceMappingURL=Badge.stories-8f4641eb.js.map

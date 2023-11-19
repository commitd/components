import{j as Q,a as c}from"./jsx-runtime-03b4ddbf.js";import{t as M}from"./component-92c13614.js";import"./index-76fb7be0.js";import{E as m}from"./Variants-32aa23ce.js";import{S as N}from"./Stack-d8c3aa6d.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-de833af9.js";import"./Box-f074bc4b.js";import"./Grid-599ad893.js";import"./Tooltip-53dd1a2c.js";import"./index-45a327ec.js";import"./index-421204d3.js";import"./index-296a96c6.js";import"./index-77dbc890.js";import"./index-add592e3.js";import"./index-f8c8b8ff.js";import"./index-01bbf444.js";import"./index-1a2315aa.js";import"./index-251d008c.js";import"./index-c6da0816.js";import"./index-207695d4.js";import"./Text-561f173c.js";import"./ConditionalWrapper-8865b2c1.js";const Se={title:"Components/Stack",component:N,argTypes:{spacing:{control:{type:"select",options:["small","default","large","responsive"]},description:"The spacing is available in 3 different sizes, and a responsive version."},align:{control:{type:"select",options:["left","center","right"]},description:"The horizontal alignment can be set using the align prop."}}},e={render:({height:i,width:p,...P})=>Q(N,{...P,children:[c(m,{height:i,width:p}),c(m,{height:i,width:p}),c(m,{height:i,width:p})]})},r={...e,args:{spacing:"small",height:M("sizes.$6")}},s={...e,args:{spacing:"large",height:M("sizes.$10")}},t={...e,args:{spacing:"responsive"}},a={...e,args:{width:"25%",align:"left"}},o={...e,args:{width:"25%",align:"center"}},n={...e,args:{width:"25%",align:"right"}};var g,l,d;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: ({
    height,
    width,
    ...args
  }) => <Stack {...args}>
      <ExampleComponent height={height} width={width} />
      <ExampleComponent height={height} width={width} />
      <ExampleComponent height={height} width={width} />
    </Stack>
}`,...(d=(l=e.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var h,u,f,S,k;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...Default,
  args: {
    spacing: 'small',
    height: token('sizes.$6')
  }
}`,...(f=(u=r.parameters)==null?void 0:u.docs)==null?void 0:f.source},description:{story:"`small` spacing can be used for the stacking of smaller components",...(k=(S=r.parameters)==null?void 0:S.docs)==null?void 0:k.description}}};var w,y,v,x,D;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  ...Default,
  args: {
    spacing: 'large',
    height: token('sizes.$10')
  }
}`,...(v=(y=s.parameters)==null?void 0:y.docs)==null?void 0:v.source},description:{story:"`large` spacing can be used for the stacking of large components",...(D=(x=s.parameters)==null?void 0:x.docs)==null?void 0:D.description}}};var b,C,z,E,L;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...Default,
  args: {
    spacing: 'responsive'
  }
}`,...(z=(C=t.parameters)==null?void 0:C.docs)==null?void 0:z.source},description:{story:"`responsive` spacing can be used for stacks used across multiple display types",...(L=(E=t.parameters)==null?void 0:E.docs)==null?void 0:L.description}}};var $,j,T,_,B;a.parameters={...a.parameters,docs:{...($=a.parameters)==null?void 0:$.docs,source:{originalSource:`{
  ...Default,
  args: {
    width: '25%',
    align: 'left'
  }
}`,...(T=(j=a.parameters)==null?void 0:j.docs)==null?void 0:T.source},description:{story:"`left` alignment is the default",...(B=(_=a.parameters)==null?void 0:_.docs)==null?void 0:B.description}}};var R,O,q,A,F;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
  ...Default,
  args: {
    width: '25%',
    align: 'center'
  }
}`,...(q=(O=o.parameters)==null?void 0:O.docs)==null?void 0:q.source},description:{story:"`center` alignment can be used to put items in the center of the stack",...(F=(A=o.parameters)==null?void 0:A.docs)==null?void 0:F.description}}};var G,H,I,J,K;n.parameters={...n.parameters,docs:{...(G=n.parameters)==null?void 0:G.docs,source:{originalSource:`{
  ...Default,
  args: {
    width: '25%',
    align: 'right'
  }
}`,...(I=(H=n.parameters)==null?void 0:H.docs)==null?void 0:I.source},description:{story:"`right` alignment can be used to align items to the right of the stack",...(K=(J=n.parameters)==null?void 0:J.docs)==null?void 0:K.description}}};const ke=["Default","Small","Large","Responsive","Left","Center","Bottom"];export{n as Bottom,o as Center,e as Default,s as Large,a as Left,t as Responsive,r as Small,ke as __namedExportsOrder,Se as default};
//# sourceMappingURL=Stack.stories-b1baad95.js.map

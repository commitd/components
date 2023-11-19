import{j as X,a as e}from"./jsx-runtime-03b4ddbf.js";import{t as Y}from"./component-92c13614.js";import"./index-76fb7be0.js";import{E as t}from"./Variants-32aa23ce.js";import{I as l}from"./Inline-fdf2c0ff.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-de833af9.js";import"./Box-f074bc4b.js";import"./Grid-599ad893.js";import"./Tooltip-53dd1a2c.js";import"./index-45a327ec.js";import"./index-421204d3.js";import"./index-296a96c6.js";import"./index-77dbc890.js";import"./index-add592e3.js";import"./index-f8c8b8ff.js";import"./index-01bbf444.js";import"./index-1a2315aa.js";import"./index-251d008c.js";import"./index-c6da0816.js";import"./index-207695d4.js";import"./Text-561f173c.js";import"./ConditionalWrapper-8865b2c1.js";const ve={title:"Components/Inline",component:l,argTypes:{spacing:{control:{type:"select",options:["small","default","large","responsive"]},description:"The spacing is available in 3 different sizes, and a responsive version."}}},r={render:({height:c,width:d,...Z})=>X(l,{...Z,children:[e(t,{height:c,width:d}),e(t,{height:c,width:d}),e(t,{height:c,width:d})]})},s={...r,args:{spacing:"small",height:Y("sizes.$6")}},n={...r,args:{spacing:"large",height:Y("sizes.$10")}},o={...r,args:{spacing:"responsive"}},a={...r,args:{width:"25%",align:"left"}},i={...r,args:{width:"25%",align:"center"}},p={...r,args:{width:"25%",align:"right"}},m=()=>X(l,{wrap:!0,children:[e(t,{width:"100px"}),e(t,{width:"100px"}),e(t,{width:"100px"}),e(t,{width:"100px"}),e(t,{width:"100px"}),e(t,{width:"100px"}),e(t,{width:"100px"}),e(t,{width:"100px"}),e(t,{width:"100px"}),e(t,{width:"100px"}),e(t,{width:"100px"})]});var h,g,u;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: ({
    height,
    width,
    ...args
  }) => <Inline {...args}>
      <ExampleComponent height={height} width={width} />
      <ExampleComponent height={height} width={width} />
      <ExampleComponent height={height} width={width} />
    </Inline>
}`,...(u=(g=r.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var x,w,f,C,E;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  ...Default,
  args: {
    spacing: 'small',
    height: token('sizes.$6')
  }
}`,...(f=(w=s.parameters)==null?void 0:w.docs)==null?void 0:f.source},description:{story:"`small` spacing can be used for the spacing of smaller components",...(E=(C=s.parameters)==null?void 0:C.docs)==null?void 0:E.description}}};var y,S,v,D,I;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...Default,
  args: {
    spacing: 'large',
    height: token('sizes.$10')
  }
}`,...(v=(S=n.parameters)==null?void 0:S.docs)==null?void 0:v.source},description:{story:"`large` spacing can be used for the spacing of large components",...(I=(D=n.parameters)==null?void 0:D.docs)==null?void 0:I.description}}};var b,k,z,L,$;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...Default,
  args: {
    spacing: 'responsive'
  }
}`,...(z=(k=o.parameters)==null?void 0:k.docs)==null?void 0:z.source},description:{story:"`responsive` spacing can be used across multiple display types",...($=(L=o.parameters)==null?void 0:L.docs)==null?void 0:$.description}}};var j,_,B,R,T;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...Default,
  args: {
    width: '25%',
    align: 'left'
  }
}`,...(B=(_=a.parameters)==null?void 0:_.docs)==null?void 0:B.source},description:{story:"`left` alignment is the default",...(T=(R=a.parameters)==null?void 0:R.docs)==null?void 0:T.description}}};var W,A,O,q,F;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  ...Default,
  args: {
    width: '25%',
    align: 'center'
  }
}`,...(O=(A=i.parameters)==null?void 0:A.docs)==null?void 0:O.source},description:{story:"`center` alignment can be used to put items in the center of the stack",...(F=(q=i.parameters)==null?void 0:q.docs)==null?void 0:F.description}}};var G,H,J,K,M;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  ...Default,
  args: {
    width: '25%',
    align: 'right'
  }
}`,...(J=(H=p.parameters)==null?void 0:H.docs)==null?void 0:J.source},description:{story:"`right` alignment can be used to align items to the right of the stack",...(M=(K=p.parameters)==null?void 0:K.docs)==null?void 0:M.description}}};var N,P,Q,U,V;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`() => <Inline wrap>
    <ExampleComponent width="100px" />
    <ExampleComponent width="100px" />
    <ExampleComponent width="100px" />
    <ExampleComponent width="100px" />
    <ExampleComponent width="100px" />
    <ExampleComponent width="100px" />
    <ExampleComponent width="100px" />
    <ExampleComponent width="100px" />
    <ExampleComponent width="100px" />
    <ExampleComponent width="100px" />
    <ExampleComponent width="100px" />
  </Inline>`,...(Q=(P=m.parameters)==null?void 0:P.docs)==null?void 0:Q.source},description:{story:"Add the `wrap` prop to allow the inline element to wrap the children",...(V=(U=m.parameters)==null?void 0:U.docs)==null?void 0:V.description}}};const De=["Default","Small","Large","Responsive","Left","Center","Bottom","Wrap"];export{p as Bottom,i as Center,r as Default,n as Large,a as Left,o as Responsive,s as Small,m as Wrap,De as __namedExportsOrder,ve as default};
//# sourceMappingURL=Inline.stories-848c1ca7.js.map

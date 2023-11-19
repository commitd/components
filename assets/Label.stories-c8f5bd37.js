import{j as s,F as O,a as o}from"./jsx-runtime-03b4ddbf.js";import{L as n,b as S}from"./Label-bb409e96.js";import{I as k}from"./Input-0138999c.js";import{C as w}from"./Checkbox-ee294c7f.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./extends-98964cd2.js";import"./index-77dbc890.js";import"./index-add592e3.js";import"./component-92c13614.js";import"./Text-561f173c.js";import"./index-421204d3.js";import"./index-45a327ec.js";import"./index-11a3acc1.js";import"./index-1a2315aa.js";import"./index-c6da0816.js";import"./Icons-43292f8c.js";import"./mdi-685d5538.js";import"./Svg-cfd7f95e.js";import"./ConditionalWrapper-8865b2c1.js";const U={title:"Components/Label",component:n,subcomponents:{LabelOptional:S}},a={args:{children:"Label"}},e={render:()=>s(O,{children:[o(n,{weight:"bold",htmlFor:"firstName",children:"First name"}),o(k,{type:"text",id:"firstName"})]})},r={render:()=>s(n,{size:"$2",variant:"inline",children:[o(w,{}),"Label"]})},t={render:()=>s(O,{children:[s(n,{htmlFor:"firstName",children:["First name",o(S,{})]}),o(k,{type:"text",id:"firstName"})]})};var i,p,m;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: 'Label'
  }
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var d,c,l,u,h;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <>
      <Label weight="bold" htmlFor="firstName">
        First name
      </Label>
      <Input type="text" id="firstName" />
    </>
}`,...(l=(c=e.parameters)==null?void 0:c.docs)==null?void 0:l.source},description:{story:"Form parts, `Input`, `Checkbox`, etc. support a label props that uses the default styling for the control.\n\nIf you want to customize the styling you can use the Label separately and use the `htmlFor` prop and the aria support will be added for you.\n`Label` supports the same additional props as `Text`.",...(h=(u=e.parameters)==null?void 0:u.docs)==null?void 0:h.description}}};var b,f,L,y,F;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <Label size="$2" variant="inline">
      <Checkbox />
      Label
    </Label>
}`,...(L=(f=r.parameters)==null?void 0:f.docs)==null?void 0:L.source},description:{story:"If a for part component is nested, clicks are passed on the component and the `htmlFor` is not required.\n\nSome variants support the common use cases.",...(F=(y=r.parameters)==null?void 0:y.docs)==null?void 0:F.description}}};var g,x,N,I,C;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <>
      <Label htmlFor="firstName">
        First name
        <LabelOptional />
      </Label>
      <Input type="text" id="firstName" />
    </>
}`,...(N=(x=t.parameters)==null?void 0:x.docs)==null?void 0:N.source},description:{story:"A optional flag can be added - this is handled by default in forms.",...(C=(I=t.parameters)==null?void 0:I.docs)==null?void 0:C.description}}};const V=["Default","WithInputs","NestedComponent","Optional"];export{a as Default,r as NestedComponent,t as Optional,e as WithInputs,V as __namedExportsOrder,U as default};
//# sourceMappingURL=Label.stories-c8f5bd37.js.map

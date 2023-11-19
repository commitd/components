import{j as o,a as e}from"./jsx-runtime-03b4ddbf.js";import{R as X}from"./index-76fb7be0.js";import"./Variants-32aa23ce.js";import"./component-92c13614.js";import{F as Y,b as Z,a as $}from"./withForm-df956169.js";import{R as t,a}from"./RadioGroup-7841df2b.js";import{I as c}from"./Inline-fdf2c0ff.js";import{F as ee}from"./FormControl-6b9cc0be.js";import"./_commonjsHelpers-de833af9.js";import"./Box-f074bc4b.js";import"./Grid-599ad893.js";import"./Tooltip-53dd1a2c.js";import"./extends-98964cd2.js";import"./index-45a327ec.js";import"./index-421204d3.js";import"./index-296a96c6.js";import"./index-77dbc890.js";import"./index-add592e3.js";import"./index-f8c8b8ff.js";import"./index-01bbf444.js";import"./index-1a2315aa.js";import"./index-251d008c.js";import"./index-c6da0816.js";import"./index-207695d4.js";import"./Text-561f173c.js";import"./ConditionalWrapper-8865b2c1.js";import"./Button-23e6de97.js";import"./Svg-cfd7f95e.js";import"./index-d178eb19.js";import"./index-7896d420.js";import"./index-c6b1b4f9.js";import"./index-11a3acc1.js";import"./Checkbox-ee294c7f.js";import"./Label-bb409e96.js";import"./Icons-43292f8c.js";import"./mdi-685d5538.js";const ae={Radio:a},Le={title:"Components/Radio",component:t,subcomponents:ae},u=()=>o(t,{children:[e(a,{value:"mobx",label:"Mobx"}),e(a,{value:"redux",label:"Redux"}),e(a,{value:"context",label:"Context"})]}),r=()=>o(t,{children:[e(a,{variant:"solid",value:"mobx",label:"Mobx"}),e(a,{variant:"solid",value:"redux",label:"Redux"}),e(a,{variant:"solid",value:"context",label:"Context"})]}),l=()=>o(c,{children:[o(t,{orientation:"vertical",children:[e(a,{value:"mobx",label:"Mobx"}),e(a,{value:"redux",label:"Redux"}),e(a,{value:"context",label:"Context"})]}),o(t,{orientation:"horizontal",children:[e(a,{value:"mobx",label:"Mobx"}),e(a,{value:"redux",label:"Redux"}),e(a,{value:"context",label:"Context"})]})]}),s=()=>{const[Q,U]=X.useState("redux");return o(t,{value:Q,onValueChange:W=>U(W),children:[e(a,{value:"mobx",label:"Mobx"}),e(a,{value:"redux",label:"Redux"}),e(a,{value:"context",label:"Context"})]})},n=()=>o(c,{children:[o(t,{defaultValue:"redux",children:[e(a,{value:"mobx",label:"Mobx"}),e(a,{value:"redux",label:"Redux"}),e(a,{disabled:!0,value:"context",label:"Context"})]}),o(t,{defaultValue:"context",children:[e(a,{variant:"solid",disabled:!0,value:"mobx",label:"Mobx"}),e(a,{variant:"solid",disabled:!0,value:"redux",label:"Redux"}),e(a,{variant:"solid",disabled:!0,value:"context",label:"Context"})]}),e(ee,{children:o(t,{disabled:!0,defaultValue:"context",children:[e(a,{value:"mobx",label:"Mobx"}),e(a,{value:"redux",label:"Redux"}),e(a,{value:"context",label:"Context"})]})})]}),x=()=>o(c,{children:[o(t,{label:"Choose",children:[e(a,{destructive:!0,value:"mobx",label:"Mobx"}),e(a,{destructive:!0,value:"redux",label:"Redux"}),e(a,{destructive:!0,value:"context",label:"Context"})]}),o(t,{label:"Choose",children:[e(a,{destructive:!0,variant:"solid",value:"mobx",label:"Mobx"}),e(a,{destructive:!0,variant:"solid",value:"redux",label:"Redux"}),e(a,{destructive:!0,variant:"solid",value:"context",label:"Context"})]})]}),i=()=>o(c,{children:[o(t,{orientation:"vertical",children:[e(a,{value:"mobx"}),e(a,{value:"redux"}),e(a,{value:"context"})]}),o(t,{orientation:"horizontal",defaultValue:"context",children:[e(a,{variant:"solid",value:"mobx"}),e(a,{variant:"solid",value:"redux"}),e(a,{variant:"solid",value:"context"})]})]}),d=()=>o(Y,{onSubmit:Z(alert),children:[o(t,{name:"radio",id:"radio-test",label:"Radio",children:[e(a,{value:"mobx",label:"Mobx"}),e(a,{value:"redux",label:"Redux"}),e(a,{value:"context",label:"Context"})]}),e($,{})]});var b,m,v;u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  return <RadioGroup>
      <Radio value="mobx" label="Mobx" />
      <Radio value="redux" label="Redux" />
      <Radio value="context" label="Context" />
    </RadioGroup>;
}`,...(v=(m=u.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};var p,R,h,C,G;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  return <RadioGroup>
      <Radio variant="solid" value="mobx" label="Mobx" />
      <Radio variant="solid" value="redux" label="Redux" />
      <Radio variant="solid" value="context" label="Context" />
    </RadioGroup>;
}`,...(h=(R=r.parameters)==null?void 0:R.docs)==null?void 0:h.source},description:{story:"A solid variants is also available but should be used sparingly, e.g. when the only or most important control on the page.",...(G=(C=r.parameters)==null?void 0:C.docs)==null?void 0:G.description}}};var M,f,F,g,S;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
  return <Inline>
      <RadioGroup orientation="vertical">
        <Radio value="mobx" label="Mobx" />
        <Radio value="redux" label="Redux" />
        <Radio value="context" label="Context" />
      </RadioGroup>
      <RadioGroup orientation="horizontal">
        <Radio value="mobx" label="Mobx" />
        <Radio value="redux" label="Redux" />
        <Radio value="context" label="Context" />
      </RadioGroup>
    </Inline>;
}`,...(F=(f=l.parameters)==null?void 0:f.docs)==null?void 0:F.source},description:{story:"The groups can be orientated horizontally or vertically (default).",...(S=(g=l.parameters)==null?void 0:g.docs)==null?void 0:S.description}}};var I,V,y;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState('redux');
  return <RadioGroup value={value} onValueChange={v => setValue(v)}>
      <Radio value="mobx" label="Mobx" />
      <Radio value="redux" label="Redux" />
      <Radio value="context" label="Context" />
    </RadioGroup>;
}`,...(y=(V=s.parameters)==null?void 0:V.docs)==null?void 0:y.source}}};var D,w,z,j,N;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  return <Inline>
      <RadioGroup defaultValue="redux">
        <Radio value="mobx" label="Mobx" />
        <Radio value="redux" label="Redux" />
        <Radio disabled value="context" label="Context" />
      </RadioGroup>
      <RadioGroup defaultValue="context">
        <Radio variant="solid" disabled value="mobx" label="Mobx" />
        <Radio variant="solid" disabled value="redux" label="Redux" />
        <Radio variant="solid" disabled value="context" label="Context" />
      </RadioGroup>
      <FormControl>
        <RadioGroup disabled defaultValue="context">
          <Radio value="mobx" label="Mobx" />
          <Radio value="redux" label="Redux" />
          <Radio value="context" label="Context" />
        </RadioGroup>
      </FormControl>
    </Inline>;
}`,...(z=(w=n.parameters)==null?void 0:w.docs)==null?void 0:z.source},description:{story:`Individual radio items can be disabled.

The disabled prop on radio item can be used inside a FormControl.`,...(N=(j=n.parameters)==null?void 0:j.docs)==null?void 0:N.description}}};var O,T,k;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  return <Inline>
      <RadioGroup label="Choose">
        <Radio destructive value="mobx" label="Mobx" />
        <Radio destructive value="redux" label="Redux" />
        <Radio destructive value="context" label="Context" />
      </RadioGroup>
      <RadioGroup label="Choose">
        <Radio destructive variant="solid" value="mobx" label="Mobx" />
        <Radio destructive variant="solid" value="redux" label="Redux" />
        <Radio destructive variant="solid" value="context" label="Context" />
      </RadioGroup>
    </Inline>;
}`,...(k=(T=x.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var B,L,_,q,A;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
  return <Inline>
      <RadioGroup orientation="vertical">
        <Radio value="mobx" />
        <Radio value="redux" />
        <Radio value="context" />
      </RadioGroup>
      <RadioGroup orientation="horizontal" defaultValue="context">
        <Radio variant="solid" value="mobx" />
        <Radio variant="solid" value="redux" />
        <Radio variant="solid" value="context" />
      </RadioGroup>
    </Inline>;
}`,...(_=(L=i.parameters)==null?void 0:L.docs)==null?void 0:_.source},description:{story:"This story just checks the spacing works without labels but this would be a rare requirement. Normally, you would have labels.",...(A=(q=i.parameters)==null?void 0:q.docs)==null?void 0:A.description}}};var E,H,J,K,P;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
  return <Form onSubmit={withFormData(alert)}>
      <RadioGroup name="radio" id="radio-test" label="Radio">
        <Radio value="mobx" label="Mobx" />
        <Radio value="redux" label="Redux" />
        <Radio value="context" label="Context" />
      </RadioGroup>
      <FormButton />
    </Form>;
}`,...(J=(H=d.parameters)==null?void 0:H.docs)==null?void 0:J.source},description:{story:"Demo of use in a `Form`",...(P=(K=d.parameters)==null?void 0:K.docs)==null?void 0:P.description}}};const _e=["Default","Solid","Orientation","Controlled","Disabled","Destructive","NoLabels","InForm"];export{s as Controlled,u as Default,x as Destructive,n as Disabled,d as InForm,i as NoLabels,l as Orientation,r as Solid,_e as __namedExportsOrder,Le as default};
//# sourceMappingURL=RadioGroup.stories-63918f04.js.map

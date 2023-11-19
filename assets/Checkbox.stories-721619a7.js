import{a as e,j as p}from"./jsx-runtime-03b4ddbf.js";import{a as P}from"./chunk-AY7I2SME-c7b6cf8a.js";import{r as Q}from"./index-76fb7be0.js";import{V as R}from"./Variants-32aa23ce.js";import"./component-92c13614.js";import{F as U,b as X,a as Z,r as $}from"./withForm-df956169.js";import{C as r}from"./Checkbox-ee294c7f.js";import{F as l}from"./Flex-1cfc0a73.js";import"./_commonjsHelpers-de833af9.js";import"./Box-f074bc4b.js";import"./Grid-599ad893.js";import"./Tooltip-53dd1a2c.js";import"./extends-98964cd2.js";import"./index-45a327ec.js";import"./index-421204d3.js";import"./index-296a96c6.js";import"./index-77dbc890.js";import"./index-add592e3.js";import"./index-f8c8b8ff.js";import"./index-01bbf444.js";import"./index-1a2315aa.js";import"./index-251d008c.js";import"./index-c6da0816.js";import"./index-207695d4.js";import"./Text-561f173c.js";import"./ConditionalWrapper-8865b2c1.js";import"./Button-23e6de97.js";import"./Svg-cfd7f95e.js";import"./index-11a3acc1.js";import"./Label-bb409e96.js";import"./Icons-43292f8c.js";import"./mdi-685d5538.js";const Le={title:"Components/Checkbox",component:r},c={render:()=>e(r,{onCheckedChange:P("checked")})},t={render:()=>{const[n,h]=Q.useState(!1);return e(r,{checked:n,variant:"solid",onCheckedChange:h})}},d={render:()=>p(l,{gap:!0,children:[e(r,{variant:"solid",destructive:!0}),e(r,{destructive:!0})]})},i={render:()=>p(l,{gap:!0,children:[e(r,{disabled:!0,variant:"solid"}),e(r,{disabled:!0,variant:"solid",checked:!0}),e(r,{disabled:!0}),e(r,{disabled:!0,checked:!0})]})},o={render:()=>{const[n,h]=Q.useState("indeterminate"),u=$(h);return p(l,{gap:!0,children:[e(r,{checked:n,variant:"solid",onCheckedChange:u}),e(r,{checked:n,onCheckedChange:u})]})}},a={render:()=>e(r,{onCheckedChange:P("checked"),label:"Checkbox"})},s={render:()=>p(U,{onSubmit:X(alert),children:[e(r,{name:"demo",label:"Demo"}),e(Z,{})]})},m={render:()=>e(R,{component:r,variant:["solid","secondary"],destructive:[!1,!0],disabled:[!1,!0],checked:[!1,!0,"indeterminate"]})};var k,C,b;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <Checkbox onCheckedChange={action('checked')} />
}`,...(b=(C=c.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};var g,x,f,v,S;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState<CheckedState>(false);
    return <Checkbox checked={checked} variant="solid" onCheckedChange={setChecked} />;
  }
}`,...(f=(x=t.parameters)==null?void 0:x.docs)==null?void 0:f.source},description:{story:"A solid version for if the check is the main action.\n(This probably doesn't happen very often.)\n\nExample with state - __Note__ the use of `onCheckedChange` to get the change notification from all triggering actions.\nYou can import the `CheckedState` to get the correct typing.",...(S=(v=t.parameters)==null?void 0:v.docs)==null?void 0:S.description}}};var F,y,D;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => {
    return <Flex gap>
        <Checkbox variant="solid" destructive />
        <Checkbox destructive />
      </Flex>;
  }
}`,...(D=(y=d.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};var _,I,j;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    return <Flex gap>
        <Checkbox disabled variant="solid" />
        <Checkbox disabled variant="solid" checked />
        <Checkbox disabled />
        <Checkbox disabled checked />
      </Flex>;
  }
}`,...(j=(I=i.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};var w,A,E,L,T;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState<CheckedState>('indeterminate');
    const rotate = rotateCheckedState(setChecked);
    return <Flex gap>
        <Checkbox checked={checked} variant="solid" onCheckedChange={rotate} />
        <Checkbox checked={checked} onCheckedChange={rotate} />
      </Flex>;
  }
}`,...(E=(A=o.parameters)==null?void 0:A.docs)==null?void 0:E.source},description:{story:"Checkbox also support a `indeterminate` checked state.\nThis can only be used in a controlled behaviour.",...(T=(L=o.parameters)==null?void 0:L.docs)==null?void 0:T.description}}};var V,B,W,q,N;a.parameters={...a.parameters,docs:{...(V=a.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <Checkbox onCheckedChange={action('checked')} label="Checkbox" />
}`,...(W=(B=a.parameters)==null?void 0:B.docs)==null?void 0:W.source},description:{story:"The check box has a `label` prop to support adding a standard label.\nIf a custom label position or style is required use the `Label` component separately.",...(N=(q=a.parameters)==null?void 0:q.docs)==null?void 0:N.description}}};var O,Y,z,G,H;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    return <Form onSubmit={withFormData(alert)}>
        <Checkbox name="demo" label="Demo" />
        <FormButton />
      </Form>;
  }
}`,...(z=(Y=s.parameters)==null?void 0:Y.docs)==null?void 0:z.source},description:{story:"Demo of use in a `Form`",...(H=(G=s.parameters)==null?void 0:G.docs)==null?void 0:H.description}}};var J,K,M;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <Variants component={Checkbox} variant={['solid', 'secondary']} destructive={[false, true]} disabled={[false, true]} checked={[false, true, 'indeterminate']} />
}`,...(M=(K=m.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};const Te=["Default","Solid","Destructive","Disabled","Indeterminate","WithLabel","InForm","All"];export{m as All,c as Default,d as Destructive,i as Disabled,s as InForm,o as Indeterminate,t as Solid,a as WithLabel,Te as __namedExportsOrder,Le as default};
//# sourceMappingURL=Checkbox.stories-721619a7.js.map

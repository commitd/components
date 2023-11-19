import{j as l,a as e}from"./jsx-runtime-03b4ddbf.js";import{m as b,a as pe,b as Se}from"./mdi-685d5538.js";import"./Variants-32aa23ce.js";import"./component-92c13614.js";import"./index-76fb7be0.js";import{F as de,b as Ie,a as he}from"./withForm-df956169.js";import{S as r,a as t,b as I,c as h,d as g,e as te,f as le,g as re,h as ae,i as ce,j as oe,k as ne,l as me,m as ie,n as se,o as ue}from"./Select-564ad3c3.js";import{S as s}from"./Svg-cfd7f95e.js";import"./Box-f074bc4b.js";import"./Grid-599ad893.js";import"./Tooltip-53dd1a2c.js";import"./extends-98964cd2.js";import"./index-45a327ec.js";import"./index-421204d3.js";import"./index-296a96c6.js";import"./index-77dbc890.js";import"./index-add592e3.js";import"./_commonjsHelpers-de833af9.js";import"./index-f8c8b8ff.js";import"./index-01bbf444.js";import"./index-1a2315aa.js";import"./index-251d008c.js";import"./index-c6da0816.js";import"./index-207695d4.js";import"./Text-561f173c.js";import"./ConditionalWrapper-8865b2c1.js";import"./Button-23e6de97.js";import"./index-6a2b73ba.js";import"./index-7896d420.js";import"./index-c6b1b4f9.js";import"./index-56d74ee5.js";import"./index-11a3acc1.js";import"./Input-0138999c.js";import"./Label-bb409e96.js";import"./Paper-e773ea24.js";import"./Icons-43292f8c.js";const ve={SelectContent:ce,SelectGroup:I,SelectIcon:ae,SelectItem:t,SelectItemIndicator:se,SelectItemText:ie,SelectLabel:h,SelectScrollDownButton:ue,SelectScrollUpButton:oe,SelectTrigger:le,SelectValue:re,SelectViewport:ne,SelectRoot:te,SelectRootItem:me},et={title:"Components/Select",component:r,subcomponents:ve},a={render:v=>l(r,{defaultValue:"1",...v,children:[e(t,{value:"1",children:"Item 1"}),e(t,{value:"2",children:"Item 2"}),e(t,{value:"3",children:"Item 3"})]})},u={...a,args:{disabled:!0}},o=()=>l(r,{defaultValue:"grapes",children:[l(I,{children:[e(h,{children:"Fruits"}),e(t,{value:"apple",children:"Apple"}),e(t,{value:"banana",children:"Banana"}),e(t,{value:"blueberry",children:"Blueberry"}),e(t,{value:"grapes",children:"Grapes"}),e(t,{value:"pineapple",children:"Pineapple"})]}),e(g,{}),l(I,{children:[e(h,{children:"Vegetables"}),e(t,{value:"aubergine",children:"Aubergine"}),e(t,{value:"broccoli",children:"Broccoli"}),e(t,{value:"carrot",children:"Carrot"}),e(t,{value:"courgette",children:"Courgette"}),e(t,{value:"leek",children:"Leek"})]}),e(g,{}),l(I,{children:[e(h,{children:"Meats"}),e(t,{value:"chicken",children:"Chicken"}),e(t,{value:"pork",children:"Pork"}),e(t,{value:"beef",children:"Beef"})]})]}),p=()=>l(r,{defaultValue:"1",children:[e(t,{value:"1",children:"Item 1"}),e(t,{value:"2",children:"Item 2"}),e(t,{disabled:!0,value:"3",children:"Item 3"}),e(t,{disabled:!0,value:"4",children:"Item 4"}),e(t,{value:"5",children:"Item 5"})]}),S=()=>e(r,{defaultValue:"19",children:[...Array(50)].map((v,c)=>l(t,{value:c.toString(),children:["Item ",c]}))}),d={...a,args:{label:"Label"}},n=()=>l(r,{label:"Demo",name:"demo",placeholder:"Select an item...",children:[e(t,{value:"1",children:"Item 1"}),e(t,{value:"2",children:"Item 2"}),e(t,{value:"3",children:"Item 3"})]}),m=()=>l(te,{defaultValue:"19",children:[l(le,{children:[e(re,{}),e(ae,{children:e(s,{path:b})})]}),l(ce,{children:[e(oe,{children:e(s,{path:pe})}),e(ne,{children:[...Array(50)].map((v,c)=>l(me,{value:c.toString(),children:[l(ie,{children:["Item ",c]}),e(se,{children:e(s,{css:{color:"$success9"},path:Se})})]}))}),e(ue,{children:e(s,{path:b})})]})]}),i=()=>l(de,{onSubmit:Ie(alert),children:[l(r,{label:"Demo",name:"demo",defaultValue:"1",children:[e(t,{value:"1",children:"Item 1"}),e(t,{value:"2",children:"Item 2"}),e(t,{value:"3",children:"Item 3"})]}),e(he,{})]});var f,D,w;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <Select defaultValue="1" {...args}>
      <SelectItem value="1">Item 1</SelectItem>
      <SelectItem value="2">Item 2</SelectItem>
      <SelectItem value="3">Item 3</SelectItem>
    </Select>
}`,...(w=(D=a.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};var V,C,B;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  ...Default,
  args: {
    disabled: true
  }
}`,...(B=(C=u.parameters)==null?void 0:C.docs)==null?void 0:B.source}}};var y,A,k,F,L;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`() => <Select defaultValue="grapes">
    <SelectGroup>
      <SelectLabel>Fruits</SelectLabel>
      <SelectItem value="apple">Apple</SelectItem>
      <SelectItem value="banana">Banana</SelectItem>
      <SelectItem value="blueberry">Blueberry</SelectItem>
      <SelectItem value="grapes">Grapes</SelectItem>
      <SelectItem value="pineapple">Pineapple</SelectItem>
    </SelectGroup>
    <SelectSeparator />
    <SelectGroup>
      <SelectLabel>Vegetables</SelectLabel>
      <SelectItem value="aubergine">Aubergine</SelectItem>
      <SelectItem value="broccoli">Broccoli</SelectItem>
      <SelectItem value="carrot">Carrot</SelectItem>
      <SelectItem value="courgette">Courgette</SelectItem>
      <SelectItem value="leek">Leek</SelectItem>
    </SelectGroup>
    <SelectSeparator />
    <SelectGroup>
      <SelectLabel>Meats</SelectLabel>
      <SelectItem value="chicken">Chicken</SelectItem>
      <SelectItem value="pork">Pork</SelectItem>
      <SelectItem value="beef">Beef</SelectItem>
    </SelectGroup>
  </Select>`,...(k=(A=o.parameters)==null?void 0:A.docs)==null?void 0:k.source},description:{story:"This shows how to group items in the select popover",...(L=(F=o.parameters)==null?void 0:F.docs)==null?void 0:L.description}}};var x,G,T;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`() => <Select defaultValue="1">
    <SelectItem value="1">Item 1</SelectItem>
    <SelectItem value="2">Item 2</SelectItem>
    <SelectItem disabled value="3">
      Item 3
    </SelectItem>
    <SelectItem disabled value="4">
      Item 4
    </SelectItem>
    <SelectItem value="5">Item 5</SelectItem>
  </Select>`,...(T=(G=p.parameters)==null?void 0:G.docs)==null?void 0:T.source}}};var R,U,O;S.parameters={...S.parameters,docs:{...(R=S.parameters)==null?void 0:R.docs,source:{originalSource:`() => <Select defaultValue="19">
    {[...Array(50)].map((x, i) => <SelectItem value={i.toString()}>Item {i}</SelectItem>)}
  </Select>`,...(O=(U=S.parameters)==null?void 0:U.docs)==null?void 0:O.source}}};var P,j,W;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  ...Default,
  args: {
    label: 'Label'
  }
}`,...(W=(j=d.parameters)==null?void 0:j.docs)==null?void 0:W.source}}};var z,M,_,$,E;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
  return <Select label="Demo" name="demo" placeholder="Select an item...">
      <SelectItem value="1">Item 1</SelectItem>
      <SelectItem value="2">Item 2</SelectItem>
      <SelectItem value="3">Item 3</SelectItem>
    </Select>;
}`,...(_=(M=n.parameters)==null?void 0:M.docs)==null?void 0:_.source},description:{story:"The Select component support a placeholder.\n\nA html select would normally have a `value`, if controlled, or `defaultValue` in an uncontrolled state.\nHowever, if a default value is not supplied a placeholder should be used.",...(E=($=n.parameters)==null?void 0:$.docs)==null?void 0:E.description}}};var H,q,J,K,N;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`() => <SelectRoot defaultValue="19">
    <SelectTrigger>
      <SelectValue />
      <SelectIcon>
        <Svg path={mdiArrowDownDropCircleOutline} />
      </SelectIcon>
    </SelectTrigger>
    <SelectContent>
      <SelectScrollUpButton>
        <Svg path={mdiArrowUpDropCircleOutline} />
      </SelectScrollUpButton>
      <SelectViewport>
        {[...Array(50)].map((x, i) => <SelectRootItem value={i.toString()}>
            <SelectItemText>Item {i}</SelectItemText>
            <SelectItemIndicator>
              <Svg css={{
            color: '$success9'
          }} path={mdiThumbUp} />
            </SelectItemIndicator>
          </SelectRootItem>)}
      </SelectViewport>
      <SelectScrollDownButton>
        <Svg path={mdiArrowDownDropCircleOutline} />
      </SelectScrollDownButton>
    </SelectContent>
  </SelectRoot>`,...(J=(q=m.parameters)==null?void 0:q.docs)==null?void 0:J.source},description:{story:"Using `<SelectRoot>` and `<SelectRootItem>` gives further access to the underlying Radix implementation, allowing for more customization",...(N=(K=m.parameters)==null?void 0:K.docs)==null?void 0:N.description}}};var Q,X,Y,Z,ee;i.parameters={...i.parameters,docs:{...(Q=i.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
  return <Form onSubmit={withFormData(alert)}>
      <Select label="Demo" name="demo" defaultValue="1">
        <SelectItem value="1">Item 1</SelectItem>
        <SelectItem value="2">Item 2</SelectItem>
        <SelectItem value="3">Item 3</SelectItem>
      </Select>
      <FormButton />
    </Form>;
}`,...(Y=(X=i.parameters)==null?void 0:X.docs)==null?void 0:Y.source},description:{story:"Demo of use in a `Form`",...(ee=(Z=i.parameters)==null?void 0:Z.docs)==null?void 0:ee.description}}};const tt=["Default","Disabled","Grouped","WithDisabledItems","Scrollable","WithLabel","Placeholder","Customization","InForm"];export{m as Customization,a as Default,u as Disabled,o as Grouped,i as InForm,n as Placeholder,S as Scrollable,p as WithDisabledItems,d as WithLabel,tt as __namedExportsOrder,et as default};
//# sourceMappingURL=Select.stories-8db673ae.js.map

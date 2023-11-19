import{j as t,a as e}from"./jsx-runtime-03b4ddbf.js";import{j as le,w as ie,u as oe,a as se,e as de}from"./index-4345948b.js";import{R as me}from"./index-76fb7be0.js";import"./Variants-32aa23ce.js";import"./component-92c13614.js";import{F as ue,b as pe,a as ce}from"./withForm-df956169.js";import{I as a}from"./Input-0138999c.js";import{S as te}from"./Stack-d8c3aa6d.js";import{L as f}from"./Label-bb409e96.js";import{G as ne}from"./Grid-599ad893.js";import"./_commonjsHelpers-de833af9.js";import"./_baseIsEqual-f876697f.js";import"./index-03bbf7d1.js";import"./uniq-da390a93.js";import"./index-d38bc732.js";import"./index-356e4a49.js";import"./Box-f074bc4b.js";import"./Tooltip-53dd1a2c.js";import"./extends-98964cd2.js";import"./index-45a327ec.js";import"./index-421204d3.js";import"./index-296a96c6.js";import"./index-77dbc890.js";import"./index-add592e3.js";import"./index-f8c8b8ff.js";import"./index-01bbf444.js";import"./index-1a2315aa.js";import"./index-251d008c.js";import"./index-c6da0816.js";import"./index-207695d4.js";import"./Text-561f173c.js";import"./ConditionalWrapper-8865b2c1.js";import"./Button-23e6de97.js";import"./Svg-cfd7f95e.js";const Ke={title:"Components/Input",component:a},r={args:{name:"default"}},n={...r,args:{name:"required",required:!0}},l=()=>{const[u,p]=me.useState("test");return t(te,{children:[e(a,{id:"name-event",label:"Name",value:u,onChange:h=>p(h.target.value)}),e(a,{id:"name-value",label:"Name",value:u,onValueChange:p})]})},i=()=>t(te,{children:[e(a,{id:"username",label:"Username",required:!0}),e(a,{id:"firstname",label:"First name"}),e(a,{id:"familyname",label:"Family name",required:!1})]}),o=()=>t(f,{variant:"inline",children:["Email address",e(a,{type:"email"})]}),s=()=>t(ue,{onSubmit:pe(alert),children:[e(a,{label:"Demo",name:"demo"}),e(ce,{})]}),d=()=>t(ne,{css:{gridTemplateColumns:"150px 1fr",gap:"$3"},children:[e(f,{variant:"inline",htmlFor:"mll-firstname",children:"First name"}),e(a,{id:"mll-firstname"}),e(f,{variant:"inline",htmlFor:"mll-familyname",children:"Family name"}),e(a,{id:"mll-familyname"}),e(f,{variant:"inline",htmlFor:"mll-email",children:"Email address"}),e(a,{id:"email",type:"mll-email"})]}),c=()=>t(ne,{css:{rowGap:"$3",columnGap:"$2",gridTemplateColumns:"1fr 1fr 1fr 1fr 1fr 1fr"},children:[e(a,{id:"1"}),e(a,{id:"2",placeholder:"placeholder"}),e(a,{id:"3",value:"Value"}),e(a,{id:"4",valid:!0,defaultValue:"Valid"}),e(a,{id:"5",error:!0,defaultValue:"Invalid"}),e(a,{id:"6",disabled:!0}),e(a,{id:"h1","data-hover":!0}),e(a,{id:"h2","data-hover":!0,placeholder:"hovered"}),e(a,{id:"h3","data-hover":!0,value:"Value"}),e(a,{id:"h4","data-hover":!0,valid:!0,defaultValue:"Valid"}),e(a,{id:"h5","data-hover":!0,error:!0,defaultValue:"Invalid"}),e(a,{id:"h6",disabled:!0,value:"disabled"}),e(a,{id:"f1","data-focus":!0}),e(a,{id:"f2","data-focus":!0,placeholder:"focussed"}),e(a,{id:"f3","data-focus":!0,value:"Value"}),e(a,{id:"f4","data-focus":!0,valid:!0,defaultValue:"Valid"}),e(a,{id:"f5","data-focus":!0,error:!0,defaultValue:"Invalid"}),e(a,{id:"f6",readOnly:!0,value:"readonly"})]}),m={...r,args:{label:"Name",onValueChange:le.fn()},play:async({args:u,canvasElement:p})=>{const h=ie(p);oe.type(h.getByLabelText("Name"),"t"),await se(()=>de(u.onValueChange).toHaveBeenCalledWith("t"))}};var v,b,g;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    name: 'default'
  }
}`,...(g=(b=r.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var I,y,V,F,S;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  ...Default,
  args: {
    name: 'required',
    required: true
  }
}`,...(V=(y=n.parameters)==null?void 0:y.docs)==null?void 0:V.source},description:{story:"Add the `required` prop to mark as required",...(S=(F=n.parameters)==null?void 0:F.docs)==null?void 0:S.description}}};var C,L,w,q,N;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  const [name, setName] = React.useState('test');
  return <Stack>
      <Input id="name-event" label="Name" value={name} onChange={(e: {
      target: {
        value: React.SetStateAction<string>;
      };
    }) => setName(e.target.value)} />
      <Input id="name-value" label="Name" value={name} onValueChange={setName} />
    </Stack>;
}`,...(w=(L=l.parameters)==null?void 0:L.docs)==null?void 0:w.source},description:{story:"Supplying a `value` will make the component controlled. The changes can be handled by the standard `onChange`\nprop or use the convenience `onValueChange` that passes just the new value.",...(N=(q=l.parameters)==null?void 0:q.docs)==null?void 0:N.description}}};var x,G,D,E,j;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`() => <Stack>
    <Input id="username" label="Username" required />
    <Input id="firstname" label="First name" />
    <Input id="familyname" label="Family name" required={false} />
  </Stack>`,...(D=(G=i.parameters)==null?void 0:G.docs)==null?void 0:D.source},description:{story:"Use the label props to add a standard label, automatically adds aria.",...(j=(E=i.parameters)==null?void 0:E.docs)==null?void 0:j.description}}};var k,T,B,R,$;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`() => <Label variant="inline">
    Email address
    <Input type="email" />
  </Label>`,...(B=(T=o.parameters)==null?void 0:T.docs)==null?void 0:B.source},description:{story:"If you want a single inline label you can wrap an input in a `Label` component and it will auto assign the\n`htmlFor` and `id` props.",...($=(R=o.parameters)==null?void 0:R.docs)==null?void 0:$.description}}};var O,W,A,U,_;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  return <Form onSubmit={withFormData(alert)}>
      <Input label="Demo" name="demo" />
      <FormButton />
    </Form>;
}`,...(A=(W=s.parameters)==null?void 0:W.docs)==null?void 0:A.source},description:{story:"Demo of use in a `Form`",...(_=(U=s.parameters)==null?void 0:U.docs)==null?void 0:_.description}}};var H,M,z,J,K;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`() => <Grid css={{
  gridTemplateColumns: '150px 1fr',
  gap: '$3'
}}>
    <Label variant="inline" htmlFor="mll-firstname">
      First name
    </Label>
    <Input id="mll-firstname" />
    <Label variant="inline" htmlFor="mll-familyname">
      Family name
    </Label>
    <Input id="mll-familyname" />
    <Label variant="inline" htmlFor="mll-email">
      Email address
    </Label>
    <Input id="email" type="mll-email" />
  </Grid>`,...(z=(M=d.parameters)==null?void 0:M.docs)==null?void 0:z.source},description:{story:"If you need to align multiple labels then better to layout yourself to control the width and apply the appropriate\n`htmlFor` and `id` props.",...(K=(J=d.parameters)==null?void 0:J.docs)==null?void 0:K.description}}};var P,Q,X;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`() => <Grid css={{
  rowGap: '$3',
  columnGap: '$2',
  gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr'
}}>
    <Input id="1" />
    <Input id="2" placeholder="placeholder" />
    <Input id="3" value="Value" />
    <Input id="4" valid defaultValue="Valid" />
    <Input id="5" error defaultValue="Invalid" />
    <Input id="6" disabled />

    <Input id="h1" data-hover />
    <Input id="h2" data-hover placeholder="hovered" />
    <Input id="h3" data-hover value="Value" />
    <Input id="h4" data-hover valid defaultValue="Valid" />
    <Input id="h5" data-hover error defaultValue="Invalid" />
    <Input id="h6" disabled value="disabled" />

    <Input id="f1" data-focus />
    <Input id="f2" data-focus placeholder="focussed" />
    <Input id="f3" data-focus value="Value" />
    <Input id="f4" data-focus valid defaultValue="Valid" />
    <Input id="f5" data-focus error defaultValue="Invalid" />
    <Input id="f6" readOnly value="readonly" />
  </Grid>`,...(X=(Q=c.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee,ae,re;m.parameters={...m.parameters,docs:{...(Y=m.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  ...Default,
  args: {
    label: 'Name',
    onValueChange: jest.fn()
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const screen = within(canvasElement);
    userEvent.type(screen.getByLabelText('Name'), 't');
    await waitFor(() => expect(args.onValueChange).toHaveBeenCalledWith('t'));
  }
}`,...(ee=(Z=m.parameters)==null?void 0:Z.docs)==null?void 0:ee.source},description:{story:"Add an `onValueChange` function to add",...(re=(ae=m.parameters)==null?void 0:ae.docs)==null?void 0:re.description}}};const Pe=["Default","Required","Controlled","WithLabel","InlineLabel","InForm","MultipleInlineLabels","States","OnValueChange"];export{l as Controlled,r as Default,s as InForm,o as InlineLabel,d as MultipleInlineLabels,m as OnValueChange,n as Required,c as States,i as WithLabel,Pe as __namedExportsOrder,Ke as default};
//# sourceMappingURL=Input.stories-1b2c27a9.js.map

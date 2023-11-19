import{j as n,a}from"./jsx-runtime-03b4ddbf.js";import{j as U,w as q,u as J,a as K,e as M}from"./index-4345948b.js";import{r as P}from"./index-76fb7be0.js";import{C as m}from"./Flex-1cfc0a73.js";import{L as Q}from"./Label-bb409e96.js";import{T as e}from"./TextArea-0d434fea.js";import{G as R}from"./Grid-599ad893.js";import"./_commonjsHelpers-de833af9.js";import"./_baseIsEqual-f876697f.js";import"./index-03bbf7d1.js";import"./uniq-da390a93.js";import"./index-d38bc732.js";import"./index-356e4a49.js";import"./component-92c13614.js";import"./extends-98964cd2.js";import"./Box-f074bc4b.js";import"./index-77dbc890.js";import"./index-add592e3.js";import"./Text-561f173c.js";import"./Input-0138999c.js";const be={title:"Components/TextArea",component:e},d={},r={render:()=>{const[i,s]=P.useState("test");return n(m,{children:[a(e,{label:"Description",value:i,onChange:p=>s(p.target.value)}),a(e,{label:"Description",value:i,onValueChange:s})]})}},t=()=>n(m,{children:[a(e,{name:"firstname",label:"First name"}),a(e,{name:"familyname",label:"Family name"})]}),l=()=>n(Q,{variant:"inline",children:["Inline",a(e,{})]}),o=()=>n(m,{children:[a(e,{label:"Horizontal",placeholder:"Can be resized horizontally",resize:"horizontal"}),a(e,{label:"Vertical",placeholder:"Can be resized vertically",resize:"vertical"}),a(e,{label:"Constrain",placeholder:"Can be resized but constrained by partent",constrain:!0}),a(e,{label:"None",placeholder:"Can't be resized",resize:"none"})]}),c=()=>n(R,{css:{rowGap:"$3",columnGap:"$2",gridTemplateColumns:"1fr 1fr 1fr 1fr 1fr 1fr"},children:[a(e,{id:"1"}),a(e,{id:"2",placeholder:"placeholder"}),a(e,{id:"3",value:"Value"}),a(e,{id:"4",valid:!0,defaultValue:"Valid"}),a(e,{id:"5",error:!0,defaultValue:"Invalid"}),a(e,{id:"6",disabled:!0}),a(e,{id:"h1","data-hover":!0}),a(e,{id:"h2","data-hover":!0,placeholder:"hovered"}),a(e,{id:"h3","data-hover":!0,value:"Value"}),a(e,{id:"h4","data-hover":!0,valid:!0,defaultValue:"Valid"}),a(e,{id:"h5","data-hover":!0,error:!0,defaultValue:"Invalid"}),a(e,{id:"h6",disabled:!0,value:"disabled"}),a(e,{id:"f1","data-focus":!0}),a(e,{id:"f2","data-focus":!0,placeholder:"focussed"}),a(e,{id:"f3","data-focus":!0,value:"Value"}),a(e,{id:"f4","data-focus":!0,valid:!0,defaultValue:"Valid"}),a(e,{id:"f5","data-focus":!0,error:!0,defaultValue:"Invalid"}),a(e,{id:"f6",readOnly:!0,value:"readonly"})]}),u={args:{id:"name-value",label:"Name",onValueChange:U.fn()},play:async({args:{onValueChange:i},canvasElement:s})=>{const p=q(s);J.type(p.getByLabelText("Name"),"t"),await K(()=>M(i).toHaveBeenCalledWith("t"))}};var h,f,v;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(v=(f=d.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var b,x,C,T,V;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    const [description, setDescription] = useState('test');
    return <Column>
        <TextArea label="Description" value={description} onChange={e => setDescription(e.target.value)} />
        <TextArea label="Description" value={description} onValueChange={setDescription} />
      </Column>;
  }
}`,...(C=(x=r.parameters)==null?void 0:x.docs)==null?void 0:C.source},description:{story:"Supplying a `value` will make the component controlled. The changes can be handled by the standard `onChange`\nprop or use the convenience `onValueChange` that passes just the new value.",...(V=(T=r.parameters)==null?void 0:T.docs)==null?void 0:V.description}}};var g,y,A,z,w;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`() => <Column>
    <TextArea name="firstname" label="First name" />
    <TextArea name="familyname" label="Family name" />
  </Column>`,...(A=(y=t.parameters)==null?void 0:y.docs)==null?void 0:A.source},description:{story:"Use the label props to add a standard label, automatically adds aria.",...(w=(z=t.parameters)==null?void 0:z.docs)==null?void 0:w.description}}};var S,I,L,D,G;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`() => <Label variant="inline">
    Inline
    <TextArea />
  </Label>`,...(L=(I=l.parameters)==null?void 0:I.docs)==null?void 0:L.source},description:{story:"If you want a single inline label you can wrap an TextArea in a `Label` component and it will auto assign the\n`htmlFor` and `id` props.",...(G=(D=l.parameters)==null?void 0:D.docs)==null?void 0:G.description}}};var j,F,E,N,O;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`() => <Column>
    <TextArea label="Horizontal" placeholder="Can be resized horizontally" resize="horizontal" />
    <TextArea label="Vertical" placeholder="Can be resized vertically" resize="vertical" />
    <TextArea label="Constrain" placeholder="Can be resized but constrained by partent" constrain />
    <TextArea label="None" placeholder="Can't be resized" resize="none" />
  </Column>`,...(E=(F=o.parameters)==null?void 0:F.docs)==null?void 0:E.source},description:{story:"A variant can be used to restrict the resize options or constrain it to the parent.",...(O=(N=o.parameters)==null?void 0:N.docs)==null?void 0:O.description}}};var B,H,W;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`() => <Grid css={{
  rowGap: '$3',
  columnGap: '$2',
  gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr'
}}>
    <TextArea id="1" />
    <TextArea id="2" placeholder="placeholder" />
    <TextArea id="3" value="Value" />
    <TextArea id="4" valid defaultValue="Valid" />
    <TextArea id="5" error defaultValue="Invalid" />
    <TextArea id="6" disabled />

    <TextArea id="h1" data-hover />
    <TextArea id="h2" data-hover placeholder="hovered" />
    <TextArea id="h3" data-hover value="Value" />
    <TextArea id="h4" data-hover valid defaultValue="Valid" />
    <TextArea id="h5" data-hover error defaultValue="Invalid" />
    <TextArea id="h6" disabled value="disabled" />

    <TextArea id="f1" data-focus />
    <TextArea id="f2" data-focus placeholder="focussed" />
    <TextArea id="f3" data-focus value="Value" />
    <TextArea id="f4" data-focus valid defaultValue="Valid" />
    <TextArea id="f5" data-focus error defaultValue="Invalid" />
    <TextArea id="f6" readOnly value="readonly" />
  </Grid>`,...(W=(H=c.parameters)==null?void 0:H.docs)==null?void 0:W.source}}};var $,_,k;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    id: 'name-value',
    label: 'Name',
    onValueChange: jest.fn()
  },
  play: async ({
    args: {
      onValueChange
    },
    canvasElement
  }) => {
    const screen = within(canvasElement);
    userEvent.type(screen.getByLabelText('Name'), 't');
    await waitFor(() => expect(onValueChange).toHaveBeenCalledWith('t'));
  }
}`,...(k=(_=u.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};const xe=["Default","Controlled","WithLabel","InlineLabel","Constrain","States","TestOnValueChange"];export{o as Constrain,r as Controlled,d as Default,l as InlineLabel,c as States,u as TestOnValueChange,t as WithLabel,xe as __namedExportsOrder,be as default};
//# sourceMappingURL=TextArea.stories-fe8c9534.js.map

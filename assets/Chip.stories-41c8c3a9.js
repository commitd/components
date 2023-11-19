import{j as u,a as r}from"./jsx-runtime-03b4ddbf.js";import{a}from"./chunk-AY7I2SME-c7b6cf8a.js";import{j as M,w as Q,u as U,a as W,e as X}from"./index-4345948b.js";import{V as Y}from"./Variants-32aa23ce.js";import"./component-92c13614.js";import"./index-76fb7be0.js";import{C as e}from"./Chip-945c51f7.js";import{I as h}from"./Inline-fdf2c0ff.js";import"./_commonjsHelpers-de833af9.js";import"./_baseIsEqual-f876697f.js";import"./index-03bbf7d1.js";import"./uniq-da390a93.js";import"./index-d38bc732.js";import"./index-356e4a49.js";import"./Box-f074bc4b.js";import"./Grid-599ad893.js";import"./Tooltip-53dd1a2c.js";import"./extends-98964cd2.js";import"./index-45a327ec.js";import"./index-421204d3.js";import"./index-296a96c6.js";import"./index-77dbc890.js";import"./index-add592e3.js";import"./index-f8c8b8ff.js";import"./index-01bbf444.js";import"./index-1a2315aa.js";import"./index-251d008c.js";import"./index-c6da0816.js";import"./index-207695d4.js";import"./Text-561f173c.js";import"./ConditionalWrapper-8865b2c1.js";import"./Button-23e6de97.js";import"./Svg-cfd7f95e.js";import"./Icons-43292f8c.js";import"./mdi-685d5538.js";const He={title:"Components/Chip",component:e},s={args:{children:"Chip"}},o={render:()=>u(h,{css:{alignItems:"center"},children:[r(e,{colorPalette:"$info",size:"small",children:"New"}),r(e,{colorPalette:"$error",children:"Error"})]})},l={render:()=>r(Y,{component:e,colorPalette:["$brand","$primary","$error","$success","$warn","$info","$neutral"],children:"Chip",onClick:a("chip")})},i={render:()=>u(h,{css:{alignItems:"center"},children:[r(e,{closable:!0,colorPalette:"$info",size:"small",onClick:a("close"),children:"Close"}),r(e,{closable:!0,colorPalette:"$error",onClick:a("close"),children:"Close"})]})},t={name:"colorPalettes",render:()=>r(Y,{component:e,colorPalette:["$brand","$primary","$error","$success","$warn","$info","$neutral"],children:"Chip"})},n={render:()=>u(h,{css:{alignItems:"center"},children:[r(e,{onClick:a("disabled"),disabled:!0,colorPalette:"$info",size:"small",children:"Disabled"}),r(e,{onClick:a("disabled"),disabled:!0,colorPalette:"$error",children:"Disabled"}),r(e,{onClick:a("disabled"),colorPalette:"$success",disabled:!0,size:"small",children:"Disabled"}),r(e,{colorPalette:"$primary",disabled:!0,onClick:a("disabled"),children:"Disabled"}),r(e,{closable:!0,onClick:a("disabled"),disabled:!0,colorPalette:"$info",size:"small",children:"Disabled"}),r(e,{closable:!0,onClick:a("disabled"),disabled:!0,colorPalette:"$error",children:"Disabled"}),r(e,{closable:!0,onClick:a("disabled"),colorPalette:"$success",disabled:!0,size:"small",children:"Disabled"}),r(e,{colorPalette:"$primary",disabled:!0,closable:!0,onClick:a("disabled"),children:"Disabled"})]})},c={...s,args:{...s.args,onClick:M.fn()},play:async({args:p,canvasElement:m,step:C})=>{const b=Q(m);await C("Starts open",async()=>{U.click(b.getByRole("button")),await W(()=>X(p.onClick).toHaveBeenCalled())})}},d={...s,args:{...s.args,closable:!0,onClick:M.fn()},play:async({args:p,canvasElement:m,step:C})=>{const b=Q(m);await C("Starts open",async()=>{U.click(b.getByRole("button")),await W(()=>X(p.onClick).toHaveBeenCalled())})}};var $,k,g;s.parameters={...s.parameters,docs:{...($=s.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    children: 'Chip'
  }
}`,...(g=(k=s.parameters)==null?void 0:k.docs)==null?void 0:g.source}}};var f,P,y,D,w;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <Inline css={{
    alignItems: 'center'
  }}>
      <Chip colorPalette="$info" size="small">
        New
      </Chip>
      <Chip colorPalette="$error">Error</Chip>
    </Inline>
}`,...(y=(P=o.parameters)==null?void 0:P.docs)==null?void 0:y.source},description:{story:"Chips are available in 2 sizes, `default` and `small`",...(w=(D=o.parameters)==null?void 0:D.docs)==null?void 0:w.description}}};var I,v,z,S,E;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <Variants component={Chip} colorPalette={['$brand', '$primary', '$error', '$success', '$warn', '$info', '$neutral'
  //'$ghost',
  ]} children="Chip" onClick={action('chip')} />
}`,...(z=(v=l.parameters)==null?void 0:v.docs)==null?void 0:z.source},description:{story:"To make interactive add an `onClick` handler.",...(E=(S=l.parameters)==null?void 0:S.docs)==null?void 0:E.description}}};var B,j,x,T,H;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <Inline css={{
    alignItems: 'center'
  }}>
      <Chip closable colorPalette="$info" size="small" onClick={action('close')}>
        Close
      </Chip>
      <Chip closable colorPalette="$error" onClick={action('close')}>
        Close
      </Chip>
    </Inline>
}`,...(x=(j=i.parameters)==null?void 0:j.docs)==null?void 0:x.source},description:{story:"If an `onClick` prop is provided and `closeable` a close button is added and clicking calls the onClick",...(H=(T=i.parameters)==null?void 0:T.docs)==null?void 0:H.description}}};var R,V,F;t.parameters={...t.parameters,docs:{...(R=t.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'colorPalettes',
  render: () => <Variants component={Chip} colorPalette={['$brand', '$primary', '$error', '$success', '$warn', '$info', '$neutral'
  // '$ghost',
  ]} children="Chip" />
}`,...(F=(V=t.parameters)==null?void 0:V.docs)==null?void 0:F.source}}};var A,N,_;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <Inline css={{
    alignItems: 'center'
  }}>
      <Chip onClick={action('disabled')} disabled colorPalette="$info" size="small">
        Disabled
      </Chip>
      <Chip onClick={action('disabled')} disabled colorPalette="$error">
        Disabled
      </Chip>
      <Chip onClick={action('disabled')} colorPalette="$success" disabled size="small">
        Disabled
      </Chip>
      <Chip colorPalette="$primary" disabled onClick={action('disabled')}>
        Disabled
      </Chip>
      <Chip closable onClick={action('disabled')} disabled colorPalette="$info" size="small">
        Disabled
      </Chip>
      <Chip closable onClick={action('disabled')} disabled colorPalette="$error">
        Disabled
      </Chip>
      <Chip closable onClick={action('disabled')} colorPalette="$success" disabled size="small">
        Disabled
      </Chip>
      <Chip colorPalette="$primary" disabled closable onClick={action('disabled')}>
        Disabled
      </Chip>
    </Inline>
}`,...(_=(N=n.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var O,q,G;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    onClick: jest.fn()
  },
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const screen = within(canvasElement);
    await step('Starts open', async () => {
      userEvent.click(screen.getByRole('button'));
      await waitFor(() => expect(args.onClick).toHaveBeenCalled());
    });
  }
}`,...(G=(q=c.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var J,K,L;d.parameters={...d.parameters,docs:{...(J=d.parameters)==null?void 0:J.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    closable: true,
    onClick: jest.fn()
  },
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const screen = within(canvasElement);
    await step('Starts open', async () => {
      userEvent.click(screen.getByRole('button'));
      await waitFor(() => expect(args.onClick).toHaveBeenCalled());
    });
  }
}`,...(L=(K=d.parameters)==null?void 0:K.docs)==null?void 0:L.source}}};const Re=["Default","Sizes","Interactive","Closable","All","Disabled","TestInteractive","TestClosable"];export{t as All,i as Closable,s as Default,n as Disabled,l as Interactive,o as Sizes,d as TestClosable,c as TestInteractive,Re as __namedExportsOrder,He as default};
//# sourceMappingURL=Chip.stories-41c8c3a9.js.map

import{j as a,a as e,F as O}from"./jsx-runtime-03b4ddbf.js";import{i as _}from"./hooks.esm-cc7a556e.js";import{w as f,e as o,j as K,u as m,a as g}from"./index-4345948b.js";import{P as q}from"./Padding-12a74279.js";import{B as J}from"./Background-c315c9de.js";import{S as c}from"./Switch-cf69787b.js";import{I as p}from"./Inline-fdf2c0ff.js";import{S as M}from"./Stack-d8c3aa6d.js";import{G as N}from"./Grid-599ad893.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./_baseIsEqual-f876697f.js";import"./index-03bbf7d1.js";import"./uniq-da390a93.js";import"./index-d38bc732.js";import"./index-356e4a49.js";import"./component-92c13614.js";import"./extends-98964cd2.js";import"./index-45a327ec.js";import"./index-421204d3.js";import"./index-11a3acc1.js";import"./index-1a2315aa.js";import"./index-77dbc890.js";import"./index-add592e3.js";import"./Box-f074bc4b.js";const ye={title:"Components/Switch",component:c},l={},n=()=>{const[r,{toggle:t}]=_(!1);return a(p,{children:[e(c,{checked:r,onCheckedChange:t}),e(c,{colorPalette:"$primary",checked:r,onCheckedChange:t})]})},d=()=>{const[r,{toggle:t}]=_(!1);return e(q,{p:"$3",children:e(J,{bg:"$surface.solid",children:a(p,{children:[e(c,{checked:r,onCheckedChange:t}),e(c,{colorPalette:"$primary",checked:r,onCheckedChange:t}),e(c,{colorPalette:"$secondary",checked:r,onCheckedChange:t}),e(c,{colorPalette:"$info",checked:r,onCheckedChange:t}),e(c,{colorPalette:"$error",checked:r,onCheckedChange:t}),e(c,{colorPalette:"$success",checked:r,onCheckedChange:t})]})})})},h={render:()=>a(M,{children:[a(p,{children:[e(c,{checked:!1}),e(c,{checked:!0}),e(c,{colorPalette:"$primary",checked:!1}),e(c,{colorPalette:"$primary",checked:!0}),e(c,{colorPalette:"$secondary",checked:!1}),e(c,{colorPalette:"$secondary",checked:!0})]}),a(p,{children:[e(c,{disabled:!0,checked:!1}),e(c,{disabled:!0,checked:!0}),e(c,{disabled:!0,colorPalette:"$primary",checked:!1}),e(c,{disabled:!0,colorPalette:"$primary",checked:!0}),e(c,{disabled:!0,colorPalette:"$secondary",checked:!1}),e(c,{disabled:!0,colorPalette:"$secondary",checked:!0})]})]}),play:async({args:r,canvasElement:t,step:s})=>{const $=await f(t).findAllByRole("switch");o($).toHaveLength(12),o($.filter(V=>V.hasAttribute("disabled"))).toHaveLength(6)}},i=()=>e(O,{children:a(N,{css:{p:"$4",gap:"$4",gridTemplateColumns:"token(sizes.$6) token(sizes.$6) token(sizes.$6)"},children:[e(c,{checked:!1}),e(c,{checked:!1,"data-hover":!0}),e(c,{checked:!1,"data-focus":!0}),e(c,{checked:!0}),e(c,{checked:!0,"data-hover":!0}),e(c,{checked:!0,"data-focus":!0}),e(c,{colorPalette:"$primary",checked:!1}),e(c,{colorPalette:"$primary",checked:!1,"data-hover":!0}),e(c,{colorPalette:"$primary",checked:!1,"data-focus":!0}),e(c,{colorPalette:"$primary",checked:!0}),e(c,{colorPalette:"$primary",checked:!0,"data-hover":!0}),e(c,{colorPalette:"$primary",checked:!0,"data-focus":!0}),e(c,{colorPalette:"$secondary",checked:!1}),e(c,{colorPalette:"$secondary",checked:!1,"data-hover":!0}),e(c,{colorPalette:"$secondary",checked:!1,"data-focus":!0}),e(c,{colorPalette:"$secondary",checked:!0}),e(c,{colorPalette:"$secondary",checked:!0,"data-hover":!0}),e(c,{colorPalette:"$secondary",checked:!0,"data-focus":!0}),e(c,{colorPalette:"$error",checked:!1}),e(c,{colorPalette:"$error",checked:!1,"data-hover":!0}),e(c,{colorPalette:"$error",checked:!1,"data-focus":!0}),e(c,{colorPalette:"$error",checked:!0}),e(c,{colorPalette:"$error",checked:!0,"data-hover":!0}),e(c,{colorPalette:"$error",checked:!0,"data-focus":!0})]})}),u={args:{onCheckedChange:K.fn()},play:async({args:r,canvasElement:t})=>{const s=f(t);m.click(s.getByRole("switch")),await g(()=>o(r.onCheckedChange).toHaveBeenCalled())}},k={args:{onCheckedChange:K.fn()},play:async({args:r,canvasElement:t})=>{const s=f(t);m.tab(),await g(()=>o(s.getByRole("switch")).toHaveFocus()),m.keyboard("{Enter}"),await g(()=>o(r.onCheckedChange).toHaveBeenCalled())}};var w,y,P;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:"{}",...(P=(y=l.parameters)==null?void 0:y.docs)==null?void 0:P.source}}};var S,C,v;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  const [value, {
    toggle
  }] = useBoolean(false);
  return <Inline>
      <Switch checked={value} onCheckedChange={toggle} />
      <Switch colorPalette="$primary" checked={value} onCheckedChange={toggle} />
    </Inline>;
}`,...(v=(C=n.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var b,B,E;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  const [value, {
    toggle
  }] = useBoolean(false);
  return <Padding p="$3">
      <Background bg="$surface.solid">
        <Inline>
          <Switch checked={value} onCheckedChange={toggle} />
          <Switch colorPalette="$primary" checked={value} onCheckedChange={toggle} />
          <Switch colorPalette="$secondary" checked={value} onCheckedChange={toggle} />
          <Switch colorPalette="$info" checked={value} onCheckedChange={toggle} />
          <Switch colorPalette="$error" checked={value} onCheckedChange={toggle} />
          <Switch colorPalette="$success" checked={value} onCheckedChange={toggle} />
        </Inline>
      </Background>
    </Padding>;
}`,...(E=(B=d.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var x,H,I;h.parameters={...h.parameters,docs:{...(x=h.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <Stack>
      <Inline>
        <Switch checked={false} />
        <Switch checked={true} />
        <Switch colorPalette="$primary" checked={false} />
        <Switch colorPalette="$primary" checked={true} />
        <Switch colorPalette="$secondary" checked={false} />
        <Switch colorPalette="$secondary" checked={true} />
      </Inline>
      <Inline>
        <Switch disabled checked={false} />
        <Switch disabled checked={true} />
        <Switch disabled colorPalette="$primary" checked={false} />
        <Switch disabled colorPalette="$primary" checked={true} />
        <Switch disabled colorPalette="$secondary" checked={false} />
        <Switch disabled colorPalette="$secondary" checked={true} />
      </Inline>
    </Stack>,
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const screen = within(canvasElement);
    const buttons = await screen.findAllByRole('switch');
    expect(buttons).toHaveLength(12);
    expect(buttons.filter(b => b.hasAttribute('disabled'))).toHaveLength(6);
  }
}`,...(I=(H=h.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};var F,j,z;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`() => {
  return <>
      <Grid css={{
      p: '$4',
      gap: '$4',
      gridTemplateColumns: 'token(sizes.$6) token(sizes.$6) token(sizes.$6)'
    }}>
        <Switch checked={false} />
        <Switch checked={false} data-hover />
        <Switch checked={false} data-focus />
        <Switch checked={true} />
        <Switch checked={true} data-hover />
        <Switch checked={true} data-focus />
        <Switch colorPalette="$primary" checked={false} />
        <Switch colorPalette="$primary" checked={false} data-hover />
        <Switch colorPalette="$primary" checked={false} data-focus />
        <Switch colorPalette="$primary" checked={true} />
        <Switch colorPalette="$primary" checked={true} data-hover />
        <Switch colorPalette="$primary" checked={true} data-focus />
        <Switch colorPalette="$secondary" checked={false} />
        <Switch colorPalette="$secondary" checked={false} data-hover />
        <Switch colorPalette="$secondary" checked={false} data-focus />
        <Switch colorPalette="$secondary" checked={true} />
        <Switch colorPalette="$secondary" checked={true} data-hover />
        <Switch colorPalette="$secondary" checked={true} data-focus />
        <Switch colorPalette="$error" checked={false} />
        <Switch colorPalette="$error" checked={false} data-hover />
        <Switch colorPalette="$error" checked={false} data-focus />
        <Switch colorPalette="$error" checked={true} />
        <Switch colorPalette="$error" checked={true} data-hover />
        <Switch colorPalette="$error" checked={true} data-focus />
      </Grid>
    </>;
}`,...(z=(j=i.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var R,T,A;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    onCheckedChange: jest.fn()
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const screen = within(canvasElement);
    userEvent.click(screen.getByRole('switch'));
    await waitFor(() => expect(args.onCheckedChange).toHaveBeenCalled());
  }
}`,...(A=(T=u.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var D,G,L;k.parameters={...k.parameters,docs:{...(D=k.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    onCheckedChange: jest.fn()
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const screen = within(canvasElement);
    userEvent.tab();
    await waitFor(() => expect(screen.getByRole('switch')).toHaveFocus());
    userEvent.keyboard('{Enter}');
    await waitFor(() => expect(args.onCheckedChange).toHaveBeenCalled());
  }
}`,...(L=(G=k.parameters)==null?void 0:G.docs)==null?void 0:L.source}}};const Pe=["Default","Variants","Colors","Disabled","States","TestClick","TestKeyboard"];export{d as Colors,l as Default,h as Disabled,i as States,u as TestClick,k as TestKeyboard,n as Variants,Pe as __namedExportsOrder,ye as default};
//# sourceMappingURL=Switch.stories-5798d555.js.map

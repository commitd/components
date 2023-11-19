import{j as a,a as t}from"./jsx-runtime-03b4ddbf.js";import{c as ct}from"./component-92c13614.js";import"./index-76fb7be0.js";import{w as y,e as C,j as dt,a as ut,u as w}from"./index-4345948b.js";import{V as g}from"./Variants-32aa23ce.js";import{B as e}from"./Button-23e6de97.js";import{I as b}from"./Inline-fdf2c0ff.js";import{S as pt}from"./Stack-d8c3aa6d.js";import{s as mt}from"./index-0e8e4850.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-de833af9.js";import"./_baseIsEqual-f876697f.js";import"./index-03bbf7d1.js";import"./uniq-da390a93.js";import"./index-d38bc732.js";import"./index-356e4a49.js";import"./Box-f074bc4b.js";import"./Grid-599ad893.js";import"./Tooltip-53dd1a2c.js";import"./index-45a327ec.js";import"./index-421204d3.js";import"./index-296a96c6.js";import"./index-77dbc890.js";import"./index-add592e3.js";import"./index-f8c8b8ff.js";import"./index-01bbf444.js";import"./index-1a2315aa.js";import"./index-251d008c.js";import"./index-c6da0816.js";import"./index-207695d4.js";import"./Text-561f173c.js";import"./ConditionalWrapper-8865b2c1.js";import"./Svg-cfd7f95e.js";const ft=({children:n})=>t("div",{className:ct({display:"grid",gap:"$3",gridTemplateColumns:"1fr 1fr 1fr 1fr"}),children:n}),Kt={title:"Components/Button",component:e,argTypes:{onClick:{action:"clicked"},asChild:{control:{type:"boolean"},defaultValue:"false",description:'Can be set to use the child component, typically only used with "a".'},destructive:{control:{type:"boolean"},defaultValue:"false",description:"Add the destructive flag for actions that are destructive, such as delete actions."},variant:{control:{type:"select",options:["solid","outline","text","brand"]},description:"The button is available in different variants. For the solid action on the view use the `solid` variant, most others should be `outline` which is the default. Use `text` for paired no-action buttons and `brand` is for use in the AppBar."},size:{control:{type:"select",options:["small","default","large"]},description:"The button is available in 3 different sizes."}}},r={args:{children:"Button"}},u={render:()=>a(b,{children:[t(e,{size:"small",children:"Small"}),t(e,{size:"default",children:"Default"}),t(e,{size:"large",children:"Large"})]})},p={render:()=>a(pt,{children:[t(e,{"full-width":!0,size:"small",children:"Small"}),t(e,{"full-width":!0,size:"default",children:"Default"}),t(e,{"full-width":!0,size:"large",children:"Large"})]})},m={render:()=>a(b,{children:[t(e,{variant:"solid",children:"solid"}),t(e,{variant:"outline",children:"outline"}),t(e,{variant:"text",children:"text"})]})},s={render:()=>a(b,{children:[t(e,{destructive:!0,variant:"solid",children:"solid"}),t(e,{destructive:!0,variant:"outline",children:"outline"}),t(e,{destructive:!0,variant:"text",children:"text"})]})},l={render:()=>a(b,{children:[t(e,{disabled:!0,variant:"solid",children:"solid"}),t(e,{disabled:!0,variant:"outline",children:"outline"}),t(e,{disabled:!0,variant:"text",children:"text"})]}),play:async({canvasElement:n,step:o})=>{const i=y(n);await o("Buttons should have disabled role",async()=>{(await i.findAllByRole("button")).forEach(x=>C(x).toHaveAttribute("disabled"))})}},c={render:()=>a(ft,{children:[t(e,{variant:"solid",children:"Button"}),t(e,{variant:"solid","data-hover":!0,children:"Button"}),t(e,{variant:"solid","data-focus":!0,children:"Button"}),t(e,{variant:"solid","data-active":!0,children:"Button"}),t(e,{variant:"outline",children:"Button"}),t(e,{variant:"outline","data-hover":!0,children:"Button"}),t(e,{variant:"outline","data-focus":!0,children:"Button"}),t(e,{variant:"outline","data-active":!0,children:"Button"}),t(e,{variant:"text",children:"Button"}),t(e,{variant:"text","data-hover":!0,children:"Button"}),t(e,{variant:"text","data-focus":!0,children:"Button"}),t(e,{variant:"text","data-active":!0,children:"Button"})]})},f={render:()=>t(g,{component:e,variant:["solid","outline","text"],size:["small","default","large"],destructive:[!1,!0],disabled:[!1,!0],children:"Button"})},B={render:({colors:n})=>a(pt,{children:[t(g,{gridCss:ct.raw({gridTemplateColumns:"1fr 1fr 1fr 1fr 1fr 1fr 1fr",padding:"$4"}),component:e,variant:"solid",colorPalette:n,children:"Button"}),t(g,{gridCss:{gridTemplateColumns:"1fr 1fr 1fr 1fr 1fr 1fr 1fr",padding:"$4"},component:e,variant:"outline",colorPalette:n,children:"Button"}),t(g,{gridCss:{gridTemplateColumns:"1fr 1fr 1fr 1fr 1fr 1fr 1fr",padding:"$4"},component:e,variant:"text",colorPalette:n,children:"Button"})]}),args:{colors:mt.map(n=>`$${n}`)}},v={...r,args:{...r.args,onClick:dt.fn()},play:async({args:n,canvasElement:o,step:i})=>{const d=y(o);await i("Can be clicked",async()=>{d.getByRole("button").click(),await ut(()=>C(n.onClick).toHaveBeenCalled())})}},h={...r,args:{...r.args,onClick:dt.fn()},play:async({args:n,canvasElement:o,step:i})=>{const d=y(o);await i("Can open 2",async()=>{d.getByRole("button"),w.tab(),w.keyboard("{enter}"),await ut(()=>C(n.onClick).toHaveBeenCalled())})}};var S,k,z;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: 'Button'
  }
}`,...(z=(k=r.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var E,T,D;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <Inline>
      <Button size="small">Small</Button>
      <Button size="default">Default</Button>
      <Button size="large">Large</Button>
    </Inline>
}`,...(D=(T=u.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var I,$,V;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <Stack>
      <Button full-width size="small">
        Small
      </Button>
      <Button full-width size="default">
        Default
      </Button>
      <Button full-width size="large">
        Large
      </Button>
    </Stack>
}`,...(V=($=p.parameters)==null?void 0:$.docs)==null?void 0:V.source}}};var A,j,P;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <Inline>
      <Button variant="solid">solid</Button>
      <Button variant="outline">outline</Button>
      <Button variant="text">text</Button>
    </Inline>
}`,...(P=(j=m.parameters)==null?void 0:j.docs)==null?void 0:P.source}}};var F,H,R,L,G;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <Inline>
      <Button destructive variant="solid">
        solid
      </Button>
      <Button destructive variant="outline">
        outline
      </Button>
      <Button destructive variant="text">
        text
      </Button>
    </Inline>
}`,...(R=(H=s.parameters)==null?void 0:H.docs)==null?void 0:R.source},description:{story:"If the action is destructive, say a delete or an action that cannot be undone, add the `destructive` flag",...(G=(L=s.parameters)==null?void 0:L.docs)==null?void 0:G.description}}};var W,_,N,O,U;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <Inline>
      <Button disabled variant="solid">
        solid
      </Button>
      <Button disabled variant="outline">
        outline
      </Button>
      <Button disabled variant="text">
        text
      </Button>
    </Inline>,
  play: async ({
    canvasElement,
    step
  }) => {
    const screen = within(canvasElement);
    await step('Buttons should have disabled role', async () => {
      const buttons = await screen.findAllByRole('button');
      buttons.forEach(b => expect(b).toHaveAttribute('disabled'));
    });
  }
}`,...(N=(_=l.parameters)==null?void 0:_.docs)==null?void 0:N.source},description:{story:"The `disabled` state is controlled in the standard way",...(U=(O=l.parameters)==null?void 0:O.docs)==null?void 0:U.description}}};var q,J,K,M,Q;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <Grid>
      <Button variant="solid">Button</Button>
      <Button variant="solid" data-hover>
        Button
      </Button>
      <Button variant="solid" data-focus>
        Button
      </Button>
      <Button variant="solid" data-active>
        Button
      </Button>
      <Button variant="outline">Button</Button>
      <Button variant="outline" data-hover>
        Button
      </Button>
      <Button variant="outline" data-focus>
        Button
      </Button>
      <Button variant="outline" data-active>
        Button
      </Button>
      <Button variant="text">Button</Button>
      <Button variant="text" data-hover>
        Button
      </Button>
      <Button variant="text" data-focus>
        Button
      </Button>
      <Button variant="text" data-active>
        Button
      </Button>
    </Grid>
}`,...(K=(J=c.parameters)==null?void 0:J.docs)==null?void 0:K.source},description:{story:`This uses the force prop to simulate hover, focus and active states so they can be compared at the same time.
This prop is not intended for normal use and the buttons here will not interact normally.`,...(Q=(M=c.parameters)==null?void 0:M.docs)==null?void 0:Q.description}}};var X,Y,Z;f.parameters={...f.parameters,docs:{...(X=f.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <Variants component={Button} variant={['solid', 'outline', 'text']} size={['small', 'default', 'large']} destructive={[false, true]} disabled={[false, true]} children="Button" />
}`,...(Z=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var tt,et,nt;B.parameters={...B.parameters,docs:{...(tt=B.parameters)==null?void 0:tt.docs,source:{originalSource:`{
  render: ({
    colors
  }) => <Stack>
      <Variants gridCss={css.raw({
      gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr',
      padding: '$4'
    })} component={Button} variant="solid" colorPalette={colors} children="Button" />
      <Variants gridCss={{
      gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr',
      padding: '$4'
    }} component={Button} variant="outline" colorPalette={colors} children="Button" />
      <Variants gridCss={{
      gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr',
      padding: '$4'
    }} component={Button} variant={'text'} colorPalette={colors} children="Button" />
    </Stack>,
  args: {
    colors: (semanticColors.map(c => \`$\${c}\`) as ComponentProps<typeof Button>['color'][])
  }
}`,...(nt=(et=B.parameters)==null?void 0:et.docs)==null?void 0:nt.source}}};var rt,at,ot;v.parameters={...v.parameters,docs:{...(rt=v.parameters)==null?void 0:rt.docs,source:{originalSource:`{
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
    await step('Can be clicked', async () => {
      const buttonElement = screen.getByRole('button');
      buttonElement.click();
      await waitFor(() => expect(args.onClick).toHaveBeenCalled());
    });
  }
}`,...(ot=(at=v.parameters)==null?void 0:at.docs)==null?void 0:ot.source}}};var it,st,lt;h.parameters={...h.parameters,docs:{...(it=h.parameters)==null?void 0:it.docs,source:{originalSource:`{
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
    await step('Can open 2', async () => {
      screen.getByRole('button');
      userEvent.tab();
      userEvent.keyboard('{enter}');
      await waitFor(() => expect(args.onClick).toHaveBeenCalled());
    });
  }
}`,...(lt=(st=h.parameters)==null?void 0:st.docs)==null?void 0:lt.source}}};const Mt=["Default","Size","FullWidth","Variant","Destructive","Disabled","State","All","SemanticColors","TestButtonClick","TestButtonEnter"];export{f as All,r as Default,s as Destructive,l as Disabled,p as FullWidth,B as SemanticColors,u as Size,c as State,v as TestButtonClick,h as TestButtonEnter,m as Variant,Mt as __namedExportsOrder,Kt as default};
//# sourceMappingURL=Button.stories-70ad77d5.js.map

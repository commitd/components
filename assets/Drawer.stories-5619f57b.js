import{a as t,j as i,F}from"./jsx-runtime-03b4ddbf.js";import{i as V}from"./hooks.esm-cc7a556e.js";import{w as $,u as p,s as l,e as k,b as E}from"./index-4345948b.js";import{R as q}from"./index-76fb7be0.js";import{a as O,c as H,b as N,s as G,g as z}from"./component-92c13614.js";import{c as L,d as W,b as A,a as J}from"./index-ca20a0e4.js";import{S as K,b as M,c as Q}from"./Dialog-0b39f444.js";import{p as U}from"./Paper-e773ea24.js";import{I as X,B as I}from"./Button-23e6de97.js";import{C as Y}from"./Icons-43292f8c.js";import{C as Z}from"./ConditionalWrapper-8865b2c1.js";import{S as b}from"./Stack-d8c3aa6d.js";import{R as ee,a as c}from"./RadioGroup-7841df2b.js";import{P as te}from"./Padding-12a74279.js";import{H as re}from"./Heading-1229930b.js";import{T as oe}from"./Text-561f173c.js";import"./_commonjsHelpers-de833af9.js";import"./_baseIsEqual-f876697f.js";import"./index-03bbf7d1.js";import"./uniq-da390a93.js";import"./index-d38bc732.js";import"./index-356e4a49.js";import"./extends-98964cd2.js";import"./index-45a327ec.js";import"./index-421204d3.js";import"./index-f8c8b8ff.js";import"./index-296a96c6.js";import"./index-77dbc890.js";import"./index-add592e3.js";import"./index-56d74ee5.js";import"./index-251d008c.js";import"./index-c6da0816.js";import"./Overlay-1ca05ff0.js";import"./Svg-cfd7f95e.js";import"./mdi-685d5538.js";import"./Box-f074bc4b.js";import"./index-d178eb19.js";import"./index-7896d420.js";import"./index-c6b1b4f9.js";import"./index-1a2315aa.js";import"./index-11a3acc1.js";import"./Checkbox-ee294c7f.js";import"./Label-bb409e96.js";var ae=globalThis&&globalThis.__rest||function(r,n){var o={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&n.indexOf(e)<0&&(o[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(r);a<e.length;a++)n.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(r,e[a])&&(o[e[a]]=r[e[a]]);return o};const ne=O(X,H({position:"fixed",right:"$1",top:"$1"})),ie=N({base:{position:"fixed",top:0,bottom:0,width:250,willChange:"transform",boxShadow:"$2",_open:{_motionReduce:{transition:"none"},_motionSafe:{animation:"slideIn 150ms cubic-bezier(0.22, 1, 0.36, 1)"}},_closed:{_motionReduce:{transition:"none"},_motionSafe:{animation:"slideOut 150ms cubic-bezier(0.22, 1, 0.36, 1)"}}},variants:{side:{top:{"--transformValue":"translate3d(0,-100%,0)",width:"100%",height:"300px",bottom:"auto"},right:{"--transformValue":"translate3d(100%,0,0)",right:0},bottom:{"--transformValue":"translate3d(0,100%,0)",width:"100%",height:"300px",bottom:0,top:"auto"},left:{"--transformValue":"translate3d(-100%,0,0)",left:0}}},defaultVariants:{side:"left"}}),se=G(O(J,U),ie),m=z((r,n)=>{var{defaultClose:o,children:e,overlayCss:a,container:h,surface:f="solid",portalled:P=!0}=r,j=ae(r,["defaultClose","children","overlayCss","container","surface","portalled"]);return t(Z,{condition:P,props:{container:h},wrapper:L,children:i(F,{children:[t(K,{css:a}),i(se,Object.assign({surface:f},j,{ref:n,children:[e,o&&t(W,{asChild:!0,children:t(ne,{colorPalette:"$neutral","aria-label":"close",variant:"text",children:t(Y,{title:"Close"})})})]}))]})})});m.displayName="DrawerContent";const y=M,_=Q;y.displayName="DrawerTrigger";_.displayName="DrawerClose";const u=A;u.displayName="Drawer";const Xe={title:"Components/Drawer",component:u,subcomponents:{DrawerContent:m,DrawerClose:_,DrawerTrigger:y}},w="This is a Drawer",g="This is a controlled drawer",d={render:r=>i(u,{...r,children:[t(y,{children:t(I,{children:"Show Drawer"})}),t(m,{children:w})]}),play:async({canvasElement:r})=>{const n=$(r);p.click(n.getByRole("button"));const o=await l.findByText(w);k(o).toBeInTheDocument();const e=E(()=>l.queryByText(w));p.type(o,"{Escape}"),await e}},s={render:r=>{const[n,{setTrue:o,setFalse:e}]=V(!1),[a,h]=q.useState("left");return i(b,{children:[i(ee,{value:a,onValueChange:f=>h(f),children:[t(c,{value:"left",children:"Left"}),t(c,{value:"right",children:"Right"}),t(c,{value:"top",children:"Top"}),t(c,{value:"bottom",children:"Bottom"})]}),t(I,{onClick:o,children:"Show Drawer"}),t(u,{open:n,onOpenChange:e,children:t(m,{side:a,defaultClose:!0,children:t(te,{p:"$2",children:i(b,{children:[t(re,{variant:"h3",children:g}),t(oe,{css:{mt:"$3"},children:"It can be closed by a click outside the drawer or using the esc key"})]})})})})]})},play:async({canvasElement:r})=>{const n=$(r);p.click(n.getByRole("button",{name:/show/i}));const o=await l.findByText(g);k(o).toBeInTheDocument();const e=E(()=>l.queryByText(g));p.click(l.getByRole("button",{name:/close/i})),await e}};var D,T,x;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => <Drawer {...args}>
      <DrawerTrigger>
        <Button>Show Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>{defaultDrawerText}</DrawerContent>
    </Drawer>,
  play: async ({
    canvasElement
  }) => {
    const element = within(canvasElement);
    userEvent.click(element.getByRole('button'));
    const panel = await screen.findByText(defaultDrawerText);
    expect(panel).toBeInTheDocument();
    const waiting = waitForElementToBeRemoved(() => screen.queryByText(defaultDrawerText));
    userEvent.type(panel, '{Escape}');
    await waiting;
  }
}`,...(x=(T=d.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};var v,C,B,R,S;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => {
    const [open, {
      setTrue,
      setFalse
    }] = useBoolean(false);
    const [side, setSide] = React.useState<DrawerPosition>('left');
    return <Stack>
        <RadioGroup value={side} onValueChange={s => setSide((s as DrawerPosition))}>
          <Radio value="left">Left</Radio>
          <Radio value="right">Right</Radio>
          <Radio value="top">Top</Radio>
          <Radio value="bottom">Bottom</Radio>
        </RadioGroup>
        <Button onClick={setTrue}>Show Drawer</Button>
        <Drawer open={open} onOpenChange={setFalse}>
          <DrawerContent side={side} defaultClose={true}>
            <Padding p="$2">
              <Stack>
                <Heading variant="h3">{controlledDrawerText}</Heading>
                <Text css={{
                mt: '$3'
              }}>
                  It can be closed by a click outside the drawer or using the
                  esc key
                </Text>
              </Stack>
            </Padding>
          </DrawerContent>
        </Drawer>
      </Stack>;
  },
  play: async ({
    canvasElement
  }) => {
    const element = within(canvasElement);
    userEvent.click(element.getByRole('button', {
      name: /show/i
    }));
    const panel = await screen.findByText(controlledDrawerText);
    expect(panel).toBeInTheDocument();
    const waiting = waitForElementToBeRemoved(() => screen.queryByText(controlledDrawerText));
    userEvent.click(screen.getByRole('button', {
      name: /close/i
    }));
    await waiting;
  }
}`,...(B=(C=s.parameters)==null?void 0:C.docs)==null?void 0:B.source},description:{story:"It is likely that the Drawer will need to be controlled to support further actions and different closing behaviours.\nThis can be done using the `open` and `onOpenChange` props.\n\nThe position of the `DrawerContent` is controlled by the `side` prop and supports, `top`, `bottom`, `left` and `right`.",...(S=(R=s.parameters)==null?void 0:R.docs)==null?void 0:S.description}}};const Ye=["Default","Controllable"];export{s as Controllable,d as Default,Ye as __namedExportsOrder,Xe as default};
//# sourceMappingURL=Drawer.stories-5619f57b.js.map

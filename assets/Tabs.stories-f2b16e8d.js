import{j as H,a as g}from"./jsx-runtime-03b4ddbf.js";import{w as jt,e as f,u as O,a as G}from"./index-4345948b.js";import{a as k,c as M,b as Ht,s as Gt}from"./component-92c13614.js";import{_ as $}from"./extends-98964cd2.js";import{r}from"./index-76fb7be0.js";import{a as N,$ as Kt}from"./index-45a327ec.js";import{a as qt}from"./index-421204d3.js";import{$ as zt,a as Ut,b as Wt}from"./index-d178eb19.js";import{$ as Jt}from"./index-c6da0816.js";import{$ as F}from"./index-77dbc890.js";import{$ as Qt}from"./index-c6b1b4f9.js";import{$ as Xt}from"./index-f8c8b8ff.js";import{b as Yt,m as P,a as Zt}from"./Button-23e6de97.js";import"./_commonjsHelpers-de833af9.js";import"./_baseIsEqual-f876697f.js";import"./index-03bbf7d1.js";import"./uniq-da390a93.js";import"./index-d38bc732.js";import"./index-356e4a49.js";import"./index-7896d420.js";import"./index-add592e3.js";import"./Svg-cfd7f95e.js";const Mt="Tabs",[te,Fe]=qt(Mt,[zt]),kt=zt(),[ee,j]=te(Mt),ae=r.forwardRef((e,i)=>{const{__scopeTabs:u,value:t,onValueChange:o,defaultValue:c,orientation:a="horizontal",dir:n,activationMode:v="automatic",...x}=e,d=Qt(n),[l,m]=Kt({prop:t,onChange:o,defaultProp:c});return r.createElement(ee,{scope:u,baseId:Xt(),value:l,onValueChange:m,orientation:a,dir:d,activationMode:v},r.createElement(F.div,$({dir:d,"data-orientation":a},x,{ref:i})))}),oe="TabsList",ne=r.forwardRef((e,i)=>{const{__scopeTabs:u,loop:t=!0,...o}=e,c=j(oe,u),a=kt(u);return r.createElement(Ut,$({asChild:!0},a,{orientation:c.orientation,dir:c.dir,loop:t}),r.createElement(F.div,$({role:"tablist","aria-orientation":c.orientation},o,{ref:i})))}),re="TabsTrigger",se=r.forwardRef((e,i)=>{const{__scopeTabs:u,value:t,disabled:o=!1,...c}=e,a=j(re,u),n=kt(u),v=Ft(a.baseId,t),x=Ot(a.baseId,t),d=t===a.value;return r.createElement(Wt,$({asChild:!0},n,{focusable:!o,active:d}),r.createElement(F.button,$({type:"button",role:"tab","aria-selected":d,"aria-controls":x,"data-state":d?"active":"inactive","data-disabled":o?"":void 0,disabled:o,id:v},c,{ref:i,onMouseDown:N(e.onMouseDown,l=>{!o&&l.button===0&&l.ctrlKey===!1?a.onValueChange(t):l.preventDefault()}),onKeyDown:N(e.onKeyDown,l=>{[" ","Enter"].includes(l.key)&&a.onValueChange(t)}),onFocus:N(e.onFocus,()=>{const l=a.activationMode!=="manual";!d&&!o&&l&&a.onValueChange(t)})})))}),ie="TabsContent",ce=r.forwardRef((e,i)=>{const{__scopeTabs:u,value:t,forceMount:o,children:c,...a}=e,n=j(ie,u),v=Ft(n.baseId,t),x=Ot(n.baseId,t),d=t===n.value,l=r.useRef(d);return r.useEffect(()=>{const m=requestAnimationFrame(()=>l.current=!1);return()=>cancelAnimationFrame(m)},[]),r.createElement(Jt,{present:o||d},({present:m})=>r.createElement(F.div,$({"data-state":d?"active":"inactive","data-orientation":n.orientation,role:"tabpanel","aria-labelledby":v,hidden:!m,id:x,tabIndex:0},a,{ref:i,style:{...e.style,animationDuration:l.current?"0s":void 0}}),m&&c))});function Ft(e,i){return`${e}-trigger-${i}`}function Ot(e,i){return`${e}-content-${i}`}const le=ae,de=ne,be=se,ue=ce,pe="c-tabs",b="c-tabs-tab",p="c-tabs-list",fe="c-tabs-content",I=k(be,b,M(Zt),M({cursor:"pointer",minWidth:"160px",borderRadius:"0 !important",border:"none",'&[data-state="active"]':{cursor:"auto"}})),Nt=k(de,p,M({display:"flex",gridArea:"tabs"})),z=k(ue,fe,M({padding:"$3",gridArea:"content"})),me=Ht({base:Object.assign(Object.assign({"--tab-indicator-size":"2px","--tab-shadow":"currentColor"},Yt),{display:"grid",gap:"0px 0px"}),variants:{size:{small:{"--tab-indicator-size":"1px",[`& .${b}`]:{paddingLeft:"$3",paddingRight:"$3",height:"$5",fontSize:"$-1"}},default:{"--tab-indicator-size":"2px",[`& .${b}`]:{paddingLeft:"$4",paddingRight:"$4",height:"$6"}},large:{"--tab-indicator-size":"4px",[`& .${b}`]:{paddingLeft:"$6",paddingRight:"$6",height:"$7"}}},position:{top:{gridTemplateColumns:"1fr",gridTemplateRows:"auto 1fr",gridTemplateAreas:'"tabs" "content"',[`& .${b}`]:{'&[data-state="active"]':{boxShadow:"inset 0 calc(var(--tab-indicator-size)*-1) 0 0 var(--tab-shadow)"}},[`& .${p}`]:{flexDirection:"row"}},bottom:{gridTemplateColumns:"1fr",gridTemplateRows:"1fr auto",gridTemplateAreas:'"content" "tabs"',[`& .${b}`]:{'&[data-state="active"]':{boxShadow:"inset 0 var(--tab-indicator-size) 0 0 var(--tab-shadow)"}},[`& .${p}`]:{flexDirection:"row"}},left:{gridTemplateColumns:"auto 1fr",gridTemplateRows:"1fr",gridTemplateAreas:'"tabs content"',[`& .${b}`]:{'&[data-state="active"]':{boxShadow:"inset calc(var(--tab-indicator-size)*-1) 0 0 0 var(--tab-shadow)"}},[`& .${p}`]:{flexDirection:"column"}},right:{gridTemplateColumns:"1fr auto",gridTemplateRows:"1fr",gridTemplateAreas:'"content tabs"',[`& .${b}`]:{'&[data-state="active"]':{boxShadow:"inset var(--tab-indicator-size) 0 0 0 var(--tab-shadow)"}},[`& .${p}`]:{flexDirection:"column"}}},variant:{solid:{[`& .${b}`]:P.solid,[`& .${p}`]:{backgroundColor:"$primary"}},outline:{[`& .${b}`]:Object.assign(Object.assign({},P.outline),{"--tab-shadow":"transparent",border:"var(--contrast) solid 2px",backgroundColor:"var(--bg)",color:"var(--contrast)",'&[data-state="active"]':{boxShadow:"none !important",textDecoration:"underline"}})},text:{[`& .${b}`]:P.text}}},compoundVariants:[{variant:"text",position:"top",css:{[`& .${p}`]:{borderBottom:"1px solid token(colors.$neutral.4)"}}},{variant:"text",position:"bottom",css:{[`& .${p}`]:{borderTop:"1px solid token(colors.$neutral.4)"}}},{variant:"text",position:"left",css:{[`& .${p}`]:{borderRight:"1px solid token(colors.$neutral.4)"}}},{variant:"text",position:"right",css:{[`& .${p}`]:{borderLeft:"1px solid token(colors.$neutral.4)"}}}],defaultVariants:{variant:"text",size:"default",position:"top"}}),Pt=Gt(k(le,pe),me),Oe={title:"Components/Tabs",component:Pt,subcomponents:{TabsList:Nt,Tab:I,TabContent:z},argTypes:{variant:{control:{type:"select",options:["solid","outline","text"]},description:"The button is available in different variants. For the primary action on the view use the `solid` variant, most others should be `outline` which is the default. Use `text` variant for paired no-action buttons."},size:{control:{type:"select",options:["small","default","large"]},description:"The button is available in 3 different sizes."}}},s={render:e=>H(Pt,{...e,children:[H(Nt,{children:[g(I,{value:"tab1",children:"One"}),g(I,{value:"tab2",children:"Two"}),g(I,{value:"tab3",children:"Three"})]}),g(z,{value:"tab1",children:"Tab one content"}),g(z,{value:"tab2",children:"Tab two content"}),g(z,{value:"tab3",children:"Tab three content"})]}),args:{defaultValue:"tab1"}},h={...s,args:{defaultValue:"tab1",variant:"solid"}},w={...s,args:{defaultValue:"tab2",variant:"outline"}},y={...s,args:{defaultValue:"tab3",variant:"text"}},T={...s,args:{defaultValue:"tab1",variant:"text",activationMode:"manual"}},V={...s,args:{defaultValue:"tab2",size:"small"}},S={...s,args:{defaultValue:"tab3",size:"large"}},B={...s,args:{defaultValue:"tab1",variant:"solid",position:"left"}},A={...s,args:{defaultValue:"tab1",variant:"outline",position:"right"}},R={...s,args:{defaultValue:"tab1",variant:"text",position:"top"}},_={...s,args:{defaultValue:"tab1",variant:"solid",position:"bottom"}},D={...s,args:{defaultValue:"tab1",variant:"text",position:"left"}},C={...s,args:{defaultValue:"tab1",variant:"text",position:"top"}},E={...s,args:{defaultValue:"tab1",variant:"text",position:"right"}},L={...s,play:async({args:e,canvasElement:i,step:u})=>{const t=jt(i),o=await t.findByRole("tab",{name:"One"}),c=await t.findByRole("tab",{name:"Two"}),a=await t.findByRole("tab",{name:"Three"});f(o).toBeInTheDocument(),f(c).toBeInTheDocument(),f(a).toBeInTheDocument(),f(await t.getAllByRole("tabpanel").filter(n=>n.getAttribute("data-state")==="active")).toHaveLength(1),f(await t.findByText("Tab one content")).toBeVisible(),await O.click(c),await G(async()=>{f(await t.getAllByRole("tabpanel").filter(n=>n.getAttribute("data-state")==="active")).toHaveLength(1),f(await t.findByText("Tab two content")).toBeVisible()}),await O.keyboard("[ArrowRight]"),await G(async()=>{f(await t.getAllByRole("tabpanel").filter(n=>n.getAttribute("data-state")==="active")).toHaveLength(1),f(await t.findByText("Tab three content")).toBeVisible()}),await O.click(o)}};var K,q,U;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`{
  ...Default,
  args: {
    defaultValue: 'tab1',
    variant: 'solid'
  }
}`,...(U=(q=h.parameters)==null?void 0:q.docs)==null?void 0:U.source}}};var W,J,Q;w.parameters={...w.parameters,docs:{...(W=w.parameters)==null?void 0:W.docs,source:{originalSource:`{
  ...Default,
  args: {
    defaultValue: 'tab2',
    variant: 'outline'
  }
}`,...(Q=(J=w.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Y,Z;y.parameters={...y.parameters,docs:{...(X=y.parameters)==null?void 0:X.docs,source:{originalSource:`{
  ...Default,
  args: {
    defaultValue: 'tab3',
    variant: 'text'
  }
}`,...(Z=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var tt,et,at,ot,nt;T.parameters={...T.parameters,docs:{...(tt=T.parameters)==null?void 0:tt.docs,source:{originalSource:`{
  ...Default,
  args: {
    defaultValue: 'tab1',
    variant: 'text',
    activationMode: 'manual'
  }
}`,...(at=(et=T.parameters)==null?void 0:et.docs)==null?void 0:at.source},description:{story:"By default content is shown when the tab is focused. Use `activationMode` `manual` to require a click to change tabs.",...(nt=(ot=T.parameters)==null?void 0:ot.docs)==null?void 0:nt.description}}};var rt,st,it;V.parameters={...V.parameters,docs:{...(rt=V.parameters)==null?void 0:rt.docs,source:{originalSource:`{
  ...Default,
  args: {
    defaultValue: 'tab2',
    size: 'small'
  }
}`,...(it=(st=V.parameters)==null?void 0:st.docs)==null?void 0:it.source}}};var ct,lt,dt;S.parameters={...S.parameters,docs:{...(ct=S.parameters)==null?void 0:ct.docs,source:{originalSource:`{
  ...Default,
  args: {
    defaultValue: 'tab3',
    size: 'large'
  }
}`,...(dt=(lt=S.parameters)==null?void 0:lt.docs)==null?void 0:dt.source}}};var bt,ut,pt;B.parameters={...B.parameters,docs:{...(bt=B.parameters)==null?void 0:bt.docs,source:{originalSource:`{
  ...Default,
  args: {
    defaultValue: 'tab1',
    variant: 'solid',
    position: 'left'
  }
}`,...(pt=(ut=B.parameters)==null?void 0:ut.docs)==null?void 0:pt.source}}};var ft,mt,gt;A.parameters={...A.parameters,docs:{...(ft=A.parameters)==null?void 0:ft.docs,source:{originalSource:`{
  ...Default,
  args: {
    defaultValue: 'tab1',
    variant: 'outline',
    position: 'right'
  }
}`,...(gt=(mt=A.parameters)==null?void 0:mt.docs)==null?void 0:gt.source}}};var $t,vt,xt;R.parameters={...R.parameters,docs:{...($t=R.parameters)==null?void 0:$t.docs,source:{originalSource:`{
  ...Default,
  args: {
    defaultValue: 'tab1',
    variant: 'text',
    position: 'top'
  }
}`,...(xt=(vt=R.parameters)==null?void 0:vt.docs)==null?void 0:xt.source}}};var Tt,ht,wt;_.parameters={..._.parameters,docs:{...(Tt=_.parameters)==null?void 0:Tt.docs,source:{originalSource:`{
  ...Default,
  args: {
    defaultValue: 'tab1',
    variant: 'solid',
    position: 'bottom'
  }
}`,...(wt=(ht=_.parameters)==null?void 0:ht.docs)==null?void 0:wt.source}}};var yt,Vt,St;D.parameters={...D.parameters,docs:{...(yt=D.parameters)==null?void 0:yt.docs,source:{originalSource:`{
  ...Default,
  args: {
    defaultValue: 'tab1',
    variant: 'text',
    position: 'left'
  }
}`,...(St=(Vt=D.parameters)==null?void 0:Vt.docs)==null?void 0:St.source}}};var Bt,At,Rt;C.parameters={...C.parameters,docs:{...(Bt=C.parameters)==null?void 0:Bt.docs,source:{originalSource:`{
  ...Default,
  args: {
    defaultValue: 'tab1',
    variant: 'text',
    position: 'top'
  }
}`,...(Rt=(At=C.parameters)==null?void 0:At.docs)==null?void 0:Rt.source}}};var _t,Dt,Ct;E.parameters={...E.parameters,docs:{...(_t=E.parameters)==null?void 0:_t.docs,source:{originalSource:`{
  ...Default,
  args: {
    defaultValue: 'tab1',
    variant: 'text',
    position: 'right'
  }
}`,...(Ct=(Dt=E.parameters)==null?void 0:Dt.docs)==null?void 0:Ct.source}}};var Et,Lt,It;L.parameters={...L.parameters,docs:{...(Et=L.parameters)==null?void 0:Et.docs,source:{originalSource:`{
  ...Default,
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const screen = within(canvasElement);
    const tab1 = await screen.findByRole('tab', {
      name: 'One'
    });
    const tab2 = await screen.findByRole('tab', {
      name: 'Two'
    });
    const tab3 = await screen.findByRole('tab', {
      name: 'Three'
    });
    expect(tab1).toBeInTheDocument();
    expect(tab2).toBeInTheDocument();
    expect(tab3).toBeInTheDocument();
    expect(await screen.getAllByRole('tabpanel').filter(tab => tab.getAttribute('data-state') === 'active')).toHaveLength(1);
    expect(await screen.findByText('Tab one content')).toBeVisible();
    await userEvent.click(tab2);
    await waitFor(async () => {
      expect(await screen.getAllByRole('tabpanel').filter(tab => tab.getAttribute('data-state') === 'active')).toHaveLength(1);
      expect(await screen.findByText('Tab two content')).toBeVisible();
    });
    await userEvent.keyboard('[ArrowRight]');
    await waitFor(async () => {
      expect(await screen.getAllByRole('tabpanel').filter(tab => tab.getAttribute('data-state') === 'active')).toHaveLength(1);
      expect(await screen.findByText('Tab three content')).toBeVisible();
    });
    await userEvent.click(tab1);
  }
}`,...(It=(Lt=L.parameters)==null?void 0:Lt.docs)==null?void 0:It.source}}};const Ne=["Solid","Outline","Text","Manual","Small","Large","Left","Right","Top","Bottom","TextLeft","TextTop","TextRight","TestTabs"];export{_ as Bottom,S as Large,B as Left,T as Manual,w as Outline,A as Right,V as Small,h as Solid,L as TestTabs,y as Text,D as TextLeft,E as TextRight,C as TextTop,R as Top,Ne as __namedExportsOrder,Oe as default};
//# sourceMappingURL=Tabs.stories-f2b16e8d.js.map

import{a as t,j as n}from"./jsx-runtime-03b4ddbf.js";import{l as v}from"./mdi-685d5538.js";import{a as d}from"./chunk-AY7I2SME-c7b6cf8a.js";import{r as H,R as et}from"./index-76fb7be0.js";import{b as J,s as f,a as p,c as L,d as it}from"./component-92c13614.js";import{c as rt,a as ot,b as st,I as nt}from"./Button-23e6de97.js";import{p as K}from"./Paper-e773ea24.js";import{S as ct}from"./Svg-cfd7f95e.js";import{T as Q}from"./Text-561f173c.js";import{C}from"./Checkbox-ee294c7f.js";import"./_commonjsHelpers-de833af9.js";import"./extends-98964cd2.js";import"./index-421204d3.js";import"./index-45a327ec.js";import"./index-11a3acc1.js";import"./index-1a2315aa.js";import"./index-c6da0816.js";import"./index-add592e3.js";import"./index-77dbc890.js";import"./Label-bb409e96.js";import"./Icons-43292f8c.js";import"./ConditionalWrapper-8865b2c1.js";var U=globalThis&&globalThis.__rest||function(e,s){var m={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&s.indexOf(o)<0&&(m[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,o=Object.getOwnPropertySymbols(e);c<o.length;c++)s.indexOf(o[c])<0&&Object.prototype.propertyIsEnumerable.call(e,o[c])&&(m[o[c]]=e[o[c]]);return m};const at=J({base:{borderTop:"1px solid token(colors.$neutral.4)"},variants:{border:{true:{borderLeft:"1px solid token(colors.$neutral.4)",borderRight:"1px solid token(colors.$neutral.4)"}}}}),a=f("div",at),X=J({base:{"--selectionColor":"token(colors.$selection)",flex:1,alignItems:"center",display:"flex",px:"$4",py:"$2",colorPalette:"$neutral",borderBottom:"1px solid token(colors.$neutral.4)"},variants:{selected:{true:{backgroundColor:"var(--selectionColor) !important"}}}}),mt=f(p("div",K),X),lt=f(p("button",K,L(st,ot,rt,{width:"100%"})),X),i=H.forwardRef((e,s)=>{var{interactive:m,surface:o="solid"}=e,c=U(e,["interactive","surface"]);return m?t(lt,Object.assign({},c,{surface:o,ref:s})):t(mt,Object.assign({},c,{surface:o,ref:s}))});i.displayName="ListItem";const Z=p(ct,L({minWidth:"56px",textAlign:"left"}));Z.displayName="ListItemIcon";const dt="c-list-item-secondary-action",I=H.forwardRef((e,s)=>{var{className:m}=e,o=U(e,["className"]);return t(nt,Object.assign({className:it(dt,L({color:"$text.secondary"}),m),variant:"text"},o,{ref:s}))});I.displayName="ListItemSecondaryAction";const It=p("div",L({marginTop:"$2",marginBottom:"$2",flex:"1",textAlign:"left"})),pt=p(Q,L({display:"block",color:"$text.secondary",fontSize:"$-2"})),r=({text:e,subtext:s})=>n(It,{children:[t(Q,{children:e}),s!=null&&t(pt,{children:s})]});r.displayName="ListItemText";i.__docgenInfo={description:"",methods:[],displayName:"ListItem"};I.__docgenInfo={description:`ListItemSecondaryAction component

Is a light wrapper around IconButton component for standard styling by default that can be overridden.`,methods:[],displayName:"ListItemSecondaryAction"};const Pt={title:"Components/List",component:a,subcomponents:{ListItem:i,ListItemIcon:Z,ListItemSecondaryAction:I,ListItemText:r}},x=()=>n(a,{children:[t(i,{children:t(r,{text:"Item 1"})}),t(i,{children:t(r,{text:"Item 2"})})]}),u=()=>n(a,{children:[t(i,{interactive:!0,onClick:d("Item 1"),children:t(r,{text:"Line item 1"})}),t(i,{interactive:!0,onClick:d("Item 2"),children:t(r,{text:"Line item 2"})}),t(i,{interactive:!0,disabled:!0,onClick:d("Item 3"),children:t(r,{text:"Line item 3"})})]}),l=()=>{const[e,s]=et.useState("Item 1");return n(a,{children:[t(i,{interactive:!0,selected:e==="Item 1",onClick:()=>s("Item 1"),children:t(r,{text:"Line item 1"})}),t(i,{css:{"--selectionColor":"token(colors.$error.3)"},interactive:!0,selected:e==="Item 2",onClick:()=>s("Item 2"),children:t(r,{text:"Line item 2 (--selectionColor overwritten)"})}),t(i,{interactive:!0,disabled:!0,selected:e==="Item 3",onClick:()=>s("Item 3"),children:t(r,{text:"Line item 3"})})]})},h=()=>n(a,{border:!0,children:[t(i,{children:t(r,{text:"Item 1"})}),t(i,{children:t(r,{text:"Item 2"})})]}),b=()=>n(a,{children:[n(i,{children:[t(r,{text:"Line item 1"}),t(I,{path:v,onClick:d("Secondary Item 1")})]}),n(i,{children:[t(r,{text:"Line item 2"}),t(I,{path:v,onClick:d("Secondary Item 2")})]})]}),S=()=>n(a,{children:[t(i,{children:t(r,{text:"Item 1",subtext:"Secondary item text"})}),t(i,{children:t(r,{text:"Item 2",subtext:"Secondary item text"})})]}),y=()=>n(a,{children:[n(i,{children:[t(r,{text:"Wi-Fi"}),t(C,{})]}),n(i,{children:[t(r,{text:"Bluetooth"}),t(C,{})]})]});var k,T,g;x.parameters={...x.parameters,docs:{...(k=x.parameters)==null?void 0:k.docs,source:{originalSource:`() => <List>
    <ListItem>
      <ListItemText text="Item 1" />
    </ListItem>
    <ListItem>
      <ListItemText text="Item 2" />
    </ListItem>
  </List>`,...(g=(T=x.parameters)==null?void 0:T.docs)==null?void 0:g.source}}};var O,$,A;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`() => <List>
    <ListItem interactive onClick={action('Item 1')}>
      <ListItemText text={\`Line item 1\`} />
    </ListItem>
    <ListItem interactive onClick={action('Item 2')}>
      <ListItemText text={\`Line item 2\`} />
    </ListItem>
    <ListItem interactive disabled onClick={action('Item 3')}>
      <ListItemText text={\`Line item 3\`} />
    </ListItem>
  </List>`,...(A=($=u.parameters)==null?void 0:$.docs)==null?void 0:A.source}}};var _,N,W,j,B;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
  const [selected, setSelected] = React.useState('Item 1');
  return <List>
      <ListItem interactive selected={selected === 'Item 1'} onClick={() => setSelected('Item 1')}>
        <ListItemText text={\`Line item 1\`} />
      </ListItem>
      <ListItem css={{
      '--selectionColor': 'token(colors.$error.3)'
    }} interactive selected={selected === 'Item 2'} onClick={() => setSelected('Item 2')}>
        <ListItemText text={\`Line item 2 (--selectionColor overwritten)\`} />
      </ListItem>
      <ListItem interactive disabled selected={selected === 'Item 3'} onClick={() => setSelected('Item 3')}>
        <ListItemText text={\`Line item 3\`} />
      </ListItem>
    </List>;
}`,...(W=(N=l.parameters)==null?void 0:N.docs)==null?void 0:W.source},description:{story:"List items can be marked as selected and the color can be controlled through the css variable `--selectionColor`",...(B=(j=l.parameters)==null?void 0:j.docs)==null?void 0:B.description}}};var w,P,E;h.parameters={...h.parameters,docs:{...(w=h.parameters)==null?void 0:w.docs,source:{originalSource:`() => <List border>
    <ListItem>
      <ListItemText text="Item 1" />
    </ListItem>
    <ListItem>
      <ListItemText text="Item 2" />
    </ListItem>
  </List>`,...(E=(P=h.parameters)==null?void 0:P.docs)==null?void 0:E.source}}};var R,D,F;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`() => <List>
    <ListItem>
      <ListItemText text={\`Line item 1\`} />
      <ListItemSecondaryAction path={mdiComment} onClick={action('Secondary Item 1')} />
    </ListItem>
    <ListItem>
      <ListItemText text={\`Line item 2\`} />
      <ListItemSecondaryAction path={mdiComment} onClick={action('Secondary Item 2')} />
    </ListItem>
  </List>`,...(F=(D=b.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var M,z,V;S.parameters={...S.parameters,docs:{...(M=S.parameters)==null?void 0:M.docs,source:{originalSource:`() => <List>
    <ListItem>
      <ListItemText text="Item 1" subtext="Secondary item text" />
    </ListItem>
    <ListItem>
      <ListItemText text="Item 2" subtext="Secondary item text" />
    </ListItem>
  </List>`,...(V=(z=S.parameters)==null?void 0:z.docs)==null?void 0:V.source}}};var Y,q,G;y.parameters={...y.parameters,docs:{...(Y=y.parameters)==null?void 0:Y.docs,source:{originalSource:`() => <List>
    <ListItem>
      <ListItemText text="Wi-Fi" />
      <Checkbox />
    </ListItem>
    <ListItem>
      <ListItemText text="Bluetooth" />
      <Checkbox />
    </ListItem>
  </List>`,...(G=(q=y.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};const Et=["Default","Interactive","Selectable","WithBorder","WithSecondaryActions","WithSubtext","WithCheckbox"];export{x as Default,u as Interactive,l as Selectable,h as WithBorder,y as WithCheckbox,b as WithSecondaryActions,S as WithSubtext,Et as __namedExportsOrder,Pt as default};
//# sourceMappingURL=List.stories-4b990d3a.js.map

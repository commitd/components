import{a as e,j as c,F as yn}from"./jsx-runtime-03b4ddbf.js";import{i as wn}from"./hooks.esm-cc7a556e.js";import{a as C}from"./chunk-AY7I2SME-c7b6cf8a.js";import{u as y,a as x,e as b,s as l}from"./index-4345948b.js";import{r as a}from"./index-76fb7be0.js";import{j as xn,a as M,c as rn,s as B,f as te,g as vn}from"./component-92c13614.js";import{_ as f}from"./extends-98964cd2.js";import{a as J,$ as cn}from"./index-45a327ec.js";import{a as Rn}from"./index-421204d3.js";import{$ as Bn}from"./index-77dbc890.js";import{$ as an,a as Dn,b as _n,c as Tn,d as kn,e as En,f as Nn,g as On,h as Pn,i as Gn,j as Fn,k as An,l as Wn,m as jn,n as qn,o as Ln,p as Z,s as Hn,q as un,r as sn,t as Vn,u as zn,v as dn,w as Un,x as ln,y as Kn}from"./index-2975ab53.js";import{$ as re}from"./index-f8c8b8ff.js";import{p as pn}from"./Paper-e773ea24.js";import{b as Jn,f as Qn,a as Xn}from"./Icons-43292f8c.js";import{B as Yn}from"./Button-23e6de97.js";import{C as mn}from"./ConditionalWrapper-8865b2c1.js";import{I as Mn}from"./Inline-fdf2c0ff.js";import{T as Zn}from"./Text-561f173c.js";import{A as et}from"./Avatar-8ab836af.js";import{C as nt}from"./Chip-945c51f7.js";import"./_commonjsHelpers-de833af9.js";import"./_baseIsEqual-f876697f.js";import"./index-03bbf7d1.js";import"./uniq-da390a93.js";import"./index-d38bc732.js";import"./index-356e4a49.js";import"./index-add592e3.js";import"./index-7896d420.js";import"./index-c6b1b4f9.js";import"./index-296a96c6.js";import"./index-56d74ee5.js";import"./index-01bbf444.js";import"./index-1a2315aa.js";import"./index-251d008c.js";import"./index-c6da0816.js";import"./index-d178eb19.js";import"./mdi-685d5538.js";import"./Svg-cfd7f95e.js";import"./Box-f074bc4b.js";const hn="DropdownMenu",[tt,Eo]=Rn(hn,[an]),I=an(),[ot,fn]=tt(hn),rt=n=>{const{__scopeDropdownMenu:o,children:r,dir:t,open:u,defaultOpen:i,onOpenChange:$,modal:m=!0}=n,S=I(o),ne=a.useRef(null),[G=!1,F]=cn({prop:u,defaultProp:i,onChange:$});return a.createElement(ot,{scope:o,triggerId:re(),triggerRef:ne,contentId:re(),open:G,onOpenChange:F,onOpenToggle:a.useCallback(()=>F(Sn=>!Sn),[F]),modal:m},a.createElement(En,f({},S,{open:G,onOpenChange:F,dir:t,modal:m}),r))},ct="DropdownMenuTrigger",at=a.forwardRef((n,o)=>{const{__scopeDropdownMenu:r,disabled:t=!1,...u}=n,i=fn(ct,r),$=I(r);return a.createElement(Dn,f({asChild:!0},$),a.createElement(Bn.button,f({type:"button",id:i.triggerId,"aria-haspopup":"menu","aria-expanded":i.open,"aria-controls":i.open?i.contentId:void 0,"data-state":i.open?"open":"closed","data-disabled":t?"":void 0,disabled:t},u,{ref:xn(o,i.triggerRef),onPointerDown:J(n.onPointerDown,m=>{!t&&m.button===0&&m.ctrlKey===!1&&(i.onOpenToggle(),i.open||m.preventDefault())}),onKeyDown:J(n.onKeyDown,m=>{t||(["Enter"," "].includes(m.key)&&i.onOpenToggle(),m.key==="ArrowDown"&&i.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(m.key)&&m.preventDefault())})})))}),ut=n=>{const{__scopeDropdownMenu:o,...r}=n,t=I(o);return a.createElement(_n,f({},t,r))},st="DropdownMenuContent",it=a.forwardRef((n,o)=>{const{__scopeDropdownMenu:r,...t}=n,u=fn(st,r),i=I(r),$=a.useRef(!1);return a.createElement(Nn,f({id:u.contentId,"aria-labelledby":u.triggerId},i,t,{ref:o,onCloseAutoFocus:J(n.onCloseAutoFocus,m=>{var S;$.current||(S=u.triggerRef.current)===null||S===void 0||S.focus(),$.current=!1,m.preventDefault()}),onInteractOutside:J(n.onInteractOutside,m=>{const S=m.detail.originalEvent,ne=S.button===0&&S.ctrlKey===!0,G=S.button===2||ne;(!u.modal||G)&&($.current=!0)}),style:{...n.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}}))}),dt=a.forwardRef((n,o)=>{const{__scopeDropdownMenu:r,...t}=n,u=I(r);return a.createElement(On,f({},u,t,{ref:o}))}),lt=a.forwardRef((n,o)=>{const{__scopeDropdownMenu:r,...t}=n,u=I(r);return a.createElement(Pn,f({},u,t,{ref:o}))}),pt=a.forwardRef((n,o)=>{const{__scopeDropdownMenu:r,...t}=n,u=I(r);return a.createElement(Tn,f({},u,t,{ref:o}))}),mt=a.forwardRef((n,o)=>{const{__scopeDropdownMenu:r,...t}=n,u=I(r);return a.createElement(Gn,f({},u,t,{ref:o}))}),Mt=a.forwardRef((n,o)=>{const{__scopeDropdownMenu:r,...t}=n,u=I(r);return a.createElement(Fn,f({},u,t,{ref:o}))}),ht=a.forwardRef((n,o)=>{const{__scopeDropdownMenu:r,...t}=n,u=I(r);return a.createElement(An,f({},u,t,{ref:o}))}),ft=a.forwardRef((n,o)=>{const{__scopeDropdownMenu:r,...t}=n,u=I(r);return a.createElement(Wn,f({},u,t,{ref:o}))}),bt=a.forwardRef((n,o)=>{const{__scopeDropdownMenu:r,...t}=n,u=I(r);return a.createElement(jn,f({},u,t,{ref:o}))}),gt=n=>{const{__scopeDropdownMenu:o,children:r,open:t,onOpenChange:u,defaultOpen:i}=n,$=I(o),[m=!1,S]=cn({prop:t,defaultProp:i,onChange:u});return a.createElement(qn,f({},$,{open:m,onOpenChange:S}),r)},It=a.forwardRef((n,o)=>{const{__scopeDropdownMenu:r,...t}=n,u=I(r);return a.createElement(kn,f({},u,t,{ref:o}))}),$t=a.forwardRef((n,o)=>{const{__scopeDropdownMenu:r,...t}=n,u=I(r);return a.createElement(Ln,f({},u,t,{ref:o,style:{...n.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}}))}),Ct=rt,bn=at,gn=ut,St=it,yt=dt,wt=lt,xt=pt,vt=mt,Rt=Mt,Bt=ht,Dt=ft,_t=bt,Tt=gt,kt=It,Et=$t;var D=globalThis&&globalThis.__rest||function(n,o){var r={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&o.indexOf(t)<0&&(r[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,t=Object.getOwnPropertySymbols(n);u<t.length;u++)o.indexOf(t[u])<0&&Object.prototype.propertyIsEnumerable.call(n,t[u])&&(r[t[u]]=n[t[u]]);return r};const Nt=M(Qn,un),In=M(Xn,un),Ot="c-menu",$n="c-meu-item",Pt=rn({display:"flex",marginLeft:"$3",marginRight:"$1",[`& .${$n}`]:{paddingLeft:"$2"}}),p=M(Ct,Ot);p.displayName="Menu";const s=M(B(xt,Z),$n,sn);s.displayName="MenuItem";const v=M("span","c-menu-item-shortcut",Vn);v.displayName="MenuItemShortcut";const w=B(M(_t,"c-menu-separator"),Hn);w.displayName="MenuSeparator";const ee=M(wt,"c-menu-label",zn);ee.displayName="MenuLabel";const oe=M(yt,"c-menu-group",Pt);oe.displayName="MenuItemGroup";const E=M(Rt,"c-menu-radio-group");E.displayName="MenuRadioGroup";const Gt=B(M(St,"c-menu-content",pn,dn)),Ft=M(Dt,"c-menu-indicator",Un),At=B(M(vt,"c-menu-checkbox-item",ln),Z),Wt=B(M(Bt,"c-menu-radio-item",ln),Z),d=a.forwardRef((n,o)=>{var{portalled:r=!0,surface:t="solid",container:u,children:i}=n,$=D(n,["portalled","surface","container","children"]);return e(mn,{condition:r,props:{container:u},wrapper:gn,children:e(Gt,Object.assign({surface:t,alignOffset:8},$,{ref:o,children:i}))})});d.displayName="MenuContent";const jt="c-menu-trigger",k=a.forwardRef((n,o)=>{var{children:r}=n,t=D(n,["children"]);return e(bn,Object.assign({className:jt,asChild:!0},t,{ref:o,children:r}))});k.displayName="MenuTrigger";const qt=M(Jn,rn({position:"relative",top:1,"[data-state=open] &":{transform:"rotate(-180deg)"},marginRight:"-$2",_motionReduce:{transition:"none"},_motionSafe:{transition:"transform 250ms ease"}})),Lt="c-menu-button",h=a.forwardRef((n,o)=>{var{children:r}=n,t=D(n,["children"]);return e(bn,{className:Lt,asChild:!0,ref:o,children:c(Yn,Object.assign({},t,{children:[r,e(qt,{})]}))})});h.displayName="MenuButton";const Cn=te((n,o)=>e(Ft,Object.assign({},n,{ref:o,children:e(In,{})})));In.displayName="StyledCheckIndicator";const R=vn((n,o)=>{var{children:r}=n,t=D(n,["children"]);return c(At,Object.assign({},t,{ref:o,children:[e(Cn,{}),r]}))});R.displayName="MenuCheckboxItem";const g=a.forwardRef((n,o)=>{var{children:r}=n,t=D(n,["children"]);return c(Wt,Object.assign({},t,{ref:o,children:[e(Cn,{}),r]}))});g.displayName="MenuRadioItem";const Q=M(Tt,"c-menu-sub");Q.displayName="MenuSub";const Ht=M(B(kt,Z),sn,Kn),Vt=B(M(Et,"c-menu-sub-content",pn,dn)),X=te((n,o)=>{var{children:r}=n,t=D(n,["children"]);return c(Ht,Object.assign({},t,{ref:o,children:[r,e(Nt,{})]}))});X.displayName="MenuSubTrigger";const Y=te((n,o)=>{var{container:r,portalled:t=!0,surface:u="solid",children:i}=n,$=D(n,["container","portalled","surface","children"]);return e(mn,{condition:t,props:{container:r},wrapper:gn,children:e(Vt,Object.assign({surface:u},$,{ref:o,children:i}))})});Y.displayName="MenuSubContent";d.__docgenInfo={description:"",methods:[],displayName:"MenuContent"};k.__docgenInfo={description:"",methods:[],displayName:"MenuTrigger"};h.__docgenInfo={description:"",methods:[],displayName:"MenuButton"};g.__docgenInfo={description:"",methods:[],displayName:"MenuRadioItem"};const zt={MenuTrigger:k,MenuContent:d,MenuItem:s,MenuCheckboxItem:R,MenuRadioItem:g,MenuSeparator:w,MenuItemShortcut:v,MenuLabel:ee,MenuItemGroup:oe,MenuRadioGroup:E,MenuButton:h,MenuSub:Q,MenuSubContent:Y,MenuSubTrigger:X},No={title:"Components/Menu",component:p,subcomponents:zt},P={render:n=>c(p,{...n,children:[e(h,{children:"Show Menu"}),c(d,{children:[e(s,{onSelect:C("cut"),children:"Cut"}),e(s,{onSelect:C("copy"),children:"Copy"}),e(s,{onSelect:C("paste"),children:"Paste"})]})]})},A={render:()=>c(p,{children:[e(h,{children:"Show Menu"}),c(d,{children:[e(s,{disabled:!0,children:"Cut"}),e(s,{children:"Copy"})]})]})},W=()=>c(p,{children:[e(h,{children:"Show Menu"}),c(d,{children:[e(s,{children:"Cut"}),e(s,{children:"Copy"}),e(s,{children:"Paste"}),e(w,{}),c(oe,{children:[e(ee,{children:"Edit"}),e(w,{orientation:"vertical"}),e(s,{children:"Cut"}),e(w,{orientation:"vertical"}),e(s,{children:"Copy"}),e(w,{orientation:"vertical"}),e(s,{children:"Paste"})]}),e(w,{}),e(s,{children:"Item"})]})]}),j=()=>c(p,{children:[e(h,{children:"Show Menu"}),c(d,{children:[e(ee,{children:"Actions"}),e(s,{children:"Cut"}),e(s,{children:"Copy"}),e(s,{children:"Paste"})]})]}),q=()=>{const[n,{setTrue:o,setFalse:r}]=wn(!1);return e(yn,{children:c(p,{open:n,onOpenChange:r,children:[e(h,{onClick:o,children:"Show Menu"}),e(d,{children:e(s,{children:"Item"})})]})})},L=()=>{const[n,o]=a.useState(!0);return c(p,{children:[e(h,{children:"Show Menu"}),c(d,{children:[e(R,{checked:n,onCheckedChange:o,children:"Cut"}),e(R,{checked:!1,children:"Paste"})]})]})},H=()=>{const[n,o]=a.useState("blue");return c(p,{children:[e(h,{children:"Show Menu"}),e(d,{children:c(E,{value:n,onValueChange:o,children:[e(g,{value:"red",children:"Red"}),e(g,{value:"green",children:"Green"}),e(g,{value:"blue",children:"Blue"})]})})]})},N=()=>c(p,{children:[e(h,{children:"Show Menu"}),c(d,{children:[c(s,{children:["New Tab ",e(v,{children:"⌘+T"})]}),c(s,{children:["New Window ",e(v,{children:"⌘+N"})]})]})]}),O=()=>c(Mn,{css:{alignItems:"center"},children:[c(p,{children:[e(k,{children:e(Zn,{css:{cursor:"pointer"},children:"Show Menu"})}),c(d,{children:[e(s,{onSelect:C("cut"),children:"Cut"}),e(s,{onSelect:C("copy"),children:"Copy"}),e(s,{onSelect:C("paste"),children:"Paste"})]})]}),c(p,{children:[e(k,{children:e(et,{size:"small",alt:"Show Menu",src:"https://i.pravatar.cc",css:{cursor:"pointer"}})}),c(d,{children:[e(s,{onSelect:C("cut"),children:"Cut"}),e(s,{onSelect:C("copy"),children:"Copy"}),e(s,{onSelect:C("paste"),children:"Paste"})]})]}),c(p,{children:[e(k,{children:e(nt,{colorPalette:"$success",interactive:!0,children:"Show Menu"})}),c(d,{children:[e(s,{onSelect:C("cut"),children:"Cut"}),e(s,{onSelect:C("copy"),children:"Copy"}),e(s,{onSelect:C("paste"),children:"Paste"})]})]})]}),_={render:n=>c(p,{...n,children:[e(h,{children:"Show Menu"}),c(d,{children:[c(s,{children:["New Tab ",e(v,{children:"⌘+T"})]}),c(s,{children:["New Window ",e(v,{children:"⌘+N"})]}),c(Q,{children:[e(X,{children:"Developer"}),c(Y,{children:[e(s,{children:"Test"}),e(s,{children:"Build"}),c(Q,{children:[e(X,{children:"More"}),c(Y,{children:[e(s,{children:"Run"}),e(s,{children:"Start"})]})]})]})]})]})]})},V=()=>{const[n,o]=a.useState(!0),[r,t]=a.useState("blue");return c(Mn,{children:[c(p,{children:[e(h,{size:"large",children:"Menu 1"}),c(d,{children:[e(R,{checked:n,onCheckedChange:o,children:"Cut"}),e(R,{checked:!1,children:"Paste"})]})]}),c(p,{children:[e(h,{children:"Menu 2"}),e(d,{children:c(E,{value:r,onValueChange:t,children:[e(g,{value:"red",children:"Red"}),e(g,{value:"green",children:"Green"}),e(g,{value:"blue",children:"Blue"})]})})]}),c(p,{children:[e(h,{size:"small",children:"Menu 3"}),e(d,{children:c(E,{value:r,onValueChange:t,children:[e(g,{value:"red",children:"Red"}),e(g,{value:"green",children:"Green"}),e(g,{value:"blue",children:"Blue"})]})})]})]})},T={render:()=>{const[n,o]=a.useState("blue"),[r,t]=a.useState(!0);return c(p,{children:[e(h,{children:"Show Menu"}),c(d,{children:[c(s,{children:["Open ",e(v,{children:"⌘+O"})]}),c(s,{destructive:!0,children:["Delete ",e(v,{children:"⌘+D"})]}),e(w,{}),c(E,{value:n,onValueChange:o,children:[e(g,{destructive:!0,value:"red",children:"Red"}),e(g,{value:"green",children:"Green"}),e(g,{value:"blue",children:"Blue"})]}),e(w,{}),e(R,{destructive:!0,checked:r,onCheckedChange:t,children:"Mark"})]})]})}},z={...P,play:async()=>{y.tab(),await x(()=>b(l.getByRole("button")).toHaveFocus()),y.keyboard("{Enter}"),b(await l.findByText("Cut")).toBeInTheDocument()}},U={..._,play:async()=>{b(l.queryByRole("menuitem",{name:/test/i})).not.toBeInTheDocument(),y.tab(),await x(()=>b(l.getByRole("button")).toHaveFocus()),y.keyboard("{Enter}"),await x(()=>{b(l.getByRole("menuitem",{name:/developer/i})).toBeInTheDocument(),b(l.queryByRole("menuitem",{name:/test/i})).not.toBeInTheDocument()}),y.click(l.getByRole("menuitem",{name:/developer/i})),await x(()=>{b(l.getByRole("menuitem",{name:/test/i})).toBeInTheDocument()}),y.click(l.getByRole("menuitem",{name:/more/i})),await x(()=>{b(l.getByRole("menuitem",{name:/start/i})).toBeInTheDocument()}),y.click(l.getByRole("menuitem",{name:/start/i})),await x(()=>{b(l.getByRole("button")).toHaveFocus(),b(l.queryByRole("menuitem",{name:/start/i})).not.toBeInTheDocument(),b(l.queryByRole("menuitem",{name:/test/i})).not.toBeInTheDocument(),b(l.queryByRole("menuitem",{name:/developer/i})).not.toBeInTheDocument()})}},K={...T,play:async()=>{b(l.queryByRole("menuitem",{name:/delete/i})).not.toBeInTheDocument(),y.tab(),await x(()=>b(l.getByRole("button")).toHaveFocus()),y.keyboard("{Enter}"),await x(()=>{b(l.queryByRole("menuitem",{name:/delete/i})).toBeInTheDocument()})}};var ce,ae,ue;P.parameters={...P.parameters,docs:{...(ce=P.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: args => <Menu {...args}>
      <MenuButton>Show Menu</MenuButton>
      <MenuContent>
        <MenuItem onSelect={action('cut')}>Cut</MenuItem>
        <MenuItem onSelect={action('copy')}>Copy</MenuItem>
        <MenuItem onSelect={action('paste')}>Paste</MenuItem>
      </MenuContent>
    </Menu>
}`,...(ue=(ae=P.parameters)==null?void 0:ae.docs)==null?void 0:ue.source}}};var se,ie,de;A.parameters={...A.parameters,docs:{...(se=A.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => <Menu>
      <MenuButton>Show Menu</MenuButton>
      <MenuContent>
        <MenuItem disabled>Cut</MenuItem>
        <MenuItem>Copy</MenuItem>
      </MenuContent>
    </Menu>
}`,...(de=(ie=A.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};var le,pe,me;W.parameters={...W.parameters,docs:{...(le=W.parameters)==null?void 0:le.docs,source:{originalSource:`() => <Menu>
    <MenuButton>Show Menu</MenuButton>
    <MenuContent>
      <MenuItem>Cut</MenuItem>
      <MenuItem>Copy</MenuItem>
      <MenuItem>Paste</MenuItem>
      <MenuSeparator />
      <MenuItemGroup>
        <MenuLabel>Edit</MenuLabel>
        <MenuSeparator orientation="vertical" />
        <MenuItem>Cut</MenuItem>
        <MenuSeparator orientation="vertical" />
        <MenuItem>Copy</MenuItem>
        <MenuSeparator orientation="vertical" />
        <MenuItem>Paste</MenuItem>
      </MenuItemGroup>
      <MenuSeparator />
      <MenuItem>Item</MenuItem>
    </MenuContent>
  </Menu>`,...(me=(pe=W.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var Me,he,fe;j.parameters={...j.parameters,docs:{...(Me=j.parameters)==null?void 0:Me.docs,source:{originalSource:`() => <Menu>
    <MenuButton>Show Menu</MenuButton>
    <MenuContent>
      <MenuLabel>Actions</MenuLabel>
      <MenuItem>Cut</MenuItem>
      <MenuItem>Copy</MenuItem>
      <MenuItem>Paste</MenuItem>
    </MenuContent>
  </Menu>`,...(fe=(he=j.parameters)==null?void 0:he.docs)==null?void 0:fe.source}}};var be,ge,Ie;q.parameters={...q.parameters,docs:{...(be=q.parameters)==null?void 0:be.docs,source:{originalSource:`() => {
  const [open, {
    setTrue,
    setFalse
  }] = useBoolean(false);
  return <>
      <Menu open={open} onOpenChange={setFalse}>
        <MenuButton onClick={setTrue}>Show Menu</MenuButton>
        <MenuContent>
          <MenuItem>Item</MenuItem>
        </MenuContent>
      </Menu>
    </>;
}`,...(Ie=(ge=q.parameters)==null?void 0:ge.docs)==null?void 0:Ie.source}}};var $e,Ce,Se;L.parameters={...L.parameters,docs:{...($e=L.parameters)==null?void 0:$e.docs,source:{originalSource:`() => {
  const [checked, setChecked] = useState(true);
  return <Menu>
      <MenuButton>Show Menu</MenuButton>
      <MenuContent>
        <MenuCheckboxItem checked={checked} onCheckedChange={setChecked}>
          Cut
        </MenuCheckboxItem>
        <MenuCheckboxItem checked={false}>Paste</MenuCheckboxItem>
      </MenuContent>
    </Menu>;
}`,...(Se=(Ce=L.parameters)==null?void 0:Ce.docs)==null?void 0:Se.source}}};var ye,we,xe;H.parameters={...H.parameters,docs:{...(ye=H.parameters)==null?void 0:ye.docs,source:{originalSource:`() => {
  const [color, setColor] = useState('blue');
  return <Menu>
      <MenuButton>Show Menu</MenuButton>
      <MenuContent>
        <MenuRadioGroup value={color} onValueChange={setColor}>
          <MenuRadioItem value="red">Red</MenuRadioItem>
          <MenuRadioItem value="green">Green</MenuRadioItem>
          <MenuRadioItem value="blue">Blue</MenuRadioItem>
        </MenuRadioGroup>
      </MenuContent>
    </Menu>;
}`,...(xe=(we=H.parameters)==null?void 0:we.docs)==null?void 0:xe.source}}};var ve,Re,Be,De,_e;N.parameters={...N.parameters,docs:{...(ve=N.parameters)==null?void 0:ve.docs,source:{originalSource:`() => {
  return <Menu>
      <MenuButton>Show Menu</MenuButton>
      <MenuContent>
        <MenuItem>
          New Tab <MenuItemShortcut>⌘+T</MenuItemShortcut>
        </MenuItem>
        <MenuItem>
          New Window <MenuItemShortcut>⌘+N</MenuItemShortcut>
        </MenuItem>
      </MenuContent>
    </Menu>;
}`,...(Be=(Re=N.parameters)==null?void 0:Re.docs)==null?void 0:Be.source},description:{story:"Add shortcut indicators using the `MenuItemShortcut`",...(_e=(De=N.parameters)==null?void 0:De.docs)==null?void 0:_e.description}}};var Te,ke,Ee,Ne,Oe;O.parameters={...O.parameters,docs:{...(Te=O.parameters)==null?void 0:Te.docs,source:{originalSource:`() => {
  return <Inline css={{
    alignItems: 'center'
  }}>
      <Menu>
        <MenuTrigger>
          <Text css={{
          cursor: 'pointer'
        }}>Show Menu</Text>
        </MenuTrigger>
        <MenuContent>
          <MenuItem onSelect={action('cut')}>Cut</MenuItem>
          <MenuItem onSelect={action('copy')}>Copy</MenuItem>
          <MenuItem onSelect={action('paste')}>Paste</MenuItem>
        </MenuContent>
      </Menu>
      <Menu>
        <MenuTrigger>
          <Avatar size="small" alt="Show Menu" src="https://i.pravatar.cc" css={{
          cursor: 'pointer'
        }} />
        </MenuTrigger>
        <MenuContent>
          <MenuItem onSelect={action('cut')}>Cut</MenuItem>
          <MenuItem onSelect={action('copy')}>Copy</MenuItem>
          <MenuItem onSelect={action('paste')}>Paste</MenuItem>
        </MenuContent>
      </Menu>
      <Menu>
        <MenuTrigger>
          <Chip colorPalette="$success" interactive>
            Show Menu
          </Chip>
        </MenuTrigger>
        <MenuContent>
          <MenuItem onSelect={action('cut')}>Cut</MenuItem>
          <MenuItem onSelect={action('copy')}>Copy</MenuItem>
          <MenuItem onSelect={action('paste')}>Paste</MenuItem>
        </MenuContent>
      </Menu>
    </Inline>;
}`,...(Ee=(ke=O.parameters)==null?void 0:ke.docs)==null?void 0:Ee.source},description:{story:"The menu can be triggers from other components using the `MenuTrigger`",...(Oe=(Ne=O.parameters)==null?void 0:Ne.docs)==null?void 0:Oe.description}}};var Pe,Ge,Fe,Ae,We;_.parameters={..._.parameters,docs:{...(Pe=_.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  render: args => <Menu {...args}>
      <MenuButton>Show Menu</MenuButton>
      <MenuContent>
        <MenuItem>
          New Tab <MenuItemShortcut>⌘+T</MenuItemShortcut>
        </MenuItem>
        <MenuItem>
          New Window <MenuItemShortcut>⌘+N</MenuItemShortcut>
        </MenuItem>
        <MenuSub>
          <MenuSubTrigger>Developer</MenuSubTrigger>
          <MenuSubContent>
            <MenuItem>Test</MenuItem>
            <MenuItem>Build</MenuItem>
            <MenuSub>
              <MenuSubTrigger>More</MenuSubTrigger>
              <MenuSubContent>
                <MenuItem>Run</MenuItem>
                <MenuItem>Start</MenuItem>
              </MenuSubContent>
            </MenuSub>
          </MenuSubContent>
        </MenuSub>
      </MenuContent>
    </Menu>
}`,...(Fe=(Ge=_.parameters)==null?void 0:Ge.docs)==null?void 0:Fe.source},description:{story:"Create nested menus using a nested `Menu` component with a `MenuTriggerItem` and it's own `MenuContent`",...(We=(Ae=_.parameters)==null?void 0:Ae.docs)==null?void 0:We.description}}};var je,qe,Le;V.parameters={...V.parameters,docs:{...(je=V.parameters)==null?void 0:je.docs,source:{originalSource:`() => {
  const [checked, setChecked] = useState(true);
  const [color, setColor] = useState('blue');
  return <Inline>
      <Menu>
        <MenuButton size="large">Menu 1</MenuButton>
        <MenuContent>
          <MenuCheckboxItem checked={checked} onCheckedChange={setChecked}>
            Cut
          </MenuCheckboxItem>
          <MenuCheckboxItem checked={false}>Paste</MenuCheckboxItem>
        </MenuContent>
      </Menu>
      <Menu>
        <MenuButton>Menu 2</MenuButton>
        <MenuContent>
          <MenuRadioGroup value={color} onValueChange={setColor}>
            <MenuRadioItem value="red">Red</MenuRadioItem>
            <MenuRadioItem value="green">Green</MenuRadioItem>
            <MenuRadioItem value="blue">Blue</MenuRadioItem>
          </MenuRadioGroup>
        </MenuContent>
      </Menu>
      <Menu>
        <MenuButton size="small">Menu 3</MenuButton>
        <MenuContent>
          <MenuRadioGroup value={color} onValueChange={setColor}>
            <MenuRadioItem value="red">Red</MenuRadioItem>
            <MenuRadioItem value="green">Green</MenuRadioItem>
            <MenuRadioItem value="blue">Blue</MenuRadioItem>
          </MenuRadioGroup>
        </MenuContent>
      </Menu>
    </Inline>;
}`,...(Le=(qe=V.parameters)==null?void 0:qe.docs)==null?void 0:Le.source}}};var He,Ve,ze,Ue,Ke;T.parameters={...T.parameters,docs:{...(He=T.parameters)==null?void 0:He.docs,source:{originalSource:`{
  render: () => {
    const [color, setColor] = useState('blue');
    const [checked, setChecked] = useState(true);
    return <Menu>
        <MenuButton>Show Menu</MenuButton>
        <MenuContent>
          <MenuItem>
            Open <MenuItemShortcut>⌘+O</MenuItemShortcut>
          </MenuItem>
          <MenuItem destructive>
            Delete <MenuItemShortcut>⌘+D</MenuItemShortcut>
          </MenuItem>
          <MenuSeparator />
          <MenuRadioGroup value={color} onValueChange={setColor}>
            <MenuRadioItem destructive value="red">
              Red
            </MenuRadioItem>
            <MenuRadioItem value="green">Green</MenuRadioItem>
            <MenuRadioItem value="blue">Blue</MenuRadioItem>
          </MenuRadioGroup>
          <MenuSeparator />
          <MenuCheckboxItem destructive checked={checked} onCheckedChange={setChecked}>
            Mark
          </MenuCheckboxItem>
        </MenuContent>
      </Menu>;
  }
}`,...(ze=(Ve=T.parameters)==null?void 0:Ve.docs)==null?void 0:ze.source},description:{story:"use the `destructive` flag to show the item triggers a destructive action",...(Ke=(Ue=T.parameters)==null?void 0:Ue.docs)==null?void 0:Ke.description}}};var Je,Qe,Xe;z.parameters={...z.parameters,docs:{...(Je=z.parameters)==null?void 0:Je.docs,source:{originalSource:`{
  ...Default,
  play: async () => {
    userEvent.tab();
    await waitFor(() => expect(screen.getByRole('button')).toHaveFocus());
    userEvent.keyboard('{Enter}');
    expect(await screen.findByText('Cut')).toBeInTheDocument();
  }
}`,...(Xe=(Qe=z.parameters)==null?void 0:Qe.docs)==null?void 0:Xe.source}}};var Ye,Ze,en;U.parameters={...U.parameters,docs:{...(Ye=U.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
  ...Nested,
  play: async () => {
    expect(screen.queryByRole('menuitem', {
      name: /test/i
    })).not.toBeInTheDocument();
    userEvent.tab();
    await waitFor(() => expect(screen.getByRole('button')).toHaveFocus());
    userEvent.keyboard('{Enter}');
    await waitFor(() => {
      expect(screen.getByRole('menuitem', {
        name: /developer/i
      })).toBeInTheDocument();
      expect(screen.queryByRole('menuitem', {
        name: /test/i
      })).not.toBeInTheDocument();
    });
    userEvent.click(screen.getByRole('menuitem', {
      name: /developer/i
    }));
    await waitFor(() => {
      expect(screen.getByRole('menuitem', {
        name: /test/i
      })).toBeInTheDocument();
    });
    userEvent.click(screen.getByRole('menuitem', {
      name: /more/i
    }));
    await waitFor(() => {
      expect(screen.getByRole('menuitem', {
        name: /start/i
      })).toBeInTheDocument();
    });
    userEvent.click(screen.getByRole('menuitem', {
      name: /start/i
    }));
    await waitFor(() => {
      expect(screen.getByRole('button')).toHaveFocus();
      expect(screen.queryByRole('menuitem', {
        name: /start/i
      })).not.toBeInTheDocument();
      expect(screen.queryByRole('menuitem', {
        name: /test/i
      })).not.toBeInTheDocument();
      expect(screen.queryByRole('menuitem', {
        name: /developer/i
      })).not.toBeInTheDocument();
    });
  }
}`,...(en=(Ze=U.parameters)==null?void 0:Ze.docs)==null?void 0:en.source}}};var nn,tn,on;K.parameters={...K.parameters,docs:{...(nn=K.parameters)==null?void 0:nn.docs,source:{originalSource:`{
  ...Destructive,
  play: async () => {
    expect(screen.queryByRole('menuitem', {
      name: /delete/i
    })).not.toBeInTheDocument();
    userEvent.tab();
    await waitFor(() => expect(screen.getByRole('button')).toHaveFocus());
    userEvent.keyboard('{Enter}');
    await waitFor(() => {
      expect(screen.queryByRole('menuitem', {
        name: /delete/i
      })).toBeInTheDocument();
    });
  }
}`,...(on=(tn=K.parameters)==null?void 0:tn.docs)==null?void 0:on.source}}};const Oo=["Default","WithDisabledItems","WithSeparators","WithLabel","Controlled","WithCheckbox","WithRadioItems","Shortcuts","WithTrigger","Nested","MultipleMenus","Destructive","TestMenu","TestNestedMenu","TestDestructiveMenu"];export{q as Controlled,P as Default,T as Destructive,V as MultipleMenus,_ as Nested,N as Shortcuts,K as TestDestructiveMenu,z as TestMenu,U as TestNestedMenu,L as WithCheckbox,A as WithDisabledItems,j as WithLabel,H as WithRadioItems,W as WithSeparators,O as WithTrigger,Oo as __namedExportsOrder,No as default};
//# sourceMappingURL=Menu.stories-752c53ee.js.map

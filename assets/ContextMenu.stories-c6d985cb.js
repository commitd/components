import{a as e,j as s}from"./jsx-runtime-03b4ddbf.js";import{i as et}from"./hooks.esm-cc7a556e.js";import{a as i}from"./chunk-AY7I2SME-c7b6cf8a.js";import{w as tt,f as nt,a as J,e as _,s as k,u as te}from"./index-4345948b.js";import{r as c,R as ot}from"./index-76fb7be0.js";import{a as m,c as bt,s as v,d as gt}from"./component-92c13614.js";import{_ as d}from"./extends-98964cd2.js";import{a as E,$ as ft}from"./index-45a327ec.js";import{a as $t,b as It}from"./index-421204d3.js";import{$ as St}from"./index-77dbc890.js";import{$ as rt,e as yt,a as wt,b as Tt,f as vt,g as Rt,h as _t,c as kt,i as Pt,j as Nt,k as Et,l as Ot,m as Dt,n as Bt,d as At,o as Gt,q as ct,r as at,p as Q,t as Lt,s as Wt,u as jt,v as st,w as Ft,x as ut,y as Ut}from"./index-2975ab53.js";import{p as it}from"./Paper-e773ea24.js";import{f as Vt,a as Xt}from"./Icons-43292f8c.js";import{C as dt}from"./ConditionalWrapper-8865b2c1.js";import{F as qt}from"./Flex-1cfc0a73.js";import"./_commonjsHelpers-de833af9.js";import"./_baseIsEqual-f876697f.js";import"./index-03bbf7d1.js";import"./uniq-da390a93.js";import"./index-d38bc732.js";import"./index-356e4a49.js";import"./index-add592e3.js";import"./index-7896d420.js";import"./index-c6b1b4f9.js";import"./index-296a96c6.js";import"./index-56d74ee5.js";import"./index-f8c8b8ff.js";import"./index-01bbf444.js";import"./index-1a2315aa.js";import"./index-251d008c.js";import"./index-c6da0816.js";import"./index-d178eb19.js";import"./mdi-685d5538.js";import"./Svg-cfd7f95e.js";import"./Box-f074bc4b.js";const lt="ContextMenu",[zt,ho]=$t(lt,[rt]),l=rt(),[Ht,pt]=zt(lt),Yt=t=>{const{__scopeContextMenu:o,children:r,onOpenChange:n,dir:a,modal:x=!0}=t,[p,C]=c.useState(!1),M=l(o),P=It(n),g=c.useCallback(N=>{C(N),P(N)},[P]);return c.createElement(Ht,{scope:o,open:p,onOpenChange:g,modal:x},c.createElement(yt,d({},M,{dir:a,open:p,onOpenChange:g,modal:x}),r))},Jt="ContextMenuTrigger",Kt=c.forwardRef((t,o)=>{const{__scopeContextMenu:r,disabled:n=!1,...a}=t,x=pt(Jt,r),p=l(r),C=c.useRef({x:0,y:0}),M=c.useRef({getBoundingClientRect:()=>DOMRect.fromRect({width:0,height:0,...C.current})}),P=c.useRef(0),g=c.useCallback(()=>window.clearTimeout(P.current),[]),N=w=>{C.current={x:w.clientX,y:w.clientY},x.onOpenChange(!0)};return c.useEffect(()=>g,[g]),c.useEffect(()=>void(n&&g()),[n,g]),c.createElement(c.Fragment,null,c.createElement(wt,d({},p,{virtualRef:M})),c.createElement(St.span,d({"data-state":x.open?"open":"closed","data-disabled":n?"":void 0},a,{ref:o,style:{WebkitTouchCallout:"none",...t.style},onContextMenu:n?t.onContextMenu:E(t.onContextMenu,w=>{g(),N(w),w.preventDefault()}),onPointerDown:n?t.onPointerDown:E(t.onPointerDown,q(w=>{g(),P.current=window.setTimeout(()=>N(w),700)})),onPointerMove:n?t.onPointerMove:E(t.onPointerMove,q(g)),onPointerCancel:n?t.onPointerCancel:E(t.onPointerCancel,q(g)),onPointerUp:n?t.onPointerUp:E(t.onPointerUp,q(g))})))}),Qt=t=>{const{__scopeContextMenu:o,...r}=t,n=l(o);return c.createElement(Tt,d({},n,r))},Zt="ContextMenuContent",en=c.forwardRef((t,o)=>{const{__scopeContextMenu:r,...n}=t,a=pt(Zt,r),x=l(r),p=c.useRef(!1);return c.createElement(vt,d({},x,n,{ref:o,side:"right",sideOffset:2,align:"start",onCloseAutoFocus:C=>{var M;(M=t.onCloseAutoFocus)===null||M===void 0||M.call(t,C),!C.defaultPrevented&&p.current&&C.preventDefault(),p.current=!1},onInteractOutside:C=>{var M;(M=t.onInteractOutside)===null||M===void 0||M.call(t,C),!C.defaultPrevented&&!a.modal&&(p.current=!0)},style:{...t.style,"--radix-context-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-context-menu-content-available-width":"var(--radix-popper-available-width)","--radix-context-menu-content-available-height":"var(--radix-popper-available-height)","--radix-context-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-context-menu-trigger-height":"var(--radix-popper-anchor-height)"}}))}),tn=c.forwardRef((t,o)=>{const{__scopeContextMenu:r,...n}=t,a=l(r);return c.createElement(Rt,d({},a,n,{ref:o}))}),nn=c.forwardRef((t,o)=>{const{__scopeContextMenu:r,...n}=t,a=l(r);return c.createElement(_t,d({},a,n,{ref:o}))}),on=c.forwardRef((t,o)=>{const{__scopeContextMenu:r,...n}=t,a=l(r);return c.createElement(kt,d({},a,n,{ref:o}))}),rn=c.forwardRef((t,o)=>{const{__scopeContextMenu:r,...n}=t,a=l(r);return c.createElement(Pt,d({},a,n,{ref:o}))}),cn=c.forwardRef((t,o)=>{const{__scopeContextMenu:r,...n}=t,a=l(r);return c.createElement(Nt,d({},a,n,{ref:o}))}),an=c.forwardRef((t,o)=>{const{__scopeContextMenu:r,...n}=t,a=l(r);return c.createElement(Et,d({},a,n,{ref:o}))}),sn=c.forwardRef((t,o)=>{const{__scopeContextMenu:r,...n}=t,a=l(r);return c.createElement(Ot,d({},a,n,{ref:o}))}),un=c.forwardRef((t,o)=>{const{__scopeContextMenu:r,...n}=t,a=l(r);return c.createElement(Dt,d({},a,n,{ref:o}))}),dn=t=>{const{__scopeContextMenu:o,children:r,onOpenChange:n,open:a,defaultOpen:x}=t,p=l(o),[C,M]=ft({prop:a,defaultProp:x,onChange:n});return c.createElement(Bt,d({},p,{open:C,onOpenChange:M}),r)},ln=c.forwardRef((t,o)=>{const{__scopeContextMenu:r,...n}=t,a=l(r);return c.createElement(At,d({},a,n,{ref:o}))}),pn=c.forwardRef((t,o)=>{const{__scopeContextMenu:r,...n}=t,a=l(r);return c.createElement(Gt,d({},a,n,{ref:o,style:{...t.style,"--radix-context-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-context-menu-content-available-width":"var(--radix-popper-available-width)","--radix-context-menu-content-available-height":"var(--radix-popper-available-height)","--radix-context-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-context-menu-trigger-height":"var(--radix-popper-anchor-height)"}}))});function q(t){return o=>o.pointerType!=="mouse"?t(o):void 0}const mn=Yt,xn=Kt,mt=Qt,Cn=en,Mn=tn,hn=nn,bn=on,gn=rn,fn=cn,$n=an,In=sn,Sn=un,yn=dn,wn=ln,Tn=pn;var V=globalThis&&globalThis.__rest||function(t,o){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&o.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(t);a<n.length;a++)o.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(t,n[a])&&(r[n[a]]=t[n[a]]);return r};const vn=m(Vt,ct),xt=m(Xt,ct),Ct="c-context",Mt=`${Ct}-item`,Rn=bt({display:"flex",marginLeft:"$3",marginRight:"$1",[`& .${Mt}`]:{paddingLeft:"$2"}}),h=m(mn,Ct),f=xn,u=m(v(bn,Q),Mt,at),y=m("span","c-context-menu-item-shortcut",Lt),$=v(m(Sn,"c-context-menu-separator"),Wt),T=m(hn,"c-context-menu-label",jt),ee=m(Mn,"c-context-menu-item-group",Rn),Z=fn;h.displayName="ContextMenu";f.displayName="ContextMenuTrigger";u.displayName="ContextMenuItem";y.displayName="ContextMenuItemShortcut";$.displayName="ContextMenuSeparator";T.displayName="ContextMenuLabel";ee.displayName="ContextMenuItemGroup";Z.displayName="ContextMenuRadioGroup";const _n=v(m(Cn,"c-context-menu-content",it,st)),b=c.forwardRef((t,o)=>{var{container:r,surface:n="solid",portalled:a=!0,children:x}=t,p=V(t,["container","surface","portalled","children"]);return e(dt,{condition:a,props:{container:r},wrapper:mt,children:e(_n,Object.assign({surface:n},p,{ref:o,children:x}))})});b.displayName="ContextMenuContent";const ht=m(In,"c-context-menu-item-indicator",Ft),kn=m(v(gn,Q),"c-context-menu-checkbox-item",ut),Pn=m(v($n,Q),ut),K=yn;K.displayName="ContextMenuSub";const Nn=v(m(Tn,"c-context-menu-sub-content",it,st)),F=c.forwardRef((t,o)=>{var{container:r,portalled:n=!0,surface:a="solid",children:x}=t,p=V(t,["container","portalled","surface","children"]);return e(dt,{condition:n,props:{container:r},wrapper:mt,children:e(Nn,Object.assign({surface:a},p,{ref:o,children:x}))})});F.displayName="ContextMenuSubContent";const En=m(v(wn,Q),"c-context-menu-sub-trigger",at,Ut),U=c.forwardRef((t,o)=>{var{children:r}=t,n=V(t,["children"]);return s(En,Object.assign({},n,{ref:o,children:[r,e(vn,{})]}))});U.displayName="ContextMenuSubTrigger";const X=c.forwardRef((t,o)=>{var{children:r}=t,n=V(t,["children"]);return s(kn,Object.assign({},n,{ref:o,children:[e(ht,{children:e(xt,{})}),r]}))});X.displayName="ContextMenuCheckboxItem";const S=c.forwardRef((t,o)=>{var{children:r,className:n}=t,a=V(t,["children","className"]);return s(Pn,Object.assign({className:gt("c-context-menu-radio-item",n)},a,{ref:o,children:[e(ht,{children:e(xt,{})}),r]}))});S.displayName="ContextMenuRadioItem";b.__docgenInfo={description:"",methods:[],displayName:"ContextMenuContent"};F.__docgenInfo={description:"",methods:[],displayName:"ContextMenuSubContent"};U.__docgenInfo={description:"",methods:[],displayName:"ContextMenuSubTrigger"};X.__docgenInfo={description:"",methods:[],displayName:"ContextMenuCheckboxItem"};S.__docgenInfo={description:"",methods:[],displayName:"ContextMenuRadioItem"};const On={ContextMenu:h,ContextMenuTrigger:f,ContextMenuContent:b,ContextMenuItem:u,ContextMenuItemGroup:ee,ContextMenuItemShortcut:y,ContextMenuSeparator:$,ContextMenuLabel:T,ContextMenuCheckboxItem:X,ContextMenuRadioItem:S,ContextMenuRadioGroup:Z,ContextMenuSub:K,ContextMenuSubTrigger:U,ContextMenuSubContent:F},bo={title:"Components/ContextMenu",component:h,subcomponents:On},I=()=>e(qt,{css:{backgroundColor:"$neutral4",color:"$text",padding:"$2",minHeight:150,alignItems:"center",justifyContent:"center"},children:"Right click anywhere"}),j=t=>s(h,{...t,children:[e(f,{children:e(I,{})}),s(b,{children:[e(u,{onSelect:i("cut"),children:"Cut"}),e(u,{onSelect:i("copy"),children:"Copy"}),e(u,{onSelect:i("paste"),children:"Paste"})]})]}),O=()=>s(h,{children:[e(f,{children:e(I,{})}),s(b,{children:[e(u,{disabled:!0,onSelect:i("cut"),children:"Cut"}),e(u,{onSelect:i("copy"),children:"Copy"}),e(u,{onSelect:i("paste"),children:"Paste"})]})]}),D=()=>s(h,{children:[e(f,{children:e(I,{})}),s(b,{children:[e(u,{onSelect:i("cut"),children:"Cut"}),e(u,{onSelect:i("copy"),children:"Copy"}),e(u,{onSelect:i("paste"),children:"Paste"}),e($,{}),s(ee,{children:[e(T,{children:"Edit"}),e($,{orientation:"vertical"}),e(u,{children:"Cut"}),e($,{orientation:"vertical"}),e(u,{children:"Copy"}),e($,{orientation:"vertical"}),e(u,{children:"Paste"})]}),e($,{}),e(u,{children:"Item"})]})]}),B=()=>s(h,{children:[e(f,{children:e(I,{})}),s(b,{children:[e(T,{children:"Actions"}),e(u,{onSelect:i("cut"),children:"Cut"}),e(u,{onSelect:i("copy"),children:"Copy"}),e(u,{onSelect:i("paste"),children:"Paste"})]})]}),A=()=>s(h,{children:[e(f,{children:e(I,{})}),s(b,{children:[s(u,{children:["New Tab ",e(y,{children:"⌘+T"})]}),s(u,{children:["New Window ",e(y,{children:"⌘+N"})]})]})]}),G=()=>{const[t,{toggle:o}]=et(!0);return s(h,{children:[e(f,{children:e(I,{})}),s(b,{children:[e(T,{children:"Actions"}),e(u,{onSelect:i("cut"),children:"Cut"}),e(u,{onSelect:i("copy"),children:"Copy"}),e($,{}),e(X,{checked:t,onSelect:o,children:"Paste"})]})]})},L=()=>{const[t,o]=ot.useState("blue");return s(h,{children:[e(f,{children:e(I,{})}),e(b,{children:s(Z,{value:t,onValueChange:o,children:[e(S,{value:"red",children:"Red"}),e(S,{value:"blue",children:"Blue"}),e(S,{value:"green",children:"Green"})]})})]})},R=()=>s(h,{children:[e(f,{children:e(I,{})}),s(b,{children:[s(u,{children:["New Tab ",e(y,{children:"⌘+T"})]}),s(u,{children:["New Window ",e(y,{children:"⌘+N"})]}),s(K,{children:[e(U,{children:"Developer"}),s(F,{children:[e(u,{children:"Test"}),e(u,{children:"Build"}),s(K,{children:[e(U,{children:"More"}),s(F,{children:[e(u,{children:"Run"}),e(u,{children:"Start"})]})]})]})]})]})]}),W=()=>{const[t,{toggle:o}]=et(!0),[r,n]=ot.useState("blue");return s(h,{children:[e(f,{children:e(I,{})}),s(b,{children:[s(u,{children:["Open ",e(y,{children:"⌘+O"})]}),s(u,{destructive:!0,children:["Delete ",e(y,{children:"⌘+T"})]}),e($,{}),e(T,{children:"Actions"}),e(u,{destructive:!0,onSelect:i("cut"),children:"Cut"}),e(u,{onSelect:i("copy"),children:"Copy"}),e(X,{checked:t,onSelect:o,children:"Paste"}),e($,{}),e(T,{children:"Colours"}),s(Z,{value:r,onValueChange:n,children:[e(S,{destructive:!0,value:"red",children:"Red"}),e(S,{value:"blue",children:"Blue"}),e(S,{value:"green",children:"Green"})]})]})]})},z=t=>s(h,{...t,children:[e(f,{children:e(I,{})}),s(b,{surface:"glass",children:[e(u,{onSelect:i("cut"),children:"Cut"}),e(u,{onSelect:i("copy"),children:"Copy"}),e(u,{onSelect:i("paste"),children:"Paste"})]})]}),H={render:j,play:async({canvasElement:t})=>{const o=tt(t);nt.contextMenu(o.getByText("Right click anywhere")),await J(()=>{_(k.getByText("Cut")).toBeInTheDocument(),_(k.getByRole("menuitem",{name:/copy/i})).toBeInTheDocument()})}},Y={render:R,args:{portalled:!1},play:async({canvasElement:t})=>{const o=tt(t);nt.contextMenu(o.getByText("Right click anywhere")),await J(()=>{_(k.getByRole("menuitem",{name:/developer/i})).toBeInTheDocument(),_(k.queryByRole("menuitem",{name:/test/i})).not.toBeInTheDocument()}),te.keyboard("[ArrowDown][ArrowDown][ArrowDown][ArrowRight]"),await J(()=>{_(k.getByRole("menuitem",{name:/test/i})).toBeInTheDocument()}),te.keyboard("[ArrowDown][ArrowDown][Enter]"),await J(()=>{_(k.getByRole("menuitem",{name:/start/i})).toBeInTheDocument()})}};var ne,oe,re;j.parameters={...j.parameters,docs:{...(ne=j.parameters)==null?void 0:ne.docs,source:{originalSource:`args => <ContextMenu {...args}>
    <ContextMenuTrigger>
      <ClickTarget />
    </ContextMenuTrigger>
    <ContextMenuContent>
      <ContextMenuItem onSelect={action('cut')}>Cut</ContextMenuItem>
      <ContextMenuItem onSelect={action('copy')}>Copy</ContextMenuItem>
      <ContextMenuItem onSelect={action('paste')}>Paste</ContextMenuItem>
    </ContextMenuContent>
  </ContextMenu>`,...(re=(oe=j.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};var ce,ae,se,ue,ie;O.parameters={...O.parameters,docs:{...(ce=O.parameters)==null?void 0:ce.docs,source:{originalSource:`() => <ContextMenu>
    <ContextMenuTrigger>
      <ClickTarget />
    </ContextMenuTrigger>
    <ContextMenuContent>
      <ContextMenuItem disabled onSelect={action('cut')}>
        Cut
      </ContextMenuItem>
      <ContextMenuItem onSelect={action('copy')}>Copy</ContextMenuItem>
      <ContextMenuItem onSelect={action('paste')}>Paste</ContextMenuItem>
    </ContextMenuContent>
  </ContextMenu>`,...(se=(ae=O.parameters)==null?void 0:ae.docs)==null?void 0:se.source},description:{story:"The disabled prop greys out the item and makes it unselectable",...(ie=(ue=O.parameters)==null?void 0:ue.docs)==null?void 0:ie.description}}};var de,le,pe,me,xe;D.parameters={...D.parameters,docs:{...(de=D.parameters)==null?void 0:de.docs,source:{originalSource:`() => <ContextMenu>
    <ContextMenuTrigger>
      <ClickTarget />
    </ContextMenuTrigger>
    <ContextMenuContent>
      <ContextMenuItem onSelect={action('cut')}>Cut</ContextMenuItem>
      <ContextMenuItem onSelect={action('copy')}>Copy</ContextMenuItem>
      <ContextMenuItem onSelect={action('paste')}>Paste</ContextMenuItem>
      <ContextMenuSeparator />
      <ContextMenuItemGroup>
        <ContextMenuLabel>Edit</ContextMenuLabel>
        <ContextMenuSeparator orientation="vertical" />
        <ContextMenuItem>Cut</ContextMenuItem>
        <ContextMenuSeparator orientation="vertical" />
        <ContextMenuItem>Copy</ContextMenuItem>
        <ContextMenuSeparator orientation="vertical" />
        <ContextMenuItem>Paste</ContextMenuItem>
      </ContextMenuItemGroup>
      <ContextMenuSeparator />
      <ContextMenuItem>Item</ContextMenuItem>
    </ContextMenuContent>
  </ContextMenu>`,...(pe=(le=D.parameters)==null?void 0:le.docs)==null?void 0:pe.source},description:{story:"ContextMenuSeparator adds a separator between other items and can be used with Groups to create horizontal sections",...(xe=(me=D.parameters)==null?void 0:me.docs)==null?void 0:xe.description}}};var Ce,Me,he,be,ge;B.parameters={...B.parameters,docs:{...(Ce=B.parameters)==null?void 0:Ce.docs,source:{originalSource:`() => <ContextMenu>
    <ContextMenuTrigger>
      <ClickTarget />
    </ContextMenuTrigger>
    <ContextMenuContent>
      <ContextMenuLabel>Actions</ContextMenuLabel>
      <ContextMenuItem onSelect={action('cut')}>Cut</ContextMenuItem>
      <ContextMenuItem onSelect={action('copy')}>Copy</ContextMenuItem>
      <ContextMenuItem onSelect={action('paste')}>Paste</ContextMenuItem>
    </ContextMenuContent>
  </ContextMenu>`,...(he=(Me=B.parameters)==null?void 0:Me.docs)==null?void 0:he.source},description:{story:"Add a label with ContextMenuLabel",...(ge=(be=B.parameters)==null?void 0:be.docs)==null?void 0:ge.description}}};var fe,$e,Ie,Se,ye;A.parameters={...A.parameters,docs:{...(fe=A.parameters)==null?void 0:fe.docs,source:{originalSource:`() => {
  return <ContextMenu>
      <ContextMenuTrigger>
        <ClickTarget />
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>
          New Tab <ContextMenuItemShortcut>⌘+T</ContextMenuItemShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          New Window <ContextMenuItemShortcut>⌘+N</ContextMenuItemShortcut>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>;
}`,...(Ie=($e=A.parameters)==null?void 0:$e.docs)==null?void 0:Ie.source},description:{story:"Add shortcut indicators using the `ContextMenuItemShortcut`",...(ye=(Se=A.parameters)==null?void 0:Se.docs)==null?void 0:ye.description}}};var we,Te,ve,Re,_e;G.parameters={...G.parameters,docs:{...(we=G.parameters)==null?void 0:we.docs,source:{originalSource:`() => {
  const [checked, {
    toggle
  }] = useBoolean(true);
  return <ContextMenu>
      <ContextMenuTrigger>
        <ClickTarget />
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuLabel>Actions</ContextMenuLabel>
        <ContextMenuItem onSelect={action('cut')}>Cut</ContextMenuItem>
        <ContextMenuItem onSelect={action('copy')}>Copy</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuCheckboxItem checked={checked} onSelect={toggle}>
          Paste
        </ContextMenuCheckboxItem>
      </ContextMenuContent>
    </ContextMenu>;
}`,...(ve=(Te=G.parameters)==null?void 0:Te.docs)==null?void 0:ve.source},description:{story:"ContextMenuCheckboxItem adds an item that can be checked",...(_e=(Re=G.parameters)==null?void 0:Re.docs)==null?void 0:_e.description}}};var ke,Pe,Ne,Ee,Oe;L.parameters={...L.parameters,docs:{...(ke=L.parameters)==null?void 0:ke.docs,source:{originalSource:`() => {
  const [color, setColor] = React.useState('blue');
  return <ContextMenu>
      <ContextMenuTrigger>
        <ClickTarget />
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuRadioGroup value={color} onValueChange={setColor}>
          <ContextMenuRadioItem value="red">Red</ContextMenuRadioItem>
          <ContextMenuRadioItem value="blue">Blue</ContextMenuRadioItem>
          <ContextMenuRadioItem value="green">Green</ContextMenuRadioItem>
        </ContextMenuRadioGroup>
      </ContextMenuContent>
    </ContextMenu>;
}`,...(Ne=(Pe=L.parameters)==null?void 0:Pe.docs)==null?void 0:Ne.source},description:{story:"ContextMenuRadioItem when wrapped in a ContextMenuRadioGroup adds an item that can be checked with only one item in the group checked at once",...(Oe=(Ee=L.parameters)==null?void 0:Ee.docs)==null?void 0:Oe.description}}};var De,Be,Ae,Ge,Le;R.parameters={...R.parameters,docs:{...(De=R.parameters)==null?void 0:De.docs,source:{originalSource:`() => {
  return <ContextMenu>
      <ContextMenuTrigger>
        <ClickTarget />
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>
          New Tab <ContextMenuItemShortcut>⌘+T</ContextMenuItemShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          New Window <ContextMenuItemShortcut>⌘+N</ContextMenuItemShortcut>
        </ContextMenuItem>
        <ContextMenuSub>
          <ContextMenuSubTrigger>Developer</ContextMenuSubTrigger>
          <ContextMenuSubContent>
            <ContextMenuItem>Test</ContextMenuItem>
            <ContextMenuItem>Build</ContextMenuItem>
            <ContextMenuSub>
              <ContextMenuSubTrigger>More</ContextMenuSubTrigger>
              <ContextMenuSubContent>
                <ContextMenuItem>Run</ContextMenuItem>
                <ContextMenuItem>Start</ContextMenuItem>
              </ContextMenuSubContent>
            </ContextMenuSub>
          </ContextMenuSubContent>
        </ContextMenuSub>
      </ContextMenuContent>
    </ContextMenu>;
}`,...(Ae=(Be=R.parameters)==null?void 0:Be.docs)==null?void 0:Ae.source},description:{story:"Create nested menus using a nested `Menu` component with a `MenuTriggerItem` and it's own `MenuContent`",...(Le=(Ge=R.parameters)==null?void 0:Ge.docs)==null?void 0:Le.description}}};var We,je,Fe,Ue,Ve;W.parameters={...W.parameters,docs:{...(We=W.parameters)==null?void 0:We.docs,source:{originalSource:`() => {
  const [checked, {
    toggle
  }] = useBoolean(true);
  const [color, setColor] = React.useState('blue');
  return <ContextMenu>
      <ContextMenuTrigger>
        <ClickTarget />
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>
          Open <ContextMenuItemShortcut>⌘+O</ContextMenuItemShortcut>
        </ContextMenuItem>
        <ContextMenuItem destructive>
          Delete <ContextMenuItemShortcut>⌘+T</ContextMenuItemShortcut>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuLabel>Actions</ContextMenuLabel>
        <ContextMenuItem destructive onSelect={action('cut')}>
          Cut
        </ContextMenuItem>
        <ContextMenuItem onSelect={action('copy')}>Copy</ContextMenuItem>
        <ContextMenuCheckboxItem checked={checked} onSelect={toggle}>
          Paste
        </ContextMenuCheckboxItem>
        <ContextMenuSeparator />
        <ContextMenuLabel>Colours</ContextMenuLabel>
        <ContextMenuRadioGroup value={color} onValueChange={setColor}>
          <ContextMenuRadioItem destructive value="red">
            Red
          </ContextMenuRadioItem>
          <ContextMenuRadioItem value="blue">Blue</ContextMenuRadioItem>
          <ContextMenuRadioItem value="green">Green</ContextMenuRadioItem>
        </ContextMenuRadioGroup>
      </ContextMenuContent>
    </ContextMenu>;
}`,...(Fe=(je=W.parameters)==null?void 0:je.docs)==null?void 0:Fe.source},description:{story:"use the `destructive flag to indicate the action triggered it destructive",...(Ve=(Ue=W.parameters)==null?void 0:Ue.docs)==null?void 0:Ve.description}}};var Xe,qe,ze;z.parameters={...z.parameters,docs:{...(Xe=z.parameters)==null?void 0:Xe.docs,source:{originalSource:`args => <ContextMenu {...args}>
    <ContextMenuTrigger>
      <ClickTarget />
    </ContextMenuTrigger>
    <ContextMenuContent surface="glass">
      <ContextMenuItem onSelect={action('cut')}>Cut</ContextMenuItem>
      <ContextMenuItem onSelect={action('copy')}>Copy</ContextMenuItem>
      <ContextMenuItem onSelect={action('paste')}>Paste</ContextMenuItem>
    </ContextMenuContent>
  </ContextMenu>`,...(ze=(qe=z.parameters)==null?void 0:qe.docs)==null?void 0:ze.source}}};var He,Ye,Je;H.parameters={...H.parameters,docs:{...(He=H.parameters)==null?void 0:He.docs,source:{originalSource:`{
  render: Default,
  play: async ({
    canvasElement
  }) => {
    const element = within(canvasElement);
    fireEvent.contextMenu(element.getByText('Right click anywhere'));
    // Menu outside canvas element so using full screen
    await waitFor(() => {
      expect(screen.getByText('Cut')).toBeInTheDocument();
      expect(screen.getByRole('menuitem', {
        name: /copy/i
      })).toBeInTheDocument();
    });
  }
}`,...(Je=(Ye=H.parameters)==null?void 0:Ye.docs)==null?void 0:Je.source}}};var Ke,Qe,Ze;Y.parameters={...Y.parameters,docs:{...(Ke=Y.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  render: Nested,
  args: {
    portalled: false
  },
  play: async ({
    canvasElement
  }) => {
    const element = within(canvasElement);
    fireEvent.contextMenu(element.getByText('Right click anywhere'));

    // Menu outside canvas element so using full screen
    await waitFor(() => {
      expect(screen.getByRole('menuitem', {
        name: /developer/i
      })).toBeInTheDocument();
      expect(screen.queryByRole('menuitem', {
        name: /test/i
      })).not.toBeInTheDocument();
    });
    userEvent.keyboard('[ArrowDown][ArrowDown][ArrowDown][ArrowRight]');
    await waitFor(() => {
      expect(screen.getByRole('menuitem', {
        name: /test/i
      })).toBeInTheDocument();
    });
    userEvent.keyboard('[ArrowDown][ArrowDown][Enter]');
    await waitFor(() => {
      expect(screen.getByRole('menuitem', {
        name: /start/i
      })).toBeInTheDocument();
    });
  }
}`,...(Ze=(Qe=Y.parameters)==null?void 0:Qe.docs)==null?void 0:Ze.source}}};const go=["Default","WithDisabledItems","WithSeparators","WithLabels","Shortcuts","WithCheckboxItems","WithRadioItems","Nested","Destructive","Surface","TestContextMenu","TestContextMenuNested"];export{j as Default,W as Destructive,R as Nested,A as Shortcuts,z as Surface,H as TestContextMenu,Y as TestContextMenuNested,G as WithCheckboxItems,O as WithDisabledItems,B as WithLabels,L as WithRadioItems,D as WithSeparators,go as __namedExportsOrder,bo as default};
//# sourceMappingURL=ContextMenu.stories-c6d985cb.js.map

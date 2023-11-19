import{a as T,j as te}from"./jsx-runtime-03b4ddbf.js";import{$ as H,e as nt,a as L,c as U,s as Ne,f as Oe}from"./component-92c13614.js";import{_ as I}from"./extends-98964cd2.js";import{r as e}from"./index-76fb7be0.js";import{r as De}from"./index-add592e3.js";import{$ as Ce}from"./index-6a2b73ba.js";import{a as P,$ as Ee}from"./index-45a327ec.js";import{$ as ct}from"./index-7896d420.js";import{a as rt,$ as q,b as at}from"./index-421204d3.js";import{$ as lt}from"./index-c6b1b4f9.js";import{$ as st}from"./index-296a96c6.js";import{h as it,a as dt,$ as ft,b as pt}from"./index-56d74ee5.js";import{$ as xe}from"./index-f8c8b8ff.js";import{$ as Me,b as ut,a as mt,c as $t}from"./index-01bbf444.js";import{$ as ht}from"./index-251d008c.js";import{$ as V}from"./index-77dbc890.js";import{$ as gt}from"./index-11a3acc1.js";import{a as vt}from"./index-207695d4.js";import{i as St}from"./Input-0138999c.js";import{p as xt}from"./Paper-e773ea24.js";import{L as ke,a as bt,b as wt}from"./Label-bb409e96.js";import{b as Ie,d as yt,a as Ct}from"./Icons-43292f8c.js";import{C as Le}from"./ConditionalWrapper-8865b2c1.js";const Et=[" ","Enter","ArrowUp","ArrowDown"],It=[" ","Enter"],de="Select",[fe,pe,_t]=ct(de),[ne,en]=rt(de,[_t,Me]),be=Me(),[Tt,X]=ne(de),[Pt,Rt]=ne(de),Nt=o=>{const{__scopeSelect:l,children:t,open:n,defaultOpen:r,onOpenChange:d,value:a,defaultValue:c,onValueChange:s,dir:i,name:m,autoComplete:x,disabled:E,required:C}=o,u=be(l),[h,b]=e.useState(null),[$,f]=e.useState(null),[g,ce]=e.useState(!1),D=lt(i),[re=!1,R]=Ee({prop:n,defaultProp:r,onChange:d}),[O,z]=Ee({prop:a,defaultProp:c,onChange:s}),J=e.useRef(null),Y=h?!!h.closest("form"):!0,[A,K]=e.useState(new Set),j=Array.from(A).map(_=>_.props.value).join(";");return e.createElement(mt,u,e.createElement(Tt,{required:C,scope:l,trigger:h,onTriggerChange:b,valueNode:$,onValueNodeChange:f,valueNodeHasChildren:g,onValueNodeHasChildrenChange:ce,contentId:xe(),value:O,onValueChange:z,open:re,onOpenChange:R,dir:D,triggerPointerDownPosRef:J,disabled:E},e.createElement(fe.Provider,{scope:l},e.createElement(Pt,{scope:o.__scopeSelect,onNativeOptionAdd:e.useCallback(_=>{K(B=>new Set(B).add(_))},[]),onNativeOptionRemove:e.useCallback(_=>{K(B=>{const W=new Set(B);return W.delete(_),W})},[])},t)),Y?e.createElement(He,{key:j,"aria-hidden":!0,required:C,tabIndex:-1,name:m,autoComplete:x,value:O,onChange:_=>z(_.target.value),disabled:E},O===void 0?e.createElement("option",{value:""}):null,Array.from(A)):null))},Ot="SelectTrigger",Dt=e.forwardRef((o,l)=>{const{__scopeSelect:t,disabled:n=!1,...r}=o,d=be(t),a=X(Ot,t),c=a.disabled||n,s=H(l,a.onTriggerChange),i=pe(t),[m,x,E]=We(u=>{const h=i().filter(f=>!f.disabled),b=h.find(f=>f.value===a.value),$=Fe(h,u,b);$!==void 0&&a.onValueChange($.value)}),C=()=>{c||(a.onOpenChange(!0),E())};return e.createElement(ut,I({asChild:!0},d),e.createElement(V.button,I({type:"button",role:"combobox","aria-controls":a.contentId,"aria-expanded":a.open,"aria-required":a.required,"aria-autocomplete":"none",dir:a.dir,"data-state":a.open?"open":"closed",disabled:c,"data-disabled":c?"":void 0,"data-placeholder":a.value===void 0?"":void 0},r,{ref:s,onClick:P(r.onClick,u=>{u.currentTarget.focus()}),onPointerDown:P(r.onPointerDown,u=>{const h=u.target;h.hasPointerCapture(u.pointerId)&&h.releasePointerCapture(u.pointerId),u.button===0&&u.ctrlKey===!1&&(C(),a.triggerPointerDownPosRef.current={x:Math.round(u.pageX),y:Math.round(u.pageY)},u.preventDefault())}),onKeyDown:P(r.onKeyDown,u=>{const h=m.current!=="";!(u.ctrlKey||u.altKey||u.metaKey)&&u.key.length===1&&x(u.key),!(h&&u.key===" ")&&Et.includes(u.key)&&(C(),u.preventDefault())})})))}),Mt="SelectValue",kt=e.forwardRef((o,l)=>{const{__scopeSelect:t,className:n,style:r,children:d,placeholder:a,...c}=o,s=X(Mt,t),{onValueNodeHasChildrenChange:i}=s,m=d!==void 0,x=H(l,s.onValueNodeChange);return q(()=>{i(m)},[i,m]),e.createElement(V.span,I({},c,{ref:x,style:{pointerEvents:"none"}}),s.value===void 0&&a!==void 0?a:d)}),Lt=e.forwardRef((o,l)=>{const{__scopeSelect:t,children:n,...r}=o;return e.createElement(V.span,I({"aria-hidden":!0},r,{ref:l}),n||"▼")}),Vt=o=>e.createElement(ht,I({asChild:!0},o)),oe="SelectContent",At=e.forwardRef((o,l)=>{const t=X(oe,o.__scopeSelect),[n,r]=e.useState();if(q(()=>{r(new DocumentFragment)},[]),!t.open){const d=n;return d?De.createPortal(e.createElement(Ve,{scope:o.__scopeSelect},e.createElement(fe.Slot,{scope:o.__scopeSelect},e.createElement("div",null,o.children))),d):null}return e.createElement(Bt,I({},o,{ref:l}))}),F=10,[Ve,Z]=ne(oe),Bt=e.forwardRef((o,l)=>{const{__scopeSelect:t,position:n="item-aligned",onCloseAutoFocus:r,onEscapeKeyDown:d,onPointerDownOutside:a,side:c,sideOffset:s,align:i,alignOffset:m,arrowPadding:x,collisionBoundary:E,collisionPadding:C,sticky:u,hideWhenDetached:h,avoidCollisions:b,...$}=o,f=X(oe,t),[g,ce]=e.useState(null),[D,re]=e.useState(null),R=H(l,p=>ce(p)),[O,z]=e.useState(null),[J,Y]=e.useState(null),A=pe(t),[K,j]=e.useState(!1),_=e.useRef(!1);e.useEffect(()=>{if(g)return it(g)},[g]),dt();const B=e.useCallback(p=>{const[w,...N]=A().map(S=>S.ref.current),[y]=N.slice(-1),v=document.activeElement;for(const S of p)if(S===v||(S==null||S.scrollIntoView({block:"nearest"}),S===w&&D&&(D.scrollTop=0),S===y&&D&&(D.scrollTop=D.scrollHeight),S==null||S.focus(),document.activeElement!==v))return},[A,D]),W=e.useCallback(()=>B([O,g]),[B,O,g]);e.useEffect(()=>{K&&W()},[K,W]);const{onOpenChange:Q,triggerPointerDownPosRef:G}=f;e.useEffect(()=>{if(g){let p={x:0,y:0};const w=y=>{var v,S,M,k;p={x:Math.abs(Math.round(y.pageX)-((v=(S=G.current)===null||S===void 0?void 0:S.x)!==null&&v!==void 0?v:0)),y:Math.abs(Math.round(y.pageY)-((M=(k=G.current)===null||k===void 0?void 0:k.y)!==null&&M!==void 0?M:0))}},N=y=>{p.x<=10&&p.y<=10?y.preventDefault():g.contains(y.target)||Q(!1),document.removeEventListener("pointermove",w),G.current=null};return G.current!==null&&(document.addEventListener("pointermove",w),document.addEventListener("pointerup",N,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",w),document.removeEventListener("pointerup",N,{capture:!0})}}},[g,Q,G]),e.useEffect(()=>{const p=()=>Q(!1);return window.addEventListener("blur",p),window.addEventListener("resize",p),()=>{window.removeEventListener("blur",p),window.removeEventListener("resize",p)}},[Q]);const[ue,le]=We(p=>{const w=A().filter(v=>!v.disabled),N=w.find(v=>v.ref.current===document.activeElement),y=Fe(w,p,N);y&&setTimeout(()=>y.ref.current.focus())}),me=e.useCallback((p,w,N)=>{const y=!_.current&&!N;(f.value!==void 0&&f.value===w||y)&&(z(p),y&&(_.current=!0))},[f.value]),$e=e.useCallback(()=>g==null?void 0:g.focus(),[g]),ee=e.useCallback((p,w,N)=>{const y=!_.current&&!N;(f.value!==void 0&&f.value===w||y)&&Y(p)},[f.value]),se=n==="popper"?_e:Ht,ae=se===_e?{side:c,sideOffset:s,align:i,alignOffset:m,arrowPadding:x,collisionBoundary:E,collisionPadding:C,sticky:u,hideWhenDetached:h,avoidCollisions:b}:{};return e.createElement(Ve,{scope:t,content:g,viewport:D,onViewportChange:re,itemRefCallback:me,selectedItem:O,onItemLeave:$e,itemTextRefCallback:ee,focusSelectedItem:W,selectedItemText:J,position:n,isPositioned:K,searchRef:ue},e.createElement(ft,{as:nt,allowPinchZoom:!0},e.createElement(pt,{asChild:!0,trapped:f.open,onMountAutoFocus:p=>{p.preventDefault()},onUnmountAutoFocus:P(r,p=>{var w;(w=f.trigger)===null||w===void 0||w.focus({preventScroll:!0}),p.preventDefault()})},e.createElement(st,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:d,onPointerDownOutside:a,onFocusOutside:p=>p.preventDefault(),onDismiss:()=>f.onOpenChange(!1)},e.createElement(se,I({role:"listbox",id:f.contentId,"data-state":f.open?"open":"closed",dir:f.dir,onContextMenu:p=>p.preventDefault()},$,ae,{onPlaced:()=>j(!0),ref:R,style:{display:"flex",flexDirection:"column",outline:"none",...$.style},onKeyDown:P($.onKeyDown,p=>{const w=p.ctrlKey||p.altKey||p.metaKey;if(p.key==="Tab"&&p.preventDefault(),!w&&p.key.length===1&&le(p.key),["ArrowUp","ArrowDown","Home","End"].includes(p.key)){let y=A().filter(v=>!v.disabled).map(v=>v.ref.current);if(["ArrowUp","End"].includes(p.key)&&(y=y.slice().reverse()),["ArrowUp","ArrowDown"].includes(p.key)){const v=p.target,S=y.indexOf(v);y=y.slice(S+1)}setTimeout(()=>B(y)),p.preventDefault()}})}))))))}),Ht=e.forwardRef((o,l)=>{const{__scopeSelect:t,onPlaced:n,...r}=o,d=X(oe,t),a=Z(oe,t),[c,s]=e.useState(null),[i,m]=e.useState(null),x=H(l,R=>m(R)),E=pe(t),C=e.useRef(!1),u=e.useRef(!0),{viewport:h,selectedItem:b,selectedItemText:$,focusSelectedItem:f}=a,g=e.useCallback(()=>{if(d.trigger&&d.valueNode&&c&&i&&h&&b&&$){const R=d.trigger.getBoundingClientRect(),O=i.getBoundingClientRect(),z=d.valueNode.getBoundingClientRect(),J=$.getBoundingClientRect();if(d.dir!=="rtl"){const v=J.left-O.left,S=z.left-v,M=R.left-S,k=R.width+M,he=Math.max(k,O.width),ge=window.innerWidth-F,ve=Ce(S,[F,ge-he]);c.style.minWidth=k+"px",c.style.left=ve+"px"}else{const v=O.right-J.right,S=window.innerWidth-z.right-v,M=window.innerWidth-R.right-S,k=R.width+M,he=Math.max(k,O.width),ge=window.innerWidth-F,ve=Ce(S,[F,ge-he]);c.style.minWidth=k+"px",c.style.right=ve+"px"}const Y=E(),A=window.innerHeight-F*2,K=h.scrollHeight,j=window.getComputedStyle(i),_=parseInt(j.borderTopWidth,10),B=parseInt(j.paddingTop,10),W=parseInt(j.borderBottomWidth,10),Q=parseInt(j.paddingBottom,10),G=_+B+K+Q+W,ue=Math.min(b.offsetHeight*5,G),le=window.getComputedStyle(h),me=parseInt(le.paddingTop,10),$e=parseInt(le.paddingBottom,10),ee=R.top+R.height/2-F,se=A-ee,ae=b.offsetHeight/2,p=b.offsetTop+ae,w=_+B+p,N=G-w;if(w<=ee){const v=b===Y[Y.length-1].ref.current;c.style.bottom="0px";const S=i.clientHeight-h.offsetTop-h.offsetHeight,M=Math.max(se,ae+(v?$e:0)+S+W),k=w+M;c.style.height=k+"px"}else{const v=b===Y[0].ref.current;c.style.top="0px";const M=Math.max(ee,_+h.offsetTop+(v?me:0)+ae)+N;c.style.height=M+"px",h.scrollTop=w-ee+h.offsetTop}c.style.margin=`${F}px 0`,c.style.minHeight=ue+"px",c.style.maxHeight=A+"px",n==null||n(),requestAnimationFrame(()=>C.current=!0)}},[E,d.trigger,d.valueNode,c,i,h,b,$,d.dir,n]);q(()=>g(),[g]);const[ce,D]=e.useState();q(()=>{i&&D(window.getComputedStyle(i).zIndex)},[i]);const re=e.useCallback(R=>{R&&u.current===!0&&(g(),f==null||f(),u.current=!1)},[g,f]);return e.createElement(Wt,{scope:t,contentWrapper:c,shouldExpandOnScrollRef:C,onScrollButtonChange:re},e.createElement("div",{ref:s,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:ce}},e.createElement(V.div,I({},r,{ref:x,style:{boxSizing:"border-box",maxHeight:"100%",...r.style}}))))}),_e=e.forwardRef((o,l)=>{const{__scopeSelect:t,align:n="start",collisionPadding:r=F,...d}=o,a=be(t);return e.createElement($t,I({},a,d,{ref:l,align:n,collisionPadding:r,style:{boxSizing:"border-box",...d.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}}))}),[Wt,we]=ne(oe,{}),Te="SelectViewport",Ft=e.forwardRef((o,l)=>{const{__scopeSelect:t,...n}=o,r=Z(Te,t),d=we(Te,t),a=H(l,r.onViewportChange),c=e.useRef(0);return e.createElement(e.Fragment,null,e.createElement("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"}}),e.createElement(fe.Slot,{scope:t},e.createElement(V.div,I({"data-radix-select-viewport":"",role:"presentation"},n,{ref:a,style:{position:"relative",flex:1,overflow:"auto",...n.style},onScroll:P(n.onScroll,s=>{const i=s.currentTarget,{contentWrapper:m,shouldExpandOnScrollRef:x}=d;if(x!=null&&x.current&&m){const E=Math.abs(c.current-i.scrollTop);if(E>0){const C=window.innerHeight-F*2,u=parseFloat(m.style.minHeight),h=parseFloat(m.style.height),b=Math.max(u,h);if(b<C){const $=b+E,f=Math.min(C,$),g=$-f;m.style.height=f+"px",m.style.bottom==="0px"&&(i.scrollTop=g>0?g:0,m.style.justifyContent="flex-end")}}}c.current=i.scrollTop})}))))}),Ut="SelectGroup",[Kt,tn]=ne(Ut),jt=e.forwardRef((o,l)=>{const{__scopeSelect:t,...n}=o,r=xe();return e.createElement(Kt,{scope:t,id:r},e.createElement(V.div,I({role:"group","aria-labelledby":r},n,{ref:l})))}),Se="SelectItem",[Gt,Ae]=ne(Se),qt=e.forwardRef((o,l)=>{const{__scopeSelect:t,value:n,disabled:r=!1,textValue:d,...a}=o,c=X(Se,t),s=Z(Se,t),i=c.value===n,[m,x]=e.useState(d??""),[E,C]=e.useState(!1),u=H(l,$=>{var f;return(f=s.itemRefCallback)===null||f===void 0?void 0:f.call(s,$,n,r)}),h=xe(),b=()=>{r||(c.onValueChange(n),c.onOpenChange(!1))};return e.createElement(Gt,{scope:t,value:n,disabled:r,textId:h,isSelected:i,onItemTextChange:e.useCallback($=>{x(f=>{var g;return f||((g=$==null?void 0:$.textContent)!==null&&g!==void 0?g:"").trim()})},[])},e.createElement(fe.ItemSlot,{scope:t,value:n,disabled:r,textValue:m},e.createElement(V.div,I({role:"option","aria-labelledby":h,"data-highlighted":E?"":void 0,"aria-selected":i&&E,"data-state":i?"checked":"unchecked","aria-disabled":r||void 0,"data-disabled":r?"":void 0,tabIndex:r?void 0:-1},a,{ref:u,onFocus:P(a.onFocus,()=>C(!0)),onBlur:P(a.onBlur,()=>C(!1)),onPointerUp:P(a.onPointerUp,b),onPointerMove:P(a.onPointerMove,$=>{if(r){var f;(f=s.onItemLeave)===null||f===void 0||f.call(s)}else $.currentTarget.focus({preventScroll:!0})}),onPointerLeave:P(a.onPointerLeave,$=>{if($.currentTarget===document.activeElement){var f;(f=s.onItemLeave)===null||f===void 0||f.call(s)}}),onKeyDown:P(a.onKeyDown,$=>{var f;((f=s.searchRef)===null||f===void 0?void 0:f.current)!==""&&$.key===" "||(It.includes($.key)&&b(),$.key===" "&&$.preventDefault())})}))))}),ie="SelectItemText",zt=e.forwardRef((o,l)=>{const{__scopeSelect:t,className:n,style:r,...d}=o,a=X(ie,t),c=Z(ie,t),s=Ae(ie,t),i=Rt(ie,t),[m,x]=e.useState(null),E=H(l,$=>x($),s.onItemTextChange,$=>{var f;return(f=c.itemTextRefCallback)===null||f===void 0?void 0:f.call(c,$,s.value,s.disabled)}),C=m==null?void 0:m.textContent,u=e.useMemo(()=>e.createElement("option",{key:s.value,value:s.value,disabled:s.disabled},C),[s.disabled,s.value,C]),{onNativeOptionAdd:h,onNativeOptionRemove:b}=i;return q(()=>(h(u),()=>b(u)),[h,b,u]),e.createElement(e.Fragment,null,e.createElement(V.span,I({id:s.textId},d,{ref:E})),s.isSelected&&a.valueNode&&!a.valueNodeHasChildren?De.createPortal(d.children,a.valueNode):null)}),Yt="SelectItemIndicator",Xt=e.forwardRef((o,l)=>{const{__scopeSelect:t,...n}=o;return Ae(Yt,t).isSelected?e.createElement(V.span,I({"aria-hidden":!0},n,{ref:l})):null}),Pe="SelectScrollUpButton",Zt=e.forwardRef((o,l)=>{const t=Z(Pe,o.__scopeSelect),n=we(Pe,o.__scopeSelect),[r,d]=e.useState(!1),a=H(l,n.onScrollButtonChange);return q(()=>{if(t.viewport&&t.isPositioned){let s=function(){const i=c.scrollTop>0;d(i)};const c=t.viewport;return s(),c.addEventListener("scroll",s),()=>c.removeEventListener("scroll",s)}},[t.viewport,t.isPositioned]),r?e.createElement(Be,I({},o,{ref:a,onAutoScroll:()=>{const{viewport:c,selectedItem:s}=t;c&&s&&(c.scrollTop=c.scrollTop-s.offsetHeight)}})):null}),Re="SelectScrollDownButton",Jt=e.forwardRef((o,l)=>{const t=Z(Re,o.__scopeSelect),n=we(Re,o.__scopeSelect),[r,d]=e.useState(!1),a=H(l,n.onScrollButtonChange);return q(()=>{if(t.viewport&&t.isPositioned){let s=function(){const i=c.scrollHeight-c.clientHeight,m=Math.ceil(c.scrollTop)<i;d(m)};const c=t.viewport;return s(),c.addEventListener("scroll",s),()=>c.removeEventListener("scroll",s)}},[t.viewport,t.isPositioned]),r?e.createElement(Be,I({},o,{ref:a,onAutoScroll:()=>{const{viewport:c,selectedItem:s}=t;c&&s&&(c.scrollTop=c.scrollTop+s.offsetHeight)}})):null}),Be=e.forwardRef((o,l)=>{const{__scopeSelect:t,onAutoScroll:n,...r}=o,d=Z("SelectScrollButton",t),a=e.useRef(null),c=pe(t),s=e.useCallback(()=>{a.current!==null&&(window.clearInterval(a.current),a.current=null)},[]);return e.useEffect(()=>()=>s(),[s]),q(()=>{var i;const m=c().find(x=>x.ref.current===document.activeElement);m==null||(i=m.ref.current)===null||i===void 0||i.scrollIntoView({block:"nearest"})},[c]),e.createElement(V.div,I({"aria-hidden":!0},r,{ref:l,style:{flexShrink:0,...r.style},onPointerDown:P(r.onPointerDown,()=>{a.current===null&&(a.current=window.setInterval(n,50))}),onPointerMove:P(r.onPointerMove,()=>{var i;(i=d.onItemLeave)===null||i===void 0||i.call(d),a.current===null&&(a.current=window.setInterval(n,50))}),onPointerLeave:P(r.onPointerLeave,()=>{s()})}))}),Qt=e.forwardRef((o,l)=>{const{__scopeSelect:t,...n}=o;return e.createElement(V.div,I({"aria-hidden":!0},n,{ref:l}))}),He=e.forwardRef((o,l)=>{const{value:t,...n}=o,r=e.useRef(null),d=H(l,r),a=gt(t);return e.useEffect(()=>{const c=r.current,s=window.HTMLSelectElement.prototype,m=Object.getOwnPropertyDescriptor(s,"value").set;if(a!==t&&m){const x=new Event("change",{bubbles:!0});m.call(c,t),c.dispatchEvent(x)}},[a,t]),e.createElement(vt,{asChild:!0},e.createElement("select",I({},n,{ref:d,defaultValue:t})))});He.displayName="BubbleSelect";function We(o){const l=at(o),t=e.useRef(""),n=e.useRef(0),r=e.useCallback(a=>{const c=t.current+a;l(c),function s(i){t.current=i,window.clearTimeout(n.current),i!==""&&(n.current=window.setTimeout(()=>s(""),1e3))}(c)},[l]),d=e.useCallback(()=>{t.current="",window.clearTimeout(n.current)},[]);return e.useEffect(()=>()=>window.clearTimeout(n.current),[]),[t,r,d]}function Fe(o,l,t){const r=l.length>1&&Array.from(l).every(i=>i===l[0])?l[0]:l,d=t?o.indexOf(t):-1;let a=eo(o,Math.max(d,0));r.length===1&&(a=a.filter(i=>i!==t));const s=a.find(i=>i.textValue.toLowerCase().startsWith(r.toLowerCase()));return s!==t?s:void 0}function eo(o,l){return o.map((t,n)=>o[(l+n)%o.length])}const to=Nt,oo=Dt,no=kt,Ue=Lt,co=Vt,ro=At,ao=Ft,lo=jt,so=qt,Ke=zt,io=Xt,fo=Zt,po=Jt,uo=Qt;var ye=globalThis&&globalThis.__rest||function(o,l){var t={};for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&l.indexOf(n)<0&&(t[n]=o[n]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(o);r<n.length;r++)l.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(o,n[r])&&(t[n[r]]=o[n[r]]);return t};const je=L(Ne(oo,St),"c-select-trigger",U({_readOnly:{},display:"inline-flex",alignItems:"center",justifyContent:"space-between",cursor:"pointer",alignContent:"center","&[data-placeholder] span:first-child":{color:"$neutral.8"}})),Ge=L(no,"c-select-value",U({flexGrow:1})),mo=Ne(L(ro,"c-select-content",xt,U({overflow:"hidden",boxShadow:"$2",_before:{boxShadow:"none"}}))),qe=L(ao,"c-select-viewport",U({padding:"$2"})),ze=L(so,"c-select-item",U({py:"$2",pr:"$3",pl:"$6",cursor:"default",borderRadius:"$default",backgroundColor:"transparent",border:"none",color:"$text",outline:"none",display:"flex",alignItems:"center",justifyContent:"space-between",position:"relative",userSelect:"none",_motionReduce:{transition:"none"},_motionSafe:{transition:"all 50ms"},_focus:{background:"$selection",cursor:"pointer"},"&[data-disabled]":{color:"$neutral.9",pointerEvents:"none"}})),$o=L(ke,"c-select-label",U({py:"$0",px:"$2",fontSize:0,lineHeight:2,color:"$neutral.10"})),ho=L(uo,"c-select-separator",U({height:1,backgroundColor:"$neutral.7",margin:"$1"})),Ye=L(io,"c-select-item-indicator",U({position:"absolute",left:"$2",width:"$4",display:"inline-flex",alignItems:"center",justifyContent:"center"})),Xe=U({display:"flex",alignItems:"center",justifyContent:"center",height:"$5",color:"$neutral.7",cursor:"default"}),Ze=L(fo,"c-select-scroll-up",Xe),Je=L(po,"c-select-scroll-down",Xe),Qe=Oe((o,l)=>{var{container:t,portalled:n=!0,children:r}=o,d=ye(o,["container","portalled","children"]);return T(Le,{condition:n,props:{container:t},wrapper:co,children:T(mo,Object.assign({},d,{ref:l,children:r}))})});Qe.displayName="SelectContent";const et=({label:o,required:l,children:t})=>te(ke,{variant:"wrapping",children:[te("span",{children:[o,l===!1&&T(wt,{})]}),t]});et.displayName="InternalSelectLabel";const tt=L(to,"c-select"),go=Oe((o,l)=>{var{label:t,container:n,portalled:r=!0,placeholder:d,children:a,surface:c="solid"}=o,s=ye(o,["label","container","portalled","placeholder","children","surface"]);const[i,{state:m,disabled:x,required:E},C]=bt(s);return T(Le,{condition:t,props:{label:t,required:E},wrapper:et,children:te(tt,Object.assign({},C,{children:[te(je,{id:i,disabled:x,state:m,ref:l,children:[T(Ge,{placeholder:d}),T(Ue,{children:T(Ie,{})})]}),te(Qe,{surface:c,portalled:r,container:n,children:[T(Ze,{children:T(yt,{})}),T(qe,{children:a}),T(Je,{children:T(Ie,{})})]})]}))})});go.displayName="Select";const ot=e.forwardRef((o,l)=>{var{children:t}=o,n=ye(o,["children"]);return te(ze,Object.assign({},n,{ref:l,children:[T(Ye,{children:T(Ct,{})}),T(Ke,{children:t})]}))});ot.displayName="SelectItem";const vo=je,So=Ge,xo=Ue,bo=qe,wo=lo,yo=Ke,Co=Ye,Eo=$o,Io=ho,_o=Ze,To=Je,Po=tt,Ro=ze;vo.displayName="SelectTrigger";So.displayName="SelectValue";xo.displayName="SelectIcon";bo.displayName="SelectViewport";wo.displayName="SelectGroup";yo.displayName="SelectItemText";Co.displayName="SelectItemIndicator";Eo.displayName="SelectLabel";Io.displayName="SelectSeparator";_o.displayName="SelectScrollUpButton";To.displayName="SelectScrollDownButton";Po.displayName="SelectRoot";Ro.displayName="SelectRootItem";ot.__docgenInfo={description:"",methods:[],displayName:"SelectItem"};export{go as S,ot as a,wo as b,Eo as c,Io as d,Po as e,vo as f,So as g,xo as h,Qe as i,_o as j,bo as k,Ro as l,yo as m,Co as n,To as o};
//# sourceMappingURL=Select-564ad3c3.js.map

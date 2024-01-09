import{a as r}from"./jsx-runtime-03b4ddbf.js";import{b as s,a as p,s as i,f as h,d as k}from"./component-92c13614.js";import{S as m}from"./Svg-cfd7f95e.js";var O=globalThis&&globalThis.__rest||function(o,n){var a={};for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&n.indexOf(t)<0&&(a[t]=o[t]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var e=0,t=Object.getOwnPropertySymbols(o);e<t.length;e++)n.indexOf(t[e])<0&&Object.prototype.propertyIsEnumerable.call(o,t[e])&&(a[t[e]]=o[t[e]]);return a};const c="button",l={"--active":"token(colors.colorPalette.outline.active)","--focus":"token(colors.colorPalette.outline.focus)","--hover":"token(colors.colorPalette.outline.hover)"},P={background:"var(--hover) radial-gradient(circle, transparent 1%, var(--hover) 1%) center/15000%"},y={background:"var(--focus) radial-gradient(circle, transparent 1%, var(--focus) 1%) center/15000%",outline:"2px solid var(--active)"},$={_motionSafe:{transition:"background 0s !important"},backgroundColor:"var(--active)",backgroundSize:"100%"},j={pointerEvents:"none",opacity:.3},u={cursor:"pointer",_motionSafe:{transition:"background 0.5s "},backgroundPosition:"center",_hover:P,_focus:y,_active:$,_disabled:j},d={solid:{"--active":"token(colors.colorPalette.solid.active)","--focus":"token(colors.colorPalette.solid.focus)","--hover":"token(colors.colorPalette.solid.hover)",backgroundColor:"token(colors.colorPalette.solid)",color:"token(colors.colorPalette.text)"},outline:{"--active":"token(colors.colorPalette.outline.active)","--focus":"token(colors.colorPalette.outline.focus)","--hover":"token(colors.colorPalette.outline.hover)",backgroundColor:"token(colors.colorPalette.outline)",borderColor:"var(--active)",color:"var(--active)"},text:{"--active":"token(colors.colorPalette.outline.active)","--focus":"token(colors.colorPalette.outline.focus)","--hover":"token(colors.colorPalette.outline.hover)",color:"var(--active)"}},v={false:{},true:{colorPalette:"$error"}},S={small:{paddingLeft:"$3",paddingRight:"$3",height:"$5",fontSize:"$-1"},default:{paddingLeft:"$4",paddingRight:"$4",height:"$6"},large:{paddingLeft:"$6",paddingRight:"$6",height:"$7"}},b={alignItems:"center",appearance:"none",boxSizing:"border-box",display:"inline-flex",flexShrink:0,justifyContent:"center",lineHeight:"none",outline:"none",userSelect:"none",WebkitTapHighlightColor:"rgba(0,0,0,0)",fontSize:"$0",borderRadius:"$default",backgroundColor:"transparent",border:"transparent solid 2px",width:"fit-content; width: -moz-fit-content",_motionReduce:{transition:"none"}},z={variants:{variant:d,destructive:v,size:S,"full-width":{true:{width:"100%"}}}},x=s(Object.assign(Object.assign({base:Object.assign(Object.assign(Object.assign(Object.assign({},l),b),u),{colorPalette:"$primary"})},z),{defaultVariants:{variant:"solid",destructive:!1,size:"default"}})),_=p(c,"c-button"),B=i(_,x);B.displayName="Button";const C={small:{size:"$5","& > svg":{size:"$4"}},default:{size:"$6"},large:{size:"$7","& > svg":{size:"$6"}}},V={variants:{variant:d,destructive:v,size:C}},w=s(Object.assign(Object.assign({base:Object.assign(Object.assign(Object.assign(Object.assign({},l),b),u),{colorPalette:"$primary"})},V),{defaultVariants:{variant:"outline",destructive:!1,size:"default"}})),I=i(c,w),N="c-icon-button",T=h((o,n)=>{var{className:a,title:t,path:e,children:f}=o,g=O(o,["className","title","path","children"]);return r(I,Object.assign({className:k(N,a)},g,{ref:n,children:e?r(m,{path:e,title:t}):f}))});T.displayName="IconButton";export{B,T as I,b as a,l as b,u as c,v as d,y as f,P as h,C as i,d as m};
//# sourceMappingURL=Button-23e6de97.js.map
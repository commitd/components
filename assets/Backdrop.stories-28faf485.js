import{a as r,j as l,F as k}from"./jsx-runtime-03b4ddbf.js";import{i as v,T as B}from"./hooks.esm-cc7a556e.js";import{a as d,c,d as F}from"./component-92c13614.js";import"./index-76fb7be0.js";import{b as z,$ as _,a as N,c as I}from"./index-ca20a0e4.js";import{o as $}from"./Overlay-1ca05ff0.js";import{C as P}from"./ConditionalWrapper-8865b2c1.js";import{B as S}from"./Button-23e6de97.js";import{S as R}from"./Spinner-598f549f.js";import{T as W}from"./Text-561f173c.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-de833af9.js";import"./index-45a327ec.js";import"./index-421204d3.js";import"./index-f8c8b8ff.js";import"./index-296a96c6.js";import"./index-77dbc890.js";import"./index-add592e3.js";import"./index-56d74ee5.js";import"./index-251d008c.js";import"./index-c6da0816.js";import"./Svg-cfd7f95e.js";import"./Logo-25278444.js";var A=globalThis&&globalThis.__rest||function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,o=Object.getOwnPropertySymbols(e);s<o.length;s++)n.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(t[o[s]]=e[o[s]]);return t};const D=d(z,"c-backdrop",c({isolation:"isolate"})),E=d(_,$,c({position:"fixed",right:0,bottom:0,top:0,left:0})),H=d(N,$,c({position:"fixed",isolation:"isolate",top:"50%",left:"50%",transform:"translate(-50%, -50%)",minWidth:200,maxWidth:"fit-content",maxHeight:"85vh",padding:20,marginTop:"-5vh",_focus:{outline:"none"}})),p=e=>{var{className:n,overlay:t="frost",css:o,overlayCss:s,contentCss:T,container:C,portalled:O=!0,children:w}=e,j=A(e,["className","overlay","css","overlayCss","contentCss","container","portalled","children"]);return r(D,Object.assign({css:c.raw(o)},j,{children:r(P,{condition:O,props:{container:C},wrapper:I,children:l("div",{className:F("c-backdrop",n),children:[r(E,{className:c({surface:t},s)}),r(H,{css:T,children:w})]})})}))};p.displayName="Backdrop";const de={title:"Components/Backdrop",component:p},i={render:()=>{const[e,{setTrue:n,setFalse:t}]=v(!1);return B(t,e?1e3:null),l(k,{children:[r(S,{onClick:n,children:"Show Backdrop"}),r(p,{open:e,children:r(R,{size:"$8",variant:"spin"})})]})}},a={render:()=>{const[e,{setTrue:n,setFalse:t}]=v(!1);return B(t,e?1e3:null),l(k,{children:[r(S,{onClick:n,children:"Show Backdrop"}),r(p,{open:e,overlay:"solid",css:{zIndex:1e3},contentCss:{border:"solid 2px black",color:"$primary"},children:r(W,{size:"$3",children:"Running..."})})]})}};var m,u,f;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    const [open, {
      setTrue,
      setFalse
    }] = useBoolean(false);
    useTimeout(setFalse, open ? 1000 : null);
    return <>
        <Button onClick={setTrue}>Show Backdrop</Button>
        <Backdrop open={open}>
          <Spinner size="$8" variant="spin" />
        </Backdrop>
      </>;
  }
}`,...(f=(u=i.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var b,h,y,x,g;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    const [open, {
      setTrue,
      setFalse
    }] = useBoolean(false);
    useTimeout(setFalse, open ? 1000 : null);
    return <>
        <Button onClick={setTrue}>Show Backdrop</Button>
        <Backdrop open={open} overlay="solid" css={{
        zIndex: 1000
      }} contentCss={{
        border: 'solid 2px black',
        color: '$primary'
      }}>
          <Text size="$3">Running...</Text>
        </Backdrop>
      </>;
  }
}`,...(y=(h=a.parameters)==null?void 0:h.docs)==null?void 0:y.source},description:{story:"Additional styling can be supplied to the background overlay and the content wrapper using the relevant css props.",...(g=(x=a.parameters)==null?void 0:x.docs)==null?void 0:g.description}}};const me=["Default","Styling"];export{i as Default,a as Styling,me as __namedExportsOrder,de as default};
//# sourceMappingURL=Backdrop.stories-28faf485.js.map

import{a as s,j as z}from"./jsx-runtime-03b4ddbf.js";import{r as u}from"./index-76fb7be0.js";import{a as F,c as K,s as Q,b as W,f as Y}from"./component-92c13614.js";import{_ as G}from"./extends-98964cd2.js";import{a as ee}from"./index-421204d3.js";import{$ as X}from"./index-77dbc890.js";import{S as U}from"./Stack-d8c3aa6d.js";import{T as y}from"./Text-561f173c.js";import{S as re}from"./Slider-ca47b191.js";import"./_commonjsHelpers-de833af9.js";import"./index-add592e3.js";import"./Box-f074bc4b.js";import"./hooks.esm-cc7a556e.js";import"./Popover-7d7d988f.js";import"./index-45a327ec.js";import"./index-296a96c6.js";import"./index-56d74ee5.js";import"./index-f8c8b8ff.js";import"./index-01bbf444.js";import"./index-1a2315aa.js";import"./index-251d008c.js";import"./index-c6da0816.js";import"./Paper-e773ea24.js";import"./ConditionalWrapper-8865b2c1.js";import"./index-6a2b73ba.js";import"./index-c6b1b4f9.js";import"./index-11a3acc1.js";import"./index-7896d420.js";import"./Tooltip-53dd1a2c.js";import"./index-207695d4.js";import"./Label-bb409e96.js";const Z="Progress",P=100,[ae,He]=ee(Z),[te,oe]=ae(Z),q=u.forwardRef((e,a)=>{const{__scopeProgress:t,value:r,max:o,getValueLabel:n=le,...x}=e,c=b(o)?o:P,i=H(r,c)?r:null,J=g(i)?n(i,c):void 0;return u.createElement(te,{scope:t,value:i,max:c},u.createElement(X.div,G({"aria-valuemax":c,"aria-valuemin":0,"aria-valuenow":g(i)?i:void 0,"aria-valuetext":J,role:"progressbar","data-state":B(i,c),"data-value":i??void 0,"data-max":c},x,{ref:a})))});q.propTypes={max(e,a,t){const r=e[a],o=String(r);return r&&!b(r)?new Error(ie(o,t)):null},value(e,a,t){const r=e[a],o=String(r),n=b(e.max)?e.max:P;return r!=null&&!H(r,n)?new Error(ce(o,t)):null}};const se="ProgressIndicator",ne=u.forwardRef((e,a)=>{var t;const{__scopeProgress:r,...o}=e,n=oe(se,r);return u.createElement(X.div,G({"data-state":B(n.value,n.max),"data-value":(t=n.value)!==null&&t!==void 0?t:void 0,"data-max":n.max},o,{ref:a}))});function le(e,a){return`${Math.round(e/a*100)}%`}function B(e,a){return e==null?"indeterminate":e===a?"complete":"loading"}function g(e){return typeof e=="number"}function b(e){return g(e)&&!isNaN(e)&&e>0}function H(e,a){return g(e)&&!isNaN(e)&&e<=a&&e>=0}function ie(e,a){return`Invalid prop \`max\` of value \`${e}\` supplied to \`${a}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${P}\`.`}function ce(e,a){return`Invalid prop \`value\` of value \`${e}\` supplied to \`${a}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${P} if no \`max\` prop is set)
  - \`null\` if the progress is indeterminate.

Defaulting to \`null\`.`}const ue=q,me=ne;var de=globalThis&&globalThis.__rest||function(e,a){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&a.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)a.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]]);return t};const pe="c-progress",$e="c-progress-indicator",ve=F(ue,pe,K({boxSizing:"border-box",position:"relative",height:"$1",overflow:"hidden",borderRadius:"$pill",backgroundColor:"$neutral.3.a",transform:"translateZ(0)"})),fe=Q(F(me,$e),W({base:{boxSizing:"border-box",position:"absolute",top:0,right:0,bottom:0,left:0,width:"100%",height:"100%",colorPalette:"$primary",backgroundColor:"colorPalette.9",_motionReduce:{transition:"none"},_motionSafe:{transition:"transform 150ms cubic-bezier(0.65, 0, 0.35, 1)"},"&[data-state=indeterminate]":{borderRadius:"$pill",width:"5%",animationName:"indeterminate",_motionSafe:{animationDuration:"1500ms",animationIterationCount:"infinite",animationTimingFunction:"cubic-bezier(0.65, 0, 0.35, 1)"},_motionReduce:{left:"47.5%"}}}})),l=Y((e,a)=>{var{value:t,max:r=100,colorPalette:o}=e,n=de(e,["value","max","colorPalette"]);const x=t!=null?Math.round(t/r*100):0;return s(ve,Object.assign({},n,{ref:a,value:t,max:r,children:s(fe,{colorPalette:o,style:{transform:`translateX(-${100-x}%)`}})}))});l.displayName="Progress";const Je={title:"Components/Progress",component:l,argTypes:{value:{control:{type:"range",options:{min:0,max:100,step:1}},description:"The current progress, between the min and max values"},colorPalette:{control:{type:"select",options:["$primary","$secondary","$neutral"]},description:"The progress is available in different variants. For a primary action use `primary`, for a background task use the `secondary` (default), two others are provided for special use cases."},max:{control:{type:"number",options:{min:0,max:200,step:50}},defaultValue:100,description:"The progress maximum value"}}},m={},d={args:{colorPalette:"$primary",value:50}},p={args:{colorPalette:"$neutral",value:75}},$={},v=()=>z(U,{children:[s(y,{children:"Download 20% complete"}),s(l,{value:20}),s(y,{size:"$-1",css:{color:"$text.secondary"},children:"6 hours remaining"})]}),f=()=>{const[e,a]=u.useState([0]);return z(U,{children:[s(l,{value:e[0]}),s(l,{colorPalette:"$neutral",value:e[0]}),s(l,{colorPalette:"$primary",value:e[0]}),s(l,{colorPalette:"$secondary",value:e[0]}),s(l,{colorPalette:"$success",value:e[0]}),s(l,{colorPalette:"$error",value:e[0]}),s(l,{colorPalette:"$info",value:e[0]}),s(re,{css:{mt:"$6"},value:e,onValueChange:a})]})};var S,h,_;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(_=(h=m.parameters)==null?void 0:h.docs)==null?void 0:_.source}}};var T,w,E;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    colorPalette: '$primary',
    value: 50
  }
}`,...(E=(w=d.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var O,V,N;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    colorPalette: '$neutral',
    value: 75
  }
}`,...(N=(V=p.parameters)==null?void 0:V.docs)==null?void 0:N.source}}};var C,I,R;$.parameters={...$.parameters,docs:{...(C=$.parameters)==null?void 0:C.docs,source:{originalSource:"{}",...(R=(I=$.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var D,k,j;v.parameters={...v.parameters,docs:{...(D=v.parameters)==null?void 0:D.docs,source:{originalSource:`() => <Stack>
    <Text>Download 20% complete</Text>
    <Progress value={20} />
    <Text size="$-1" css={{
    color: '$text.secondary'
  }}>
      6 hours remaining
    </Text>
  </Stack>`,...(j=(k=v.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};var A,L,M;f.parameters={...f.parameters,docs:{...(A=f.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
  const [value, setValue] = useState([0]);
  return <Stack>
      <Progress value={value[0]} />
      <Progress colorPalette="$neutral" value={value[0]} />
      <Progress colorPalette="$primary" value={value[0]} />
      <Progress colorPalette="$secondary" value={value[0]} />
      <Progress colorPalette="$success" value={value[0]} />
      <Progress colorPalette="$error" value={value[0]} />
      <Progress colorPalette="$info" value={value[0]} />
      <Slider css={{
      mt: '$6'
    }} value={value} onValueChange={setValue} />
    </Stack>;
}`,...(M=(L=f.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};const Ke=["Default","Primary","Neutral","Indeterminate","Decorated","Controlled"];export{f as Controlled,v as Decorated,m as Default,$ as Indeterminate,p as Neutral,d as Primary,Ke as __namedExportsOrder,Je as default};
//# sourceMappingURL=Progress.stories-d1ef4b89.js.map

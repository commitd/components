import{j as B,a as t}from"./jsx-runtime-03b4ddbf.js";import{b as E,s as P,a as V}from"./component-92c13614.js";import{I as C}from"./Inline-fdf2c0ff.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./extends-98964cd2.js";import"./Box-f074bc4b.js";const D="div",F=E({base:{backgroundColor:"$neutral.5",position:"relative",overflow:"hidden",_after:{bottom:0,content:"''",left:0,position:"absolute",right:0,top:0}},variants:{variant:{avatar:{borderRadius:"$round",size:"$7"},text:{height:"$4",width:"100%"},title:{height:"$5",width:"100%"},heading:{height:"$7",width:"100%"},button:{borderRadius:"$default",height:"$6",width:"$8"}},size:{small:{},default:{},large:{}},animation:{ripple:{_after:{animation:"ripple 3s ease-in-out infinite",backgroundImage:`linear-gradient(
            to right,
            token(colors.$neutral.4) 4%,
            token(colors.$neutral.7) 25%,
            token(colors.$neutral.4) 35%
          )`,backgroundSize:"1000px 100%",backgroundRepeat:"no-repeat",borderRadius:"inherit",lineHeight:"$default",width:"100%"}},pulse:{_after:{animation:"pulse 1s alternate ease-in-out infinite",backgroundColor:"$neutral.7"}}}},compoundVariants:[{variant:"button",size:"small",css:{height:"$5",width:"$7"}},{variant:"button",size:"large",css:{height:"$7",width:"$9"}},{variant:"avatar",size:"small",css:{height:"$5",width:"$5"}},{variant:"avatar",size:"large",css:{height:"$9",width:"$9"}}],defaultVariants:{variant:"text",animation:"ripple"}}),a=P(V(D,"c-skeleton"),F),K={title:"Components/Skeleton",component:a},i={},o={args:{variant:"text"}},s={args:{variant:"title"}},e={args:{variant:"title",animation:"pulse"}},r=()=>B(C,{children:[t(a,{variant:"avatar",size:"small"}),t(a,{variant:"avatar"}),t(a,{variant:"avatar",size:"large"})]}),n=()=>B(C,{children:[t(a,{variant:"button",size:"small"}),t(a,{variant:"button"}),t(a,{variant:"button",size:"large"})]});var l,c,p;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(p=(c=i.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var d,m,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: 'text'
  }
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var v,g,h;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: 'title'
  }
}`,...(h=(g=s.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var b,$,z,k,f;e.parameters={...e.parameters,docs:{...(b=e.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: 'title',
    animation: 'pulse'
  }
}`,...(z=($=e.parameters)==null?void 0:$.docs)==null?void 0:z.source},description:{story:"An alternative animation, `pulse`, is available",...(f=(k=e.parameters)==null?void 0:k.docs)==null?void 0:f.description}}};var S,x,w,A,T;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`() => <Inline>
    <Skeleton variant="avatar" size="small" />
    <Skeleton variant="avatar" />
    <Skeleton variant="avatar" size="large" />
  </Inline>`,...(w=(x=r.parameters)==null?void 0:x.docs)==null?void 0:w.source},description:{story:"The `avatar` variant also supports an additional size prop to reflect the sizing on the `Avatar` component.",...(T=(A=r.parameters)==null?void 0:A.docs)==null?void 0:T.description}}};var I,y,_,R,j;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`() => <Inline>
    <Skeleton variant="button" size="small" />
    <Skeleton variant="button" />
    <Skeleton variant="button" size="large" />
  </Inline>`,...(_=(y=n.parameters)==null?void 0:y.docs)==null?void 0:_.source},description:{story:"The `button` variant also supports an additional size prop to reflect the sizing on the `Button` component.",...(j=(R=n.parameters)==null?void 0:R.docs)==null?void 0:j.description}}};const M=["Primary","Text","Title","Animation","Avatar","Buttons"];export{e as Animation,r as Avatar,n as Buttons,i as Primary,o as Text,s as Title,M as __namedExportsOrder,K as default};
//# sourceMappingURL=Skeleton.stories-aae95bf1.js.map

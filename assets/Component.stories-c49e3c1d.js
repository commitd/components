import{a as s}from"./jsx-runtime-03b4ddbf.js";import{a as M,c as O}from"./component-92c13614.js";import{R as p}from"./index-76fb7be0.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-de833af9.js";const l=M("button","c-component"),z={title:"Util/Component",component:l},e={args:{children:"Example"}},r=()=>s(l,{children:s("a",{href:"https://committed.io",children:"link"})}),c=()=>{const i=p.useRef(null);return p.useEffect(()=>{i.current&&i.current.focus()},[]),s(l,{ref:i,children:"Focused"})},o=()=>s(l,{asChild:!0,children:s("a",{href:"https://committed.io",children:"link"})}),n={args:{children:"classes: c-component test",className:"test"}},a={args:{children:"classes: c-component css-generated",className:O({color:"$error"})}},t={args:{children:"classes: c-component css-generated",css:{color:"$success",bg:"$success.2"}}},m={args:{children:"classes: c-component css-generated test",className:"test",css:{color:"$success",bg:"$error"}}};var d,u,h;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: 'Example'
  }
}`,...(h=(u=e.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var g,C,f;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`() => <Component>
    <a href="https://committed.io">link</a>
  </Component>`,...(f=(C=r.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};var N,b,$;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  const button = React.useRef<HTMLButtonElement>(null);
  React.useEffect(() => {
    if (button.current) {
      button.current.focus();
    }
  }, []);
  return <Component ref={button}>Focused</Component>;
}`,...($=(b=c.parameters)==null?void 0:b.docs)==null?void 0:$.source}}};var R,S,E;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`() => <Component asChild>
    <a href="https://committed.io">link</a>
  </Component>`,...(E=(S=o.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var x,k,A;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: 'classes: c-component test',
    className: 'test'
  }
}`,...(A=(k=n.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var W,y,F;a.parameters={...a.parameters,docs:{...(W=a.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    children: 'classes: c-component css-generated',
    className: css({
      color: '$error'
    })
  }
}`,...(F=(y=a.parameters)==null?void 0:y.docs)==null?void 0:F.source}}};var P,_,j;t.parameters={...t.parameters,docs:{...(P=t.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    children: 'classes: c-component css-generated',
    css: {
      color: '$success',
      bg: '$success.2'
    }
  }
}`,...(j=(_=t.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};var B,H,L;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    children: 'classes: c-component css-generated test',
    className: 'test',
    css: {
      color: '$success',
      bg: '$error'
    }
  }
}`,...(L=(H=m.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};const D=["Primary","NormalChild","WithRef","AsChild","ClassName","ClassNameWithCss","Css","CssAndClassName"];export{o as AsChild,n as ClassName,a as ClassNameWithCss,t as Css,m as CssAndClassName,r as NormalChild,e as Primary,c as WithRef,D as __namedExportsOrder,z as default};
//# sourceMappingURL=Component.stories-c49e3c1d.js.map

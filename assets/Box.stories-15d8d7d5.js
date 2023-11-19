import{a as i}from"./jsx-runtime-03b4ddbf.js";import{d as E,c as e}from"./component-92c13614.js";import"./index-76fb7be0.js";import{B as l}from"./Box-f074bc4b.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-de833af9.js";const q={title:"Components/Box",component:l},r={argTypes:{container:{control:{type:"select"},options:["flex","block"],defaultValue:"block",description:"Change the display type of the container to see the effect on the variants of the box."},variant:{control:{type:"select"},options:["grow","max","high","wide","fullscreen"],description:"Some commonly styles are provided as variants for convenience (and improved performance)."}},render:({container:M,...R})=>i(l,{className:E("wrapper",e({backgroundColor:"$default",border:"token(colors.$neutral.3) solid token(sizes.$2)",width:"100%",height:"300px"})),style:{display:M},children:i(l,{className:e({backgroundColor:"$surface.solid",color:"$text",border:"token(colors.$neutral.7) solid token(sizes.$2)",padding:4}),...R,children:"Box"})})},s={args:{children:"Example"}},o={args:{children:"Padding of space.4 (16px)",className:e({p:"$4",border:"solid token(sizes.$1)"})}},n={args:{children:"Margin of space.3 (12px)",className:e({m:"$3",border:"solid token(sizes.$1)"})}},a={args:{children:"Access to theme colors",className:e({m:"$3",p:"$2",border:"solid token(sizes.$1)",backgroundColor:"$primary",color:"$primaryContrast"})}},c={args:{children:"Responsive",className:e({backgroundColor:{base:"$error.bg",sm:"$primary.bg",md:"$info.bg",lg:"$warning.bg",xl:"$success.bg"},m:"$3",p:"$2",border:"solid token(sizes.$1)"})}},t={args:{asChild:!0,children:i("article",{children:"As article"})}};var d,p,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  argTypes: {
    container: {
      control: {
        type: 'select'
      },
      options: ['flex', 'block'],
      defaultValue: 'block',
      description: 'Change the display type of the container to see the effect on the variants of the box.'
    },
    variant: {
      control: {
        type: 'select'
      },
      options: ['grow', 'max', 'high', 'wide', 'fullscreen'],
      description: 'Some commonly styles are provided as variants for convenience (and improved performance).'
    }
  },
  render: ({
    container,
    ...args
  }) => <Box className={cx('wrapper', css({
    backgroundColor: '$default',
    border: 'token(colors.$neutral.3) solid token(sizes.$2)',
    width: '100%',
    height: '300px'
  }))} style={{
    display: container
  }}>
      <Box className={css({
      backgroundColor: '$surface.solid',
      color: '$text',
      border: 'token(colors.$neutral.7) solid token(sizes.$2)',
      padding: 4
    })} {...args}>
        Box
      </Box>
    </Box>
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var g,u,$;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: 'Example'
  }
}`,...($=(u=s.parameters)==null?void 0:u.docs)==null?void 0:$.source}}};var h,b,f;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: 'Padding of space.4 (16px)',
    className: css({
      p: '$4',
      border: 'solid token(sizes.$1)'
    })
  }
}`,...(f=(b=o.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var x,k,y;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: 'Margin of space.3 (12px)',
    className: css({
      m: '$3',
      border: 'solid token(sizes.$1)'
    })
  }
}`,...(y=(k=n.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var C,v,z;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    children: 'Access to theme colors',
    className: css({
      m: '$3',
      p: '$2',
      border: 'solid token(sizes.$1)',
      backgroundColor: '$primary',
      color: '$primaryContrast'
    })
  }
}`,...(z=(v=a.parameters)==null?void 0:v.docs)==null?void 0:z.source}}};var N,w,B;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    children: 'Responsive',
    className: css({
      backgroundColor: {
        base: '$error.bg',
        sm: '$primary.bg',
        md: '$info.bg',
        lg: '$warning.bg',
        xl: '$success.bg'
      },
      m: '$3',
      p: '$2',
      border: 'solid token(sizes.$1)'
    })
  }
}`,...(B=(w=c.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var S,A,P;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    asChild: true,
    children: <article>As article</article>
  }
}`,...(P=(A=t.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};const F=["Default","Primary","Padding","Margin","Colors","Responsive","AsChild"];export{t as AsChild,a as Colors,r as Default,n as Margin,o as Padding,s as Primary,c as Responsive,F as __namedExportsOrder,q as default};
//# sourceMappingURL=Box.stories-15d8d7d5.js.map

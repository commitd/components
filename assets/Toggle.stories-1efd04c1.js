import{a as e,j as r}from"./jsx-runtime-03b4ddbf.js";import{i as D}from"./hooks.esm-cc7a556e.js";import{o as _}from"./mdi-685d5538.js";import{V as u}from"./Variants-32aa23ce.js";import{b as w,s as E,a as F}from"./component-92c13614.js";import"./index-76fb7be0.js";import{$ as N}from"./index-8f6bbdf6.js";import{m,d as q,i as A,b as G,a as H,c as J}from"./Button-23e6de97.js";import{s as K}from"./index-0e8e4850.js";import{I as l}from"./Inline-fdf2c0ff.js";import{S as B}from"./Stack-d8c3aa6d.js";import{S as L}from"./Svg-cfd7f95e.js";import"./Box-f074bc4b.js";import"./Grid-599ad893.js";import"./Tooltip-53dd1a2c.js";import"./extends-98964cd2.js";import"./index-45a327ec.js";import"./index-421204d3.js";import"./index-296a96c6.js";import"./index-77dbc890.js";import"./index-add592e3.js";import"./_commonjsHelpers-de833af9.js";import"./index-f8c8b8ff.js";import"./index-01bbf444.js";import"./index-1a2315aa.js";import"./index-251d008c.js";import"./index-c6da0816.js";import"./index-207695d4.js";import"./Text-561f173c.js";import"./ConditionalWrapper-8865b2c1.js";const M={variant:{solid:Object.assign(Object.assign({},m.solid),{"--hover":"token(colors.$text.secondary)","--focus":"token(colors.$text.secondary)",backgroundColor:"token(colors.colorPalette.text)",color:"token(colors.colorPalette.solid)","--onBackgroundColor":"token(colors.colorPalette.solid)","--onColor":"token(colors.colorPalette.text)"}),outline:Object.assign(Object.assign({},m.outline),{border:"solid 2px","--onBackgroundColor":"token(colors.colorPalette.solid)"}),text:Object.assign(Object.assign({},m.text),{"--onBackgroundColor":"token(colors.colorPalette.solid)"})},destructive:q,size:A},Q=w({base:Object.assign(Object.assign(Object.assign(Object.assign({},G),H),J),{"--onBackgroundColor":"token(colors.colorPalette.solid)","--onColor":"token(colors.colorPalette.text)","&[data-state=on]":{backgroundColor:"var(--onBackgroundColor)",color:"var(--onColor)","--hover":"token(colors.colorPalette.solid)","--focus":"token(colors.colorPalette.solid)"},colorPalette:"$primary"}),variants:M,defaultVariants:{variant:"outline",destructive:!1,size:"default"}}),t=E(F(N,"c-toggle"),Q);t.displayName="Toggle";const Ce={title:"Components/Toggle",component:t},o=a=>e(L,{path:_,...a}),i=({...a})=>e(t,{"aria-label":"Toggle italic",...a,children:e(o,{})}),s=()=>r(l,{children:[e(t,{variant:"solid",children:e(o,{})}),e(t,{variant:"outline",children:e(o,{})}),e(t,{variant:"text",children:e(o,{})})]}),c=()=>r(l,{children:[e(t,{size:"small",children:e(o,{})}),e(t,{size:"default",children:e(o,{})}),e(t,{size:"large",children:e(o,{})})]}),n=()=>r(B,{children:[r(l,{children:[e(t,{variant:"solid",children:e(o,{})}),e(t,{variant:"solid","data-hover":!0,children:e(o,{})}),e(t,{variant:"solid","data-focus":!0,children:e(o,{})}),e(t,{variant:"solid",pressed:!0,children:e(o,{})}),e(t,{variant:"solid",pressed:!0,"data-hover":!0,children:e(o,{})}),e(t,{variant:"solid",pressed:!0,"data-focus":!0,children:e(o,{})}),e(t,{variant:"solid",disabled:!0,children:e(o,{})})]}),r(l,{children:[e(t,{variant:"outline",children:e(o,{})}),e(t,{variant:"outline","data-hover":!0,children:e(o,{})}),e(t,{variant:"outline","data-focus":!0,children:e(o,{})}),e(t,{variant:"outline",pressed:!0,children:e(o,{})}),e(t,{variant:"outline",pressed:!0,"data-hover":!0,children:e(o,{})}),e(t,{variant:"outline",pressed:!0,"data-focus":!0,children:e(o,{})}),e(t,{variant:"outline",disabled:!0,children:e(o,{})})]}),r(l,{children:[e(t,{variant:"text",children:e(o,{})}),e(t,{variant:"text","data-hover":!0,children:e(o,{})}),e(t,{variant:"text","data-focus":!0,children:e(o,{})}),e(t,{variant:"text",pressed:!0,children:e(o,{})}),e(t,{variant:"text",pressed:!0,"data-hover":!0,children:e(o,{})}),e(t,{variant:"text",pressed:!0,"data-focus":!0,children:e(o,{})}),e(t,{variant:"text",disabled:!0,children:e(o,{})})]})]}),d={render:({colors:a})=>{const[g,{toggle:p}]=D(!1);return r(B,{children:[e(u,{pressed:g,component:t,variant:"solid",colorPalette:a,children:e(o,{}),onPressedChange:p}),e(u,{pressed:g,component:t,variant:"outline",colorPalette:a,children:e(o,{}),onPressedChange:p}),e(u,{pressed:g,component:t,variant:"text",colorPalette:a,children:e(o,{}),onPressedChange:p})]})},args:{colors:K.map(a=>`$${a}`)}};var v,h,T;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`({
  ...args
}) => {
  return <Toggle aria-label="Toggle italic" {...args}>
      <Italic />
    </Toggle>;
}`,...(T=(h=i.parameters)==null?void 0:h.docs)==null?void 0:T.source}}};var I,f,b;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`() => <Inline>
    <Toggle variant="solid">
      <Italic />
    </Toggle>
    <Toggle variant="outline">
      <Italic />
    </Toggle>
    <Toggle variant="text">
      <Italic />
    </Toggle>
  </Inline>`,...(b=(f=s.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var x,k,P;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`() => <Inline>
    <Toggle size="small">
      <Italic />
    </Toggle>
    <Toggle size="default">
      <Italic />
    </Toggle>
    <Toggle size="large">
      <Italic />
    </Toggle>
  </Inline>`,...(P=(k=c.parameters)==null?void 0:k.docs)==null?void 0:P.source}}};var C,S,j,V,y;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`() => <Stack>
    <Inline>
      <Toggle variant="solid">
        <Italic />
      </Toggle>
      <Toggle variant="solid" data-hover>
        <Italic />
      </Toggle>
      <Toggle variant="solid" data-focus>
        <Italic />
      </Toggle>
      <Toggle variant="solid" pressed>
        <Italic />
      </Toggle>
      <Toggle variant="solid" pressed data-hover>
        <Italic />
      </Toggle>
      <Toggle variant="solid" pressed data-focus>
        <Italic />
      </Toggle>
      <Toggle variant="solid" disabled>
        <Italic />
      </Toggle>
    </Inline>
    <Inline>
      <Toggle variant="outline">
        <Italic />
      </Toggle>
      <Toggle variant="outline" data-hover>
        <Italic />
      </Toggle>
      <Toggle variant="outline" data-focus>
        <Italic />
      </Toggle>
      <Toggle variant="outline" pressed>
        <Italic />
      </Toggle>
      <Toggle variant="outline" pressed data-hover>
        <Italic />
      </Toggle>
      <Toggle variant="outline" pressed data-focus>
        <Italic />
      </Toggle>
      <Toggle variant="outline" disabled>
        <Italic />
      </Toggle>
    </Inline>
    <Inline>
      <Toggle variant="text">
        <Italic />
      </Toggle>
      <Toggle variant="text" data-hover>
        <Italic />
      </Toggle>
      <Toggle variant="text" data-focus>
        <Italic />
      </Toggle>
      <Toggle variant="text" pressed>
        <Italic />
      </Toggle>
      <Toggle variant="text" pressed data-hover>
        <Italic />
      </Toggle>
      <Toggle variant="text" pressed data-focus>
        <Italic />
      </Toggle>
      <Toggle variant="text" disabled>
        <Italic />
      </Toggle>
    </Inline>
  </Stack>`,...(j=(S=n.parameters)==null?void 0:S.docs)==null?void 0:j.source},description:{story:`This uses the data-* props simulate hover and focus states so they can be compared at the same time.
This prop is not intended for normal use and the toggles here will not interact normally.`,...(y=(V=n.parameters)==null?void 0:V.docs)==null?void 0:y.description}}};var z,O,$;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: ({
    colors
  }) => {
    const [pressed, {
      toggle
    }] = useBoolean(false);
    return <Stack>
        <Variants pressed={pressed} component={Toggle} variant="solid" colorPalette={colors} children={<Italic />} onPressedChange={toggle} />
        <Variants pressed={pressed} component={Toggle} variant="outline" colorPalette={colors} children={<Italic />} onPressedChange={toggle} />
        <Variants pressed={pressed} component={Toggle} variant={'text'} colorPalette={colors} children={<Italic />} onPressedChange={toggle} />
      </Stack>;
  },
  args: {
    colors: (semanticColors.map(c => \`$\${c}\`) as ComponentProps<typeof Toggle>['color'][])
  }
}`,...($=(O=d.parameters)==null?void 0:O.docs)==null?void 0:$.source}}};const Se=["Default","Variant","Sizes","States","SemanticColors"];export{i as Default,d as SemanticColors,c as Sizes,n as States,s as Variant,Se as __namedExportsOrder,Ce as default};
//# sourceMappingURL=Toggle.stories-1efd04c1.js.map

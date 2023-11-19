import{j as c,a as e}from"./jsx-runtime-03b4ddbf.js";import{o as ge,p as ce,q as ue,r as se,s as de,t as pe}from"./mdi-685d5538.js";import{a as X,c as me,b as fe,s as be}from"./component-92c13614.js";import{_ as d}from"./extends-98964cd2.js";import{R as o}from"./index-76fb7be0.js";import{a as he}from"./index-421204d3.js";import{$ as P}from"./index-77dbc890.js";import{$ as Y,a as Te,b as ve}from"./index-d178eb19.js";import{a as Ge}from"./index-8f6bbdf6.js";import{$ as Z}from"./index-45a327ec.js";import{$ as $e}from"./index-c6b1b4f9.js";import{c as Ie,a as xe,b as ee,m as S}from"./Button-23e6de97.js";import{S as k}from"./Stack-d8c3aa6d.js";import{d as E,b as L}from"./Icons-43292f8c.js";import{S as $}from"./Svg-cfd7f95e.js";import"./_commonjsHelpers-de833af9.js";import"./index-add592e3.js";import"./index-7896d420.js";import"./index-f8c8b8ff.js";import"./Box-f074bc4b.js";const R="ToggleGroup",[te,it]=he(R,[Y]),le=Y(),Ce=o.forwardRef((t,r)=>{const{type:g,...n}=t;if(g==="single"){const i=n;return o.createElement(Ve,d({},i,{ref:r}))}if(g==="multiple"){const i=n;return o.createElement(ye,d({},i,{ref:r}))}throw new Error(`Missing prop \`type\` expected on \`${R}\``)}),[oe,ae]=te(R),Ve=o.forwardRef((t,r)=>{const{value:g,defaultValue:n,onValueChange:i=()=>{},...u}=t,[s,a]=Z({prop:g,defaultProp:n,onChange:i});return o.createElement(oe,{scope:t.__scopeToggleGroup,type:"single",value:s?[s]:[],onItemActivate:a,onItemDeactivate:o.useCallback(()=>a(""),[a])},o.createElement(re,d({},u,{ref:r})))}),ye=o.forwardRef((t,r)=>{const{value:g,defaultValue:n,onValueChange:i=()=>{},...u}=t,[s=[],a]=Z({prop:g,defaultProp:n,onChange:i}),f=o.useCallback(v=>a((G=[])=>[...G,v]),[a]),A=o.useCallback(v=>a((G=[])=>G.filter(ie=>ie!==v)),[a]);return o.createElement(oe,{scope:t.__scopeToggleGroup,type:"multiple",value:s,onItemActivate:f,onItemDeactivate:A},o.createElement(re,d({},u,{ref:r})))}),[Re,Ae]=te(R),re=o.forwardRef((t,r)=>{const{__scopeToggleGroup:g,disabled:n=!1,rovingFocus:i=!0,orientation:u,dir:s,loop:a=!0,...f}=t,A=le(g),v=$e(s),G={role:"group",dir:v,...f};return o.createElement(Re,{scope:g,rovingFocus:i,disabled:n},i?o.createElement(Te,d({asChild:!0},A,{orientation:u,dir:v,loop:a}),o.createElement(P.div,d({},G,{ref:r}))):o.createElement(P.div,d({},G,{ref:r})))}),_="ToggleGroupItem",Se=o.forwardRef((t,r)=>{const g=ae(_,t.__scopeToggleGroup),n=Ae(_,t.__scopeToggleGroup),i=le(t.__scopeToggleGroup),u=g.value.includes(t.value),s=n.disabled||t.disabled,a={...t,pressed:u,disabled:s},f=o.useRef(null);return n.rovingFocus?o.createElement(ve,d({asChild:!0},i,{focusable:!s,active:u,ref:f}),o.createElement(O,d({},a,{ref:r}))):o.createElement(O,d({},a,{ref:r}))}),O=o.forwardRef((t,r)=>{const{__scopeToggleGroup:g,value:n,...i}=t,u=ae(_,g),s={role:"radio","aria-checked":t.pressed,"aria-pressed":void 0},a=u.type==="single"?s:void 0;return o.createElement(Ge,d({},a,i,{ref:r,onPressedChange:f=>{f?u.onItemActivate(n):u.onItemDeactivate(n)}}))}),_e=Ce,ke=Se,Pe="c-toggle-group",Ee="c-toggle-item",ne={"--onBackgroundColor":"token(colors.colorPalette.solid)","--onColor":"token(colors.colorPalette.text)"},Le=X(ke,Ee,me(ee,xe,Ie,ne,{borderRadius:"0",border:"none"})),m="solid 2px token(colors.$text)",Oe=Object.assign(Object.assign(Object.assign({},ee),ne),{backgroundColor:"transparent",borderRadius:"$default",width:"fit-content",boxSizing:"border-box",colorPalette:"$primary",_notVertical:{display:"inline-flex","& .c-toggle-item:first-child":{borderTopLeftRadius:"$default",borderBottomLeftRadius:"$default"},"& .c-toggle-item:last-child":{borderTopRightRadius:"$default",borderBottomRightRadius:"$default"}},_vertical:{display:"inline-flex",flexDirection:"column","& .c-toggle-item:first-child":{borderTopLeftRadius:"$default",borderTopRightRadius:"$default"},"& .c-toggle-item:last-child":{borderBottomLeftRadius:"$default",borderBottomRightRadius:"$default"}},"& .c-toggle-item[data-state=on]":{backgroundColor:"var(--onBackgroundColor)",color:"var(--onColor)","--hover":"token(colors.colorPalette.solid)","--focus":"token(colors.colorPalette.solid)"}}),Be={variant:{solid:{"& .c-toggle-item":Object.assign(Object.assign({},S.solid),{color:"token(colors.colorPalette.solid)","--onBackgroundColor":"token(colors.colorPalette.solid)","--onColor":"token(colors.colorPalette.text)"})},outline:{"& .c-toggle-item":Object.assign(Object.assign({},S.outline),{color:"token(colors.$text)","--onBackgroundColor":"token(colors.colorPalette.solid)"}),_notVertical:{"& .c-toggle-item":{borderTop:m,borderBottom:m},"& .c-toggle-item:first-child":{borderLeft:m},"& .c-toggle-item:last-child":{borderRight:m}},_vertical:{"& .c-toggle-item":{borderRight:m,borderLeft:m},"& .c-toggle-item:first-child":{borderTop:m},"& .c-toggle-item:last-child":{borderBottom:m}}},text:{"& .c-toggle-item":Object.assign(Object.assign({},S.text),{"--onBackgroundColor":"token(colors.colorPalette.solid)"})}},size:{small:{"& .c-toggle-item":{width:"$5",height:"$5","& > svg":{width:"$4",height:"$4"}}},default:{"& .c-toggle-item":{width:"$6",height:"$6"}},large:{"& .c-toggle-item":{width:"$7",height:"$7","& > svg":{width:"$6",height:"$6"}}}}},we=fe({base:Oe,variants:Be,defaultVariants:{variant:"outline",size:"default"}}),p=be(X(_e,Pe),we),l=Le,gt={title:"Components/ToggleGroup",component:p,subcomponents:{ToggleGroupItem:l}},ze=t=>e($,{path:ge,...t}),Fe=t=>e($,{path:ce,...t}),je=t=>e($,{path:ue,...t}),b=t=>e($,{path:se,...t}),h=t=>e($,{path:de,...t}),T=t=>e($,{path:pe,...t}),I={render:({...t})=>c(p,{defaultValue:"center","aria-label":"Text alignment",...t,type:"single",children:[e(l,{value:"left","aria-label":"Left aligned",children:e(b,{})}),e(l,{value:"center","aria-label":"Center aligned",children:e(T,{})}),e(l,{value:"right","aria-label":"Right aligned",children:e(h,{})})]})},x=()=>c(k,{children:[c(p,{type:"single",variant:"solid",defaultValue:"left","aria-label":"Variants",children:[e(l,{value:"left","aria-label":"left",children:e(b,{})}),e(l,{value:"center","aria-label":"center",children:e(T,{})}),e(l,{value:"right","aria-label":"right",children:e(h,{})})]}),c(p,{type:"single",variant:"outline",defaultValue:"left","aria-label":"Variants",children:[e(l,{value:"left","aria-label":"left",children:e(b,{})}),e(l,{value:"center","aria-label":"center",children:e(T,{})}),e(l,{value:"right","aria-label":"right",children:e(h,{})})]}),c(p,{type:"single",variant:"text",defaultValue:"left","aria-label":"Variants",children:[e(l,{value:"left","aria-label":"left",children:e(b,{})}),e(l,{value:"center","aria-label":"center",children:e(T,{})}),e(l,{value:"right","aria-label":"right",children:e(h,{})})]})]}),C=()=>c(k,{children:[c(p,{type:"single",size:"small",defaultValue:"left",children:[e(l,{value:"left","aria-label":"left",children:e(b,{})}),e(l,{value:"center","aria-label":"center",children:e(T,{})}),e(l,{value:"right","aria-label":"right",children:e(h,{})})]}),c(p,{type:"single",size:"default",defaultValue:"left",children:[e(l,{value:"left","aria-label":"left",children:e(b,{})}),e(l,{value:"center","aria-label":"center",children:e(T,{})}),e(l,{value:"right","aria-label":"right",children:e(h,{})})]}),c(p,{type:"single",size:"large",defaultValue:"left",children:[e(l,{value:"left","aria-label":"left",children:e(b,{})}),e(l,{value:"center","aria-label":"center",children:e(T,{})}),e(l,{value:"right","aria-label":"right",children:e(h,{})})]})]}),V=()=>c(p,{type:"multiple","aria-label":"Text Styling",children:[e(l,{value:"left","aria-label":"Italic",children:e(ze,{})}),e(l,{value:"center","aria-label":"Bold",children:e(Fe,{})}),e(l,{value:"right","aria-label":"Underline",children:e(je,{})})]}),y=()=>c(k,{children:[c(p,{type:"single",defaultValue:"top","aria-label":"Orientation",orientation:"vertical",children:[e(l,{value:"top","aria-label":"up",children:e(E,{})}),e(l,{value:"bottom","aria-label":"down",children:e(L,{})})]}),c(p,{type:"single",defaultValue:"top","aria-label":"Orientation",orientation:"horizontal",children:[e(l,{value:"top","aria-label":"up",children:e(E,{})}),e(l,{value:"bottom","aria-label":"down",children:e(L,{})})]})]});var B,w,z;I.parameters={...I.parameters,docs:{...(B=I.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: ({
    ...args
  }) => {
    return <ToggleGroup defaultValue="center" aria-label="Text alignment" {...args} type="single">
        <ToggleGroupItem value="left" aria-label="Left aligned">
          <TextAlignLeft />
        </ToggleGroupItem>
        <ToggleGroupItem value="center" aria-label="Center aligned">
          <TextAlignCenter />
        </ToggleGroupItem>
        <ToggleGroupItem value="right" aria-label="Right aligned">
          <TextAlignRight />
        </ToggleGroupItem>
      </ToggleGroup>;
  }
}`,...(z=(w=I.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var F,j,D;x.parameters={...x.parameters,docs:{...(F=x.parameters)==null?void 0:F.docs,source:{originalSource:`() => <Stack>
    <ToggleGroup type="single" variant="solid" defaultValue="left" aria-label="Variants">
      <ToggleGroupItem value="left" aria-label="left">
        <TextAlignLeft />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="center">
        <TextAlignCenter />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="right">
        <TextAlignRight />
      </ToggleGroupItem>
    </ToggleGroup>
    <ToggleGroup type="single" variant="outline" defaultValue="left" aria-label="Variants">
      <ToggleGroupItem value="left" aria-label="left">
        <TextAlignLeft />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="center">
        <TextAlignCenter />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="right">
        <TextAlignRight />
      </ToggleGroupItem>
    </ToggleGroup>
    <ToggleGroup type="single" variant="text" defaultValue="left" aria-label="Variants">
      <ToggleGroupItem value="left" aria-label="left">
        <TextAlignLeft />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="center">
        <TextAlignCenter />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="right">
        <TextAlignRight />
      </ToggleGroupItem>
    </ToggleGroup>
  </Stack>`,...(D=(j=x.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var U,M,N;C.parameters={...C.parameters,docs:{...(U=C.parameters)==null?void 0:U.docs,source:{originalSource:`() => <Stack>
    <ToggleGroup type="single" size="small" defaultValue="left">
      <ToggleGroupItem value="left" aria-label="left">
        <TextAlignLeft />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="center">
        <TextAlignCenter />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="right">
        <TextAlignRight />
      </ToggleGroupItem>
    </ToggleGroup>
    <ToggleGroup type="single" size="default" defaultValue="left">
      <ToggleGroupItem value="left" aria-label="left">
        <TextAlignLeft />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="center">
        <TextAlignCenter />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="right">
        <TextAlignRight />
      </ToggleGroupItem>
    </ToggleGroup>
    <ToggleGroup type="single" size="large" defaultValue="left">
      <ToggleGroupItem value="left" aria-label="left">
        <TextAlignLeft />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="center">
        <TextAlignCenter />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="right">
        <TextAlignRight />
      </ToggleGroupItem>
    </ToggleGroup>
  </Stack>`,...(N=(M=C.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var q,H,J;V.parameters={...V.parameters,docs:{...(q=V.parameters)==null?void 0:q.docs,source:{originalSource:`() => <ToggleGroup type="multiple" aria-label="Text Styling">
    <ToggleGroupItem value="left" aria-label="Italic">
      <Italic />
    </ToggleGroupItem>
    <ToggleGroupItem value="center" aria-label="Bold">
      <Bold />
    </ToggleGroupItem>
    <ToggleGroupItem value="right" aria-label="Underline">
      <Underline />
    </ToggleGroupItem>
  </ToggleGroup>`,...(J=(H=V.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,Q,W;y.parameters={...y.parameters,docs:{...(K=y.parameters)==null?void 0:K.docs,source:{originalSource:`() => <Stack>
    <ToggleGroup type="single" defaultValue="top" aria-label="Orientation" orientation="vertical">
      <ToggleGroupItem value="top" aria-label="up">
        <ChevronUp />
      </ToggleGroupItem>
      <ToggleGroupItem value="bottom" aria-label="down">
        <ChevronDown />
      </ToggleGroupItem>
    </ToggleGroup>
    <ToggleGroup type="single" defaultValue="top" aria-label="Orientation" orientation="horizontal">
      <ToggleGroupItem value="top" aria-label="up">
        <ChevronUp />
      </ToggleGroupItem>
      <ToggleGroupItem value="bottom" aria-label="down">
        <ChevronDown />
      </ToggleGroupItem>
    </ToggleGroup>
  </Stack>`,...(W=(Q=y.parameters)==null?void 0:Q.docs)==null?void 0:W.source}}};const ct=["Default","Variants","Sizes","MultipleSelections","Orientation"];export{I as Default,V as MultipleSelections,y as Orientation,C as Sizes,x as Variants,ct as __namedExportsOrder,gt as default};
//# sourceMappingURL=ToggleGroup.stories-03fffc3a.js.map

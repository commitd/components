import{a as e,j as s}from"./jsx-runtime-03b4ddbf.js";import{b as $,d as w,s as O,a as k}from"./component-92c13614.js";import{H as P}from"./Heading-1229930b.js";import{C as S}from"./ConditionalWrapper-8865b2c1.js";import{T as j}from"./Text-561f173c.js";import{C as x}from"./Flex-1cfc0a73.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./extends-98964cd2.js";import"./Box-f074bc4b.js";var p=globalThis&&globalThis.__rest||function(r,n){var o={};for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&n.indexOf(t)<0&&(o[t]=r[t]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(r);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(r,t[a])&&(o[t[a]]=r[t[a]]);return o};const N="div",W=$({base:{boxSizing:"border-box",border:"1px solid",borderRadius:"$default",display:"flex",flexDirection:"column",gap:"$2",p:"$4",borderColor:"colorPalette.border",color:"colorPalette.text.low",backgroundColor:"colorPalette.outline"},variants:{severity:{ghost:{colorPalette:"$neutral"},warn:{colorPalette:"$warn"},info:{colorPalette:"$info"},success:{colorPalette:"$success"},error:{colorPalette:"$error"}}},defaultVariants:{severity:"ghost"}}),l=r=>{var{children:n,className:o,as:t="h6"}=r,a=p(r,["children","className","as"]);return e("div",{className:w("c-alert-title",o),children:e(P,Object.assign({size:"$1",as:t},a,{children:n}))})};l.displayName="AlertTitle";const E=r=>{var{children:n}=r,o=p(r,["children"]);return e(j,Object.assign({size:"$-1"},o,{children:n}))},c=r=>{var{children:n="",className:o}=r,t=p(r,["children","className"]);return e("div",{className:w("c-alert-content",o),children:e(S,{condition:typeof n=="string",props:t,wrapper:E,children:n??""})})};c.displayName="AlertContent";const i=O(k(N,"c-alert"),W);i.displayName="Alert";const R={title:"Components/Alert",component:i,subcomponents:{AlertTitle:l,AlertContent:c},argTypes:{severity:{control:{type:"select",options:["error","warn","info","success","ghost"]},defaultValue:"error",description:"Set the severity of the alert"}}},h={render:r=>s(i,{...r,children:[e(l,{children:"Alert Title"}),e(c,{children:"This is the alert content, the content is optional but should usually give further explanation about the alert and if any action is required."})]}),args:{}},d={render:()=>s(x,{css:{gap:"$3"},children:[e(i,{severity:"error",children:e(l,{children:"This is an error alert"})}),e(i,{severity:"warn",children:e(l,{children:"This is a warning alert"})}),e(i,{severity:"info",children:e(l,{children:"This is an info alert"})}),e(i,{severity:"success",children:e(l,{children:"This is a success alert"})}),e(i,{severity:"ghost",children:e(l,{children:"This is a ghost alert"})})]})},u={render:()=>s(x,{css:{gap:"$3"},children:[s(i,{severity:"ghost",children:[e(l,{children:"Ghost"}),s(c,{children:["This is a ghost alert — ",e("strong",{children:"check it out!"})]})]}),s(i,{severity:"error",children:[e(l,{children:"Error"}),s(c,{children:["This is an error alert — ",e("strong",{children:"check it out!"})]})]}),s(i,{severity:"warn",children:[e(l,{children:"Warning"}),s(c,{children:["This is a warning alert — ",e("strong",{children:"check it out!"})]})]}),s(i,{severity:"info",children:[e(l,{children:"Info"}),s(c,{children:["This is an info alert — ",e("strong",{children:"check it out!"})]})]}),s(i,{severity:"success",children:[e(l,{children:"Success"}),s(c,{children:["This is a success alert — ",e("strong",{children:"check it out!"})]})]})]})};var A,g,T;h.parameters={...h.parameters,docs:{...(A=h.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => <Alert {...args}>
      <AlertTitle>Alert Title</AlertTitle>
      <AlertContent>
        This is the alert content, the content is optional but should usually
        give further explanation about the alert and if any action is required.
      </AlertContent>
    </Alert>,
  args: {}
}`,...(T=(g=h.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};var m,y,f;d.parameters={...d.parameters,docs:{...(m=d.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <Column css={{
    gap: '$3'
  }}>
      <Alert severity="error">
        <AlertTitle>This is an error alert</AlertTitle>
      </Alert>
      <Alert severity="warn">
        <AlertTitle>This is a warning alert</AlertTitle>
      </Alert>
      <Alert severity="info">
        <AlertTitle>This is an info alert</AlertTitle>
      </Alert>
      <Alert severity="success">
        <AlertTitle>This is a success alert</AlertTitle>
      </Alert>
      <Alert severity="ghost">
        <AlertTitle>This is a ghost alert</AlertTitle>
      </Alert>
    </Column>
}`,...(f=(y=d.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var v,C,b;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <Column css={{
    gap: '$3'
  }}>
      <Alert severity="ghost">
        <AlertTitle>Ghost</AlertTitle>
        <AlertContent>
          This is a ghost alert — <strong>check it out!</strong>
        </AlertContent>
      </Alert>
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        <AlertContent>
          This is an error alert — <strong>check it out!</strong>
        </AlertContent>
      </Alert>
      <Alert severity="warn">
        <AlertTitle>Warning</AlertTitle>
        <AlertContent>
          This is a warning alert — <strong>check it out!</strong>
        </AlertContent>
      </Alert>
      <Alert severity="info">
        <AlertTitle>Info</AlertTitle>
        <AlertContent>
          This is an info alert — <strong>check it out!</strong>
        </AlertContent>
      </Alert>
      <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        <AlertContent>
          This is a success alert — <strong>check it out!</strong>
        </AlertContent>
      </Alert>
    </Column>
}`,...(b=(C=u.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};const U=["Default","Severity","WithContent"];export{h as Default,d as Severity,u as WithContent,U as __namedExportsOrder,R as default};
//# sourceMappingURL=Alert.stories-3460cdd5.js.map

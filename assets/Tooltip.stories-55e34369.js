import{a as t,j as l,F as W}from"./jsx-runtime-03b4ddbf.js";import{s as tt,a as ot,f as et,c as nt}from"./component-92c13614.js";import{R as it}from"./index-76fb7be0.js";import{a as o,T as B}from"./Tooltip-53dd1a2c.js";import{B as e}from"./Button-23e6de97.js";import{a as y}from"./Icons-43292f8c.js";import{I as X}from"./Inline-fdf2c0ff.js";import{F as c}from"./Flex-1cfc0a73.js";import{B as rt}from"./Box-f074bc4b.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-de833af9.js";import"./index-45a327ec.js";import"./index-421204d3.js";import"./index-296a96c6.js";import"./index-77dbc890.js";import"./index-add592e3.js";import"./index-f8c8b8ff.js";import"./index-01bbf444.js";import"./index-1a2315aa.js";import"./index-251d008c.js";import"./index-c6da0816.js";import"./index-207695d4.js";import"./Text-561f173c.js";import"./ConditionalWrapper-8865b2c1.js";import"./Svg-cfd7f95e.js";import"./mdi-685d5538.js";var lt=globalThis&&globalThis.__rest||function(r,T){var a={};for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&T.indexOf(i)<0&&(a[i]=r[i]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(r);s<i.length;s++)T.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(r,i[s])&&(a[i[s]]=r[i[s]]);return a};const at=tt(ot("div","c-margin"),{}),Z=et((r,T)=>{var{children:a}=r,i=lt(r,["children"]);return t(at,Object.assign({asChild:it.Children.count(a)==1},i,{ref:T,children:a}))});Z.displayName="Margin";const kt={title:"Components/Tooltip",component:o,subcomponents:{TooltipProvider:B},decorators:[],excludeStories:["TooltipProvider"]},g=()=>t(o,{content:"OK",children:t(e,{children:t(y,{})})}),p=()=>l(X,{children:[t(o,{open:!0,content:"OK",children:t(e,{children:"Open"})}),t(o,{defaultOpen:!0,content:"OK",children:t(e,{children:"DefaultOpen"})})]}),n=nt({m:"$2"}),f=()=>l(W,{children:[t(Z,{mt:"$4",children:l(c,{justifyContent:"center",children:[t(o,{content:"Tooltip",side:"top",align:"start",children:t(e,{className:n,children:"top-start"})}),t(o,{content:"Tooltip",side:"top",children:t(e,{className:n,children:"top"})}),t(o,{content:"Tooltip",side:"top",align:"end",children:t(e,{className:n,children:"top-end"})})]})}),l(c,{justifyContent:"center",children:[l(c,{alignItems:"flex-start",flexDirection:"column",children:[t(o,{content:"Tooltip",side:"left",align:"start",children:t(e,{className:n,children:"left-start"})}),t(o,{content:"Tooltip",side:"left",children:t(e,{className:n,children:"left"})}),t(o,{content:"Tooltip",side:"left",align:"end",children:t(e,{className:n,children:"left-end"})})]}),t(rt,{width:"200px"}),l(c,{alignItems:"flex-end",flexDirection:"column",children:[t(o,{content:"Tooltip",side:"right",align:"start",children:t(e,{className:n,children:"right-start"})}),t(o,{content:"Tooltip",side:"right",children:t(e,{className:n,children:"right"})}),t(o,{content:"Tooltip",side:"right",align:"end",children:t(e,{className:n,children:"right-end"})})]})]}),l(c,{justifyContent:"center",children:[t(o,{content:"Tooltip",side:"bottom",align:"start",children:t(e,{className:n,children:"bottom-start"})}),t(o,{content:"Tooltip",side:"bottom",children:t(e,{className:n,children:"bottom"})}),t(o,{content:"Tooltip",side:"bottom",align:"end",children:t(e,{className:n,children:"bottom-end"})})]})]}),d=()=>t(o,{multiline:!0,content:"This is a long tooltip so the width needs to be limited by adding the multiline prop. OK",children:t(e,{children:t(y,{})})}),m=()=>t(W,{children:l(B,{skipDelayDuration:0,children:[t(o,{delayDuration:500,content:"OK",children:t(e,{className:n,children:"Delay 500ms"})}),t(o,{delayDuration:2e3,content:"OK",children:t(e,{children:"Delay 2s"})})]})}),u=()=>l(X,{children:[t(o,{content:"Portalled",portalled:!0,children:t(e,{children:t(y,{})})}),t(o,{content:"Not Portalled",portalled:!1,children:t(e,{children:t(y,{})})})]}),h=()=>l(B,{delayDuration:1e3,skipDelayDuration:100,children:[t(o,{content:"OK",children:t(e,{className:n,children:"Delay 1s"})}),t(o,{delayDuration:50,content:"OK",children:t(e,{children:"Delay 50ms"})})]});var D,O,b;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`() => <Tooltip content="OK">
    <Button>
      <Check />
    </Button>
  </Tooltip>`,...(b=(O=g.parameters)==null?void 0:O.docs)==null?void 0:b.source}}};var w,x,N,v,P;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`() => <Inline>
    <Tooltip open={true} content="OK">
      <Button>Open</Button>
    </Tooltip>
    <Tooltip defaultOpen content="OK">
      <Button>DefaultOpen</Button>
    </Tooltip>
  </Inline>`,...(N=(x=p.parameters)==null?void 0:x.docs)==null?void 0:N.source},description:{story:"The `open` state can be controlled, or you can start a tooltip open then it behaves normally using `defaultOpen`",...(P=(v=p.parameters)==null?void 0:v.docs)==null?void 0:P.description}}};var M,K,j;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`() => <>
    <Margin mt="$4">
      <Flex justifyContent="center">
        <Tooltip content="Tooltip" side="top" align="start">
          <Button className={withMargin}>top-start</Button>
        </Tooltip>
        <Tooltip content="Tooltip" side="top">
          <Button className={withMargin}>top</Button>
        </Tooltip>
        <Tooltip content="Tooltip" side="top" align="end">
          <Button className={withMargin}>top-end</Button>
        </Tooltip>
      </Flex>
    </Margin>
    <Flex justifyContent="center">
      <Flex alignItems="flex-start" flexDirection="column">
        <Tooltip content="Tooltip" side="left" align="start">
          <Button className={withMargin}>left-start</Button>
        </Tooltip>
        <Tooltip content="Tooltip" side="left">
          <Button className={withMargin}>left</Button>
        </Tooltip>
        <Tooltip content="Tooltip" side="left" align="end">
          <Button className={withMargin}>left-end</Button>
        </Tooltip>
      </Flex>
      <Box width={'200px'} />
      <Flex alignItems="flex-end" flexDirection="column">
        <Tooltip content="Tooltip" side="right" align="start">
          <Button className={withMargin}>right-start</Button>
        </Tooltip>
        <Tooltip content="Tooltip" side="right">
          <Button className={withMargin}>right</Button>
        </Tooltip>
        <Tooltip content="Tooltip" side="right" align="end">
          <Button className={withMargin}>right-end</Button>
        </Tooltip>
      </Flex>
    </Flex>
    <Flex justifyContent="center">
      <Tooltip content="Tooltip" side="bottom" align="start">
        <Button className={withMargin}>bottom-start</Button>
      </Tooltip>
      <Tooltip content="Tooltip" side="bottom">
        <Button className={withMargin}>bottom</Button>
      </Tooltip>
      <Tooltip content="Tooltip" side="bottom" align="end">
        <Button className={withMargin}>bottom-end</Button>
      </Tooltip>
    </Flex>
  </>`,...(j=(K=f.parameters)==null?void 0:K.docs)==null?void 0:j.source}}};var C,F,I,k,S;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`() => <Tooltip multiline content="This is a long tooltip so the width needs to be limited by adding the multiline prop. OK">
    <Button>
      <Check />
    </Button>
  </Tooltip>`,...(I=(F=d.parameters)==null?void 0:F.docs)==null?void 0:I.source},description:{story:"Add `multiline` to wrap longer messages.",...(S=(k=d.parameters)==null?void 0:k.docs)==null?void 0:S.description}}};var _,E,R,$,A;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`() => <>
    <TooltipProvider skipDelayDuration={0}>
      <Tooltip delayDuration={500} content="OK">
        <Button className={withMargin}>Delay 500ms</Button>
      </Tooltip>
      <Tooltip delayDuration={2000} content="OK">
        <Button>Delay 2s</Button>
      </Tooltip>
    </TooltipProvider>
  </>`,...(R=(E=m.parameters)==null?void 0:E.docs)==null?void 0:R.source},description:{story:"The delay duration can be controlled\n\n- `delayDuration` - The duration from when the mouse enters the trigger until the tooltip opens.\n- `skipDelayDuration` - Available on TooltipProvider - How much time a user has to enter another trigger without incurring a delay again.",...(A=($=m.parameters)==null?void 0:$.docs)==null?void 0:A.description}}};var H,q,G,Y,z;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`() => <Inline>
    <Tooltip content="Portalled" portalled>
      <Button>
        <Check />
      </Button>
    </Tooltip>
    <Tooltip content="Not Portalled" portalled={false}>
      <Button>
        <Check />
      </Button>
    </Tooltip>
  </Inline>`,...(G=(q=u.parameters)==null?void 0:q.docs)==null?void 0:G.source},description:{story:"By default the tooltip is rendered using a react portal. However, this can cause issues in rare circumstances.\n\nYou can turn off the use of portals with the `portalled` prop, but in most situations they should work correctly with the default.",...(z=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:z.description}}};var J,L,Q,U,V;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`() => <TooltipProvider delayDuration={1000} skipDelayDuration={100}>
    <Tooltip content="OK">
      <Button className={withMargin}>Delay 1s</Button>
    </Tooltip>
    <Tooltip delayDuration={50} content="OK">
      <Button>Delay 50ms</Button>
    </Tooltip>
  </TooltipProvider>`,...(Q=(L=h.parameters)==null?void 0:L.docs)==null?void 0:Q.source},description:{story:"Global options for tooltip can be provided using the `TooltipProvider`.\nThe provider is not required.\n\nIt is also contained in the general `ThemeProvider` with it's props exposed.\nThe delayDuration can still be overridden for particular tooltips.",...(V=(U=h.parameters)==null?void 0:U.docs)==null?void 0:V.description}}};const St=["Default","Open","Placement","Multiline","Delay","Portalled","Provider"];export{g as Default,m as Delay,d as Multiline,p as Open,f as Placement,u as Portalled,h as Provider,St as __namedExportsOrder,kt as default};
//# sourceMappingURL=Tooltip.stories-55e34369.js.map

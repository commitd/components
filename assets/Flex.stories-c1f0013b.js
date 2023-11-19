import{j as a,a as e}from"./jsx-runtime-03b4ddbf.js";import{t as o,c as r}from"./component-92c13614.js";import"./index-76fb7be0.js";import{F as z,R as je,C as Ae}from"./Flex-1cfc0a73.js";import{B as s}from"./Box-f074bc4b.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-de833af9.js";const Ge={title:"Components/Flex",component:z},c=()=>a(z,{children:[e(s,{css:{p:"$3",backgroundColor:"$success",color:"$success.text.contrast"},children:"Box"}),e(s,{css:{p:"$3",backgroundColor:"$warn",color:"$warn.text.contrast"},children:"Box"}),e(s,{css:{p:"$3",backgroundColor:"$error",color:"$error.text.contrast"},children:"Box"})]}),S={render:({box1:k={},box2:F={},box3:B,...j})=>e(s,{css:{size:"$10",border:"solid"},children:a(z,{...j,children:[e(s,{css:{size:"$5",backgroundColor:"$success"},style:k}),e(s,{css:{size:"$5",backgroundColor:"$warn"},style:F}),e(s,{css:{size:"$5",backgroundColor:"$error"},style:B})]})})},i={...S,args:{gap:!0}},l={...S,args:{wrap:!0,box1:{width:o("sizes.$6")},box2:{width:o("sizes.$7")},box3:{width:o("sizes.$8")}}},d={...S,args:{centered:!0,box1:{height:o("sizes.$7")},box2:{height:o("sizes.$9")},box3:{height:o("sizes.$6")}}},u={...S,args:{spaced:!0}},n={render:({box1:k={},box2:F={},box3:B,...j})=>e(s,{css:{size:"$10",border:"solid"},children:a(z,{css:j,children:[e(s,{css:{size:"$5",backgroundColor:"$success"},style:k}),e(s,{css:{size:"$5",backgroundColor:"$warn"},style:F}),e(s,{css:{size:"$5",backgroundColor:"$error"},style:B})]})})},p={...n,args:r.raw({justifyContent:"flex-start"})},g={...n,args:r.raw({justifyContent:"flex-end"})},m={...n,args:r.raw({justifyContent:"center"})},x={...n,args:r.raw({justifyContent:"space-between"})},$={...n,args:r.raw({justifyContent:"space-around"})},C={...n,args:r.raw({justifyContent:"center",alignItems:"flex-start"})},b={...n,args:r.raw({justifyContent:"center",alignItems:"flex-end"})},w={...n,args:r.raw({justifyContent:"center",alignItems:"center"})},f={...n,args:r.raw({justifyContent:"center",alignItems:"stretch"})},y={...n,args:{...r.raw({justifyContent:"center",alignItems:"baseline"}),box1:{height:o("sizes.$7")},box2:{height:o("sizes.$9")},box3:{height:o("sizes.$6")}}},t=()=>e(s,{css:{size:"$10",border:"solid"},children:a(je,{children:[e(s,{css:{size:"$5",backgroundColor:"$success"}}),e(s,{css:{size:"$5",backgroundColor:"$warn"}}),e(s,{css:{size:"$5",backgroundColor:"$error"}})]})}),h=()=>e(s,{css:{size:"$10",border:"solid"},children:a(Ae,{children:[e(s,{css:{size:"$5",backgroundColor:"$success"}}),e(s,{css:{size:"$5",backgroundColor:"$warn"}}),e(s,{css:{size:"$5",backgroundColor:"$error"}})]})});var A,I,J;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`() => <Flex>
    <Box css={{
    p: '$3',
    backgroundColor: '$success',
    color: '$success.text.contrast'
  }}>
      Box
    </Box>
    <Box css={{
    p: '$3',
    backgroundColor: '$warn',
    color: '$warn.text.contrast'
  }}>
      Box
    </Box>
    <Box css={{
    p: '$3',
    backgroundColor: '$error',
    color: '$error.text.contrast'
  }}>
      Box
    </Box>
  </Flex>`,...(J=(I=c.parameters)==null?void 0:I.docs)==null?void 0:J.source}}};var E,R,U;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  ...Utils,
  args: {
    gap: true
  }
}`,...(U=(R=i.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};var D,_,G;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  ...Utils,
  args: {
    wrap: true,
    box1: {
      width: token('sizes.$6')
    },
    box2: {
      width: token('sizes.$7')
    },
    box3: {
      width: token('sizes.$8')
    }
  }
}`,...(G=(_=l.parameters)==null?void 0:_.docs)==null?void 0:G.source}}};var W,v,O;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  ...Utils,
  args: {
    centered: true,
    box1: {
      height: token('sizes.$7')
    },
    box2: {
      height: token('sizes.$9')
    },
    box3: {
      height: token('sizes.$6')
    }
  }
}`,...(O=(v=d.parameters)==null?void 0:v.docs)==null?void 0:O.source}}};var q,H,K;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  ...Utils,
  args: {
    spaced: true
  }
}`,...(K=(H=u.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};var L,M,N;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  ...FlexStory,
  args: css.raw({
    justifyContent: 'flex-start'
  })
}`,...(N=(M=p.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var P,Q,T;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
  ...FlexStory,
  args: css.raw({
    justifyContent: 'flex-end'
  })
}`,...(T=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:T.source}}};var V,X,Y;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  ...FlexStory,
  args: css.raw({
    justifyContent: 'center'
  })
}`,...(Y=(X=m.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,se;x.parameters={...x.parameters,docs:{...(Z=x.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  ...FlexStory,
  args: css.raw({
    justifyContent: 'space-between'
  })
}`,...(se=(ee=x.parameters)==null?void 0:ee.docs)==null?void 0:se.source}}};var re,ne,oe;$.parameters={...$.parameters,docs:{...(re=$.parameters)==null?void 0:re.docs,source:{originalSource:`{
  ...FlexStory,
  args: css.raw({
    justifyContent: 'space-around'
  })
}`,...(oe=(ne=$.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var te,ae,ce;C.parameters={...C.parameters,docs:{...(te=C.parameters)==null?void 0:te.docs,source:{originalSource:`{
  ...FlexStory,
  args: css.raw({
    justifyContent: 'center',
    alignItems: 'flex-start'
  })
}`,...(ce=(ae=C.parameters)==null?void 0:ae.docs)==null?void 0:ce.source}}};var ie,le,de;b.parameters={...b.parameters,docs:{...(ie=b.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  ...FlexStory,
  args: css.raw({
    justifyContent: 'center',
    alignItems: 'flex-end'
  })
}`,...(de=(le=b.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var ue,pe,ge;w.parameters={...w.parameters,docs:{...(ue=w.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  ...FlexStory,
  args: css.raw({
    justifyContent: 'center',
    alignItems: 'center'
  })
}`,...(ge=(pe=w.parameters)==null?void 0:pe.docs)==null?void 0:ge.source}}};var me,xe,$e;f.parameters={...f.parameters,docs:{...(me=f.parameters)==null?void 0:me.docs,source:{originalSource:`{
  ...FlexStory,
  args: css.raw({
    justifyContent: 'center',
    alignItems: 'stretch'
  })
}`,...($e=(xe=f.parameters)==null?void 0:xe.docs)==null?void 0:$e.source}}};var Ce,be,we;y.parameters={...y.parameters,docs:{...(Ce=y.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  ...FlexStory,
  args: {
    ...css.raw({
      justifyContent: 'center',
      alignItems: 'baseline'
    }),
    box1: {
      height: token('sizes.$7')
    },
    box2: {
      height: token('sizes.$9')
    },
    box3: {
      height: token('sizes.$6')
    }
  }
}`,...(we=(be=y.parameters)==null?void 0:be.docs)==null?void 0:we.source}}};var fe,ye,he,ze,Se;t.parameters={...t.parameters,docs:{...(fe=t.parameters)==null?void 0:fe.docs,source:{originalSource:`() => <Box css={{
  size: '$10',
  border: 'solid'
}}>
    <Row>
      <Box css={{
      size: '$5',
      backgroundColor: '$success'
    }} />
      <Box css={{
      size: '$5',
      backgroundColor: '$warn'
    }} />
      <Box css={{
      size: '$5',
      backgroundColor: '$error'
    }} />
    </Row>
  </Box>`,...(he=(ye=t.parameters)==null?void 0:ye.docs)==null?void 0:he.source},description:{story:'For convenience we also export `Row` and `Column` components as aliases for `flexDirection="row"` and `flexDirection="column"`.',...(Se=(ze=t.parameters)==null?void 0:ze.docs)==null?void 0:Se.description}}};var ke,Fe,Be;h.parameters={...h.parameters,docs:{...(ke=h.parameters)==null?void 0:ke.docs,source:{originalSource:`() => <Box css={{
  size: '$10',
  border: 'solid'
}}>
    <Column>
      <Box css={{
      size: '$5',
      backgroundColor: '$success'
    }} />
      <Box css={{
      size: '$5',
      backgroundColor: '$warn'
    }} />
      <Box css={{
      size: '$5',
      backgroundColor: '$error'
    }} />
    </Column>
  </Box>`,...(Be=(Fe=h.parameters)==null?void 0:Fe.docs)==null?void 0:Be.source}}};const We=["Default","Gap","Wrap","Centered","Spaced","JustifyFlexStart","JustifyFlexEnd","JustifyCenterEnd","JustifySpaceBetween","JustifySpaceAround","AlignFlexStart","AlignFlexEnd","AlignCenter","AlignStretch","AlignBaseline","FlexRow","FlexColumn"];export{y as AlignBaseline,w as AlignCenter,b as AlignFlexEnd,C as AlignFlexStart,f as AlignStretch,d as Centered,c as Default,h as FlexColumn,t as FlexRow,i as Gap,m as JustifyCenterEnd,g as JustifyFlexEnd,p as JustifyFlexStart,$ as JustifySpaceAround,x as JustifySpaceBetween,u as Spaced,l as Wrap,We as __namedExportsOrder,Ge as default};
//# sourceMappingURL=Flex.stories-c1f0013b.js.map

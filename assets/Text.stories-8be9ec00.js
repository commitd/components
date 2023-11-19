import{a as e,j as s,F as qe}from"./jsx-runtime-03b4ddbf.js";import{c as i,a as ze}from"./component-92c13614.js";import"./index-76fb7be0.js";import{T as t,P as r,M as x,C as b,S as a,a as T}from"./Text-561f173c.js";import{C as v,R as S}from"./Flex-1cfc0a73.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-de833af9.js";import"./Box-f074bc4b.js";const De={title:"Components/Text",component:t,subcomponents:{Paragraph:r,Monospace:x,Caption:b,Span:a,Strike:T},argTypes:{size:{control:{type:"range",min:-2,max:8,step:1}},weight:{control:{type:"radio",options:["light","regular","bold"]}},font:{control:{type:"radio",options:["default","system","display","monospace"]}},italic:{control:{type:"boolean"}},nowrap:{control:{type:"boolean"}}}},f={render:({size:Se=0,...ye})=>e(t,{size:`$${Se}`,...ye}),args:{children:"This is the regular text using the default settings in a longer paragraph, the sort you might read in a blog post. The reason we are using prose here is because the most common use case for this container size is long form text. So we're previewing some longform text here so we can make sure the container width provides an optimal line length for this font size."}},o={render:()=>s(v,{children:[e(t,{size:"$-2",children:"Size -2"}),e(t,{size:"$-1",children:"Size -1"}),e(t,{size:"$0",children:"Size 0 (Default)"}),e(t,{size:"$1",children:"Size 1"}),e(t,{size:"$2",children:"Size 2"}),e(t,{size:"$3",children:"Size 3"}),e(t,{size:"$4",children:"Size 4"}),e(t,{size:"$5",children:"Size 5"}),e(t,{size:"$6",children:"Size 6"}),e(t,{size:"$7",children:"Size 7"}),e(t,{size:"$8",children:"Size 8"})]})},u={render:()=>s(S,{css:{justifyContent:"space-between"},children:[e(t,{weight:"light",children:"Light text"}),e(t,{weight:"regular",children:"Regular text"}),e(t,{weight:"bold",children:"Bold text"})]})},l={render:()=>s(v,{children:[e(t,{font:"default",children:"Default font is Inter"}),e(t,{font:"system",children:"System uses the system font, so is platform dependent, should not be used were layout is critical."}),e(t,{font:"monospace",children:"Monospace font can be set here but a separate pre based component is also available."}),e(t,{font:"display",children:"An additional display font is also supplied. This is likely only for use in, say, website/blog post headings where a visual contrast is desired."})]})},c={render:()=>s(S,{css:{justifyContent:"space-around",flexWrap:"wrap",alignItems:"baseline"},children:[e(t,{weight:"light",children:"Light"}),e(t,{weight:"bold",children:"Bold"}),e(t,{className:i({textTransform:"uppercase"}),children:"uppercase"}),e(t,{className:i({textTransform:"capitalize"}),children:"capitalize"}),e(t,{italic:!0,children:"Italic"}),e(t,{className:i({color:"$primary"}),children:"Primary"}),e(t,{className:i({color:"$textSecondary"}),children:"Secondary"}),e(t,{asChild:!0,children:e("s",{children:"strikethrough"})}),e(t,{asChild:!0,className:i({textTransform:"capitalize"}),weight:"bold",italic:!0,children:e("s",{children:"multiple"})})]})},m={render:()=>s(S,{css:{justifyContent:"space-around",flexWrap:"wrap",alignItems:"baseline",gap:"$4"},children:[s(t,{children:["This is ",e(t,{weight:"light",children:"Light"})," text"]}),s(t,{children:["This is ",e(a,{weight:"bold",children:"Bold"})," text"]}),s(t,{children:["This is"," ",e(a,{className:i({textTransform:"uppercase"}),children:"uppercase"})," ","text"]}),s(t,{children:["This is"," ",e(a,{className:i({textTransform:"capitalize"}),children:"capitals"})," ","text"]}),s(t,{children:["This is ",e(a,{italic:!0,children:"Italic"})," text"]}),s(t,{children:["This is ",e(x,{inline:!0,children:"monospaced"})," text"]}),s(t,{children:["This is ",e(a,{className:i({color:"$primary"}),children:"Primary"})," text"]}),s(t,{children:["This is"," ",e(a,{className:i({color:"$textSecondary"}),children:"Secondary"})," text"]}),s(t,{children:["This is ",e(T,{children:"strikethrough"})," text"]}),s(t,{children:["This is"," ",e(T,{weight:"bold",italic:!0,children:"multiple"})," ","text"]})]})},p={...f,args:{nowrap:!0,children:"This long line should be truncated, consectetur adipiscing elit. Nam bibendum, nisl a fermentum viverra, diam urna efficitur ante, sit amet condimentum dolor tellus in augue. Vivamus eu nulla risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec purus mi. Morbi pretium massa sem, ac semper elit dictum in. Suspendisse hendrerit lorem quis lobortis pellentesque. Ut blandit efficitur urna eu fermentum. Phasellus venenatis pretium quam, eget elementum enim congue non. Nunc vitae quam semper, mollis augue ac, facilisis sem. Sed justo urna, accumsan nec congue eu, hendrerit vel purus. Maecenas ultricies luctus nisi a pharetra."}},d={render:()=>s(qe,{children:[e(r,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam bibendum, nisl a fermentum viverra, diam urna efficitur ante, sit amet condimentum dolor tellus in augue. Vivamus eu nulla risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec purus mi. Morbi pretium massa sem, ac semper elit dictum in. Suspendisse hendrerit lorem quis lobortis pellentesque. Ut blandit efficitur urna eu fermentum. Phasellus venenatis pretium quam, eget elementum enim congue non. Nunc vitae quam semper, mollis augue ac, facilisis sem. Sed justo urna, accumsan nec congue eu, hendrerit vel purus. Maecenas ultricies luctus nisi a pharetra."}),e(r,{children:"Aenean nec pretium turpis, et vulputate libero. Sed pharetra risus elit. Vivamus quis facilisis felis, at mollis tortor. Duis enim massa, lobortis eget semper sit amet, tristique nec lacus. Ut malesuada odio consectetur lobortis iaculis. Vestibulum elementum, turpis et venenatis aliquam, urna neque iaculis erat, a pellentesque ex nibh eu mi. Quisque id vehicula ipsum. Ut lacinia egestas congue. Curabitur laoreet tortor sapien, vitae ornare sem porttitor sit amet. Cras congue lorem ullamcorper, venenatis mi id, suscipit nisl."}),e(r,{children:"Suspendisse gravida sed ipsum a malesuada. Nulla facilisi. Suspendisse mollis purus eget risus mattis facilisis. Pellentesque eu est efficitur, porttitor justo vel, mollis felis. Morbi et tortor nulla. Nullam mattis quis arcu nec dignissim. Nam malesuada, lorem id gravida ultricies, odio libero blandit sem, quis dictum mi neque eget justo. Nulla ultrices, nunc sit amet luctus facilisis, mi augue viverra metus, ac eleifend risus nibh nec est. Maecenas sit amet rhoncus turpis. Sed ac arcu id diam tincidunt porta pulvinar vel enim."}),e(r,{children:"Phasellus quis hendrerit nisl, sit amet hendrerit est. Sed vitae eleifend augue. Donec imperdiet, magna sit amet tempus tristique, ante mi rhoncus eros, nec porttitor erat turpis eget justo. Nulla non aliquam tellus, sed hendrerit urna. Aliquam purus arcu, tempor nec lacinia ac, vulputate et nibh. Praesent vitae leo lacus. Mauris elementum vitae eros id congue. Integer dapibus bibendum diam, a aliquet nunc. Aliquam erat volutpat. Duis aliquam vel nunc vitae pulvinar. Cras justo ipsum, suscipit ac imperdiet hendrerit, pharetra sit amet est. Quisque nec nisi erat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam iaculis rhoncus condimentum."}),e(r,{children:"Integer semper massa vitae lorem ullamcorper faucibus. Suspendisse augue diam, viverra id molestie quis, semper vel velit. Vivamus ac porttitor nibh, ut sollicitudin neque. Cras viverra pretium eros ac condimentum. Sed eget nunc faucibus, luctus justo id, commodo erat. Nulla vestibulum hendrerit tellus at tincidunt. Suspendisse erat felis, venenatis sed turpis id, efficitur elementum libero. Integer convallis in est vel euismod. Curabitur vitae orci vitae justo venenatis rhoncus. Donec eget lorem efficitur, posuere velit quis, egestas nisi. Vivamus non lacus a turpis blandit sodales vitae nec lacus."})]}),parameters:{title:"Paragraph"}},h={render:()=>e(b,{children:"To be used for captions"}),parameters:{title:"Caption"}},g={render:()=>e(x,{children:"To be used for pre components, uses the monospace font."}),parameters:{title:"Monospace"}},we=ze(v,i({"& .c-paragraph":{color:"token(colors.$success.9)"},"& .c-caption":{color:"token(colors.$error.9)"}})),n=()=>s(we,{children:[e(t,{children:"This Text should NOT be styled"}),e(r,{children:"This Paragraph should be styled"}),e(b,{children:"This Caption should be styled differently"})]});n.parameters={docs:{source:{code:`
const Wrapper = component(Column, {
  [\`& \${Paragraph}\`]: {
    color: '$success9',
  },
  [\`& \${Caption}\`]: {
    color: '$error9',
  },
})

export const NestingClassNameTest: Story = () => (
  <Wrapper>
    <Text>This Text should NOT be styled</Text>
    <Paragraph>This Paragraph should be styled</Paragraph>
    <Caption>This Caption should be styled differently</Caption>
  </Wrapper>
)
  `}}};var y,q,z;f.parameters={...f.parameters,docs:{...(y=f.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: ({
    size = 0,
    ...args
  }) => <Text size={(\`$\${size}\` as ComponentProps<typeof Text>['size'])} {...args} />,
  args: {
    children: "This is the regular text using the default settings in a longer paragraph, the sort you might read in a blog post. The reason we are using prose here is because the most common use case for this container size is long form text. So we're previewing some longform text here so we can make sure the container width provides an optimal line length for this font size."
  }
}`,...(z=(q=f.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var w,C,N,$,P;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <Column>
      <Text size="$-2">Size -2</Text>
      <Text size="$-1">Size -1</Text>
      <Text size="$0">Size 0 (Default)</Text>
      <Text size="$1">Size 1</Text>
      <Text size="$2">Size 2</Text>
      <Text size="$3">Size 3</Text>
      <Text size="$4">Size 4</Text>
      <Text size="$5">Size 5</Text>
      <Text size="$6">Size 6</Text>
      <Text size="$7">Size 7</Text>
      <Text size="$8">Size 8</Text>
    </Column>
}`,...(N=(C=o.parameters)==null?void 0:C.docs)==null?void 0:N.source},description:{story:"The text is available in 11 size ranging from `-2` to `8` with 0 the default.",...(P=($=o.parameters)==null?void 0:$.docs)==null?void 0:P.description}}};var M,j,I,k,D;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <Row css={{
    justifyContent: 'space-between'
  }}>
      <Text weight="light">Light text</Text>
      <Text weight="regular">Regular text</Text>
      <Text weight="bold">Bold text</Text>
    </Row>
}`,...(I=(j=u.parameters)==null?void 0:j.docs)==null?void 0:I.source},description:{story:`Light, regular and bold can be set with the weight prop. The fonts are supplied in these weights.
Other weights can be set through the css if required.`,...(D=(k=u.parameters)==null?void 0:k.docs)==null?void 0:D.description}}};var V,W,A,L,R;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <Column>
      <Text font="default">Default font is Inter</Text>
      <Text font="system">
        System uses the system font, so is platform dependent, should not be
        used were layout is critical.
      </Text>
      <Text font="monospace">
        Monospace font can be set here but a separate pre based component is
        also available.
      </Text>
      <Text font="display">
        An additional display font is also supplied. This is likely only for use
        in, say, website/blog post headings where a visual contrast is desired.
      </Text>
    </Column>
}`,...(A=(W=l.parameters)==null?void 0:W.docs)==null?void 0:A.source},description:{story:"A set of fonts for most use cases is supplied.",...(R=(L=l.parameters)==null?void 0:L.docs)==null?void 0:R.description}}};var Q,U,B,O,F;c.parameters={...c.parameters,docs:{...(Q=c.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <Row css={{
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    alignItems: 'baseline'
  }}>
      <Text weight="light">Light</Text>
      <Text weight="bold">Bold</Text>
      <Text className={css({
      textTransform: 'uppercase'
    })}>uppercase</Text>
      <Text className={css({
      textTransform: 'capitalize'
    })}>capitalize</Text>
      <Text italic>Italic</Text>
      <Text className={css({
      color: '$primary'
    })}>Primary</Text>
      <Text className={css({
      color: '$textSecondary'
    })}>Secondary</Text>
      <Text asChild>
        <s>strikethrough</s>
      </Text>
      <Text asChild className={css({
      textTransform: 'capitalize'
    })} weight="bold" italic>
        <s>multiple</s>
      </Text>
    </Row>
}`,...(B=(U=c.parameters)==null?void 0:U.docs)==null?void 0:B.source},description:{story:"Demonstration of how different styles can be achieved.",...(F=(O=c.parameters)==null?void 0:O.docs)==null?void 0:F.description}}};var _,E,G,H,J;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <Row css={{
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    alignItems: 'baseline',
    gap: '$4'
  }}>
      <Text>
        This is <Text weight="light">Light</Text> text
      </Text>
      <Text>
        This is <Span weight="bold">Bold</Span> text
      </Text>
      <Text>
        This is{' '}
        <Span className={css({
        textTransform: 'uppercase'
      })}>uppercase</Span>{' '}
        text
      </Text>
      <Text>
        This is{' '}
        <Span className={css({
        textTransform: 'capitalize'
      })}>capitals</Span>{' '}
        text
      </Text>
      <Text>
        This is <Span italic>Italic</Span> text
      </Text>
      <Text>
        This is <Monospace inline>monospaced</Monospace> text
      </Text>
      <Text>
        This is <Span className={css({
        color: '$primary'
      })}>Primary</Span> text
      </Text>
      <Text>
        This is{' '}
        <Span className={css({
        color: '$textSecondary'
      })}>Secondary</Span> text
      </Text>
      <Text>
        This is <Strike>strikethrough</Strike> text
      </Text>
      <Text>
        This is{' '}
        <Strike weight="bold" italic>
          multiple
        </Strike>{' '}
        text
      </Text>
    </Row>
}`,...(G=(E=m.parameters)==null?void 0:E.docs)==null?void 0:G.source},description:{story:"Text components use span by default, but have display block. The Span component has the display set to inline so is better suited to nested bits of text.",...(J=(H=m.parameters)==null?void 0:H.docs)==null?void 0:J.description}}};var K,X,Y,Z,ee;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`{
  ...Default,
  args: {
    nowrap: true,
    children: 'This long line should be truncated, consectetur adipiscing elit. Nam bibendum, nisl a fermentum viverra, diam urna efficitur ante, sit amet condimentum dolor tellus in augue. Vivamus eu nulla risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec purus mi. Morbi pretium massa sem, ac semper elit dictum in. Suspendisse hendrerit lorem quis lobortis pellentesque. Ut blandit efficitur urna eu fermentum. Phasellus venenatis pretium quam, eget elementum enim congue non. Nunc vitae quam semper, mollis augue ac, facilisis sem. Sed justo urna, accumsan nec congue eu, hendrerit vel purus. Maecenas ultricies luctus nisi a pharetra.'
  }
}`,...(Y=(X=p.parameters)==null?void 0:X.docs)==null?void 0:Y.source},description:{story:"A `nowrap` prop adds style to truncate the text with elipsis.",...(ee=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:ee.description}}};var te,se,ie,ae,re;d.parameters={...d.parameters,docs:{...(te=d.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => <>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam bibendum,
        nisl a fermentum viverra, diam urna efficitur ante, sit amet condimentum
        dolor tellus in augue. Vivamus eu nulla risus. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Quisque nec purus mi. Morbi pretium
        massa sem, ac semper elit dictum in. Suspendisse hendrerit lorem quis
        lobortis pellentesque. Ut blandit efficitur urna eu fermentum. Phasellus
        venenatis pretium quam, eget elementum enim congue non. Nunc vitae quam
        semper, mollis augue ac, facilisis sem. Sed justo urna, accumsan nec
        congue eu, hendrerit vel purus. Maecenas ultricies luctus nisi a
        pharetra.
      </Paragraph>
      <Paragraph>
        Aenean nec pretium turpis, et vulputate libero. Sed pharetra risus elit.
        Vivamus quis facilisis felis, at mollis tortor. Duis enim massa,
        lobortis eget semper sit amet, tristique nec lacus. Ut malesuada odio
        consectetur lobortis iaculis. Vestibulum elementum, turpis et venenatis
        aliquam, urna neque iaculis erat, a pellentesque ex nibh eu mi. Quisque
        id vehicula ipsum. Ut lacinia egestas congue. Curabitur laoreet tortor
        sapien, vitae ornare sem porttitor sit amet. Cras congue lorem
        ullamcorper, venenatis mi id, suscipit nisl.
      </Paragraph>
      <Paragraph>
        Suspendisse gravida sed ipsum a malesuada. Nulla facilisi. Suspendisse
        mollis purus eget risus mattis facilisis. Pellentesque eu est efficitur,
        porttitor justo vel, mollis felis. Morbi et tortor nulla. Nullam mattis
        quis arcu nec dignissim. Nam malesuada, lorem id gravida ultricies, odio
        libero blandit sem, quis dictum mi neque eget justo. Nulla ultrices,
        nunc sit amet luctus facilisis, mi augue viverra metus, ac eleifend
        risus nibh nec est. Maecenas sit amet rhoncus turpis. Sed ac arcu id
        diam tincidunt porta pulvinar vel enim.
      </Paragraph>
      <Paragraph>
        Phasellus quis hendrerit nisl, sit amet hendrerit est. Sed vitae
        eleifend augue. Donec imperdiet, magna sit amet tempus tristique, ante
        mi rhoncus eros, nec porttitor erat turpis eget justo. Nulla non aliquam
        tellus, sed hendrerit urna. Aliquam purus arcu, tempor nec lacinia ac,
        vulputate et nibh. Praesent vitae leo lacus. Mauris elementum vitae eros
        id congue. Integer dapibus bibendum diam, a aliquet nunc. Aliquam erat
        volutpat. Duis aliquam vel nunc vitae pulvinar. Cras justo ipsum,
        suscipit ac imperdiet hendrerit, pharetra sit amet est. Quisque nec nisi
        erat. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        Aliquam iaculis rhoncus condimentum.
      </Paragraph>
      <Paragraph>
        Integer semper massa vitae lorem ullamcorper faucibus. Suspendisse augue
        diam, viverra id molestie quis, semper vel velit. Vivamus ac porttitor
        nibh, ut sollicitudin neque. Cras viverra pretium eros ac condimentum.
        Sed eget nunc faucibus, luctus justo id, commodo erat. Nulla vestibulum
        hendrerit tellus at tincidunt. Suspendisse erat felis, venenatis sed
        turpis id, efficitur elementum libero. Integer convallis in est vel
        euismod. Curabitur vitae orci vitae justo venenatis rhoncus. Donec eget
        lorem efficitur, posuere velit quis, egestas nisi. Vivamus non lacus a
        turpis blandit sodales vitae nec lacus.
      </Paragraph>
    </>,
  parameters: {
    title: 'Paragraph'
  }
}`,...(ie=(se=d.parameters)==null?void 0:se.docs)==null?void 0:ie.source},description:{story:"A paragraph component is supplied to use the `<p>` tag.",...(re=(ae=d.parameters)==null?void 0:ae.docs)==null?void 0:re.description}}};var ne,oe,ue,le,ce;h.parameters={...h.parameters,docs:{...(ne=h.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => <Caption>To be used for captions</Caption>,
  parameters: {
    title: 'Caption'
  }
}`,...(ue=(oe=h.parameters)==null?void 0:oe.docs)==null?void 0:ue.source},description:{story:"Caption component uses a smaller font and the tag can still be configured using `as` so it can be set to `caption`, `figcaption` etc. as required.",...(ce=(le=h.parameters)==null?void 0:le.docs)==null?void 0:ce.description}}};var me,pe,de,he,ge;g.parameters={...g.parameters,docs:{...(me=g.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => <Monospace>
      To be used for pre components, uses the monospace font.
    </Monospace>,
  parameters: {
    title: 'Monospace'
  }
}`,...(de=(pe=g.parameters)==null?void 0:pe.docs)==null?void 0:de.source},description:{story:"Monospace component uses the monospace font and `pre` tag",...(ge=(he=g.parameters)==null?void 0:he.docs)==null?void 0:ge.description}}};var fe,Te,xe,be,ve;n.parameters={...n.parameters,docs:{...(fe=n.parameters)==null?void 0:fe.docs,source:{originalSource:`() => <Wrapper>
    <Text>This Text should NOT be styled</Text>
    <Paragraph>This Paragraph should be styled</Paragraph>
    <Caption>This Caption should be styled differently</Caption>
  </Wrapper>`,...(xe=(Te=n.parameters)==null?void 0:Te.docs)==null?void 0:xe.source},description:{story:"Testing toString on components",...(ve=(be=n.parameters)==null?void 0:be.docs)==null?void 0:ve.description}}};const Ve=["Default","Size","Weight","Fonts","Variations","Inline","NoWrap","ParagraphStory","CaptionStory","MonospaceStory","NestingClassNameTest"];export{h as CaptionStory,f as Default,l as Fonts,m as Inline,g as MonospaceStory,n as NestingClassNameTest,p as NoWrap,d as ParagraphStory,o as Size,c as Variations,u as Weight,Ve as __namedExportsOrder,De as default};
//# sourceMappingURL=Text.stories-8be9ec00.js.map

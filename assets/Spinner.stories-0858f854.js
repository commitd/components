import{j as h,a as s}from"./jsx-runtime-03b4ddbf.js";import{c as a}from"./component-92c13614.js";import{R as B}from"./index-76fb7be0.js";import{V as R}from"./Variants-32aa23ce.js";import{S as n}from"./Spinner-598f549f.js";import{C as T}from"./Flex-1cfc0a73.js";import{B as V}from"./Button-23e6de97.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-de833af9.js";import"./Box-f074bc4b.js";import"./Grid-599ad893.js";import"./Tooltip-53dd1a2c.js";import"./index-45a327ec.js";import"./index-421204d3.js";import"./index-296a96c6.js";import"./index-77dbc890.js";import"./index-add592e3.js";import"./index-f8c8b8ff.js";import"./index-01bbf444.js";import"./index-1a2315aa.js";import"./index-251d008c.js";import"./index-c6da0816.js";import"./index-207695d4.js";import"./Text-561f173c.js";import"./ConditionalWrapper-8865b2c1.js";import"./Logo-25278444.js";import"./Svg-cfd7f95e.js";const Z={title:"Components/Spinner",component:n,argTypes:{variant:{control:{type:"select",options:["draw","spin","scale","pulse"]},defaultValue:"draw",description:" Change to the animation of the spinner"},active:{control:{type:"boolean"},defaultValue:!0,description:"Boolean state to toggle the animation"}}},r={},o=()=>{const[i,y]=B.useState(!1);return h(T,{children:[s(n,{css:{my:"auto"},active:i}),s(V,{variant:"solid",onClick:()=>y(!i),children:"Toggle"})]})},e={args:{variant:"pulse",active:!0}},t=()=>s(R,{gridCss:a.raw({gridTemplateColumns:"1fr 1fr"}),component:n,variant:["spin","draw","scale","pulse"],css:[a.raw({color:"$primary"}),a.raw({color:"$secondary"})]});var p,c,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var l,d,u;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  const [loading, setLoading] = React.useState(false);
  return <Column>
      <Spinner css={{
      my: 'auto'
    }} active={loading} />
      <Button variant="solid" onClick={() => setLoading(!loading)}>
        Toggle
      </Button>
    </Column>;
}`,...(u=(d=o.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var g,f,v;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: 'pulse',
    active: true
  }
}`,...(v=(f=e.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var C,S,w;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`() => <Variants<typeof Spinner> gridCss={css.raw({
  gridTemplateColumns: '1fr 1fr'
})} component={Spinner} variant={['spin', 'draw', 'scale', 'pulse']} css={[css.raw({
  color: '$primary'
}), css.raw({
  color: '$secondary'
})]} />`,...(w=(S=t.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};const rr=["Default","Active","ReducedMotion","All"];export{o as Active,t as All,r as Default,e as ReducedMotion,rr as __namedExportsOrder,Z as default};
//# sourceMappingURL=Spinner.stories-0858f854.js.map

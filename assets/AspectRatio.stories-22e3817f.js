import{j as r,a as t}from"./jsx-runtime-03b4ddbf.js";import{r as i}from"./index-76fb7be0.js";import{_}from"./extends-98964cd2.js";import{$}from"./index-77dbc890.js";import{a as P}from"./component-92c13614.js";import{C as y,b as S,c as D,a as v}from"./Card-bb787615.js";import{I as x}from"./Image-2271cddc.js";import{I as R}from"./Inline-fdf2c0ff.js";import{B as I}from"./Box-f074bc4b.js";import{S as M}from"./Stack-d8c3aa6d.js";import{L as p}from"./Label-bb409e96.js";import{S as c}from"./Slider-ca47b191.js";import"./_commonjsHelpers-de833af9.js";import"./index-add592e3.js";import"./Paper-e773ea24.js";import"./Text-561f173c.js";import"./hooks.esm-cc7a556e.js";import"./Popover-7d7d988f.js";import"./index-45a327ec.js";import"./index-421204d3.js";import"./index-296a96c6.js";import"./index-56d74ee5.js";import"./index-f8c8b8ff.js";import"./index-01bbf444.js";import"./index-1a2315aa.js";import"./index-251d008c.js";import"./index-c6da0816.js";import"./ConditionalWrapper-8865b2c1.js";import"./index-6a2b73ba.js";import"./index-c6b1b4f9.js";import"./index-11a3acc1.js";import"./index-7896d420.js";import"./Tooltip-53dd1a2c.js";import"./index-207695d4.js";const A=i.forwardRef((a,e)=>{const{ratio:n=1,style:m,...k}=a;return i.createElement("div",{style:{position:"relative",width:"100%",paddingBottom:`${100/n}%`},"data-radix-aspect-ratio-wrapper":""},i.createElement($.div,_({},k,{ref:e,style:{...m,position:"absolute",top:0,right:0,bottom:0,left:0}})))}),L=A,d=P(L,"c-aspect-ratio");d.displayName="AspectRatio";const ut={title:"Components/AspectRatio",component:d},s={render:({ratio:a=9/16,...e})=>r(y,{css:{width:"50%"},children:[t(S,{children:"Photo by Damian Markutt"}),t(D,{children:"@wildandfree_photography"}),t(v,{children:t(d,{ratio:a,...e,children:t(x,{src:"https://images.unsplash.com/photo-1572302895496-a09d147fa902?w=300&dpr=2&q=80",alt:"Photo by Damian Markutt @wildandfree_photography"})})})]})},o={render:()=>{const[a,e]=i.useState([9]),[n,m]=i.useState([16]);return r(R,{children:[t(I,{variant:"wide",children:r(M,{children:[r(p,{children:["Numerator",t(c,{value:a,onValueChange:e})]}),r(p,{children:["Denominator",t(c,{value:n,onValueChange:m})]})]})}),r(y,{css:{width:"50%",height:"50%",overflow:"hidden"},children:[t(S,{children:"Photo by Damian Markutt"}),t(D,{children:"@wildandfree_photography"}),t(v,{children:t(d,{ratio:a[0]/n[0],children:t(x,{css:{objectFit:"cover",width:"100%",height:"100%"},src:"https://images.unsplash.com/photo-1572302895496-a09d147fa902?w=300&dpr=2&q=80",alt:"Photo by Damian Markutt @wildandfree_photography"})})})]})]})}};var h,l,u;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: ({
    ratio = 9 / 16,
    ...args
  }) => <Card css={{
    width: '50%'
  }}>
      <CardHeading>Photo by Damian Markutt</CardHeading>
      <CardSubheading>@wildandfree_photography</CardSubheading>
      <CardContent>
        {/* ratio={ 9 / 16} */}
        <AspectRatio ratio={ratio} {...args}>
          <Image src="https://images.unsplash.com/photo-1572302895496-a09d147fa902?w=300&dpr=2&q=80" alt="Photo by Damian Markutt @wildandfree_photography" />
        </AspectRatio>
      </CardContent>
    </Card>
}`,...(u=(l=s.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var f,g,C,b,w;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const [numerator, setNumerator] = useState([9]);
    const [denominator, setDenominator] = useState([16]);
    return <Inline>
        <Box variant="wide">
          <Stack>
            <Label>
              Numerator
              <Slider value={numerator} onValueChange={setNumerator} />
            </Label>
            <Label>
              Denominator
              <Slider value={denominator} onValueChange={setDenominator} />
            </Label>
          </Stack>
        </Box>
        <Card css={{
        width: '50%',
        height: '50%',
        overflow: 'hidden'
      }}>
          <CardHeading>Photo by Damian Markutt</CardHeading>
          <CardSubheading>@wildandfree_photography</CardSubheading>
          <CardContent>
            <AspectRatio ratio={numerator[0] / denominator[0]}>
              <Image css={{
              objectFit: 'cover',
              width: '100%',
              height: '100%'
            }} src="https://images.unsplash.com/photo-1572302895496-a09d147fa902?w=300&dpr=2&q=80" alt="Photo by Damian Markutt @wildandfree_photography" />
            </AspectRatio>
          </CardContent>
        </Card>
      </Inline>;
  }
}`,...(C=(g=o.parameters)==null?void 0:g.docs)==null?void 0:C.source},description:{story:"The ratio can be entered as a numerator and denominator to give comm0n values like `16 / 9`.",...(w=(b=o.parameters)==null?void 0:b.docs)==null?void 0:w.description}}};const ft=["Default","Dynamic"];export{s as Default,o as Dynamic,ft as __namedExportsOrder,ut as default};
//# sourceMappingURL=AspectRatio.stories-22e3817f.js.map

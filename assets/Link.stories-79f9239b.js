import{j as o,a as e}from"./jsx-runtime-03b4ddbf.js";import{M as W,R as O,a as h,L as p}from"./index-7c826001.js";import{L as r}from"./Link-72161c25.js";import{C as q}from"./Flex-1cfc0a73.js";import{B as t}from"./Box-f074bc4b.js";import{T as d}from"./Text-561f173c.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./component-92c13614.js";import"./extends-98964cd2.js";const Y={title:"Components/Link",component:r},c=()=>o(q,{children:[e(t,{children:e(r,{href:"#",children:"Link"})}),e(t,{css:{color:"$success"},children:e(r,{href:"#",children:"color inherits"})}),e(t,{children:e(d,{font:"monospace",children:e(r,{href:"/",children:' font="monospace"'})})}),e(t,{children:e(r,{href:"http://committed.io",target:"_blank",children:"External"})})]}),n=()=>e(d,{children:e(r,{variant:"clear",href:"#",children:"Link"})}),i=()=>e(d,{children:e(r,{variant:"hovered",href:"#",children:"Link"})}),s=()=>o(d,{children:["This is"," ",e(r,{variant:"styled",href:"#link",children:"Internal"})," ","and this"," ",e(r,{variant:"styled",href:"http://committed.io",children:"External"})]}),l=()=>o(W,{children:[o(O,{children:[e(h,{index:!0,element:e("div",{children:"Hello Router"})}),e(h,{path:"/one",element:e("div",{children:"Route 1"})}),e(h,{path:"/two",element:e("div",{children:"Route 2"})})]}),o(t,{children:[e(t,{children:e(p,{to:"/one",children:"Click to change Router path"})}),e(t,{children:e(r,{asChild:!0,children:e(p,{to:"/two",children:"Click to change Router path"})})}),e(t,{children:e(r,{variant:"styled",asChild:!0,children:e(p,{to:"./one",children:"Click to change Router path"})})})]})]}),a=()=>o("ol",{children:[e(r,{asChild:!0,href:"test.com",css:{display:"block"},children:e("li",{children:"Test"})}),e(r,{variant:"styled",asChild:!0,href:"test.com",css:{display:"inline-block"},children:e("li",{children:"Test"})}),e(r,{variant:"clear",asChild:!0,href:"test.com",css:{display:"block"},children:e("li",{children:"Test"})})]});var m,u,k;c.parameters={...c.parameters,docs:{...(m=c.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  return <Column>
      <Box>
        <Link href="#">Link</Link>
      </Box>
      <Box css={{
      color: '$success'
    }}>
        <Link href="#">color inherits</Link>
      </Box>
      <Box>
        <Text font="monospace">
          <Link href="/"> font="monospace"</Link>
        </Text>
      </Box>
      <Box>
        <Link href="http://committed.io" target="_blank">
          External
        </Link>
      </Box>
    </Column>;
}`,...(k=(u=c.parameters)==null?void 0:u.docs)==null?void 0:k.source}}};var L,f,x,R,v;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`() => <Text>
    <Link variant="clear" href="#">
      Link
    </Link>
  </Text>`,...(x=(f=n.parameters)==null?void 0:f.docs)==null?void 0:x.source},description:{story:"For when a link need to be applied to a separately styled element",...(v=(R=n.parameters)==null?void 0:R.docs)==null?void 0:v.description}}};var y,C,T,B,g;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`() => <Text>
    <Link variant="hovered" href="#">
      Link
    </Link>
  </Text>`,...(T=(C=i.parameters)==null?void 0:C.docs)==null?void 0:T.source},description:{story:"For when a link should be hidden but shown on hover",...(g=(B=i.parameters)==null?void 0:B.docs)==null?void 0:g.description}}};var b,S,w,E,_;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`() => <Text>
    This is{' '}
    <Link variant="styled" href="#link">
      Internal
    </Link>{' '}
    and this{' '}
    <Link variant="styled" href="http://committed.io">
      External
    </Link>
  </Text>`,...(w=(S=s.parameters)==null?void 0:S.docs)==null?void 0:w.source},description:{story:"The styled variant is intended for use in articles such as blog posts.",...(_=(E=s.parameters)==null?void 0:E.docs)==null?void 0:_.description}}};var H,M,j;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
  return <MemoryRouter>
      <Routes>
        <Route index element={<div>Hello Router</div>} />
        <Route path="/one" element={<div>Route 1</div>} />
        <Route path="/two" element={<div>Route 2</div>} />
      </Routes>
      <Box>
        <Box>
          <RouterLink to="/one">Click to change Router path</RouterLink>
        </Box>
        <Box>
          <Link asChild>
            <RouterLink to="/two">Click to change Router path</RouterLink>
          </Link>
        </Box>
        <Box>
          <Link variant="styled" asChild>
            <RouterLink to="./one">Click to change Router path</RouterLink>
          </Link>
        </Box>
      </Box>
    </MemoryRouter>;
}`,...(j=(M=l.parameters)==null?void 0:M.docs)==null?void 0:j.source}}};var $,A,D,F,I;a.parameters={...a.parameters,docs:{...($=a.parameters)==null?void 0:$.docs,source:{originalSource:`() => <ol>
    <Link asChild href="test.com" css={{
    display: 'block'
  }}>
      <li>Test</li>
    </Link>
    <Link variant="styled" asChild href="test.com" css={{
    display: 'inline-block'
  }}>
      <li>Test</li>
    </Link>
    <Link variant="clear" asChild href="test.com" css={{
    display: 'block'
  }}>
      <li>Test</li>
    </Link>
  </ol>`,...(D=(A=a.parameters)==null?void 0:A.docs)==null?void 0:D.source},description:{story:"Links support substituting the rendered element for one supplied to the `asChild` pattern prop.",...(I=(F=a.parameters)==null?void 0:F.docs)==null?void 0:I.description}}};const Z=["Default","Clear","Hovered","Styled","WithReactRouter","As"];export{a as As,n as Clear,c as Default,i as Hovered,s as Styled,l as WithReactRouter,Z as __namedExportsOrder,Y as default};
//# sourceMappingURL=Link.stories-79f9239b.js.map

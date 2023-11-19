import{a as e,j as m}from"./jsx-runtime-03b4ddbf.js";import{M as L,L as u,R as O,a as l}from"./index-7c826001.js";import{a as p,c as y,g as k}from"./component-92c13614.js";import{r as w}from"./index-76fb7be0.js";import{L as _}from"./Link-72161c25.js";import{D as x}from"./Divider-c668ea89.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-de833af9.js";import"./index-77dbc890.js";import"./index-add592e3.js";var v=globalThis&&globalThis.__rest||function(r,a){var n={};for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&a.indexOf(t)<0&&(n[t]=r[t]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(r);o<t.length;o++)a.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(r,t[o])&&(n[t[o]]=r[t[o]]);return n};const S="nav",j="ol",P="li",T=p(S,"c-breadcrumbs"),B=p(j,y({padding:0,margin:0,listStyleType:"none"}));B.displayName="BreadcrumbList";const D=p(P,y({display:"inline","&:not(:first-of-type)":{marginLeft:"token(spacing.$3)"},"&:not(:first-of-type)::before":{content:"''",opacity:.25,marginRight:"token(spacing.$3)",display:"inline-block",transform:"rotate(15deg)",borderRight:"1px solid",height:"0.8em"}})),s=w.forwardRef((r,a)=>{var{children:n}=r,t=v(r,["children"]);return e(T,Object.assign({"aria-label":"Breadcrumb"},t,{ref:a,children:e(B,{children:n})}))});s.displayName="Breadcrumbs";const i=k((r,a)=>{var{isCurrentPage:n=!1,children:t}=r,o=v(r,["isCurrentPage","children"]);return e(D,{children:e(_,Object.assign({variant:n?"clear":"hovered","aria-current":n?"page":void 0},o,{ref:a,children:t}))})});i.displayName="Crumb";s.__docgenInfo={description:"",methods:[],displayName:"Breadcrumbs"};const z={title:"Components/Breadcrumbs",component:s,subcomponents:{Crumb:i}},c={render:r=>m(s,{...r,children:[e(i,{href:"/",children:"Home"}),e(i,{href:"/first",children:"First"}),e(i,{href:"/first/second",isCurrentPage:!0,children:"Second"})]})},d=()=>m(L,{children:[m(s,{children:[e(i,{asChild:!0,children:e(u,{to:"/",children:"Home"})}),e(i,{asChild:!0,children:e(u,{to:"/one",children:"One"})}),e(i,{asChild:!0,isCurrentPage:!0,children:e(u,{to:"/one/two",children:"Two"})})]}),e(x,{}),m(O,{children:[e(l,{index:!0,element:e("div",{children:"Home"})}),e(l,{path:"/one",element:e("div",{children:"Route 1"})}),e(l,{path:"/one/two",element:e("div",{children:"Route 2"})})]})]});var h,b,f;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <Breadcrumbs {...args}>
      <Crumb href="/">Home</Crumb>
      <Crumb href="/first">First</Crumb>
      <Crumb href="/first/second" isCurrentPage>
        Second
      </Crumb>
    </Breadcrumbs>
}`,...(f=(b=c.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var R,C,g;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  return <MemoryRouter>
      <Breadcrumbs>
        <Crumb asChild>
          <RouterLink to="/">Home</RouterLink>
        </Crumb>
        <Crumb asChild>
          <RouterLink to="/one">One</RouterLink>
        </Crumb>
        <Crumb asChild isCurrentPage>
          <RouterLink to="/one/two">Two</RouterLink>
        </Crumb>
      </Breadcrumbs>
      <Divider />
      <Routes>
        <Route index element={<div>Home</div>} />
        <Route path="/one" element={<div>Route 1</div>} />
        <Route path="/one/two" element={<div>Route 2</div>} />
      </Routes>
    </MemoryRouter>;
}`,...(g=(C=d.parameters)==null?void 0:C.docs)==null?void 0:g.source}}};const J=["Default","WithRouter"];export{c as Default,d as WithRouter,J as __namedExportsOrder,z as default};
//# sourceMappingURL=Breadcrumbs.stories-06306414.js.map

import{a,j as l,F as be}from"./jsx-runtime-03b4ddbf.js";import{a as B}from"./chunk-AY7I2SME-c7b6cf8a.js";import{j as $,w as q,u as b,a as d,e as c,s}from"./index-4345948b.js";import{$ as pe,h as he,a as j,c as h,d as ye}from"./component-92c13614.js";import{r as i}from"./index-76fb7be0.js";import{_ as f}from"./extends-98964cd2.js";import{a as xe}from"./index-421204d3.js";import{h as ge,b as we,e as ve,c as Te,$ as Be,i as Ae,a as _e,f as Ee,g as Se,d as Ce}from"./index-ca20a0e4.js";import{a as Oe}from"./index-45a327ec.js";import{o as ue}from"./Overlay-1ca05ff0.js";import{p as Re}from"./Paper-e773ea24.js";import{H as Ne}from"./Heading-1229930b.js";import{T as je}from"./Text-561f173c.js";import{B as u}from"./Button-23e6de97.js";import{C as ke}from"./ConditionalWrapper-8865b2c1.js";import"./_commonjsHelpers-de833af9.js";import"./_baseIsEqual-f876697f.js";import"./index-03bbf7d1.js";import"./uniq-da390a93.js";import"./index-d38bc732.js";import"./index-356e4a49.js";import"./index-f8c8b8ff.js";import"./index-296a96c6.js";import"./index-77dbc890.js";import"./index-add592e3.js";import"./index-56d74ee5.js";import"./index-251d008c.js";import"./index-c6da0816.js";import"./Svg-cfd7f95e.js";const Ie="AlertDialog",[Pe,Ho]=xe(Ie,[ge]),m=ge(),He=e=>{const{__scopeAlertDialog:t,...n}=e,o=m(t);return i.createElement(we,f({},o,n,{modal:!0}))},Fe=i.forwardRef((e,t)=>{const{__scopeAlertDialog:n,...o}=e,r=m(n);return i.createElement(ve,f({},r,o,{ref:t}))}),We=e=>{const{__scopeAlertDialog:t,...n}=e,o=m(t);return i.createElement(Te,f({},o,n))},qe=i.forwardRef((e,t)=>{const{__scopeAlertDialog:n,...o}=e,r=m(n);return i.createElement(Be,f({},r,o,{ref:t}))}),De="AlertDialogContent",[Me,Le]=Pe(De),Ke=i.forwardRef((e,t)=>{const{__scopeAlertDialog:n,children:o,...r}=e,x=m(n),w=i.useRef(null),W=pe(t,w),A=i.useRef(null);return i.createElement(Ae,{contentName:De,titleName:ze,docsSlug:"alert-dialog"},i.createElement(Me,{scope:n,cancelRef:A},i.createElement(_e,f({role:"alertdialog"},x,r,{ref:W,onOpenAutoFocus:Oe(r.onOpenAutoFocus,C=>{var v;C.preventDefault(),(v=A.current)===null||v===void 0||v.focus({preventScroll:!0})}),onPointerDownOutside:C=>C.preventDefault(),onInteractOutside:C=>C.preventDefault()}),i.createElement(he,null,o),!1)))}),ze="AlertDialogTitle",Ge=i.forwardRef((e,t)=>{const{__scopeAlertDialog:n,...o}=e,r=m(n);return i.createElement(Ee,f({},r,o,{ref:t}))}),Je=i.forwardRef((e,t)=>{const{__scopeAlertDialog:n,...o}=e,r=m(n);return i.createElement(Se,f({},r,o,{ref:t}))}),Qe=i.forwardRef((e,t)=>{const{__scopeAlertDialog:n,...o}=e,r=m(n);return i.createElement(Ce,f({},r,o,{ref:t}))}),Ue="AlertDialogCancel",Ve=i.forwardRef((e,t)=>{const{__scopeAlertDialog:n,...o}=e,{cancelRef:r}=Le(Ue,n),x=m(n),w=pe(t,r);return i.createElement(Ce,f({},x,o,{ref:w}))}),Xe=He,Ye=Fe,Ze=We,eo=qe,oo=Ke,no=Qe,ao=Ve,to=Ge,ro=Je;var M=globalThis&&globalThis.__rest||function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n};const io=j(eo,ue,h({position:"fixed",right:0,bottom:0,top:0,left:0})),co=j(oo,Re,h({position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",minWidth:200,maxWidth:"fit-content",maxHeight:"85vh",padding:"$4",marginTop:"-5vh",boxShadow:"$2",display:"flex",flexDirection:"column",_focus:{outline:"none"}}),ue),D=j(Xe,"c-confirm-dialog");D.displayName="ConfirmDialog";const p=i.forwardRef((e,t)=>{var{title:n,description:o,surface:r="solid",overlay:x="frost",css:w,overlayCss:W={},container:A,portalled:C=!0,children:v}=e,$e=M(e,["title","description","surface","overlay","css","overlayCss","container","portalled","children"]);return a(ke,{condition:C,props:{container:A},wrapper:Ze,children:l(be,{children:[a(io,{className:h({surface:x},W)}),l(co,Object.assign({className:h({surface:r},w)},$e,{ref:t,children:[n&&a(k,{children:n}),o&&a(I,{children:o}),v]}))]})})});p.displayName="ConfirmDialogContent";const g=i.forwardRef((e,t)=>{var{children:n}=e,o=M(e,["children"]);return a(Ye,Object.assign({asChild:!0},o,{ref:t,children:n}))});g.displayName="ConfirmDialogTrigger";const k=e=>{var{className:t}=e,n=M(e,["className"]);return a(to,{children:a(Ne,Object.assign({as:"div",variant:"h6",className:ye(h({mb:4}),t)},n))})};k.displayName="ConfirmDialogTitle";const I=e=>a(ro,{children:a(je,Object.assign({},e))});I.displayName="ConfirmDialogDescription";const P=e=>a(no,{asChild:!0,children:a(u,Object.assign({variant:"solid"},e))});P.displayName="ConfirmDialogAction";const H=e=>a(ao,{asChild:!0,children:a(u,Object.assign({variant:"text",colorPalette:"$neutral"},e))});H.displayName="ConfirmDialogCancel";const F=j("div",h({display:"flex",gap:"$2",justifyContent:"flex-end",mt:"$4"}));F.displayName="ConfirmDialogActionsWrapper";const y=({cancel:e="Cancel",confirm:t,onCancel:n,onConfirm:o,destructive:r})=>l(F,{children:[a(H,{onClick:n,children:e}),a(P,{onClick:o,destructive:r,children:t})]});y.displayName="ConfirmDialogActions";p.__docgenInfo={description:"",methods:[],displayName:"ConfirmDialogContent"};g.__docgenInfo={description:"",methods:[],displayName:"ConfirmDialogTrigger"};const Fo={title:"Components/ConfirmDialog",component:D,subcomponents:{ConfirmDialogContent:p,ConfirmDialogTitle:k,ConfirmDialogDescription:I,ConfirmDialogActions:y,ConfirmDialogActionsWrapper:F,ConfirmDialogAction:P,ConfirmDialogCancel:H,ConfirmDialogTrigger:g}},_={render:e=>l(D,{...e,children:[a(g,{children:a(u,{children:"Show Dialog"})}),a(p,{title:"Confirm Dialog",description:"Are you sure this is a confirm dialog?",children:a(y,{confirm:"Confirm",onConfirm:B("confirm")})})]})},T={render:e=>l(D,{children:[a(g,{children:a(u,{children:"Show Dialog"})}),l(p,{children:[a(k,{children:"Confirm Dialog"}),a(I,{children:"Are you sure this is a confirm dialog?"}),l(F,{children:[a(H,{onClick:B("cancel"),children:"Cancel"}),a(P,{onClick:B("confirm"),children:"Confirm"})]})]})]})},E={render:e=>l(D,{...e,children:[a(g,{children:a(u,{children:"Show Dialog"})}),a(p,{title:"Confirm Delete",description:"Are you sure, this can not be undone?",children:a(y,{confirm:"Delete",onConfirm:B("delete"),destructive:!0})})]})},S={render:e=>l(D,{...e,children:[a(g,{children:a(u,{children:"Show Dialog"})}),a(p,{overlay:"glass",surface:"neutral",title:"Confirm Dialog",description:"Are you sure this is a confirm dialog?",children:a(y,{confirm:"Confirm",onConfirm:B("confirm")})})]})},L={render:({onCancel:e,...t})=>l(D,{children:[a(g,{children:a(u,{children:"Show Dialog"})}),a(p,{onEscapeKeyDown:e,title:"Confirm Dialog",description:"Are you sure this is a confirm dialog?",children:a(y,{onCancel:e,confirm:"Confirm",...t})})]})},O={...L,args:{onCancel:$.fn(),onConfirm:$.fn()},play:async({args:e,canvasElement:t,step:n})=>{const o=q(t);await n("calls onConfirm when confirmed",async()=>{b.click(o.getByRole("button")),await d(()=>{c(s.getByText("Confirm Dialog")).toBeInTheDocument()}),b.click(await s.findByRole("button",{name:/confirm/i})),await d(()=>{c(e.onConfirm).toHaveBeenCalled(),c(e.onCancel).not.toHaveBeenCalled()}),c(s.queryByText("Confirm Dialog")).not.toBeInTheDocument()})}},R={...L,args:{onCancel:$.fn(),onConfirm:$.fn()},play:async({args:e,canvasElement:t,step:n})=>{const o=q(t);await n("calls onCancel when cancelled",async()=>{b.click(o.getByRole("button")),await d(()=>{c(s.getByText("Confirm Dialog")).toBeInTheDocument()}),b.click(await s.findByRole("button",{name:/cancel/i})),await d(()=>{c(e.onCancel).toHaveBeenCalled(),c(e.onConfirm).not.toHaveBeenCalled()}),await d(()=>{c(s.queryByText("Confirm Dialog")).not.toBeInTheDocument()})})}},N={...L,args:{onCancel:$.fn(),onConfirm:$.fn()},play:async({args:e,canvasElement:t,step:n})=>{const o=q(t);await n("calls onCancel on esc",async()=>{b.click(o.getByRole("button")),await d(()=>{c(s.getByText("Confirm Dialog")).toBeInTheDocument()}),b.type(s.getByText("Confirm Dialog"),"{Escape}"),await d(()=>{c(e.onCancel).toHaveBeenCalled(),c(e.onConfirm).not.toHaveBeenCalled()}),await d(()=>{c(s.queryByText("Confirm Dialog")).not.toBeInTheDocument()})})}};var K,z,G;_.parameters={..._.parameters,docs:{...(K=_.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: args => <ConfirmDialog {...args}>
      <ConfirmDialogTrigger>
        <Button>Show Dialog</Button>
      </ConfirmDialogTrigger>
      <ConfirmDialogContent title="Confirm Dialog" description="Are you sure this is a confirm dialog?">
        <ConfirmDialogActions confirm="Confirm" onConfirm={action('confirm')} />
      </ConfirmDialogContent>
    </ConfirmDialog>
}`,...(G=(z=_.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var J,Q,U,V,X;T.parameters={...T.parameters,docs:{...(J=T.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: args => <ConfirmDialog>
      <ConfirmDialogTrigger>
        <Button>Show Dialog</Button>
      </ConfirmDialogTrigger>
      <ConfirmDialogContent>
        <ConfirmDialogTitle>Confirm Dialog</ConfirmDialogTitle>
        <ConfirmDialogDescription>
          Are you sure this is a confirm dialog?
        </ConfirmDialogDescription>
        <ConfirmDialogActionsWrapper>
          <ConfirmDialogCancel onClick={action('cancel')}>
            Cancel
          </ConfirmDialogCancel>
          <ConfirmDialogAction onClick={action('confirm')}>
            Confirm
          </ConfirmDialogAction>
        </ConfirmDialogActionsWrapper>
      </ConfirmDialogContent>
    </ConfirmDialog>
}`,...(U=(Q=T.parameters)==null?void 0:Q.docs)==null?void 0:U.source},description:{story:"The separate parts of the `ConfirmDialog` are also supplied to give more flexibility.\n This example shows their normal composition.",...(X=(V=T.parameters)==null?void 0:V.docs)==null?void 0:X.description}}};var Y,Z,ee;E.parameters={...E.parameters,docs:{...(Y=E.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: args => <ConfirmDialog {...args}>
      <ConfirmDialogTrigger>
        <Button>Show Dialog</Button>
      </ConfirmDialogTrigger>
      <ConfirmDialogContent title="Confirm Delete" description="Are you sure, this can not be undone?">
        <ConfirmDialogActions confirm="Delete" onConfirm={action('delete')} destructive />
      </ConfirmDialogContent>
    </ConfirmDialog>
}`,...(ee=(Z=E.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var oe,ne,ae;S.parameters={...S.parameters,docs:{...(oe=S.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: args => <ConfirmDialog {...args}>
      <ConfirmDialogTrigger>
        <Button>Show Dialog</Button>
      </ConfirmDialogTrigger>
      <ConfirmDialogContent overlay="glass" surface="neutral" title="Confirm Dialog" description="Are you sure this is a confirm dialog?">
        <ConfirmDialogActions confirm="Confirm" onConfirm={action('confirm')} />
      </ConfirmDialogContent>
    </ConfirmDialog>
}`,...(ae=(ne=S.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var te,re,ie;O.parameters={...O.parameters,docs:{...(te=O.parameters)==null?void 0:te.docs,source:{originalSource:`{
  ...TestCase,
  args: {
    onCancel: jest.fn(),
    onConfirm: jest.fn()
  },
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const element = within(canvasElement);
    await step('calls onConfirm when confirmed', async () => {
      userEvent.click(element.getByRole('button'));
      await waitFor(() => {
        expect(screen.getByText('Confirm Dialog')).toBeInTheDocument();
      });
      userEvent.click(await screen.findByRole('button', {
        name: /confirm/i
      }));
      await waitFor(() => {
        expect(args.onConfirm).toHaveBeenCalled();
        expect(args.onCancel).not.toHaveBeenCalled();
      });
      expect(screen.queryByText('Confirm Dialog')).not.toBeInTheDocument();
    });
  }
}`,...(ie=(re=O.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};var ce,le,se;R.parameters={...R.parameters,docs:{...(ce=R.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  ...TestCase,
  args: {
    onCancel: jest.fn(),
    onConfirm: jest.fn()
  },
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const element = within(canvasElement);
    await step('calls onCancel when cancelled', async () => {
      userEvent.click(element.getByRole('button'));
      await waitFor(() => {
        expect(screen.getByText('Confirm Dialog')).toBeInTheDocument();
      });
      userEvent.click(await screen.findByRole('button', {
        name: /cancel/i
      }));
      await waitFor(() => {
        expect(args.onCancel).toHaveBeenCalled();
        expect(args.onConfirm).not.toHaveBeenCalled();
      });
      await waitFor(() => {
        expect(screen.queryByText('Confirm Dialog')).not.toBeInTheDocument();
      });
    });
  }
}`,...(se=(le=R.parameters)==null?void 0:le.docs)==null?void 0:se.source}}};var fe,me,de;N.parameters={...N.parameters,docs:{...(fe=N.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  ...TestCase,
  args: {
    onCancel: jest.fn(),
    onConfirm: jest.fn()
  },
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const element = within(canvasElement);
    await step('calls onCancel on esc', async () => {
      userEvent.click(element.getByRole('button'));
      await waitFor(() => {
        expect(screen.getByText('Confirm Dialog')).toBeInTheDocument();
      });
      userEvent.type(screen.getByText('Confirm Dialog'), '{Escape}');
      await waitFor(() => {
        expect(args.onCancel).toHaveBeenCalled();
        expect(args.onConfirm).not.toHaveBeenCalled();
      });
      await waitFor(() => {
        expect(screen.queryByText('Confirm Dialog')).not.toBeInTheDocument();
      });
    });
  }
}`,...(de=(me=N.parameters)==null?void 0:me.docs)==null?void 0:de.source}}};const Wo=["Default","Parts","Destructive","Surfaces","TestOnConfirm","TestOnCancelClick","TestOnCancelEsc"];export{_ as Default,E as Destructive,T as Parts,S as Surfaces,R as TestOnCancelClick,N as TestOnCancelEsc,O as TestOnConfirm,Wo as __namedExportsOrder,Fo as default};
//# sourceMappingURL=ConfirmDialog.stories-6e026df8.js.map

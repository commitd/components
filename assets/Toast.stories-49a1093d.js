import{j as o,F as ht,a as t}from"./jsx-runtime-03b4ddbf.js";import{c as Tt}from"./component-92c13614.js";import{R as a,r as g}from"./index-76fb7be0.js";import{a as A}from"./chunk-AY7I2SME-c7b6cf8a.js";import{w as S,a as R,e as ft,s as it,u as rt}from"./index-4345948b.js";import"./Variants-32aa23ce.js";import{F as Ct,w as yt,a as vt}from"./withForm-df956169.js";import{T as at,a as ct,b as lt,c as dt,d as ut,e as pt,u as f,f as wt}from"./Toaster-23f47ad1.js";import{F as d,a as C}from"./FormControl-6b9cc0be.js";import{I}from"./Input-0138999c.js";import{T as bt}from"./TextArea-0d434fea.js";import{C as kt}from"./Checkbox-ee294c7f.js";import{S as Bt,a as u}from"./Select-564ad3c3.js";import{B as n}from"./Button-23e6de97.js";import{I as x}from"./Inline-fdf2c0ff.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-de833af9.js";import"./_baseIsEqual-f876697f.js";import"./index-03bbf7d1.js";import"./uniq-da390a93.js";import"./index-d38bc732.js";import"./index-356e4a49.js";import"./Box-f074bc4b.js";import"./Grid-599ad893.js";import"./Tooltip-53dd1a2c.js";import"./index-45a327ec.js";import"./index-421204d3.js";import"./index-296a96c6.js";import"./index-77dbc890.js";import"./index-add592e3.js";import"./index-f8c8b8ff.js";import"./index-01bbf444.js";import"./index-1a2315aa.js";import"./index-251d008c.js";import"./index-c6da0816.js";import"./index-207695d4.js";import"./Text-561f173c.js";import"./ConditionalWrapper-8865b2c1.js";import"./index-7896d420.js";import"./Icons-43292f8c.js";import"./mdi-685d5538.js";import"./Svg-cfd7f95e.js";import"./Label-bb409e96.js";import"./index-11a3acc1.js";import"./index-6a2b73ba.js";import"./index-c6b1b4f9.js";import"./index-56d74ee5.js";import"./Paper-e773ea24.js";const ye={title:"Components/Toast",component:at,subcomponents:{ToastAction:ct,ToastDescription:lt,ToastProvider:dt,ToastTitle:ut,ToastViewport:pt},excludeStories:["ToastProvider","ToastViewport"],argTypes:{severity:{options:["error","warn","info","success","default"],description:"Set the severity of the alert"}}},y={render:({title:e="Toast Title",altText:s="Undo",description:i="This is the toast content, the content is optional but should usually give further explanation about the toast and if any action is required.",severity:c="default",...b})=>{const[k,r]=a.useState(!1),l=a.useRef(0);g.useEffect(()=>()=>clearTimeout(l.current),[]);const mt=g.useCallback(()=>{r(!1),window.clearTimeout(l.current),l.current=window.setTimeout(()=>{r(!0)},100)},[]);return o(ht,{children:[t(n,{onClick:mt,children:"Open Toast"}),t(at,{open:k,onOpenChange:r,title:e,altText:s,description:i,severity:c,...b})]})},play:async({canvasElement:e})=>{S(e).getByRole("button").click(),await R(async()=>{ft(await it.findByText("Toast Title")).toBeInTheDocument()}),rt.keyboard("[Escape]")}},p=()=>{const{addToast:e}=f();return t(n,{onClick:()=>{e({title:"Hello Toast"})},children:"Add Toast"})},m=()=>{const{addToast:e}=f();return o(x,{children:[t(n,{onClick:()=>{e({title:"Default Toast",severity:"default",description:"This is toast description",close:!0})},children:"Default"}),t(n,{onClick:()=>{e({title:"Info Toast",severity:"info",description:"This is toast description",close:!0})},children:"Info"}),t(n,{onClick:()=>{e({title:"Success Toast",severity:"success",description:"This is toast description",close:!0})},children:"Success"}),t(n,{onClick:()=>{e({title:"Warning Toast",severity:"warn",description:"This is toast description",close:!0})},children:"Warning"}),t(n,{onClick:()=>{e({title:"Error Toast",severity:"error",description:"This is toast description",close:!0})},children:"Error"})]})},v=()=>{const{addToast:e}=f();return o(Ct,{onSubmit:yt(e),children:[o(d,{children:[t(I,{name:"title",id:"title",label:"Title",placeholder:"toast title",defaultValue:"Hello Toast",required:!0}),t(C,{defaultText:"The title of the toast"})]}),o(d,{children:[t(bt,{name:"description",id:"description",label:"Description",placeholder:"toast description",defaultValue:"This is the description text of the toast"}),t(C,{defaultText:"The title of the toast"})]}),t(d,{children:t(kt,{name:"close",id:"close",label:"With Close Button",defaultValue:"false"})}),o(d,{children:[o(Bt,{name:"severity",id:"severity",label:"Severity",defaultValue:"default",children:[t(u,{value:"default",children:"Default"}),t(u,{value:"warning",children:"Warning"}),t(u,{value:"info",children:"Info"}),t(u,{value:"success",children:"Success"}),t(u,{value:"error",children:"Error"})]}),t(C,{defaultText:"Select the severity"})]}),o(d,{children:[t(I,{name:"duration",id:"duration",label:"Duration",defaultValue:3e3,type:"number",min:500,max:1e4}),t(C,{defaultText:"Select the duration (ms) to remain"})]}),t(vt,{})]})};let B=0;const h=()=>{const{addToast:e}=f();return o(x,{children:[t(n,{onClick:()=>{e({title:"Toast id A",severity:"info",description:`this is toast number ${B++}`,id:"A"})},children:"Add Info"}),t(n,{onClick:()=>{e({title:"Toast id B",severity:"warn",description:`this is toast number ${B++}`,id:"B"})},children:"Add Warning"}),t(n,{onClick:()=>{e({title:"Toast id C",severity:"error",description:`this is toast number ${B++}`,id:"C"})},children:"Add Error"})]})},w={render:()=>{const{addToast:e}=f();return o(x,{children:[t(n,{onClick:()=>{e({title:"Toast With Close",description:"this toast has a close button",close:!0})},children:"With Close"}),t(n,{onClick:()=>{e({title:"Requires Closing",description:"this toast must be dismissed manually",close:!0,duration:null})},children:"Requires closing"}),t(n,{onClick:()=>{e({title:"With Action",description:"this toast has an action which also closes the toast",altText:"An alt text must also be supplied",actions:t(n,{variant:"solid",onClick:A("clicked"),children:"Action"})})},children:"Action Button"}),t(n,{onClick:()=>{e({title:"With Close Action",description:"See actions panel - onClose is called as it it closed",onClose:A("onClose")})},children:"Close Action"})]})},play:async({canvasElement:e})=>{S(e).getByRole("button",{name:/With Close/i}).click();const s=await R(async()=>it.findByLabelText(/Notifications/i));(await R(()=>S(s).getByRole("button",{name:/Close/i}))).focus(),rt.keyboard("[Escape]")}},T=()=>{const[e,s]=a.useState(!1),i=a.useRef(new Date),c=a.useRef(0);a.useEffect(()=>()=>clearTimeout(c.current),[]);function b(){const r=new Date,l=r.setDate(r.getDate()+7);return new Date(l)}const k=g.useCallback(()=>{s(!1),window.clearTimeout(c.current),c.current=window.setTimeout(()=>{i.current=b(),s(!0)},100)},[]);return o(dt,{swipeDirection:"left",children:[t(n,{onClick:k,children:"Add to calendar"}),o(wt,{open:e,onOpenChange:s,severity:"default",children:[t(ut,{children:"Scheduled: Catch up"}),t(lt,{asChild:!0,children:t("time",{dateTime:i.current.toISOString(),children:i.current.toLocaleString()})}),t(ct,{asChild:!0,altText:"Goto schedule to undo",children:t(n,{variant:"solid",size:"small",children:"Undo"})})]}),t(pt,{className:Tt({bottom:0,left:0})})]})};var D,F,W;y.parameters={...y.parameters,docs:{...(D=y.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: ({
    title = 'Toast Title',
    altText = 'Undo',
    description = 'This is the toast content, the content is optional but should usually give further explanation about the toast and if any action is required.',
    severity = 'default',
    ...args
  }) => {
    const [open, setOpen] = React.useState(false);
    const timerRef = React.useRef(0);
    useEffect(() => {
      return () => clearTimeout(timerRef.current);
    }, []);
    const onClick = useCallback(() => {
      setOpen(false);
      window.clearTimeout(timerRef.current);
      timerRef.current = window.setTimeout(() => {
        setOpen(true);
      }, 100);
    }, []);
    return <>
        <Button onClick={onClick}>Open Toast</Button>
        <Toast open={open} onOpenChange={setOpen} title={title} altText={altText} description={description} severity={severity} {...args} />
      </>;
  },
  play: async ({
    canvasElement
  }) => {
    within(canvasElement).getByRole('button').click();
    await waitFor(async () => {
      expect(await screen.findByText('Toast Title')).toBeInTheDocument();
    });
    userEvent.keyboard('[Escape]');
  }
}`,...(W=(F=y.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};var O,E,V,U,P;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  const {
    addToast
  } = useToast();
  return <Button onClick={() => {
    addToast({
      title: 'Hello Toast'
    });
  }}>
      Add Toast
    </Button>;
}`,...(V=(E=p.parameters)==null?void 0:E.docs)==null?void 0:V.source},description:{story:"A `useToast` hook is supplied.\n\nThis relies on the `ToastProvider` being a parent of the component using the hook.\nIt is supplied as part of the `ComponentsProvider` and default settings for the toasts can be set on the `ComponentsProvider`.\n\nThe hook is supplied with the props of the toast and it's creation is manage by the provider.",...(P=(U=p.parameters)==null?void 0:U.docs)==null?void 0:P.description}}};var H,q,N,$,j;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
  const {
    addToast
  } = useToast();
  return <Inline>
      <Button onClick={() => {
      addToast({
        title: 'Default Toast',
        severity: 'default',
        description: 'This is toast description',
        close: true
      });
    }}>
        Default
      </Button>
      <Button onClick={() => {
      addToast({
        title: 'Info Toast',
        severity: 'info',
        description: 'This is toast description',
        close: true
      });
    }}>
        Info
      </Button>
      <Button onClick={() => {
      addToast({
        title: 'Success Toast',
        severity: 'success',
        description: 'This is toast description',
        close: true
      });
    }}>
        Success
      </Button>
      <Button onClick={() => {
      addToast({
        title: 'Warning Toast',
        severity: 'warn',
        description: 'This is toast description',
        close: true
      });
    }}>
        Warning
      </Button>
      <Button onClick={() => {
      addToast({
        title: 'Error Toast',
        severity: 'error',
        description: 'This is toast description',
        close: true
      });
    }}>
        Error
      </Button>
    </Inline>;
}`,...(N=(q=m.parameters)==null?void 0:q.docs)==null?void 0:N.source},description:{story:"By adding an `id` you can restrict to only showing one toast with that `id` at a time.\nThis can be useful to reduce the clutter if there are lots of notifications.",...(j=($=m.parameters)==null?void 0:$.docs)==null?void 0:j.description}}};var L,z,_;v.parameters={...v.parameters,docs:{...(L=v.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  const {
    addToast
  } = useToast();
  return <Form onSubmit={withFormObject(addToast)}>
      <FormControl>
        <Input name="title" id="title" label="Title" placeholder="toast title" defaultValue="Hello Toast" required />
        <FormControlHelp defaultText="The title of the toast" />
      </FormControl>
      <FormControl>
        <TextArea name="description" id="description" label="Description" placeholder="toast description" defaultValue="This is the description text of the toast" />
        <FormControlHelp defaultText="The title of the toast" />
      </FormControl>
      <FormControl>
        <Checkbox name="close" id="close" label="With Close Button" defaultValue="false" />
      </FormControl>
      <FormControl>
        <Select name="severity" id="severity" label="Severity" defaultValue="default">
          <SelectItem value="default">Default</SelectItem>
          <SelectItem value="warning">Warning</SelectItem>
          <SelectItem value="info">Info</SelectItem>
          <SelectItem value="success">Success</SelectItem>
          <SelectItem value="error">Error</SelectItem>
        </Select>
        <FormControlHelp defaultText="Select the severity" />
      </FormControl>
      <FormControl>
        <Input name="duration" id="duration" label="Duration" defaultValue={3000} type={'number'} min={500} max={10000} />
        <FormControlHelp defaultText="Select the duration (ms) to remain" />
      </FormControl>
      <FormButton />
    </Form>;
}`,...(_=(z=v.parameters)==null?void 0:z.docs)==null?void 0:_.source}}};var G,K,J,M,Q;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`() => {
  const {
    addToast
  } = useToast();
  return <Inline>
      <Button onClick={() => {
      addToast({
        title: 'Toast id A',
        severity: 'info',
        description: \`this is toast number \${toastNumber++}\`,
        id: 'A'
      });
    }}>
        Add Info
      </Button>
      <Button onClick={() => {
      addToast({
        title: 'Toast id B',
        severity: 'warn',
        description: \`this is toast number \${toastNumber++}\`,
        id: 'B'
      });
    }}>
        Add Warning
      </Button>
      <Button onClick={() => {
      addToast({
        title: 'Toast id C',
        severity: 'error',
        description: \`this is toast number \${toastNumber++}\`,
        id: 'C'
      });
    }}>
        Add Error
      </Button>
    </Inline>;
}`,...(J=(K=h.parameters)==null?void 0:K.docs)==null?void 0:J.source},description:{story:`By adding a key you can restrict to only showing one toast with that key at a time.
This can be useful to reduce the clutter if there are lots of notifications.`,...(Q=(M=h.parameters)==null?void 0:M.docs)==null?void 0:Q.description}}};var X,Y,Z;w.parameters={...w.parameters,docs:{...(X=w.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => {
    const {
      addToast
    } = useToast();
    return <Inline>
        <Button onClick={() => {
        addToast({
          title: 'Toast With Close',
          description: \`this toast has a close button\`,
          close: true
        });
      }}>
          With Close
        </Button>
        <Button onClick={() => {
        addToast({
          title: 'Requires Closing',
          description: \`this toast must be dismissed manually\`,
          close: true,
          duration: null
        });
      }}>
          Requires closing
        </Button>
        <Button onClick={() => {
        addToast({
          title: 'With Action',
          description: 'this toast has an action which also closes the toast',
          altText: 'An alt text must also be supplied',
          actions: <Button variant="solid" onClick={action('clicked')}>
                  Action
                </Button>
        });
      }}>
          Action Button
        </Button>
        <Button onClick={() => {
        addToast({
          title: 'With Close Action',
          description: 'See actions panel - onClose is called as it it closed',
          onClose: action('onClose')
        });
      }}>
          Close Action
        </Button>
      </Inline>;
  },
  play: async ({
    canvasElement
  }) => {
    within(canvasElement).getByRole('button', {
      name: /With Close/i
    }).click();
    const notifications = await waitFor(async () => screen.findByLabelText(/Notifications/i));
    const closeButton = await waitFor(() => within(notifications).getByRole('button', {
      name: /Close/i
    }));

    // Cannot currently click automatically
    // userEvent.click(closeButton)
    closeButton.focus();
    userEvent.keyboard('[Escape]');
  }
}`,...(Z=(Y=w.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var tt,et,nt,ot,st;T.parameters={...T.parameters,docs:{...(tt=T.parameters)==null?void 0:tt.docs,source:{originalSource:`() => {
  const [open, setOpen] = React.useState(false);
  const eventDateRef = React.useRef(new Date());
  const timerRef = React.useRef(0);
  React.useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);
  function oneWeekAway() {
    const now = new Date();
    const inOneWeek = now.setDate(now.getDate() + 7);
    return new Date(inOneWeek);
  }
  const onClick = useCallback(() => {
    setOpen(false);
    window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      eventDateRef.current = oneWeekAway();
      setOpen(true);
    }, 100);
  }, []);
  return <ToastProvider swipeDirection="left">
      <Button onClick={onClick}>Add to calendar</Button>
      <ToastRoot open={open} onOpenChange={setOpen} severity="default">
        <ToastTitle>Scheduled: Catch up</ToastTitle>
        <ToastDescription asChild>
          <time dateTime={eventDateRef.current.toISOString()}>
            {eventDateRef.current.toLocaleString()}
          </time>
        </ToastDescription>
        <ToastAction asChild altText="Goto schedule to undo">
          <Button variant="solid" size="small">
            Undo
          </Button>
        </ToastAction>
      </ToastRoot>
      <ToastViewport className={css({
      bottom: 0,
      left: 0
    })} />
    </ToastProvider>;
}`,...(nt=(et=T.parameters)==null?void 0:et.docs)==null?void 0:nt.source},description:{story:"While the Toast component is wrapped for ease of use, its underlying root components\ncan still be accessed to allow for more customization, such as the toast appearing in the bottom left.\n\nEach application should have a `ToastProvider` and a `ToastViewport`, these are provided by default in the\n`ComponentsProvider`. they can be configured there or disabled and used separately.",...(st=(ot=T.parameters)==null?void 0:ot.docs)==null?void 0:st.description}}};const ve=["Default","UseToast","UseToastSeverity","UseToastProps","UseToastWithKey","OtherOptions","FullAccess"];export{y as Default,T as FullAccess,w as OtherOptions,p as UseToast,v as UseToastProps,m as UseToastSeverity,h as UseToastWithKey,ve as __namedExportsOrder,ye as default};
//# sourceMappingURL=Toast.stories-49a1093d.js.map

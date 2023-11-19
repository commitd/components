import{j as e,a as o,F as X}from"./jsx-runtime-03b4ddbf.js";import{i as Y}from"./hooks.esm-cc7a556e.js";import{a as f}from"./chunk-AY7I2SME-c7b6cf8a.js";import{r as no}from"./index-76fb7be0.js";import{D as i,a as n,b as l,c as D,d as Z,e as oo}from"./Dialog-0b39f444.js";import{B as a,I as ao}from"./Button-23e6de97.js";import{T as eo}from"./Text-561f173c.js";import{L as lo}from"./Link-72161c25.js";import{R as io}from"./Flex-1cfc0a73.js";import{C as ro}from"./Icons-43292f8c.js";import{I as m}from"./Inline-fdf2c0ff.js";import{B as r}from"./Box-f074bc4b.js";import{S as so}from"./Stack-d8c3aa6d.js";import"./_commonjsHelpers-de833af9.js";import"./component-92c13614.js";import"./extends-98964cd2.js";import"./index-ca20a0e4.js";import"./index-45a327ec.js";import"./index-421204d3.js";import"./index-f8c8b8ff.js";import"./index-296a96c6.js";import"./index-77dbc890.js";import"./index-add592e3.js";import"./index-56d74ee5.js";import"./index-251d008c.js";import"./index-c6da0816.js";import"./Overlay-1ca05ff0.js";import"./Paper-e773ea24.js";import"./Heading-1229930b.js";import"./ConditionalWrapper-8865b2c1.js";import"./Svg-cfd7f95e.js";import"./mdi-685d5538.js";const Uo={title:"Components/Dialog",component:i,subcomponents:{DialogContent:n,DialogTrigger:l,DialogClose:D,DialogTitle:Z,DialogDescription:oo}},p=()=>e(i,{children:[o(l,{children:o(a,{children:"Show Dialog"})}),o(n,{children:"This is a dialog"})]}),c=()=>{const[s,{setTrue:t,setFalse:T}]=Y(!1);return e(X,{children:[o(a,{onClick:t,children:"Show Dialog"}),o(i,{open:s,onOpenChange:T,children:e(n,{defaultClose:!1,children:[o(Z,{children:"This is a controlled dialog"}),o(oo,{children:"It can be closed by a click outside the dialog or using the esc key"})]})})]})},d=()=>{const[s,{setTrue:t,setFalse:T}]=Y(!1);return e(X,{children:[o(a,{onClick:t,children:"Show Dialog"}),o(i,{open:s,onOpenChange:T,children:e(n,{defaultClose:!1,css:{display:"flex",flexDirection:"column",gap:"$3"},children:[e(eo,{children:["This dialog has it's own close operations, such as"," ",o(D,{children:o(lo,{onClick:f("CloseLink"),children:"Close Link"})}),"."]}),e(io,{css:{justifyContent:"space-between"},children:[o(D,{children:o(ao,{onClick:f("CloseIcon"),children:o(ro,{})})}),o(D,{children:o(a,{variant:"solid",onClick:f("CloseButton"),children:"Close Button"})})]})]})})]})},g=()=>e(m,{align:"center",children:[e(i,{children:[o(l,{children:o(a,{children:"Default"})}),o(n,{overlayCss:{backgroundColor:"$surface.solid",opacity:.9},children:"This is a dialog"})]}),o(r,{css:{zIndex:10,backgroundColor:"$success.4"},children:e(i,{children:[o(l,{children:o(a,{children:"zIndex: 10"})}),o(n,{overlayCss:{backgroundColor:"$success.4",opacity:.9},children:"This is a dialog"})]})}),o(r,{css:{zIndex:100,backgroundColor:"$info.4"},children:e(i,{children:[o(l,{children:o(a,{children:"zIndex: 100"})}),o(n,{overlayCss:{backgroundColor:"$info.4",opacity:.9},children:"This is a dialog"})]})}),o(r,{css:{zIndex:1e3,backgroundColor:"$warn.4"},children:e(i,{children:[o(l,{children:o(a,{children:"zIndex: 1000"})}),o(n,{overlayCss:{backgroundColor:"$warn.4",opacity:.9},children:"This is a dialog"})]})}),o(r,{css:{zIndex:1e4,backgroundColor:"$error.4"},children:e(i,{children:[o(l,{children:o(a,{children:"zIndex: 10000"})}),o(n,{overlayCss:{backgroundColor:"$error.4",opacity:.9},children:"This is a dialog"})]})})]}),u=()=>e(m,{align:"center",children:[e(i,{children:[o(l,{children:o(a,{children:"Default"})}),o(n,{overlayCss:{backgroundColor:"$surface.solid",opacity:.9},portalled:!1,children:"This is a dialog"})]}),o(r,{css:{zIndex:10,backgroundColor:"$success.4"},children:e(i,{children:[o(l,{children:o(a,{children:"zIndex: 10"})}),o(n,{portalled:!1,overlayCss:{backgroundColor:"$success.4",opacity:.9},children:"This is a dialog"})]})}),o(r,{css:{zIndex:100,backgroundColor:"$info.4"},children:e(i,{children:[o(l,{children:o(a,{children:"zIndex: 100"})}),o(n,{portalled:!1,overlayCss:{backgroundColor:"$info.11.a",opacity:.9},children:"This is a dialog"})]})}),o(r,{css:{zIndex:1e3,backgroundColor:"$warn.4"},children:e(i,{children:[o(l,{children:o(a,{children:"zIndex: 1000"})}),o(n,{portalled:!1,overlayCss:{backgroundColor:"$warn.4",opacity:.9},children:"This is a dialog"})]})}),o(r,{css:{zIndex:1e4,backgroundColor:"$error.4"},children:e(i,{children:[o(l,{children:o(a,{children:"zIndex: 10000"})}),o(n,{portalled:!1,overlayCss:{backgroundColor:"$error.4",opacity:.9},children:"This is a dialog"})]})})]}),h=()=>{const[s,t]=no.useState(null);return e(so,{align:"center",children:[e(m,{align:"center",children:[e(i,{children:[o(l,{children:o(a,{children:"Default"})}),o(n,{container:s,overlayCss:{position:"absolute"},css:{position:"absolute",marginTop:0},children:"This is a dialog"})]}),o(r,{css:{zIndex:10,backgroundColor:"$success.4"},children:e(i,{children:[o(l,{children:o(a,{children:"zIndex: 10"})}),o(n,{container:s,overlayCss:{backgroundColor:"$success.4",opacity:.9,position:"absolute"},css:{position:"absolute",marginTop:0},children:"This is a dialog"})]})}),o(r,{css:{zIndex:100,backgroundColor:"$info4"},children:e(i,{children:[o(l,{children:o(a,{children:"zIndex: 100"})}),o(n,{container:s,overlayCss:{backgroundColor:"$info.4",opacity:.9,position:"absolute"},css:{position:"absolute",marginTop:0},children:"This is a dialog"})]})}),o(r,{css:{zIndex:1e3,backgroundColor:"$warn.4"},children:e(i,{children:[o(l,{children:o(a,{children:"zIndex: 1000"})}),o(n,{container:s,overlayCss:{backgroundColor:"$warn.4",opacity:.9,position:"absolute"},css:{position:"absolute",marginTop:0},children:"This is a dialog"})]})}),o(r,{css:{zIndex:1e4,backgroundColor:"$error.4"},children:e(i,{children:[o(l,{children:o(a,{children:"zIndex: 10000"})}),o(n,{container:s,overlayCss:{backgroundColor:"$error.4",opacity:.9,position:"absolute"},css:{position:"absolute",marginTop:0},children:"This is a dialog"})]})})]}),o(io,{css:{position:"relative",minHeight:"200px",minWidth:"100%"},centered:!0,ref:t,children:o(eo,{children:"This area will now contain the dialog"})})]})},C=()=>e(m,{children:[e(i,{children:[o(l,{children:o(a,{children:"Show Glass"})}),o(n,{overlay:"clear",surface:"glass",defaultClose:!1,children:"This is a glass dialog"})]}),e(i,{children:[o(l,{children:o(a,{children:"Show Neutral"})}),o(n,{overlay:"glass",surface:"neutral",defaultClose:!1,children:"This is a glass overlay with neutral dialog"})]}),e(i,{children:[o(l,{children:o(a,{children:"Show solid"})}),o(n,{overlay:"solid",surface:"solid",defaultClose:!1,children:"This is a solid overlay dialog"})]})]});var b,x,y;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`() => <Dialog>
    <DialogTrigger>
      <Button>Show Dialog</Button>
    </DialogTrigger>
    <DialogContent>This is a dialog</DialogContent>
  </Dialog>`,...(y=(x=p.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var B,k,I,z,$;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
  const [open, {
    setTrue,
    setFalse
  }] = useBoolean(false);
  return <>
      <Button onClick={setTrue}>Show Dialog</Button>
      <Dialog open={open} onOpenChange={setFalse}>
        <DialogContent defaultClose={false}>
          <DialogTitle>This is a controlled dialog</DialogTitle>
          <DialogDescription>
            It can be closed by a click outside the dialog or using the esc key
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </>;
}`,...(I=(k=c.parameters)==null?void 0:k.docs)==null?void 0:I.source},description:{story:"It is likely that the dialog will need to be controlled to support further actions and different closing behaviours.\nThis can be done using the `open` and `onOpenChange` props.",...($=(z=c.parameters)==null?void 0:z.docs)==null?void 0:$.description}}};var v,w,S,F,L;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  const [open, {
    setTrue,
    setFalse
  }] = useBoolean(false);
  return <>
      <Button onClick={setTrue}>Show Dialog</Button>
      <Dialog open={open} onOpenChange={setFalse}>
        <DialogContent defaultClose={false} css={{
        display: 'flex',
        flexDirection: 'column',
        gap: '$3'
      }}>
          <Text>
            This dialog has it's own close operations, such as{' '}
            <DialogClose>
              <Link onClick={action('CloseLink')}>Close Link</Link>
            </DialogClose>
            .
          </Text>
          <Row css={{
          justifyContent: 'space-between'
        }}>
            <DialogClose>
              <IconButton onClick={action('CloseIcon')}>
                <CloseIcon />
              </IconButton>
            </DialogClose>
            <DialogClose>
              <Button variant="solid" onClick={action('CloseButton')}>
                Close Button
              </Button>
            </DialogClose>
          </Row>
        </DialogContent>
      </Dialog>
    </>;
}`,...(S=(w=d.parameters)==null?void 0:w.docs)==null?void 0:S.source},description:{story:"Additional close or custom actions that also close the dialog should use a `DialogClose`.",...(L=(F=d.parameters)==null?void 0:F.docs)==null?void 0:L.description}}};var E,O,R,j,H;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
  return <Inline align="center">
      <Dialog>
        <DialogTrigger>
          <Button>Default</Button>
        </DialogTrigger>
        <DialogContent overlayCss={{
        backgroundColor: '$surface.solid',
        opacity: 0.9
      }}>
          This is a dialog
        </DialogContent>
      </Dialog>
      <Box css={{
      zIndex: 10,
      backgroundColor: '$success.4'
    }}>
        <Dialog>
          <DialogTrigger>
            <Button>zIndex: 10</Button>
          </DialogTrigger>
          <DialogContent overlayCss={{
          backgroundColor: '$success.4',
          opacity: 0.9
        }}>
            This is a dialog
          </DialogContent>
        </Dialog>
      </Box>
      <Box css={{
      zIndex: 100,
      backgroundColor: '$info.4'
    }}>
        <Dialog>
          <DialogTrigger>
            <Button>zIndex: 100</Button>
          </DialogTrigger>
          <DialogContent overlayCss={{
          backgroundColor: '$info.4',
          opacity: 0.9
        }}>
            This is a dialog
          </DialogContent>
        </Dialog>
      </Box>
      <Box css={{
      zIndex: 1000,
      backgroundColor: '$warn.4'
    }}>
        <Dialog>
          <DialogTrigger>
            <Button>zIndex: 1000</Button>
          </DialogTrigger>
          <DialogContent overlayCss={{
          backgroundColor: '$warn.4',
          opacity: 0.9
        }}>
            This is a dialog
          </DialogContent>
        </Dialog>
      </Box>
      <Box css={{
      zIndex: 10000,
      backgroundColor: '$error.4'
    }}>
        <Dialog>
          <DialogTrigger>
            <Button>zIndex: 10000</Button>
          </DialogTrigger>
          <DialogContent overlayCss={{
          backgroundColor: '$error.4',
          opacity: 0.9
        }}>
            This is a dialog
          </DialogContent>
        </Dialog>
      </Box>
    </Inline>;
}`,...(R=(O=g.parameters)==null?void 0:O.docs)==null?void 0:R.source},description:{story:`The dialog is portalled by default. This means the dialog will be appended to the body and so over lay other elements.
In addition, the \`ComponentsProvider\`, by default, isolates the children in their own stacking context so this will not be affected by the z-index of other elements of the UI.

This example shows how the z-index of other elements in the UI do not affect the dialog.

This may not be the desired behaviour for your application so these defaults can be overridden, see below.`,...(H=(j=g.parameters)==null?void 0:j.docs)==null?void 0:H.description}}};var P,G,N,U,W;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
  return <Inline align="center">
      <Dialog>
        <DialogTrigger>
          <Button>Default</Button>
        </DialogTrigger>
        <DialogContent overlayCss={{
        backgroundColor: '$surface.solid',
        opacity: 0.9
      }} portalled={false}>
          This is a dialog
        </DialogContent>
      </Dialog>
      <Box css={{
      zIndex: 10,
      backgroundColor: '$success.4'
    }}>
        <Dialog>
          <DialogTrigger>
            <Button>zIndex: 10</Button>
          </DialogTrigger>
          <DialogContent portalled={false} overlayCss={{
          backgroundColor: '$success.4',
          opacity: 0.9
        }}>
            This is a dialog
          </DialogContent>
        </Dialog>
      </Box>
      <Box css={{
      zIndex: 100,
      backgroundColor: '$info.4'
    }}>
        <Dialog>
          <DialogTrigger>
            <Button>zIndex: 100</Button>
          </DialogTrigger>
          <DialogContent portalled={false} overlayCss={{
          backgroundColor: '$info.11.a',
          opacity: 0.9
        }}>
            This is a dialog
          </DialogContent>
        </Dialog>
      </Box>
      <Box css={{
      zIndex: 1000,
      backgroundColor: '$warn.4'
    }}>
        <Dialog>
          <DialogTrigger>
            <Button>zIndex: 1000</Button>
          </DialogTrigger>
          <DialogContent portalled={false} overlayCss={{
          backgroundColor: '$warn.4',
          opacity: 0.9
        }}>
            This is a dialog
          </DialogContent>
        </Dialog>
      </Box>
      <Box css={{
      zIndex: 10000,
      backgroundColor: '$error.4'
    }}>
        <Dialog>
          <DialogTrigger>
            <Button>zIndex: 10000</Button>
          </DialogTrigger>
          <DialogContent portalled={false} overlayCss={{
          backgroundColor: '$error.4',
          opacity: 0.9
        }}>
            This is a dialog
          </DialogContent>
        </Dialog>
      </Box>
    </Inline>;
}`,...(N=(G=u.parameters)==null?void 0:G.docs)==null?void 0:N.source},description:{story:"Turning off portalling will mean the zIndex of the dialog will be relative to the zIndex of the element it is appended to.",...(W=(U=u.parameters)==null?void 0:U.docs)==null?void 0:W.description}}};var _,A,M,q,J;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
  const [element, setElement] = useState<HTMLElement | null>(null);
  return <Stack align="center">
      <Inline align="center">
        <Dialog>
          <DialogTrigger>
            <Button>Default</Button>
          </DialogTrigger>
          <DialogContent container={element} overlayCss={{
          position: 'absolute'
        }} css={{
          position: 'absolute',
          marginTop: 0
        }}>
            This is a dialog
          </DialogContent>
        </Dialog>
        <Box css={{
        zIndex: 10,
        backgroundColor: '$success.4'
      }}>
          <Dialog>
            <DialogTrigger>
              <Button>zIndex: 10</Button>
            </DialogTrigger>
            <DialogContent container={element} overlayCss={{
            backgroundColor: '$success.4',
            opacity: 0.9,
            position: 'absolute'
          }} css={{
            position: 'absolute',
            marginTop: 0
          }}>
              This is a dialog
            </DialogContent>
          </Dialog>
        </Box>
        <Box css={{
        zIndex: 100,
        backgroundColor: '$info4'
      }}>
          <Dialog>
            <DialogTrigger>
              <Button>zIndex: 100</Button>
            </DialogTrigger>
            <DialogContent container={element} overlayCss={{
            backgroundColor: '$info.4',
            opacity: 0.9,
            position: 'absolute'
          }} css={{
            position: 'absolute',
            marginTop: 0
          }}>
              This is a dialog
            </DialogContent>
          </Dialog>
        </Box>
        <Box css={{
        zIndex: 1000,
        backgroundColor: '$warn.4'
      }}>
          <Dialog>
            <DialogTrigger>
              <Button>zIndex: 1000</Button>
            </DialogTrigger>
            <DialogContent container={element} overlayCss={{
            backgroundColor: '$warn.4',
            opacity: 0.9,
            position: 'absolute'
          }} css={{
            position: 'absolute',
            marginTop: 0
          }}>
              This is a dialog
            </DialogContent>
          </Dialog>
        </Box>
        <Box css={{
        zIndex: 10000,
        backgroundColor: '$error.4'
      }}>
          <Dialog>
            <DialogTrigger>
              <Button>zIndex: 10000</Button>
            </DialogTrigger>
            <DialogContent container={element} overlayCss={{
            backgroundColor: '$error.4',
            opacity: 0.9,
            position: 'absolute'
          }} css={{
            position: 'absolute',
            marginTop: 0
          }}>
              This is a dialog
            </DialogContent>
          </Dialog>
        </Box>
      </Inline>
      <Row css={{
      position: 'relative',
      minHeight: '200px',
      minWidth: '100%'
    }} centered ref={setElement}>
        <Text>This area will now contain the dialog</Text>
      </Row>
    </Stack>;
}`,...(M=(A=h.parameters)==null?void 0:A.docs)==null?void 0:M.source},description:{story:"The element the dialog portals to can be provided, and different effects can be achieved by supplying additional css. For example:",...(J=(q=h.parameters)==null?void 0:q.docs)==null?void 0:J.description}}};var K,Q,V;C.parameters={...C.parameters,docs:{...(K=C.parameters)==null?void 0:K.docs,source:{originalSource:`() => <Inline>
    <Dialog>
      <DialogTrigger>
        <Button>Show Glass</Button>
      </DialogTrigger>
      <DialogContent overlay="clear" surface="glass" defaultClose={false}>
        This is a glass dialog
      </DialogContent>
    </Dialog>
    <Dialog>
      <DialogTrigger>
        <Button>Show Neutral</Button>
      </DialogTrigger>
      <DialogContent overlay="glass" surface="neutral" defaultClose={false}>
        This is a glass overlay with neutral dialog
      </DialogContent>
    </Dialog>
    <Dialog>
      <DialogTrigger>
        <Button>Show solid</Button>
      </DialogTrigger>
      <DialogContent overlay="solid" surface="solid" defaultClose={false}>
        This is a solid overlay dialog
      </DialogContent>
    </Dialog>
  </Inline>`,...(V=(Q=C.parameters)==null?void 0:Q.docs)==null?void 0:V.source}}};const Wo=["Default","Controllable","CloseButton","Portalled","zIndex","Container","Surfaces"];export{d as CloseButton,h as Container,c as Controllable,p as Default,g as Portalled,C as Surfaces,Wo as __namedExportsOrder,Uo as default,u as zIndex};
//# sourceMappingURL=Dialog.stories-0b24623f.js.map

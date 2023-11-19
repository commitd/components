import{j as y,a}from"./jsx-runtime-03b4ddbf.js";import{w as k,e as t,u as i,a as p}from"./index-4345948b.js";import{A as E,a as B,b as d,c as T}from"./Accordion-13d177bd.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./_baseIsEqual-f876697f.js";import"./index-03bbf7d1.js";import"./uniq-da390a93.js";import"./index-d38bc732.js";import"./index-356e4a49.js";import"./component-92c13614.js";import"./extends-98964cd2.js";import"./index-421204d3.js";import"./index-7896d420.js";import"./index-45a327ec.js";import"./index-77dbc890.js";import"./index-add592e3.js";import"./index-c6da0816.js";import"./index-f8c8b8ff.js";import"./index-c6b1b4f9.js";import"./Button-23e6de97.js";import"./Svg-cfd7f95e.js";import"./Paper-e773ea24.js";import"./Icons-43292f8c.js";import"./mdi-685d5538.js";const oe={title:"Components/Accordion",component:E,subcomponents:{AccordionItem:B,AccordionHeader:d,AccordionContent:T},argTypes:{type:{defaultValue:"single",control:{type:"select"},options:["single","multiple"],description:"Defines the policy for how many items can be open"},collapsible:{defaultValue:!0,control:{type:"boolean"},description:"In single mode only, declares that they can all be closed."}}},o="Here goes the content for the accordion item 1.",c="Here goes the content for the accordion item 2.",r="Here goes the content for the accordion item 3.",s={render:({type:m,...n})=>y(E,{type:m,...n,children:[y(B,{value:"item-1",children:[a(d,{children:"Item 1"}),a(T,{children:o})]}),y(B,{value:"item-2",children:[a(d,{children:"Item 2"}),a(T,{children:c})]}),y(B,{value:"item-3",children:[a(d,{children:"Item 3"}),a(T,{children:r})]})]})},u={...s,args:{type:"multiple"},play:async({canvasElement:m,step:n})=>{const e=k(m);await n("Starts closed",async()=>{t(e.queryByText(o)).not.toBeInTheDocument(),t(e.queryByText(c)).not.toBeInTheDocument(),t(e.queryByText(r)).not.toBeInTheDocument()}),await n("Can open 1",async()=>{i.click(e.getByRole("button",{name:/Item 1/i})),await p(()=>{t(e.getByText(o)).toBeInTheDocument()}),t(e.queryByText(c)).not.toBeInTheDocument(),t(e.queryByText(r)).not.toBeInTheDocument()}),await n("Can open 2",async()=>{i.click(e.getByRole("button",{name:/Item 2/i})),await p(()=>{t(e.getByText(o)).toBeInTheDocument(),t(e.queryByText(c)).toBeInTheDocument()}),t(e.queryByText(r)).not.toBeInTheDocument()}),await n("Can close all",async()=>{i.click(e.getByRole("button",{name:/Item 1/i})),i.click(e.getByRole("button",{name:/Item 2/i})),await p(()=>{t(e.queryByText(o)).not.toBeInTheDocument(),t(e.queryByText(c)).not.toBeInTheDocument(),t(e.queryByText(r)).not.toBeInTheDocument()})})}},l={...s,args:{type:"single",collapsible:!1,defaultValue:"item-1"},play:async({canvasElement:m,step:n})=>{const e=k(m);await n("Starts open",async()=>{t(e.getByLabelText(/Item 1/i)).toBeInTheDocument(),t(e.queryByText(o)).toBeInTheDocument(),t(e.queryByText(c)).not.toBeInTheDocument(),t(e.queryByText(r)).not.toBeInTheDocument()}),await n("Open 2 closes 1",async()=>{i.click(e.getByRole("button",{name:/Item 2/i})),await p(()=>{t(e.queryByText(o)).not.toBeInTheDocument(),t(e.getByText(c)).toBeInTheDocument(),t(e.queryByText(r)).not.toBeInTheDocument()})}),await n("Return to start state",async()=>{i.click(e.getByRole("button",{name:/Item 1/i}))})}};var I,h,x;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: ({
    type,
    ...args
  }) => {
    return <Accordion type={type} {...args}>
        <AccordionItem value="item-1">
          <AccordionHeader>Item 1</AccordionHeader>
          <AccordionContent>{item1}</AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionHeader>Item 2</AccordionHeader>
          <AccordionContent>{item2}</AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionHeader>Item 3</AccordionHeader>
          <AccordionContent>{item3}</AccordionContent>
        </AccordionItem>
      </Accordion>;
  }
}`,...(x=(h=s.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var D,g,w,q,A;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  ...Default,
  args: {
    type: 'multiple'
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const screen = within(canvasElement);
    await step('Starts closed', async () => {
      expect(screen.queryByText(item1)).not.toBeInTheDocument();
      expect(screen.queryByText(item2)).not.toBeInTheDocument();
      expect(screen.queryByText(item3)).not.toBeInTheDocument();
    });
    await step('Can open 1', async () => {
      userEvent.click(screen.getByRole('button', {
        name: /Item 1/i
      }));
      await waitFor(() => {
        expect(screen.getByText(item1)).toBeInTheDocument();
      });
      expect(screen.queryByText(item2)).not.toBeInTheDocument();
      expect(screen.queryByText(item3)).not.toBeInTheDocument();
    });
    await step('Can open 2', async () => {
      userEvent.click(screen.getByRole('button', {
        name: /Item 2/i
      }));
      await waitFor(() => {
        expect(screen.getByText(item1)).toBeInTheDocument();
        expect(screen.queryByText(item2)).toBeInTheDocument();
      });
      expect(screen.queryByText(item3)).not.toBeInTheDocument();
    });
    await step('Can close all', async () => {
      userEvent.click(screen.getByRole('button', {
        name: /Item 1/i
      }));
      userEvent.click(screen.getByRole('button', {
        name: /Item 2/i
      }));
      await waitFor(() => {
        expect(screen.queryByText(item1)).not.toBeInTheDocument();
        expect(screen.queryByText(item2)).not.toBeInTheDocument();
        expect(screen.queryByText(item3)).not.toBeInTheDocument();
      });
    });
  }
}`,...(w=(g=u.parameters)==null?void 0:g.docs)==null?void 0:w.source},description:{story:"By setting `type` to multiple the accordion can have multiple sections open at once.",...(A=(q=u.parameters)==null?void 0:q.docs)==null?void 0:A.description}}};var b,f,v,C,R;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...Default,
  args: {
    type: 'single',
    collapsible: false,
    defaultValue: 'item-1'
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const screen = within(canvasElement);
    await step('Starts open', async () => {
      expect(screen.getByLabelText(/Item 1/i)).toBeInTheDocument();
      expect(screen.queryByText(item1)).toBeInTheDocument();
      expect(screen.queryByText(item2)).not.toBeInTheDocument();
      expect(screen.queryByText(item3)).not.toBeInTheDocument();
    });
    await step('Open 2 closes 1', async () => {
      userEvent.click(screen.getByRole('button', {
        name: /Item 2/i
      }));
      await waitFor(() => {
        expect(screen.queryByText(item1)).not.toBeInTheDocument();
        expect(screen.getByText(item2)).toBeInTheDocument();
        expect(screen.queryByText(item3)).not.toBeInTheDocument();
      });
    });
    await step('Return to start state', async () => {
      userEvent.click(screen.getByRole('button', {
        name: /Item 1/i
      }));
    });
  }
}`,...(v=(f=l.parameters)==null?void 0:f.docs)==null?void 0:v.source},description:{story:"By setting `collapsible` to `false` and provided a `defaultValue` we can create an always one open accordion.",...(R=(C=l.parameters)==null?void 0:C.docs)==null?void 0:R.description}}};const ce=["Default","Multiple","OneOpen"];export{s as Default,u as Multiple,l as OneOpen,ce as __namedExportsOrder,oe as default};
//# sourceMappingURL=Accordion.stories-0057ec56.js.map

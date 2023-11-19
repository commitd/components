import{j as r,a as e}from"./jsx-runtime-03b4ddbf.js";import{r as n}from"./index-76fb7be0.js";import"./Variants-32aa23ce.js";import"./component-92c13614.js";import{F as D,b as I,a as q,r as y}from"./withForm-df956169.js";import{F as o,a as l}from"./FormControl-6b9cc0be.js";import{L as R,b as de}from"./Label-bb409e96.js";import{I as m}from"./Input-0138999c.js";import{T as N}from"./TextArea-0d434fea.js";import{S as V,a as T}from"./Select-564ad3c3.js";import{C as i}from"./Checkbox-ee294c7f.js";import{R as P,a as x}from"./RadioGroup-7841df2b.js";import{S as H}from"./Slider-ca47b191.js";import{S as L}from"./Stack-d8c3aa6d.js";import{I as O}from"./Inline-fdf2c0ff.js";import"./_commonjsHelpers-de833af9.js";import"./Box-f074bc4b.js";import"./Grid-599ad893.js";import"./Tooltip-53dd1a2c.js";import"./extends-98964cd2.js";import"./index-45a327ec.js";import"./index-421204d3.js";import"./index-296a96c6.js";import"./index-77dbc890.js";import"./index-add592e3.js";import"./index-f8c8b8ff.js";import"./index-01bbf444.js";import"./index-1a2315aa.js";import"./index-251d008c.js";import"./index-c6da0816.js";import"./index-207695d4.js";import"./Text-561f173c.js";import"./ConditionalWrapper-8865b2c1.js";import"./Button-23e6de97.js";import"./Svg-cfd7f95e.js";import"./index-6a2b73ba.js";import"./index-7896d420.js";import"./index-c6b1b4f9.js";import"./index-56d74ee5.js";import"./index-11a3acc1.js";import"./Paper-e773ea24.js";import"./Icons-43292f8c.js";import"./mdi-685d5538.js";import"./index-d178eb19.js";import"./hooks.esm-cc7a556e.js";import"./Popover-7d7d988f.js";const rr={title:"Components/FormControl",component:o,subcomponents:{FormControlHelp:l,Label:R,Input:m,TextArea:N,Select:V,Checkbox:i,RadioGroup:P,Slider:H}},g=()=>r(o,{children:[e(m,{label:"Demo",name:"demo"}),e(l,{defaultText:"This is the help",errorText:"This is the error",validText:"This is the valid text"})]}),S=()=>{const[d,p]=n.useState("indeterminate"),[c,b]=n.useState(!1),[h,C]=n.useState(!1),[t,a]=n.useState(!1),[u,f]=n.useState(!1),v=y(p);return r(L,{spacing:"large",children:[r(O,{children:[e(i,{checked:d,onCheckedChange:v,label:"Required"}),e(i,{checked:c,onCheckedChange:b,label:"Disabled"}),e(i,{checked:h,onCheckedChange:C,label:"Error"}),e(i,{checked:t,onCheckedChange:a,label:"Valid"}),e(i,{checked:u,onCheckedChange:f,label:"Native"})]}),r(o,{children:[e(m,{type:"text",id:"test",label:"Test",error:h,valid:t,disabled:c,native:u,required:d==="indeterminate"?void 0:d}),e(l,{defaultText:"This is the help",errorText:"This is the error",validText:"This is the valid text"})]})]})},E=()=>{const[d,p]=n.useState(""),[c,b]=n.useState("");function h(a){if(typeof a!="string"||a.length<3)throw Error("Usernames must be at least 3 characters long");if(!a.includes("@"))throw Error("Invalid email")}function C(a){if(typeof a!="string"||a.length<6)throw Error("Passwords must be at least 6 characters long");if(!/[!@.$^*()]/.test(a))throw Error("Passwords must contain at least 1 special character")}const t={email:null,password:null,touched:"Not filled in"};if(d||c){if(t.touched=null,!d)t.email="Email is required";else try{h(d)}catch(a){a instanceof Error?t.email=a.message:typeof a=="string"?t.email=a:t.email="There was an error with this field"}if(!c)t.password="Password is required";else try{C(c)}catch(a){a instanceof Error?t.password=a.message:typeof a=="string"?t.password=a:t.password="There was an error with this field"}}return r(D,{onSubmit:I(alert),children:[r(o,{children:[e(m,{name:"email",id:"signin-email",label:"Email",type:"email",value:d,onValueChange:p,placeholder:"hello@committed.io",error:!!(t!=null&&t.email),valid:d.length>3,required:!0}),e(l,{defaultText:"Input your email address",errorText:t==null?void 0:t.email})]}),r(o,{children:[e(m,{name:"password",id:"signin-password",type:"password",label:"Password",value:c,onValueChange:b,error:!!(t!=null&&t.password),required:!0}),e(l,{defaultText:"Input your password",errorText:t==null?void 0:t.password})]}),e(q,{errors:t})]})},k=()=>r(D,{onSubmit:I(alert),children:[r(o,{children:[e(m,{name:"email",label:"Email",type:"email",placeholder:"hello@committed.io",minLength:3,required:!0,native:!0}),e(l,{defaultText:"Input your email address"})]}),r(o,{children:[e(m,{name:"password",type:"password",label:"Password",pattern:"^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$",required:!0,native:!0,title:"Password must have minimum eight characters, at least one letter, one number and one special character"}),e(l,{defaultText:"Input your password"})]}),e(q,{})]}),F=()=>{const[d,p]=n.useState("indeterminate"),[c,b]=n.useState(!1),[h,C]=n.useState(!1),[t,a]=n.useState(!1),[u,f]=n.useState(!1),v=y(p),s={error:h,valid:t,disabled:c,required:d==="indeterminate"?void 0:d,native:u};return r(L,{spacing:"large",children:[r(O,{children:[e(i,{checked:d,onCheckedChange:v,label:"Required"}),e(i,{checked:c,onCheckedChange:b,label:"Disabled"}),e(i,{checked:h,onCheckedChange:C,label:"Error"}),e(i,{checked:t,onCheckedChange:a,label:"Valid"}),e(i,{checked:u,onCheckedChange:f,label:"Native"})]}),r(D,{onSubmit:I(alert),children:[e(o,{children:e(m,{...s,name:"demo1",label:"Demo 1",type:"email",placeholder:"hello@committed.io"})}),r(o,{children:[r(R,{htmlFor:"demo-2",children:["Own Label",e(de,{})]}),e(m,{...s,name:"demo2",type:"password"}),e(l,{defaultText:"This is a demo"})]}),r(o,{children:[e(m,{...s,name:"demo3",label:"Demo 3"}),e(l,{defaultText:"This is a demo",errorText:"This is an error"})]}),r(o,{children:[r(V,{...s,name:"demo4",label:"Demo 4",defaultValue:"one",children:[e(T,{value:"one",children:"One"}),e(T,{value:"two",children:"Two"}),e(T,{value:"three",children:"Three"})]}),e(l,{defaultText:"This is a demo",errorText:"This is an error",validText:"This is an error"})]}),r(o,{children:[e(i,{...s,name:"demo5",label:"Demo 5"}),e(l,{defaultText:"Check the box"})]}),r(o,{children:[r(P,{...s,name:"demo6",label:"Demo 6",children:[e(x,{value:"mobx",label:"Mobx"}),e(x,{value:"redux",label:"Redux"}),e(x,{value:"context",label:"Context"})]}),e(l,{defaultText:"This is a demo",errorText:"This is an error",validText:"This is valid"})]}),e(o,{children:e(m,{...s,name:"demo7",placeholder:"No label!!"})}),r(o,{children:[e(N,{...s,name:"demo8",label:"Demo 8"}),e(l,{defaultText:"This is a demo",errorText:"This is an error",validText:"This is valid"})]}),r(o,{children:[e(H,{...s,name:"demo9",label:"Demo 9"}),e(l,{defaultText:"This is a demo",errorText:"This is an error",validText:"This is valid"})]}),e(q,{})]})]})},w=()=>{const[d,p]=n.useState("indeterminate"),[c,b]=n.useState(!1),[h,C]=n.useState(!1),[t,a]=n.useState(!1),[u,f]=n.useState(!1),v=y(p),s={error:h,valid:t,disabled:c,required:d==="indeterminate"?void 0:d,native:u};return r(L,{spacing:"large",children:[r(O,{children:[e(i,{checked:d,onCheckedChange:v,label:"Required"}),e(i,{checked:c,onCheckedChange:b,label:"Disabled"}),e(i,{checked:h,onCheckedChange:C,label:"Error"}),e(i,{checked:t,onCheckedChange:a,label:"Valid"}),e(i,{checked:u,onCheckedChange:f,label:"Native"})]}),r(D,{onSubmit:I(alert),children:[e(o,{children:e(m,{...s,name:"demo1",id:"demo-1",label:"Demo 1",type:"email",placeholder:"hello@committed.io"})}),r(o,{children:[r(R,{htmlFor:"demo-2",children:["Own Label",e(de,{})]}),e(m,{...s,name:"demo2",id:"demo-2",type:"password"}),e(l,{defaultText:"This is a demo"})]}),r(o,{children:[e(m,{...s,name:"demo3",id:"demo-3",label:"Demo 3"}),e(l,{defaultText:"This is a demo",errorText:"This is an error"})]}),r(o,{children:[r(V,{...s,name:"demo4",id:"demo-4",label:"Demo 4",defaultValue:"one",children:[e(T,{value:"one",children:"One"}),e(T,{value:"two",children:"Two"}),e(T,{value:"three",children:"Three"})]}),e(l,{defaultText:"This is a demo",errorText:"This is an error"})]}),r(o,{children:[e(i,{...s,name:"demo5",id:"demo-5",label:"Demo 5"}),e(l,{defaultText:"Check the box"})]}),r(o,{children:[r(P,{...s,name:"demo6",id:"demo-6",label:"Demo 6",children:[e(x,{value:"mobx",label:"Mobx"}),e(x,{value:"redux",label:"Redux"}),e(x,{value:"context",label:"Context"})]}),e(l,{defaultText:"This is a demo",errorText:"This is an error"})]}),e(o,{children:e(m,{...s,name:"demo7",id:"demo-7",placeholder:"No label!!"})}),r(o,{children:[e(N,{...s,name:"demo8",id:"demo-8",label:"Demo 8"}),e(l,{defaultText:"This is a demo",errorText:"This is an error"})]}),r(o,{children:[e(H,{...s,name:"demo9",id:"demo-9",label:"Demo 9"}),e(l,{defaultText:"This is a demo",errorText:"This is an error",validText:"This is an error"})]}),e(q,{})]})]})};var A,$,B;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`() => <FormControl>
    <Input label="Demo" name="demo" />
    <FormControlHelp defaultText="This is the help" errorText="This is the error" validText="This is the valid text" />
  </FormControl>`,...(B=($=g.parameters)==null?void 0:$.docs)==null?void 0:B.source}}};var G,_,j;S.parameters={...S.parameters,docs:{...(G=S.parameters)==null?void 0:G.docs,source:{originalSource:`() => {
  const [required, setRequired] = useState<CheckedState>('indeterminate');
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState(false);
  const [valid, setValid] = useState(false);
  const [native, setNative] = useState(false);
  const rotate = rotateCheckedState(setRequired);
  return <Stack spacing="large">
      <Inline>
        <Checkbox checked={required} onCheckedChange={rotate} label="Required"></Checkbox>
        <Checkbox checked={disabled} onCheckedChange={setDisabled} label="Disabled"></Checkbox>
        <Checkbox checked={error} onCheckedChange={setError} label="Error"></Checkbox>
        <Checkbox checked={valid} onCheckedChange={setValid} label="Valid"></Checkbox>
        <Checkbox checked={native} onCheckedChange={setNative} label="Native"></Checkbox>
      </Inline>

      <FormControl>
        <Input type="text" id="test" label="Test" error={error} valid={valid} disabled={disabled} native={native} required={required === 'indeterminate' ? undefined : required} />
        <FormControlHelp defaultText="This is the help" errorText="This is the error" validText="This is the valid text" />
      </FormControl>
    </Stack>;
}`,...(j=(_=S.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};var z,M,U;E.parameters={...E.parameters,docs:{...(z=E.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
  type TextFields = 'email' | 'password' | 'touched';
  type FieldErrors = Record<TextFields, string | null>;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  function validateEmail(testEmail: unknown) {
    if (typeof testEmail !== 'string' || testEmail.length < 3) {
      throw Error('Usernames must be at least 3 characters long');
    }

    // You can do real email validation here. This is just to keep it simple and
    // illustrate the point :)
    if (!testEmail.includes('@')) {
      throw Error('Invalid email');
    }
  }
  function validatePassword(testPassword: unknown) {
    if (typeof testPassword !== 'string' || testPassword.length < 6) {
      throw Error('Passwords must be at least 6 characters long');
    }
    if (!/[!@.$^*()]/.test(testPassword)) {
      throw Error('Passwords must contain at least 1 special character');
    }
  }
  const fieldErrors: FieldErrors = {
    email: null,
    password: null,
    touched: 'Not filled in'
  };
  if (!!email || !!password) {
    fieldErrors.touched = null;
    if (!email) {
      fieldErrors.email = 'Email is required';
    } else {
      try {
        validateEmail(email);
      } catch (e) {
        if (e instanceof Error) {
          fieldErrors.email = e.message;
        } else if (typeof e === 'string') {
          fieldErrors.email = e;
        } else {
          fieldErrors.email = 'There was an error with this field';
        }
      }
    }
    if (!password) {
      fieldErrors.password = 'Password is required'; // nosonar
    } else {
      try {
        validatePassword(password);
      } catch (e) {
        if (e instanceof Error) {
          fieldErrors.password = e.message;
        } else if (typeof e === 'string') {
          fieldErrors.password = e;
        } else {
          fieldErrors.password = 'There was an error with this field'; // nosonar
        }
      }
    }
  }

  return <Form onSubmit={withFormData(alert)}>
      <FormControl>
        <Input name="email" id="signin-email" label="Email" type="email" value={email} onValueChange={setEmail} placeholder="hello@committed.io" error={!!fieldErrors?.email} valid={email.length > 3} required />
        <FormControlHelp defaultText="Input your email address" errorText={fieldErrors?.email} />
      </FormControl>
      <FormControl>
        <Input name="password" id="signin-password" type="password" label="Password" value={password} onValueChange={setPassword} error={!!fieldErrors?.password} required />
        <FormControlHelp defaultText="Input your password" errorText={fieldErrors?.password} />
      </FormControl>
      <FormButton errors={fieldErrors} />
    </Form>;
}`,...(U=(M=E.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};var Z,W,Y,J,K;k.parameters={...k.parameters,docs:{...(Z=k.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
  return <Form onSubmit={withFormData(alert)}>
      <FormControl>
        <Input name="email" label="Email" type="email" placeholder="hello@committed.io" minLength={3} required native />
        <FormControlHelp defaultText="Input your email address" />
      </FormControl>
      <FormControl>
        <Input name="password" type="password" label="Password" pattern="^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$" required native title="Password must have minimum eight characters, at least one letter, one number and one special character" />
        <FormControlHelp defaultText="Input your password" />
      </FormControl>
      <FormButton />
    </Form>;
}`,...(Y=(W=k.parameters)==null?void 0:W.docs)==null?void 0:Y.source},description:{story:"The `native` prop can be added to allow the use of the native html `:invalid` and `:valid` pseudo-classes.\n\nThis is not the default as can have negative user experience when required forms show initial error.\n\nThis is useful for styling the inputs when using the native html validation attributes.\nThe is added for checkbox, radio, and select inputs too but uses the :has selector which has limited support.",...(K=(J=k.parameters)==null?void 0:J.docs)==null?void 0:K.description}}};var Q,X,ee,re,te;F.parameters={...F.parameters,docs:{...(Q=F.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
  const [required, setRequired] = useState<CheckedState>('indeterminate');
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState(false);
  const [valid, setValid] = useState(false);
  const [native, setNative] = useState(false);
  const rotate = rotateCheckedState(setRequired);
  const state = {
    error,
    valid,
    disabled,
    required: required === 'indeterminate' ? undefined : required,
    native
  };
  return <Stack spacing="large">
      <Inline>
        <Checkbox checked={required} onCheckedChange={rotate} label="Required"></Checkbox>
        <Checkbox checked={disabled} onCheckedChange={setDisabled} label="Disabled"></Checkbox>
        <Checkbox checked={error} onCheckedChange={setError} label="Error"></Checkbox>
        <Checkbox checked={valid} onCheckedChange={setValid} label="Valid"></Checkbox>
        <Checkbox checked={native} onCheckedChange={setNative} label="Native"></Checkbox>
      </Inline>

      <Form onSubmit={withFormData(alert)}>
        <FormControl>
          <Input {...state} name="demo1" label="Demo 1" type="email" placeholder="hello@committed.io" />
        </FormControl>
        <FormControl>
          <Label htmlFor="demo-2">
            Own Label
            <LabelOptional />
          </Label>
          <Input {...state} name="demo2" type="password" />
          <FormControlHelp defaultText="This is a demo" />
        </FormControl>
        <FormControl>
          <Input {...state} name="demo3" label="Demo 3" />
          <FormControlHelp defaultText="This is a demo" errorText="This is an error" />
        </FormControl>
        <FormControl>
          <Select {...state} name="demo4" label="Demo 4" defaultValue="one">
            <SelectItem value="one">One</SelectItem>
            <SelectItem value="two">Two</SelectItem>
            <SelectItem value="three">Three</SelectItem>
          </Select>
          <FormControlHelp defaultText="This is a demo" errorText="This is an error" validText="This is an error" />
        </FormControl>
        <FormControl>
          <Checkbox {...state} name="demo5" label="Demo 5" />
          <FormControlHelp defaultText="Check the box" />
        </FormControl>
        <FormControl>
          <RadioGroup {...state} name="demo6" label="Demo 6">
            <Radio value="mobx" label="Mobx" />
            <Radio value="redux" label="Redux" />
            <Radio value="context" label="Context" />
          </RadioGroup>
          <FormControlHelp defaultText="This is a demo" errorText="This is an error" validText="This is valid" />
        </FormControl>
        <FormControl>
          <Input {...state} name="demo7" placeholder="No label!!" />
        </FormControl>
        <FormControl>
          <TextArea {...state} name="demo8" label="Demo 8" />
          <FormControlHelp defaultText="This is a demo" errorText="This is an error" validText="This is valid" />
        </FormControl>
        <FormControl>
          <Slider {...state} name="demo9" label="Demo 9" />
          <FormControlHelp defaultText="This is a demo" errorText="This is an error" validText="This is valid" />
        </FormControl>
        <FormButton />
      </Form>
    </Stack>;
}`,...(ee=(X=F.parameters)==null?void 0:X.docs)==null?void 0:ee.source},description:{story:"Behavioural test/demo. Use the checkboxes to add these properties to all form elements.",...(te=(re=F.parameters)==null?void 0:re.docs)==null?void 0:te.description}}};var oe,ae,le,se,ie;w.parameters={...w.parameters,docs:{...(oe=w.parameters)==null?void 0:oe.docs,source:{originalSource:`() => {
  const [required, setRequired] = useState<CheckedState>('indeterminate');
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState(false);
  const [valid, setValid] = useState(false);
  const [native, setNative] = useState(false);
  const rotate = rotateCheckedState(setRequired);
  const state = {
    error,
    valid,
    disabled,
    required: required === 'indeterminate' ? undefined : required,
    native
  };
  return <Stack spacing="large">
      <Inline>
        <Checkbox checked={required} onCheckedChange={rotate} label="Required"></Checkbox>
        <Checkbox checked={disabled} onCheckedChange={setDisabled} label="Disabled"></Checkbox>
        <Checkbox checked={error} onCheckedChange={setError} label="Error"></Checkbox>
        <Checkbox checked={valid} onCheckedChange={setValid} label="Valid"></Checkbox>
        <Checkbox checked={native} onCheckedChange={setNative} label="Native"></Checkbox>
      </Inline>

      <Form onSubmit={withFormData(alert)}>
        <FormControl>
          <Input {...state} name="demo1" id="demo-1" label="Demo 1" type="email" placeholder="hello@committed.io" />
        </FormControl>
        <FormControl>
          <Label htmlFor="demo-2">
            Own Label
            <LabelOptional />
          </Label>
          <Input {...state} name="demo2" id="demo-2" type="password" />
          <FormControlHelp defaultText="This is a demo" />
        </FormControl>
        <FormControl>
          <Input {...state} name="demo3" id="demo-3" label="Demo 3" />
          <FormControlHelp defaultText="This is a demo" errorText="This is an error" />
        </FormControl>
        <FormControl>
          <Select {...state} name="demo4" id="demo-4" label="Demo 4" defaultValue="one">
            <SelectItem value="one">One</SelectItem>
            <SelectItem value="two">Two</SelectItem>
            <SelectItem value="three">Three</SelectItem>
          </Select>
          <FormControlHelp defaultText="This is a demo" errorText="This is an error" />
        </FormControl>
        <FormControl>
          <Checkbox {...state} name="demo5" id="demo-5" label="Demo 5" />
          <FormControlHelp defaultText="Check the box" />
        </FormControl>
        <FormControl>
          <RadioGroup {...state} name="demo6" id="demo-6" label="Demo 6">
            <Radio value="mobx" label="Mobx" />
            <Radio value="redux" label="Redux" />
            <Radio value="context" label="Context" />
          </RadioGroup>
          <FormControlHelp defaultText="This is a demo" errorText="This is an error" />
        </FormControl>
        <FormControl>
          <Input {...state} name="demo7" id="demo-7" placeholder="No label!!" />
        </FormControl>
        <FormControl>
          <TextArea {...state} name="demo8" id="demo-8" label="Demo 8" />
          <FormControlHelp defaultText="This is a demo" errorText="This is an error" />
        </FormControl>
        <FormControl>
          <Slider {...state} name="demo9" id="demo-9" label="Demo 9" />
          <FormControlHelp defaultText="This is a demo" errorText="This is an error" validText="This is an error" />
        </FormControl>
        <FormButton />
      </Form>
    </Stack>;
}`,...(le=(ae=w.parameters)==null?void 0:ae.docs)==null?void 0:le.source},description:{story:"Behavioural test/demo with ids, to ensure elements are correctly referenced in aria. Use the checkboxes to add these properties to all form elements.",...(ie=(se=w.parameters)==null?void 0:se.docs)==null?void 0:ie.description}}};const tr=["Default","API_1","Example","Native","Controls","WithIds"];export{S as API_1,F as Controls,g as Default,E as Example,k as Native,w as WithIds,tr as __namedExportsOrder,rr as default};
//# sourceMappingURL=FormControl.stories-2839e516.js.map

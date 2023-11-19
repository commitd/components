import{j as i,a as o}from"./jsx-runtime-03b4ddbf.js";import{r as l}from"./index-76fb7be0.js";import"./Variants-32aa23ce.js";import"./component-92c13614.js";import{F as w,a as f,b as P}from"./withForm-df956169.js";import{F as n,a as m}from"./FormControl-6b9cc0be.js";import{I as d}from"./Input-0138999c.js";import"./_commonjsHelpers-de833af9.js";import"./Box-f074bc4b.js";import"./Grid-599ad893.js";import"./Tooltip-53dd1a2c.js";import"./extends-98964cd2.js";import"./index-45a327ec.js";import"./index-421204d3.js";import"./index-296a96c6.js";import"./index-77dbc890.js";import"./index-add592e3.js";import"./index-f8c8b8ff.js";import"./index-01bbf444.js";import"./index-1a2315aa.js";import"./index-251d008c.js";import"./index-c6da0816.js";import"./index-207695d4.js";import"./Text-561f173c.js";import"./ConditionalWrapper-8865b2c1.js";import"./Button-23e6de97.js";import"./Svg-cfd7f95e.js";import"./Label-bb409e96.js";const Q={title:"Components/Form",component:w,subcomponents:{FormButton:f}},a=h=>{const[s,E]=l.useState(""),[t,g]=l.useState("");function F(e){if(typeof e!="string"||e.length<3)throw Error("Usernames must be at least 3 characters long");if(!e.includes("@"))throw Error("Invalid email")}function y(e){if(typeof e!="string"||e.length<6)throw Error("Passwords must be at least 6 characters long");if(!/[!@.$^*()]/.test(e))throw Error("Passwords must contain at least 1 special character")}const r={email:null,password:null,touched:"Not filled in"};if(s||t){if(r.touched=null,!s)r.email="Email is required";else try{F(s)}catch(e){e instanceof Error?r.email=e.message:typeof e=="string"?r.email=e:r.email="There was an error with this field"}if(!t)r.password="Password is required";else try{y(t)}catch(e){e instanceof Error?r.password=e.message:typeof e=="string"?r.password=e:r.password="There was an error with this field"}}return i(w,{...h,onSubmit:P(alert),children:[i(n,{children:[o(d,{name:"email",id:"signin-email",label:"Email",type:"email",value:s,onValueChange:E,placeholder:"hello@committed.io",error:!!(r!=null&&r.email),valid:s.length>3,required:!0}),o(m,{defaultText:"Input your email address",errorText:r==null?void 0:r.email})]}),i(n,{children:[o(d,{name:"password",id:"signin-password",type:"password",label:"Password",value:t,onValueChange:g,error:!!(r!=null&&r.password),required:!0}),o(m,{defaultText:"Input your password",errorText:r==null?void 0:r.password})]}),o(f,{errors:r})]})};var p,u,c;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
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

  return <Form {...args} onSubmit={withFormData(alert)}>
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
}`,...(c=(u=a.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const W=["Default"];export{a as Default,W as __namedExportsOrder,Q as default};
//# sourceMappingURL=Form.stories-407f4115.js.map

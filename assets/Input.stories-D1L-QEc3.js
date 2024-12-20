import{p as _,i as h,f as b,a as u,b as g,t as v,s,c as I,d as C,e as x,g as w,n as y,h as R}from"./props-BccRBEyw.js";import"./ErrorMessage-CLz59NOS.js";import"./Button-CHjjH0Er.js";import{I as c}from"./Table-DO8P2ODX.js";import"./LinearProgress-Kbu3jDjJ.js";import"./Spinner-B6TYjszk.js";import"./EmptyScreen-C-Agar0t.js";import{d as q,c as V,s as B}from"./create-runtime-stories-D0FUTlAX.js";import"./class-p9t-_X7B.js";import"./index-client-171CkUsn.js";import"./index-A764_bBz.js";import"./fa-layers-text.svelte_svelte_type_style_lang-DbPsM4Nt.js";import"./StarIcon-eR2WlUTh.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DtmeDzJ6.js";import"./index-D-8MO0q_.js";import"./index-DPS9-N-h.js";const E=(i,a,l=y)=>{let r=()=>R(a==null?void 0:a(),["_children"]);c(i,I(r,{children:(n,d)=>{var o=C();x(()=>w(o,r().content)),u(n,o)},$$slots:{default:!0}}))},{Story:e,meta:D}=q({component:c,title:"Input/Input",tags:["autodocs"],argTypes:{placeholder:{control:"text",description:"placeholder text to show if input field is empty",defaultValue:""},value:{control:"text",description:"initial value",defaultValue:""},disabled:{control:"boolean",description:"Flag the input as being disabled",defaultValue:!1},readonly:{control:"boolean",description:"if true, the input field cannot be edited",defaultValue:!1},required:{control:"boolean",description:"if true, the input field is required",defaultValue:!1},clearable:{control:"boolean",description:"if true, the input field can be cleared with an icon",defaultValue:!1},error:{control:"text",description:"error message to show if input is invalid",defaultValue:""}},parameters:{docs:{description:{component:"These are the stories for the `Input` component.\nIt's the component used to get text/input from the user."}}}});var T=v("<!> <!> <!> <!> <!> <!>",1);function m(i,a){_(a,!1),B(E),h();var l=T(),r=b(l);e(r,{name:"Basic",args:{placeholder:"Basic input with a default value",value:"Value predefined"},parameters:{__svelteCsf:{rawCode:"<Input {...args}>{args.content}</Input>"}}});var n=s(r,2);e(n,{name:"Readonly",args:{readonly:!0,placeholder:"readonly cannot edit the input field"},parameters:{__svelteCsf:{rawCode:"<Input {...args}>{args.content}</Input>"}}});var d=s(n,2);e(d,{name:"Required",args:{required:!0,placeholder:"example of required field"},parameters:{__svelteCsf:{rawCode:"<Input {...args}>{args.content}</Input>"}}});var o=s(d,2);e(o,{name:"Clearable",args:{clearable:!0,placeholder:"the input field can be cleared with an icon"},parameters:{__svelteCsf:{rawCode:"<Input {...args}>{args.content}</Input>"}}});var p=s(o,2);e(p,{name:"Disabled",args:{disabled:!0,placeholder:"the input field is disabled"},parameters:{__svelteCsf:{rawCode:"<Input {...args}>{args.content}</Input>"}}});var f=s(p,2);e(f,{name:"Error",args:{placeholder:"Input has an error",error:"this input is being invalid"},parameters:{__svelteCsf:{rawCode:"<Input {...args}>{args.content}</Input>"}}}),u(i,l),g()}m.__docgen={keywords:[],data:[],name:"Input.stories.svelte"};const t=V(m,D),W=["Basic","Readonly","Required","Clearable","Disabled","Error"],X=t.Basic,Y=t.Readonly,Z=t.Required,$=t.Clearable,ee=t.Disabled,te=t.Error;export{X as Basic,$ as Clearable,ee as Disabled,te as Error,Y as Readonly,Z as Required,W as __namedExportsOrder,D as default};
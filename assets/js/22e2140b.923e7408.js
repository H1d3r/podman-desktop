"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[24260],{9897:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var t=n(24246),s=n(71670);const i={},a="Type alias: ProviderResult<T>",o={id:"type-aliases/ProviderResult",title:"Type alias: ProviderResult\\<T\\>",description:"ProviderResult\\: T \\| undefined \\| Promise\\",source:"@site/api/type-aliases/ProviderResult.md",sourceDirName:"type-aliases",slug:"/type-aliases/ProviderResult",permalink:"/api/type-aliases/ProviderResult",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"typedocSidebar",previous:{title:"Type alias: ProviderLinks",permalink:"/api/type-aliases/ProviderLinks"},next:{title:"Type alias: ProviderStatus",permalink:"/api/type-aliases/ProviderStatus"}},c={},d=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Source",id:"source",level:2}];function l(e){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"type-alias-providerresultt",children:"Type alias: ProviderResult<T>"}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"ProviderResult"}),"<",(0,t.jsx)(r.code,{children:"T"}),">: ",(0,t.jsx)(r.code,{children:"T"})," | ",(0,t.jsx)(r.code,{children:"undefined"})," | ",(0,t.jsx)(r.code,{children:"Promise"}),"< ",(0,t.jsx)(r.code,{children:"T"})," | ",(0,t.jsx)(r.code,{children:"undefined"})," >"]}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["A provider result represents the values a provider, like the ",(0,t.jsx)(r.a,{href:"/api/interfaces/ImageCheckerProvider",children:(0,t.jsx)(r.code,{children:"ImageCheckerProvider"})}),",\nmay return. For once this is the actual result type ",(0,t.jsx)(r.code,{children:"T"}),", like ",(0,t.jsx)(r.code,{children:"ImageChecks"}),", or a Promise that resolves\nto that type ",(0,t.jsx)(r.code,{children:"T"}),". In addition, ",(0,t.jsx)(r.code,{children:"null"})," and ",(0,t.jsx)(r.code,{children:"undefined"})," can be returned - either directly or from a\nPromise."]}),"\n",(0,t.jsxs)(r.p,{children:["The snippets below are all valid implementations of the ",(0,t.jsx)(r.a,{href:"/api/interfaces/ImageCheckerProvider",children:(0,t.jsx)(r.code,{children:"ImageCheckerProvider"})}),":"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:"let a: ImageCheckerProvider = {\n check(image: ImageInfo, token?: CancellationToken): ProviderResult<ImageChecks> {\n   return new ImageChecks();\n }\n\nlet b: ImageCheckerProvider = {\n async check(image: ImageInfo, token?: CancellationToken): ProviderResult<ImageChecks> {\n\t\treturn new ImageChecks();\n\t}\n}\n\nlet c: ImageCheckerProvider = {\n check(image: ImageInfo, token?: CancellationToken): ProviderResult<ImageChecks> {\n\t\treturn; // undefined\n\t}\n}\n"})}),"\n",(0,t.jsx)(r.h2,{id:"type-parameters",children:"Type parameters"}),"\n",(0,t.jsxs)(r.p,{children:["\u2022 ",(0,t.jsx)(r.strong,{children:"T"})]}),"\n",(0,t.jsx)(r.h2,{id:"source",children:"Source"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"https://github.com/H1d3r/podman-desktop/blob/be81eee60f95101633cb892e3647dc86d019486e/packages/extension-api/src/extension-api.d.ts#L181",children:"packages/extension-api/src/extension-api.d.ts:181"})})]})}function p(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},71670:(e,r,n)=>{n.d(r,{Z:()=>o,a:()=>a});var t=n(27378);const s={},i=t.createContext(s);function a(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);
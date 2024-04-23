"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[58216],{45652:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var i=s(24246),t=s(71670);const r={},o="Interface: StatusBarItem",c={id:"interfaces/StatusBarItem",title:"Interface: StatusBarItem",description:"A status bar item is a status bar contribution that can",source:"@site/api/interfaces/StatusBarItem.md",sourceDirName:"interfaces",slug:"/interfaces/StatusBarItem",permalink:"/api/interfaces/StatusBarItem",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"typedocSidebar",previous:{title:"Interface: SecretStorageChangeEvent",permalink:"/api/interfaces/SecretStorageChangeEvent"},next:{title:"Interface: StorageStats",permalink:"/api/interfaces/StorageStats"}},d={},a=[{value:"Properties",id:"properties",level:2},{value:"alignment",id:"alignment",level:3},{value:"Source",id:"source",level:4},{value:"command?",id:"command",level:3},{value:"Source",id:"source-1",level:4},{value:"commandArgs?",id:"commandargs",level:3},{value:"Source",id:"source-2",level:4},{value:"enabled",id:"enabled",level:3},{value:"Source",id:"source-3",level:4},{value:"iconClass?",id:"iconclass",level:3},{value:"Source",id:"source-4",level:4},{value:"priority",id:"priority",level:3},{value:"Source",id:"source-5",level:4},{value:"text?",id:"text",level:3},{value:"Source",id:"source-6",level:4},{value:"tooltip?",id:"tooltip",level:3},{value:"Source",id:"source-7",level:4},{value:"Methods",id:"methods",level:2},{value:"dispose()",id:"dispose",level:3},{value:"Returns",id:"returns",level:4},{value:"Source",id:"source-8",level:4},{value:"hide()",id:"hide",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Source",id:"source-9",level:4},{value:"show()",id:"show",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Source",id:"source-10",level:4}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",strong:"strong",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"interface-statusbaritem",children:"Interface: StatusBarItem"}),"\n",(0,i.jsx)(n.p,{children:"A status bar item is a status bar contribution that can\nshow text and icons and run a command on click."}),"\n",(0,i.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsx)(n.h3,{id:"alignment",children:"alignment"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"readonly"})})," ",(0,i.jsx)(n.strong,{children:"alignment"}),": ",(0,i.jsx)(n.a,{href:"/api/type-aliases/StatusBarAlignment",children:(0,i.jsx)(n.code,{children:"StatusBarAlignment"})})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The alignment of this item."}),"\n",(0,i.jsx)(n.h4,{id:"source",children:"Source"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/H1d3r/podman-desktop/blob/be81eee60f95101633cb892e3647dc86d019486e/packages/extension-api/src/extension-api.d.ts#L1224",children:"packages/extension-api/src/extension-api.d.ts:1224"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"command",children:"command?"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"optional"})})," ",(0,i.jsx)(n.strong,{children:"command"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The identifier of a command, previously registered with ",(0,i.jsx)(n.a,{href:"/api/namespaces/commands/functions/registerCommand",children:"commands.registerCommand"}),", to run on click."]}),"\n",(0,i.jsx)(n.h4,{id:"source-1",children:"Source"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/H1d3r/podman-desktop/blob/be81eee60f95101633cb892e3647dc86d019486e/packages/extension-api/src/extension-api.d.ts#L1252",children:"packages/extension-api/src/extension-api.d.ts:1252"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"commandargs",children:"commandArgs?"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"optional"})})," ",(0,i.jsx)(n.strong,{children:"commandArgs"}),": ",(0,i.jsx)(n.code,{children:"any"}),"[]"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Arguments that the command handler should be invoked with."}),"\n",(0,i.jsx)(n.h4,{id:"source-2",children:"Source"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/H1d3r/podman-desktop/blob/be81eee60f95101633cb892e3647dc86d019486e/packages/extension-api/src/extension-api.d.ts#L1257",children:"packages/extension-api/src/extension-api.d.ts:1257"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"enabled",children:"enabled"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"enabled"}),": ",(0,i.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Marks an item as disabled. When property is set to true, then icon will be changed to inactive\nand there won't be possible to execute a command if it is provided in the following configuration."}),"\n",(0,i.jsx)(n.h4,{id:"source-3",children:"Source"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/H1d3r/podman-desktop/blob/be81eee60f95101633cb892e3647dc86d019486e/packages/extension-api/src/extension-api.d.ts#L1248",children:"packages/extension-api/src/extension-api.d.ts:1248"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"iconclass",children:"iconClass?"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"optional"})})," ",(0,i.jsx)(n.strong,{children:"iconClass"}),": ",(0,i.jsx)(n.code,{children:"string"})," | ",(0,i.jsx)(n.code,{children:"object"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Icon class that is used to display the particular icon from the Font Awesome icon set.\nIcon class should be in format e.g. 'fa fa-toggle-on'. It is possible to provide an icons\nfor state which can be enabled or disabled."}),"\n",(0,i.jsx)(n.h4,{id:"source-4",children:"Source"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/H1d3r/podman-desktop/blob/be81eee60f95101633cb892e3647dc86d019486e/packages/extension-api/src/extension-api.d.ts#L1243",children:"packages/extension-api/src/extension-api.d.ts:1243"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"priority",children:"priority"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"readonly"})})," ",(0,i.jsx)(n.strong,{children:"priority"}),": ",(0,i.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The priority of this item. Higher value means the item should be shown more to the left\nor more to the right."}),"\n",(0,i.jsx)(n.h4,{id:"source-5",children:"Source"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/H1d3r/podman-desktop/blob/be81eee60f95101633cb892e3647dc86d019486e/packages/extension-api/src/extension-api.d.ts#L1229",children:"packages/extension-api/src/extension-api.d.ts:1229"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"text",children:"text?"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"optional"})})," ",(0,i.jsx)(n.strong,{children:"text"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The text to show for the entry."}),"\n",(0,i.jsx)(n.h4,{id:"source-6",children:"Source"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/H1d3r/podman-desktop/blob/be81eee60f95101633cb892e3647dc86d019486e/packages/extension-api/src/extension-api.d.ts#L1233",children:"packages/extension-api/src/extension-api.d.ts:1233"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"tooltip",children:"tooltip?"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"optional"})})," ",(0,i.jsx)(n.strong,{children:"tooltip"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The tooltip text when you hover over this entry."}),"\n",(0,i.jsx)(n.h4,{id:"source-7",children:"Source"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/H1d3r/podman-desktop/blob/be81eee60f95101633cb892e3647dc86d019486e/packages/extension-api/src/extension-api.d.ts#L1237",children:"packages/extension-api/src/extension-api.d.ts:1237"})}),"\n",(0,i.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,i.jsx)(n.h3,{id:"dispose",children:"dispose()"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"dispose"}),"(): ",(0,i.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Dispose and free associated resources. Call\n",(0,i.jsx)(n.a,{href:"/api/interfaces/StatusBarItem#hide",children:"StatusBarItem.hide"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"void"})}),"\n",(0,i.jsx)(n.h4,{id:"source-8",children:"Source"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/H1d3r/podman-desktop/blob/be81eee60f95101633cb892e3647dc86d019486e/packages/extension-api/src/extension-api.d.ts#L1271",children:"packages/extension-api/src/extension-api.d.ts:1271"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"hide",children:"hide()"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"hide"}),"(): ",(0,i.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Hides the entry in the status bar."}),"\n",(0,i.jsx)(n.h4,{id:"returns-1",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"void"})}),"\n",(0,i.jsx)(n.h4,{id:"source-9",children:"Source"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/H1d3r/podman-desktop/blob/be81eee60f95101633cb892e3647dc86d019486e/packages/extension-api/src/extension-api.d.ts#L1265",children:"packages/extension-api/src/extension-api.d.ts:1265"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"show",children:"show()"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"show"}),"(): ",(0,i.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Shows the entry in the status bar."}),"\n",(0,i.jsx)(n.h4,{id:"returns-2",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"void"})}),"\n",(0,i.jsx)(n.h4,{id:"source-10",children:"Source"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/H1d3r/podman-desktop/blob/be81eee60f95101633cb892e3647dc86d019486e/packages/extension-api/src/extension-api.d.ts#L1261",children:"packages/extension-api/src/extension-api.d.ts:1261"})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},71670:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>o});var i=s(27378);const t={},r=i.createContext(t);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);
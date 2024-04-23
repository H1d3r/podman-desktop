"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4117],{1744:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>g,frontMatter:()=>o,metadata:()=>c,toc:()=>h});var s=i(24246),r=i(71670),t=i(23930),l=i(39798);const o={sidebar_position:3,title:"Registries",description:"Working with container registries",tags:["podman-desktop","containers"],keywords:["podman desktop","podman","containers","registries"],hide_table_of_contents:!1,image:"/img/docs/containers/registries/img/registries.png"},a="Setting up container registries",c={id:"containers/registries/index",title:"Registries",description:"Working with container registries",source:"@site/docs/containers/registries/index.md",sourceDirName:"containers/registries",slug:"/containers/registries/",permalink:"/docs/containers/registries/",draft:!1,unlisted:!1,editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/containers/registries/index.md",tags:[{label:"podman-desktop",permalink:"/docs/tags/podman-desktop"},{label:"containers",permalink:"/docs/tags/containers"}],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Registries",description:"Working with container registries",tags:["podman-desktop","containers"],keywords:["podman desktop","podman","containers","registries"],hide_table_of_contents:!1,image:"/img/docs/containers/registries/img/registries.png"},sidebar:"mySidebar",previous:{title:"Onboarding for containers",permalink:"/docs/containers/onboarding"},next:{title:"Images",permalink:"/docs/containers/images/"}},d={},h=[{value:"Setting up a pre-configured registry",id:"setting-up-a-pre-configured-registry",level:2},{value:"Setting up a custom registry",id:"setting-up-a-custom-registry",level:2},{value:"Setting up a registry with an insecure certificate",id:"setting-up-a-registry-with-an-insecure-certificate",level:2},{value:"Verifying your registry setup",id:"verifying-your-registry-setup",level:2},{value:"Changing your credentials",id:"changing-your-credentials",level:2},{value:"Removing a registry",id:"removing-a-registry",level:2},{value:"Finding Podman registry configuration files",id:"finding-podman-registry-configuration-files",level:2},{value:"Next steps",id:"next-steps",level:2}];function u(e){const n={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{Icon:o}=n;return o||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Icon",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"setting-up-container-registries",children:"Setting up container registries"}),"\n",(0,s.jsxs)(n.admonition,{title:"Before you start",type:"tip",children:[(0,s.jsx)(n.p,{children:"Before you start, you should:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Get authentication details for your container registry:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Registry URL."}),"\n",(0,s.jsx)(n.li,{children:"User name."}),"\n",(0,s.jsx)(n.li,{children:"Password, or OAuth secret."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Get the fully qualified name of a private image stored in your registry, such as ",(0,s.jsx)(n.code,{children:"my-registry.tld/my-repository/my-image"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Get the fully qualified image name that your registry requires to push an image, such as ",(0,s.jsx)(n.code,{children:"my-registry.tld/my-repository/my-image"}),"."]}),"\n"]})]}),"\n",(0,s.jsx)(n.h2,{id:"setting-up-a-pre-configured-registry",children:"Setting up a pre-configured registry"}),"\n",(0,s.jsx)(n.p,{children:"To ease usage of the most popular container registries, Podman Desktop has pre-configured registries, including:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Docker Hub"}),"\n",(0,s.jsx)(n.li,{children:"Red Hat Quay"}),"\n",(0,s.jsx)(n.li,{children:"GitHub"}),"\n",(0,s.jsx)(n.li,{children:"Google Container Registry"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"If your container registry is in this list, follow the steps:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Go to ",(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(o,{icon:"fa-solid fa-cog",size:"lg"})," Settings > Registries"]}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In your registry line, click ",(0,s.jsx)(n.strong,{children:"Configure"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Enter your registry credentials:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Authenticating to a pre-configured registry",src:i(44633).Z+"",width:"933",height:"431"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Username"}),": Enter your user name."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Password"}),": Enter your password or OAuth secret."]}),"\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.strong,{children:"Login"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Podman Desktop logs Podman in with the provided credentials."}),"\n",(0,s.jsx)(n.p,{children:"If you enter the wrong credentials, you see an error message:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Enter the correct credentials"}),"\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.strong,{children:"Login"})," again."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"setting-up-a-custom-registry",children:"Setting up a custom registry"}),"\n",(0,s.jsx)(n.p,{children:"You have a custom container registry, or one that is not available in the pre-configured list: we have got you covered. Follow the steps:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Go to ",(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(o,{icon:"fa-solid fa-cog",size:"lg"})," Settings > Registries"]}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click ",(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(o,{icon:"fa-solid fa-plus-circle",size:"lg"})," Add registry"]})," at the top right corner of the screen."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Enter your registry details:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Adding a custom registry",src:i(27839).Z+"",width:"933",height:"501"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Registry Location"}),": Enter your repository URL, such as ",(0,s.jsx)(n.code,{children:"https://myregistry.tld"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Username"}),": Enter your user name."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Password"}),": Enter your password or OAuth secret."]}),"\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.strong,{children:"Login"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Podman Desktop logs Podman in with the provided credentials."}),"\n",(0,s.jsx)(n.p,{children:"If you enter the wrong credentials, you see an error message:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Enter the correct credentials"}),"\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.strong,{children:"Login"})," again."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"setting-up-a-registry-with-an-insecure-certificate",children:"Setting up a registry with an insecure certificate"}),"\n",(0,s.jsx)(n.p,{children:"If your registry has an insecure certificate, such as a self-signed certificate, you see a warning when setting up the registry."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.strong,{children:"Invalid Certificate"})," window, click ",(0,s.jsx)(n.strong,{children:"Yes"})," to add the registry anyway."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Podman Desktop Registry Warning",src:i(8577).Z+"",width:"556",height:"206"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Tell Podman that it has your authorization to access the insecure registry: edit the ",(0,s.jsx)(n.code,{children:"registries.conf"})," file."]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Go to a location where you can edit the ",(0,s.jsx)(n.code,{children:"registries.conf"})," file:"]}),"\n",(0,s.jsxs)(t.Z,{groupId:"operating-systems",children:[(0,s.jsx)(l.Z,{value:"win",label:"Windows",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The configuration file is in the Podman machine: open a terminal in the Podman Machine."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:"$ podman machine ssh --username root [optional-machine-name]\n"})}),"\n"]}),"\n"]})}),(0,s.jsx)(l.Z,{value:"mac",label:"macOS",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The configuration file is in the Podman machine: open a terminal in the Podman Machine."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:"$ podman machine ssh --username root [optional-machine-name]\n"})}),"\n"]}),"\n"]})}),(0,s.jsx)(l.Z,{value:"linux",label:"Linux",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The configuration file is in your host: open a terminal with superuser privileges."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:"$ sudo su -\n"})}),"\n"]}),"\n"]})})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Edit the registry optional configuration file."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:"# vi /etc/containers/registries.conf`\n"})}),"\n",(0,s.jsxs)(n.p,{children:["For each insecure registry, add a ",(0,s.jsx)(n.code,{children:"[[registry]]"})," section that defines:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"location ="}),": Enter your registry URL."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"insecure = true"}),": Accept the insecure certificate."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["For example, if your have two registries, such as ",(0,s.jsx)(n.code,{children:"https://my-registry.tld"})," and ",(0,s.jsx)(n.code,{children:"http://registry.example.com"}),", add the following lines:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-toml",children:'[[registry]]\nlocation = "my-registry.tld"\ninsecure = true\n\n[[registry]]\nlocation = "registry.example.com"\ninsecure = true\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Restart Podman to apply the changes."}),"\n",(0,s.jsxs)(t.Z,{groupId:"operating-systems",children:[(0,s.jsx)(l.Z,{value:"win",label:"Windows",children:(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Go to ",(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(o,{icon:"fa-solid fa-cog",size:"lg"})," Settings > Resources"]}),"."]}),"\n",(0,s.jsx)(n.li,{children:"Restart the Podman machine."}),"\n"]})}),(0,s.jsx)(l.Z,{value:"mac",label:"macOS",children:(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Go to ",(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(o,{icon:"fa-solid fa-cog",size:"lg"})," Settings > Resources"]}),"."]}),"\n",(0,s.jsx)(n.li,{children:"Restart the Podman machine."}),"\n"]})}),(0,s.jsx)(l.Z,{value:"linux",label:"Linux (rootless)",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Stop all Podman processes."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:"$ pkill podman\n"})}),"\n"]}),"\n"]})}),(0,s.jsx)(l.Z,{value:"linux-rootful",label:"Linux (rootful)",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Restart Podman."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:"$ sudo systemctl restart podman\n"})}),"\n"]}),"\n"]})})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"verifying-your-registry-setup",children:"Verifying your registry setup"}),"\n",(0,s.jsx)(n.p,{children:"To verify your registry has been properly configured, you can do the following steps:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In ",(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(o,{icon:"fa-solid fa-cog",size:"lg"})," Settings > Registries"]}),", the line with your registry has content in the Username and Password column, and action icons replacing the Configure button."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Pull a private image from the registry."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Get the name of a private image stored in your registry, such as ",(0,s.jsx)(n.code,{children:"quay.io/my-repository/my-image"}),", ",(0,s.jsx)(n.code,{children:"ghcr.io/my-repository/my-image"}),", ",(0,s.jsx)(n.code,{children:"docker.io/my-repository/my-image"}),", or ",(0,s.jsx)(n.code,{children:"my-registry.tld/my-repository/my-image"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Go to ",(0,s.jsx)(n.strong,{children:"Images"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.strong,{children:"Pull an image"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["On the ",(0,s.jsx)(n.strong,{children:"Image to Pull"})," screen:","\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Image to pull"}),": Enter the image name."]}),"\n",(0,s.jsx)(n.li,{children:"Click Pull image."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Click Done."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Push an image to the registry:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Get the fully qualified image name that your registry requires, such as ",(0,s.jsx)(n.code,{children:"quay.io/my-repository/my-image"}),", ",(0,s.jsx)(n.code,{children:"ghcr.io/my-repository/my-image"}),", or ",(0,s.jsx)(n.code,{children:"docker.io/my-repository/my-image"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Go to ",(0,s.jsx)(n.strong,{children:"Images"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click ",(0,s.jsx)(n.strong,{children:"Build an image"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["On the ",(0,s.jsx)(n.strong,{children:"Build Image from Containerfile"})," screen"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Containerfile path"}),": select the Containerfile or Dockerfile to build."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Image Name"}),": enter the fully qualified image name that your registry requires."]}),"\n",(0,s.jsx)(n.li,{children:"Click Build."}),"\n",(0,s.jsx)(n.li,{children:"Click Done."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["On your image line, click ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(o,{icon:"fa-solid fa-ellipsis-v",size:"lg"})}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The contextual menu has a ",(0,s.jsxs)(n.strong,{children:["Push Image to ",(0,s.jsx)(n.em,{children:"your registry"})]})," entry."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"changing-your-credentials",children:"Changing your credentials"}),"\n",(0,s.jsx)(n.p,{children:"To change your registry credentials, you can do the following steps:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Go to ",(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(o,{icon:"fa-solid fa-cog",size:"lg"})," Settings > Registries"]}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["On your registry line, click ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(o,{icon:"fa-solid fa-ellipsis-v",size:"lg"})}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.strong,{children:"Edit password"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Enter your credentials in the ",(0,s.jsx)(n.strong,{children:"Username"})," and ",(0,s.jsx)(n.strong,{children:"Password"})," fields, and click ",(0,s.jsx)(n.strong,{children:"Login"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Podman Desktop logs Podman in with the updated credentials."}),"\n",(0,s.jsx)(n.h2,{id:"removing-a-registry",children:"Removing a registry"}),"\n",(0,s.jsx)(n.p,{children:"To remove your registry, you can do the following steps:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Go to ",(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(o,{icon:"fa-solid fa-cog",size:"lg"})," Settings > Registries"]}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["On your registry line, click ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(o,{icon:"fa-solid fa-ellipsis-v",size:"lg"})}),"."]}),"\n",(0,s.jsx)(n.li,{children:"Click Remove."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Podman Desktop removes the registry from the settings, and logs Podman out from the registry."}),"\n",(0,s.jsx)(n.h2,{id:"finding-podman-registry-configuration-files",children:"Finding Podman registry configuration files"}),"\n",(0,s.jsx)(n.p,{children:"Podman has two files to configure registries:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"auth.json"})," defines the authentication to registries."]}),"\n",(0,s.jsxs)(n.p,{children:["Podman Desktop stores this file directly on your host, in ",(0,s.jsx)(n.code,{children:"$HOME/.config/containers/auth.json"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"The Podman machine mounts the authentication configuration file to access it."}),"\n",(0,s.jsx)(n.p,{children:"When you delete the Podman machine, the registry configuration is not lost: it stays on your host."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"registries.conf"})," defines optional features, such as allowing insecure certificates."]}),"\n",(0,s.jsxs)(n.p,{children:["The Podman machine stores the file in ",(0,s.jsx)(n.code,{children:"/etc/containers/registries.conf"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"When you delete the Podman machine, this file is deleted."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,s.jsx)(n.p,{children:"Consider completing some other common tasks that depend registries:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Pulling an image."}),"\n",(0,s.jsx)(n.li,{children:"Pushing an image to a registry."}),"\n"]})]})}function g(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},39798:(e,n,i)=>{i.d(n,{Z:()=>l});i(27378);var s=i(40624);const r={tabItem:"tabItem_wHwb"};var t=i(24246);function l(e){let{children:n,hidden:i,className:l}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,s.Z)(r.tabItem,l),hidden:i,children:n})}},23930:(e,n,i)=>{i.d(n,{Z:()=>w});var s=i(27378),r=i(40624),t=i(83457),l=i(3620),o=i(9834),a=i(30654),c=i(70784),d=i(71819);function h(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:i}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:i,attributes:s,default:r}}=e;return{value:n,label:i,attributes:s,default:r}}))}(i);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,i])}function g(e){let{value:n,tabValues:i}=e;return i.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:i}=e;const r=(0,l.k6)(),t=function(e){let{queryString:n=!1,groupId:i}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return i??null}({queryString:n,groupId:i});return[(0,a._X)(t),(0,s.useCallback)((e=>{if(!t)return;const n=new URLSearchParams(r.location.search);n.set(t,e),r.replace({...r.location,search:n.toString()})}),[t,r])]}function j(e){const{defaultValue:n,queryString:i=!1,groupId:r}=e,t=u(e),[l,a]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:i}=e;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!g({value:n,tabValues:i}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${i.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=i.find((e=>e.default))??i[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:t}))),[c,h]=x({queryString:i,groupId:r}),[j,p]=function(e){let{groupId:n}=e;const i=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,t]=(0,d.Nk)(i);return[r,(0,s.useCallback)((e=>{i&&t.set(e)}),[i,t])]}({groupId:r}),m=(()=>{const e=c??j;return g({value:e,tabValues:t})?e:null})();(0,o.Z)((()=>{m&&a(m)}),[m]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!g({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);a(e),h(e),p(e)}),[h,p,t]),tabValues:t}}var p=i(76457);const m={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var y=i(24246);function f(e){let{className:n,block:i,selectedValue:s,selectValue:l,tabValues:o}=e;const a=[],{blockElementScrollPositionUntilNextRender:c}=(0,t.o5)(),d=e=>{const n=e.currentTarget,i=a.indexOf(n),r=o[i].value;r!==s&&(c(n),l(r))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const i=a.indexOf(e.currentTarget)+1;n=a[i]??a[0];break}case"ArrowLeft":{const i=a.indexOf(e.currentTarget)-1;n=a[i]??a[a.length-1];break}}n?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":i},n),children:o.map((e=>{let{value:n,label:i,attributes:t}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>a.push(e),onKeyDown:h,onClick:d,...t,className:(0,r.Z)("tabs__item",m.tabItem,t?.className,{"tabs__item--active":s===n}),children:i??n},n)}))})}function v(e){let{lazy:n,children:i,selectedValue:r}=e;const t=(Array.isArray(i)?i:[i]).filter(Boolean);if(n){const e=t.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:t.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function b(e){const n=j(e);return(0,y.jsxs)("div",{className:(0,r.Z)("tabs-container",m.tabList),children:[(0,y.jsx)(f,{...e,...n}),(0,y.jsx)(v,{...e,...n})]})}function w(e){const n=(0,p.Z)();return(0,y.jsx)(b,{...e,children:h(e.children)},String(n))}},27839:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/adding-a-custom-registry-df276b8cd69d722de97670c7eef8b235.png"},44633:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/authenticating-to-a-preconfigured-registry-12cf722d1b380d17ae90e8129d31a981.png"},8577:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/registry-warning-insecure-245d7254807b5939c082f47e5d538d80.png"},71670:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>l});var s=i(27378);const r={},t=s.createContext(r);function l(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);
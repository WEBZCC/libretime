"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[617],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8630:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],s={title:"Upgrading Libretime"},l=void 0,c={unversionedId:"upgrading",id:"upgrading",title:"Upgrading Libretime",description:"While upgrading your installation may not cause any station downtime or data loss, always plan for the worst. Only upgrade your installation when Libretime isn't playing out shows, notify your DJs and essential personnel, and back up your database, configuration files, and media library before you make any changes.",source:"@site/../docs/upgrading.md",sourceDirName:".",slug:"/upgrading",permalink:"/docs/upgrading",editUrl:"https://github.com/libretime/libretime/../docs/upgrading.md",tags:[],version:"current",frontMatter:{title:"Upgrading Libretime"},sidebar:"tutorialSidebar",previous:{title:"Local Development",permalink:"/docs/local-dev"}},p=[{value:"Migrating from Airtime",id:"migrating-from-airtime",children:[],level:3}],u={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"While upgrading your installation may not cause any station downtime or data loss, always plan for the worst. Only upgrade your installation when Libretime isn't playing out shows, notify your DJs and essential personnel, and back up your database, configuration files, and media library before you make any changes."))),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/server-config/backing-up-the-server"},"Back up the server")," and make a copy of all the configuration files under ",(0,i.kt)("inlineCode",{parentName:"li"},"/etc/airtime/"),"."),(0,i.kt)("li",{parentName:"ol"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"./install -fiap")," as described in the ",(0,i.kt)("a",{parentName:"li",href:"/docs/getting-started/install"},"installation guide"),".\nThis will detect an existing LibreTime deployment and backup any\nconfiguration files that if finds. The install script also tries to restart\nthe needed services during an upgrade. In any case you should monitor if this\nhappened and also take a quick look at the logs files to be sure everything\nis still fine. Now might be the time to reboot the system or virtual machine\nLibreTime is running on since regular reboots are part of a healthy system\nanyway."),(0,i.kt)("li",{parentName:"ol"},"Log into the new version of the LibreTime administration interface. If the\nplayout engine starts up and detects that a show should be playing at the\ncurrent time, it will skip to the correct point in the current time and start\nplaying. If you encounter issues trying to connect to the new administration\ninterface, you may need to clear your web browser's cache.")),(0,i.kt)("h3",{id:"migrating-from-airtime"},"Migrating from Airtime"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Airtime's ",(0,i.kt)("em",{parentName:"p"},"linked files")," and ",(0,i.kt)("em",{parentName:"p"},"watched folders")," features currently do not work in Libretime."))),(0,i.kt)("p",null,"LibreTime has dropped support for Ubuntu 16.04, which is the last supported\nversion of Ubuntu that Airtime supports. The following instructions describe how\nto migrate from Airtime to LibreTime. If there are issues encountered while\nupgrading, please ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/libretime/libretime/issues/new?labels=bug&template=bug_report.md"},"file a bug")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Take a ",(0,i.kt)("a",{parentName:"li",href:"/docs/server-config/backing-up-the-server"},"backup of the server")),(0,i.kt)("li",{parentName:"ol"},"Create a new system for LibreTime and run the install script, as described in the ",(0,i.kt)("a",{parentName:"li",href:"/docs/getting-started/install"},"install guide"),"."),(0,i.kt)("li",{parentName:"ol"},"Before running the web-configuration, restore the Airtime database to the new\nPostgreSQL server, media database and configuration file"),(0,i.kt)("li",{parentName:"ol"},"Update the configuration file to match the new configuration schema and update any\nchanged values. See the ",(0,i.kt)("a",{parentName:"li",href:"/docs/server-config/host-configuration"},"host configuration")," documentation\nfor more details."),(0,i.kt)("li",{parentName:"ol"},"Edit the Icecast password in ",(0,i.kt)("inlineCode",{parentName:"li"},"/etc/icecast2/icecast.xml")," to reflect the\npassword used in Airtime"),(0,i.kt)("li",{parentName:"ol"},"Restart the LibreTime services"),(0,i.kt)("li",{parentName:"ol"},"Open LibreTime's dashboard and verify all services are running")))}d.isMDXComponent=!0}}]);
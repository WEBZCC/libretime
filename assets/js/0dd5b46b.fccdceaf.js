"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[821],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(n),p=a,h=m["".concat(l,".").concat(p)]||m[p]||d[p]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7151:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={title:"Managing users"},l=void 0,u={unversionedId:"user-manual/users",id:"user-manual/users",title:"Managing users",description:"It is strongly recommended not to use the default admin account in production, especially if your LibreTime server is accessible from the internet.",source:"@site/../docs/user-manual/users.md",sourceDirName:"user-manual",slug:"/user-manual/users",permalink:"/docs/user-manual/users",editUrl:"https://github.com/libretime/libretime/blob/main/docs/../docs/user-manual/users.md",tags:[],version:"current",frontMatter:{title:"Managing users"},sidebar:"tutorialSidebar",previous:{title:"System status",permalink:"/docs/user-manual/status"},next:{title:"Webstreams",permalink:"/docs/user-manual/webstreams"}},c=[{value:"User account types",id:"user-account-types",children:[{value:"Guests",id:"guests",children:[],level:3},{value:"DJs",id:"djs",children:[],level:3},{value:"Program managers",id:"program-managers",children:[],level:3},{value:"Administrators",id:"administrators",children:[],level:3}],level:2},{value:"Editing or deleting user accounts",id:"editing-or-deleting-user-accounts",children:[],level:2}],d={toc:c};function m(e){var t=e.components,s=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"It is strongly recommended not to use the default ",(0,i.kt)("inlineCode",{parentName:"p"},"admin")," account in production, especially if your LibreTime server is accessible from the internet."))),(0,i.kt)("h2",{id:"user-account-types"},"User account types"),(0,i.kt)("p",null,"To add further user accounts to the system, one for each of your station staff that need access to Airtime, click the ",(0,i.kt)("strong",{parentName:"p"},"New User")," button with the plus icon. Enter a user name, password and contact details, and then select the ",(0,i.kt)("strong",{parentName:"p"},"User Type")," from the drop down menu, which can be ",(0,i.kt)("em",{parentName:"p"},"Admin"),", ",(0,i.kt)("em",{parentName:"p"},"Program Manager"),", ",(0,i.kt)("em",{parentName:"p"},"DJ"),", or ",(0,i.kt)("em",{parentName:"p"},"Guest"),"."),(0,i.kt)("h3",{id:"guests"},"Guests"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Can view shows and the playout log on the Calendar and Dashboard, respectively"),(0,i.kt)("li",{parentName:"ul"},"Listen to the output stream without leaving the interface")),(0,i.kt)("h3",{id:"djs"},"DJs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Everything Guests can do, plus"),(0,i.kt)("li",{parentName:"ul"},"Upload media (music, PSAs, underwriting, shows, etc.) to their own library (DJs cannot view other libraries)"),(0,i.kt)("li",{parentName:"ul"},"Edit metadata, delete, and schedule media in their own library to shows they're assigned to"),(0,i.kt)("li",{parentName:"ul"},"Preview uploaded media ",(0,i.kt)("em",{parentName:"li"},"without")," affecting the live playout"),(0,i.kt)("li",{parentName:"ul"},"Create Playlists, Smart Blocks, and connect Podcasts and Webstreams to LibreTime")),(0,i.kt)("h3",{id:"program-managers"},"Program managers"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Everything DJs can do, plus"),(0,i.kt)("li",{parentName:"ul"},"Manage other users' libraries in addition to their own"),(0,i.kt)("li",{parentName:"ul"},"Create, edit, and delete color-coded shows on the Calendar and assign them to DJs (if needed)"),(0,i.kt)("li",{parentName:"ul"},"Shows can be scheduled to repeat, with the option of linking content between the shows (helpful if a DJ livestreams in each week)"),(0,i.kt)("li",{parentName:"ul"},"View listener statistics"),(0,i.kt)("li",{parentName:"ul"},"Export playout logs for analysis or reporting for music royalties")),(0,i.kt)("h3",{id:"administrators"},"Administrators"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Everything Program Managers can do, plus"),(0,i.kt)("li",{parentName:"ul"},"Manage all user accounts, including the ability to reset passwords"),(0,i.kt)("li",{parentName:"ul"},"Configure Track Types for easy sorting of uploaded content"),(0,i.kt)("li",{parentName:"ul"},"Change system settings")),(0,i.kt)("h2",{id:"editing-or-deleting-user-accounts"},"Editing or deleting user accounts"),(0,i.kt)("p",null,"To edit a user account, click on that user's row in the table, change the user's details in the box on the\nright side, and then click the ",(0,i.kt)("strong",{parentName:"p"},"Save")," button. To remove a user account, click the small ",(0,i.kt)("strong",{parentName:"p"},"x")," icon to the right\nside of its row in the table. You cannot delete your own user account, and usernames cannot be changed once created."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(1072).Z,width:"505",height:"461"})),(0,i.kt)("p",null,"Users can update their own password, and their contact, language and time zone details, by clicking their username on the\nright side of the main menu bar, next to the ",(0,i.kt)("strong",{parentName:"p"},"Logout")," link."))}m.isMDXComponent=!0},1072:function(e,t,n){t.Z=n.p+"assets/images/users-user-edit-b58c2b2b0dd8adbb449e40d7375bee1f.png"}}]);
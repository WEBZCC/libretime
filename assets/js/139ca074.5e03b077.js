"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[23],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(h,i(i({ref:t},l),{},{components:r})):n.createElement(h,i({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8170:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],c={title:"Backing Up Libretime"},s=void 0,p={unversionedId:"server-config/backing-up-the-server",id:"server-config/backing-up-the-server",title:"Backing Up Libretime",description:"At the moment, there is no script to cleanly restore a Libretime backup. To restore a Libretime backup, install a fresh copy, go through the standard setup process, and reupload the backed-up media files.",source:"@site/../docs/server-config/backing-up-the-server.md",sourceDirName:"server-config",slug:"/server-config/backing-up-the-server",permalink:"/docs/server-config/backing-up-the-server",editUrl:"https://github.com/libretime/libretime/../docs/server-config/backing-up-the-server.md",tags:[],version:"current",frontMatter:{title:"Backing Up Libretime"},sidebar:"tutorialSidebar",previous:{title:"Webstreams",permalink:"/docs/guides/webstreams"},next:{title:"FreeIPA Configuration",permalink:"/docs/server-config/freeipa"}},l=[],u={toc:l};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"At the moment, there is no script to cleanly restore a Libretime backup. To restore a Libretime backup, install a fresh copy, go through the standard setup process, and reupload the backed-up media files."))),(0,o.kt)("p",null,"A backup script is supplied for your convenience in the ",(0,o.kt)("em",{parentName:"p"},"utils/")," folder of the Libretime repo.\nRun it using:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo bash libretime-backup.sh  # backs up to user's home folder\n# or\nsudo bash libretime-backup.sh /backupdir/\n")),(0,o.kt)("p",null,"The backup process can be automated with Cron. Simply add the following to the root user's\ncrontab with ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo crontab -e"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"0 0 1 * * /locationoflibretimerepo/libretime/backup.sh\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"For more information on how Cron works, check out ",(0,o.kt)("a",{parentName:"p",href:"https://www.redhat.com/sysadmin/automate-linux-tasks-cron"},"this Redhat guide"),".")),(0,o.kt)("p",null,"If you wish to deploy your own backup solution, the following files and folders need to\nbe backed up."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/srv\n  /airtime\n    /stor\n      /imported - Successfully imported media\n      /organize - A temporary holding place for uploaded media as the importer works\n/etc\n  /airtime\n    airtime.conf - The main Libretime configuration\n    icecast_pass - Holds the password for the Icecast server\n    liquidsoap.cfg - The main configuration file for Liquidsoap\n")),(0,o.kt)("p",null,"In addition, you should keep a copy of the database current to the backup. The below code\ncan be used to export the Libretime database to a file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo -u postgres pg_dumpall filename\n# or to a zipped archive\nsudo -u postgres pg_dumpall | gzip -c > archivename.gz\n")),(0,o.kt)("p",null,"It is recommended to use an incremental backup technique to synchronize\nthe your LibreTime track library with a backup server regularly. (If\nthe backup server also contains an LibreTime installation, it should be possible\nto switch playout to this second machine relatively quickly, in case of a\nhardware failure or other emergency on the production server.)"),(0,o.kt)("p",null,"Two notible backup tools are ",(0,o.kt)("a",{parentName:"p",href:"http://rsync.samba.org/"},"rsync")," (without version control) and\n",(0,o.kt)("a",{parentName:"p",href:"http://www.nongnu.org/rdiff-backup/"},"rdiff-backup")," (with version control). ",(0,o.kt)("em",{parentName:"p"},"rsync")," comes\npreinstalled with Ubuntu Server."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Standard rsync backups, which are used by the backup script, cannot restore files deleted in the backup itself"))))}d.isMDXComponent=!0}}]);
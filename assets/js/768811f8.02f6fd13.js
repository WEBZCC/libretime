"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[637],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(a),d=r,m=h["".concat(l,".").concat(d)]||h[d]||u[d]||o;return a?n.createElement(m,i(i({ref:t},p),{},{components:a})):n.createElement(m,i({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},9130:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return h}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],s={title:"Settings"},l=void 0,c={unversionedId:"user-manual/settings",id:"user-manual/settings",title:"Settings",description:"General settings",source:"@site/../docs/user-manual/settings.md",sourceDirName:"user-manual",slug:"/user-manual/settings",permalink:"/docs/user-manual/settings",editUrl:"https://github.com/libretime/libretime/blob/main/docs/../docs/user-manual/settings.md",tags:[],version:"current",frontMatter:{title:"Settings"},sidebar:"tutorialSidebar",previous:{title:"Scheduling shows",permalink:"/docs/user-manual/scheduling-shows"},next:{title:"System status",permalink:"/docs/user-manual/status"}},p=[{value:"General settings",id:"general-settings",children:[],level:2},{value:"Track types",id:"track-types",children:[{value:"Create track types",id:"create-track-types",children:[],level:3}],level:2},{value:"Stream settings",id:"stream-settings",children:[{value:"Global settings",id:"global-settings",children:[],level:3},{value:"Input stream settings",id:"input-stream-settings",children:[],level:3},{value:"Switching input streams",id:"switching-input-streams",children:[],level:3},{value:"Output stream settings",id:"output-stream-settings",children:[],level:3}],level:2}],u={toc:p};function h(e){var t=e.components,s=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"general-settings"},"General settings"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(7004).Z,width:"807",height:"405"})),(0,o.kt)("p",null,"On the ",(0,o.kt)("strong",{parentName:"p"},"Settings")," menu, click ",(0,o.kt)("strong",{parentName:"p"},"General")," to set your ",(0,o.kt)("strong",{parentName:"p"},"Station Name"),". This\ntext is shown in your web browser's title bar when your station staff are logged\ninto LibreTime, and optionally in stream metadata. You can also set a ",(0,o.kt)("strong",{parentName:"p"},"Station\nDescription")," and ",(0,o.kt)("strong",{parentName:"p"},"Station Logo")," here."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(5389).Z,width:"804",height:"744"})),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Default Interface Language")," drop-down menu sets the default localization\nfor your LibreTime instance, and the ",(0,o.kt)("strong",{parentName:"p"},"Station Timezone")," drop-down menu can be\nused to display local time at your station. LibreTime stores show times\ninternally in UTC format (similar to ",(0,o.kt)("em",{parentName:"p"},"Greenwich Mean Time"),"), but displays local\ntime for the convenience of your station staff. You can also set the day of the\nweek that you wish to start your station's weekly schedule on, which defaults\nto Sunday."),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Track Type Default")," enables you to select a track type default for uploads."),(0,o.kt)("p",null,"Initially, the ",(0,o.kt)("strong",{parentName:"p"},"Default Fade In")," and ",(0,o.kt)("strong",{parentName:"p"},"Default Fade Out")," times for automated\nfades are set to half a second, and the ",(0,o.kt)("strong",{parentName:"p"},"Default Crossfade Duration")," is set to\nzero seconds. Custom fade and crossfade times can be set for adjacent items in a\nplaylist or static smart block. See the chapter ",(0,o.kt)("em",{parentName:"p"},"Library")," for details."),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Intro Autoloading Playlist")," enables you to select a playlist that will be\nscheduled at the beginning of every show that has enabled an autoloading\nplaylist. This can be used for instance to insert a station ID or other\nannouncements a the top of every show."),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Outro Autoloading Playlist")," enables you to select a playlist that will be\nscheduled after the content of every show with an autoloading playlist."),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Overwrite Podcast Episode Metatags")," option which is enabled by default\ncauses LibreTime to override the Artist, Title & Album fields on any tracks\ndownloaded from a podcast with information from the RSS feed."),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Generate a smartblock and a playlist upon creation of a new podcast"),"\noption when enabled will create a smartblock matching the newest episode of a\npodcast and a playlist containing that smartblock automatically upon adding a\npodcast to LibreTime. This can also be done manually by the generate smartblock\nand playlist button under a podcasts settings which is why it is disabled by\ndefault."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(3029).Z,width:"643",height:"364"})),(0,o.kt)("p",null,"You can opt-in to test new features with the ",(0,o.kt)("strong",{parentName:"p"},"Feature Previews")," option.\nFeatures that we soft rollout this way may need more feedback or still have\ntolerable bugs. This contains but is not limited to features like large ui\nrefactors. You can switch back at any time."),(0,o.kt)("p",null,"You can enable live, read-only access to the LibreTime schedule calendar for\nyour station's public website with the ",(0,o.kt)("strong",{parentName:"p"},"Public LibreTime API")," option, if you\nwish. (There is more about this feature in the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/user-manual/playout-history"},(0,o.kt)("em",{parentName:"a"},"Exporting the schedule"))," chapter, in the\n",(0,o.kt)("em",{parentName:"p"},"Advanced Configuration")," section of this book)."),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Allowed CORS URLs")," is intended to deal with situations where you want a\nremote site with a different domain to access the API. This is relevant when\nthere is a reverse proxy server in front of LibreTime. If you are using a\nreverse proxy, the URLs that will be used to access it should be added here."),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Display login button on your Radio Page?")," will determine whether visitors\nto your site see a link to login. If this is disabled, DJs and admins will need\nto goto ",(0,o.kt)("a",{parentName:"p",href:"http://example.org/login"},"http://example.org/login")," to be able to login."),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Tune-In Settings")," section is intended for stations that have partnered\nwith TuneIn to automatically push their now playing metadata to TuneIn. This\nhasn't been tested and also requires special credentials from TuneIn."),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Dangerous Options")," section provides an administrator the ability to erase LibreTime's track library."),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Erasing LibreTime's track library cannot be undone."))),(0,o.kt)("p",null,"Individual LibreTime users can choose another interface localization when they\nlog in, or set personal preferences for localization and time zone by clicking\ntheir username on the right side of the menu bar."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"track-types"},"Track types"),(0,o.kt)("h3",{id:"create-track-types"},"Create track types"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Settings")),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Track Types")),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"New Track Type")),(0,o.kt)("li",{parentName:"ol"},'On the "Code" field, type a unique code that can be easily identifiable. Example, for Music use "MUS" or for Sound Effects use something like "FX".'),(0,o.kt)("li",{parentName:"ol"},'On the "Type Name" field, type a the name of the type of tracks. Example, "Station IDs".'),(0,o.kt)("li",{parentName:"ol"},'On the "Description" field, enter the description of the type given.'),(0,o.kt)("li",{parentName:"ol"},'On the "Visibility" drop down menu, choose to enable or disable the track type. By default, it is enabled. If disabled, it won\'t be shown across LibreTime or in the API for developers.'),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Save"),".")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"stream-settings"},"Stream settings"),(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/QPNo52Fc0ck",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,o.kt)("h3",{id:"global-settings"},"Global settings"),(0,o.kt)("p",null,"You can configure direct Icecast and SHOUTcast streams and sound card output by clicking ",(0,o.kt)("strong",{parentName:"p"},"Streams")," on the ",(0,o.kt)("strong",{parentName:"p"},"System")," menu."),(0,o.kt)("p",null,"At the top left of the ",(0,o.kt)("strong",{parentName:"p"},"Stream Settings")," page are global settings including ",(0,o.kt)("strong",{parentName:"p"},"Hardware Audio Output"),", which enables playout from the default sound card on the server, if one is fitted. The default ",(0,o.kt)("strong",{parentName:"p"},"Output Type")," of ",(0,o.kt)("em",{parentName:"p"},"ALSA")," on the drop-down menu will be suitable for most servers with a sound card. If not, you have the option to choose from other Liquidsoap interfaces available, such as ",(0,o.kt)("em",{parentName:"p"},"OSS")," or ",(0,o.kt)("em",{parentName:"p"},"PortAudio"),"."),(0,o.kt)("p",null,"The second checkbox under Global Settings enables the sending of ",(0,o.kt)("strong",{parentName:"p"},"Icecast Vorbis Metadata")," with direct streams. This setting is optional, because some media players have a bug which makes them disconnect from Ogg Vorbis streams when an Icecast server notifies the player that a new track is starting."),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Stream Label")," radio button allows you to set the metadata that will be sent with direct streams; ",(0,o.kt)("em",{parentName:"p"},"Artist")," and ",(0,o.kt)("em",{parentName:"p"},"Title"),", ",(0,o.kt)("em",{parentName:"p"},"Show"),", ",(0,o.kt)("em",{parentName:"p"},"Artist")," and ",(0,o.kt)("em",{parentName:"p"},"Title"),", or ",(0,o.kt)("em",{parentName:"p"},"Station name")," and ",(0,o.kt)("em",{parentName:"p"},"Show name"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Off Air Metadata")," field configures the text that will be sent to any configured streaming servers, and from there on to media players, when Airtime is not streaming any output."),(0,o.kt)("p",null,"Below this is the ",(0,o.kt)("strong",{parentName:"p"},"Enable Replay Gain")," checkbox which, if checked, automatically adjusts Airtime's output level to an average of -14dBFS, based on prior analysis of the level of individual files in the ",(0,o.kt)("strong",{parentName:"p"},"Library"),". This feature helps guard against unwanted changes in Airtime's output level caused by the typical variation in average level of recordings made in different studios at different times. The correction value for each file can be viewed by enabling the ReplayGain column in the ",(0,o.kt)("strong",{parentName:"p"},"Library"),"."),(0,o.kt)("p",null,"If Replay Gain is enabled, output level can be adjusted up to 10dB louder or quieter from the reference level of -14dBFS by clicking and dragging the ",(0,o.kt)("strong",{parentName:"p"},"Replay Gain Modifier")," control. Increasing level too far is likely to result in clipping (distortion) since the output level is adjusted to be greater than that of the original files. This scenario is indicated by amplitude correction factors greater than 1.0 in the Liquidsoap log file."),(0,o.kt)("p",null,"Click the ",(0,o.kt)("strong",{parentName:"p"},"Save")," button on the right side of the page to save any changes that you have made to global settings. If you are only using the hardware audio output, and will not be streaming to or from Airtime, you can leave the ",(0,o.kt)("strong",{parentName:"p"},"Stream Settings")," page after clicking the ",(0,o.kt)("strong",{parentName:"p"},"Save")," button."),(0,o.kt)("h3",{id:"input-stream-settings"},"Input stream settings"),(0,o.kt)("p",null,"On the lower left side of the Stream Settings page you can configure remote live input streams from DJ programs such as ",(0,o.kt)("strong",{parentName:"p"},"Mixxx")," or ",(0,o.kt)("strong",{parentName:"p"},"IDJC"),", or smartphone applications used by broadcast journalists. A bug with ",(0,o.kt)("strong",{parentName:"p"},"Butt")," versions 1.14 to 1.16 causes streams not to connect to LibreTime. A fix has been introduced with ",(0,o.kt)("strong",{parentName:"p"},"Butt")," version 1.17 that allows it to be used by LibreTime."),(0,o.kt)("p",null,"Airtime supports two types of live input stream; the ",(0,o.kt)("strong",{parentName:"p"},"Show Source"),", which enables a specific person to stream in during their own show, and the ",(0,o.kt)("strong",{parentName:"p"},"Master Source"),", which can override the Show Source if necessary. If neither type of live input is available, Airtime will fall back to ",(0,o.kt)("strong",{parentName:"p"},"Scheduled Play")," (playlists, smart blocks, remote streams and files scheduled in Airtime, in advance of or during a show)."),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Auto Switch Off")," and ",(0,o.kt)("strong",{parentName:"p"},"Auto Switch On")," checkboxes enable playout to be switched automatically to the highest priority source whenever an authenticated input source disconnects from or connects to Airtime, respectively. The field ",(0,o.kt)("strong",{parentName:"p"},"Switch Transition Fade")," sets the length of the audio fade as scheduled playout is switched to a remote input source, and back."),(0,o.kt)("p",null,"Each type of input stream requires a username and password before the remote broadcaster can connect to Airtime. The ",(0,o.kt)("strong",{parentName:"p"},"Master Username")," and ",(0,o.kt)("strong",{parentName:"p"},"Master Password")," can be set in the Input Stream Settings box, while the authentication for individual Show Sources is set up in Airtime's schedule calendar. See the ",(0,o.kt)("em",{parentName:"p"},"Calendar")," chapter for details."),(0,o.kt)("p",null,"Input streams must have a ",(0,o.kt)("strong",{parentName:"p"},"Port")," for the remote broadcaster to connect to, which should be a number in the range from 1024 to 49151. If you have the Icecast or SHOUTcast streaming server running on the same machine as Airtime, you should avoid using port 8000 or 8001 for either type of Airtime input stream. This is because both Icecast and SHOUTcast use port 8000, and SHOUTcast also uses port 8001. If the usernames and passwords were similar, remote broadcasters might accidentally connect to the streaming server directly, bypassing Airtime."),(0,o.kt)("p",null,"To avoid further confusion, it is also recommended that you set a different ",(0,o.kt)("strong",{parentName:"p"},"Mount Point")," (the specific filename for broadcasters and listeners to connect to) from that used on your public Icecast or SHOUTcast server."),(0,o.kt)("p",null,"If your Airtime server is behind a firewall, and you wish remote broadcasters to connect input streams to it across the public Internet, you may need to click the ",(0,o.kt)("strong",{parentName:"p"},"Override")," link to set a ",(0,o.kt)("strong",{parentName:"p"},"Connection URL")," which is available from outside your local area network. This URL might be based on the domain name assigned to the router which forwards the appropriate port to your Airtime server. Then click ",(0,o.kt)("strong",{parentName:"p"},"OK")," to save the new connection URL."),(0,o.kt)("h3",{id:"switching-input-streams"},"Switching input streams"),(0,o.kt)("p",null,"In the Master Panel, available input source streams are shown with an orange line connecting the source to the switch, which you could think of like a patch cable connecting a source to a broadcast mixer. When that switch is active, another orange line connects the switch to the On Air indicator, like a patch cable connecting a mixer to a transmitter."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(6123).Z,width:"447",height:"103"})),(0,o.kt)("p",null,"If you have checked the ",(0,o.kt)("strong",{parentName:"p"},"Auto Switch On")," box in the Stream Settings page, the ",(0,o.kt)("strong",{parentName:"p"},"Master Source")," switch will move automatically to the active position, on the left, when an authenticated master source connects to Airtime. Otherwise, you can activate the switches manually by clicking the left side of each switch, or deactivate them by clicking the right side. The switches do not have to be dragged with the mouse, in the way that a switch on a hardware mixer would be pushed sideways. ",(0,o.kt)("strong",{parentName:"p"},"Show Source")," live input streams can also be manually activated or deactivated in the same way. If neither the show source or master source is active then LibreTime will default to what is scheduled to play in the Calendar."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(489).Z,width:"453",height:"101"})),(0,o.kt)("p",null,"If you have the ",(0,o.kt)("strong",{parentName:"p"},"Auto Switch Off")," box checked LibreTime will resume scheduled playback whenever a stream disconnects. Otherwise you will need to slide to disable a source after a DJ stops streaming."),(0,o.kt)("p",null,"You can also force disconnection of a live remote source, for example when the remote input source has crashed and is no longer sending audio data, click the ",(0,o.kt)("strong",{parentName:"p"},"X")," icon to the left of the source name."),(0,o.kt)("h3",{id:"output-stream-settings"},"Output stream settings"),(0,o.kt)("p",null,"The Default Streaming radio button that is configured by default currently relies upon an insecure icecast password. You will want to change the Icecast2 password and select Custom Streaming. See the notice above for a tutorial on how to fix this."),(0,o.kt)("p",null,"On the right side of the page, you can configure up to three independent output streams with different bit rates or formats, and send these streams to different Icecast or SHOUTcast servers. By default, only Stream 1 is enabled, with this stream being sent the Icecast server configured at installation time."),(0,o.kt)("p",null,"To configure another stream, click the bar with the stream number to expand its box, and make sure ",(0,o.kt)("strong",{parentName:"p"},"Enabled")," is checked. Enter at least the streaming ",(0,o.kt)("strong",{parentName:"p"},"Server")," IP address or domain name, and ",(0,o.kt)("strong",{parentName:"p"},"Port")," details. The default port for Icecast and SHOUTcast servers is 8000."),(0,o.kt)("p",null,"Click ",(0,o.kt)("strong",{parentName:"p"},"Additional Options")," to expand a box in which you can enter the usernames, passwords and metadata to send to the streaming server. The default ",(0,o.kt)("strong",{parentName:"p"},"Username")," for Icecast servers is ",(0,o.kt)("em",{parentName:"p"},"source"),", and if this the name in use on your streaming server, you can leave this field empty. The ",(0,o.kt)("strong",{parentName:"p"},"Admin User")," and ",(0,o.kt)("strong",{parentName:"p"},"Admin Password")," settings are optional, and are used to query the streaming server for audience numbers by the ",(0,o.kt)("strong",{parentName:"p"},"Listener Stats")," page on the ",(0,o.kt)("strong",{parentName:"p"},"System")," menu."),(0,o.kt)("p",null,"You can also set the specific ",(0,o.kt)("strong",{parentName:"p"},"Mount Point")," that listeners will connect to here. Then click one of the ",(0,o.kt)("strong",{parentName:"p"},"Save")," buttons in the upper or lower right corner of the page to update the Airtime server's settings."),(0,o.kt)("p",null,"Airtime supports output to Icecast in Ogg Vorbis, Ogg Opus, MP3 and AAC formats. When selecting a SHOUTcast server from the ",(0,o.kt)("strong",{parentName:"p"},"Service Type")," drop-down menu, you are restricted to using MP3 or AAC formats only, so the choice of Ogg Vorbis and Opus formats is greyed out in the ",(0,o.kt)("strong",{parentName:"p"},"Stream Type")," drop-down menu. The SHOUTcast username for stream sources is fixed, so you do not need to enter this value under ",(0,o.kt)("strong",{parentName:"p"},"Additional Options"),", but you will usually have to enter a password."),(0,o.kt)("p",null,"Any connection problems between Liquidsoap and Icecast or SHOUTcast are shown on the Stream Settings page. For example, if you enter the wrong password, you will see an ",(0,o.kt)("em",{parentName:"p"},"Authentication Required")," error message. To fix this, enter the correct password in the ",(0,o.kt)("strong",{parentName:"p"},"Additional Options")," box, and click the ",(0,o.kt)("strong",{parentName:"p"},"Save")," button. If the streaming server is down for any reason, or you have entered an incorrect ",(0,o.kt)("strong",{parentName:"p"},"Server")," name or ",(0,o.kt)("strong",{parentName:"p"},"Port")," number, you will see the message ",(0,o.kt)("em",{parentName:"p"},"Can not connect to the streaming server"),"."))}h.isMDXComponent=!0},3029:function(e,t,a){t.Z=a.p+"assets/images/settings-api-settings-9525e03540a073401fbc8dd369a57bc3.png"},5389:function(e,t,a){t.Z=a.p+"assets/images/settings-general-playback-settings-f4710a7759ca25e725ae0cc1225e7a21.png"},6123:function(e,t,a){t.Z=a.p+"assets/images/settings-libretime-master-source-stream-8a3d466f7ff3d7c865127171e1f5f633.png"},489:function(e,t,a){t.Z=a.p+"assets/images/settings-libretime-show-source-stream-f77cfb68ba9484ea88b5984080aeb4d2.png"},7004:function(e,t,a){t.Z=a.p+"assets/images/settings-station-info-settings-4b4e687dee7e4a04085b0cc7057908ee.png"}}]);
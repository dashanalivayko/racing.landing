(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[203],{3790:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/game",function(){return n(9384)}])},9384:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return p}});var r=n(5893),i=n(3850),o=(0,i.Z)((function(){return{grass:{display:"flex",width:"100%",height:"73px"},section:{background:"#F3EB5A",width:"100%",justifyContent:"center",display:"flex",alignItems:"center",flexDirection:"column"},game:{width:"100%",height:"100%",display:"flex"}}})),a=n(7294),u=n(8914),s="/racing.landing/_next/static/media/poster.5a1805fe.png",c=n(8909),l=new u.LI({loaderUrl:"unity/Build/TPR_proto_1.0.11.loader.js",dataUrl:"unity/Build/TPR_proto_1.0.11.data",frameworkUrl:"unity/Build/TPR_proto_1.0.11.framework.js",codeUrl:"unity/Build/TPR_proto_1.0.11.wasm",webglContextAttributes:{preserveDrawingBuffer:!0}}),d=(0,i.Z)((function(t){return{root:{width:"100%",height:"100%",justifyContent:"center",alignItems:"end",backgroundImage:"url(".concat(s,")"),display:"flex",backgroundPosition:"center"},unityCanvas:{width:"100%",height:"100%"},loading:{marginBottom:"70px",position:"relative",background:"#FFFFFF",textStroke:"2px #061537",boxSizing:"border-box",boxShadow:"inset 0px -9px 0px #E2E2E2",borderRadius:"52px",width:"500px",height:"80px",padding:"15px 30px",display:"flex",alignItems:"center",justifyContent:"space-between",border:"2px solid #061537","& p":{fontFamily:c.I,fontStyle:"normal",fontWeight:900,fontSize:"36px",lineHeight:"49px",textAlign:"right",textTransform:"uppercase",color:"#3760C2",textStroke:"1.5px #1B3A80"},"&.fill":{background:"#3760C2",boxShadow:"inset 0px -7px 0px #1B3A80",position:"absolute",left:"-2px",top:"-2px",overflow:"hidden","& > p":{color:"white",display:"inline"}}}}})),f=function(){var t=d(),e=(0,a.useState)(0),n=e[0],i=e[1],o=(0,a.useState)(!1),s=o[0],c=o[1];(0,a.useEffect)((function(){l.on("progress",(function(t){return i(t)})),l.on("loaded",(function(){return c(!0)})),console.log(n)}),[n]);var f=Math.round(100*n),p=500*n;return(0,r.jsxs)("div",{className:t.root,children:[!s&&(0,r.jsxs)("div",{className:t.loading,style:{position:"absolute"},children:[(0,r.jsx)("p",{children:"Loading"}),(0,r.jsxs)("p",{children:[f,"%"]}),(0,r.jsxs)("div",{className:"".concat(t.loading," fill"),style:{width:"".concat(p,"px")},children:[(0,r.jsx)("p",{style:{marginRight:"190px"},children:"Loading"}),(0,r.jsxs)("p",{children:[f,"%"]})]})]}),(0,r.jsx)(u.ZP,{unityContext:l,className:t.unityCanvas})]})},p=function(){var t=o();return(0,r.jsx)("div",{className:t.game,children:(0,r.jsx)(f,{})})}},8909:function(t,e,n){"use strict";n.d(e,{I:function(){return r}});var r=["Nunito Sans","sans-serif"].join(",")},5361:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Unity=void 0;var r=n(7294),i=n(7294),o=n(5421),a=n(2340),u=n(3153),s=0;e.Unity=function(t){var e=(0,i.useRef)(null),n=(0,i.useState)(t.unityContext)[0],c=(0,u.generateUnityInstanceParameters)(n,t),l=(0,a.useUnityLoader)(n.unityConfig.loaderUrl),d=(0,o.useUnityInstance)(l,e.current,c),f=d.unityInstance,p=d.progression,y=d.error;return(0,i.useEffect)((function(){null!==f&&(n.unityInstance=f)}),[f]),(0,i.useEffect)((function(){n.htmlCanvasElement=e.current}),[e]),(0,i.useEffect)((function(){1===p&&(null!==e.current&&n.dispatchEvent("canvas",e.current),n.dispatchEvent("loaded")),n.dispatchEvent("progress",p)}),[p]),(0,i.useEffect)((function(){null!==y&&n.dispatchEvent("error",y)}),[y]),(0,i.useEffect)((function(){return s++,function(){null===n||void 0===n||n.quitUnityInstance()}}),[]),(0,r.createElement)("canvas",{id:"unity-canvas-".concat(s),ref:e,className:t.className||void 0,style:t.style||{},tabIndex:t.tabIndex||void 0})}},5421:function(t,e,n){"use strict";var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(i,o){function a(t){try{s(r.next(t))}catch(e){o(e)}}function u(t){try{s(r.throw(t))}catch(e){o(e)}}function s(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,u)}s((r=r.apply(t,e||[])).next())}))},i=this&&this.__generator||function(t,e){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(t,a)}catch(u){o=[6,u],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}};Object.defineProperty(e,"__esModule",{value:!0}),e.useUnityInstance=void 0;var o=n(7294),a=n(2340);e.useUnityInstance=function(t,e,n){var u=(0,o.useState)(0),s=u[0],c=u[1],l=(0,o.useState)(null),d=l[0],f=l[1],p=(0,o.useState)(null),y=p[0],h=p[1];return(0,o.useEffect)((function(){!function(){r(this,void 0,void 0,(function(){var r,o;return i(this,(function(i){switch(i.label){case 0:if(t!==a.Status.Loaded||null===e)return h(null),[2];i.label=1;case 1:return i.trys.push([1,3,,4]),"undefined"===typeof window?[2]:[4,window.createUnityInstance(e,n,c)];case 2:return r=i.sent(),h(r),f(null),[3,4];case 3:return o=i.sent(),h(null),f(o),[3,4];case 4:return[2]}}))}))}()}),[t,e]),{unityInstance:y,progression:s,error:d}}},2340:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useUnityLoader=e.Status=void 0;var r,i=n(7294);!function(t){t.Idle="Idle",t.Loading="Loading",t.Loaded="Loaded",t.Error="Error"}(r=e.Status||(e.Status={})),e.useUnityLoader=function(t){var e=(0,i.useState)(t?r.Loading:r.Idle),n=e[0],o=e[1];return(0,i.useEffect)((function(){if(null!==t){var e=document.querySelector('script[src="'.concat(t,'"]'));if(null===e){(e=document.createElement("script")).src=t,e.async=!0,e.setAttribute("data-status","loading"),document.body.appendChild(e);var n=function(t){null===e||void 0===e||e.setAttribute("data-status","load"===t.type?"ready":"error")};e.addEventListener("load",n),e.addEventListener("error",n)}else o("ready"===e.getAttribute("data-status")?r.Loaded:r.Error);var i=function(t){o("load"===t.type?r.Loaded:r.Error)};return e.addEventListener("load",i),e.addEventListener("error",i),function(){e&&(e.removeEventListener("load",i),e.removeEventListener("error",i),document.body.removeChild(e))}}o(r.Idle)}),[t]),n}},8914:function(t,e,n){"use strict";e.LI=void 0;var r=n(5361),i=n(3747);Object.defineProperty(e,"LI",{enumerable:!0,get:function(){return i.UnityContext}}),e.ZP=r.Unity},8694:function(t,e){"use strict";var n=this&&this.__spreadArray||function(t,e,n){if(n||2===arguments.length)for(var r,i=0,o=e.length;i<o;i++)!r&&i in e||(r||(r=Array.prototype.slice.call(e,0,i)),r[i]=e[i]);return t.concat(r||Array.prototype.slice.call(e))};Object.defineProperty(e,"__esModule",{value:!0}),e.EventSystem=void 0;var r=new Array,i=function(t){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];for(var o=0,a=r;o<a.length;o++){var u=a[o];"undefined"!==typeof u&&u.dispatchEvent.apply(u,n([t],e,!1))}},o=function(){function t(){this.eventMap=new Map,r.push(this),"undefined"!==typeof window&&("undefined"===typeof window.dispatchReactUnityEvent&&(window.dispatchReactUnityEvent=i),"undefined"===typeof window.ReactUnityWebGL&&(window.ReactUnityWebGL={}))}return t.prototype.on=function(t,e){this.eventMap.set(t,e),"undefined"!==typeof window&&(window.ReactUnityWebGL[t]=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.apply(void 0,t)})},t.prototype.removeEventListener=function(t){this.eventMap.delete(t),"undefined"!==typeof window&&delete window.ReactUnityWebGL[t]},t.prototype.removeAllEventListeners=function(){"undefined"!==typeof window&&this.eventMap.forEach((function(t,e){delete window.ReactUnityWebGL[e]})),this.eventMap.clear()},t.prototype.dispatchEvent=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=this.eventMap.get(t);"undefined"!==typeof r&&r.apply(void 0,e)},t}();e.EventSystem=o},3747:function(t,e,n){"use strict";var r=this&&this.__extends||function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),i=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(i,o){function a(t){try{s(r.next(t))}catch(e){o(e)}}function u(t){try{s(r.throw(t))}catch(e){o(e)}}function s(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,u)}s((r=r.apply(t,e||[])).next())}))},o=this&&this.__generator||function(t,e){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(t,a)}catch(u){o=[6,u],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}};Object.defineProperty(e,"__esModule",{value:!0}),e.UnityContext=void 0;var a=function(t){function e(e){var n=t.call(this)||this;return n.unityConfig=e,n.unityInstance=null,n.htmlCanvasElement=null,n}return r(e,t),e.prototype.send=function(t,e,n){null!==this.unityInstance&&("undefined"===typeof n?this.unityInstance.SendMessage(t,e):this.unityInstance.SendMessage(t,e,n))},e.prototype.requestPointerLock=function(){null!==this.htmlCanvasElement&&this.htmlCanvasElement.requestPointerLock()},e.prototype.takeScreenshot=function(t,e){var n;return null!==this.htmlCanvasElement?(!0!==(null===(n=this.unityConfig.webglContextAttributes)||void 0===n?void 0:n.preserveDrawingBuffer)&&console.warn("Taking a screenshot requires 'preserveDrawingBuffer'."),this.htmlCanvasElement.toDataURL(t,e)):null},e.prototype.setFullscreen=function(t){null!==this.unityInstance&&this.unityInstance.SetFullscreen(!0===t?1:0)},e.prototype.quitUnityInstance=function(){return i(this,void 0,void 0,(function(){return o(this,(function(t){switch(t.label){case 0:return null===this.unityInstance?[3,2]:[4,this.unityInstance.Quit()];case 1:t.sent(),this.unityInstance=null,this.dispatchEvent("quitted"),t.label=2;case 2:return[2]}}))}))},e}(n(8694).EventSystem);e.UnityContext=a},3153:function(t,e){"use strict";var n=this&&this.__assign||function(){return n=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},n.apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0}),e.generateUnityInstanceParameters=void 0,e.generateUnityInstanceParameters=function(t,e){var r=n({},t.unityConfig);return r.print=function(e){t.dispatchEvent("debug",e)},r.printErr=function(e){t.dispatchEvent("error",e)},"undefined"!==typeof e.devicePixelRatio&&(r.devicePixelRatio=e.devicePixelRatio),"undefined"!==typeof t.unityConfig.webglContextAttributes&&(r.webglContextAttributes=t.unityConfig.webglContextAttributes),"undefined"!==typeof e.matchWebGLToCanvasSize&&(r.matchWebGLToCanvasSize=e.matchWebGLToCanvasSize),r}}},function(t){t.O(0,[850,774,888,179],(function(){return e=3790,t(t.s=e);var e}));var e=t.O();_N_E=e}]);
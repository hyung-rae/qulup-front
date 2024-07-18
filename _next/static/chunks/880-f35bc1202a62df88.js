"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[880],{4918:function(e,t,n){n.d(t,{l:function(){return ee}});var r=n(5893),i=n(7294);function o(e){return"[object Object]"===Object.prototype.toString.call(e)||Array.isArray(e)}function a(e,t){let n=Object.keys(e),r=Object.keys(t);return n.length===r.length&&JSON.stringify(Object.keys(e.breakpoints||{}))===JSON.stringify(Object.keys(t.breakpoints||{}))&&n.every(n=>{let r=e[n],i=t[n];return"function"==typeof r?`${r}`==`${i}`:o(r)&&o(i)?a(r,i):r===i})}function u(e){return e.concat().sort((e,t)=>e.name>t.name?1:-1).map(e=>e.options)}function l(e){return"number"==typeof e}function c(e){return"string"==typeof e}function s(e){return"boolean"==typeof e}function d(e){return"[object Object]"===Object.prototype.toString.call(e)}function f(e){return Math.abs(e)}function p(e){return Math.sign(e)}function m(e){return b(e).map(Number)}function g(e){return e[h(e)]}function h(e){return Math.max(0,e.length-1)}function v(e,t=0){return Array.from(Array(e),(e,n)=>t+n)}function b(e){return Object.keys(e)}function y(e,t){return void 0!==t.MouseEvent&&e instanceof t.MouseEvent}function x(){let e=[],t={add:function(n,r,i,o={passive:!0}){let a;return"addEventListener"in n?(n.addEventListener(r,i,o),a=()=>n.removeEventListener(r,i,o)):(n.addListener(i),a=()=>n.removeListener(i)),e.push(a),t},clear:function(){e=e.filter(e=>e())}};return t}function w(e=0,t=0){let n=f(e-t);function r(n){return n<e||n>t}return{length:n,max:t,min:e,constrain:function(n){return r(n)?n<e?e:t:n},reachedAny:r,reachedMax:function(e){return e>t},reachedMin:function(t){return t<e},removeOffset:function(e){return n?e-n*Math.ceil((e-t)/n):e}}}function S(e){let t=e;function n(e){return l(e)?e:e.get()}return{get:function(){return t},set:function(e){t=n(e)},add:function(e){t+=n(e)},subtract:function(e){t-=n(e)}}}function k(e,t){let n="x"===e.scroll?function(e){return`translate3d(${e}px,0px,0px)`}:function(e){return`translate3d(0px,${e}px,0px)`},r=t.style,i=!1;return{clear:function(){i||(r.transform="",t.getAttribute("style")||t.removeAttribute("style"))},to:function(t){i||(r.transform=n(e.direction(t)))},toggleActive:function(e){i=!e}}}let j={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0};function C(e,t,n){let r,i,o,a,u;let E=e.ownerDocument,z=E.defaultView,D=function(e){function t(e,t){return function e(t,n){return[t,n].reduce((t,n)=>(b(n).forEach(r=>{let i=t[r],o=n[r],a=d(i)&&d(o);t[r]=a?e(i,o):o}),t),{})}(e,t||{})}return{mergeOptions:t,optionsAtMedia:function(n){let r=n.breakpoints||{},i=b(r).filter(t=>e.matchMedia(t).matches).map(e=>r[e]).reduce((e,n)=>t(e,n),{});return t(n,i)},optionsMediaQueries:function(t){return t.map(e=>b(e.breakpoints||{})).reduce((e,t)=>e.concat(t),[]).map(e.matchMedia)}}}(z),I=(u=[],{init:function(e,t){return(u=t.filter(({options:e})=>!1!==D.optionsAtMedia(e).active)).forEach(t=>t.init(e,D)),t.reduce((e,t)=>Object.assign(e,{[t.name]:t}),{})},destroy:function(){u=u.filter(e=>e.destroy())}}),L=x(),O=function(){let e,t={},n={init:function(t){e=t},emit:function(r){return(t[r]||[]).forEach(t=>t(e,r)),n},off:function(e,r){return t[e]=(t[e]||[]).filter(e=>e!==r),n},on:function(e,r){return t[e]=(t[e]||[]).concat([r]),n},clear:function(){t={}}};return n}(),{mergeOptions:A,optionsAtMedia:M,optionsMediaQueries:N}=D,{on:T,off:_,emit:F}=O,$=!1,P=A(j,C.globalOptions),H=A(P),R=[];function V(t,n){!$&&(H=M(P=A(P,t)),R=n||R,function(){let{container:t,slides:n}=H;o=(c(t)?e.querySelector(t):t)||e.children[0];let r=c(n)?o.querySelectorAll(n):n;a=[].slice.call(r||o.children)}(),r=function t(n){let r=function(e,t,n,r,i,o,a){let u,d;let{align:j,axis:C,direction:E,startIndex:z,loop:D,duration:I,dragFree:L,dragThreshold:O,inViewThreshold:A,slidesToScroll:M,skipSnaps:N,containScroll:T,watchResize:_,watchSlides:F,watchDrag:$}=o,P={measure:function(e){let{offsetTop:t,offsetLeft:n,offsetWidth:r,offsetHeight:i}=e;return{top:t,right:n+r,bottom:t+i,left:n,width:r,height:i}}},H=P.measure(t),R=n.map(P.measure),V=function(e,t){let n="rtl"===t,r="y"===e,i=!r&&n?-1:1;return{scroll:r?"y":"x",cross:r?"x":"y",startEdge:r?"top":n?"right":"left",endEdge:r?"bottom":n?"left":"right",measureSize:function(e){let{height:t,width:n}=e;return r?t:n},direction:function(e){return e*i}}}(C,E),B=V.measureSize(H),Z={measure:function(e){return e/100*B}},q=function(e,t){let n={start:function(){return 0},center:function(e){return(t-e)/2},end:function(e){return t-e}};return{measure:function(r,i){return c(e)?n[e](r):e(t,r,i)}}}(j,B),G=!D&&!!T,{slideSizes:X,slideSizesWithGaps:U,startGap:W,endGap:J}=function(e,t,n,r,i,o){let{measureSize:a,startEdge:u,endEdge:l}=e,c=n[0]&&i,s=function(){if(!c)return 0;let e=n[0];return f(t[u]-e[u])}(),d=c?parseFloat(o.getComputedStyle(g(r)).getPropertyValue(`margin-${l}`)):0,p=n.map(a),m=n.map((e,t,n)=>{let r=t===h(n);return t?r?p[t]+d:n[t+1][u]-e[u]:p[t]+s}).map(f);return{slideSizes:p,slideSizesWithGaps:m,startGap:s,endGap:d}}(V,H,R,n,D||!!T,i),K=function(e,t,n,r,i,o,a,u,c){let{startEdge:s,endEdge:d,direction:p}=e,v=l(n);return{groupSlides:function(e){return v?m(e).filter(e=>e%n==0).map(t=>e.slice(t,t+n)):e.length?m(e).reduce((n,l,c)=>{let m=g(n)||0,v=l===h(e),b=i[s]-o[m][s],y=i[s]-o[l][d],x=r||0!==m?0:p(a),w=f(y-(!r&&v?p(u):0)-(b+x));return c&&w>t+2&&n.push(l),v&&n.push(e.length),n},[]).map((t,n,r)=>{let i=Math.max(r[n-1]||0);return e.slice(i,t)}):[]}}}(V,B,M,D,H,R,W,J,0),{snaps:Q,snapsAligned:Y}=function(e,t,n,r,i){let{startEdge:o,endEdge:a}=e,{groupSlides:u}=i,l=u(r).map(e=>g(e)[a]-e[0][o]).map(f).map(t.measure),c=r.map(e=>n[o]-e[o]).map(e=>-f(e)),s=u(c).map(e=>e[0]).map((e,t)=>e+l[t]);return{snaps:c,snapsAligned:s}}(V,q,H,R,K),ee=-g(Q)+g(U),{snapsContained:et,scrollContainLimit:en}=function(e,t,n,r,i){let o=w(-t+e,0),a=n.map((e,t)=>{let{min:r,max:i}=o,a=o.constrain(e),u=t===h(n);return t?u||1>f(r-a)?r:1>f(i-a)?i:a:i}).map(e=>parseFloat(e.toFixed(3))),u=function(){let e=a[0],t=g(a);return w(a.lastIndexOf(e),a.indexOf(t)+1)}();return{snapsContained:function(){if(t<=e+2)return[o.max];if("keepSnaps"===r)return a;let{min:n,max:i}=u;return a.slice(n,i)}(),scrollContainLimit:u}}(B,ee,Y,T,0),er=G?et:Y,{limit:ei}=function(e,t,n){let r=t[0];return{limit:w(n?r-e:g(t),r)}}(ee,er,D),eo=function e(t,n,r){let{constrain:i}=w(0,t),o=t+1,a=u(n);function u(e){return r?f((o+e)%o):i(e)}function l(){return e(t,a,r)}let c={get:function(){return a},set:function(e){return a=u(e),c},add:function(e){return l().set(a+e)},clone:l};return c}(h(er),z,D),ea=eo.clone(),eu=m(n),el=({dragHandler:e,eventHandler:t,scrollBody:n,scrollBounds:r,scrollLooper:i,slideLooper:o,translate:a,location:u,animation:l,options:{loop:c}})=>{c||r.constrain(e.pointerDown()),n.seek();let s=n.settled(),d=!r.shouldConstrain(),f=c?s:s&&d;f&&!e.pointerDown()&&(l.stop(),t.emit("settle")),f||t.emit("scroll"),c&&(i.loop(n.direction()),o.loop()),a.to(u.get())},ec=function(e,t,n){let r=x(),i=1e3/60,o=null,a=0,u=0;function l(e){if(!a)return;o||(o=e);let r=e-o;for(o=e,u+=r;u>=i;)n(),u-=i;a&&t.requestAnimationFrame(l)}function c(){t.cancelAnimationFrame(a),o=null,u=0,a=0}return{init:function(){r.add(e,"visibilitychange",()=>{e.hidden&&(o=null,u=0)})},destroy:function(){c(),r.clear()},start:function(){a||(a=t.requestAnimationFrame(l))},stop:c,update:n}}(r,i,()=>el(ew)),es=er[eo.get()],ed=S(es),ef=S(es),ep=function(e,t,n,r){let i=0,o=0,a=n,u=.68,l=e.get(),c=0;function s(e){return a=e,m}function d(e){return u=e,m}let m={direction:function(){return o},duration:function(){return a},velocity:function(){return i},seek:function(){let n=t.get()-e.get(),r=0;return a?(i+=n/a,i*=u,l+=i,e.add(i),r=l-c):(i=0,e.set(t),r=n),o=p(r),c=l,m},settled:function(){return .001>f(t.get()-e.get())},useBaseFriction:function(){return d(.68)},useBaseDuration:function(){return s(n)},useFriction:d,useDuration:s};return m}(ed,ef,I,0),em=function(e,t,n,r,i){let{reachedAny:o,removeOffset:a,constrain:u}=r;function l(e){return e.concat().sort((e,t)=>f(e)-f(t))[0]}function c(t,r){let i=[t,t+n,t-n];if(!e)return t;if(!r)return l(i);let o=i.filter(e=>p(e)===r);return o.length?l(o):g(i)-n}return{byDistance:function(n,r){let l=i.get()+n,{index:s,distance:d}=function(n){let r=e?a(n):u(n),{index:i}=t.map((e,t)=>({diff:c(e-r,0),index:t})).sort((e,t)=>f(e.diff)-f(t.diff))[0];return{index:i,distance:r}}(l),p=!e&&o(l);if(!r||p)return{index:s,distance:n};let m=n+c(t[s]-d,0);return{index:s,distance:m}},byIndex:function(e,n){let r=c(t[e]-i.get(),n);return{index:e,distance:r}},shortcut:c}}(D,er,ee,ei,ef),eg=function(e,t,n,r,i,o){function a(r){let a=r.distance,u=r.index!==t.get();i.add(a),a&&e.start(),u&&(n.set(t.get()),t.set(r.index),o.emit("select"))}return{distance:function(e,t){a(r.byDistance(e,t))},index:function(e,n){let i=t.clone().set(e);a(r.byIndex(i.get(),n))}}}(ec,eo,ea,em,ef,a),eh=function(e){let{max:t,length:n}=e;return{get:function(e){return n?-((e-t)/n):0}}}(ei),ev=x(),eb=function(e,t,n,r){let i;let o={},a=null,u=null,l=!1;return{init:function(){i=new IntersectionObserver(e=>{l||(e.forEach(e=>{o[t.indexOf(e.target)]=e}),a=null,u=null,n.emit("slidesInView"))},{root:e.parentElement,threshold:r}),t.forEach(e=>i.observe(e))},destroy:function(){i&&i.disconnect(),l=!0},get:function(e=!0){if(e&&a)return a;if(!e&&u)return u;let t=b(o).reduce((t,n)=>{let r=parseInt(n),{isIntersecting:i}=o[r];return(e&&i||!e&&!i)&&t.push(r),t},[]);return e&&(a=t),e||(u=t),t}}}(t,n,a,A),{slideRegistry:ey}=function(e,t,n,r,i,o){let{groupSlides:a}=i,{min:u,max:l}=r;return{slideRegistry:function(){let r=a(o);return 1===n.length?[o]:e&&"keepSnaps"!==t?r.slice(u,l).map((e,t,n)=>{let r=t===h(n);return t?r?v(h(o)-g(n)[0]+1,g(n)[0]):e:v(g(n[0])+1)}):r}()}}(G,T,er,en,K,eu),ex=function(e,t,n,r,i,o,a){let u=0;function c(e){"Tab"===e.code&&(u=new Date().getTime())}function s(c){o.add(c,"focus",()=>{if(new Date().getTime()-u>10)return;e.scrollLeft=0;let o=t.indexOf(c),s=n.findIndex(e=>e.includes(o));l(s)&&(i.useDuration(0),r.index(s,0),a.emit("slideFocus"))},{passive:!0,capture:!0})}return{init:function(){o.add(document,"keydown",c,!1),t.forEach(s)}}}(e,n,ey,eg,ep,ev,a),ew={ownerDocument:r,ownerWindow:i,eventHandler:a,containerRect:H,slideRects:R,animation:ec,axis:V,dragHandler:function(e,t,n,r,i,o,a,u,l,c,d,m,g,h,v,b,S,k,j){let{cross:C,direction:E}=e,z=["INPUT","SELECT","TEXTAREA"],D={passive:!1},I=x(),L=x(),O=w(50,225).constrain(h.measure(20)),A={mouse:300,touch:400},M={mouse:500,touch:600},N=v?43:25,T=!1,_=0,F=0,$=!1,P=!1,H=!1,R=!1;function V(e){if(!y(e,r)&&e.touches.length>=2)return B(e);let t=o.readPoint(e),n=o.readPoint(e,C),a=f(t-_),l=f(n-F);if(!P&&!R&&(!e.cancelable||!(P=a>l)))return B(e);let s=o.pointerMove(e);a>b&&(H=!0),c.useFriction(.3).useDuration(.75),u.start(),i.add(E(s)),e.preventDefault()}function B(e){let t=d.byDistance(0,!1).index!==m.get(),n=o.pointerUp(e)*(v?M:A)[R?"mouse":"touch"],r=function(e,t){let n=m.add(-1*p(e)),r=d.byDistance(e,!v).distance;return v||f(e)<O?r:S&&t?.5*r:d.byIndex(n.get(),0).distance}(E(n),t),i=function(e,t){var n,r;if(0===e||0===t||f(e)<=f(t))return 0;let i=(n=f(e),r=f(t),f(n-r));return f(i/e)}(n,r);P=!1,$=!1,L.clear(),c.useDuration(N-10*i).useFriction(.68+i/50),l.distance(r,!v),R=!1,g.emit("pointerUp")}function Z(e){H&&(e.stopPropagation(),e.preventDefault(),H=!1)}return{init:function(e){j&&I.add(t,"dragstart",e=>e.preventDefault(),D).add(t,"touchmove",()=>void 0,D).add(t,"touchend",()=>void 0).add(t,"touchstart",u).add(t,"mousedown",u).add(t,"touchcancel",B).add(t,"contextmenu",B).add(t,"click",Z,!0);function u(u){(s(j)||j(e,u))&&function(e){let u=y(e,r);R=u,H=v&&u&&!e.buttons&&T,T=f(i.get()-a.get())>=2,u&&0!==e.button||function(e){let t=e.nodeName||"";return z.includes(t)}(e.target)||($=!0,o.pointerDown(e),c.useFriction(0).useDuration(0),i.set(a),function(){let e=R?n:t;L.add(e,"touchmove",V,D).add(e,"touchend",B).add(e,"mousemove",V,D).add(e,"mouseup",B)}(),_=o.readPoint(e),F=o.readPoint(e,C),g.emit("pointerDown"))}(u)}},destroy:function(){I.clear(),L.clear()},pointerDown:function(){return $}}}(V,e,r,i,ef,function(e,t){let n,r;function i(e){return e.timeStamp}function o(n,r){let i=r||e.scroll,o=`client${"x"===i?"X":"Y"}`;return(y(n,t)?n:n.touches[0])[o]}return{pointerDown:function(e){return n=e,r=e,o(e)},pointerMove:function(e){let t=o(e)-o(r),a=i(e)-i(n)>170;return r=e,a&&(n=e),t},pointerUp:function(e){if(!n||!r)return 0;let t=o(r)-o(n),a=i(e)-i(n),u=i(e)-i(r)>170,l=t/a;return a&&!u&&f(l)>.1?l:0},readPoint:o}}(V,i),ed,ec,eg,ep,em,eo,a,Z,L,O,N,0,$),eventStore:ev,percentOfView:Z,index:eo,indexPrevious:ea,limit:ei,location:ed,options:o,resizeHandler:function(e,t,n,r,i,o,a){let u,l;let c=[],d=!1;function p(e){return i.measureSize(a.measure(e))}return{init:function(i){o&&(l=p(e),c=r.map(p),u=new ResizeObserver(a=>{!d&&(s(o)||o(i,a))&&function(o){for(let a of o){let o=a.target===e,u=r.indexOf(a.target),s=o?l:c[u];if(f(p(o?e:r[u])-s)>=.5){n.requestAnimationFrame(()=>{i.reInit(),t.emit("resize")});break}}}(a)}),[e].concat(r).forEach(e=>u.observe(e)))},destroy:function(){u&&u.disconnect(),d=!0}}}(t,a,i,n,V,_,P),scrollBody:ep,scrollBounds:function(e,t,n,r,i){let o=i.measure(10),a=i.measure(50),u=w(.1,.99),l=!1;function c(){return!!(!l&&e.reachedAny(n.get())&&e.reachedAny(t.get()))}return{shouldConstrain:c,constrain:function(i){if(!c())return;let l=e.reachedMin(t.get())?"min":"max",s=f(e[l]-t.get()),d=n.get()-t.get(),p=u.constrain(s/a);n.subtract(d*p),!i&&f(d)<o&&(n.set(e.constrain(n.get())),r.useDuration(25).useBaseFriction())},toggleActive:function(e){l=!e}}}(ei,ed,ef,ep,Z),scrollLooper:function(e,t,n,r){let{reachedMin:i,reachedMax:o}=w(t.min+.1,t.max+.1);return{loop:function(t){if(!(1===t?o(n.get()):-1===t&&i(n.get())))return;let a=-1*t*e;r.forEach(e=>e.add(a))}}}(ee,ei,ed,[ed,ef]),scrollProgress:eh,scrollSnapList:er.map(eh.get),scrollSnaps:er,scrollTarget:em,scrollTo:eg,slideLooper:function(e,t,n,r,i,o,a,u,l){let c=m(i),s=p(f(m(i).reverse(),a[0]),n,!1).concat(p(f(c,t-a[0]-1),-n,!0));function d(e,t){return e.reduce((e,t)=>e-i[t],t)}function f(e,t){return e.reduce((e,n)=>d(e,t)>0?e.concat([n]):e,[])}function p(i,a,c){let s=o.map((e,n)=>({start:e-r[n]+.5+a,end:e+t-.5+a}));return i.map(t=>{let r=c?0:-n,i=c?n:0,o=s[t][c?"end":"start"];return{index:t,loopPoint:o,slideLocation:S(-1),translate:k(e,l[t]),target:()=>u.get()>o?r:i}})}return{canLoop:function(){return s.every(({index:e})=>.1>=d(c.filter(t=>t!==e),t))},clear:function(){s.forEach(e=>e.translate.clear())},loop:function(){s.forEach(e=>{let{target:t,translate:n,slideLocation:r}=e,i=t();i!==r.get()&&(n.to(i),r.set(i))})},loopPoints:s}}(V,B,ee,X,U,Q,er,ed,n),slideFocus:ex,slidesHandler:(d=!1,{init:function(e){F&&(u=new MutationObserver(t=>{!d&&(s(F)||F(e,t))&&function(t){for(let n of t)if("childList"===n.type){e.reInit(),a.emit("slidesChanged");break}}(t)})).observe(t,{childList:!0})},destroy:function(){u&&u.disconnect(),d=!0}}),slidesInView:eb,slideIndexes:eu,slideRegistry:ey,slidesToScroll:K,target:ef,translate:k(V,t)};return ew}(e,o,a,E,z,n,O);return n.loop&&!r.slideLooper.canLoop()?t(Object.assign({},n,{loop:!1})):r}(H),N([P,...R.map(({options:e})=>e)]).forEach(e=>L.add(e,"change",B)),H.active&&(r.translate.to(r.location.get()),r.animation.init(),r.slidesInView.init(),r.slideFocus.init(),r.eventHandler.init(X),r.resizeHandler.init(X),r.slidesHandler.init(X),r.options.loop&&r.slideLooper.loop(),o.offsetParent&&a.length&&r.dragHandler.init(X),i=I.init(X,R)))}function B(e,t){let n=G();Z(),V(A({startIndex:n},e),t),O.emit("reInit")}function Z(){r.dragHandler.destroy(),r.eventStore.clear(),r.translate.clear(),r.slideLooper.clear(),r.resizeHandler.destroy(),r.slidesHandler.destroy(),r.slidesInView.destroy(),r.animation.destroy(),I.destroy(),L.clear()}function q(e,t,n){H.active&&!$&&(r.scrollBody.useBaseFriction().useDuration(!0===t?0:H.duration),r.scrollTo.index(e,n||0))}function G(){return r.index.get()}let X={canScrollNext:function(){return r.index.add(1).get()!==G()},canScrollPrev:function(){return r.index.add(-1).get()!==G()},containerNode:function(){return o},internalEngine:function(){return r},destroy:function(){$||($=!0,L.clear(),Z(),O.emit("destroy"),O.clear())},off:_,on:T,emit:F,plugins:function(){return i},previousScrollSnap:function(){return r.indexPrevious.get()},reInit:B,rootNode:function(){return e},scrollNext:function(e){q(r.index.add(1).get(),e,-1)},scrollPrev:function(e){q(r.index.add(-1).get(),e,1)},scrollProgress:function(){return r.scrollProgress.get(r.location.get())},scrollSnapList:function(){return r.scrollSnapList},scrollTo:q,selectedScrollSnap:G,slideNodes:function(){return a},slidesInView:function(){return r.slidesInView.get()},slidesNotInView:function(){return r.slidesInView.get(!1)}};return V(t,n),setTimeout(()=>O.emit("init"),0),X}function E(e={},t=[]){let n=(0,i.useRef)(e),r=(0,i.useRef)(t),[o,l]=(0,i.useState)(),[c,s]=(0,i.useState)(),d=(0,i.useCallback)(()=>{o&&o.reInit(n.current,r.current)},[o]);return(0,i.useEffect)(()=>{if("undefined"!=typeof window&&window.document&&window.document.createElement&&c){C.globalOptions=E.globalOptions;let e=C(c,n.current,r.current);return l(e),()=>e.destroy()}l(void 0)},[c,l]),(0,i.useEffect)(()=>{a(n.current,e)||(n.current=e,d())},[e,d]),(0,i.useEffect)(()=>{!function(e,t){if(e.length!==t.length)return!1;let n=u(e),r=u(t);return n.every((e,t)=>a(e,r[t]))}(r.current,t)&&(r.current=t,d())},[t,d]),[s,o]}C.globalOptions=void 0,E.globalOptions=void 0;var z=n(3637),D=n(8565),I=n(9429),L=n(9535),O=n(987),A=n(6976),M=n(3491),N=n(9088),T=n(1166),_=n(8278);function F({style:e,size:t=16,...n}){return(0,r.jsx)("svg",{viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{...e,width:(0,D.h)(t),height:(0,D.h)(t),display:"block"},...n,children:(0,r.jsx)("path",{d:"M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}F.displayName="@mantine/core/AccordionChevron";var $=n(9375);let[P,H]=(0,n(6197).R)("Carousel component was not found in tree");var R={root:"m_17884d0f",viewport:"m_a2dae653",container:"m_fcd81474",controls:"m_39bc3463",control:"m_64f58e10",indicators:"m_71ea3ab1",indicator:"m_eae68602",slide:"m_d98df724"};let V={},B=(0,L.d)((e,t)=>{let{classNames:n,className:i,style:o,styles:a,vars:u,mod:l,...c}=(0,O.w)("CarouselSlide",V,e),s=H();return(0,r.jsx)(_.x,{ref:t,mod:[{orientation:s.orientation},l],...s.getStyles("slide",{className:i,style:o,classNames:n,styles:a}),...c})});B.classes=R,B.displayName="@mantine/carousel/CarouselSlide";var Z=n(5984),q=n(3181),G=n(7370),X=n(3877),U=n(2812),W=n(954);function J({slideGap:e,slideSize:t,selector:n}){let i=(0,Z.rZ)(),o=(0,q.L)({"--carousel-slide-gap":(0,I.bG)((0,G.v)(e)),"--carousel-slide-size":(0,D.h)((0,G.v)(t))}),a=(0,X.X)(i.breakpoints).reduce((n,r)=>(n[r]||(n[r]={}),"object"==typeof e&&void 0!==e[r]&&(n[r]["--carousel-slide-gap"]=(0,I.bG)(e[r])),"object"==typeof t&&void 0!==t[r]&&(n[r]["--carousel-slide-size"]=(0,I.bG)(t[r])),n),{}),u=(0,U.I)((0,X.X)(a),i).filter(e=>(0,X.X)(a[e.value]).length>0).map(e=>({query:`(min-width: ${i.breakpoints[e.value]})`,styles:a[e.value]}));return(0,r.jsx)(W.f,{styles:o,media:u,selector:n})}function K({dir:e,orientation:t,direction:n}){return"previous"===n?"horizontal"===t?90*("ltr"===e?1:-1):-180:"horizontal"===t?90*("ltr"===e?-1:1):0}let Q={controlSize:26,controlsOffset:"sm",slideSize:"100%",slideGap:0,orientation:"horizontal",align:"center",slidesToScroll:1,includeGapInSize:!0,draggable:!0,dragFree:!1,loop:!1,speed:10,initialSlide:0,inViewThreshold:0,withControls:!0,withIndicators:!1,skipSnaps:!1,containScroll:"",withKeyboardEvents:!0},Y=(0,z.Z)((e,{height:t,controlSize:n,controlsOffset:r})=>({root:{"--carousel-height":(0,D.h)(t),"--carousel-control-size":(0,D.h)(n),"--carousel-controls-offset":(0,I.bG)(r)}})),ee=(0,L.d)((e,t)=>{let n=(0,O.w)("Carousel",Q,e),{classNames:o,className:a,style:u,styles:l,unstyled:c,vars:s,children:d,getEmblaApi:f,onNextSlide:p,onPreviousSlide:m,onSlideChange:g,nextControlProps:h,previousControlProps:v,controlSize:b,controlsOffset:y,slideSize:x,slideGap:w,orientation:S,height:k,align:j,slidesToScroll:C,includeGapInSize:z,draggable:D,dragFree:I,loop:L,speed:H,initialSlide:V,inViewThreshold:B,withControls:Z,withIndicators:q,plugins:G,nextControlIcon:X,previousControlIcon:U,skipSnaps:W,containScroll:ee,withKeyboardEvents:et,mod:en,...er}=n,ei=(0,A.y)({name:"Carousel",classes:R,props:n,className:a,style:u,classNames:o,styles:l,unstyled:c,vars:s,varsResolver:Y}),eo=(0,M.m)(),{dir:ea}=(0,N.gm)(),[eu,el]=E({axis:"horizontal"===S?"x":"y",direction:"horizontal"===S?ea:void 0,startIndex:V,loop:L,align:j,slidesToScroll:C,draggable:D,dragFree:I,speed:H,inViewThreshold:B,skipSnaps:W,containScroll:ee},G),[ec,es]=(0,i.useState)(0),[ed,ef]=(0,i.useState)(0),ep=(0,i.useCallback)(e=>el&&el.scrollTo(e),[el]),em=(0,i.useCallback)(()=>{if(!el)return;let e=el.selectedScrollSnap();es(e),e!==ec&&g?.(e)},[el,es,g,ec]),eg=(0,i.useCallback)(()=>{el?.scrollPrev(),m?.()},[el]),eh=(0,i.useCallback)(()=>{el?.scrollNext(),p?.()},[el]),ev=(0,i.useCallback)(e=>{et&&("ArrowRight"===e.key&&(e.preventDefault(),eh()),"ArrowLeft"===e.key&&(e.preventDefault(),eg()))},[el]);(0,i.useEffect)(()=>{if(el)return f?.(el),em(),ef(el.scrollSnapList().length),el.on("select",em),()=>{el.off("select",em)}},[el,C,em]),(0,i.useEffect)(()=>{el&&(el.reInit(),ef(el.scrollSnapList().length),es(e=>(0,$.u)(e,0,i.Children.toArray(d).length-1)))},[i.Children.toArray(d).length,C]);let eb=el?.canScrollPrev()||!1,ey=el?.canScrollNext()||!1,ex=Array(ed).fill(0).map((e,t)=>(0,i.createElement)(T.k,{...ei("indicator"),key:t,"data-active":t===ec||void 0,"aria-hidden":!0,tabIndex:-1,onClick:()=>ep(t),"data-orientation":S}));return(0,r.jsxs)(P,{value:{getStyles:ei,orientation:S},children:[(0,r.jsx)(J,{...n,selector:`.${eo}`}),(0,r.jsxs)(_.x,{ref:t,...ei("root",{className:eo}),...er,mod:[{orientation:S,"include-gap-in-size":z},en],onKeyDownCapture:ev,children:[(0,r.jsx)("div",{...ei("viewport"),ref:eu,children:(0,r.jsx)("div",{...ei("container"),"data-orientation":S,children:d})}),q&&(0,r.jsx)("div",{...ei("indicators"),"data-orientation":S,children:ex}),Z&&(0,r.jsxs)("div",{...ei("controls"),"data-orientation":S,children:[(0,r.jsx)(T.k,{...v,...ei("control",{className:v?.className,style:v?.style}),onClick:e=>{eg(),v?.onClick?.(e)},"data-inactive":!eb||void 0,tabIndex:eb?0:-1,children:void 0!==U?U:(0,r.jsx)(F,{style:{transform:`rotate(${K({dir:ea,orientation:S,direction:"previous"})}deg)`}})}),(0,r.jsx)(T.k,{...ei("control",{className:h?.className,style:h?.style}),...h,onClick:e=>{eh(),h?.onClick?.(e)},"data-inactive":!ey||void 0,tabIndex:ey?0:-1,children:void 0!==X?X:(0,r.jsx)(F,{style:{transform:`rotate(${K({dir:ea,orientation:S,direction:"next"})}deg)`}})})]})]})]})});ee.classes=R,ee.displayName="@mantine/carousel/Carousel",ee.Slide=B},4710:function(e,t,n){n.d(t,{C:function(){return m}});var r=n(5893);n(7294);var i=n(9429),o=n(3637),a=n(2979),u=n(987),l=n(6976),c=n(8278),s=n(3362),d={root:"m_347db0ec","root--dot":"m_fbd81e3d",label:"m_5add502a",section:"m_91fdda9b"};let f={},p=(0,o.Z)((e,{radius:t,color:n,gradient:r,variant:o,size:u,autoContrast:l})=>{let c=e.variantColorResolver({color:n||e.primaryColor,theme:e,gradient:r,variant:o||"filled",autoContrast:l});return{root:{"--badge-height":(0,i.ap)(u,"badge-height"),"--badge-padding-x":(0,i.ap)(u,"badge-padding-x"),"--badge-fz":(0,i.ap)(u,"badge-fz"),"--badge-radius":void 0===t?void 0:(0,i.H5)(t),"--badge-bg":n||o?c.background:void 0,"--badge-color":n||o?c.color:void 0,"--badge-bd":n||o?c.border:void 0,"--badge-dot-color":"dot"===o?(0,a.p)(n,e):void 0}}}),m=(0,s.b)((e,t)=>{let n=(0,u.w)("Badge",f,e),{classNames:i,className:o,style:a,styles:s,unstyled:m,vars:g,radius:h,color:v,gradient:b,leftSection:y,rightSection:x,children:w,variant:S,fullWidth:k,autoContrast:j,circle:C,mod:E,...z}=n,D=(0,l.y)({name:"Badge",props:n,classes:d,className:o,style:a,classNames:i,styles:s,unstyled:m,vars:g,varsResolver:p});return(0,r.jsxs)(c.x,{variant:S,mod:[{block:k,circle:C},E],...D("root",{variant:S}),ref:t,...z,children:[y&&(0,r.jsx)("span",{...D("section"),"data-position":"left",children:y}),(0,r.jsx)("span",{...D("label"),children:w}),x&&(0,r.jsx)("span",{...D("section"),"data-position":"right",children:x})]})});m.classes=d,m.displayName="@mantine/core/Badge"},576:function(e,t,n){n.d(t,{i:function(){return m}});var r=n(5893);n(7294);var i=n(9429),o=n(3637),a=n(2979),u=n(987),l=n(6976),c=n(8278),s=n(9535),d={root:"m_3eebeb36",label:"m_9e365f20"};let f={orientation:"horizontal"},p=(0,o.Z)((e,{color:t,variant:n,size:r})=>({root:{"--divider-color":t?(0,a.p)(t,e):void 0,"--divider-border-style":n,"--divider-size":(0,i.ap)(r,"divider-size")}})),m=(0,s.d)((e,t)=>{let n=(0,u.w)("Divider",f,e),{classNames:i,className:o,style:a,styles:s,unstyled:m,vars:g,color:h,orientation:v,label:b,labelPosition:y,mod:x,...w}=n,S=(0,l.y)({name:"Divider",classes:d,props:n,className:o,style:a,classNames:i,styles:s,unstyled:m,vars:g,varsResolver:p});return(0,r.jsx)(c.x,{ref:t,mod:[{orientation:v,"with-label":!!b},x],...S("root"),...w,role:"separator",children:b&&(0,r.jsx)(c.x,{component:"span",mod:{position:y},...S("label"),children:b})})});m.classes=d,m.displayName="@mantine/core/Divider"},8008:function(e,t,n){n.d(t,{D:function(){return m}});var r=n(5893);n(7294);var i=n(3637),o=n(987),a=n(6976),u=n(8278),l=n(9535),c=n(8565);let s=["h1","h2","h3","h4","h5","h6"];var d={root:"m_8a5d1357"};let f={order:1},p=(0,i.Z)((e,{order:t,size:n,lineClamp:r,textWrap:i})=>{let o=function(e,t){let n=void 0!==t?t:`h${e}`;return s.includes(n)?{fontSize:`var(--mantine-${n}-font-size)`,fontWeight:`var(--mantine-${n}-font-weight)`,lineHeight:`var(--mantine-${n}-line-height)`}:{fontSize:(0,c.h)(n),fontWeight:`var(--mantine-h${e}-font-weight)`,lineHeight:`var(--mantine-h${e}-line-height)`}}(t,n);return{root:{"--title-fw":o.fontWeight,"--title-lh":o.lineHeight,"--title-fz":o.fontSize,"--title-line-clamp":"number"==typeof r?r.toString():void 0,"--title-text-wrap":i}}}),m=(0,l.d)((e,t)=>{let n=(0,o.w)("Title",f,e),{classNames:i,className:l,style:c,styles:s,unstyled:m,order:g,vars:h,size:v,variant:b,lineClamp:y,textWrap:x,mod:w,...S}=n,k=(0,a.y)({name:"Title",props:n,classes:d,className:l,style:c,classNames:i,styles:s,unstyled:m,vars:h,varsResolver:p});return[1,2,3,4,5,6].includes(g)?(0,r.jsx)(u.x,{...k("root"),component:`h${g}`,variant:b,ref:t,mod:[{order:g,"data-line-clamp":"number"==typeof y},w],size:v,...S}):null});m.classes=d,m.displayName="@mantine/core/Title"},7370:function(e,t,n){n.d(t,{v:function(){return r}});function r(e){return"object"==typeof e&&null!==e?"base"in e?e.base:void 0:e}},9375:function(e,t,n){n.d(t,{u:function(){return r}});function r(e,t,n){return void 0===t&&void 0===n?e:void 0!==t&&void 0===n?Math.max(e,t):void 0===t&&void 0!==n?Math.min(e,n):Math.min(Math.max(e,t),n)}},3621:function(e,t,n){n.d(t,{Z:function(){return r}});/**
 * @license @tabler/icons-react v3.10.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var r=(0,n(9068).Z)("outline","arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])}}]);
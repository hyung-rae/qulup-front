(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[423],{6232:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/service",function(){return r(2777)}])},8864:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return o},noSSR:function(){return a}});let l=r(8754);r(5893),r(7294);let i=l._(r(6016));function n(e){return{default:(null==e?void 0:e.default)||e}}function a(e,t){return delete t.webpack,delete t.modules,e(t)}function o(e,t){let r=i.default,l={loading:e=>{let{error:t,isLoading:r,pastDelay:l}=e;return null}};e instanceof Promise?l.loader=()=>e:"function"==typeof e?l.loader=e:"object"==typeof e&&(l={...l,...e});let o=(l={...l,...t}).loader;return(l.loadableGenerated&&(l={...l,...l.loadableGenerated},delete l.loadableGenerated),"boolean"!=typeof l.ssr||l.ssr)?r({...l,loader:()=>null!=o?o().then(n):Promise.resolve(n(()=>null))}):(delete l.webpack,delete l.modules,a(r,l))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},572:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LoadableContext",{enumerable:!0,get:function(){return l}});let l=r(8754)._(r(7294)).default.createContext(null)},6016:function(e,t,r){"use strict";/**
@copyright (c) 2017-present James Kyle <me@thejameskyle.com>
 MIT License
 Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:
 The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
*/Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return h}});let l=r(8754)._(r(7294)),i=r(572),n=[],a=[],o=!1;function d(e){let t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then(e=>(r.loading=!1,r.loaded=e,e)).catch(e=>{throw r.loading=!1,r.error=e,e}),r}class s{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...e},this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function c(e){return function(e,t){let r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),n=null;function d(){if(!n){let t=new s(e,r);n={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return n.promise()}if(!o){let e=r.webpack?r.webpack():r.modules;e&&a.push(t=>{for(let r of e)if(t.includes(r))return d()})}function c(e,t){!function(){d();let e=l.default.useContext(i.LoadableContext);e&&Array.isArray(r.modules)&&r.modules.forEach(t=>{e(t)})}();let a=l.default.useSyncExternalStore(n.subscribe,n.getCurrentValue,n.getCurrentValue);return l.default.useImperativeHandle(t,()=>({retry:n.retry}),[]),l.default.useMemo(()=>{var t;return a.loading||a.error?l.default.createElement(r.loading,{isLoading:a.loading,pastDelay:a.pastDelay,timedOut:a.timedOut,error:a.error,retry:n.retry}):a.loaded?l.default.createElement((t=a.loaded)&&t.default?t.default:t,e):null},[e,a])}return c.preload=()=>d(),c.displayName="LoadableComponent",l.default.forwardRef(c)}(d,e)}function u(e,t){let r=[];for(;e.length;){let l=e.pop();r.push(l(t))}return Promise.all(r).then(()=>{if(e.length)return u(e,t)})}c.preloadAll=()=>new Promise((e,t)=>{u(n).then(e,t)}),c.preloadReady=e=>(void 0===e&&(e=[]),new Promise(t=>{let r=()=>(o=!0,t());u(a,e).then(r,r)})),window.__NEXT_PRELOADREADY=c.preloadReady;let h=c},2777:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Z}});var l=r(5893),i=r(7294),n=r(5152),a=r.n(n),o=r(2977),d=r.n(o),s=r(9704),c=r(9753),u=r(5429),h=r(4410),p=r(8278),f=r(8207),m=r(356),x=r(6414),_=r(8590),b=r(987),j=r(9535),y=r(6141),g=r(6645);let w={multiple:!1},v=(0,i.forwardRef)((e,t)=>{let{onChange:r,children:n,multiple:a,accept:o,name:d,form:s,resetRef:c,disabled:u,capture:h,inputProps:p,...f}=(0,b.w)("FileButton",w,e),m=(0,i.useRef)();return(0,g.kR)(c,()=>{m.current.value=""}),(0,l.jsxs)(l.Fragment,{children:[n({onClick:()=>{u||m.current?.click()},...f}),(0,l.jsx)("input",{style:{display:"none"},type:"file",accept:o,multiple:a,onChange:e=>{a?r(Array.from(e.currentTarget.files)):r(e.currentTarget.files[0]||null)},ref:(0,g.Yx)(t,m),name:d,form:s,capture:h,...p})]})});v.displayName="@mantine/core/FileButton";var T=r(2195),C=r(9938);let k={valueComponent:({value:e})=>(0,l.jsx)("div",{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:Array.isArray(e)?e.map(e=>e.name).join(", "):e?.name})},S=(0,j.d)((e,t)=>{let r=(0,b.w)("FileInput",k,e),{unstyled:n,vars:a,onChange:o,value:d,defaultValue:s,multiple:c,accept:u,name:h,form:p,valueComponent:f,clearable:m,clearButtonProps:x,readOnly:j,capture:g,fileInputProps:w,rightSection:S,size:A,placeholder:F,...O}=r,P=(0,i.useRef)(null),[R,N]=(0,_.C)({value:d,defaultValue:s,onChange:o,finalValue:c?[]:null}),E=Array.isArray(R)?0!==R.length:null!==R,Q=S||(m&&E&&!j?(0,l.jsx)(y.P,{...x,variant:"subtle",onClick:()=>N(c?[]:null),size:A,unstyled:n}):null);return(0,i.useEffect)(()=>{(Array.isArray(R)&&0===R.length||null===R)&&P.current?.()},[R]),(0,l.jsx)(v,{onChange:N,multiple:c,accept:u,name:h,form:p,resetRef:P,disabled:j,capture:g,inputProps:w,children:e=>(0,l.jsx)(C.M,{component:"button",ref:t,rightSection:Q,...e,...O,__staticSelector:"FileInput",multiline:!0,type:"button",pointer:!0,__stylesApiProps:r,unstyled:n,size:A,children:E?(0,l.jsx)(f,{value:R}):(0,l.jsx)(T.I.Placeholder,{children:F})})})});S.classes=C.M.classes,S.displayName="@mantine/core/FileInput";var A=r(4920),F=r(3078),O=r(4124),P=r(8095),R=r(8634),N=r(7113);let E=[{id:1,title:"FAQ 제목1",created_at:"2024-01-01"},{id:2,title:"FAQ 제목2",created_at:"2024-01-01"},{id:3,title:"FAQ 제목3",created_at:"2024-01-01"},{id:4,title:"FAQ 제목4",created_at:"2024-01-01"},{id:5,title:"FAQ 제목5",created_at:"2024-01-01"},{id:6,title:"FAQ 제목6",created_at:"2024-01-01"},{id:7,title:"FAQ 제목7",created_at:"2024-01-01"},{id:8,title:"FAQ 제목8",created_at:"2024-01-01"},{id:9,title:"FAQ 제목9",created_at:"2024-01-01"},{id:10,title:"FAQ 제목10",created_at:"2024-01-01"},{id:11,title:"FAQ 제목11",created_at:"2024-01-01"},{id:12,title:"FAQ 제목12",created_at:"2024-01-01"}],Q=[{id:1,title:"1:1문의 제목1",state:"done",created_at:"2024-01-01"},{id:2,title:"1:1문의 제목2",state:"wait",created_at:"2024-01-01"},{id:3,title:"1:1문의 제목3",state:"done",created_at:"2024-01-01"},{id:4,title:"1:1문의 제목4",state:"wait",created_at:"2024-01-01"},{id:5,title:"1:1문의 제목5",state:"done",created_at:"2024-01-01"},{id:6,title:"1:1문의 제목6",state:"wait",created_at:"2024-01-01"},{id:7,title:"1:1문의 제목7",state:"wait",created_at:"2024-01-01"},{id:8,title:"1:1문의 제목8",state:"wait",created_at:"2024-01-01"},{id:9,title:"1:1문의 제목9",state:"wait",created_at:"2024-01-01"},{id:10,title:"1:1문의 제목10",state:"wait",created_at:"2024-01-01"}];var q=r(1714);r(3913);let B=a()(()=>Promise.all([r.e(222),r.e(911),r.e(509),r.e(706),r.e(378),r.e(277)]).then(r.bind(r,1277)),{loadableGenerated:{webpack:()=>[1277]},ssr:!1}),M=[{title:"FAQ",value:"faq",icon:null},{title:"1:1문의",value:"inquiry",icon:null}];var Z=e=>{let{props:t}=e,[r,n]=(0,i.useState)("faq"),[a,{open:o,close:_}]=(0,N.q)(!1),[b,{open:j,close:y}]=(0,N.q)(!1),[g,w]=(0,i.useState)("타이틀"),[v,T]=(0,i.useState)(""),[C,k]=(0,i.useState)(""),Z=e=>{console.log("faq row: ",e),w(e.title),o()},D=e=>{console.log("inquiry row: ",e),w(e.title),o()},H=E.map(e=>(0,l.jsxs)(s.i.Tr,{className:d().tr,onClick:()=>Z(e),children:[(0,l.jsx)(s.i.Td,{align:"center",children:e.id}),(0,l.jsx)(s.i.Td,{align:"center",children:e.title}),(0,l.jsx)(s.i.Td,{children:e.created_at})]},"faq_".concat(e.id))),I=Q.map(e=>(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(s.i.Tr,{className:d().tr,onClick:()=>D(e),children:[(0,l.jsx)(s.i.Td,{align:"center",children:e.id}),(0,l.jsx)(s.i.Td,{align:"center",children:e.title}),(0,l.jsx)(s.i.Td,{align:"center",children:e.state}),(0,l.jsx)(s.i.Td,{children:e.created_at})]},"inquiry_".concat(e.id))}));return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c.u,{opened:a,onClose:_,closeOnClickOutside:!1,title:g,centered:!0,size:"xl",children:(0,l.jsxs)(u.k,{direction:"column",children:[(0,l.jsxs)(u.k,{justify:"space-between",bd:"1px solid dark.4",p:10,style:{borderRadius:4},mb:10,children:[(0,l.jsx)(h.x,{children:"첨부파일: "}),(0,l.jsx)(h.x,{children:"작성일: 2024-07-18"})]}),(0,l.jsxs)(u.k,{direction:"column",children:[(0,l.jsx)(h.x,{fw:600,children:"Question."}),(0,l.jsxs)(p.x,{w:"100%",h:"300px",p:10,bg:"dark.4",style:{borderRadius:4,border:"1px solid #555"},children:[(0,l.jsx)("p",{children:"14번 문제가 이해가 잘 안갑니다."}),(0,l.jsx)("p",{children:"어떻게하면 수학 고수가 되나요?"}),(0,l.jsx)("p",{children:"퀄럽처럼 되고싶어요"})]}),(0,l.jsx)(h.x,{fw:600,mt:20,children:"Answer."}),(0,l.jsx)(p.x,{w:"100%",h:"300px",p:10,style:{borderRadius:4,border:"1px solid #555"},children:(0,l.jsx)("p",{children:"하하 열심히 해보세요"})})]})]})}),(0,l.jsx)(c.u,{opened:b,onClose:y,closeOnClickOutside:!1,title:"문의하기",centered:!0,size:"xl",children:(0,l.jsxs)(f.K,{children:[(0,l.jsxs)(m.Z,{children:[(0,l.jsx)(x.o,{w:"100%",label:"제목",placeholder:"글 제목을 입력해주세요"}),(0,l.jsx)(S,{w:"100%",label:"파일 업로드",placeholder:"클릭하여 파일을 업로드",multiple:!0})]}),(0,l.jsx)(p.x,{children:(0,l.jsx)(B,{setEditorHtml:T})}),(0,l.jsxs)(m.Z,{w:"100%",justify:"center",children:[(0,l.jsx)(A.z,{w:"240px",onClick:()=>{console.log("editorHtml: ",v)},children:"글쓰기"}),(0,l.jsx)(A.z,{w:"240px",onClick:()=>{confirm("작성했던 데이터가 모두 사라집니다. 취소하시겠습니까?")&&(T(""),y())},children:"취소하기"})]})]})}),(0,l.jsx)(F.W,{bg:"gray.3",fluid:!0,p:"xl",mih:"100vh",children:(0,l.jsxs)(u.k,{direction:"column",w:1200,m:"auto",gap:20,children:[(0,l.jsx)(R.Z,{contents:M,defaultValue:"faq",setTabValue:n,style:{padding:"20px 0"}}),(0,l.jsxs)(s.i.ScrollContainer,{minWidth:800,children:[(0,l.jsxs)(u.k,{justify:"end",w:"100%",gap:10,mb:20,children:["inquiry"===r&&(0,l.jsx)(A.z,{onClick:j,children:"글쓰기"}),(0,l.jsx)(x.o,{value:C,placeholder:"검색어를 입력해주세요",onChange:e=>k(e.target.value),rightSection:(0,l.jsx)(q.Z,{width:16,height:16,onClick:()=>{console.log("검색: ".concat(C))},cursor:"pointer"})})]}),(0,l.jsx)(O.X,{m:"auto",shadow:"xs",withBorder:!0,p:"xl",children:(0,l.jsxs)(s.i,{verticalSpacing:"xs",children:[(0,l.jsx)(s.i.Thead,{children:(0,l.jsxs)(s.i.Tr,{children:[(0,l.jsx)(s.i.Th,{style:{textAlign:"center"},width:50,children:"No."}),(0,l.jsx)(s.i.Th,{style:{textAlign:"center"},children:"제목"}),"inquiry"===r&&(0,l.jsx)(s.i.Th,{width:100,style:{textAlign:"center"},children:"답변 상태"}),(0,l.jsx)(s.i.Th,{style:{textAlign:"center"},width:100,children:"작성일"})]})}),(0,l.jsx)(s.i.Tbody,{children:"faq"===r?H:I})]})})]}),(0,l.jsx)(u.k,{w:"100%",mt:20,justify:"center",children:(0,l.jsx)(P.t,{total:10,color:"dark.3"})})]})})]})}},3913:function(e,t,r){"use strict";r(5893)},2977:function(e){e.exports={tr:"Service_tr__1_h_Q",td:"Service_td__ZnzjZ",th:"Service_th__e6m8s"}},5152:function(e,t,r){e.exports=r(8864)},9704:function(e,t,r){"use strict";r.d(t,{i:function(){return O}});var l=r(5893),i=r(8565);r(7294);var n=r(9429),a=r(3637),o=r(2979),d=r(987),s=r(6976),c=r(8278),u=r(9535);let[h,p]=(0,r(6197).R)("Table component was not found in the tree");var f={table:"m_b23fa0ef",th:"m_4e7aa4f3",tr:"m_4e7aa4fd",td:"m_4e7aa4ef",tbody:"m_b2404537",thead:"m_b242d975",caption:"m_9e5a3ac7",scrollContainer:"m_a100c15",scrollContainerInner:"m_62259741"};function m(e,t){let r=`Table${e.charAt(0).toUpperCase()}${e.slice(1)}`,i=(0,u.d)((i,n)=>{let a=(0,d.w)(r,{},i),{classNames:o,className:s,style:u,styles:h,...f}=a,m=p();return(0,l.jsx)(c.x,{component:e,ref:n,...function(e,t){if(!t)return;let r={};return t.columnBorder&&e.withColumnBorders&&(r["data-with-column-border"]=!0),t.rowBorder&&e.withRowBorders&&(r["data-with-row-border"]=!0),t.striped&&e.striped&&(r["data-striped"]=e.striped),t.highlightOnHover&&e.highlightOnHover&&(r["data-hover"]=!0),t.captionSide&&e.captionSide&&(r["data-side"]=e.captionSide),t.stickyHeader&&e.stickyHeader&&(r["data-sticky"]=!0),r}(m,t),...m.getStyles(e,{className:s,classNames:o,style:u,styles:h,props:a}),...f})});return i.displayName=`@mantine/core/${r}`,i.classes=f,i}let x=m("th",{columnBorder:!0}),_=m("td",{columnBorder:!0}),b=m("tr",{rowBorder:!0,striped:!0,highlightOnHover:!0}),j=m("thead",{stickyHeader:!0}),y=m("tbody"),g=m("tfoot"),w=m("caption",{captionSide:!0});function v({data:e}){return(0,l.jsxs)(l.Fragment,{children:[e.caption&&(0,l.jsx)(w,{children:e.caption}),e.head&&(0,l.jsx)(j,{children:(0,l.jsx)(b,{children:e.head.map((e,t)=>(0,l.jsx)(x,{children:e},t))})}),e.body&&(0,l.jsx)(y,{children:e.body.map((e,t)=>(0,l.jsx)(b,{children:e.map((e,t)=>(0,l.jsx)(_,{children:e},t))},t))}),e.foot&&(0,l.jsx)(g,{children:(0,l.jsx)(b,{children:e.foot.map((e,t)=>(0,l.jsx)(x,{children:e},t))})})]})}v.displayName="@mantine/core/TableDataRenderer";var T=r(6721);let C={type:"scrollarea"},k=(0,a.Z)((e,{minWidth:t,type:r})=>({scrollContainer:{"--table-min-width":(0,i.h)(t),"--table-overflow":"native"===r?"auto":void 0}})),S=(0,u.d)((e,t)=>{let r=(0,d.w)("TableScrollContainer",C,e),{classNames:i,className:n,style:a,styles:o,unstyled:u,vars:h,children:p,minWidth:m,type:x,..._}=r,b=(0,s.y)({name:"TableScrollContainer",classes:f,props:r,className:n,style:a,classNames:i,styles:o,unstyled:u,vars:h,varsResolver:k,rootSelector:"scrollContainer"});return(0,l.jsx)(c.x,{component:"scrollarea"===x?T.x:"div",..."scrollarea"===x?{offsetScrollbars:"x"}:{},ref:t,...b("scrollContainer"),..._,children:(0,l.jsx)("div",{...b("scrollContainerInner"),children:p})})});S.classes=f,S.displayName="@mantine/core/TableScrollContainer";let A={withRowBorders:!0,verticalSpacing:7},F=(0,a.Z)((e,{layout:t,captionSide:r,horizontalSpacing:l,verticalSpacing:a,borderColor:d,stripedColor:s,highlightOnHoverColor:c,striped:u,highlightOnHover:h,stickyHeaderOffset:p,stickyHeader:f})=>({table:{"--table-layout":t,"--table-caption-side":r,"--table-horizontal-spacing":(0,n.bG)(l),"--table-vertical-spacing":(0,n.bG)(a),"--table-border-color":d?(0,o.p)(d,e):void 0,"--table-striped-color":u&&s?(0,o.p)(s,e):void 0,"--table-highlight-on-hover-color":h&&c?(0,o.p)(c,e):void 0,"--table-sticky-header-offset":f?(0,i.h)(p):void 0}})),O=(0,u.d)((e,t)=>{let r=(0,d.w)("Table",A,e),{classNames:i,className:n,style:a,styles:o,unstyled:u,vars:p,horizontalSpacing:m,verticalSpacing:x,captionSide:_,stripedColor:b,highlightOnHoverColor:j,striped:y,highlightOnHover:g,withColumnBorders:w,withRowBorders:T,withTableBorder:C,borderColor:k,layout:S,variant:O,data:P,children:R,stickyHeader:N,stickyHeaderOffset:E,mod:Q,...q}=r,B=(0,s.y)({name:"Table",props:r,className:n,style:a,classes:f,classNames:i,styles:o,unstyled:u,rootSelector:"table",vars:p,varsResolver:F});return(0,l.jsx)(h,{value:{getStyles:B,stickyHeader:N,striped:!0===y?"odd":y||void 0,highlightOnHover:g,withColumnBorders:w,withRowBorders:T,captionSide:_||"bottom"},children:(0,l.jsx)(c.x,{component:"table",variant:O,ref:t,mod:[{"data-with-table-border":C},Q],...B("table"),...q,children:R||!!P&&(0,l.jsx)(v,{data:P})})})});O.classes=f,O.displayName="@mantine/core/Table",O.Td=_,O.Th=x,O.Tr=b,O.Thead=j,O.Tbody=y,O.Tfoot=g,O.Caption=w,O.ScrollContainer=S,O.DataRenderer=v},1714:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});/**
 * @license @tabler/icons-react v3.10.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var l=(0,r(9068).Z)("outline","search","IconSearch",[["path",{d:"M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0",key:"svg-0"}],["path",{d:"M21 21l-6 -6",key:"svg-1"}]])}},function(e){e.O(0,[95,888,774,179],function(){return e(e.s=6232)}),_N_E=e.O()}]);
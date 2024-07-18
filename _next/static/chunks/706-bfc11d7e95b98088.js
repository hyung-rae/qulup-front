"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[706],{5746:function(e,o,t){t.d(o,{J:function(){return Y}});var n=t(5893),r=t(7294),i=t(2191);let a=["mousedown","touchstart"];var s=t(7045),l=t(9429),d=t(3637),p=t(987),c=t(6976),u=t(9088),f=t(1127);let[g,w]=(0,t(6197).R)("Popover component was not found in the tree");var m=t(6745),v=t(6645),h=t(8565);let y=()=>{};var x=t(8278),b=t(9535),P=t(167),j=t(4685),C=t(4202),R=t(427),D={dropdown:"m_38a85659",arrow:"m_a31dc6c1"};let k={},S=(0,b.d)((e,o)=>{let t=(0,p.w)("PopoverDropdown",k,e),{className:r,style:i,vars:a,children:s,onKeyDownCapture:l,variant:d,classNames:c,styles:u,...f}=t,g=w(),b=(0,m.u)({opened:g.opened,shouldReturnFocus:g.returnFocus}),D=g.withRoles?{"aria-labelledby":g.getTargetId(),id:g.getDropdownId(),role:"dialog",tabIndex:-1}:{},S=(0,v.Yx)(o,g.floating);return g.disabled?null:(0,n.jsx)(C.q,{...g.portalProps,withinPortal:g.withinPortal,children:(0,n.jsx)(R.u,{mounted:g.opened,...g.transitionProps,transition:g.transitionProps?.transition||"fade",duration:g.transitionProps?.duration??150,keepMounted:g.keepMounted,exitDuration:"number"==typeof g.transitionProps?.exitDuration?g.transitionProps.exitDuration:g.transitionProps?.duration,children:e=>(0,n.jsx)(j.i,{active:g.trapFocus,innerRef:S,children:(0,n.jsxs)(x.x,{...D,...f,variant:d,onKeyDownCapture:function(e,o={active:!0}){return"function"==typeof e&&o.active?t=>{"Escape"===t.key&&(e(t),o.onTrigger?.())}:o.onKeyDown||y}(g.onClose,{active:g.closeOnEscape,onTrigger:b,onKeyDown:l}),"data-position":g.placement,"data-fixed":"fixed"===g.floatingStrategy||void 0,...g.getStyles("dropdown",{className:r,props:t,classNames:c,styles:u,style:[{...e,zIndex:g.zIndex,top:g.y??0,left:g.x??0,width:"target"===g.width?void 0:(0,h.h)(g.width)},i]}),children:[s,(0,n.jsx)(P.Y,{ref:g.arrowRef,arrowX:g.arrowX,arrowY:g.arrowY,visible:g.withArrow,position:g.placement,arrowSize:g.arrowSize,arrowRadius:g.arrowRadius,arrowOffset:g.arrowOffset,arrowPosition:g.arrowPosition,...g.getStyles("arrow",{props:t,classNames:c,styles:u})})]})})})})});S.classes=D,S.displayName="@mantine/core/PopoverDropdown";var T=t(512),O=t(7997);let E={refProp:"ref",popupType:"dialog"},N=(0,b.d)((e,o)=>{let{children:t,refProp:n,popupType:i,...a}=(0,p.w)("PopoverTarget",E,e);if(!(0,O.k)(t))throw Error("Popover.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported");let s=w(),l=(0,v.Yx)(s.reference,t.ref,o),d=s.withRoles?{"aria-haspopup":i,"aria-expanded":s.opened,"aria-controls":s.getDropdownId(),id:s.getTargetId()}:{};return(0,r.cloneElement)(t,{...a,...d,...s.targetProps,className:(0,T.Z)(s.targetProps.className,a.className,t.props.className),[n]:l,...s.controlled?null:{onClick:s.onToggle}})});N.displayName="@mantine/core/PopoverTarget";var F=t(1371),G=t(6504),I=t(8590),_=t(700),z=t(8580);let $={position:"bottom",offset:8,positionDependencies:[],transitionProps:{transition:"fade",duration:150},middlewares:{flip:!0,shift:!0,inline:!1},arrowSize:7,arrowOffset:5,arrowRadius:0,arrowPosition:"side",closeOnClickOutside:!0,withinPortal:!0,closeOnEscape:!0,trapFocus:!1,withRoles:!0,returnFocus:!1,clickOutsideEvents:["mousedown","touchstart"],zIndex:(0,s.w)("popover"),__staticSelector:"Popover",width:"max-content"},X=(0,d.Z)((e,{radius:o,shadow:t})=>({dropdown:{"--popover-radius":void 0===o?void 0:(0,l.H5)(o),"--popover-shadow":(0,l.Xj)(t)}}));function Y(e){let o=(0,p.w)("Popover",$,e),{children:t,position:s,offset:l,onPositionChange:d,positionDependencies:w,opened:m,transitionProps:v,width:h,middlewares:y,withArrow:x,arrowSize:b,arrowOffset:P,arrowRadius:j,arrowPosition:C,unstyled:R,classNames:k,styles:S,closeOnClickOutside:T,withinPortal:O,portalProps:E,closeOnEscape:N,clickOutsideEvents:Y,trapFocus:L,onClose:A,onOpen:M,onChange:q,zIndex:H,radius:K,shadow:Z,id:Q,defaultOpened:V,__staticSelector:J,withRoles:W,disabled:B,returnFocus:U,variant:ee,keepMounted:eo,vars:et,floatingStrategy:en,...er}=o,ei=(0,c.y)({name:J,props:o,classes:D,classNames:k,styles:S,unstyled:R,rootSelector:"dropdown",vars:et,varsResolver:X}),ea=(0,r.useRef)(null),[es,el]=(0,r.useState)(null),[ed,ep]=(0,r.useState)(null),{dir:ec}=(0,u.gm)(),eu=(0,i.M)(Q),ef=function(e){let[o,t]=(0,I.C)({value:e.opened,defaultValue:e.defaultOpened,finalValue:!1,onChange:e.onChange}),n=(0,G.YF)({strategy:e.strategy,placement:e.position,middleware:function(e,o){let t=function(e){if(void 0===e)return{shift:!0,flip:!0};let o={...e};return void 0===e.shift&&(o.shift=!0),void 0===e.flip&&(o.flip=!0),o}(e.middlewares),n=[(0,F.cv)(e.offset)];return t.shift&&n.push((0,F.uY)("boolean"==typeof t.shift?{limiter:(0,F.dr)(),padding:5}:{limiter:(0,F.dr)(),padding:5,...t.shift})),t.flip&&n.push("boolean"==typeof t.flip?(0,F.RR)():(0,F.RR)(t.flip)),t.inline&&n.push("boolean"==typeof t.inline?(0,F.Qo)():(0,F.Qo)(t.inline)),n.push((0,F.x7)({element:e.arrowRef,padding:e.arrowOffset})),(t.size||"target"===e.width)&&n.push((0,F.dp)({..."boolean"==typeof t.size?{}:t.size,apply({rects:n,availableWidth:r,availableHeight:i}){let a=o(),s=a.refs.floating.current?.style??{};t.size&&Object.assign(s,{maxWidth:`${r}px`,maxHeight:`${i}px`}),"target"===e.width&&Object.assign(s,{width:`${n.reference.width}px`})}})),n}(e,()=>n)});return(0,z.L)({opened:e.opened,position:e.position,positionDependencies:e.positionDependencies||[],floating:n}),(0,_.l)(()=>{e.onPositionChange?.(n.placement)},[n.placement]),(0,_.l)(()=>{e.opened?e.onOpen?.():e.onClose?.()},[e.opened]),{floating:n,controlled:"boolean"==typeof e.opened,opened:o,onClose:()=>{o&&(e.onClose?.(),t(!1))},onToggle:()=>{o?(e.onClose?.(),t(!1)):(e.onOpen?.(),t(!0))}}}({middlewares:y,width:h,position:(0,f._)(ec,s),offset:"number"==typeof l?l+(x?b/2:0):l,arrowRef:ea,arrowOffset:P,onPositionChange:d,positionDependencies:w,opened:m,defaultOpened:V,onChange:q,onOpen:M,onClose:A,strategy:en});!function(e,o,t){let n=(0,r.useRef)();(0,r.useEffect)(()=>{let r=o=>{let{target:r}=o??{};if(Array.isArray(t)){let n=r?.hasAttribute("data-ignore-outside-clicks")||!document.body.contains(r)&&"HTML"!==r.tagName;t.every(e=>!!e&&!o.composedPath().includes(e))&&!n&&e()}else n.current&&!n.current.contains(r)&&e()};return(o||a).forEach(e=>document.addEventListener(e,r)),()=>{(o||a).forEach(e=>document.removeEventListener(e,r))}},[n,e,t])}(()=>T&&ef.onClose(),Y,[es,ed]);let eg=(0,r.useCallback)(e=>{el(e),ef.floating.refs.setReference(e)},[ef.floating.refs.setReference]),ew=(0,r.useCallback)(e=>{ep(e),ef.floating.refs.setFloating(e)},[ef.floating.refs.setFloating]);return(0,n.jsx)(g,{value:{returnFocus:U,disabled:B,controlled:ef.controlled,reference:eg,floating:ew,x:ef.floating.x,y:ef.floating.y,arrowX:ef.floating?.middlewareData?.arrow?.x,arrowY:ef.floating?.middlewareData?.arrow?.y,opened:ef.opened,arrowRef:ea,transitionProps:v,width:h,withArrow:x,arrowSize:b,arrowOffset:P,arrowRadius:j,arrowPosition:C,placement:ef.floating.placement,trapFocus:L,withinPortal:O,portalProps:E,zIndex:H,radius:K,shadow:Z,closeOnEscape:N,onClose:ef.onClose,onToggle:ef.onToggle,getTargetId:()=>`${eu}-target`,getDropdownId:()=>`${eu}-dropdown`,withRoles:W,targetProps:er,__staticSelector:J,classNames:k,styles:S,unstyled:R,variant:ee,keepMounted:eo,getStyles:ei,floatingStrategy:en},children:t})}Y.Target=N,Y.Dropdown=S,Y.displayName="@mantine/core/Popover",Y.extend=e=>e},158:function(e,o,t){t.d(o,{M:function(){return P}});var n=t(5893);t(7294);var r=t(987),i=t(6976),a=t(3491),s=t(8278),l=t(9535),d=t(3877),p=t(5541),c=t(3181),u=t(9429),f=t(2812),g=t(7370),w=t(5984),m=t(954);function v({spacing:e,verticalSpacing:o,cols:t,selector:r}){let i=(0,w.rZ)(),a=void 0===o?e:o,s=(0,c.L)({"--sg-spacing-x":(0,u.bG)((0,g.v)(e)),"--sg-spacing-y":(0,u.bG)((0,g.v)(a)),"--sg-cols":g.v(t)?.toString()}),l=(0,d.X)(i.breakpoints).reduce((o,n)=>(o[n]||(o[n]={}),"object"==typeof e&&void 0!==e[n]&&(o[n]["--sg-spacing-x"]=(0,u.bG)(e[n])),"object"==typeof a&&void 0!==a[n]&&(o[n]["--sg-spacing-y"]=(0,u.bG)(a[n])),"object"==typeof t&&void 0!==t[n]&&(o[n]["--sg-cols"]=t[n]),o),{}),p=(0,f.I)((0,d.X)(l),i).filter(e=>(0,d.X)(l[e.value]).length>0).map(e=>({query:`(min-width: ${i.breakpoints[e.value]})`,styles:l[e.value]}));return(0,n.jsx)(m.f,{styles:s,media:p,selector:r})}function h(e){return"object"==typeof e&&null!==e?(0,d.X)(e):[]}function y({spacing:e,verticalSpacing:o,cols:t,selector:r}){let i=void 0===o?e:o,a=(0,c.L)({"--sg-spacing-x":(0,u.bG)((0,g.v)(e)),"--sg-spacing-y":(0,u.bG)((0,g.v)(i)),"--sg-cols":g.v(t)?.toString()}),s=function({spacing:e,verticalSpacing:o,cols:t}){return Array.from(new Set([...h(e),...h(o),...h(t)])).sort((e,o)=>(0,p.px)(e)-(0,p.px)(o))}({spacing:e,verticalSpacing:o,cols:t}),l=s.reduce((o,n)=>(o[n]||(o[n]={}),"object"==typeof e&&void 0!==e[n]&&(o[n]["--sg-spacing-x"]=(0,u.bG)(e[n])),"object"==typeof i&&void 0!==i[n]&&(o[n]["--sg-spacing-y"]=(0,u.bG)(i[n])),"object"==typeof t&&void 0!==t[n]&&(o[n]["--sg-cols"]=t[n]),o),{}),d=s.map(e=>({query:`simple-grid (min-width: ${e})`,styles:l[e]}));return(0,n.jsx)(m.f,{styles:a,container:d,selector:r})}var x={container:"m_925c2d2c",root:"m_2415a157"};let b={cols:1,spacing:"md",type:"media"},P=(0,l.d)((e,o)=>{let t=(0,r.w)("SimpleGrid",b,e),{classNames:l,className:d,style:p,styles:c,unstyled:u,vars:f,cols:g,verticalSpacing:w,spacing:m,type:h,...P}=t,j=(0,i.y)({name:"SimpleGrid",classes:x,props:t,className:d,style:p,classNames:l,styles:c,unstyled:u,vars:f}),C=(0,a.m)();return"container"===h?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(y,{...t,selector:`.${C}`}),(0,n.jsx)("div",{...j("container"),children:(0,n.jsx)(s.x,{ref:o,...j("root",{className:C}),...P})})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(v,{...t,selector:`.${C}`}),(0,n.jsx)(s.x,{ref:o,...j("root",{className:C}),...P})]})});P.classes=x,P.displayName="@mantine/core/SimpleGrid"},7370:function(e,o,t){t.d(o,{v:function(){return n}});function n(e){return"object"==typeof e&&null!==e?"base"in e?e.base:void 0:e}}}]);
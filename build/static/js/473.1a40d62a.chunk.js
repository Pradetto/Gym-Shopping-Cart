"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[473],{7473:function(e,n,t){t.d(n,{XZ:function(){return V}});var a=t(7762),i=t(5987),o=(t(4942),t(1413)),r=(t(3433),t(9439)),c=t(2791),l=t(2680),u=t(8215),d=(t(7200),t(1367)),s=t(7406),f=t(1856),v=t(2965),h=t(321),p=t(8104),m=t(4391),k=t(1507),y={border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},b=(0,d.m$)("span",{baseStyle:y});b.displayName="VisuallyHidden",(0,d.m$)("input",{baseStyle:y}).displayName="VisuallyHiddenInput";var g=!1,C=null,w=!1,Z=new Set,E="undefined"!==typeof window&&null!=window.navigator&&/^Mac/.test(window.navigator.platform);function x(e,n){Z.forEach((function(t){return t(e,n)}))}function I(e){w=!0,function(e){return!(e.metaKey||!E&&e.altKey||e.ctrlKey)}(e)&&(C="keyboard",x("keyboard",e))}function D(e){C="pointer","mousedown"!==e.type&&"pointerdown"!==e.type||(w=!0,x("pointer",e))}function L(e){e.target!==window&&e.target!==document&&(w||(C="keyboard",x("keyboard",e)),w=!1)}function S(){w=!1}function M(){return"pointer"!==C}function P(e){!function(){if("undefined"!==typeof window&&!g){var e=HTMLElement.prototype.focus;HTMLElement.prototype.focus=function(){w=!0;for(var n=arguments.length,t=new Array(n),a=0;a<n;a++)t[a]=arguments[a];e.apply(this,t)},document.addEventListener("keydown",I,!0),document.addEventListener("keyup",I,!0),window.addEventListener("focus",L,!0),window.addEventListener("blur",S,!1),"undefined"!==typeof PointerEvent?(document.addEventListener("pointerdown",D,!0),document.addEventListener("pointermove",D,!0),document.addEventListener("pointerup",D,!0)):(document.addEventListener("mousedown",D,!0),document.addEventListener("mousemove",D,!0),document.addEventListener("mouseup",D,!0)),g=!0}}(),e(M());var n=function(){return e(M())};return Z.add(n),function(){Z.delete(n)}}var _=["isIndeterminate","isChecked"],B=["defaultChecked","isChecked","isFocusable","onChange","isIndeterminate","name","value","tabIndex","aria-label","aria-labelledby","aria-invalid"],N=["spacing","className","children","iconColor","iconSize","icon","isChecked","isDisabled","onChange","inputProps"],A=(0,l.k)({name:"CheckboxGroupContext",strict:!1}),R=(0,r.Z)(A,2),F=(R[0],R[1]),K=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.filter(Boolean).join(" ")};var W=function(e){return e?"":void 0};function q(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return function(e){n.some((function(n){return null==n||n(e),null==e?void 0:e.defaultPrevented}))}}var $=(0,d.m$)(s.E.svg);function j(e){return c.createElement($,(0,o.Z)({width:"1.2em",viewBox:"0 0 12 10",variants:{unchecked:{opacity:0,strokeDashoffset:16},checked:{opacity:1,strokeDashoffset:0,transition:{duration:.2}}},style:{fill:"none",strokeWidth:2,stroke:"currentColor",strokeDasharray:16}},e),c.createElement("polyline",{points:"1.5 6 4.5 9 10.5 1"}))}function G(e){return c.createElement($,(0,o.Z)({width:"1.2em",viewBox:"0 0 24 24",variants:{unchecked:{scaleX:.65,opacity:0},checked:{scaleX:1,opacity:1,transition:{scaleX:{duration:0},opacity:{duration:.02}}}},style:{stroke:"currentColor",strokeWidth:4}},e),c.createElement("line",{x1:"21",x2:"3",y1:"12",y2:"12"}))}function H(e){var n=e.open,t=e.children;return c.createElement(f.M,{initial:!1},n&&c.createElement(s.E.div,{variants:{unchecked:{scale:.5},checked:{scale:1}},initial:"unchecked",animate:"checked",exit:"unchecked",style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%"}},t))}function O(e){var n=e.isIndeterminate,t=e.isChecked,a=(0,i.Z)(e,_),r=n?G:j;return c.createElement(H,{open:t||n},c.createElement(r,(0,o.Z)({},a)))}function T(e){var n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],i=Object.assign({},e),o=(0,a.Z)(t);try{for(o.s();!(n=o.n()).done;){var r=n.value;r in i&&delete i[r]}}catch(c){o.e(c)}finally{o.f()}return i}function U(e){e.preventDefault(),e.stopPropagation()}var X={display:"inline-flex",alignItems:"center",justifyContent:"center",verticalAlign:"top",userSelect:"none",flexShrink:0},z={cursor:"pointer",display:"inline-flex",alignItems:"center",verticalAlign:"top",position:"relative"},V=(0,d.Gp)((function(e,n){var t=F(),a=(0,o.Z)((0,o.Z)({},t),e),l=(0,d.jC)("Checkbox",a),s=(0,v.Lr)(e),f=s.spacing,b=void 0===f?"0.5rem":f,g=s.className,C=s.children,w=s.iconColor,Z=s.iconSize,E=s.icon,x=void 0===E?c.createElement(O,null):E,I=s.isChecked,D=s.isDisabled,L=void 0===D?null==t?void 0:t.isDisabled:D,S=s.onChange,M=s.inputProps,_=(0,i.Z)(s,N),A=I;(null==t?void 0:t.value)&&s.value&&(A=t.value.includes(s.value));var R=S;(null==t?void 0:t.onChange)&&s.value&&(R=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return function(e){n.forEach((function(n){null==n||n(e)}))}}(t.onChange,S));var $=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=(0,h.Kn)(e),t=n.isDisabled,a=n.isReadOnly,l=n.isRequired,d=n.isInvalid,s=n.id,f=n.onBlur,v=n.onFocus,b=n["aria-describedby"],g=e.defaultChecked,C=e.isChecked,w=e.isFocusable,Z=e.onChange,E=e.isIndeterminate,x=e.name,I=e.value,D=e.tabIndex,L=void 0===D?void 0:D,S=e["aria-label"],M=e["aria-labelledby"],_=e["aria-invalid"],N=T((0,i.Z)(e,B),["isDisabled","isReadOnly","isRequired","isInvalid","id","onBlur","onFocus","aria-describedby"]),A=(0,u.W)(Z),R=(0,u.W)(f),F=(0,u.W)(v),K=(0,c.useState)(!1),$=(0,r.Z)(K,2),j=$[0],G=$[1],H=(0,c.useState)(!1),O=(0,r.Z)(H,2),X=O[0],z=O[1],V=(0,c.useState)(!1),J=(0,r.Z)(V,2),Q=J[0],Y=J[1],ee=(0,c.useState)(!1),ne=(0,r.Z)(ee,2),te=ne[0],ae=ne[1];(0,c.useEffect)((function(){return P(G)}),[]);var ie=(0,c.useRef)(null),oe=(0,c.useState)(!0),re=(0,r.Z)(oe,2),ce=re[0],le=re[1],ue=(0,c.useState)(!!g),de=(0,r.Z)(ue,2),se=de[0],fe=de[1],ve=void 0!==C,he=ve?C:se,pe=(0,c.useCallback)((function(e){a||t?e.preventDefault():(ve||fe(he?e.target.checked:!!E||e.target.checked),null==A||A(e))}),[a,t,he,ve,E,A]);(0,p.G)((function(){ie.current&&(ie.current.indeterminate=Boolean(E))}),[E]),(0,m.r)((function(){t&&z(!1)}),[t,z]),(0,p.G)((function(){var e=ie.current;(null==e?void 0:e.form)&&(e.form.onreset=function(){fe(!!g)})}),[]);var me=t&&!w,ke=(0,c.useCallback)((function(e){" "===e.key&&ae(!0)}),[ae]),ye=(0,c.useCallback)((function(e){" "===e.key&&ae(!1)}),[ae]);(0,p.G)((function(){ie.current&&ie.current.checked!==he&&fe(ie.current.checked)}),[ie.current]);var be=(0,c.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=function(e){X&&e.preventDefault(),ae(!0)};return(0,o.Z)((0,o.Z)({},e),{},{ref:n,"data-active":W(te),"data-hover":W(Q),"data-checked":W(he),"data-focus":W(X),"data-focus-visible":W(X&&j),"data-indeterminate":W(E),"data-disabled":W(t),"data-invalid":W(d),"data-readonly":W(a),"aria-hidden":!0,onMouseDown:q(e.onMouseDown,i),onMouseUp:q(e.onMouseUp,(function(){return ae(!1)})),onMouseEnter:q(e.onMouseEnter,(function(){return Y(!0)})),onMouseLeave:q(e.onMouseLeave,(function(){return Y(!1)}))})}),[te,he,t,X,j,Q,E,d,a]),ge=(0,c.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,o.Z)((0,o.Z)((0,o.Z)({},N),e),{},{ref:(0,k.lq)(n,(function(e){e&&le("LABEL"===e.tagName)})),onClick:q(e.onClick,(function(){var e;ce||(null==(e=ie.current)||e.click(),requestAnimationFrame((function(){var e;null==(e=ie.current)||e.focus()})))})),"data-disabled":W(t),"data-checked":W(he),"data-invalid":W(d)})}),[N,t,he,d,ce]),Ce=(0,c.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,o.Z)((0,o.Z)({},e),{},{ref:(0,k.lq)(ie,n),type:"checkbox",name:x,value:I,id:s,tabIndex:L,onChange:q(e.onChange,pe),onBlur:q(e.onBlur,R,(function(){return z(!1)})),onFocus:q(e.onFocus,F,(function(){return z(!0)})),onKeyDown:q(e.onKeyDown,ke),onKeyUp:q(e.onKeyUp,ye),required:l,checked:he,disabled:me,readOnly:a,"aria-label":S,"aria-labelledby":M,"aria-invalid":_?Boolean(_):d,"aria-describedby":b,"aria-disabled":t,style:y})}),[x,I,s,pe,R,F,ke,ye,l,he,me,a,S,M,_,d,b,t,L]),we=(0,c.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,o.Z)((0,o.Z)({},e),{},{ref:n,onMouseDown:q(e.onMouseDown,U),onTouchStart:q(e.onTouchStart,U),"data-disabled":W(t),"data-checked":W(he),"data-invalid":W(d)})}),[he,t,d]);return{state:{isInvalid:d,isFocused:X,isChecked:he,isActive:te,isHovered:Q,isIndeterminate:E,isDisabled:t,isReadOnly:a,isRequired:l},getRootProps:ge,getCheckboxProps:be,getInputProps:Ce,getLabelProps:we,htmlProps:N}}((0,o.Z)((0,o.Z)({},_),{},{isDisabled:L,isChecked:A,onChange:R})),j=$.state,G=$.getInputProps,H=$.getCheckboxProps,V=$.getLabelProps,J=$.getRootProps,Q=(0,c.useMemo)((function(){return(0,o.Z)({opacity:j.isChecked||j.isIndeterminate?1:0,transform:j.isChecked||j.isIndeterminate?"scale(1)":"scale(0.95)",fontSize:Z,color:w},l.icon)}),[w,Z,j.isChecked,j.isIndeterminate,l.icon]),Y=(0,c.cloneElement)(x,{__css:Q,isIndeterminate:j.isIndeterminate,isChecked:j.isChecked});return c.createElement(d.m$.label,(0,o.Z)({__css:(0,o.Z)((0,o.Z)({},z),l.container),className:K("chakra-checkbox",g)},J()),c.createElement("input",(0,o.Z)({className:"chakra-checkbox__input"},G(M,n))),c.createElement(d.m$.span,(0,o.Z)({__css:(0,o.Z)((0,o.Z)({},X),l.control),className:"chakra-checkbox__control"},H()),Y),C&&c.createElement(d.m$.span,(0,o.Z)((0,o.Z)({className:"chakra-checkbox__label"},V()),{},{__css:(0,o.Z)({marginStart:b},l.label)}),C))}));V.displayName="Checkbox"},7200:function(e,n,t){t.d(n,{T:function(){return r}});var a=t(9439),i=t(2791),o=t(8215);function r(e){var n=e.value,t=e.defaultValue,r=e.onChange,c=e.shouldUpdate,l=void 0===c?function(e,n){return e!==n}:c,u=(0,o.W)(r),d=(0,o.W)(l),s=(0,i.useState)(t),f=(0,a.Z)(s,2),v=f[0],h=f[1],p=void 0!==n,m=p?n:v,k=(0,o.W)((function(e){var n="function"===typeof e?e(m):e;d(m,n)&&(p||h(n),u(n))}),[p,u,m,d]);return[m,k]}}}]);
//# sourceMappingURL=473.1a40d62a.chunk.js.map
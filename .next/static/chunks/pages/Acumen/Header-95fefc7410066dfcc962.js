(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3213],{45258:function(e,t,n){"use strict";var o=n(22122),i=n(2949),r=n(67294),a=(n(45697),n(86010)),s=n(14670),c=n(93871),l=n(79895),d=r.forwardRef((function(e,t){var n=e.classes,s=e.className,d=e.color,u=void 0===d?"primary":d,p=e.position,f=void 0===p?"fixed":p,m=(0,i.Z)(e,["classes","className","color","position"]);return r.createElement(l.Z,(0,o.Z)({square:!0,component:"header",elevation:4,className:(0,a.Z)(n.root,n["position".concat((0,c.Z)(f))],n["color".concat((0,c.Z)(u))],s,"fixed"===f&&"mui-fixed"),ref:t},m))}));t.Z=(0,s.Z)((function(e){var t="light"===e.palette.type?e.palette.grey[100]:e.palette.grey[900];return{root:{display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",zIndex:e.zIndex.appBar,flexShrink:0},positionFixed:{position:"fixed",top:0,left:"auto",right:0,"@media print":{position:"absolute"}},positionAbsolute:{position:"absolute",top:0,left:"auto",right:0},positionSticky:{position:"sticky",top:0,left:"auto",right:0},positionStatic:{position:"static"},positionRelative:{position:"relative"},colorDefault:{backgroundColor:t,color:e.palette.getContrastText(t)},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},colorInherit:{color:"inherit"},colorTransparent:{backgroundColor:"transparent",color:"inherit"}}}),{name:"MuiAppBar"})(d)},41749:function(e,t,n){"use strict";var o=n(2949),i=n(22122),r=n(67294),a=(n(45697),n(86010)),s=n(14670),c=[0,1,2,3,4,5,6,7,8,9,10],l=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var u=r.forwardRef((function(e,t){var n=e.alignContent,s=void 0===n?"stretch":n,c=e.alignItems,l=void 0===c?"stretch":c,d=e.classes,u=e.className,p=e.component,f=void 0===p?"div":p,m=e.container,g=void 0!==m&&m,v=e.direction,x=void 0===v?"row":v,b=e.item,h=void 0!==b&&b,Z=e.justify,y=e.justifyContent,C=void 0===y?"flex-start":y,w=e.lg,j=void 0!==w&&w,S=e.md,N=void 0!==S&&S,k=e.sm,I=void 0!==k&&k,E=e.spacing,R=void 0===E?0:E,z=e.wrap,M=void 0===z?"wrap":z,F=e.xl,B=void 0!==F&&F,A=e.xs,P=void 0!==A&&A,T=e.zeroMinWidth,_=void 0!==T&&T,H=(0,o.Z)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","justifyContent","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),L=(0,a.Z)(d.root,u,g&&[d.container,0!==R&&d["spacing-xs-".concat(String(R))]],h&&d.item,_&&d.zeroMinWidth,"row"!==x&&d["direction-xs-".concat(String(x))],"wrap"!==M&&d["wrap-xs-".concat(String(M))],"stretch"!==l&&d["align-items-xs-".concat(String(l))],"stretch"!==s&&d["align-content-xs-".concat(String(s))],"flex-start"!==(Z||C)&&d["justify-content-xs-".concat(String(Z||C))],!1!==P&&d["grid-xs-".concat(String(P))],!1!==I&&d["grid-sm-".concat(String(I))],!1!==N&&d["grid-md-".concat(String(N))],!1!==j&&d["grid-lg-".concat(String(j))],!1!==B&&d["grid-xl-".concat(String(B))]);return r.createElement(f,(0,i.Z)({className:L,ref:t},H))})),p=(0,s.Z)((function(e){return(0,i.Z)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-content-xs-center":{justifyContent:"center"},"justify-content-xs-flex-end":{justifyContent:"flex-end"},"justify-content-xs-space-between":{justifyContent:"space-between"},"justify-content-xs-space-around":{justifyContent:"space-around"},"justify-content-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return c.forEach((function(o){var i=e.spacing(o);0!==i&&(n["spacing-".concat(t,"-").concat(o)]={margin:"-".concat(d(i,2)),width:"calc(100% + ".concat(d(i),")"),"& > $item":{padding:d(i,2)}})})),n}(e,"xs"),e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var o={};l.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var i="".concat(Math.round(e/12*1e8)/1e6,"%");o[t]={flexBasis:i,flexGrow:0,maxWidth:i}}else o[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else o[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?(0,i.Z)(e,o):e[t.breakpoints.up(n)]=o}(t,e,n),t}),{}))}),{name:"MuiGrid"})(u);t.Z=p},17812:function(e,t,n){"use strict";var o=n(22122),i=n(2949),r=n(67294),a=(n(45697),n(86010)),s=n(14670),c=n(59693),l=n(54720),d=n(93871),u=r.forwardRef((function(e,t){var n=e.edge,s=void 0!==n&&n,c=e.children,u=e.classes,p=e.className,f=e.color,m=void 0===f?"default":f,g=e.disabled,v=void 0!==g&&g,x=e.disableFocusRipple,b=void 0!==x&&x,h=e.size,Z=void 0===h?"medium":h,y=(0,i.Z)(e,["edge","children","classes","className","color","disabled","disableFocusRipple","size"]);return r.createElement(l.Z,(0,o.Z)({className:(0,a.Z)(u.root,p,"default"!==m&&u["color".concat((0,d.Z)(m))],v&&u.disabled,"small"===Z&&u["size".concat((0,d.Z)(Z))],{start:u.edgeStart,end:u.edgeEnd}[s]),centerRipple:!0,focusRipple:!b,disabled:v,ref:t},y),r.createElement("span",{className:u.label},c))}));t.Z=(0,s.Z)((function(e){return{root:{textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:12,borderRadius:"50%",overflow:"visible",color:e.palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{backgroundColor:(0,c.Fq)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{backgroundColor:"transparent",color:e.palette.action.disabled}},edgeStart:{marginLeft:-12,"$sizeSmall&":{marginLeft:-3}},edgeEnd:{marginRight:-12,"$sizeSmall&":{marginRight:-3}},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:(0,c.Fq)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},colorSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:(0,c.Fq)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},disabled:{},sizeSmall:{padding:3,fontSize:e.typography.pxToRem(18)},label:{width:"100%",display:"flex",alignItems:"inherit",justifyContent:"inherit"}}}),{name:"MuiIconButton"})(u)},50998:function(e,t,n){"use strict";var o=n(22122),i=n(2949),r=n(67294),a=(n(45697),n(86010)),s=n(14670),c=n(54720),l=n(83711),d=n(17294),u=n(66987),p=n(73935),f="undefined"===typeof window?r.useEffect:r.useLayoutEffect,m=r.forwardRef((function(e,t){var n=e.alignItems,s=void 0===n?"center":n,m=e.autoFocus,g=void 0!==m&&m,v=e.button,x=void 0!==v&&v,b=e.children,h=e.classes,Z=e.className,y=e.component,C=e.ContainerComponent,w=void 0===C?"li":C,j=e.ContainerProps,S=(j=void 0===j?{}:j).className,N=(0,i.Z)(j,["className"]),k=e.dense,I=void 0!==k&&k,E=e.disabled,R=void 0!==E&&E,z=e.disableGutters,M=void 0!==z&&z,F=e.divider,B=void 0!==F&&F,A=e.focusVisibleClassName,P=e.selected,T=void 0!==P&&P,_=(0,i.Z)(e,["alignItems","autoFocus","button","children","classes","className","component","ContainerComponent","ContainerProps","dense","disabled","disableGutters","divider","focusVisibleClassName","selected"]),H=r.useContext(u.Z),L={dense:I||H.dense||!1,alignItems:s},W=r.useRef(null);f((function(){g&&W.current&&W.current.focus()}),[g]);var D=r.Children.toArray(b),G=D.length&&(0,l.Z)(D[D.length-1],["ListItemSecondaryAction"]),O=r.useCallback((function(e){W.current=p.findDOMNode(e)}),[]),V=(0,d.Z)(O,t),$=(0,o.Z)({className:(0,a.Z)(h.root,Z,L.dense&&h.dense,!M&&h.gutters,B&&h.divider,R&&h.disabled,x&&h.button,"center"!==s&&h.alignItemsFlexStart,G&&h.secondaryAction,T&&h.selected),disabled:R},_),q=y||"li";return x&&($.component=y||"div",$.focusVisibleClassName=(0,a.Z)(h.focusVisible,A),q=c.Z),G?(q=$.component||y?q:"div","li"===w&&("li"===q?q="div":"li"===$.component&&($.component="div")),r.createElement(u.Z.Provider,{value:L},r.createElement(w,(0,o.Z)({className:(0,a.Z)(h.container,S),ref:V},N),r.createElement(q,$,D),D.pop()))):r.createElement(u.Z.Provider,{value:L},r.createElement(q,(0,o.Z)({ref:V},$),D))}));t.Z=(0,s.Z)((function(e){return{root:{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,"&$focusVisible":{backgroundColor:e.palette.action.selected},"&$selected, &$selected:hover":{backgroundColor:e.palette.action.selected},"&$disabled":{opacity:.5}},container:{position:"relative"},focusVisible:{},dense:{paddingTop:4,paddingBottom:4},alignItemsFlexStart:{alignItems:"flex-start"},disabled:{},divider:{borderBottom:"1px solid ".concat(e.palette.divider),backgroundClip:"padding-box"},gutters:{paddingLeft:16,paddingRight:16},button:{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},secondaryAction:{paddingRight:48},selected:{}}}),{name:"MuiListItem"})(m)},85639:function(e,t,n){"use strict";var o=n(2949),i=n(96156),r=n(22122),a=n(67294),s=(n(45697),n(86010)),c=n(14670),l=n(50998),d=a.forwardRef((function(e,t){var n,i=e.classes,c=e.className,d=e.component,u=void 0===d?"li":d,p=e.disableGutters,f=void 0!==p&&p,m=e.ListItemClasses,g=e.role,v=void 0===g?"menuitem":g,x=e.selected,b=e.tabIndex,h=(0,o.Z)(e,["classes","className","component","disableGutters","ListItemClasses","role","selected","tabIndex"]);return e.disabled||(n=void 0!==b?b:-1),a.createElement(l.Z,(0,r.Z)({button:!0,role:v,tabIndex:n,component:u,selected:x,disableGutters:f,classes:(0,r.Z)({dense:i.dense},m),className:(0,s.Z)(i.root,c,x&&i.selected,!f&&i.gutters),ref:t},h))}));t.Z=(0,c.Z)((function(e){return{root:(0,r.Z)({},e.typography.body1,(0,i.Z)({minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",width:"auto",overflow:"hidden",whiteSpace:"nowrap"},e.breakpoints.up("sm"),{minHeight:"auto"})),gutters:{},selected:{},dense:(0,r.Z)({},e.typography.body2,{minHeight:"auto"})}}),{name:"MuiMenuItem"})(d)},28358:function(e,t,n){"use strict";var o=n(22122),i=n(2949),r=n(96156),a=n(67294),s=(n(45697),n(86010)),c=n(14670),l=a.forwardRef((function(e,t){var n=e.classes,r=e.className,c=e.component,l=void 0===c?"div":c,d=e.disableGutters,u=void 0!==d&&d,p=e.variant,f=void 0===p?"regular":p,m=(0,i.Z)(e,["classes","className","component","disableGutters","variant"]);return a.createElement(l,(0,o.Z)({className:(0,s.Z)(n.root,n[f],r,!u&&n.gutters),ref:t},m))}));t.Z=(0,c.Z)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center"},gutters:(0,r.Z)({paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),regular:e.mixins.toolbar,dense:{minHeight:48}}}),{name:"MuiToolbar"})(l)},28546:function(e,t,n){"use strict";n.r(t),n.d(t,{capitalize:function(){return o.Z},createChainedFunction:function(){return i.Z},createSvgIcon:function(){return r.Z},debounce:function(){return a.Z},deprecatedPropType:function(){return s},isMuiElement:function(){return c.Z},ownerDocument:function(){return l.Z},ownerWindow:function(){return d.Z},requirePropFactory:function(){return u},setRef:function(){return p.Z},unstable_useId:function(){return x.Z},unsupportedProp:function(){return f},useControlled:function(){return m.Z},useEventCallback:function(){return g.Z},useForkRef:function(){return v.Z},useIsFocusVisible:function(){return b.Z}});var o=n(93871),i=n(82568),r=n(25209),a=n(79437);function s(e,t){return function(){return null}}var c=n(83711),l=n(30626),d=n(80713);function u(e){return function(){return null}}var p=n(34236);function f(e,t,n,o,i){return null}var m=n(22775),g=n(55192),v=n(17294),x=n(95001),b=n(24896)},95001:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var o=n(67294);function i(e){var t=o.useState(e),n=t[0],i=t[1],r=e||n;return o.useEffect((function(){null==n&&i("mui-".concat(Math.round(1e5*Math.random())))}),[n]),r}},48884:function(e,t,n){"use strict";var o=n(95318),i=n(20862);t.Z=void 0;var r=i(n(67294)),a=(0,o(n(2108)).default)(r.createElement("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}),"Menu");t.Z=a},48825:function(e,t,n){"use strict";var o=n(95318),i=n(20862);t.Z=void 0;var r=i(n(67294)),a=(0,o(n(2108)).default)(r.createElement("path",{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"}),"Notifications");t.Z=a},2108:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.createSvgIcon}});var o=n(28546)},58249:function(e,t,n){"use strict";n.r(t);var o=n(85893),i=n(67294),r=n(45258),a=n(41749),s=n(17812),c=n(48884),l=n(48825),d=n(28358),u=n(6447),p=n(43700),f=n(14741),m=n(64436),g=n(14670),v=n(85639),x=n(26209),b=n(48369),h=n(49226),Z="rgba(255, 255, 255, 0.7)",y=(0,g.Z)((function(e){return{root:{"label + &":{marginTop:"-4px"}},input:{borderRadius:4,position:"relative",backgroundColor:e.palette.background.paper,border:"1px solid #ced4da",fontSize:16,width:"120px",padding:"4px 26px 4px 12px",transition:e.transitions.create(["border-color","box-shadow"]),fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),"&:focus":{borderRadius:4,borderColor:"#80bdff",boxShadow:"0 0 0 0.2rem rgba(0,123,255,.25)",backgroundColor:"#eeebdd"}}}}))(f.Z);t.default=(0,g.Z)((function(e){return{secondaryBar:{zIndex:0},formControl:{margin:e.spacing(1),minWidth:120,"&.MuiInputLabel-outlined.MuiInputLabel-shrink":{display:"none"}},menuButton:{marginLeft:-e.spacing(1)},iconButtonAvatar:{padding:4},link:{textDecoration:"none",color:Z,"&:hover":{color:e.palette.common.white}},button:{borderColor:Z},maininput:{width:"40%",display:"flex",justifyContent:"space-evenly",marginRight:"60px"},aligntopitems:{display:"flex",alignItems:"center"},labelname:{transform:"translate(14px,3px) scale(1)"}}}))((function(e){var t=e.classes,n=e.onDrawerToggle,f=(0,i.useState)([]),g=f[0],Z=f[1],C=(0,i.useState)([]),w=C[0],j=C[1],S=(0,i.useState)([]),N=S[0],k=S[1],I=(0,h.v9)((function(e){return e.header})),E=(0,i.useState)(""),R=E[0],z=E[1],M=(0,i.useState)(""),F=M[0],B=M[1],A=(0,h.I0)();return(0,i.useState)((function(){I&&(z(I.stage),B(I.period))}),[I]),(0,i.useEffect)((function(){fetch("http://[::1]:3000/api/stages").then((function(e){return e.json()})).then((function(e){Z(e)})),fetch("http://[::1]:3000/api/periods").then((function(e){return e.json()})).then((function(e){k(e)}))}),[]),(0,i.useEffect)((function(){var e=[];g.map((function(t,n){g.map((function(t){t.stageOrder===n+1&&e.push(t)}))})),j(e)}),[g]),(0,o.jsxs)(i.Fragment,{children:[(0,o.jsx)(r.Z,{color:"primary",position:"sticky",elevation:0,children:(0,o.jsx)(d.Z,{children:(0,o.jsxs)(a.Z,{container:!0,spacing:1,alignItems:"center",children:[(0,o.jsx)(a.Z,{item:!0,children:(0,o.jsx)(s.Z,{color:"inherit","aria-label":"open drawer",onClick:n,className:t.menuButton,children:(0,o.jsx)(c.Z,{})})}),(0,o.jsx)(a.Z,{item:!0,xs:!0}),(0,o.jsxs)(a.Z,{className:t.maininput,item:!0,children:[(0,o.jsxs)(m.Z,{variant:"outlined",className:t.formControl,children:[(0,o.jsx)(p.Z,{className:t.labelname,id:"demo-simple-select-outlined-label",children:"Stage"}),(0,o.jsx)(x.Z,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",label:"Age",input:(0,o.jsx)(y,{}),value:R,children:w&&w.map((function(e){return(0,o.jsx)(v.Z,{value:e.stageName,onClick:function(){return t=e.stageName,A((0,b.Hf)(t)),z(e.stageName);var t},children:e.stageName},e.id)}))})]}),(0,o.jsxs)(m.Z,{variant:"outlined",className:t.formControl,children:[(0,o.jsx)(p.Z,{className:t.labelname,id:"demo-simple-select-outlined-label",children:"Period"}),(0,o.jsx)(x.Z,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",label:F,input:(0,o.jsx)(y,{}),value:F,children:N&&N.map((function(e){return(0,o.jsx)(v.Z,{value:e.periodName,onClick:function(){return t=e.periodName,B(t),void A((0,b.pH)(t));var t},children:e.periodName})}))})]})]}),(0,o.jsx)(a.Z,{item:!0,children:(0,o.jsx)(u.ZP,{title:"Alerts \u2022 No alerts",children:(0,o.jsx)(s.Z,{color:"inherit",children:(0,o.jsx)(l.Z,{})})})}),(0,o.jsx)(a.Z,{item:!0,children:(0,o.jsx)(s.Z,{color:"inherit",className:t.iconButtonAvatar})})]})})}),(0,o.jsx)(r.Z,{component:"div",className:t.secondaryBar,color:"primary",position:"static",elevation:0})]})}))},48369:function(e,t,n){"use strict";n.d(t,{Hf:function(){return i},pH:function(){return r},mR:function(){return a}});var o=n(9831),i=function(e){return{type:o.or,payload:e}},r=function(e){return{type:o.wy,payload:e}},a=function(e){return{type:o.iC,payload:e}}},65046:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Acumen/Header",function(){return n(58249)}])}},function(e){e.O(0,[7853,2342,4593,4422,4720,6447,9774,2888,179],(function(){return t=65046,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
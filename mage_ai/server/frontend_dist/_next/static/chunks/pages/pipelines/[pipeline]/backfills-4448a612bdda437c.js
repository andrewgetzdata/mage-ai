(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8450],{19395:function(n,e,t){"use strict";t.d(e,{IJ:function(){return s},Vx:function(){return f},eI:function(){return d},gU:function(){return b},tL:function(){return p},vJ:function(){return m}});var r,i,o=t(82394),c=t(92083),l=t.n(c);function u(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?u(Object(t),!0).forEach((function(e){(0,o.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n){return null===n||void 0===n?void 0:n.reduce((function(n,e){var t=e.block_uuid,r=e.completed_at,i=e.started_at,c=e.status,u=null;i&&r&&(u=l()(r).valueOf()-l()(i).valueOf());return a(a({},n),{},(0,o.Z)({},t,{runtime:u,status:c}))}),{})}function d(n){if(!n)return null;var e=new Date(l()(n).valueOf()),t=Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds());return new Date(t)}function f(n){return d(n).toISOString().split(".")[0]}!function(n){n.DAY="day",n.HOUR="hour",n.MINUTE="minute",n.SECOND="second"}(i||(i={}));var p=(r={},(0,o.Z)(r,i.DAY,86400),(0,o.Z)(r,i.HOUR,3600),(0,o.Z)(r,i.MINUTE,60),(0,o.Z)(r,i.SECOND,1),r);function b(n){var e=i.SECOND,t=n;return n%86400===0?(t/=86400,e=i.DAY):n%3600===0?(t/=3600,e=i.HOUR):n%60===0&&(t/=60,e=i.MINUTE),{time:t,unit:e}}function m(n,e){return n*p[e]}},45838:function(n,e,t){"use strict";t.d(e,{GZ:function(){return d},Vq:function(){return a},cE:function(){return f},cl:function(){return l},kA:function(){return u}});var r=t(9518),i=t(23831),o=t(37391),c=t(49125),l=r.default.div.withConfig({displayName:"indexstyle__TableContainerStyle",componentId:"sc-1wzfyed-0"})(["position:relative;overflow:auto;"," "," ",""],o.w5,(function(n){return n.minHeight&&"\n    min-height: ".concat(n.minHeight,"px;\n  ")}),(function(n){return n.overflowVisible&&"\n    overflow: visible;\n  "})),u=r.default.table.withConfig({displayName:"indexstyle__TableStyle",componentId:"sc-1wzfyed-1"})(["contain:size;width:100%;",""],(function(n){return(n.columnBorders||n.borderCollapseSeparate)&&"\n    border-collapse: separate;\n  "})),a=r.default.tr.withConfig({displayName:"indexstyle__TableRowStyle",componentId:"sc-1wzfyed-2"})([""," ",""],(function(n){return n.highlightOnHover&&"\n    &:hover {\n      background: ".concat((n.theme.interactive||i.Z.interactive).rowHoverBackground,";\n    }\n  ")}),(function(n){return!n.noHover&&"\n    &:hover {\n      background: ".concat((n.theme.interactive||i.Z.interactive).rowHoverBackground,";\n      cursor: pointer;\n    }\n  ")})),s=(0,r.css)(["text-overflow:ellipsis;white-space:nowrap;"," "," "," "," "," ",""],(function(n){return!n.alignTop&&"\n    vertical-align: middle;\n  "}),(function(n){return n.alignTop&&"\n    vertical-align: top;\n  "}),(function(n){return!n.noBorder&&"\n    border-bottom: 1px solid ".concat((n.theme.borders||i.Z.borders).light,";\n  ")}),(function(n){return n.compact&&"\n    padding: ".concat(c.iI/2,"px ").concat(c.iI,"px;\n  ")}),(function(n){return!n.compact&&"\n    padding: ".concat(c.iI,"px ").concat(2*c.iI,"px;\n  ")}),(function(n){return n.maxWidth&&"\n    max-width: ".concat(n.maxWidth,";\n  ")})),d=r.default.th.withConfig({displayName:"indexstyle__TableHeadStyle",componentId:"sc-1wzfyed-3"})([""," "," "," ",""],s,(function(n){return n.columnBorders&&"\n    border: 1px solid ".concat((n.theme.borders||i.Z.borders).light,";\n    border-right: none;\n  ")}),(function(n){return n.columnBorders&&n.last&&"\n    border-right: 1px solid ".concat((n.theme.borders||i.Z.borders).light,";\n  ")}),(function(n){return n.sticky&&"\n    background-color: ".concat((n.theme||i.Z).background.panel,";\n    border-bottom: 1px solid ").concat((n.theme.borders||i.Z.borders).medium,";\n    z-index: 2;\n    position: sticky;\n    top: 0;\n\n    &:first-child {\n      left: 0;\n      z-index: 2;\n    }\n  ")})),f=r.default.td.withConfig({displayName:"indexstyle__TableDataStyle",componentId:"sc-1wzfyed-4"})([""," "," "," "," "," "," ",""],s,(function(n){return n.rowVerticalPadding&&"\n    padding-top: ".concat(n.rowVerticalPadding,"px;\n    padding-bottom: ").concat(n.rowVerticalPadding,"px;\n  ")}),(function(n){return n.columnBorders&&"\n    border-left: 1px solid ".concat((n.theme.borders||i.Z.borders).light,";\n  ")}),(function(n){return n.columnBorders&&n.last&&"\n    border-right: 1px solid ".concat((n.theme.borders||i.Z.borders).light,";\n  ")}),(function(n){return n.stickyFirstColumn&&"\n    background-color: ".concat((n.theme||i.Z).background.panel,";\n    z-index: 1;\n    position: sticky;\n    left: 0;\n  ")}),(function(n){return n.selected&&"\n    background-color: ".concat((n.theme.interactive||i.Z.interactive).activeBorder,";\n  ")}),(function(n){return n.wrapColumns&&"\n    white-space: break-spaces;\n  "}))},87815:function(n,e,t){"use strict";var r=t(82394),i=t(12691),o=t.n(i),c=t(82684),l=t(67971),u=t(10919),a=t(86673),s=t(19711),d=t(46261),f=t(45838),p=t(28598);function b(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function m(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?b(Object(t),!0).forEach((function(e){(0,r.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}e.Z=function(n){var e=n.alignTop,t=n.borderCollapseSeparate,r=n.buildLinkProps,i=n.buildRowProps,b=n.columnBorders,h=n.columnFlex,v=n.columnMaxWidth,g=n.columns,w=void 0===g?[]:g,O=n.compact,y=n.highlightRowOnHover,k=n.isSelectedRow,x=n.noBorder,j=n.noHeader,P=n.onClickRow,Z=n.rows,C=n.rowVerticalPadding,_=n.stickyFirstColumn,E=n.stickyHeader,D=n.uuid,I=n.wrapColumns,N=(0,c.useMemo)((function(){return h.reduce((function(n,e){return n+(e||0)}),0)}),[h]),S=(0,c.useCallback)((function(n){if(h[n]){var e=Math.round(h[n]/N*100);return"".concat(e,"%")}return null}),[h,N]),T=(0,c.useMemo)((function(){return null===Z||void 0===Z?void 0:Z.map((function(n,t){var l,a=null===r||void 0===r?void 0:r(t),s=(null===i||void 0===i?void 0:i(t))||{renderCell:null,renderRow:null},d=s.renderCell,h=s.renderRow,g=[];return n.forEach((function(r,i){var o;d&&(o=d(r,i)),o||(o=(0,p.jsx)(f.cE,{alignTop:e,columnBorders:b,compact:O,last:i===n.length-1,maxWidth:null===v||void 0===v?void 0:v(i),noBorder:x,rowVerticalPadding:C,selected:null===k||void 0===k?void 0:k(t),stickyFirstColumn:_&&0===i,width:S(i),wrapColumns:I,children:r},"".concat(D,"-row-").concat(t,"-cell-").concat(i))),g.push(o)})),l=h?h(g):(0,p.jsx)(f.Vq,{highlightOnHover:y,noHover:!(a||P),onClick:P?function(){return P(t)}:null,children:g},"".concat(D,"-row-").concat(t)),a?(0,c.createElement)(o(),m(m({},a),{},{key:"".concat(D,"-row-link-").concat(t),passHref:!0}),(0,p.jsx)(u.Z,{fullWidth:!0,noHoverUnderline:!0,noOutline:!0,style:{display:"table-row-group"},verticalAlignContent:!0,children:l})):l}))}),[e,r,S,b,v,O,i,y,k,x,P,C,Z,_,D,I]);return(0,p.jsxs)(f.kA,{borderCollapseSeparate:t,columnBorders:b,children:[(null===w||void 0===w?void 0:w.length)>=1&&!j&&(0,p.jsx)(f.Vq,{noHover:!0,children:w.map((function(n,e){return(0,p.jsx)(f.GZ,{columnBorders:b,compact:O,last:e===w.length-1,noBorder:x,sticky:E,children:(0,p.jsxs)(l.Z,{alignItems:"center",children:[(0,p.jsx)(s.ZP,{bold:!0,leftAligned:!0,monospace:!0,muted:!0,children:n.label?n.label():n.uuid}),n.tooltipMessage&&(0,p.jsx)(a.Z,{ml:"4px",children:(0,p.jsx)(d.Z,{appearBefore:!0,label:(0,p.jsx)(s.ZP,{leftAligned:!0,children:n.tooltipMessage}),lightBackground:!0,primary:!0})})]})},"".concat(D,"-col-").concat(n.uuid,"-").concat(e))}))}),T]})}},43526:function(n,e,t){"use strict";t.d(e,{I7:function(){return r},IB:function(){return u},VV:function(){return o},_7:function(){return c},rn:function(){return l}});var r,i=t(66050),o="datetime",c="code",l=i.V;!function(n){n.SECOND="second",n.MINUTE="minute",n.HOUR="hour",n.DAY="day",n.WEEK="week",n.MONTH="month",n.YEAR="year",n.CUSTOM="custom"}(r||(r={}));var u=[r.SECOND,r.MINUTE,r.HOUR,r.DAY,r.WEEK,r.MONTH,r.YEAR,r.CUSTOM]},66050:function(n,e,t){"use strict";var r;t.d(e,{V:function(){return r}}),function(n){n.CANCELLED="cancelled",n.COMPLETED="completed",n.FAILED="failed",n.INITIAL="initial",n.RUNNING="running"}(r||(r={}))},47409:function(n,e,t){"use strict";t.d(e,{D:function(){return c},V:function(){return o}});var r,i=t(82394),o=t(66050).V,c=(r={},(0,i.Z)(r,o.CANCELLED,"Cancelled"),(0,i.Z)(r,o.COMPLETED,"Done"),(0,i.Z)(r,o.FAILED,"Failed"),(0,i.Z)(r,o.INITIAL,"Ready"),(0,i.Z)(r,o.RUNNING,"Running"),r)},30206:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return A}});var r=t(77837),i=t(75582),o=t(38860),c=t.n(o),l=t(82684),u=t(83455),a=t(34376),s=t(12691),d=t.n(s),f=t(43526),p=t(60328),b=t(10919),m=t(87815),h=t(19711),v=t(10503),g=t(47409),w=t(49125),O=t(19395),y=t(9736),k=t(28598);var x=function(n){var e=n.models,t=n.onClickRow,r=n.pipeline,i=n.selectedRow,o=(0,y.Ct)(),c=null===r||void 0===r?void 0:r.uuid,l=[{uuid:"Status"},{uuid:"Name"},{uuid:"Type"},{uuid:"Runs"},{uuid:"Backfill"},{uuid:"Started at"},{uuid:"Completed at"}];return o||l.push({label:function(){return""},uuid:"edit"}),(0,k.jsx)(m.Z,{columnFlex:[null,1,null,null,null,1,1,null],columns:l,isSelectedRow:function(n){return e[n].id===(null===i||void 0===i?void 0:i.id)},onClickRow:function(n){return t(e[n])},rows:e.map((function(n,e){var t=n.block_uuid,r=n.completed_at,i=n.end_datetime,l=n.id,u=n.name,a=n.start_datetime,s=n.started_at,m=n.status,y=n.total_run_count,x=[(0,k.jsx)(h.ZP,{default:!0,monospace:!0,children:m||"inactive"},"status"),(0,k.jsx)(d(),{as:"/pipelines/".concat(c,"/backfills/").concat(l),href:"/pipelines/[pipeline]/backfills/[...slug]",passHref:!0,children:(0,k.jsx)(b.Z,{bold:!0,sameColorAsText:!0,children:u})},"name"),(0,k.jsx)(h.ZP,{default:!0,monospace:!0,children:t?f._7:f.VV},"type"),(0,k.jsx)(h.ZP,{default:!0,monospace:!0,children:y||0},"runs"),(0,k.jsxs)(h.ZP,{default:!0,monospace:!0,children:[a&&i&&(0,k.jsxs)(k.Fragment,{children:[(0,O.Vx)(a),"\xa0-\xa0",(0,O.Vx)(i)]}),!(a&&i)&&"-"]},"backfill"),(0,k.jsx)(h.ZP,{default:!0,monospace:!0,children:s?(0,O.Vx)(s):"-"},"started_at"),(0,k.jsx)(h.ZP,{default:!0,monospace:!0,children:r?(0,O.Vx)(r):"-"},"completed_at")];return o||x.push((0,k.jsx)(p.Z,{default:!0,disabled:m===g.V.COMPLETED,iconOnly:!0,linkProps:{as:"/pipelines/".concat(c,"/backfills/").concat(l,"/edit"),href:"/pipelines/[pipeline]/backfills/[...slug]"},noBackground:!0,title:"Edit",children:(0,k.jsx)(v.I8,{default:!0,size:2*w.iI})},"".concat(e,"_edit_button"))),x})),uuid:"pipeline-runs"})},j=t(11135),P=t(2626),Z=t(41788),C=t(86673),_=t(82531),E=t(59920),D=t(33766),I=t(96510),N=t(59e3),S=t(90211);function T(n){var e=n.pipeline,t=(0,a.useRouter)(),r=e.uuid,o=_.ZP.backfills.list({_limit:20,_offset:0,include_run_count:!0,pipeline_uuid:r},{refreshInterval:6e4}),c=o.data,s=(o.mutate,(0,l.useMemo)((function(){return(null===c||void 0===c?void 0:c.backfills)||[]}),[c])),d=(0,N.iV)(),f=(0,l.useState)(null),p=f[0],b=f[1],m=(0,l.useState)(null),g=m[0],O=m[1];(0,l.useEffect)((function(){null!==d&&void 0!==d&&d.backfill_id?b(null===s||void 0===s?void 0:s.find((function(n){return n.id===Number(d.backfill_id)}))):p&&b(null)}),[s,d,p]);var y=(0,l.useMemo)((function(){var n="/pipelines/".concat(r,"/backfills"),e=[{label:function(){return"Backfills"},linkProps:p?{as:n,href:"/pipelines/[pipeline]/backfills"}:null}];return p&&e.push({label:function(){return p.name}}),e}),[p]),Z=(0,u.Db)(_.ZP.backfills.pipelines.useCreate(r),{onSuccess:function(n){return(0,I.wD)(n,{callback:function(n){var e=n.backfill.id;t.push("/pipelines/[pipeline]/backfills/[...slug]","/pipelines/".concat(r,"/backfills/").concat(e,"/edit"))},onErrorCallback:function(n,e){return O({errors:e,response:n})}})}}),T=(0,i.Z)(Z,2),A=T[0],B=T[1].isLoading;return(0,k.jsxs)(P.Z,{breadcrumbs:y,errors:g,pageName:E.M.BACKFILLS,pipeline:e,setErrors:O,title:function(n){var e=n.name;return"".concat(e," backfills")},uuid:"".concat(E.M.BACKFILLS,"_").concat(r),children:[(0,k.jsx)(C.Z,{p:w.cd,children:(0,k.jsx)(j.ZP,{beforeElement:(0,k.jsx)(v.mm,{size:2.5*w.iI}),blackBorder:!0,inline:!0,loading:B,noHoverUnderline:!0,onClick:function(){return A({backfill:{name:(0,S.Y6)()}})},sameColorAsText:!0,uuid:"PipelineDetailPage/Backfills/add_new_backfill",children:"Create new backfill"})}),s&&0===s.length&&(0,k.jsx)(C.Z,{p:w.cd,children:(0,k.jsx)(h.ZP,{bold:!0,default:!0,monospace:!0,muted:!0,children:"No backfills available"})}),(null===s||void 0===s?void 0:s.length)>=1&&(0,k.jsx)(x,{models:s,onClickRow:function(n){var e=n.id;return(0,D.u7)({backfill_id:e})},pipeline:e,selectedRow:p})]})}T.getInitialProps=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.query.pipeline,n.abrupt("return",{pipeline:{uuid:t}});case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();var A=(0,Z.Z)(T)},33766:function(n,e,t){"use strict";t.d(e,{g_:function(){return f},u7:function(){return d}});var r=t(75582),i=t(82394),o=t(34376),c=t.n(o),l=t(59e3),u=t(24224);function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){(0,i.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function d(n){var e,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=t.replaceParams,o=t.pushHistory,u=i?{}:(0,l.iV)();e=window.location.pathname;var a=o?c().push:c().replace,d=s(s({},u),n);Object.entries(n).forEach((function(n){var e=(0,r.Z)(n,2),t=e[0],i=e[1];"undefined"!==typeof i&&null!==i||delete d[t]}));var f=(0,l.uM)(d);f.length>=1&&(f="?".concat(f));var p="".concat(e.split("?")[0]).concat(f);return a(c().router.pathname,p,{shallow:!0})}function f(n,e,t){var i=t.addingMultipleValues,o=t.isList,c=t.itemsPerPage,l=t.resetLimitParams,a=s({},n);i?Object.entries(e).forEach((function(n){var e=(0,r.Z)(n,2),t=e[0],i=e[1];if(Array.isArray(i)){var o="".concat(t,"[]");a[o]=i.map(String)}})):o?Object.entries(e).forEach((function(n){var e=(0,r.Z)(n,2),t=e[0],i=e[1],o=String(i),c="".concat(t,"[]"),l=a[c];l&&Array.isArray(l)?(l=l.map(String)).includes(o)?a[c]=(0,u.Od)(l,(function(n){return n===o})):a[c]=l.concat(o):a[c]=[o]})):a=s(s({},a),e),l&&(a._limit=c||20,a._offset=0),d(a)}},37459:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pipelines/[pipeline]/backfills",function(){return t(30206)}])}},function(n){n.O(0,[3850,2083,9767,9386,1830,2626,9774,2888,179],(function(){return e=37459,n(n.s=e);var e}));var e=n.O();_N_E=e}]);
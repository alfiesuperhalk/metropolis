(this.webpackJsonpmetropolis=this.webpackJsonpmetropolis||[]).push([[37],{137:function(e,t,a){"use strict";var n=a(67),l=a(69),c=a(1),r=a.n(c),i=a(65),s=a.n(i),o=a(66),u=a.n(o),d=a(68),m={tag:d.t,flush:s.a.bool,className:s.a.string,cssModule:s.a.object,horizontal:s.a.oneOfType([s.a.bool,s.a.string])},f=function(e){var t=e.className,a=e.cssModule,c=e.tag,i=e.flush,s=e.horizontal,o=Object(l.a)(e,["className","cssModule","tag","flush","horizontal"]),m=Object(d.p)(u()(t,"list-group",i?"list-group-flush":function(e){return!1!==e&&(!0===e||"xs"===e?"list-group-horizontal":"list-group-horizontal-"+e)}(s)),a);return r.a.createElement(c,Object(n.a)({},o,{className:m}))};f.propTypes=m,f.defaultProps={tag:"ul",horizontal:!1},t.a=f},138:function(e,t,a){"use strict";var n=a(67),l=a(69),c=a(1),r=a.n(c),i=a(65),s=a.n(i),o=a(66),u=a.n(o),d=a(68),m={tag:d.t,active:s.a.bool,disabled:s.a.bool,color:s.a.string,action:s.a.bool,className:s.a.any,cssModule:s.a.object},f=function(e){e.preventDefault()},b=function(e){var t=e.className,a=e.cssModule,c=e.tag,i=e.active,s=e.disabled,o=e.action,m=e.color,b=Object(l.a)(e,["className","cssModule","tag","active","disabled","action","color"]),p=Object(d.p)(u()(t,!!i&&"active",!!s&&"disabled",!!o&&"list-group-item-action",!!m&&"list-group-item-"+m,"list-group-item"),a);return s&&(b.onClick=f),r.a.createElement(c,Object(n.a)({},b,{className:p}))};b.propTypes=m,b.defaultProps={tag:"li"},t.a=b},193:function(e,t,a){"use strict";var n=a(67),l=a(69),c=a(1),r=a.n(c),i=a(65),s=a.n(i),o=a(66),u=a.n(o),d=a(68),m=a(72),f=a(71),b={className:s.a.string,id:s.a.oneOfType([s.a.string,s.a.number]).isRequired,label:s.a.node,valid:s.a.bool,invalid:s.a.bool,bsSize:s.a.string,htmlFor:s.a.string,cssModule:s.a.object,onChange:s.a.func,children:s.a.oneOfType([s.a.node,s.a.array,s.a.func]),innerRef:s.a.oneOfType([s.a.object,s.a.string,s.a.func])},p=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={files:null},a.onChange=a.onChange.bind(Object(m.a)(a)),a}Object(f.a)(t,e);var a=t.prototype;return a.onChange=function(e){var t=e.target,a=this.props.onChange,n=this.getSelectedFiles(t);"function"===typeof a&&a.apply(void 0,arguments),this.setState({files:n})},a.getSelectedFiles=function(e){if(this.props.multiple&&e.files)return[].slice.call(e.files).map((function(e){return e.name})).join(", ");if(-1!==e.value.indexOf("fakepath")){var t=e.value.split("\\");return t[t.length-1]}return e.value},a.render=function(){var e=this.props,t=e.className,a=e.label,c=e.valid,i=e.invalid,s=e.cssModule,o=e.children,m=(e.bsSize,e.innerRef),f=e.htmlFor,b=(e.type,e.onChange,e.dataBrowse),p=e.hidden,h=Object(l.a)(e,["className","label","valid","invalid","cssModule","children","bsSize","innerRef","htmlFor","type","onChange","dataBrowse","hidden"]),g=Object(d.p)(u()(t,"custom-file"),s),E=Object(d.p)(u()(i&&"is-invalid",c&&"is-valid"),s),v=f||h.id,O=this.state.files;return r.a.createElement("div",{className:g,hidden:p||!1},r.a.createElement("input",Object(n.a)({type:"file"},h,{ref:m,"aria-invalid":i,className:u()(E,Object(d.p)("custom-file-input",s)),onChange:this.onChange})),r.a.createElement("label",{className:Object(d.p)("custom-file-label",s),htmlFor:v,"data-browse":b},O||a||"Choose file"),o)},t}(r.a.Component);p.propTypes=b;var h=p,g={className:s.a.string,id:s.a.oneOfType([s.a.string,s.a.number]).isRequired,type:s.a.string.isRequired,label:s.a.node,inline:s.a.bool,valid:s.a.bool,invalid:s.a.bool,bsSize:s.a.string,htmlFor:s.a.string,cssModule:s.a.object,children:s.a.oneOfType([s.a.node,s.a.array,s.a.func]),innerRef:s.a.oneOfType([s.a.object,s.a.string,s.a.func])};function E(e){var t=e.className,a=e.label,c=e.inline,i=e.valid,s=e.invalid,o=e.cssModule,m=e.children,f=e.bsSize,b=e.innerRef,p=e.htmlFor,g=Object(l.a)(e,["className","label","inline","valid","invalid","cssModule","children","bsSize","innerRef","htmlFor"]),E=g.type,v=Object(d.p)(u()(t,"custom-"+E,!!f&&"custom-"+E+"-"+f),o),O=Object(d.p)(u()(s&&"is-invalid",i&&"is-valid"),o),j=p||g.id;if("select"===E){g.type;var N=Object(l.a)(g,["type"]);return r.a.createElement("select",Object(n.a)({},N,{ref:b,className:u()(O,v),"aria-invalid":s}),m)}if("file"===E)return r.a.createElement(h,e);if("checkbox"!==E&&"radio"!==E&&"switch"!==E)return r.a.createElement("input",Object(n.a)({},g,{ref:b,"aria-invalid":s,className:u()(O,v)}));var C=u()(v,Object(d.p)(u()("custom-control",{"custom-control-inline":c}),o)),y=g.hidden,k=Object(l.a)(g,["hidden"]);return r.a.createElement("div",{className:C,hidden:y||!1},r.a.createElement("input",Object(n.a)({},k,{type:"switch"===E?"checkbox":E,ref:b,"aria-invalid":s,className:u()(O,Object(d.p)("custom-control-input",o))})),r.a.createElement("label",{className:Object(d.p)("custom-control-label",o),htmlFor:j},a),m)}E.propTypes=g;t.a=E},233:function(e,t,a){"use strict";var n=a(67),l=a(69),c=a(1),r=a.n(c),i=a(65),s=a.n(i),o=a(66),u=a.n(o),d=a(68),m={tag:d.t,className:s.a.string,cssModule:s.a.object},f=function(e){var t=e.className,a=e.cssModule,c=e.tag,i=Object(l.a)(e,["className","cssModule","tag"]),s=Object(d.p)(u()(t,"modal-footer"),a);return r.a.createElement(c,Object(n.a)({},i,{className:s}))};f.propTypes=m,f.defaultProps={tag:"div"},t.a=f},539:function(e,t,a){"use strict";var n=a(67),l=a(69),c=a(1),r=a.n(c),i=a(65),s=a.n(i),o=a(66),u=a.n(o),d=a(68),m={tag:d.t,className:s.a.any,cssModule:s.a.object},f=function(e){var t=e.className,a=e.cssModule,c=e.tag,i=Object(l.a)(e,["className","cssModule","tag"]),s=Object(d.p)(u()(t,"list-group-item-heading"),a);return r.a.createElement(c,Object(n.a)({},i,{className:s}))};f.propTypes=m,f.defaultProps={tag:"h5"},t.a=f},540:function(e,t,a){"use strict";var n=a(67),l=a(69),c=a(1),r=a.n(c),i=a(65),s=a.n(i),o=a(66),u=a.n(o),d=a(68),m={tag:d.t,className:s.a.any,cssModule:s.a.object},f=function(e){var t=e.className,a=e.cssModule,c=e.tag,i=Object(l.a)(e,["className","cssModule","tag"]),s=Object(d.p)(u()(t,"list-group-item-text"),a);return r.a.createElement(c,Object(n.a)({},i,{className:s}))};f.propTypes=m,f.defaultProps={tag:"p"},t.a=f},541:function(e,t,a){},797:function(e,t,a){"use strict";a.r(t);var n=a(73),l=a(1),c=a.n(l),r=a(138),i=a(539),s=a(193),o=a(540),u=function(e){var t=e.onTodoClick,a=e.onStarredClick,n=e.onDeleteClick,l=e.starred,u=e.onCheckClick,d=e.title,m=e.isCompleted,f=e.desc,b=e.deleted,p=e.active,h=e.id;return c.a.createElement(r.a,{className:p===h?"bg-light":"",onClick:t},c.a.createElement("div",{className:"list-group-item-action border-bottom"},c.a.createElement(i.a,null,c.a.createElement("span",{className:"d-flex align-items-center"},c.a.createElement(s.a,{type:"checkbox",id:h,checked:m,label:" ",onChange:u}),c.a.createElement("span",{className:"d-block"}," ",d))),c.a.createElement(o.a,{className:"mb-1"},c.a.createElement("span",{className:"text-truncate d-block"},f)),c.a.createElement("span",null,c.a.createElement("i",{onClick:a,className:l?"fas fa-star":"far fa-star",style:{color:l?"#FFC107":"#495057"}}),b?c.a.createElement("i",{onClick:n,className:"icon-action-undo ml-3"}):c.a.createElement("i",{onClick:n,className:"fas fa-trash-alt ml-3"}))))},d=a(81),m=a(114),f=a(137),b=function(e){var t=e.showRightPart,a=Object(d.b)();Object(l.useEffect)((function(){a(Object(m.c)())}),[a]);var n=function(e,t,a){switch(t){case"all":return e.filter((function(e){return!e.deleted&&e.title.toLocaleLowerCase().concat(" ").includes(a.toLocaleLowerCase())}));case"starred":return e.filter((function(e){return e.starred&&!e.deleted&&e.title.toLocaleLowerCase().concat(" ").includes(a.toLocaleLowerCase())}));case"deleted":return e.filter((function(e){return e.deleted&&e.title.toLocaleLowerCase().concat(" ").includes(a.toLocaleLowerCase())}));case"completed":return e.filter((function(e){return!e.deleted&&e.isCompleted&&e.title.toLocaleLowerCase().concat(" ").includes(a.toLocaleLowerCase())}));default:throw new Error("Unknown filter: "+t)}}(Object(d.c)((function(e){return e.maintodoReducer.todos})),Object(d.c)((function(e){return e.todoReducer.todosVisibilityFilter})),Object(d.c)((function(e){return e.todoReducer.todoSearch}))),r=Object(d.c)((function(e){return e.maintodoReducer.todoDetails}));return c.a.createElement("div",null,c.a.createElement(f.a,{flush:!0,className:"listing-over border-top"},n.map((function(e){return c.a.createElement(u,Object.assign({key:e.id},e,{active:r,onCheckClick:function(){return a(Object(m.e)(e.id))},onStarredClick:function(){return a(Object(m.i)(e.id))},onDeleteClick:function(){a(Object(m.b)(e.id)),console.log(e.id)},onTodoClick:function(){a(Object(m.f)(e.id)),t()}}))}))))},p=function(){var e=Object(d.c)((function(e){return e.todoReducer.todoSearch})),t=Object(d.b)();return c.a.createElement("div",{className:"bg-light p-4"},c.a.createElement("input",{type:"text",className:"form-control",placeholder:"Search Todos",onChange:function(e){return t(Object(m.g)(e.target.value))},defaultValue:e}))},h=a(90),g=a(126),E=function(){var e=Object(d.c)((function(e){return e.maintodoReducer.todos[e.maintodoReducer.todoDetails-1]})),t=Object(d.b)();return c.a.createElement(l.Fragment,null,e&&!e.deleted?c.a.createElement("div",{className:"p-4"},c.a.createElement("div",null,c.a.createElement(s.a,{type:"checkbox",id:e.id,checked:e.isCompleted,label:" ",onChange:function(){return t(Object(m.e)(e.id))}}),c.a.createElement("h5",{className:"mt-4"},"Task title"),c.a.createElement(h.a,{type:"text",id:"title",name:"title",rows:"5",value:e.title,onChange:function(a){return t(Object(m.j)(e.id,"title",a.target.value))}}),c.a.createElement("h5",{className:"mt-4"},"Task Description"),c.a.createElement(h.a,{type:"textarea",id:"title",name:"title",rows:"5",value:e.desc,onChange:function(a){return t(Object(m.j)(e.id,"desc",a.target.value))}}),c.a.createElement(g.a,{className:"mt-4 btn btn-danger",onClick:function(){t(Object(m.b)(e.id))}},"Delete Todo"))):c.a.createElement("div",{className:"d-flex h-100 p-4 flex-column align-items-center justify-content-center"},c.a.createElement("i",{className:"far fa-address-card display-5"}),c.a.createElement("h4",{className:"mt-2"},"Please select a Todo to see details.")))},v=a(732),O=a(537),j=function(e){var t=Object(d.c)((function(t){return e.filter===t.todoReducer.todosVisibilityFilter})),a=Object(d.b)();return c.a.createElement("li",{className:"list-group-item"+(t?" bg-light":""),onClick:function(){return a(Object(m.d)(e.filter))}},c.a.createElement("span",{className:"list-group-item-action"},e.children))},N=a(92),C=a(749),y=a(93),k=a(151),T=a(233),w=function(e){var t,a,n=e.onButtonClick,l=Object(d.c)((function(e){return e.maintodoReducer.todos.length+1})),r=Object(d.b)();return c.a.createElement(c.a.Fragment,null,c.a.createElement(N.a,{onSubmit:function(e){e.preventDefault(),r(Object(m.a)(l,t.value,a.value)),t.value="",a.value=""}},c.a.createElement(C.a,null,c.a.createElement(y.a,null,c.a.createElement(k.a,{for:"title"},"Todo Title"),c.a.createElement("input",{className:"form-control",type:"text",name:"title",id:"title",ref:function(e){return t=e},required:!0})),c.a.createElement(y.a,null,c.a.createElement(k.a,{for:"desc"},"Todo Desc"),c.a.createElement("textarea",{className:"form-control",name:"desc",rows:"5",id:"desc",ref:function(e){return a=e},required:!0}))),c.a.createElement(T.a,null,c.a.createElement(g.a,{color:"primary",onClick:n,type:"submit"},"Add Todo"))))},M=function(e){var t=Object(l.useState)(!1),a=Object(n.a)(t,2),r=a[0],i=a[1],s=function(){i(!r)};return c.a.createElement("div",null,c.a.createElement("div",{className:"p-3"},c.a.createElement("span",{onClick:s.bind(null),className:"btn btn-danger d-block text-white"},"Add Task")),c.a.createElement("div",{className:"filter-listing"},c.a.createElement(f.a,{flush:!0},c.a.createElement(j,{filter:m.h.SHOW_ALL_TODO},c.a.createElement("i",{className:"ti-clipboard mr-2"})," All")),c.a.createElement("hr",{className:""}),c.a.createElement("h6",{className:"mb-0 mt-2 p-3"},"Filters"),c.a.createElement(f.a,{flush:!0},c.a.createElement(j,{filter:m.h.STARRED_TODO},c.a.createElement("i",{className:"far fa-star mr-2"})," Starred"),c.a.createElement(j,{filter:m.h.COMPLETED_TODO},c.a.createElement("i",{className:"far fa-check-circle mr-2"})," Completed Todos"),c.a.createElement(j,{filter:m.h.DELETED_TODO},c.a.createElement("i",{className:"icon-trash mr-2"})," Deleted Todos"))),c.a.createElement(v.a,{isOpen:r,toggle:s.bind(null),className:e.className,size:"md"},c.a.createElement(O.a,{toggle:s.bind(null)},"Add Contact"),c.a.createElement(w,{onButtonClick:s.bind(null)})))};a(541),t.default=function(){var e=Object(l.useState)(!1),t=Object(n.a)(e,2),a=t[0],r=t[1],i=Object(l.useState)(!1),s=Object(n.a)(i,2),o=s[0],u=s[1],d=function(){u(!o)};return c.a.createElement(l.Fragment,null,c.a.createElement("div",{className:"app-drawer"},c.a.createElement("div",{className:"left-part bg-white "+(!0===a?"show-panel":"")},c.a.createElement(M,null)),c.a.createElement("div",{className:"right-part bg-white app-drawer-content"},c.a.createElement("div",{className:"right-left-part "+(!0===o?"show-right-left-panel":"")},c.a.createElement("span",{onClick:function(){r(!a)}.bind(null),className:"bg-primary show-left-part text-white d-block d-lg-none "+(!0===a?"left-part-open":"")},c.a.createElement("i",{className:!0===a?"fas fa-chevron-left":"fas fa-chevron-right"})),c.a.createElement(p,null),c.a.createElement(b,{showRightPart:d.bind(null)})),c.a.createElement("div",{className:"right-right-part "+(!0===o?"show-right-right-panel":"hide-right-right-part")},c.a.createElement("span",{onClick:function(){d()},className:"hide-right-right-part d-block d-md-none "+(!0===o?"right-right-part-open":"")},c.a.createElement("i",{className:"fas fa-times"})),c.a.createElement(E,null)))))}}}]);
//# sourceMappingURL=37.69fc7ca7.chunk.js.map
(this.webpackJsonpmetropolis=this.webpackJsonpmetropolis||[]).push([[38],{110:function(e,a,t){"use strict";var l=t(66),n=t(68),r=t(1),c=t.n(r),o=t(64),s=t.n(o),i=t(65),m=t.n(i),u=t(67),d={tag:u.t,flush:s.a.bool,className:s.a.string,cssModule:s.a.object,horizontal:s.a.oneOfType([s.a.bool,s.a.string])},f=function(e){var a=e.className,t=e.cssModule,r=e.tag,o=e.flush,s=e.horizontal,i=Object(n.a)(e,["className","cssModule","tag","flush","horizontal"]),d=Object(u.p)(m()(a,"list-group",o?"list-group-flush":function(e){return!1!==e&&(!0===e||"xs"===e?"list-group-horizontal":"list-group-horizontal-"+e)}(s)),t);return c.a.createElement(r,Object(l.a)({},i,{className:d}))};f.propTypes=d,f.defaultProps={tag:"ul",horizontal:!1},a.a=f},111:function(e,a,t){"use strict";var l=t(66),n=t(68),r=t(1),c=t.n(r),o=t(64),s=t.n(o),i=t(65),m=t.n(i),u=t(67),d={tag:u.t,active:s.a.bool,disabled:s.a.bool,color:s.a.string,action:s.a.bool,className:s.a.any,cssModule:s.a.object},f=function(e){e.preventDefault()},b=function(e){var a=e.className,t=e.cssModule,r=e.tag,o=e.active,s=e.disabled,i=e.action,d=e.color,b=Object(n.a)(e,["className","cssModule","tag","active","disabled","action","color"]),p=Object(u.p)(m()(a,!!o&&"active",!!s&&"disabled",!!i&&"list-group-item-action",!!d&&"list-group-item-"+d,"list-group-item"),t);return s&&(b.onClick=f),c.a.createElement(r,Object(l.a)({},b,{className:p}))};b.propTypes=d,b.defaultProps={tag:"li"},a.a=b},112:function(e,a,t){"use strict";var l=t(66),n=t(68),r=t(73),c=t(70),o=t(1),s=t.n(o),i=t(64),m=t.n(i),u=t(65),d=t.n(u),f=t(92),b=t(67),p={children:m.a.node,active:m.a.bool,disabled:m.a.bool,divider:m.a.bool,tag:b.t,header:m.a.bool,onClick:m.a.func,className:m.a.string,cssModule:m.a.object,toggle:m.a.bool,text:m.a.bool},E=function(e){function a(a){var t;return(t=e.call(this,a)||this).onClick=t.onClick.bind(Object(r.a)(t)),t.getTabIndex=t.getTabIndex.bind(Object(r.a)(t)),t}Object(c.a)(a,e);var t=a.prototype;return t.onClick=function(e){var a=this.props,t=a.disabled,l=a.header,n=a.divider,r=a.text;t||l||n||r?e.preventDefault():(this.props.onClick&&this.props.onClick(e),this.props.toggle&&this.context.toggle(e))},t.getTabIndex=function(){var e=this.props,a=e.disabled,t=e.header,l=e.divider,n=e.text;return a||t||l||n?"-1":"0"},t.render=function(){var e=this.getTabIndex(),a=e>-1?"menuitem":void 0,t=Object(b.q)(this.props,["toggle"]),r=t.className,c=t.cssModule,o=t.divider,i=t.tag,m=t.header,u=t.active,f=t.text,p=Object(n.a)(t,["className","cssModule","divider","tag","header","active","text"]),E=Object(b.p)(d()(r,{disabled:p.disabled,"dropdown-item":!o&&!m&&!f,active:u,"dropdown-header":m,"dropdown-divider":o,"dropdown-item-text":f}),c);return"button"===i&&(m?i="h6":o?i="div":p.href?i="a":f&&(i="span")),s.a.createElement(i,Object(l.a)({type:"button"===i&&(p.onClick||this.props.toggle)?"button":void 0},p,{tabIndex:e,role:a,className:E,onClick:this.onClick}))},a}(s.a.Component);E.propTypes=p,E.defaultProps={tag:"button",toggle:!0},E.contextType=f.a,a.a=E},157:function(e,a,t){"use strict";var l=t(66),n=t(68),r=t(1),c=t.n(r),o=t(64),s=t.n(o),i=t(65),m=t.n(i),u=t(67),d={tag:u.t,className:s.a.string,cssModule:s.a.object},f=function(e){var a=e.className,t=e.cssModule,r=e.tag,o=Object(n.a)(e,["className","cssModule","tag"]),s=Object(u.p)(m()(a,"modal-footer"),t);return c.a.createElement(r,Object(l.a)({},o,{className:s}))};f.propTypes=d,f.defaultProps={tag:"div"},a.a=f},631:function(e,a,t){"use strict";t.r(a);var l=t(75),n=t(1),r=t.n(n),c=t(76),o=t(77),s=function(e){var a=e.id,t=e.active,l=e.onClick,n=e.onChange,s=e.onStar,i=e.onImportant,m=e.from,u=e.emailExcerpt,d=e.time,f=e.label,b=e.starred,p=e.important;return r.a.createElement("li",{className:"list-group-item p-3 border-bottom "+(t===a?"bg-light":"")},r.a.createElement(c.a,null,r.a.createElement(o.a,{xs:1},r.a.createElement("div",{className:"custom-control custom-checkbox"},r.a.createElement("input",{type:"checkbox",id:"check"+a,className:"custom-control-input",onChange:n}),r.a.createElement("label",{className:"custom-control-label",htmlFor:"check"+a}," "))),r.a.createElement(o.a,{xs:10,onClick:l},r.a.createElement("h6",{className:"font-bold mb-1 mt-1"},m),r.a.createElement("div",null,r.a.createElement("p",{className:"text-truncate w-100 mb-0"},u),r.a.createElement("div",{className:"mt-2 d-flex align-items-center"},r.a.createElement("div",{className:"mr-2"},r.a.createElement("span",{className:"badge "+("Promotional"===f?"badge-warning":"")+("Social"===f?"badge-success":"")+("Health"===f?"badge-danger":"")},f)),r.a.createElement("div",{className:""},r.a.createElement("span",{className:"d-flex "},r.a.createElement("i",{onClick:s,className:"font-14 mr-2 "+(b?"fas fa-star":"far fa-star"),style:{color:b?"#FFC107":"#495057"}}),r.a.createElement("i",{onClick:i,className:"font-14 "+(p?"fas fa-bookmark":"far fa-bookmark"),style:{color:p?"#FFC107":"#495057"}}))),r.a.createElement("div",{className:"ml-auto"},r.a.createElement("span",{className:"text-muted font-12"},d)))))))},i=t(107),m=t(80),u=function(e){var a=e.showRightPart,t=function(e,a,t){switch(a){case i.a.SHOW_INBOX:return e.filter((function(e){return e.inbox&&!e.trash&&e.from.toLocaleLowerCase().includes(t.toLocaleLowerCase())}));case i.a.SHOW_SENT:return e.filter((function(e){return e.sent&&!e.trash&&e.from.toLocaleLowerCase().includes(t.toLocaleLowerCase())}));case i.a.SHOW_DRAFTS:return e.filter((function(e){return e.draft&&!e.trash&&e.from.toLocaleLowerCase().includes(t.toLocaleLowerCase())}));case i.a.SHOW_SPAM:return e.filter((function(e){return e.spam&&!e.trash&&e.from.toLocaleLowerCase().includes(t.toLocaleLowerCase())}));case i.a.SHOW_TRASH:return e.filter((function(e){return e.trash&&e.from.toLocaleLowerCase().includes(t.toLocaleLowerCase())}));case i.a.SHOW_STARRED:return e.filter((function(e){return e.starred&&!e.trash&&e.from.toLocaleLowerCase().includes(t.toLocaleLowerCase())}));case i.a.SHOW_IMPORTANT:return e.filter((function(e){return e.important&&!e.trash&&e.from.toLocaleLowerCase().includes(t.toLocaleLowerCase())}));case i.a.SHOW_PROMOTIONAL:return e.filter((function(e){return"Promotional"===e.label&&!e.trash&&e.from.toLocaleLowerCase().includes(t.toLocaleLowerCase())}));case i.a.SHOW_SOCIAL:return e.filter((function(e){return"Social"===e.label&&!e.trash&&e.from.toLocaleLowerCase().includes(t.toLocaleLowerCase())}));case i.a.SHOW_HEALTH:return e.filter((function(e){return"Health"===e.label&&!e.trash&&e.from.toLocaleLowerCase().includes(t.toLocaleLowerCase())}));default:throw new Error("Unknown filter: "+a)}}(Object(m.c)((function(e){return e.emailReducer.emails})),Object(m.c)((function(e){return e.emailReducer.visibilityFilter})),Object(m.c)((function(e){return e.emailReducer.emailSearch}))),l=Object(m.c)((function(e){return e.emailReducer.emailContent})),n=Object(m.b)();return r.a.createElement("ul",{className:"list-group listing-email-over"},t.map((function(e){return r.a.createElement(s,Object.assign({key:e.id,active:l},e,{onClick:function(){n(Object(i.f)(e.id)),a()},onStar:function(){return n(Object(i.i)(e.id))},onImportant:function(){return n(Object(i.e)(e.id))},onChange:function(a){!0===a.target.checked?n(Object(i.h)(e.id,"checked")):n(Object(i.h)(e.id,"unchecked"))}}))})))},d=t(110),f=t(111),b=t(574),p=t(291),E=t(584),g=t(103),h=t(109),N=t(140),O=t(104),v=t(157),j=t(268),w=function(e){var a=Object(m.c)((function(a){return e.filter===a.emailReducer.visibilityFilter})),t=Object(m.b)();return r.a.createElement("li",{className:"list-group-item",onClick:function(){return t(Object(i.g)(e.filter))},disabled:a},r.a.createElement("span",{className:"list-group-item-action "+(a?"active":"")},e.children))},C=function(){var e=Object(n.useState)(!1),a=Object(l.a)(e,2),t=a[0],s=a[1],m=function(){s(!t)};return r.a.createElement("div",null,r.a.createElement("div",{className:"p-3"},r.a.createElement("span",{onClick:m.bind(null),className:"btn btn-danger d-block text-white"},"Compose")),r.a.createElement("div",{className:"divider"}),r.a.createElement(d.a,{className:"filter-listing"},r.a.createElement(w,{filter:i.a.SHOW_INBOX},r.a.createElement("i",{className:"fas fa-inbox mr-2"})," Inbox"),r.a.createElement(w,{filter:i.a.SHOW_SENT},r.a.createElement("i",{className:"fas fa-paper-plane mr-2"})," Sent"),r.a.createElement(w,{filter:i.a.SHOW_DRAFTS},r.a.createElement("i",{className:"fas fa-file mr-2"})," Drafts"),r.a.createElement(w,{filter:i.a.SHOW_SPAM},r.a.createElement("i",{className:"fas fa-exclamation-circle mr-2"})," Spam"),r.a.createElement(w,{filter:i.a.SHOW_TRASH},r.a.createElement("i",{className:"fas fa-trash mr-2"})," Trash"),r.a.createElement(f.a,null,r.a.createElement("hr",null)),r.a.createElement(w,{filter:i.a.SHOW_STARRED},r.a.createElement("i",{className:"fas fa-star mr-2"})," Starred"),r.a.createElement(w,{filter:i.a.SHOW_IMPORTANT},r.a.createElement("i",{className:"fas fa-bookmark mr-2"})," Important"),r.a.createElement(f.a,null,r.a.createElement("hr",null)),r.a.createElement(w,{filter:i.a.SHOW_PROMOTIONAL},r.a.createElement("i",{className:"fas fa-tags mr-2"})," Promotional"),r.a.createElement(w,{filter:i.a.SHOW_SOCIAL},r.a.createElement("i",{className:"fas fa-tags mr-2"})," Social"),r.a.createElement(w,{filter:i.a.SHOW_HEALTH},r.a.createElement("i",{className:"fas fa-tags mr-2"})," Health")),r.a.createElement(b.a,{isOpen:t,toggle:m.bind(null),size:"lg"},r.a.createElement(p.a,{toggle:m.bind(null)},"Compose New Message"),r.a.createElement(E.a,null,r.a.createElement(g.a,null,r.a.createElement("div",{className:"form-body"},r.a.createElement(c.a,null,r.a.createElement(o.a,{md:"6",sm:"12"},r.a.createElement(h.a,null,r.a.createElement(N.a,{for:"to"},"To"),r.a.createElement(O.a,{type:"text",id:"to",name:"to"}))),r.a.createElement(o.a,{md:"6",sm:"12"},r.a.createElement(h.a,null,r.a.createElement(N.a,{for:"cc"},"CC"),r.a.createElement(O.a,{type:"text",id:"cc",name:"cc"}))),r.a.createElement(o.a,{sm:"12"},r.a.createElement(h.a,null,r.a.createElement(N.a,{for:"subject"},"Subject"),r.a.createElement(O.a,{type:"text",id:"subject",name:"subject"}))),r.a.createElement(o.a,{sm:"12"},r.a.createElement(h.a,null,r.a.createElement(N.a,{for:"msg"},"Email Message"),r.a.createElement(O.a,{type:"textarea",name:"msg",id:"msg"})))),r.a.createElement(h.a,null,r.a.createElement(N.a,null,"Attachment"),r.a.createElement(O.a,{type:"file",className:"form-control-file",id:"projectinput8"}))))),r.a.createElement(v.a,null,r.a.createElement(j.a,{color:"primary",onClick:m.bind(null)},"Send")," ",r.a.createElement(j.a,{color:"secondary",onClick:m.bind(null)},"Cancel"))))},S=t(120),k=t(644),x=t(582),L=t(112),y=function(){var e=Object(n.useState)(!1),a=Object(l.a)(e,2),t=a[0],c=a[1],o=Object(n.useState)(!1),s=Object(l.a)(o,2),u=s[0],d=s[1],f=Object(m.c)((function(e){return e.emailReducer.selectedEmail})),b=Object(m.b)();return r.a.createElement("div",{className:"bg-light px-3 pb-3 border-bottom"},r.a.createElement("div",{className:"d-flex",role:"group"},r.a.createElement("button",{type:"button",className:"btn btn-outline-secondary w-100",onClick:function(){return b(Object(i.j)(f))}},r.a.createElement("i",{className:"fas fa-trash-alt"})),r.a.createElement("div",{className:"w-100"},r.a.createElement("div",{className:"btn-group w-100",role:"group"},r.a.createElement(S.a,{className:"w-100",isOpen:t,toggle:function(){c(!t)}.bind(null)},r.a.createElement(k.a,{outline:!0,color:"secondary",className:"w-100"},r.a.createElement("i",{className:"fas fa-folder"})),r.a.createElement(x.a,null,r.a.createElement(L.a,{onClick:function(){return b(Object(i.b)(f,"inbox"))}},"Inbox"),r.a.createElement(L.a,{onClick:function(){return b(Object(i.b)(f,"sent"))}},"Sent"),r.a.createElement(L.a,{onClick:function(){return b(Object(i.b)(f,"draft"))}},"Draft"),r.a.createElement(L.a,{onClick:function(){return b(Object(i.b)(f,"spam"))}},"Spam"),r.a.createElement(L.a,{onClick:function(){return b(Object(i.b)(f,"trash"))}},"Trash"))))),r.a.createElement("div",{className:"w-100"},r.a.createElement("div",{className:"btn-group w-100",role:"group"},r.a.createElement(S.a,{className:"w-100",isOpen:u,toggle:function(){d(!u)}.bind(null)},r.a.createElement(k.a,{outline:!0,color:"secondary",className:"w-100"},r.a.createElement("i",{className:"fas fa-tags"})),r.a.createElement(x.a,null,r.a.createElement(L.a,{onClick:function(){return b(Object(i.c)(f,"Promotional"))}},"Promotional"),r.a.createElement(L.a,{onClick:function(){return b(Object(i.c)(f,"Social"))}},"Social"),r.a.createElement(L.a,{onClick:function(){return b(Object(i.c)(f,"Health"))}},"Health")))))))},T=function(){var e=Object(m.c)((function(e){return e.emailReducer.emailSearch})),a=Object(m.b)();return r.a.createElement("div",{className:"bg-light p-3"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Search emails",onChange:function(e){return a(Object(i.d)(e.target.value))},value:e}))},H=function(){var e=Object(m.c)((function(e){return e.emailReducer.emails[e.emailReducer.emailContent-1]}));return e?r.a.createElement("div",null,r.a.createElement("div",{className:"card-body border-bottom"},r.a.createElement("h4",{className:"mb-0"},e.subject,r.a.createElement("span",{className:"ml-1 badge "+("Promotional"===e.label?"badge-warning":"")+("Social"===e.label?"badge-success":"")+("Health"===e.label?"badge-danger":"")},e.label))),r.a.createElement("div",{className:"card-body border-bottom"},r.a.createElement("div",{className:"d-flex align-items-center"},r.a.createElement("img",{src:e.thumbnail,alt:"user",className:"rounded-circle",width:"45"}),r.a.createElement("div",{className:"ml-2"},r.a.createElement("h5",{className:"mb-0 font-16 font-medium"},e.from),r.a.createElement("span",null,"to me")),r.a.createElement("div",{className:"ml-auto"},r.a.createElement("span",null,e.time)))),r.a.createElement("div",{className:"card-body",dangerouslySetInnerHTML:{__html:e.emailContent}})):r.a.createElement("div",{className:"d-flex h-100 p-4 flex-column align-items-center justify-content-center"},r.a.createElement("i",{className:"far fa-envelope display-5"}),r.a.createElement("h4",{className:"mt-2"},"Please select an email to show details."))};a.default=function(){var e=Object(n.useState)(!1),a=Object(l.a)(e,2),t=a[0],c=a[1],o=Object(n.useState)(!1),s=Object(l.a)(o,2),i=s[0],m=s[1],d=function(){m(!i)};return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"app-drawer"},r.a.createElement("div",{className:"left-part bg-white "+(!0===t?"show-panel":"")},r.a.createElement(C,null)),r.a.createElement("div",{className:"right-part bg-white app-drawer-content"},r.a.createElement("div",{className:"right-left-part "+(!0===i?"show-right-left-panel":"")},r.a.createElement("span",{onClick:function(){c(!t)}.bind(null),className:"bg-primary show-left-part text-white d-block d-lg-none "+(!0===t?"left-part-open":"")},r.a.createElement("i",{className:!0===t?"fas fa-chevron-left":"fas fa-chevron-right"})),r.a.createElement(T,null),r.a.createElement(y,null),r.a.createElement(u,{showRightPart:d.bind(null)})),r.a.createElement("div",{className:"right-right-part "+(!0===i?"show-right-right-panel":"hide-right-right-part")},r.a.createElement("span",{onClick:function(){d()},className:"hide-right-right-part d-block d-md-none "+(!0===i?"right-right-part-open":"")},r.a.createElement("i",{className:"fas fa-times"})),r.a.createElement(H,null)))))}},76:function(e,a,t){"use strict";var l=t(66),n=t(68),r=t(1),c=t.n(r),o=t(64),s=t.n(o),i=t(65),m=t.n(i),u=t(67),d=s.a.oneOfType([s.a.number,s.a.string]),f={tag:u.t,noGutters:s.a.bool,className:s.a.string,cssModule:s.a.object,form:s.a.bool,xs:d,sm:d,md:d,lg:d,xl:d},b={tag:"div",widths:["xs","sm","md","lg","xl"]},p=function(e){var a=e.className,t=e.cssModule,r=e.noGutters,o=e.tag,s=e.form,i=e.widths,d=Object(n.a)(e,["className","cssModule","noGutters","tag","form","widths"]),f=[];i.forEach((function(a,t){var l=e[a];if(delete d[a],l){var n=!t;f.push(n?"row-cols-"+l:"row-cols-"+a+"-"+l)}}));var b=Object(u.p)(m()(a,r?"no-gutters":null,s?"form-row":"row",f),t);return c.a.createElement(o,Object(l.a)({},d,{className:b}))};p.propTypes=f,p.defaultProps=b,a.a=p},77:function(e,a,t){"use strict";var l=t(66),n=t(68),r=t(1),c=t.n(r),o=t(64),s=t.n(o),i=t(65),m=t.n(i),u=t(67),d=s.a.oneOfType([s.a.number,s.a.string]),f=s.a.oneOfType([s.a.bool,s.a.number,s.a.string,s.a.shape({size:s.a.oneOfType([s.a.bool,s.a.number,s.a.string]),order:d,offset:d})]),b={tag:u.t,xs:f,sm:f,md:f,lg:f,xl:f,className:s.a.string,cssModule:s.a.object,widths:s.a.array},p={tag:"div",widths:["xs","sm","md","lg","xl"]},E=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},g=function(e){var a=e.className,t=e.cssModule,r=e.widths,o=e.tag,s=Object(n.a)(e,["className","cssModule","widths","tag"]),i=[];r.forEach((function(a,l){var n=e[a];if(delete s[a],n||""===n){var r=!l;if(Object(u.n)(n)){var c,o=r?"-":"-"+a+"-",d=E(r,a,n.size);i.push(Object(u.p)(m()(((c={})[d]=n.size||""===n.size,c["order"+o+n.order]=n.order||0===n.order,c["offset"+o+n.offset]=n.offset||0===n.offset,c)),t))}else{var f=E(r,a,n);i.push(f)}}})),i.length||i.push("col");var d=Object(u.p)(m()(a,i),t);return c.a.createElement(o,Object(l.a)({},s,{className:d}))};g.propTypes=b,g.defaultProps=p,a.a=g}}]);
//# sourceMappingURL=38.3db3fa3c.chunk.js.map
(this.webpackJsonpmetropolis=this.webpackJsonpmetropolis||[]).push([[64],{112:function(e,a,t){"use strict";var l=t(66),n=t(68),m=t(73),r=t(70),c=t(1),E=t.n(c),o=t(64),d=t.n(o),u=t(65),s=t.n(u),i=t(92),p=t(67),h={children:d.a.node,active:d.a.bool,disabled:d.a.bool,divider:d.a.bool,tag:p.t,header:d.a.bool,onClick:d.a.func,className:d.a.string,cssModule:d.a.object,toggle:d.a.bool,text:d.a.bool},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).onClick=t.onClick.bind(Object(m.a)(t)),t.getTabIndex=t.getTabIndex.bind(Object(m.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.onClick=function(e){var a=this.props,t=a.disabled,l=a.header,n=a.divider,m=a.text;t||l||n||m?e.preventDefault():(this.props.onClick&&this.props.onClick(e),this.props.toggle&&this.context.toggle(e))},t.getTabIndex=function(){var e=this.props,a=e.disabled,t=e.header,l=e.divider,n=e.text;return a||t||l||n?"-1":"0"},t.render=function(){var e=this.getTabIndex(),a=e>-1?"menuitem":void 0,t=Object(p.q)(this.props,["toggle"]),m=t.className,r=t.cssModule,c=t.divider,o=t.tag,d=t.header,u=t.active,i=t.text,h=Object(n.a)(t,["className","cssModule","divider","tag","header","active","text"]),b=Object(p.p)(s()(m,{disabled:h.disabled,"dropdown-item":!c&&!d&&!i,active:u,"dropdown-header":d,"dropdown-divider":c,"dropdown-item-text":i}),r);return"button"===o&&(d?o="h6":c?o="div":h.href?o="a":i&&(o="span")),E.a.createElement(o,Object(l.a)({type:"button"===o&&(h.onClick||this.props.toggle)?"button":void 0},h,{tabIndex:e,role:a,className:b,onClick:this.onClick}))},a}(E.a.Component);b.propTypes=h,b.defaultProps={tag:"button",toggle:!0},b.contextType=i.a,a.a=b},483:function(e,a,t){"use strict";var l=t(1),n=t.n(l),m=t(64),r=t.n(m),c=t(120),E={addonType:r.a.oneOf(["prepend","append"]).isRequired,children:r.a.node},o=function(e){return n.a.createElement(c.a,e)};o.propTypes=E,a.a=o},619:function(e,a,t){"use strict";t.r(a);var l=t(75),n=t(1),m=t.n(n),r=t(76),c=t(77),E=t(71),o=t(74),d=t(72),u=t(103),s=t(109),i=t(140),p=t(104),h=t(620),b=t(575),y=t(268),x=t(195),g=t(196),k=t(123),f=t(483),w=t(644),C=t(582),N=t(112),T=t(621);a.default=function(){var e=Object(n.useState)(!1),a=Object(l.a)(e,2),t=a[0],v=a[1],S=Object(n.useState)(!1),F=Object(l.a)(S,2),P=F[0],O=F[1];return m.a.createElement("div",null,m.a.createElement(r.a,null,m.a.createElement(c.a,{md:"12"},m.a.createElement(E.a,null,m.a.createElement(o.a,{className:"bg-light border-bottom p-3 mb-0"},m.a.createElement("i",{className:"mdi mdi-book mr-2"}),"Ordinary Form"),m.a.createElement(d.a,null,m.a.createElement(u.a,null,m.a.createElement(s.a,null,m.a.createElement(i.a,{htmlFor:"exampleEmail12"},"Email Address"),m.a.createElement(p.a,{type:"email",name:"email",id:"exampleEmail12",placeholder:"Email address Here"}),m.a.createElement(h.a,{color:"muted"},"We'll never share your email with anyone else.")),m.a.createElement(s.a,null,m.a.createElement(i.a,{htmlFor:"examplePassword2"},"Password"),m.a.createElement(p.a,{type:"password",name:"password",id:"examplePassword2",placeholder:"Password Here"})),m.a.createElement(s.a,null,m.a.createElement(b.a,{type:"checkbox",id:"exampleCustomCheckbox",label:"Check Me Out!"})),m.a.createElement(y.a,{color:"primary"},"Submit"))))),m.a.createElement(c.a,{md:"12"},m.a.createElement(E.a,null,m.a.createElement(o.a,{className:"bg-light border-bottom p-3 mb-0"},m.a.createElement("i",{className:"mdi mdi-book mr-2"}),"Default Form"),m.a.createElement(d.a,null,m.a.createElement(u.a,null,m.a.createElement(s.a,null,m.a.createElement(i.a,null,"Default Text ",m.a.createElement("span",{className:"help"},' e.g. "George deo"')),m.a.createElement(p.a,{type:"text",defaultValue:"George deo..."})),m.a.createElement(s.a,null,m.a.createElement(i.a,{htmlFor:"example-email"},"Email ",m.a.createElement("span",{className:"help"},' e.g. "example@gmail.com"')),m.a.createElement(p.a,{type:"email",id:"example-email",name:"example-email",placeholder:"Email"})),m.a.createElement(s.a,null,m.a.createElement(i.a,null,"Password"),m.a.createElement(p.a,{type:"password",defaultValue:"password"})),m.a.createElement(s.a,null,m.a.createElement(i.a,null,"Placeholder"),m.a.createElement(p.a,{type:"text",placeholder:"placeholder"})),m.a.createElement(s.a,null,m.a.createElement(i.a,null,"Text area"),m.a.createElement(p.a,{type:"textarea",rows:"5"})),m.a.createElement(s.a,null,m.a.createElement(i.a,null,"Read only input"),m.a.createElement(p.a,{type:"text",placeholder:"Readonly input here\u2026",readOnly:!0})),m.a.createElement(s.a,null,m.a.createElement("fieldset",{disabled:!0},m.a.createElement(i.a,{htmlFor:"disabledTextInput"},"Disabled input"),m.a.createElement(p.a,{type:"text",id:"disabledTextInput",placeholder:"Disabled input"}))),m.a.createElement(s.a,null,m.a.createElement(r.a,null,m.a.createElement(c.a,{md:"4"},m.a.createElement(b.a,{type:"checkbox",id:"exampleCustomCheckbox1",label:"Check this custom checkbox"}),m.a.createElement(b.a,{type:"checkbox",id:"exampleCustomCheckbox2",label:"Check this custom checkbox"}),m.a.createElement(b.a,{type:"checkbox",id:"exampleCustomCheckbox3",label:"Check this custom checkbox"})),m.a.createElement(c.a,{md:"4"},m.a.createElement(b.a,{type:"radio",id:"exampleCustomRadio1",name:"customRadio",label:"Toggle this custom radio"}),m.a.createElement(b.a,{type:"radio",id:"exampleCustomRadio2",name:"customRadio",label:"Toggle this custom radio"})))),m.a.createElement(s.a,null,m.a.createElement(i.a,null,"Select Years"),m.a.createElement(p.a,{type:"select"},m.a.createElement("option",null,"Choose here..."),m.a.createElement("option",null,"One"),m.a.createElement("option",null,"Two"),m.a.createElement("option",null,"Three"),m.a.createElement("option",null,"Four"),m.a.createElement("option",null,"Five"))),m.a.createElement(s.a,null,m.a.createElement(i.a,{htmlFor:"exampleFile"},"Default File"),m.a.createElement(p.a,{type:"file",placeholder:""})),m.a.createElement(s.a,null,m.a.createElement(i.a,null,"Custom File upload"),m.a.createElement(x.a,null,m.a.createElement(g.a,{addonType:"prepend"},m.a.createElement(k.a,null,"Upload")),m.a.createElement("div",{className:"custom-file"},m.a.createElement(p.a,{type:"file",className:"custom-file-input",id:"inputGroupFile01"}),m.a.createElement("label",{className:"custom-file-label",htmlFor:"inputGroupFile01"},"Choose file")))),m.a.createElement(s.a,null,m.a.createElement(i.a,{htmlFor:"helptext"},"Help Text"),m.a.createElement(p.a,{type:"text",name:"help",id:"helptext",placeholder:"Helping Text Here"}),m.a.createElement(h.a,{color:"muted"},"A block of help text that breaks onto a new line and may extend beyond one line.")))))),m.a.createElement(c.a,{md:"12"},m.a.createElement(E.a,null,m.a.createElement(o.a,{className:"bg-light border-bottom p-3 mb-0 text-white"},m.a.createElement("i",{className:"mdi mdi-book mr-2"}),"Highlighted Header Form"),m.a.createElement(d.a,{className:"bg-light"},m.a.createElement(o.a,{className:"mb-0"},"Person Info")),m.a.createElement(d.a,null,m.a.createElement(u.a,null,m.a.createElement(r.a,null,m.a.createElement(c.a,{md:"6"},m.a.createElement(s.a,null,m.a.createElement(i.a,null,"First Name"),m.a.createElement(p.a,{type:"text",placeholder:"Shaina nehwal"}),m.a.createElement(h.a,{className:"muted"},"This is inline help"))),m.a.createElement(c.a,{md:"6"},m.a.createElement(s.a,null,m.a.createElement(i.a,null,"Last Name"),m.a.createElement(p.a,{type:"text",placeholder:"12n"}),m.a.createElement(h.a,{className:"muted"},"This field has error.")))),m.a.createElement(r.a,null,m.a.createElement(c.a,{md:"6"},m.a.createElement(s.a,null,m.a.createElement(i.a,null,"Select Gender"),m.a.createElement(p.a,{type:"select",name:"Select Gender"},m.a.createElement("option",null,"Female"),m.a.createElement("option",null,"Male")),m.a.createElement(h.a,{className:"muted"},"Select your gender"))),m.a.createElement(c.a,{md:"6"},m.a.createElement(s.a,null,m.a.createElement(i.a,null,"Date of Birth"),m.a.createElement(p.a,{type:"date",placeholder:"DOB Here"})))),m.a.createElement(r.a,null,m.a.createElement(c.a,{md:"6"},m.a.createElement(s.a,null,m.a.createElement(i.a,null,"Category"),m.a.createElement(p.a,{type:"select",name:"Select Category"},m.a.createElement("option",null,"Category1"),m.a.createElement("option",null,"Category2"),m.a.createElement("option",null,"Category3"),m.a.createElement("option",null,"Category4"),m.a.createElement("option",null,"Category5")))),m.a.createElement(c.a,{md:"6"},m.a.createElement(s.a,null,m.a.createElement(i.a,null,"Membership"),m.a.createElement(b.a,{type:"radio",id:"exampleCustomRadio3",name:"customRadio",label:"Free"}),m.a.createElement(b.a,{type:"radio",id:"exampleCustomRadio4",name:"customRadio",label:"Paid"})))))),m.a.createElement(d.a,{className:"bg-light"},m.a.createElement(o.a,{className:"mb-0"},"Address")),m.a.createElement(d.a,null,m.a.createElement(r.a,null,m.a.createElement(c.a,{md:"12"},m.a.createElement(s.a,null,m.a.createElement(i.a,null,"Street"),m.a.createElement(p.a,{type:"text",placeholder:""}))),m.a.createElement(c.a,{md:"6"},m.a.createElement(s.a,null,m.a.createElement(i.a,null,"City"),m.a.createElement(p.a,{type:"text",placeholder:""}))),m.a.createElement(c.a,{md:"6"},m.a.createElement(s.a,null,m.a.createElement(i.a,null,"State"),m.a.createElement(p.a,{type:"text",placeholder:""}))),m.a.createElement(c.a,{md:"6"},m.a.createElement(s.a,null,m.a.createElement(i.a,null,"Post Code"),m.a.createElement(p.a,{type:"text",placeholder:""}))),m.a.createElement(c.a,{md:"6"},m.a.createElement(s.a,null,m.a.createElement(i.a,null,"Country"),m.a.createElement(p.a,{type:"select",name:"Select Category"},m.a.createElement("option",null,"--Select your Country--"),m.a.createElement("option",null,"India"),m.a.createElement("option",null,"Sri Lanka"),m.a.createElement("option",null,"USA")))))),m.a.createElement(d.a,{className:"border-top"},m.a.createElement(y.a,{type:"submit",className:"btn btn-success"}," ",m.a.createElement("i",{className:"fa fa-check"})," Save"),m.a.createElement(y.a,{type:"button",className:"btn btn-dark ml-2"},"Cancel")))),m.a.createElement(c.a,{md:"12"},m.a.createElement(E.a,null,m.a.createElement(o.a,{className:"bg-light border-bottom p-3 mb-0"},m.a.createElement("i",{className:"mdi mdi-book mr-2"}),"Horizontal Form"),m.a.createElement(d.a,null,m.a.createElement(s.a,null,m.a.createElement(r.a,null,m.a.createElement(i.a,{sm:"2"},"Text"),m.a.createElement(c.a,{sm:"10"},m.a.createElement(p.a,{type:"text",defaultValue:"Akhsay Kumar"})))),m.a.createElement(s.a,null,m.a.createElement(r.a,null,m.a.createElement(i.a,{sm:"2"},"Search"),m.a.createElement(c.a,{sm:"10"},m.a.createElement(p.a,{type:"text",defaultValue:"How do I shoot web"})))),m.a.createElement(s.a,null,m.a.createElement(r.a,null,m.a.createElement(i.a,{sm:"2"},"Email"),m.a.createElement(c.a,{sm:"10"},m.a.createElement(p.a,{type:"email",defaultValue:"react@example.com"})))),m.a.createElement(s.a,null,m.a.createElement(r.a,null,m.a.createElement(i.a,{sm:"2"},"URL"),m.a.createElement(c.a,{sm:"10"},m.a.createElement(p.a,{type:"url",defaultValue:"http://wrappixel.com"})))),m.a.createElement(s.a,null,m.a.createElement(r.a,null,m.a.createElement(i.a,{sm:"2"},"Telephone"),m.a.createElement(c.a,{sm:"10"},m.a.createElement(p.a,{type:"tel",defaultValue:"1-(555)-555-5555"})))),m.a.createElement(s.a,null,m.a.createElement(r.a,null,m.a.createElement(i.a,{sm:"2"},"Password"),m.a.createElement(c.a,{sm:"10"},m.a.createElement(p.a,{type:"password",defaultValue:"hunter2"})))),m.a.createElement(s.a,null,m.a.createElement(r.a,null,m.a.createElement(i.a,{sm:"2"},"Number"),m.a.createElement(c.a,{sm:"10"},m.a.createElement(p.a,{type:"number",defaultValue:"6029"})))),m.a.createElement(s.a,null,m.a.createElement(r.a,null,m.a.createElement(i.a,{sm:"2"},"Date and time"),m.a.createElement(c.a,{sm:"10"},m.a.createElement(p.a,{type:"datetime-local",defaultValue:"2011-08-19T13:45:00"})))),m.a.createElement(s.a,null,m.a.createElement(r.a,null,m.a.createElement(i.a,{sm:"2"},"Date"),m.a.createElement(c.a,{sm:"10"},m.a.createElement(p.a,{type:"date",defaultValue:"2011-08-19"})))),m.a.createElement(s.a,null,m.a.createElement(r.a,null,m.a.createElement(i.a,{sm:"2"},"Month"),m.a.createElement(c.a,{sm:"10"},m.a.createElement(p.a,{type:"month",defaultValue:"2011-08"})))),m.a.createElement(s.a,null,m.a.createElement(r.a,null,m.a.createElement(i.a,{sm:"2"},"Week"),m.a.createElement(c.a,{sm:"10"},m.a.createElement(p.a,{type:"week",defaultValue:"2011-W33"})))),m.a.createElement(s.a,null,m.a.createElement(r.a,null,m.a.createElement(i.a,{sm:"2"},"Time"),m.a.createElement(c.a,{sm:"10"},m.a.createElement(p.a,{type:"time",defaultValue:"13:45:00"})))),m.a.createElement(s.a,null,m.a.createElement(r.a,null,m.a.createElement(i.a,{sm:"2"},"Select"),m.a.createElement(c.a,{sm:"10"},m.a.createElement(p.a,{type:"select",name:"Select Category"},m.a.createElement("option",null,"Choose..."),m.a.createElement("option",null,"One"),m.a.createElement("option",null,"Two"),m.a.createElement("option",null,"Three"))))),m.a.createElement(s.a,null,m.a.createElement(r.a,null,m.a.createElement(i.a,{sm:"2"},"Color"),m.a.createElement(c.a,{sm:"10"},m.a.createElement(p.a,{type:"color",defaultValue:"#563d7c"})))),m.a.createElement(s.a,null,m.a.createElement(r.a,null,m.a.createElement(i.a,{sm:"2"},"Input Range"),m.a.createElement(c.a,{sm:"10"},m.a.createElement(p.a,{type:"range",defaultValue:"50"}))))))),m.a.createElement(c.a,{md:"12"},m.a.createElement(E.a,null,m.a.createElement(o.a,{className:"bg-light border-bottom p-3 mb-0"},m.a.createElement("i",{className:"mdi mdi-book mr-2"}),"Input Groups"),m.a.createElement(d.a,null,m.a.createElement(s.a,null,m.a.createElement(x.a,null,m.a.createElement(g.a,{addonType:"prepend"},"@"),m.a.createElement(p.a,{placeholder:"Username"}))),m.a.createElement(s.a,null,m.a.createElement(x.a,null,m.a.createElement(p.a,{placeholder:"Recipient's username"}),m.a.createElement(g.a,{addonType:"append"},"@example.com"))),m.a.createElement(s.a,null,m.a.createElement(x.a,null,m.a.createElement(g.a,{addonType:"prepend"},"https://example.com/users"),m.a.createElement(p.a,{type:"text"}))),m.a.createElement(s.a,null,m.a.createElement(x.a,null,m.a.createElement(g.a,{addonType:"prepend"},"$"),m.a.createElement(p.a,{placeholder:"",type:"text"}),m.a.createElement(g.a,{addonType:"append"},".00"))),m.a.createElement(s.a,null,m.a.createElement(x.a,null,m.a.createElement(g.a,{addonType:"prepend"},m.a.createElement(k.a,null,"$"),m.a.createElement(k.a,null,"0.00")),m.a.createElement(p.a,{placeholder:"",type:"text"}))),m.a.createElement(s.a,null,m.a.createElement(i.a,null,"Checkboxes and radio addons"),m.a.createElement(r.a,null,m.a.createElement(c.a,{md:"6"},m.a.createElement(x.a,null,m.a.createElement(g.a,{addonType:"prepend"},m.a.createElement(k.a,null,m.a.createElement(p.a,{addon:!0,type:"checkbox","aria-label":"Checkbox for following text input"}))),m.a.createElement(p.a,{placeholder:""}))),m.a.createElement(c.a,{md:"6"},m.a.createElement(x.a,null,m.a.createElement(g.a,{addonType:"prepend"},m.a.createElement(k.a,null,m.a.createElement(p.a,{addon:!0,type:"radio","aria-label":"Checkbox for following text input"}))),m.a.createElement(p.a,{placeholder:""}))))),m.a.createElement(s.a,null,m.a.createElement(i.a,null,"Multiple addons"),m.a.createElement(r.a,null,m.a.createElement(c.a,{md:"6"},m.a.createElement(x.a,null,m.a.createElement(g.a,{addonType:"prepend"},m.a.createElement(k.a,null,m.a.createElement(p.a,{addon:!0,type:"checkbox","aria-label":"Checkbox for following text input"})),m.a.createElement(k.a,null,"0.00")),m.a.createElement(p.a,{placeholder:""}))),m.a.createElement(c.a,{md:"6"},m.a.createElement(x.a,null,m.a.createElement(g.a,{addonType:"prepend"},m.a.createElement(k.a,null,"$"),m.a.createElement(k.a,null,"0.00")),m.a.createElement(p.a,{placeholder:""}))))),m.a.createElement(s.a,null,m.a.createElement(i.a,null,"Button addons"),m.a.createElement(r.a,null,m.a.createElement(c.a,{md:"6"},m.a.createElement(x.a,null,m.a.createElement(g.a,{addonType:"prepend"},m.a.createElement(y.a,{color:"primary"},"Go!")),m.a.createElement(p.a,{placeholder:""}))),m.a.createElement(c.a,{md:"6"},m.a.createElement(x.a,null,m.a.createElement(p.a,{placeholder:""}),m.a.createElement(g.a,{addonType:"append"},m.a.createElement(y.a,{color:"primary"},"Go!")))))),m.a.createElement(s.a,null,m.a.createElement(x.a,null,m.a.createElement(g.a,{addonType:"prepend"},m.a.createElement(y.a,{color:"danger"},"Hate It")),m.a.createElement(p.a,{placeholder:""}),m.a.createElement(g.a,{addonType:"append"},m.a.createElement(y.a,{color:"success"},"Love It")))),m.a.createElement(s.a,null,m.a.createElement(i.a,null,"Dropdown addons"),m.a.createElement(x.a,null,m.a.createElement(f.a,{addonType:"prepend",isOpen:t,toggle:function(){v(!t)}.bind(null)},m.a.createElement(w.a,{caret:!0},"Dropdown"),m.a.createElement(C.a,null,m.a.createElement(N.a,{header:!0},"Header"),m.a.createElement(N.a,{disabled:!0},"Action"),m.a.createElement(N.a,null,"Another Action"),m.a.createElement(N.a,{divider:!0}),m.a.createElement(N.a,null,"Another Action"))),m.a.createElement(p.a,{placeholder:""}),m.a.createElement(f.a,{addonType:"append",isOpen:P,toggle:function(){O(!P)}.bind(null)},m.a.createElement(w.a,{caret:!0},"Dropdown"),m.a.createElement(C.a,null,m.a.createElement(N.a,{header:!0},"Header"),m.a.createElement(N.a,{disabled:!0},"Action"),m.a.createElement(N.a,null,"Another Action"),m.a.createElement(N.a,{divider:!0}),m.a.createElement(N.a,null,"Another Action")))))))),m.a.createElement(c.a,{md:"12"},m.a.createElement(E.a,null,m.a.createElement(o.a,{className:"bg-light border-bottom p-3 mb-0"},m.a.createElement("i",{className:"mdi mdi-book mr-2"}),"Input States"),m.a.createElement(d.a,null,m.a.createElement(r.a,null,m.a.createElement(c.a,{md:"6"},m.a.createElement(s.a,null,m.a.createElement(i.a,{htmlFor:"exampleEmail"},"Input with success"),m.a.createElement(p.a,{valid:!0}),m.a.createElement(T.a,{valid:!0},"Success! You've done it.")),m.a.createElement(s.a,null,m.a.createElement(i.a,{htmlFor:"examplePassword"},"Input with danger"),m.a.createElement(p.a,{invalid:!0}),m.a.createElement(T.a,null,"Sorry, that username's taken. Try another?")),m.a.createElement(s.a,null,m.a.createElement(r.a,null,m.a.createElement(i.a,{sm:"2"},"Email"),m.a.createElement(c.a,{sm:"10"},m.a.createElement(p.a,{valid:!0,placeholder:"name@example.com"}),m.a.createElement(T.a,{valid:!0},"Success! You've done it.")))),m.a.createElement(s.a,null,m.a.createElement(r.a,null,m.a.createElement(i.a,{sm:"2"},"Email"),m.a.createElement(c.a,{sm:"10"},m.a.createElement(p.a,{invalid:!0,placeholder:"name@example.com"}),m.a.createElement(T.a,null,"Sorry, that username's taken. Try another?")))),m.a.createElement(s.a,null,m.a.createElement(i.a,{htmlFor:"exampleEmail"},"Valid input"),m.a.createElement(p.a,{valid:!0}),m.a.createElement(T.a,{valid:!0,tooltip:!0},"Sweet! that name is available"),m.a.createElement(h.a,null,"Example help text that remains unchanged.")),m.a.createElement(s.a,null,m.a.createElement(i.a,{className:"mt-3",htmlFor:"examplePassword"},"Invalid input"),m.a.createElement(p.a,{invalid:!0}),m.a.createElement(T.a,{tooltip:!0},"Oh noes! that name is already taken"),m.a.createElement(h.a,null,"Example help text that remains unchanged."))),m.a.createElement(c.a,{md:"6"},m.a.createElement(s.a,null,m.a.createElement(i.a,null,"Large"),m.a.createElement(p.a,{placeholder:"lg size",bsSize:"lg"})),m.a.createElement(s.a,null,m.a.createElement(i.a,null,"Default"),m.a.createElement(p.a,{placeholder:"default size"})),m.a.createElement(s.a,null,m.a.createElement(i.a,null,"Small"),m.a.createElement(p.a,{placeholder:"sm size",bsSize:"sm"})),m.a.createElement(s.a,null,m.a.createElement(i.a,null,"Grid Size"),m.a.createElement(r.a,null,m.a.createElement(c.a,{md:"4"},m.a.createElement(p.a,{placeholder:"Col-4"})),m.a.createElement(c.a,{md:"8"},m.a.createElement(p.a,{placeholder:"Col-8"}))))))))),m.a.createElement(c.a,{md:"12"},m.a.createElement(E.a,null,m.a.createElement(o.a,{className:"bg-light border-bottom p-3 mb-0"},m.a.createElement("i",{className:"mdi mdi-book mr-2"}),"Disabled Form"),m.a.createElement(d.a,null,m.a.createElement(u.a,null,m.a.createElement(s.a,null,m.a.createElement(i.a,{htmlFor:"exampleEmail1"},"Disabled input"),m.a.createElement(p.a,{type:"email",name:"email",id:"exampleEmail1",placeholder:"Email address Here",disabled:!0}),m.a.createElement(h.a,{color:"muted"},"We'll never share your email with anyone else.")),m.a.createElement(s.a,null,m.a.createElement(i.a,{htmlFor:"examplePassword"},"Disabled Password"),m.a.createElement(p.a,{type:"password",name:"password",id:"examplePassword",placeholder:"Password Here",disabled:!0})),m.a.createElement(s.a,{className:"mb-3",check:!0,disabled:!0},m.a.createElement(i.a,{check:!0},m.a.createElement(p.a,{type:"checkbox",name:"check1",disabled:!0})," ","Check Me Out !")),m.a.createElement(y.a,{color:"primary",disabled:!0},"Submit"))))),m.a.createElement(c.a,{md:"12"},m.a.createElement(E.a,null,m.a.createElement(o.a,{className:"bg-light border-bottom p-3 mb-0"},m.a.createElement("i",{className:"mdi mdi-book mr-2"}),"Readonly Form"),m.a.createElement(d.a,null,m.a.createElement(u.a,null,m.a.createElement(s.a,null,m.a.createElement(i.a,null,"Name"),m.a.createElement(p.a,{type:"text",placeholder:"Full Name Here",readOnly:!0})),m.a.createElement(s.a,null,m.a.createElement(i.a,null,"Email"),m.a.createElement(p.a,{type:"email",readOnly:!0,id:"staticEmail",defaultValue:"email@example.com"})),m.a.createElement(s.a,null,m.a.createElement(i.a,null,"Password"),m.a.createElement(p.a,{type:"password",defaultValue:"ilikeios",readOnly:!0})),m.a.createElement(y.a,{color:"primary",disabled:!0},"Submit"))))),m.a.createElement(c.a,{md:"6"},m.a.createElement(E.a,null,m.a.createElement(o.a,{className:"bg-light border-bottom p-3 mb-0"},m.a.createElement("i",{className:"mdi mdi-book mr-2"}),"Form with Left Icon"),m.a.createElement(d.a,null,m.a.createElement(u.a,null,m.a.createElement(s.a,null,m.a.createElement(i.a,null,"Username"),m.a.createElement(x.a,null,m.a.createElement(g.a,{addonType:"prepend"},m.a.createElement(k.a,null,m.a.createElement("i",{className:"ti-user"}))),m.a.createElement(p.a,{type:"text",placeholder:"Username"}))),m.a.createElement(s.a,null,m.a.createElement(i.a,null,"Email"),m.a.createElement(x.a,null,m.a.createElement(g.a,{addonType:"prepend"},m.a.createElement(k.a,null,m.a.createElement("i",{className:"ti-email"}))),m.a.createElement(p.a,{type:"email",placeholder:"Email"}))),m.a.createElement(s.a,null,m.a.createElement(i.a,null,"Password"),m.a.createElement(x.a,null,m.a.createElement(g.a,{addonType:"prepend"},m.a.createElement(k.a,null,m.a.createElement("i",{className:"ti-lock"}))),m.a.createElement(p.a,{type:"password",placeholder:"Password"}))),m.a.createElement(s.a,null,m.a.createElement(i.a,null,"Confirm Password"),m.a.createElement(x.a,null,m.a.createElement(g.a,{addonType:"prepend"},m.a.createElement(k.a,null,m.a.createElement("i",{className:"ti-lock"}))),m.a.createElement(p.a,{type:"password",placeholder:"Confirm Password"}))),m.a.createElement(s.a,null,m.a.createElement(b.a,{type:"checkbox",id:"exampleCustomCheckbox11",label:"Remember Me!"})),m.a.createElement("div",{className:"border-top pt-3 mt-3"},m.a.createElement(y.a,{type:"submit",className:"btn btn-success mr-2"},"Submit"),m.a.createElement(y.a,{type:"submit",className:"btn btn-dark"},"Cancel")))))),m.a.createElement(c.a,{md:"6"},m.a.createElement(E.a,null,m.a.createElement(o.a,{className:"bg-light border-bottom p-3 mb-0"},m.a.createElement("i",{className:"mdi mdi-book mr-2"}),"Form with Right Icon"),m.a.createElement(d.a,null,m.a.createElement(u.a,null,m.a.createElement(s.a,null,m.a.createElement(i.a,null,"Username"),m.a.createElement(x.a,null,m.a.createElement(p.a,{type:"text",placeholder:"Username"}),m.a.createElement(g.a,{addonType:"append"},m.a.createElement(k.a,null,m.a.createElement("i",{className:"ti-user"}))))),m.a.createElement(s.a,null,m.a.createElement(i.a,null,"Email"),m.a.createElement(x.a,null,m.a.createElement(p.a,{type:"email",placeholder:"Email"}),m.a.createElement(g.a,{addonType:"append"},m.a.createElement(k.a,null,m.a.createElement("i",{className:"ti-email"}))))),m.a.createElement(s.a,null,m.a.createElement(i.a,null,"Password"),m.a.createElement(x.a,null,m.a.createElement(p.a,{type:"password",placeholder:"Password"}),m.a.createElement(g.a,{addonType:"append"},m.a.createElement(k.a,null,m.a.createElement("i",{className:"ti-lock"}))))),m.a.createElement(s.a,null,m.a.createElement(i.a,null,"Confirm Password"),m.a.createElement(x.a,null,m.a.createElement(p.a,{type:"password",placeholder:"Confirm Password"}),m.a.createElement(g.a,{addonType:"append"},m.a.createElement(k.a,null,m.a.createElement("i",{className:"ti-lock"}))))),m.a.createElement(s.a,null,m.a.createElement(b.a,{type:"checkbox",id:"exampleCustomCheckbox12",label:"Remember Me!"})),m.a.createElement("div",{className:"border-top pt-3 mt-3"},m.a.createElement(y.a,{type:"submit",className:"btn btn-success mr-2"},"Submit"),m.a.createElement(y.a,{type:"submit",className:"btn btn-dark"},"Cancel"))))))))}}}]);
//# sourceMappingURL=64.02c0866e.chunk.js.map
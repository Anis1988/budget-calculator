(this["webpackJsonpbudget-calculator"]=this["webpackJsonpbudget-calculator"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(7),l=a.n(r),o=(a(14),a(8)),m=a(5),u=a(2),s=(a(15),a(1));function i(e){var t=e.charge,a=e.amount,n=e.handleSubmit,r=e.handleAmount,l=e.handleCharge,o=e.edit;return c.a.createElement("form",{onSubmit:n},c.a.createElement("div",{className:"form-center"},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"charge"},"Charge"),c.a.createElement("input",{type:"text",className:"form-control",id:"charge",name:"charge",placeholder:"e.g. rent",value:t,onChange:l})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"amount"},"Amount"),c.a.createElement("input",{type:"number",className:"form-control",id:"amount",name:"amount",placeholder:"e.g. 100",value:a,onChange:r}))),c.a.createElement("button",{className:"btn",type:"submit"},o?"edit":"submit",c.a.createElement(s.c,null)))}function d(e){var t=e.expense,a=e.handleDelete,n=e.handleEdit,r=t.id,l=t.charge,o=t.amount;return c.a.createElement("li",{className:"item"},c.a.createElement("div",{className:"info"},c.a.createElement("span",{className:"expense"},l),c.a.createElement("span",{className:"amount"},"$ ",o)),c.a.createElement("div",null,c.a.createElement("button",{className:"edit-btn","arial-label":"edit button"},c.a.createElement(s.b,{onClick:function(){return n(r)}})),c.a.createElement("button",{className:"clear-btn","arial-label":"delete button"},c.a.createElement(s.a,{onClick:function(){return a(r)}}))))}function h(e){var t=e.expenses,a=e.clearItems,n=e.handleDelete,r=e.handleEdit;return c.a.createElement(c.a.Fragment,null,c.a.createElement("ul",{className:"list"},t.map((function(e){return c.a.createElement(d,{expense:e,key:e.id,handleDelete:n,handleEdit:r})}))),t.length>0&&c.a.createElement("button",{className:"btn",onClick:a},"Clear Expense",c.a.createElement(s.a,{className:"btn-icon"})))}function b(e){var t=e.type,a=e.text;return c.a.createElement("div",{className:"alert alert-".concat(t)},a)}var f=a(18);var g=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(""),s=Object(u.a)(l,2),d=s[0],g=s[1],p=Object(n.useState)(""),E=Object(u.a)(p,2),v=E[0],O=E[1],N=Object(n.useState)({show:!1}),j=Object(u.a)(N,2),x=j[0],y=j[1],w=Object(n.useState)(!1),S=Object(u.a)(w,2),I=S[0],C=S[1],k=Object(n.useState)(0),D=Object(u.a)(k,2),A=D[0],F=D[1];Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("whateverman"));e&&r(e)}),[]),Object(n.useEffect)((function(){localStorage.setItem("whateverman",JSON.stringify(a))}),[a]);var J=function(e){var t=e.type,a=e.text;y({show:!0,type:t,text:a}),setTimeout((function(){y({show:!1})}),3e3)};return c.a.createElement(c.a.Fragment,null,x.show&&c.a.createElement(b,{type:x.type,text:x.text}),c.a.createElement("h1",null,"budget calculator"),c.a.createElement("main",{className:"App"},c.a.createElement(i,{charge:d,amount:v,handleSubmit:function(e){if(e.preventDefault(),""!==d&&v>0){if(I){var t=Object(m.a)(a).map((function(e){return e.id===A?Object(o.a)({},e,{charge:d,amount:v}):e}));r(t),C(!1),J({type:"success",text:"Item edit to charge ".concat(d," and amount of ").concat(v)})}else{var n={id:Object(f.a)(),charge:d,amount:v};r([].concat(Object(m.a)(a),[n])),J({type:"success",text:"Item Added"})}g(""),O("")}else J({type:"danger",text:"charge can't be empty value and amount value hast to be bigger than zero "})},handleAmount:function(e){O(e.target.value)},handleCharge:function(e){g(e.target.value)},edit:I}),c.a.createElement(h,{expenses:a,clearItems:function(){r([]),J({type:"danger",text:"All Item Deleted"})},handleDelete:function(e){var t=Object(m.a)(a).filter((function(t){return t.id!==e}));r(t),J({type:"danger",text:"Item is Deleted"})},handleEdit:function(e){var t=a.find((function(t){return t.id===e}));g(t.charge),O(t.amount),C(!0),F(e)}})),c.a.createElement("h1",null,"total spending: ",c.a.createElement("span",{className:"total"},"$",a.reduce((function(e,t){return e+parseInt(t.amount)}),0))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.9cf7fbf7.chunk.js.map
(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{12:function(e,a,c){},14:function(e,a,c){"use strict";c.r(a);var t=c(6),n=c.n(t),i=c(7),l=c(5),r=c(1);c(12);var s=c(0),o=function(e){var a=e.items,c=e.currentPage,t=e.handlePageChange,n=e.totalPages;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("ul",{className:"pagination",children:[Object(s.jsx)("li",{className:"page-item ".concat(1===c?"disabled":""),children:Object(s.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":1===c,onClick:function(){return t(c-1)},children:"\xab"})}),Array.from({length:n},(function(e,a){return Object(s.jsx)("li",{className:"page-item ".concat(c===a+1?"active":""),children:Object(s.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#".concat(a+1),onClick:function(){return t(a+1)},children:a+1})},a)})),Object(s.jsx)("li",{className:"page-item ".concat(c===n?"disabled":""),children:Object(s.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":c===n,onClick:function(){return t(c+1)},children:"\xbb"})})]}),Object(s.jsx)("ul",{children:a.map((function(e){return Object(s.jsx)("li",{"data-cy":"item",children:"Item ".concat(e)},e)}))})]})},j=function(e,a){for(var c=[],t=e;t<=a;t+=1)c.push(t);return c}(1,42).map((function(e){return e})),d=function(){var e=Object(r.useState)(5),a=Object(l.a)(e,2),c=a[0],t=a[1],n=Object(r.useState)(1),d=Object(l.a)(n,2),h=d[0],u=d[1],b=(h-1)*c,g=b+c>j.length?j.length:b+c,m=Object(i.a)(j).slice(b,g),p=Math.ceil(j.length/c);return Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("h1",{children:"Items with Pagination"}),Object(s.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(h," (items ").concat(b+1," - ").concat(g," of ").concat(j.length,")")}),Object(s.jsxs)("div",{className:"form-group row",children:[Object(s.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(s.jsxs)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",onChange:function(e){var a=+e.target.value;t(a),u(1)},value:c,children:[Object(s.jsx)("option",{value:"3",children:"3"}),Object(s.jsx)("option",{value:"5",children:"5"}),Object(s.jsx)("option",{value:"10",children:"10"}),Object(s.jsx)("option",{value:"20",children:"20"})]})}),Object(s.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(s.jsx)(o,{items:m,currentPage:h,handlePageChange:function(e){u(e)},totalPages:p})]})};n.a.render(Object(s.jsx)(d,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.477630bd.chunk.js.map
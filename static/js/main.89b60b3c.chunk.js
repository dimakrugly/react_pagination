(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{13:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var c=t(7),n=t.n(c),r=t(8),i=t(6),l=t(1);t(13);var s=t(4),o=t.n(s),j=t(0),u=function(e){var a=e.total,t=e.perPage,c=e.currentPage,n=e.onPageChange,r=Math.ceil(a/t),i=Array.from({length:r},(function(e,a){return a+1}));return Object(j.jsxs)("ul",{className:"pagination",children:[Object(j.jsx)("li",{className:o()("page-item",{disabled:1===c}),children:Object(j.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":c<=1,onClick:function(){return n(c-1)},children:"\xab"})}),i.map((function(e){return Object(j.jsx)("li",{className:o()("page-item",{active:e===c}),children:Object(j.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#".concat(e),onClick:function(){return n(e)},children:e})},e)})),Object(j.jsx)("li",{className:o()("page-item",{disabled:c>=r}),children:Object(j.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":c===r,onClick:function(){return n(c+1)},children:"\xbb"})})]})},d=function(e,a){for(var t=[],c=e;c<=a;c+=1)t.push(c);return t}(1,42).map((function(e){return e})),h=[3,5,10,20],g=function(){var e=Object(l.useState)(5),a=Object(i.a)(e,2),t=a[0],c=a[1],n=Object(l.useState)(1),s=Object(i.a)(n,2),o=s[0],g=s[1],m=(o-1)*t,b=m+t>d.length?d.length:m+t,p=Object(r.a)(d).slice(m,b);return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{children:"Items with Pagination"}),Object(j.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(o," (items ").concat(m+1," - ").concat(b," of ").concat(d.length,")")}),Object(j.jsxs)("div",{className:"form-group row",children:[Object(j.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(j.jsx)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",onChange:function(e){var a=+e.target.value;c(a),g(1)},value:t,children:h.map((function(e){return Object(j.jsx)("option",{value:e,children:e})}))})}),Object(j.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(j.jsx)(u,{total:d.length,perPage:t,currentPage:o,onPageChange:function(e){e>=1&&e<=Math.ceil(d.length/t)&&e!==o&&g(e)}}),Object(j.jsx)("ul",{children:p.map((function(e){return Object(j.jsx)("li",{"data-cy":"item",children:"Item ".concat(e)},e)}))})]})};n.a.render(Object(j.jsx)(g,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.89b60b3c.chunk.js.map
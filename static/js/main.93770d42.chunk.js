(this.webpackJsonptoolbox=this.webpackJsonptoolbox||[]).push([[0],{86:function(e,t,c){},97:function(e,t,c){},98:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),a=c(27),s=c.n(a),i=(c(86),c(34)),j=c(14),l=c(6);function b(){return Object(l.jsx)("div",{className:"m-8 ",children:Object(l.jsx)("ul",{children:Object(l.jsx)("li",{children:Object(l.jsx)(i.b,{to:"/priviate/createWord",children:"\u5355\u8bcd\u751f\u6210\u9875\u9762"})})})})}function o(){return Object(l.jsx)("div",{className:"m-8 ",children:Object(l.jsx)("ul",{children:Object(l.jsx)("li",{children:Object(l.jsx)(i.b,{to:"/public/roll",children:"A\u7ad9\u62bd\u5956\u5de5\u5177"})})})})}var d=c(43);function x(){return console.log(12),Object(l.jsxs)("div",{className:"",children:[Object(l.jsxs)("div",{className:"text-center",children:[Object(l.jsx)("h1",{className:"pt-10",children:"A\u7ad9\u62bd\u5956\u5de5\u5177"}),Object(l.jsx)(d.a,{type:"primary",children:"Primary Button"})]}),Object(l.jsxs)("div",{className:"flex",children:[Object(l.jsx)(O,{}),Object(l.jsx)(h,{})]})]})}function O(){return Object(l.jsx)("div",{className:"w-2/4",children:"OperationArea"})}function h(){return Object(l.jsx)("div",{className:"w-2/4",children:"DisplayArea"})}var u=c(63),v=c(62),f=c(56),p=c(70),m=c.n(p),N=c(102),g=c(101),y=c(104),w=N.a.TextArea,S="#B4FFEB";function F(){var e=Object(n.useState)([]),t=Object(f.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(),s=Object(f.a)(a,2),i=s[0],j=s[1],b=Object(n.useState)(),o=Object(f.a)(b,2),x=o[0],O=o[1],h={name:"file",showUploadList:!1,beforeUpload:function(e){return function(e,t){m.a.parse(e,{complete:function(e){t(function(e){var t,c=[],n=Object(v.a)(e.data);try{for(n.s();!(t=n.n()).done;){var r=t.value;r[3]===S&&c.push(r[6])}}catch(a){n.e(a)}finally{n.f()}return c}(e))},error:function(e){console.error(e)}})}(e,p),!1}};Object(n.useEffect)((function(){var e=localStorage.getItem("words");j(e)}),[]);var p=function(e){r(e)};return Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"flex pt-20",children:[Object(l.jsx)("div",{className:"flex flex-1 justify-center",children:Object(l.jsx)(g.a,Object(u.a)(Object(u.a)({},h),{},{children:Object(l.jsx)(d.a,{icon:Object(l.jsx)(y.a,{}),children:"\u4e0a\u4f20csv"})}))}),Object(l.jsx)("div",{className:"flex flex-1",children:Object(l.jsx)("div",{className:"w-4/5",children:Object(l.jsx)(w,{rows:8,onChange:function(e){j(e.target.value)},value:i})})})]}),Object(l.jsxs)("div",{className:"text-center pt-20",children:[Object(l.jsx)(d.a,{onClick:function(){var e,t=c.slice(),n=i.split("\n"),r=Object(v.a)(n);try{for(r.s();!(e=r.n()).done;){var a=e.value;t.push(a.trim())}}catch(j){r.e(j)}finally{r.f()}var s=t.join(" ");O(s),localStorage.setItem("words",s)},type:"primary",children:"\u751f\u6210"}),Object(l.jsx)("div",{className:"pt-20 w-2/4 m-auto",children:Object(l.jsx)(w,{rows:8,value:x,disabled:!0})})]})]})}c(97);var A=function(){return Object(l.jsx)("div",{className:"h-screen",children:Object(l.jsx)(i.a,{children:Object(l.jsxs)(j.c,{children:[Object(l.jsxs)(j.a,{exact:!0,path:"/",children:[Object(l.jsx)("div",{children:Object(l.jsx)(i.b,{to:"public",children:"public"})}),Object(l.jsx)("div",{children:Object(l.jsx)(i.b,{to:"private",children:"private"})})]}),Object(l.jsx)(j.a,{exact:!0,path:"/public",children:Object(l.jsx)(o,{})}),Object(l.jsx)(j.a,{exact:!0,path:"/private",children:Object(l.jsx)(b,{})}),Object(l.jsx)(j.a,{exact:!0,path:"/public/roll",children:Object(l.jsx)(x,{})}),Object(l.jsx)(j.a,{exact:!0,path:"/priviate/createWord",children:Object(l.jsx)(F,{})})]})})})},B=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,105)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),r(e),a(e),s(e)}))};s.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(A,{})}),document.getElementById("root")),B()}},[[98,1,2]]]);
//# sourceMappingURL=main.93770d42.chunk.js.map
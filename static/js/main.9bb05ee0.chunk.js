(this.webpackJsonptoolbox=this.webpackJsonptoolbox||[]).push([[0],{121:function(e,t,c){},122:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c.n(s),r=c(48),j=c.n(r),a=(c(85),c(35)),i=c(10),l=c(5);function b(){return Object(l.jsx)("div",{className:"m-8 ",children:Object(l.jsx)("ul",{children:Object(l.jsx)("li",{children:Object(l.jsx)(a.b,{to:"/private/createWord",children:"\u5355\u8bcd\u751f\u6210\u9875\u9762"})})})})}function d(){return Object(l.jsx)("div",{className:"m-8 ",children:Object(l.jsx)("ul",{children:Object(l.jsx)("li",{children:Object(l.jsx)(a.b,{to:"/public/roll",children:"A\u7ad9\u62bd\u5956\u5de5\u5177"})})})})}var o=c(77);function x(){return console.log(12),Object(l.jsxs)("div",{className:"",children:[Object(l.jsxs)("div",{className:"text-center",children:[Object(l.jsx)("h1",{className:"pt-10",children:"A\u7ad9\u62bd\u5956\u5de5\u5177"}),Object(l.jsx)(o.a,{type:"primary",children:"Primary Button"})]}),Object(l.jsxs)("div",{className:"flex",children:[Object(l.jsx)(h,{}),Object(l.jsx)(O,{})]})]})}function h(){return Object(l.jsx)("div",{className:"w-2/4",children:"OperationArea"})}function O(){return Object(l.jsx)("div",{className:"w-2/4",children:"DisplayArea"})}var u=c(72),p=c.n(u),v=c(125);const{TextArea:m}=v.a;function f(){const[e,t]=Object(s.useState)(),[c,n]=Object(s.useState)([]);Object(s.useEffect)((()=>{const e=localStorage.getItem("words");t(e)}),[]);return console.log(1),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"flex pt-20",children:Object(l.jsx)("div",{className:"flex flex-1 justify-center",children:Object(l.jsx)("div",{className:"w-4/5",children:Object(l.jsx)(m,{rows:8,onChange:e=>{t(e.target.value)},value:e})})})}),Object(l.jsxs)("div",{className:"text-center pt-20",children:[Object(l.jsx)(o.a,{onClick:()=>{const t=new Map,c=e.replaceAll("\n"," ").split(" ");p.a.each(c,(e=>{t.set(e.toLowerCase(),1)}));const s=Array.from(t.keys());n(s),localStorage.setItem("words",s.join(" "))},type:"primary",children:"\u751f\u6210"}),Object(l.jsx)("div",{className:"pt-20 w-2/4 m-auto",children:Object(l.jsx)(m,{rows:8,value:c.join(" "),disabled:!0})}),Object(l.jsxs)("span",{children:["\u5171\u8ba1",c.length,"\u4e2a\u5355\u8bcd"]})]})]})}c(121);var g=function(){return Object(l.jsx)("div",{className:"h-screen",children:Object(l.jsx)(a.a,{children:Object(l.jsxs)(i.c,{children:[Object(l.jsxs)(i.a,{exact:!0,path:"/",children:[Object(l.jsx)("div",{children:Object(l.jsx)(a.b,{to:"public",children:"public"})}),Object(l.jsx)("div",{children:Object(l.jsx)(a.b,{to:"private",children:"private"})})]}),Object(l.jsx)(i.a,{exact:!0,path:"/public",children:Object(l.jsx)(d,{})}),Object(l.jsx)(i.a,{exact:!0,path:"/private",children:Object(l.jsx)(b,{})}),Object(l.jsx)(i.a,{exact:!0,path:"/public/roll",children:Object(l.jsx)(x,{})}),Object(l.jsx)(i.a,{exact:!0,path:"/private/createWord",children:Object(l.jsx)(f,{})})]})})})};var N=e=>{e&&e instanceof Function&&c.e(3).then(c.bind(null,126)).then((t=>{let{getCLS:c,getFID:s,getFCP:n,getLCP:r,getTTFB:j}=t;c(e),s(e),n(e),r(e),j(e)}))};j.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(g,{})}),document.getElementById("root")),N()},85:function(e,t,c){}},[[122,1,2]]]);
//# sourceMappingURL=main.9bb05ee0.chunk.js.map
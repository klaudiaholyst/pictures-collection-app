(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{15:function(e,t,a){e.exports={PicturesCollection:"PicturesCollection_PicturesCollection__ZlyZZ",Button:"PicturesCollection_Button__1EENh"}},21:function(e,t,a){e.exports={Header:"Header_Header__sVGB1",Title:"Header_Title__2jki1"}},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(0),s=a.n(c),l=a(20),i=a.n(l),o=(a(28),a(2)),r=(a(29),a(21)),j=a.n(r),u=function(){return Object(n.jsx)("header",{className:j.a.Header,children:Object(n.jsx)("h1",{className:"Title",children:"M\xf3j Album"})})},d=a(8),b=a(12),p=(a(30),a.p+"static/media/heart-solid.7857d8ab.svg"),m=function(){var e=Object(c.useState)([]),t=Object(b.a)(e,2),a=t[0],s=t[1];return Object(c.useEffect)((function(){fetch("data.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){s(e)}))}),[]),a&&a.length>0&&a.map((function(e){return Object(n.jsxs)("article",{className:"Article",children:[Object(n.jsx)("img",{className:"Picture",src:e.url,alt:e.name}),Object(n.jsxs)("p",{className:"P",children:["Miejsce wykonania: ",e.place]}),Object(n.jsxs)("p",{className:"P",children:["Data: ",e.date]}),Object(n.jsxs)("p",{className:"P",children:["Tagi: ",e.tags]}),Object(n.jsx)("img",{src:p,className:"Heart",alt:"heart"})]},e.id)}))},h=a(15),O=a.n(h),x=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(d.b,{to:"/new-post",style:{textDecoration:"none"},className:O.a.Button,children:"Dodaj nowe"}),Object(n.jsx)("main",{className:O.a.PicturesCollection,children:Object(n.jsx)(m,{})}),";"]})},N=a(11),_=a(18),f=a(4),g=a.n(f),v=function(){var e=Object(c.useState)({id:(new Date).getTime(),name:"",url:"",date:"",place:"",tags:""}),t=Object(b.a)(e,2),a=t[0],s=t[1],l=function(e){var t=e.target.value;s((function(a){return Object(_.a)(Object(_.a)({},a),{},Object(N.a)({},e.target.name,t))}))};return Object(n.jsxs)("form",{className:g.a.Form,onSubmit:function(e){e.preventDefault(),console.log(a)},children:[Object(n.jsx)("button",{className:g.a.Button,type:"submit",children:"Zapisz"}),Object(n.jsx)(d.b,{to:"/",children:Object(n.jsx)("button",{className:g.a.Button,children:"Anuluj"})}),Object(n.jsxs)("div",{className:g.a.Option,children:[Object(n.jsx)("label",{className:g.a.Label,htmlFor:"name",children:"Nazwa"}),Object(n.jsx)("input",{className:g.a.Input,type:"text",name:"name",id:"name",value:a.name,onChange:l,required:!0})]}),Object(n.jsxs)("div",{className:g.a.Option,children:[Object(n.jsx)("label",{className:g.a.Label,htmlFor:"url",children:"URL"}),Object(n.jsx)("input",{className:g.a.Input,type:"text",name:"url",id:"url",onChange:l,required:!0,value:a.url})]}),Object(n.jsxs)("div",{className:g.a.Option,children:[Object(n.jsx)("label",{className:g.a.Label,htmlFor:"date",children:"Data"}),Object(n.jsx)("input",{className:g.a.Input,type:"date",name:"date",id:"date",placeholder:"",required:!0,onChange:l,value:a.date})]}),Object(n.jsxs)("div",{className:g.a.Option,children:[Object(n.jsx)("label",{className:g.a.Label,htmlFor:"place",children:"Miejsce"}),Object(n.jsx)("input",{className:g.a.Input,type:"text",name:"place",id:"place",onChange:l,required:!0,value:a.place})]}),Object(n.jsxs)("div",{className:g.a.Option,children:[Object(n.jsx)("label",{className:g.a.Label,htmlFor:"tags",children:"Tagi"}),Object(n.jsx)("input",{className:g.a.Input,type:"text",name:"tags",id:"tags",required:!0,onChange:l,value:a.tags})]})]})};var P=function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(u,{}),Object(n.jsxs)(o.c,{children:[Object(n.jsx)(o.a,{path:"/",exact:!0,component:x}),Object(n.jsx)(o.a,{path:"/new-post",exact:!0,component:v})]})]})},C=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,37)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,l=t.getTTFB;a(e),n(e),c(e),s(e),l(e)}))};i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(d.a,{children:Object(n.jsx)(P,{})})}),document.getElementById("root")),C()},4:function(e,t,a){e.exports={Form:"NewPost_Form__1VhvT",Option:"NewPost_Option__27Koe",Label:"NewPost_Label__XkPQ6",Input:"NewPost_Input__pA6Dh",Button:"NewPost_Button__2D0vu",ButtonCancel:"NewPost_ButtonCancel__TnOwG"}}},[[36,1,2]]]);
//# sourceMappingURL=main.c1726198.chunk.js.map
(this["webpackJsonpknowledge-challenge"]=this["webpackJsonpknowledge-challenge"]||[]).push([[0],{28:function(e,t,s){},29:function(e,t,s){},33:function(e,t,s){},34:function(e,t,s){},38:function(e,t,s){},39:function(e,t,s){},40:function(e,t,s){},41:function(e,t,s){"use strict";s.r(t);var n=s(0),c=s.n(n),i=s(8),a=s.n(i),r=(s(28),s(29),s(49)),l=s(1);var j=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"main",children:Object(l.jsx)(r.a,{expand:"lg",children:Object(l.jsx)(r.a.Brand,{className:"text-white",href:"#home",children:"LOGO"})})})})};s(33);var o=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"home d-flex justify-content-center",children:Object(l.jsxs)("div",{className:"welcome text-white text-center",children:[Object(l.jsx)("h2",{children:"Welcome to my game knowledge challenge"}),Object(l.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas justo mauris, scelerisque id odio vitae, molestie porttitor nibh. Integer auctor, dui dictum consectetur facilisis, nibh velit feugiat est, vel euismod lorem nunc finibus dui. Sed eu augue purus. Sed laoreet nisl in mi varius auctor. Quisque quis ex condimentum, lobortis ante ac, aliquam mauris. Suspendisse quis eros sit amet erat euismod ullamcorper. Quisque consectetur nulla quis metus pulvinar fermentum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam id pellentesque massa."})]})})})},u=(s(34),s(50)),d=s(43),m=s(44),b=s(47),h=s(46),O=s(45);var x=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"side",children:[Object(l.jsxs)(u.a,{className:"sideBtn",children:[Object(l.jsx)(d.a,{size:30}),Object(l.jsx)("p",{className:"pl-2",children:"about the developer"})]}),Object(l.jsxs)(u.a,{className:"sideBtn",children:[Object(l.jsx)(m.a,{size:30}),Object(l.jsxs)("p",{children:["Share on ",Object(l.jsx)(O.a,{size:30})]})]}),Object(l.jsxs)(u.a,{className:"sideBtn",children:[Object(l.jsx)(h.a,{size:30}),Object(l.jsx)("p",{children:"Write a review"})]}),Object(l.jsxs)(u.a,{className:"sideBtn",children:[Object(l.jsx)(b.a,{size:30}),Object(l.jsx)("p",{children:"Contact developer"})]})]})})},f=s(22),p=s(13),v=s(20),g=s(48),w=s(21),N=s.p+"static/media/wwbm.875d80db.png";s(38);var q=function(){var e=Object(n.useState)([]),t=Object(p.a)(e,2),s=t[0],c=t[1],i=Object(n.useState)(0),a=Object(p.a)(i,2),r=a[0],j=a[1],o=Object(n.useState)(15),d=Object(p.a)(o,2),m=d[0],b=d[1],h=[];return Object(n.useEffect)((function(){fetch("https://opentdb.com/api.php?amount=50&category=9&easy=medium&type=multiple").then((function(e){return e.json()})).then((function(e){e.results.map((function(e){var t,s={question:e.question,options:(t=[].concat(Object(f.a)(e.incorrect_answers),[e.correct_answer]),t.sort((function(){return Math.random()-.5}))),answer:e.correct_answer};h.push(s)})),c(h.sort((function(){return Math.random()-.5})))}))}),[]),Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"gameMain",children:Object(l.jsxs)("div",{className:"gameSub",children:[Object(l.jsxs)("div",{className:"QandA",children:[Object(l.jsxs)("div",{className:"holder",children:[Object(l.jsx)("div",{className:"logoDiv",children:Object(l.jsx)("img",{src:N,alt:"logo",width:"200"})}),Object(l.jsxs)("div",{className:"lifeTime",children:[Object(l.jsx)(u.a,{children:"50/50"}),Object(l.jsx)(u.a,{children:Object(l.jsx)(g.a,{})}),Object(l.jsx)(u.a,{children:Object(l.jsx)(v.a,{icon:w.a})})]})]}),Object(l.jsxs)("div",{className:"questionDiv",children:[s[r]&&Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"mt-5",children:Object(l.jsx)("div",{className:"question",children:Object(l.jsx)("h5",{dangerouslySetInnerHTML:{__html:s[r].question}})})}),Object(l.jsx)("div",{className:"answers",children:s[r].options.map((function(e,t){return Object(l.jsx)("button",{className:s[r].answer===e?"text-success":"",onClick:function(){return function(e,t){var n=r+1;s[r].answer===e?setTimeout((function(){j(n),b(m-1)}),2e3):setTimeout((function(){window.location.reload(),j(0),b(15)}),2e3)}(e)},dangerouslySetInnerHTML:{__html:"".concat(t+1,")  ").concat(e)}},t)}))})]}),15===r&&(alert("Congratulations!! You just won 1 million naira"),j(0),s[r],b(15),window.location.reload())]})]}),Object(l.jsx)("div",{className:"money",children:Object(l.jsx)("div",{children:["$ 1 000 000","$ 500 000","$ 250 000","$ 64 000","$ 32 000","$ 16 000","$ 8 000","$ 4 000","$ 2 000","$ 1 000","$ 500","$ 300","$ 200","$ 100"].map((function(e,t){return Object(l.jsx)("h5",{className:m===t+1?"bg-warning text-white p-1":"",children:e})}))})})]})})})};s(39);var $=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"footer",children:Object(l.jsx)("p",{children:"2021 \xa9 Knowledge challenge by Enechukwu Chibuike"})})})};s(40);var S=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(j,{}),Object(l.jsx)(x,{}),Object(l.jsx)(o,{}),Object(l.jsx)(q,{}),Object(l.jsx)($,{})]})},y=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,51)).then((function(t){var s=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,a=t.getTTFB;s(e),n(e),c(e),i(e),a(e)}))};a.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(S,{})}),document.getElementById("root")),y()}},[[41,1,2]]]);
//# sourceMappingURL=main.92bdce19.chunk.js.map
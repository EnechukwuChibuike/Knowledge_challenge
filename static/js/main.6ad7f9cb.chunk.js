(this["webpackJsonpknowledge-challenge"]=this["webpackJsonpknowledge-challenge"]||[]).push([[0],{40:function(e,t,c){},41:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},50:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){},54:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),i=c(14),a=c.n(i),r=(c(40),c(41),c(66)),j=c(1);var o=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"main",children:Object(j.jsx)(r.a,{expand:"lg",children:Object(j.jsx)(r.a.Brand,{className:"text-white",href:"#home",children:"LOGO"})})})})};c(45);var l=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"home d-flex justify-content-center",children:Object(j.jsxs)("div",{className:"welcome text-white text-center",children:[Object(j.jsx)("h2",{children:"Welcome to my game knowledge challenge"}),Object(j.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas justo mauris, scelerisque id odio vitae, molestie porttitor nibh. Integer auctor, dui dictum consectetur facilisis, nibh velit feugiat est, vel euismod lorem nunc finibus dui. Sed eu augue purus. Sed laoreet nisl in mi varius auctor. Quisque quis ex condimentum, lobortis ante ac, aliquam mauris. Suspendisse quis eros sit amet erat euismod ullamcorper. Quisque consectetur nulla quis metus pulvinar fermentum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam id pellentesque massa."})]})})})},d=(c(46),c(67)),u=c(56),b=c(57),h=c(60),O=c(59),m=c(58);var x=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"side",children:[Object(j.jsxs)(d.a,{className:"sideBtn",children:[Object(j.jsx)(u.a,{size:30}),Object(j.jsx)("p",{className:"pl-2",children:"about the developer"})]}),Object(j.jsxs)(d.a,{className:"sideBtn",children:[Object(j.jsx)(b.a,{size:30}),Object(j.jsxs)("p",{children:["Share on ",Object(j.jsx)(m.a,{size:30})]})]}),Object(j.jsxs)(d.a,{className:"sideBtn",children:[Object(j.jsx)(O.a,{size:30}),Object(j.jsx)("p",{children:"Write a review"})]}),Object(j.jsxs)(d.a,{className:"sideBtn",children:[Object(j.jsx)(h.a,{size:30}),Object(j.jsx)("p",{children:"Contact developer"})]})]})})},f=c(31),g=c(9),p=c(33),v=c(65),w=c(62),N=c(63),y=c(64),k=c(61),S=c(35),C=c.p+"static/media/wwbm.875d80db.png";c(50);var q=function(e){var t=e.option,c=e.setmoneyLadderMobile,s=e.data,i=e.setMoneyLadder,a=e.setCurrentQuestion,r=e.currentQuestion,o=e.index,l=e.moneyLadder,d=Object(n.useState)(""),u=Object(g.a)(d,2),b=u[0],h=u[1];return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("button",{className:"bg-".concat(b,"\n            ").concat(s[r].answer===t?"text-success":""),onClick:function(){return function(){var e=r+1;s[r].answer===t?(setTimeout((function(){h("success text-white")}),2e3),setTimeout((function(){c(!0),i(l-1)}),4e3),setTimeout((function(){a(e),c(!1),h("")}),6e3)):(setTimeout((function(){h("danger")}),2e3),setTimeout((function(){window.location.reload(),a(0),i(15)}),4e3))}()},dangerouslySetInnerHTML:{__html:"".concat(o+1,")  ").concat(t)}},o)})};var T=function(){var e=["$ 1 000 000","$ 500 000","$ 250 000","$ 64 000","$ 32 000","$ 16 000","$ 8 000","$ 4 000","$ 2 000","$ 1 000","$ 500","$ 300","$ 200","$ 100"],t=Object(n.useState)([]),c=Object(g.a)(t,2),s=c[0],i=c[1],a=Object(n.useState)(0),r=Object(g.a)(a,2),o=r[0],l=r[1],u=Object(n.useState)(15),b=Object(g.a)(u,2),h=b[0],O=b[1],m=Object(n.useState)(!1),x=Object(g.a)(m,2),T=x[0],$=x[1],L=Object(n.useState)(),M=Object(g.a)(L,2),F=(M[0],M[1],function(e){return e.sort((function(){return Math.random()-.5}))}),_=[];Object(n.useEffect)((function(){fetch("https://opentdb.com/api.php?amount=50&category=9&easy=medium&type=multiple").then((function(e){return e.json()})).then((function(e){e.results.forEach((function(e){var t={question:e.question,options:F([].concat(Object(f.a)(e.incorrect_answers),[e.correct_answer])),answer:e.correct_answer,inCorrectOption:F(Object(f.a)(e.incorrect_answers))};_.push(t)})),i(F(_))}))}),[]);var B=Object(n.useState)(""),Q=Object(g.a)(B,2),H=Q[0],I=Q[1],z=Object(n.useState)(""),A=Object(g.a)(z,2),E=(A[0],A[1]),D=Object(n.useState)(!1),P=Object(g.a)(D,2),J=P[0],W=P[1],G=Object(n.useState)(!1),K=Object(g.a)(G,2),Y=K[0],R=K[1],U=Object(n.useState)(),V=Object(g.a)(U,2),X=(V[0],V[1],function(){return W(!1)}),Z=function(){return R(!1)};return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"gameMain",children:[Object(j.jsxs)("div",{className:"gameSub",children:[s[o]&&Object(j.jsxs)("div",{className:"QandA",children:[Object(j.jsxs)("div",{className:"holder",children:[Object(j.jsx)("div",{className:"logoDiv",children:Object(j.jsx)("img",{src:C,alt:"logo",width:"200"})}),Object(j.jsxs)("div",{className:"lifeTime",children:[Object(j.jsx)(d.a,{className:"",onClick:function(){s[o].inCorrectOption.splice(0,2)},children:"50/50"}),Object(j.jsx)(d.a,{disabled:H,onClick:function(){setTimeout((function(){W(!0)}),2e3),I("disabled")},children:Object(j.jsx)(k.a,{})}),Object(j.jsx)(v.a,{show:J,onHide:X,backdrop:"static",keyboard:!1,centered:!0,children:Object(j.jsxs)(v.a.Body,{className:"callAfriend",children:[Object(j.jsx)("h5",{className:"mb-5",dangerouslySetInnerHTML:{__html:'Hello Friend!! The right answer is "'.concat(s[o].answer,'"')}}),Object(j.jsx)(d.a,{style:{float:"right",color:"black",backgroundColor:"rgb(255, 166, 0)"},onClick:X,children:"Close"})]})}),Object(j.jsx)(d.a,{onClick:function(){setTimeout((function(){R(!0)}),2e3),E("disabled")},children:Object(j.jsx)(p.a,{icon:S.a})}),Object(j.jsx)(v.a,{show:Y,onHide:Z,backdrop:"static",keyboard:!1,centered:!0,children:Object(j.jsxs)(v.a.Body,{className:"callAfriend",children:[Object(j.jsx)(w.a,{className:"mb-3",children:Object(j.jsxs)(N.a,{children:[Object(j.jsxs)(y.a,{children:[Object(j.jsx)("div",{}),Object(j.jsx)("h5",{}),Object(j.jsx)("h5",{children:"1"})]}),Object(j.jsxs)(y.a,{children:[Object(j.jsx)("div",{}),Object(j.jsx)("h5",{}),Object(j.jsx)("h5",{children:"2"})]}),Object(j.jsxs)(y.a,{children:[Object(j.jsx)("div",{}),Object(j.jsx)("h5",{}),Object(j.jsx)("h5",{children:"3"})]}),Object(j.jsxs)(y.a,{children:[Object(j.jsx)("div",{}),Object(j.jsx)("h5",{}),Object(j.jsx)("h5",{children:"4"})]})]})}),Object(j.jsx)(d.a,{style:{float:"right",color:"black",backgroundColor:"rgb(255, 166, 0)"},onClick:Z,children:"Close"})]})})]})]}),Object(j.jsxs)("div",{className:"questionDiv",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"mt-5",children:Object(j.jsx)("div",{className:"question",children:Object(j.jsx)("h5",{dangerouslySetInnerHTML:{__html:s[o].question}})})}),Object(j.jsx)("div",{className:"answers",children:s[o].options.map((function(e,t){return Object(j.jsx)(q,{data:s,option:e,index:t,setMoneyLadder:O,moneyLadder:h,setmoneyLadderMobile:$,setCurrentQuestion:l,currentQuestion:o})}))})]}),14===o&&(alert("Congratulations!! You just won 1 million naira"),l(0),s[o],O(15),window.location.reload())]})]}),Object(j.jsx)("div",{className:"money",children:Object(j.jsx)("div",{children:e.map((function(e,t){return Object(j.jsx)("h5",{className:h===t+1?"bg-warning text-white p-1":"",children:e},t)}))})})]}),!0===T&&Object(j.jsx)("div",{className:"moneyMobile",children:e.map((function(e,t){return Object(j.jsx)("h5",{className:h===t+1?"bg-warning text-white p-1":"",children:e},t)}))})]})})};c(52);var $=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"footer",children:Object(j.jsx)("p",{children:"2021 \xa9 Knowledge challenge by Enechukwu Chibuike"})})})};c(53);var L=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(o,{}),Object(j.jsx)(x,{}),Object(j.jsx)(l,{}),Object(j.jsx)(T,{}),Object(j.jsx)($,{})]})},M=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,68)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),i(e),a(e)}))};a.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(L,{})}),document.getElementById("root")),M()}},[[54,1,2]]]);
//# sourceMappingURL=main.6ad7f9cb.chunk.js.map
(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{36:function(e,t,n){"use strict";n.r(t);var a,r=n(1),c=n.n(r),s=n(7),i=n.n(s),o=n(8),d=n(9),l=n(10),b=n(18),j=n(17),u=n(0),h=function(e){var t=e.good,n=e.neutral,a=e.bad,r=e.total,c=e.positivePercentage;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"Statistics",children:[Object(u.jsxs)("p",{children:["Good:",Object(u.jsxs)("span",{children:[" ",t]})]}),Object(u.jsxs)("p",{children:["Neutral:",Object(u.jsxs)("span",{children:[" ",n]})]}),Object(u.jsxs)("p",{children:["Bad:",Object(u.jsxs)("span",{children:[" ",a]})]}),Object(u.jsxs)("p",{children:["Total:",Object(u.jsxs)("span",{children:[" ",r]})]}),Object(u.jsxs)("p",{children:["Positive Percentage:",Object(u.jsxs)("span",{children:[" ",c,"%"]})]})]})})},x=function(e){var t=e.message;return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("p",{children:t})})},p=n(11),O=n(13),g=n(12),v=n.n(g),f=O.a.button(a||(a=Object(p.a)(["\n  border-style: solid;\n  border-width: 1px;\n  padding: 1px 7px 2px;\n  text-rendering: auto;\n  color: initial;\n  display: inline-block;\n  text-align: start;\n  margin: 5px;\n  border-radius: 5px;\n\n  &:hover {\n    background: #1d49aa;\n  }\n  &:focus {\n    outline: none;\n    box-shadow: 0 0 0 4px #cbd6ee;\n  }\n"]))),k=function(e){var t=e.options,n=e.handleCounter;return Object(u.jsx)(u.Fragment,{children:t.map((function(e){return Object(u.jsx)(f,{type:"button",name:e,onClick:n,children:e},v.a.generate())}))})},m=function(e){var t=e.title,n=e.children;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:t}),n]})},F=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={good:0,neutral:0,bad:0},e.handleCounter=function(t){var n=t.target.name;e.setState((function(e){return Object(o.a)({},n,e[n]+1)}))},e.countPositiveFeedbackPercentage=function(){var t=e.countTotalFeedback(),n=100*e.state.good/t;return Math.round(n)},e}return Object(l.a)(n,[{key:"countTotalFeedback",value:function(){var e=this.state;return e.good+e.neutral+e.bad}},{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,a=e.bad,r=this.countTotalFeedback(),c=this.countPositiveFeedbackPercentage(),s=Object.keys(this.state);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(m,{title:"Please leave feedback",children:Object(u.jsx)(k,{options:s,handleCounter:this.handleCounter})}),Object(u.jsx)(m,{title:"Statistics",children:0===r?Object(u.jsx)(x,{message:"No feedback given"}):Object(u.jsx)(h,{good:t,neutral:n,bad:a,total:r,positivePercentage:c})})]})}}]),n}(c.a.Component);i.a.render(Object(u.jsx)(F,{}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.97616b97.chunk.js.map
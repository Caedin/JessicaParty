(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(2755)}])},8498:function(e,t,n){"use strict";var r=n(5893);t.Z=function(e){var t=e.players;return(0,r.jsx)("div",{children:t.length>0?(0,r.jsx)("div",{className:"grid place-items-center pt-5 px-3",children:(0,r.jsxs)("table",{className:"table-fixed bg-slate-700 rounded-xl w-full max-w-2xl",children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Team"}),(0,r.jsx)("th",{children:"Score"})]})}),(0,r.jsx)("tbody",{children:t.map((function(e){return(0,r.jsxs)("tr",{className:"border-t",children:[e.hasJokered?(0,r.jsx)("td",{className:"text-center border-r rounded-bl-xl bg-blue-900",children:e.name}):(0,r.jsx)("td",{className:" border-r text-center rounded-xl",children:e.name}),e.hasJokered?(0,r.jsx)("td",{className:"text-center rounded-br-xl bg-blue-900",children:e.score}):(0,r.jsx)("td",{className:"text-center rounded-xl",children:e.score})]},e.name+e.score)}))})]})}):(0,r.jsx)("div",{})})}},2755:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var r=n(4051),s=n.n(r),i=n(5893),l=n(7294),a=n(5102),c=n(8498),o=function(e){var t=e.input,n=e.handleChange,r=e.joinGame;return(0,i.jsx)("div",{children:(0,i.jsx)("div",{className:"flex place-content-center",children:(0,i.jsxs)("div",{className:"flex flex-col w-full",children:[(0,i.jsx)("div",{className:"flex place-content-center place-items-end md:mt-20 w-full",children:(0,i.jsx)("div",{className:"font-[Optima] text-6xl",children:"Join Game!"})}),(0,i.jsxs)("div",{className:"w-2/3 min-w-[300px] max-w-[800px] mx-auto mt-5 group grid grid-rows-2 md:flex",children:[(0,i.jsx)("div",{className:"bg-google-gray border-gray-700 border rounded-3xl w-full h-12 hover:bg-gray-700 focus-within:bg-gray-700",children:(0,i.jsx)("div",{className:"flex w-full h-full",children:(0,i.jsx)("input",{className:"text-white bg-inherit rounded-3xl focus:outline-none w-full px-5",type:"text",value:t,onChange:n,spellCheck:"false"})})}),(0,i.jsx)("div",{className:"text-center mx-10",children:(0,i.jsx)("button",{type:"submit",className:"bg-green-700 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-3xl transition-all duration-200 hover:rounded-xl ease-linear active:bg-green-900 mt-2 md:mt-0",onClick:r,children:"Join"})})]})]})})})},u=n(5675),d=function(e){var t=e.questions,n=e.submitAnswers,r=e.hasSubmit,s=e.hasJoker,a=(0,l.useState)([]),c=a[0],o=a[1],d=function(){n(c,!1),o([])},x=function(e){c[e.target.id]=e.target.value};return(0,i.jsx)("div",{className:"px-5 py-5",children:void 0!==t?(0,i.jsxs)("div",{children:[t.map((function(e,t){return(0,i.jsxs)("div",{children:["image"==e.info.type?(0,i.jsx)("div",{className:"text-center py-3 w-full h-full",children:(0,i.jsx)(u.default,{src:e.info.url,width:400,height:400})}):(0,i.jsx)("div",{className:"text-center text-xl py-2",children:e.q}),(0,i.jsx)("div",{className:"bg-google-gray border-gray-700 border rounded-3xl w-full h-12 hover:bg-gray-700 focus-within:bg-gray-700",children:e.reveal?(0,i.jsx)("div",{className:"flex w-full h-full",children:(0,i.jsx)("input",{className:"bg-inherit rounded-3xl focus:outline-none pl-10 w-full text-green-600 text-xl italic",id:t.toString(),type:"text",value:e.a,spellCheck:"false"})}):(0,i.jsx)("div",{className:"flex w-full h-full",children:(0,i.jsx)("input",{className:"text-white bg-inherit rounded-3xl focus:outline-none pl-10 w-full",id:t.toString(),type:"text",value:c[t],onChange:x,spellCheck:"false"})})})]},t)})),t.some((function(e){var t;return!0===(null===e||void 0===e||null===(t=e.info)||void 0===t?void 0:t.last)}))&&!r?s?(0,i.jsx)("div",{className:"text-center mx-10 mt-5",children:(0,i.jsx)("button",{type:"submit",className:"bg-green-700 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-3xl transition-all duration-200 hover:rounded-xl ease-linear active:bg-green-900 mt-2 md:mt-0",onClick:d,children:"Submit Answers"})}):(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:"text-center mx-10 mt-5",children:(0,i.jsx)("button",{type:"submit",className:"bg-green-700 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-3xl transition-all duration-200 hover:rounded-xl ease-linear active:bg-green-900 mt-2 md:mt-0",onClick:d,children:"Submit Answers"})}),(0,i.jsx)("div",{className:"text-center mx-10 mt-5",children:(0,i.jsx)("button",{type:"submit",className:"bg-blue-700 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-3xl transition-all duration-200 hover:rounded-xl ease-linear active:bg-blue-900 mt-2 md:mt-0",onClick:function(){n(c,!0),o([])},children:"Submit Joker (2x)!"})})]}):(0,i.jsx)("div",{})]}):(0,i.jsx)("div",{})})},x=function(e){var t=e.round,n=e.submitAnswers,r=e.hasSubmit,s=e.hasJoker;return(0,i.jsxs)("div",{className:"pt-10 px-10",children:[(0,i.jsx)("div",{className:"text-center text-xl",children:t.description}),(0,i.jsx)("div",{className:"row-span-3",children:(0,i.jsx)(d,{questions:t.questions,submitAnswers:n,hasSubmit:r,hasJoker:s})})]})};function h(e,t,n,r,s,i,l){try{var a=e[i](l),c=a.value}catch(o){return void n(o)}a.done?t(c):Promise.resolve(c).then(r,s)}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){m(e,t,n[t])}))}return e}var v=function(){var e=(0,l.useState)(!0),t=e[0],n=e[1],r=(0,l.useState)([]),u=r[0],d=r[1],m=(0,l.useState)(!1),v=m[0],p=m[1],b=(0,l.useState)(""),j=b[0],g=b[1],w=(0,l.useState)({}),N=w[0],y=w[1],k=(0,l.useState)(null),S=k[0],q=k[1],C=(0,l.useState)(!1),O=C[0],_=C[1],J=(0,l.useState)(!1),P=J[0],E=J[1],A=(0,l.useState)(!1),T=A[0],G=A[1];(0,l.useEffect)((function(){Z()}),[t,u,v,N]);var Z=function(){var e,t=(e=s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/socket");case 2:(S=(0,a.ZP)()).once("game-unavailable",(function(e){n(e)})),S.once("players",(function(e){d(e)})),S.once("update-round",(function(e){for(var t;(null===(t=N.questions)||void 0===t?void 0:t.length)>0;)N.questions.pop();console.log(N),y(f({},N,{description:e}))})),S.once("close-round",(function(e){var t;N.questions=null===(t=N.questions)||void 0===t?void 0:t.map((function(e){return f({},e,{reveal:!0})})),y(f({},N))})),S.once("next-question",(function(e){y(f({},N,{questions:e})),_(!1)})),S.once("game-over",(function(e){G(!0),N.questions=[],N.description=null,y(f({},N))})),q(S);case 10:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,s){var i=e.apply(t,n);function l(e){h(i,r,s,l,a,"next",e)}function a(e){h(i,r,s,l,a,"throw",e)}l(void 0)}))});return function(){return t.apply(this,arguments)}}();return(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:"font-[Optima] text-3xl text-center py-10 px-10",children:(0,i.jsx)("div",{children:"Jessica's 30th Birthday Trivia!"})}),t||v?v?T?(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:"text-center",children:"Those are the final scores!"}),(0,i.jsx)("div",{className:"text-center mt-5",children:"Happy birthday!"})]}):null==N.description?(0,i.jsx)("div",{className:"text-center",children:"Please wait..."}):(0,i.jsx)("div",{}):(0,i.jsx)(o,{input:j,handleChange:function(e){return g(e.currentTarget.value)},joinGame:function(e){S.emit("join-game",j),p(!0)}}):(0,i.jsx)("div",{className:"flex place-content-center",children:(0,i.jsx)("div",{className:"flex flex-col w-full",children:(0,i.jsx)("div",{className:"flex place-content-center place-items-end md:mt-20 w-full",children:(0,i.jsx)("div",{className:"font-[Optima] text-6xl text-center",children:"Waiting for host..."})})})}),v?(0,i.jsxs)("div",{children:[(0,i.jsx)(x,{round:N,submitAnswers:function(e,t){t&&!P?(S.emit("submit-questions",{name:j,a:e,joker:!0}),E(!0)):S.emit("submit-questions",{name:j,a:e,joker:!1}),_(!0)},hasSubmit:O,hasJoker:P}),(0,i.jsx)(c.Z,{players:u})]}):(0,i.jsx)("div",{})]})}}},function(e){e.O(0,[102,675,774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
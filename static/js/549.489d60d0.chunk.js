"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[549],{504:function(n,t,e){e.d(t,{Hg:function(){return f},Z$:function(){return _},IQ:function(){return p},Tn:function(){return v},on:function(){return d}});var c=e(861),r=e(757),i=e.n(r),o="d94e772b2027bf78267ef28130c02d62",a="https://api.themoviedb.org/3";function s(){return u.apply(this,arguments)}function u(){return u=(0,c.Z)(i().mark((function n(){var t,e,c=arguments;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:"",n.next=3,fetch(t);case 3:if(!(e=n.sent).ok){n.next=10;break}return n.next=7,e.json();case 7:n.t0=n.sent,n.next=11;break;case 10:n.t0=Promise.reject(new Error("NOT"));case 11:return n.abrupt("return",n.t0);case 12:case"end":return n.stop()}}),n)}))),u.apply(this,arguments)}function f(){return s("".concat(a,"/trending/movie/day?api_key=").concat(o))}function _(n){return s("".concat(a,"/movie/").concat(n,"?api_key=").concat(o))}function p(n){return s("".concat(a,"/movie/").concat(n,"/credits?api_key=").concat(o))}function v(n){return s("".concat(a,"/movie/").concat(n,"/reviews?api_key=").concat(o,"&page=1"))}function d(n){return s("".concat(a,"/search/movie?api_key=").concat(o,"&query=").concat(n))}},549:function(n,t,e){e.r(t),e.d(t,{default:function(){return u}});var c=e(152),r=e(791),i=e(504),o=e(271),a=e(1),s=e(184);function u(){var n,t=(0,r.useState)([]),e=(0,c.Z)(t,2),u=e[0],f=e[1],_=(0,o.UO)().movieId;return(0,r.useEffect)((function(){(0,i.IQ)(_).then((function(n){return f(n)}))}),[_]),(0,s.jsx)(r.Suspense,{fallback:(0,s.jsx)("div",{children:"Loading..."}),children:(0,s.jsx)("ul",{className:a.Z.actors,children:null===u||void 0===u||null===(n=u.cast)||void 0===n?void 0:n.map((function(n){return(0,s.jsxs)("li",{children:[(0,s.jsx)("p",{children:n.name}),(0,s.jsx)("img",{src:n.profile_path?"https://image.tmdb.org/t/p/w200".concat(n.profile_path):"https://s1.iconbird.com/ico/0612/practika/w256h2561339698323user.png",alt:""})]},n.id)}))})})}},1:function(n,t){t.Z={beads:"views_beads__F4ZM5",content:"views_content__8ADSm",info:"views_info__RDLmr",contentLink:"views_contentLink__sT40o",actors:"views_actors__8I5XK",goBack:"views_goBack__hm49s",review:"views_review__ZTu0O"}}}]);
//# sourceMappingURL=549.489d60d0.chunk.js.map
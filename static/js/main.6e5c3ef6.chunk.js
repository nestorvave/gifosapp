(this.webpackJsonpgifosapp=this.webpackJsonpgifosapp||[]).push([[0],{18:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(8),s=n.n(c),i=n(2),r=(n(18),n(12)),l=n(1),o=function(){return Object(l.jsx)("div",{className:"spinner",children:Object(l.jsx)(r.a,{animation:"border"})})},j=Object(a.createContext)(),u=function(e){var t=e.children,n=Object(a.useState)(!1),c=Object(i.a)(n,2),s=c[0],r=c[1],o=Object(a.useState)(""),u=Object(i.a)(o,2),d=u[0],m=u[1],h=Object(a.useState)(!1),f=Object(i.a)(h,2),b=f[0],g=f[1],O=Object(a.useState)([]),x=Object(i.a)(O,2),_=x[0],v=x[1],p=Object(a.useState)(!1),N=Object(i.a)(p,2),k=N[0],C=N[1];return Object(l.jsx)(j.Provider,{value:{isSearching:s,setIsSearching:r,setGifSelected:m,gifSelected:d,theme:b,setTheme:g,autocomplete:_,setAutocomplete:v,flag:k,setFlag:C},children:t})},d=(n(20),function(e){var t=e.src,n=void 0===t?"":t,a=e.href,c=void 0===a?"":a,s=e.name,i=void 0===s?"":s;return Object(l.jsx)("a",{href:c.url,target:"_blank",rel:"noreferrer",children:Object(l.jsx)("img",{src:n,className:"card animate__animated animate__fadeIn animate__delay-1s",alt:i.title})})}),m=(n(21),function(){var e=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1],s=Object(a.useContext)(j),r=s.isSearching,l=s.setIsSearching,o=s.gifSelected,u=s.flag,d=s.setFlag;return Object(a.useEffect)((function(){(r||u)&&fetch("https://api.giphy.com/v1/gifs/search?api_key=EEJ5t0UHu4zBsZ3edAhRt44UidUNzWy4&q=".concat(o,"&limit=15&offset=0&rating=g&lang=en")).then((function(e){return e.json()})).then((function(e){var t=e.data.map((function(e){return{url:e.images.downsized_medium.url,item:e}}));c(t),l(null),d(!1)}))}),[r,l,o,d,u]),[n]}(),t=Object(i.a)(e,1)[0],n=Object(a.useContext)(j),c=n.isSearching,s=n.theme;return Object(l.jsxs)("section",{className:"mainContainer ".concat(s&&"mainContainer_dark"," animate__animated animate__fadeInUp animate__delay-4s"),children:[t.length>0?Object(l.jsx)("h3",{children:"Your results"}):Object(l.jsx)("h3",{children:" Search your Gifs"}),Object(l.jsxs)("div",{className:"gifCards ".concat(s?"gifCards_dark":"gifCards_ligth"," "),children:[c&&Object(l.jsx)(o,{}),0===t.length&&null===c?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("p",{children:"No data found"}),Object(l.jsx)("img",{src:"/images/nodata1.svg",className:"no-data",alt:"no-data"})]}):t.map((function(e){return Object(l.jsx)(d,{src:e.url,href:e.item,name:e.item},e.url)}))]})]})}),h=(n(22),function(){var e=Object(a.useContext)(j),t=e.theme,n=e.setTheme;return Object(l.jsxs)("header",{className:"header",children:[Object(l.jsx)("h2",{className:"animate__animated animate__fadeInLeft animate__delay-1s",children:"Gifos"}),Object(l.jsxs)("div",{className:"appearanceButton animate__animated animate__fadeInRight animate__delay-1s",onClick:function(){return n(!t)},children:[Object(l.jsx)("img",{src:"/images/".concat(t?"moon":"sun",".svg"),alt:"button"}),Object(l.jsxs)("p",{className:"".concat(t&&"header_dark"),children:[t?"Dark":"Ligth"," mode"]})]})]})}),f=function(e){var t=e.placeholder,n=void 0===t?"":t,a=e.onChange,c=void 0===a?"":a,s=e.value,i=void 0===s?"":s,r=e.type,o=void 0===r?"text":r,j=e.className,u=void 0===j?"":j;return Object(l.jsx)("input",{placeholder:n,onChange:c,value:i,type:o,className:u})},b=(n(23),function(e){var t=e.data,n=void 0===t?null:t,c=e.setInput,s=Object(a.useContext)(j),i=s.setAutocomplete,r=s.setGifSelected,o=s.setFlag,u=s.setIsSearching,d=s.theme;return Object(l.jsx)("ul",{className:"list",children:n.map((function(e){return Object(l.jsxs)("li",{onClick:function(){return function(e){i([]),r(e),o(!0),c(""),u(!0)}(e)},className:" ".concat(d&&"li-dark"," "),children:[Object(l.jsx)("img",{src:"/images/search.svg",alt:"search"}),e]},e)}))})}),g=(n(24),function(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=Object(a.useState)(e),n=Object(i.a)(t,2),c=n[0],s=n[1];return[c,function(e){var t=e.target;s(t.value)},s]}(),t=Object(i.a)(e,3),n=t[0],c=t[1],s=t[2],r=Object(a.useContext)(j),o=r.setIsSearching,u=r.setGifSelected,d=r.theme,m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=Object(a.useContext)(j),n=t.autocomplete,c=t.setAutocomplete;return Object(a.useEffect)((function(){fetch("https://api.giphy.com/v1/gifs/search/tags?api_key=EvHHkLAGyF1Xh0lfX1hVDW5xwSkQhLJN&q=".concat(e,"&limit=10&offset=0&rating=g&lang=en")).then((function(e){return e.json()})).then((function(e){var t=e.data.map((function(e){return e.name}));c(t)}))}),[e,c]),n}(n);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("form",{className:"form animate__animated animate__fadeIn animate__delay-3s",children:[n.length>0&&Object(l.jsx)("img",{onClick:function(){s("")},className:"delete",src:"/images/delete.svg",alt:"search"}),Object(l.jsx)(f,{placeholder:"Search Gif",value:n,onChange:function(e){u(e.target.value),c(e)},className:"".concat(d&&"form_dark")}),Object(l.jsx)("button",{onClick:function(e){e.preventDefault(),o(!0),s("")},children:Object(l.jsx)("img",{src:"/images/search.svg",alt:"search"})})]}),m.length>0&&Object(l.jsx)(b,{data:m,setInput:s})]})}),O=(n(25),function(){var e=Object(a.useContext)(j).theme;return Object(l.jsxs)("section",{className:"searchContainer",children:[Object(l.jsxs)("h1",{className:"".concat(e&&"searchContainer_dark"," animate__animated animate__flipInX animate__delay-3s "),children:["Get inspired and find the best ",Object(l.jsx)("b",{children:"GIFS!"})]}),Object(l.jsx)("img",{className:"animate__animated animate__flipInY animate__delay-3s",src:"/images/explore.svg",alt:"explore"}),Object(l.jsx)(g,{})]})}),x=(n(26),n(11)),_=function(){var e=function(){var e=Object(a.useState)(null),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){fetch("https://api.giphy.com/v1/gifs/trending?api_key=EvHHkLAGyF1Xh0lfX1hVDW5xwSkQhLJN&limit=15&rating=g").then((function(e){return e.json()})).then((function(e){var t=e.data.map((function(e){return e.images.downsized_medium.url}));c(t)}))}),[]),n}();return Object(l.jsx)(x.a,{className:"container",children:null!=e&&e.map((function(e,t){return Object(l.jsx)(x.a.Item,{interval:1e3,children:Object(l.jsx)("img",{className:"",src:e,alt:" ".concat(t+1," slide ")},e)},e)}))})},v=(n(28),function(){var e=Object(a.useContext)(j).theme;return Object(l.jsxs)("section",{className:"trending_Container ".concat(e&&"trending_Container_dark"," animate__animated animate__fadeInRight animate__delay-5s "),children:[Object(l.jsx)("h3",{className:"trending_Container_title ".concat(e&&"trending_Container_title_dark"),children:"Trending Gifs"}),Object(l.jsx)("div",{className:"carousel",children:Object(l.jsx)(_,{})})]})}),p=(n(29),function(){return Object(l.jsxs)("footer",{children:[Object(l.jsxs)("div",{className:"svg",children:[Object(l.jsx)("a",{href:"https://github.com/nestorvave",target:"_blank",rel:"noreferrer",children:Object(l.jsx)("img",{src:"/images/github.svg",alt:""})}),Object(l.jsx)("a",{href:"https://www.instagram.com/nestorvave/",target:"_blank",rel:"noreferrer",children:Object(l.jsx)("img",{src:"/images/instagram.svg",alt:""})}),Object(l.jsx)("a",{href:"https://www.linkedin.com/in/nestorvave/",target:"_blank",rel:"noreferrer",children:Object(l.jsx)("img",{src:"/images/linkedin.svg",alt:""})})]}),Object(l.jsx)("p",{className:"footer-title",children:"Made by Nestor Vargas"})]})}),N=(n(30),n(31),n(32),function(){var e=Object(a.useContext)(j).theme;return Object(l.jsxs)("div",{className:" ".concat(e&&"dark"),children:[Object(l.jsx)(h,{}),Object(l.jsx)(O,{}),Object(l.jsx)(m,{}),Object(l.jsx)(v,{}),Object(l.jsx)(p,{})]})});s.a.render(Object(l.jsx)(u,{children:Object(l.jsx)(N,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.6e5c3ef6.chunk.js.map
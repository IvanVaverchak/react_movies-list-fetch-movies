(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){},16:function(e,t,c){},18:function(e,t,c){},19:function(e,t,c){"use strict";c.r(t);var i=c(7),s=c.n(i),n=(c(13),c(8)),a=c(2),r=c(1),l=(c(14),c(15),c(16),c(0)),o=function(e){var t=e.movie;return Object(l.jsxs)("div",{className:"card","data-cy":"movieCard",children:[Object(l.jsx)("div",{className:"card-image",children:Object(l.jsx)("figure",{className:"image is-4by3",children:Object(l.jsx)("img",{"data-cy":"moviePoster",src:t.imgUrl,alt:"Film logo"})})}),Object(l.jsxs)("div",{className:"card-content",children:[Object(l.jsxs)("div",{className:"media",children:[Object(l.jsx)("div",{className:"media-left",children:Object(l.jsx)("figure",{className:"image is-48x48",children:Object(l.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(l.jsx)("div",{className:"media-content",children:Object(l.jsx)("p",{className:"title is-8","data-cy":"movieTitle",children:t.title})})]}),Object(l.jsxs)("div",{className:"content","data-cy":"movieDescription",children:[t.description,Object(l.jsx)("br",{}),Object(l.jsx)("a",{href:t.imdbUrl,"data-cy":"movieURL",children:"IMDB"})]})]})]})},d=function(e){var t=e.movies;return Object(l.jsx)("div",{className:"movies",children:t.map((function(e){return Object(l.jsx)(o,{movie:e},e.imdbId)}))})},j=c(6),m=c.n(j);c(18);var b=function(e){var t=e.setMovies,c=Object(r.useState)(""),i=Object(a.a)(c,2),s=i[0],n=i[1],d=Object(r.useState)(!1),j=Object(a.a)(d,2),b=j[0],u=j[1],v=Object(r.useState)(null),h=Object(a.a)(v,2),O=h[0],x=h[1],f=Object(r.useState)(null),p=Object(a.a)(f,2),N=p[0],g=p[1],y=function(e){(e.preventDefault(),u(!0),s)&&function(e){return fetch("".concat("https://www.omdbapi.com/?apikey=dfca6fa2","&t=").concat(e)).then((function(e){return e.json()})).catch((function(){return{Response:"False",Error:"unexpected error"}}))}(s.trim().toLowerCase()).then((function(e){if(Object.hasOwn(e,"Title")){var t=e,c=t.Poster,i=t.Title,s=t.Plot,n=t.imdbID,a={title:i,description:s,imgUrl:"N/A"===c?"https://via.placeholder.com/360x270.png?text=no%20preview":c,imdbUrl:"https://www.imdb.com/title/".concat(n),imdbId:n};g(a),x(null)}Object.hasOwn(e,"Error")&&x(e)})).finally((function(){return u(!1)}))};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("form",{className:"find-movie",children:[Object(l.jsxs)("div",{className:"field",children:[Object(l.jsx)("label",{className:"label",htmlFor:"movie-title",children:"Movie title"}),Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("input",{"data-cy":"titleField",type:"text",id:"movie-title",placeholder:"Enter a title to search",className:m()("input",{"is-danger":null===O||void 0===O?void 0:O.Error}),value:s,onChange:function(e){return function(e){n(e.target.value),x(null)}(e)}})}),(null===O||void 0===O?void 0:O.Error)&&Object(l.jsx)("p",{className:"help is-danger","data-cy":"errorMessage",children:"Can't find a movie with such a title"})]}),Object(l.jsxs)("div",{className:"field is-grouped",children:[Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{"data-cy":"searchButton",type:"submit",disabled:0===s.length,className:m()("button is-light",{"is-loading":b}),onClick:function(e){return y(e)},children:"Find a movie"})}),N&&Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{"data-cy":"addButton",type:"button",className:"button is-primary",onClick:function(){return t(N),g(null),void n("")},children:"Add to the list"})})]})]}),N&&Object(l.jsxs)("div",{className:"container","data-cy":"previewContainer",children:[Object(l.jsx)("h2",{className:"title",children:"Preview"}),Object(l.jsx)(o,{movie:N})]})]})},u=function(){var e=Object(r.useState)([]),t=Object(a.a)(e,2),c=t[0],i=t[1];return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("div",{className:"page-content",children:Object(l.jsx)(d,{movies:c})}),Object(l.jsx)("div",{className:"sidebar",children:Object(l.jsx)(b,{setMovies:function(e){c.some((function(t){return t.imdbId===e.imdbId}))||i((function(t){return[].concat(Object(n.a)(t),[e])}))}})})]})};s.a.render(Object(l.jsx)(u,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.288ec07f.chunk.js.map
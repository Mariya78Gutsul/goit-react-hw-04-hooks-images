(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],[,,,function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__2-9fR",SearchForm:"Searchbar_SearchForm__2FdGR",SearchFormButton:"Searchbar_SearchFormButton__1NpoU",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__3uHBK",SearchFormInput:"Searchbar_SearchFormInput__b1IcX"}},,,,,function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__3MNDj",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__2SZ7f"}},function(e,t,a){e.exports={Overlay:"Modal_Overlay__1nvlr",Modal:"Modal_Modal__ToHAX"}},,function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__UFJEX"}},function(e,t,a){e.exports={Button:"Button_Button__2Lijv"}},function(e,t,a){e.exports={App:"App_App__2U6F3"}},,,,,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(5),o=a.n(r),u=(a(18),a(10)),i=a(2),s=a(3),l=a.n(s),m=a(0),b=function(e){var t=e.onSubmit,a=Object(n.useState)(""),c=Object(i.a)(a,2),r=c[0],o=c[1];return Object(m.jsx)("header",{className:l.a.Searchbar,children:Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(r)},className:l.a.SearchForm,children:[Object(m.jsx)("button",{type:"submit",className:l.a.SearchFormButton,children:Object(m.jsx)("span",{className:l.a.SearchFormButtonLabel,children:"Search"})}),Object(m.jsx)("input",{className:l.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:r,name:"search",onChange:function(e){return o(e.target.value)}})]})})},j=a(8),h=a.n(j),f=function(e){var t=e.image,a=e.openModal,n=e.tags;return Object(m.jsx)("li",{onClick:a,className:h.a.ImageGalleryItem,children:Object(m.jsx)("img",{src:t,alt:n,className:h.a.ImageGalleryItemImage})})},d=a(11),g=a.n(d),p=function(e){var t=e.images,a=e.openModal;return Object(m.jsx)("ul",{className:g.a.ImageGallery,children:t.map((function(e){var t=e.tags,n=e.largeImageURL,c=e.webformatURL,r=e.id;return Object(m.jsx)(f,{openModal:function(){return a(n)},image:c,tags:t},r)}))})},O="24483038-cb7cc094485ab1051031cc5e6",_=a(12),S=a.n(_),x=function(e){var t=e.changePage;return Object(m.jsx)("button",{type:"button",className:S.a.Button,onClick:t,children:"Load more..."})},I=function(){return Object(m.jsx)("div",{children:"Loading..."})},v=a(9),y=a.n(v),F=document.querySelector("#modal-root");function N(e){var t=e.onClose,a=e.children;Object(n.useEffect)((function(){var e=function(e){"Escape"===e.code&&t()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}));return Object(r.createPortal)(Object(m.jsx)("div",{className:y.a.Overlay,onClick:function(e){e.target===e.currentTarget&&t()},role:"presentation",children:Object(m.jsx)("div",{className:y.a.Modal,children:a})}),F)}var G=a(13),w=a.n(G),B=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(1),o=Object(i.a)(r,2),s=o[0],l=o[1],j=Object(n.useState)(""),h=Object(i.a)(j,2),f=h[0],d=h[1],g=Object(n.useState)(!1),_=Object(i.a)(g,2),S=_[0],v=_[1],y=Object(n.useState)(!1),F=Object(i.a)(y,2),G=F[0],B=F[1],M=Object(n.useState)(""),k=Object(i.a)(M,2),L=k[0],C=k[1];Object(n.useEffect)((function(){""!==f&&(v((function(e){return!e})),function(){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return fetch("https://pixabay.com/api/?q=".concat(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"","&page=").concat(e,"&key=").concat(O,"&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return new Promise((function(t){return setTimeout((function(){return t(e)}),1e3)}))})).then((function(e){return e.json()})).then((function(e){return e.hits}))}(f,s).then((function(e){console.log("hits",e),c((function(t){return 1===s?e:[].concat(Object(u.a)(t),Object(u.a)(e))}))})).catch((function(e){return alert("Off")})).finally((function(){v(!1)})))}),[s,f]);return Object(m.jsxs)("div",{className:w.a.App,children:[Object(m.jsx)(b,{onSubmit:function(e){d(e),c([]),l(1)}}),Object(m.jsx)(p,{openModal:function(e){B(!0),C(e)},images:a}),S&&Object(m.jsx)(I,{}),a.length>0&&Object(m.jsx)(x,{changePage:function(){l((function(e){return e+1}))}}),G&&Object(m.jsx)(N,{onClose:function(){return B(!1)},children:Object(m.jsx)("img",{src:L,alt:""})})]})};o.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(B,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.3fc0e044.chunk.js.map
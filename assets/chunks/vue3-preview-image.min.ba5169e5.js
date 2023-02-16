import{x as q,y as W,z as _}from"../app.fddf7692.js";function $(k,O){for(var S=0;S<O.length;S++){const b=O[S];if(typeof b!="string"&&!Array.isArray(b)){for(const E in b)if(E!=="default"&&!(E in k)){const c=Object.getOwnPropertyDescriptor(b,E);c&&Object.defineProperty(k,E,c.get?c:{enumerable:!0,get:()=>b[E]})}}}return Object.freeze(Object.defineProperty(k,Symbol.toStringTag,{value:"Module"}))}var L={},ee={get exports(){return L},set exports(k){L=k}};const te=q(W);(function(k,O){(function(S,b){k.exports=b(te)})(self,function(S){return(()=>{var b={527:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(81),A=r.n(a),s=r(645),i=r.n(s)()(A());i.push([e.id,`.preview-wrap[data-v-05045522] {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  background: rgba(0, 0, 0, 0.5);
}
.preview-wrap li[data-v-05045522] {
  list-style: none;
}
.preview-wrap .preview[data-v-05045522] {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
}
.preview-wrap .preview-content[data-v-05045522] {
  position: relative;
  cursor: move;
  transition: 0.2s transform;
  max-height: 100vh;
}
.preview-wrap .preview-footer[data-v-05045522] {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}
.preview-wrap .preview-footer-tools[data-v-05045522] {
  display: flex;
  justify-content: center;
}
.preview-wrap .preview-footer-tools li[data-v-05045522] {
  margin-right: 10px;
  padding: 10px;
  border-radius: 50%;
  background: rgba(110, 110, 110, 0.7);
  cursor: pointer;
}
.preview-wrap .preview-footer-tools li > img[data-v-05045522] {
  display: block;
  width: 30px;
  height: 30px;
}
.preview-wrap .preview-footer-tools li:hover i[data-v-05045522] {
  color: #ef544e;
}
.preview-wrap .preview-footer-thumbs[data-v-05045522] {
  margin-top: 20px;
  max-width: 700px;
  overflow-x: auto;
  white-space: nowrap;
}
.preview-wrap .preview-footer-thumbs .thumb-item[data-v-05045522] {
  padding: 10px;
  margin-right: 10px;
  display: inline-block;
  background: rgba(102, 102, 102, 0.7);
  border-radius: 5px;
  cursor: pointer;
}
.preview-wrap .preview-footer-thumbs .thumb-item img[data-v-05045522] {
  width: 60px;
  height: 60px;
  object-fit: cover;
}
.preview-wrap .preview-footer-thumbs .thumb-item.active[data-v-05045522] {
  background: rgba(239, 84, 78, 0.7);
}
.preview-wrap .preview-footer-thumbs[data-v-05045522]::-webkit-scrollbar {
  height: 10px;
}
.preview-wrap .preview-footer-thumbs[data-v-05045522]::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: #d2d2d2;
  cursor: pointer;
}
.preview-wrap .preview-footer-thumbs[data-v-05045522]::-webkit-scrollbar-track {
  border-radius: 10px;
  background: #fff;
}
.preview-wrap .preview .close-icon[data-v-05045522] {
  padding: 10px;
  position: absolute;
  top: 30px;
  right: 30px;
  border-radius: 50%;
  background: rgba(110, 110, 110, 0.7);
  cursor: pointer;
}
.preview-wrap .preview .close-icon > img[data-v-05045522] {
  display: block;
  width: 30px;
  height: 30px;
}
`,""]);const l=i},645:e=>{e.exports=function(t){var r=[];return r.toString=function(){return this.map(function(a){var A="",s=a[5]!==void 0;return a[4]&&(A+="@supports (".concat(a[4],") {")),a[2]&&(A+="@media ".concat(a[2]," {")),s&&(A+="@layer".concat(a[5].length>0?" ".concat(a[5]):""," {")),A+=t(a),s&&(A+="}"),a[2]&&(A+="}"),a[4]&&(A+="}"),A}).join("")},r.i=function(a,A,s,i,l){typeof a=="string"&&(a=[[null,a,void 0]]);var u={};if(s)for(var p=0;p<this.length;p++){var v=this[p][0];v!=null&&(u[v]=!0)}for(var w=0;w<a.length;w++){var m=[].concat(a[w]);s&&u[m[0]]||(l!==void 0&&(m[5]===void 0||(m[1]="@layer".concat(m[5].length>0?" ".concat(m[5]):""," {").concat(m[1],"}")),m[5]=l),A&&(m[2]&&(m[1]="@media ".concat(m[2]," {").concat(m[1],"}")),m[2]=A),i&&(m[4]?(m[1]="@supports (".concat(m[4],") {").concat(m[1],"}"),m[4]=i):m[4]="".concat(i)),r.push(m))}},r}},81:e=>{e.exports=function(t){return t[1]}},379:e=>{var t=[];function r(s){for(var i=-1,l=0;l<t.length;l++)if(t[l].identifier===s){i=l;break}return i}function a(s,i){for(var l={},u=[],p=0;p<s.length;p++){var v=s[p],w=i.base?v[0]+i.base:v[0],m=l[w]||0,B="".concat(w," ").concat(m);l[w]=m+1;var x=r(B),I={css:v[1],media:v[2],sourceMap:v[3],supports:v[4],layer:v[5]};if(x!==-1)t[x].references++,t[x].updater(I);else{var N=A(I,i);i.byIndex=p,t.splice(p,0,{identifier:B,updater:N,references:1})}u.push(B)}return u}function A(s,i){var l=i.domAPI(i);return l.update(s),function(u){if(u){if(u.css===s.css&&u.media===s.media&&u.sourceMap===s.sourceMap&&u.supports===s.supports&&u.layer===s.layer)return;l.update(s=u)}else l.remove()}}e.exports=function(s,i){var l=a(s=s||[],i=i||{});return function(u){u=u||[];for(var p=0;p<l.length;p++){var v=r(l[p]);t[v].references--}for(var w=a(u,i),m=0;m<l.length;m++){var B=r(l[m]);t[B].references===0&&(t[B].updater(),t.splice(B,1))}l=w}}},569:e=>{var t={};e.exports=function(r,a){var A=function(s){if(t[s]===void 0){var i=document.querySelector(s);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch{i=null}t[s]=i}return t[s]}(r);if(!A)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");A.appendChild(a)}},216:e=>{e.exports=function(t){var r=document.createElement("style");return t.setAttributes(r,t.attributes),t.insert(r,t.options),r}},565:(e,t,r)=>{e.exports=function(a){var A=r.nc;A&&a.setAttribute("nonce",A)}},795:e=>{e.exports=function(t){var r=t.insertStyleElement(t);return{update:function(a){(function(A,s,i){var l="";i.supports&&(l+="@supports (".concat(i.supports,") {")),i.media&&(l+="@media ".concat(i.media," {"));var u=i.layer!==void 0;u&&(l+="@layer".concat(i.layer.length>0?" ".concat(i.layer):""," {")),l+=i.css,u&&(l+="}"),i.media&&(l+="}"),i.supports&&(l+="}");var p=i.sourceMap;p&&typeof btoa<"u"&&(l+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(p))))," */")),s.styleTagTransform(l,A,s.options)})(r,t,a)},remove:function(){(function(a){if(a.parentNode===null)return!1;a.parentNode.removeChild(a)})(r)}}}},589:e=>{e.exports=function(t,r){if(r.styleSheet)r.styleSheet.cssText=t;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(t))}}},744:(e,t)=>{t.Z=(r,a)=>{const A=r.__vccOpts||r;for(const[s,i]of a)A[s]=i;return A}},748:e=>{e.exports=S}},E={};function c(e){var t=E[e];if(t!==void 0)return t.exports;var r=E[e]={id:e,exports:{}};return b[e](r,r.exports,c),r.exports}c.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return c.d(t,{a:t}),t},c.d=(e,t)=>{for(var r in t)c.o(t,r)&&!c.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),c.r=e=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var R={};return(()=>{c.r(R),c.d(R,{closePreview:()=>z,default:()=>j,preview:()=>P});var e=c(748),t=n=>((0,e.pushScopeId)("data-v-05045522"),n=n(),(0,e.popScopeId)(),n),r=["src"],a={class:"preview-footer-tools"},A=[t(()=>(0,e.createElementVNode)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAA80lEQVRoQ+3YwQrDMAwD0PrL1355RkoPpaTgYknG4F52yYKelZUw24o/Vjz/1oDsBruBbiA4gT5CwQGGv94NhEcY3EDawBhjn3nN7PxEPDLAFf53hT5QCAngEX4a6gCY4c/jiDiHb3uww1MBivA0gCo8BbAIv5vZwTqq0N+AOjy0gYzwMEBWeAggM3wYkB2eAYBdEbxvrfBbSPnOX6HCgLlpJgICyETAAFkIKCADAQeoERSAEkEDqBBUgAJBB7AREsACAbtyyAA3RM0/tryXs6/rpA18DedZ3wDPlJhrugHmdD17dwOeKTHXdAPM6Xr2Lt/AH0f9gDGCNz2CAAAAAElFTkSuQmCC",alt:""},null,-1))],s=[t(()=>(0,e.createElementVNode)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAADC0lEQVRoQ+2YzYtNcRjHP98/wCBKokzEiNl5yUaZFCJkY2Eh8rJAFmQzFl7CKIqMUKORIgvlvbCQyYLIToOYjZewQAallB49+Z06jblz7+/ec7i3zlOn2zn3d36/5/N8fy/Pc0SDmxrcfwqA/61goUChQI0RKKZQTADNbDTQKqkn5r2h2v4zBcxsPbADmALskbQ7C4jcAcxsLNAFLAkO3wW2SHpa9wBmtgtIIv0T2AsclPQrC+e9j1wUCFF/AEwIjt4EDkny6GdqmQOY2TSgN3jZDxwFngMfgPuSXInMLA+AeUCpSD8DzgGnJH3OgiJzAHfKzLqBtcBl4A0wBpgJTApOu0Idks7XCpEXgO88vsuMADZLOhHApvoO5M+C412SNtYCkQtAcLYd2A+8BuZL6kscNbPVwNlw3yOprVqI3AACxCNgFtAtaV3aSTObATwOzzZJOlkNRN4APpXeBcdWSro4AGI48BBoAZZKuhELkStAUMEPMj/QeiW1DnTQzGYHiOuSltUdQIA4AvSXyn/M7B4wF1gsyQ+9ii13BSrxxMy2A4eBTklbK3knaVMvAMOAr0CfpMkNBxCm2S1gIdAk6VulEHWhQAA4DfhW2yLpRSMCJLtVW0zFVk8KnAHWNLICnsF6Jtt4a8DMxgFvSx12Q62HuphCZubZ6XHggKSdlS5gbxcNYGa+2D5J6owZqFRbM2vySg2YDiySdDum32oALAywQtKVmMEGaxsC4rnSBUmrYvurBmAfkMg8UtKX2EGT9ma2AEgiPkeSZ6ZRFg0QDp0kz/fbZkmvokb9U3ami/92SR2xfVS1BlLR81p3fLiveO6GOb8tpNj+ek1f6apSIAXhU8mnlNs14Kr/Svo4MJpm1gwsBzaEBetN/ipyYlWoCSBMJ194HlEvEd1+AC89swSehI9b7rwfUondAY5JcuiarGaAlBr+dcGvBGQwx7xYuSTJE7dMLDOAFMhEILlGAe9DXexf5b5n4nWqk8wBsnawXH8FQLkI5f1/oUDeES7Xf6FAuQjl/X/DK/AbtZPzMdM3hhkAAAAASUVORK5CYII=",alt:""},null,-1))],i=[t(()=>(0,e.createElementVNode)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAB0UlEQVRoQ+2ZMUsdQRSFv1OlMZAfkE5bIRgrm2ijYG/aWCRNUEggffQXJBBtBEHbhNSBNFpZxRAQLC38BSnSWB0Z2CeTl6fsvLfzdOJMt+ydM/fcc/fM7qwofKjw/KkEblvBqkBVYMQKDGwh29PAM+AJMDniGqNOPwV+AceSfvaD/UPA9iLwFZgYdeWO518A7yRtxbh/EbC9BnyKAs6A844TSYV7DExFk5Ykfe9dXxGwPQMcAQ+am7OSjlNXyxFvewX43GD/AeYknYTrmMArYKcJei7pS45khsW0/RT40cxf77VSTGAbeA18k7Q87EI559k+AOaBXUkv+xXo3dyUtJEzkWGxbYe83gOHkhbuNwHbq8BDSbFrJRc3BaczBWyHPgwtF8aCpMPkzIFUnEqgV+XUyl2nTirOWBWw/Qh40SS/L+l3P5G7TuAN8KFJ+q2kj5VAV/tAG+mbFgpWG8ZecS3UxlbbFCLGGetDXDyB6kIDJBxrC9ku3kbDRlZdqLrQIDtM9e879zIXEkr5ELlpT0jB6cyF2mxSOWL+ewLFH6sUf7BV9tFi4yzlHu5GH+zlHq9HJMr9wZHDv3Ni1r+UOavbBrsq0KZKOWOqAjmr2wb7Ev2uGk/D5C02AAAAAElFTkSuQmCC",alt:""},null,-1))],l=[t(()=>(0,e.createElementVNode)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAADI0lEQVRoQ+2YW4hOURTHf/+UUqSQIpfIKDN5mygPMilDuUQoUSL3mLwol4mZh5lH5ZpGU6I8KA8ooWTKi2I8CJGI8EDxoDwvrWkfHZrp+/a5zDdT36qv0z7f3uv8/+u/1957bTHKTaMcP3UCtVawrkBdgZwRqE+hdADNbBnwQtLPnIGtenhhCphZB3AKeAV0S7peNYocHYsk0AicB1oCnmuByJsc+CoOLYyAf8nMxgBHgZPAWOB7IHGmIpKMHQolkGAwM1fhCLAqvLsXiDzOiHPIYYUTMDOP/ApgLjAJOAxMDAhaJPUVSaIwAmbmYPcB24AFQ4AcmQTMbCtwDGgKwN8Dz4BvwExgPXBJ0v4io+++citgZj3A7gDsgq9EkgZWHjM7APi7j8BSSZ9HFAEzewT45uW2XdLVVCLPAx4Cs4A9ki4XDT6XAmbm0+FiANUsqf+/XbkX2AnclLSxDPCZCZjZauBOADVHkk+Rv2Zmm4AbwO8wdZ6PNAK3gTXAXkmeA/9YamqdkNRdFvhMCpiZb053gX5JzYOBC+eiRkmbywSflcBZ4BDQJulc2QAr+Y9eRs3sHeArzOThPDYPRSSKgJlNAH4B9yWtrBSd4fg/lsB84C3QK2nXcACs9I1YAr5p+ebVKckLmJpbLIFEgSuSdtQcfexZKJUDfZKSyqumPKIUcKRm9jKcOmdI+lpT9LEKBAJdwHHgoCQ/adbUsijQCniJ6LcPSyT5sprbQk3RELs4RBMIKviVyRagQ1JnXvRm1gYMFP6SojBFdU6Amtli4Elot0p6kJWEmU0NlZu76JLUHuMrE4GggpeQyUmzSdLrmA8HH7NDtebNp5IWxfrITCAASG7jvOlT6XS1OWFmSS752C+SvHaOtlwEAomkePGmJ7aXjrf+L3JC3ynAWmBdePrrdkm+smWy3AQCMAflibg8hcLvf7xS+wQsDCfYBmBc6OMlqCuW6w61EAKp5PYD3obUjdxgUXXgPYNVclkkKJRAish43yOA6cA04AfwwX+S/FmYlUKgMHRVOKoTqCJIpXapK1BqeKtwXlegiiCV2mXUK/AHaODuMa3oHxAAAAAASUVORK5CYII=",alt:""},null,-1))],u=[t(()=>(0,e.createElementVNode)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABS0lEQVRoQ+3YIW8CQRAF4Le/sgKBIKlAICoQCAoCgUBUVDSpqKjgX77myAiyocklO2/IJHMGcyzvm7njZq8h+dGS50cBnt3B6kB1YLACdQkNFnD469WB4RIOLuDWAZKHKUtr7fYZdbgALPy7hT5GIrwARwD7u6qHIVwAU3CSJwC7aIQbwBBnANtIhCvAEBcAb1EId4AhPgBs7hCH1tp0n7gfEoAhPgGs1QgZwBBfAF6VCCnAEN8AViqEHGCIHwBLBSIEYIhfAAtvRBjAEFcAL56IZwOGR44wAMn+EhoOf5t+3Z8sDxYk2d/ELuFDACT7v1G38HIAyf5B5hpeCiDZjxLu4WUAkv0wJwkvAZDMO06TzLuhSb2lJJl7U5/+tYoNanlfbEWMI//9RsgspAQWQFndOWtXB+ZUSXlOdUBZ3TlrVwfmVEl5TvoO/AFnAoAxEk6FgQAAAABJRU5ErkJggg==",alt:""},null,-1))],p={key:0,class:"preview-footer-thumbs"},v=["id","onClick"],w=["src"],m=t(()=>(0,e.createElementVNode)("span",{class:"close-icon"},[(0,e.createElementVNode)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAwCAYAAAC4wJK5AAABzUlEQVRoQ+3YXSsFURQG4Pf9ay79AET5KqIQUcQFR/kqQhRRRFHyH72amlPr4syxZ/aaOXOOPdcza9az1p6ZNZsYgYMjYEBCtKWLqROpE44VSMvJsZhRof5nJyStABgjORFVvoKLJXUAiORRaPxSnZC0B+AsD/7tDZF0AmA/j98JhZRFZNU5NBVyg0g6B7BrYh+TtPcqbEwpRBZFkjtE0iWAbZPlKcmDWpZTN6gnRNI1gE2T8AXJbNkGH6U74QmRdAdgzWR7RXInOPv8xMqI2KUl6QFA9qbrHjckt8oCsvOjEFUhkp4ALJmE70muVwG4IMpCJL0AWDAJP5JcrQpwQ4RCJL0BmDUJP5NcjgG4Iv6CSPoAMG0SfiW5GAtwRxRBAPwAmDQJv5Oc8wDUgiiA2Hw/Sc54AWpD9IF8kZzyBCREv2r2GEuGazn1mquG6sHuNxgOxSs2ZLJt9ccuBNB9KFo5dpQBGEh7BsAqAAMZ/CgeAzCQwf0UeQAMpPnfU0+AgTS3UVAHwECa2bKRtAHgNr+x256TgdS/eZZPp/MAxr13/wyk3m1M7xHaK170bodXIjFxEiKmep7Xpk54VjMmVupETPU8r02d8KxmTKxfONz8MSXjQ6gAAAAASUVORK5CYII=",alt:""})],-1));const B={data:()=>({show:!1,currentImg:"",currentIndex:0,imgList:[],imgKey:"",imgTop:0,imgLeft:0,startPageX:0,startPageY:0,imgScale:1,imgRotate:0}),watch:{show:{handler(n){n?(document.body.style.overflow="hidden",document.addEventListener("mousemove",this.preventDefault,!1)):(document.body.style.overflow="",document.removeEventListener("mousemove",this.preventDefault,!1),document.removeEventListener("mouseup",this.clearEvent,!1),this.reset())},immediate:!0},currentIndex(){this.imgTop=0,this.imgLeft=0,this.imgScale=1,this.imgRotate=0}},methods:{reset(){this.imgList=[],this.currentImg="",this.currentIndex=0,this.imgKey="",this.imgTop=0,this.imgLeft=0,this.startPageX=0,this.startPageY=0,this.imgScale=1,this.imgRotate=0},handleRotate(n){n==="left"?this.imgRotate-=90:this.imgRotate+=90},handleCut(n){if(!(this.imgList.length<2)){var o=null;n==="last"&&(o=this.currentIndex===0?this.imgList.length-1:this.currentIndex-1),n==="next"&&(o=this.currentIndex===this.imgList.length-1?0:this.currentIndex+1);var d=this.imgList[o];this.currentImg=this.imgKey?d[this.imgKey]:d,this.currentIndex=o,this.handleXScroll(o)}},handleXScroll(n){n=n<4?0:n-4;var o=document.querySelector(".preview-footer-thumbs"),d=document.querySelector("#thumb-item-"+n);o.scrollLeft=d.offsetLeft},handleClickThumb(n,o){var d=this.imgKey?n[this.imgKey]:n;this.currentImg=d,this.currentIndex=o,this.handleXScroll(o)},handerMousewheel(n){(n.wheelDelta>0||n.detail>0)&&this.imgScale<4?this.imgScale+=.1:(n.wheelDelta<0||n.detail<0)&&this.imgScale>.5&&(this.imgScale+=-.1)},handleMoveStart(n){var o=n.pageX,d=n.pageY;this.startPageX=o-this.imgLeft,this.startPageY=d-this.imgTop,document.addEventListener("mousemove",this.handleMore,!1),document.addEventListener("mouseup",this.clearEvent,!1),n.preventDefault()},clearEvent(){document.removeEventListener("mousemove",this.handleMore,!1)},handleMore(n){var o=n.pageX,d=n.pageY;this.imgTop=d-this.startPageY,this.imgLeft=o-this.startPageX,n.preventDefault()},preventDefault(n){n.preventDefault()}}};var x=c(379),I=c.n(x),N=c(795),K=c.n(N),Q=c(569),Z=c.n(Q),V=c(565),T=c.n(V),Y=c(216),H=c.n(Y),X=c(589),F=c.n(X),D=c(527),y={};y.styleTagTransform=F(),y.setAttributes=T(),y.insert=Z().bind(null,"head"),y.domAPI=K(),y.insertStyleElement=H(),I()(D.Z,y),D.Z&&D.Z.locals&&D.Z.locals;const J=(0,c(744).Z)(B,[["render",function(n,o,d,re,g,h){return g.show?((0,e.openBlock)(),(0,e.createElementBlock)("div",{key:0,class:"preview-wrap",onMousewheel:o[9]||(o[9]=function(){return h.handerMousewheel&&h.handerMousewheel(...arguments)})},[(0,e.createElementVNode)("div",{class:"preview",onClick:o[8]||(o[8]=C=>g.show=!1)},[(0,e.createElementVNode)("img",{class:"preview-content",src:g.currentImg,style:(0,e.normalizeStyle)({top:g.imgTop+"px",left:g.imgLeft+"px",transform:"scale(".concat(g.imgScale,") rotateZ(").concat(g.imgRotate,"deg)")}),onClick:o[0]||(o[0]=(0,e.withModifiers)(function(){return h.preventDefault&&h.preventDefault(...arguments)},["stop"])),onMousedown:o[1]||(o[1]=function(){return h.handleMoveStart&&h.handleMoveStart(...arguments)})},null,44,r),(0,e.createElementVNode)("div",{class:"preview-footer",onClick:o[7]||(o[7]=(0,e.withModifiers)(function(){return h.preventDefault&&h.preventDefault(...arguments)},["stop"]))},[(0,e.createElementVNode)("ul",a,[g.imgList.length?((0,e.openBlock)(),(0,e.createElementBlock)("li",{key:0,onClick:o[2]||(o[2]=C=>h.handleCut("last"))},A)):(0,e.createCommentVNode)("v-if",!0),(0,e.createElementVNode)("li",{onClick:o[3]||(o[3]=C=>h.handleRotate("left"))},s),(0,e.createElementVNode)("li",{onClick:o[4]||(o[4]=C=>g.imgScale=1)},i),(0,e.createElementVNode)("li",{onClick:o[5]||(o[5]=C=>h.handleRotate("right"))},l),g.imgList.length?((0,e.openBlock)(),(0,e.createElementBlock)("li",{key:1,onClick:o[6]||(o[6]=C=>h.handleCut("next"))},u)):(0,e.createCommentVNode)("v-if",!0)]),g.imgList.length?((0,e.openBlock)(),(0,e.createElementBlock)("div",p,[((0,e.openBlock)(!0),(0,e.createElementBlock)(e.Fragment,null,(0,e.renderList)(g.imgList,(C,M)=>((0,e.openBlock)(),(0,e.createElementBlock)("div",{id:"thumb-item-"+M,key:M,class:(0,e.normalizeClass)(["thumb-item",{active:g.currentIndex===M}]),onClick:oe=>h.handleClickThumb(C,M)},[(0,e.createElementVNode)("img",{src:g.imgKey?C[g.imgKey]:C},null,8,w)],10,v))),128))])):(0,e.createCommentVNode)("v-if",!0)]),m])],32)):(0,e.createCommentVNode)("v-if",!0)}],["__scopeId","data-v-05045522"]]),G=J;var f=null;function j(n){U(),n.config.globalProperties.$preview=P}function P(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],d=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"";if(f===null&&U(),n===""||n==null)throw"Vue3PreviewImage：请传入参数";if(typeof n=="number"){if(!o||!o.length)throw"Vue3PreviewImage：参数错误，第一个参数为索引时，请在第二个参数中传入数组";f.currentImg=d?o[n][d]:o[n],f.currentIndex=n}else f.currentImg=n,o.length||(f.imgList=[n]);f.imgList=o,f.imgKey=d,f.show=!0}function z(){f!==null&&f.show&&(f.show=!1)}function U(){var n=(0,e.createApp)(G),o=document.createElement("div");document.body.appendChild(o),f=n.mount(o)}})(),R})()})})(ee);const ne=_(L),ae=$({__proto__:null,default:ne},[L]);export{ae as v};

parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function n(n){return e(n)||a(n)||r(n)||t()}function t(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(n,t){if(n){if("string"==typeof n)return o(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(n,t):void 0}}function a(n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}function e(n){if(Array.isArray(n))return o(n)}function o(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=n[r];return a}var i=document.querySelector("ul");function c(n){var t=u(n);t.sort(function(n,t){var r=s(n.salary);return s(t.salary)-r}),n.innerHTML=t.map(function(n){return'\n      <li\n      data-position="'.concat(n.position,'"\n      data-salary="').concat(n.salary,'"\n      data-age="').concat(n.age,'"\n    >\n      ').concat(n.name,"\n    </li>\n    ")}).join("")}function u(t){return n(t.children).map(function(n){return{name:n.innerText,position:n.dataset.position,salary:n.dataset.salary,age:n.dataset.age}})}function s(n){return+n.replace(/[$,]/g,"")}c(i);
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.ca4c44b6.js.map
!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=7)}([function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var r=(a=o,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(u," */")),i=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([r]).join("\n")}var a,c,u;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);o&&r[u[0]]||(n&&(u[2]?u[2]="".concat(n," and ").concat(u[2]):u[2]=n),t.push(u))}},t}},function(e,t,n){var o=n(2),r=n(3);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};o(r,i);e.exports=r.locals||{}},function(e,t,n){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function c(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function u(e,t){for(var n={},o=[],r=0;r<e.length;r++){var i=e[r],u=t.base?i[0]+t.base:i[0],s=n[u]||0,l="".concat(u," ").concat(s);n[u]=s+1;var f=c(l),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==f?(a[f].references++,a[f].updater(p)):a.push({identifier:l,updater:b(p,t),references:1}),o.push(l)}return o}function s(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=n.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var l,f=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function p(e,t,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=f(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function h(e,t,n){var o=n.css,r=n.media,i=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var d=null,m=0;function b(e,t){var n,o,r;if(t.singleton){var i=m++;n=d||(d=s(t)),o=p.bind(null,n,i,!1),r=p.bind(null,n,i,!0)}else n=s(t),o=h.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var n=u(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var r=c(n[o]);a[r].references--}for(var i=u(e,t),s=0;s<n.length;s++){var l=c(n[s]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}n=i}}}},function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o)()(!1);r.push([e.i,"* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    font-family: sans-serif;\n}\n\nmain {\n    width: 90%;\n    max-width: 800px;\n    margin: 32px auto;\n}\n\nclub-list {\n    display: block;\n    margin-top: 32px;\n    width: 100%;\n    padding: 16px;\n }",""]),t.default=r},function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function r(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function i(e){var t="function"==typeof Map?new Map:void 0;return(i=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,o)}function o(){return a(e,arguments,s(this).constructor)}return o.prototype=Object.create(e.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),u(o,e)})(e)}function a(e,t,n){return(a=c()?Reflect.construct:function(e,t,n){var o=[null];o.push.apply(o,t);var r=new(Function.bind.apply(e,o));return n&&u(r,n.prototype),r}).apply(null,arguments)}function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var l=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(p,e);var t,n,i,a,l,f=(t=p,n=c(),function(){var e,o=s(t);if(n){var i=s(this).constructor;e=Reflect.construct(o,arguments,i)}else e=o.apply(this,arguments);return r(this,e)});function p(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),(e=f.call(this)).shadowDOM=e.attachShadow({mode:"open"}),e}return i=p,(a=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.shadowDOM.innerHTML="\n        <style>\n            * {\n                margin: 0;\n                padding: 0;\n                box-sizing: border-box;\n            }\n            :host {\n                display: block;\n                width: 100%;\n                background-color: #ff4301;\n                color: white;\n                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n            }\n            h2 {\n                padding: 16px;\n            }\n        </style>\n        <h2>Meal Finder</h2>"}}])&&o(i.prototype,a),l&&o(i,l),p}(i(HTMLElement));customElements.define("app-bar",l)},function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function r(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function i(e){var t="function"==typeof Map?new Map:void 0;return(i=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,o)}function o(){return a(e,arguments,s(this).constructor)}return o.prototype=Object.create(e.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),u(o,e)})(e)}function a(e,t,n){return(a=c()?Reflect.construct:function(e,t,n){var o=[null];o.push.apply(o,t);var r=new(Function.bind.apply(e,o));return n&&u(r,n.prototype),r}).apply(null,arguments)}function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var l=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(p,e);var t,n,i,a,l,f=(t=p,n=c(),function(){var e,o=s(t);if(n){var i=s(this).constructor;e=Reflect.construct(o,arguments,i)}else e=o.apply(this,arguments);return r(this,e)});function p(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),(e=f.call(this)).shadowDOM=e.attachShadow({mode:"open"}),e}return i=p,(a=[{key:"render",value:function(){this.shadowDOM.innerHTML='\n            <style>\n                * {\n                    margin: 0;\n                    padding: 0;\n                    box-sizing: border-box;\n                }\n                :host {\n                    display: block;\n                    margin-bottom: 18px;\n                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n                    border-radius: 10px;\n                    overflow: hidden;\n                }\n                \n                .fan-art-club {\n                    width: 100%;\n                    max-height: 600px;\n                    object-fit: cover;\n                    object-position: center;\n                }\n                \n                .club-info {\n                    padding: 24px;\n                }\n                \n                .club-info > h2 {\n                    font-weight: lighter;\n                }\n                \n                .club-info > p {\n                    margin-top: 10px;\n                    overflow: hidden;\n                    text-overflow: ellipsis;\n                    display: -webkit-box;\n                    -webkit-box-orient: vertical;\n                    -webkit-line-clamp: 10; /* number of lines to show */\n                }\n            </style>\n            <img class="fan-art-club" src="'.concat(this._club.mealThumb,'" alt="Fan Art">\n            <div class="club-info">\n                <h2>').concat(this._club.name,"</h2>\n                <p>").concat(this._club.instructions,"</p>\n            </div>")}},{key:"club",set:function(e){this._club=e,this.render()}}])&&o(i.prototype,a),l&&o(i,l),p}(i(HTMLElement));customElements.define("club-item",l)},function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function r(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function i(e){var t="function"==typeof Map?new Map:void 0;return(i=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,o)}function o(){return a(e,arguments,s(this).constructor)}return o.prototype=Object.create(e.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),u(o,e)})(e)}function a(e,t,n){return(a=c()?Reflect.construct:function(e,t,n){var o=[null];o.push.apply(o,t);var r=new(Function.bind.apply(e,o));return n&&u(r,n.prototype),r}).apply(null,arguments)}function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var l=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(p,e);var t,n,i,a,l,f=(t=p,n=c(),function(){var e,o=s(t);if(n){var i=s(this).constructor;e=Reflect.construct(o,arguments,i)}else e=o.apply(this,arguments);return r(this,e)});function p(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),(e=f.call(this)).shadowDOM=e.attachShadow({mode:"open"}),e}return i=p,(a=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.shadowDOM.innerHTML='\n        <style>\n        .search-container {\n            max-width: 800px;\n            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n            padding: 16px;\n            border-radius: 5px;\n            display: flex;\n            position: sticky;\n            top: 10px;\n            background-color: white;\n        }\n        \n        .search-container > input {\n            width: 75%;\n            padding: 16px;\n            border: 0;\n            border-bottom: 1px solid #ff4301;\n            font-weight: bold;\n        }\n        \n        .search-container > input:focus {\n            outline: 0;\n            border-bottom: 2px solid #ff4301;\n        }\n        \n        .search-container > input:focus::placeholder {\n            font-weight: bold;\n        }\n        \n        .search-container >  input::placeholder {\n            color: #ff4301;\n            font-weight: normal;\n        }\n        \n        .search-container > button {\n            width: 23%;\n            cursor: pointer;\n            margin-left: auto;\n            padding: 16px;\n            background-color: #ff4301;\n            color: white;\n            border: 0;\n            text-transform: uppercase;\n        }\n        \n        @media screen and (max-width: 550px){\n            .search-container {\n                flex-direction: column;\n                position: static;\n            }\n        \n            .search-container > input {\n                width: 100%;\n                margin-bottom: 12px;\n            }\n        \n            .search-container > button {\n                width: 100%;\n            }\n        }\n        </style>\n        <div id="search-container" class="search-container">\n            <input placeholder="Search Meal" id="searchElement" type="search">\n            <button id="searchButtonElement" type="submit">Search</button>\n        </div>\n        ',this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click",this._clickEvent)}},{key:"clickEvent",set:function(e){this._clickEvent=e,this.render()}},{key:"value",get:function(){return this.shadowDOM.querySelector("#searchElement").value}}])&&o(i.prototype,a),l&&o(i,l),p}(i(HTMLElement));customElements.define("search-bar",l)},function(e,t,n){"use strict";n.r(t);n(1),n(4),n(5);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function a(e){var t="function"==typeof Map?new Map:void 0;return(a=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,o)}function o(){return c(e,arguments,l(this).constructor)}return o.prototype=Object.create(e.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),s(o,e)})(e)}function c(e,t,n){return(c=u()?Reflect.construct:function(e,t,n){var o=[null];o.push.apply(o,t);var r=new(Function.bind.apply(e,o));return n&&s(r,n.prototype),r}).apply(null,arguments)}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var f=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(p,e);var t,n,o,a,c,f=(t=p,n=u(),function(){var e,o=l(t);if(n){var r=l(this).constructor;e=Reflect.construct(o,arguments,r)}else e=o.apply(this,arguments);return i(this,e)});function p(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),(e=f.call(this)).shadowDOM=e.attachShadow({mode:"open"}),e}return o=p,(a=[{key:"renderError",value:function(e){this.shadowDOM.innerHTML="\n        <style>\n            .placeholder {\n                font-weight: lighter;\n                color: rgba(0,0,0,0.5);\n                -webkit-user-select: none;\n                -moz-user-select: none;\n                -ms-user-select: none;\n                user-select: none;\n            }\n        </style>\n        ",this.shadowDOM.innerHTML+='<h2 class="placeholder">'.concat(e,"</h2>")}},{key:"render",value:function(){var e=this;this.shadowDOM.innerHTML="",this._clubs.forEach((function(t){var n=document.createElement("club-item");n.club=t,e.shadowDOM.appendChild(n)}))}},{key:"clubs",set:function(e){this._clubs=e,this.render()}}])&&r(o.prototype,a),c&&r(o,c),p}(a(HTMLElement));customElements.define("club-list",f);n(6);var p=[{name:"Honey Teriyaki Salmon",category:"Seafood",mealThumb:"https://www.themealdb.com/images/media/meals/xxyupu1468262513.jpg",instructions:"Mix all the ingredients in the Honey Teriyaki Glaze together. Whisk to blend well. Combine the salmon and the Glaze together. Heat up a skillet on medium-low heat. Add the oil, Pan-fry the salmon on both sides until it’s completely cooked inside and the glaze thickens. Garnish with sesame and serve immediately."},{name:"Spicy Arrabiata Penne",category:"Vegetarian",mealThumb:"https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg",instructions:"Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook according to the package instructions, about 9 minutes. In a large skillet over medium-high heat, add the olive oil and heat until the oil starts to shimmer. Add the garlic and cook, stirring, until fragrant, 1 to 2 minutes. Add the chopped tomatoes, red chile flakes, Italian seasoning and salt and pepper to taste. Bring to a boil and cook for 5 minutes. Remove from the heat and add the chopped basil. Drain the pasta and add it to the sauce. Garnish with Parmigiano-Reggiano flakes and more basil and serve warm."},{name:"Rocky Road Fudge",category:"Dessert",mealThumb:"https://www.themealdb.com/images/media/meals/vtxyxv1483567157.jpg",instructions:"Line an 8-inch-square baking pan with wax paper or foil, and coat with non-stick spray. Pour ½ cup of the miniature marshmallows into the bottom of the lined baking dish. In a microwave-safe bowl, combine the chocolate chips and peanut butter. Microwave the chocolate mixture in 20-second intervals, stirring in between each interval, until the chocolate is melted. Add the vanilla extract and stir well, until smooth. Reserve 2 tablespoons of the chopped almonds or peanuts, and set aside. Fold 1 ½ cups of the miniature marshmallows and the remaining chopped nuts into the chocolate mixture. Transfer the chocolate mixture into the prepared pan and spread into an even layer. Immediately top with the reserved chopped nuts and the mallow bits or additional miniature marshmallows, if using. Refrigerate for 4 hours, or until set. Remove the fudge and wax paper from the pan. Carefully peel all of wax paper from the fudge. Cut the fudge into bite-sized pieces and serve."},{name:"Vegan Chocolate Cake",category:"Vegan",mealThumb:"https://www.themealdb.com/images/media/meals/qxutws1486978099.jpg",instructions:"Simply mix all dry ingredients with wet ingredients and blend altogether. Bake for 45 min on 180 degrees. Decorate with some melted vegan chocolate."},{name:"Garides Saganaki",category:"Seafood",mealThumb:"https://www.themealdb.com/images/media/meals/wuvryu1468232995.jpg",instructions:"Place the prawns in a pot and add enough water to cover. Boil for 5 minutes. Drain, reserving the liquid, and set aside. Heat 2 tablespoons of oil in a saucepan. Add the onion; cook and stir until soft. Mix in the parsley, wine, tomatoes, garlic and remaining olive oil. Simmer, stirring occasionally, for about 30 minutes, or until the sauce is thickened. While the sauce is simmering, the prawns should become cool enough to handle. First remove the legs by pinching them, and then pull off the shells, leaving the head and tail on. When the sauce has thickened, stir in the prawns. Bring to a simmer again if the sauce has cooled with the prawns, and cook for about 5 minutes. Add the feta and remove from the heat. Let stand until the cheese starts to melt. Serve warm with slices of crusty bread. Though completely untraditional, you can add a few tablespoons of stock or passata to this recipe to make a delicious pasta sauce. Toss with pasta after adding the feta, and serve."},{name:"Pancakes",category:"Dessert",mealThumb:"https://www.themealdb.com/images/media/meals/rwuyqx1511383174.jpg",instructions:"Put the flour, eggs, milk, 1 tbsp oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter. Set aside for 30 mins to rest if you have time, or start cooking straight away. Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper. When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go. Serve with lemon wedges and sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months."},{name:"Bean & Sausage Hotpot",category:"Miscellaneous",mealThumb:"https://www.themealdb.com/images/media/meals/vxuyrx1511302687.jpg",instructions:"In a large casserole, fry the sausages until brown all over – about 10 mins. Add the tomato sauce, stirring well, then stir in the beans, treacle or sugar and mustard. Bring to the simmer, cover and cook for 30 mins. Great served with crusty bread or rice."}];function h(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var d=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,o;return t=e,o=[{key:"searchClub",value:function(e){return new Promise((function(t,n){var o=p.filter((function(t){return t.name.toUpperCase().includes(e.toUpperCase())}));o.length?t(o):n("".concat(e,' is not found"'))}))}}],(n=null)&&h(t.prototype,n),o&&h(t,o),e}(),m=function(){var e=document.querySelector("search-bar"),t=document.querySelector("club-list"),n=function(e){t.clubs=e},o=function(e){t.renderError(e)};e.clickEvent=function(){d.searchClub(e.value).then(n).catch(o)}};document.addEventListener("DOMContentLoaded",m)}]);
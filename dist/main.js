!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r=function(){let e=document.querySelector(".menu-Div");if(document.body.contains(e))return;let t=document.querySelectorAll(".nav-li");document.querySelector(".nav-li").classList.contains("li-dropdown")&&t.forEach(e=>e.classList.remove("li-dropdown"));let n=document.createElement("div");n.className="menu-Div";let r=document.createElement("p"),o=document.createElement("p"),a=document.querySelector(".story"),i=document.querySelector("body"),s=(document.querySelector(".hhflex-wrapper"),document.querySelector(".special-events-email"),document.querySelector(".reservations-div"));i.insertBefore(n,a),n.appendChild(r),n.appendChild(o),r.className="menu-content",o.className="menu-content",r.innerHTML='\n    <span class ="sectionTitle"><em> Starting Off</em></span> <br> \n    <strong> Fixe Biscuits,</strong> whipped Steen’s butter  9   N’duja, Preserves, or Local Honey  1ea <br>\n    <strong> Sweet Tea Pickles</strong>  8 <br> \n    <strong> Pimento Cheese,</strong> pickled green tomato, beef fat focaccia  10 <br>\n    <strong> Deviled Eggs,</strong> fermented cabbage, smoked trout roe, grated ham  9 <br> \n    <strong> Smoked Trout Dip,</strong> buttermilk, horseradish, smoked trout roe, Carolina gold rice crackers  9 <br> \n    <strong> Little Gem Salad,</strong> aged cheddar vinaigrette, pork cracklins, multi-grain croutons, Haus Bar egg  10 <br> \n    <strong> Beets,</strong> pickled & cooked, sunchoke, mushroom, fermented ranch  10 <br>  \n    <strong> Crispy Catfish, </strong> Superior Farms catfish, smoked uni tartar, nori, kimchi collards  13 <br> \n    <strong> Grilled Shrimp,</strong> white beans, ham shank, arugula, horseradish  16 <br>  \n    <strong> Tuna Tartare, </strong> butternut squash, pumpkin seed, garlic cream, crispy cornbread  18 <br>  \n    <strong> Beef Tartare,</strong> crispy oysters, pickled blueberry, cornmeal pancakes, celery root remoulade  19',o.innerHTML='\n    <span class = "sectionTitle"><em> Something More <em></span> <br>\n    <strong>Fried Chicken,</strong> buttermilk, kale, green apple, spicy honey    21 <br> \n    <strong>Duroc Pork Shoulder,</strong> potlikker pinto beans, mustard greens, jalapeno-kale emulsion    27 <br> \n    <strong>Red Grouper,</strong> Carolina gold rice grits, local beans, sweet corn & red pepper chow chow, benne seed furikake    32 <br> \n    <strong>‘Blackened’ Red Snapper,</strong> rock shrimp, bone marrow, toasted farro, butternut squash, hot & sour nage    32 <br> \n    <strong> Duck Breast,</strong> duck and preserved cabbage ragout, smoked seaweeds, apple jus    28 <br> \n    <strong> Lobster & Crawfish Pot Pie,</strong> Maine Lobster, Louisiana crawfish,  mushrooms, sweet corn béchamel    30 <br> \n    <strong> Heritage Pork Chop, </strong> smoked & grilled, braised collards, bacon jam, Fixe barrel-aged old fashion sauce    45 <br> \n    <strong> Dry Aged Ribeye,</strong> USDA Prime, cornbread & gouda fondue   48 <br> \n    <strong> 32 oz USDA Prime Porterhouse,</strong> smokey bleu cheese butter, caramelized onion jus    90 <br> \n    ',document.body.contains(a)?a.remove():document.body.contains(s)&&s.remove()};var o=function(){let e=document.querySelector(".reservations-div");if(document.body.contains(e))return;let t=document.querySelectorAll(".nav-li");document.querySelector(".nav-li").classList.contains("li-dropdown")&&t.forEach(e=>e.classList.remove("li-dropdown"));let n=document.createElement("div");n.className="reservations-div";let r=document.createElement("span");r.id="city-name",r.textContent="Austin";let o=document.createElement("div");o.className="form-container";let a=document.createElement("form");a.className="form-wrapper";let i=document.createElement("input");i.setAttribute("type","date"),i.id="input-date";let s=document.createElement("label");s.innerHTML='<label for = "input-date"> Date </label>';let l=document.createElement("input");l.setAttribute("type","time"),l.setAttribute("value","12:00"),l.id="input-time";let c=document.createElement("label");c.innerHTML='<label for ="input-time"> Time </label>';let d=document.createElement("SELECT");d.id="select-party-size";let u=document.createElement("label");u.innerHTML='<label for ="select-party-size"> Party Size </label>';let m=document.createElement("button");m.className="submit-reservation-button",m.setAttribute("type","button"),m.textContent="Find A Table";var p=[];for(let e=1;e<=12;e++){let t=document.createElement("option");t.className="options",t.innerHTML=`<option value ='${e}'> ${e} </option> `,p.push(t)}document.querySelector("body").appendChild(n),n.appendChild(r),n.appendChild(o),o.appendChild(a),a.appendChild(s),a.appendChild(i),a.appendChild(c),a.appendChild(l),a.appendChild(u),a.appendChild(d);for(let e=0;e<p.length;e++)d.appendChild(p[e]);a.appendChild(m);let h=document.querySelector(".story"),b=(document.querySelector(".hhflex-wrapper"),document.querySelector(".special-events-email"),document.querySelector(".menu-Div"));document.body.contains(h)?h.remove():document.body.contains(b)&&b.remove()};var a=function(){let e=document.querySelector(".story");if(document.body.contains(e))return;let t=document.querySelectorAll(".nav-li");document.querySelector(".nav-li").classList.contains("li-dropdown")&&t.forEach(e=>e.classList.remove("li-dropdown"));let n=document.querySelector(".menu-Div"),r=document.createElement("div");r.className="story";let o=document.createElement("p"),a=document.createElement("p"),i=document.querySelector("body"),s=(document.querySelector(".happy-hour"),document.querySelector(".reservations-div"));i.appendChild(r),r.appendChild(o),r.appendChild(a),o.innerHTML="OUR STORY <br> \n    Open the doors to Fixe any night of the week, and prepare to be transplanted. \n    Your experience will take you back to that feeling of your most memorable \n    Sunday supper, as your favorite Southern classics are elevated with new and \n    exciting flavors created by Chef James Robert. The Louisiana native spent his\n    childhood cooking in the kitchen with his mother and grandmother, and every \n    part of Fixe is an ode to Chef’s Southern heritage. Our refined interpretation \n    of family dinner may sound familiar with biscuits and fried chicken on the menu,\n    but each dish has been infused with surprising flavors that are prepared in Chef’s\n     modern style.",o.id="story1",a.innerHTML=" After working together for 13 years, Fixe’s Co-owner, Keith House, and Chef Robert started thinking about opening a\n     restaurant of their own. The concept for what Fixe would be, began with Chef Robert writing down his favorite ingredients and that list became the foundation for everything we do. Our name is inspired by that feeling we aim to evoke in every part of the restaurant—you will crave the food and warm, welcoming experience so much that you have to go back to get your fixe (with the addition of an e for our Cajun roots, of course).\n     The open kitchen will give diners a front row seat to all the action, as Chef Robert and his team create dishes you will never forget. Grab a barrel aged cocktail, have a seat in one of our intimate private dining rooms, or right at the chef’s table, and stay awhile. We can’t wait to have you!",a.id="story2",document.body.contains(s)?s.remove():document.body.contains(n)&&n.remove()},i=document.querySelector("header");const s=document.getElementById("menu"),l=document.getElementById("fixe-logo"),c=document.getElementById("hamburger"),d=document.querySelectorAll(".nav-li"),u=document.getElementById("reservations"),m=document.querySelector(".slide-container"),p=document.querySelectorAll(".slide-arrow"),h=document.getElementById("previous"),b=document.getElementById("next"),g=()=>{d.forEach(e=>e.classList.toggle("li-dropdown"))};let y=1,f=document.querySelectorAll(".slide-image"),v=window.setInterval(E,7e3),w=0;function k(){let e=window.innerWidth;e>720||(e<=720&&(w+=1),1==w&&(c.addEventListener("click",function(e){g()}),d.forEach(e=>e.addEventListener("click",function(e){g()}))))}function S(){for(let e=0;e<f.length;e++)f[e].style.opacity="0";f[y-1].style.visibility="visible",f[y-1].style.transition="opacity 1s ease-in-out",f[y-1].style.opacity="1"}function E(){clearInterval(v),v=window.setInterval(E,8e3),(y+=1)>f.length&&(y=1),S()}a(),k(),S(),window.onresize=k,window.addEventListener("scroll",function(e){window.scrollY>=.7*this.innerHeight-110?i.classList.add("backgroundChange"):i.classList.remove("backgroundChange")}),m.addEventListener("mouseover",function(){document.querySelector(".nav-li").classList.contains("li-dropdown")||window.innerWidth>350&&p.forEach(e=>e.style.display="block")}),m.addEventListener("mouseout",function(){window.innerWidth>350&&p.forEach(e=>e.style.display="none")}),b.addEventListener("click",E),h.addEventListener("click",function(){clearInterval(v),v=window.setInterval(E,8e3),(y-=1)<1&&(y=f.length);S()}),s.addEventListener("click",r),l.addEventListener("click",a),u.addEventListener("click",o)}]);
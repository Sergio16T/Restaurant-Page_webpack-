!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r=function(){let e=document.querySelector(".menu-Div");if(document.body.contains(e))return;let t=document.createElement("div");t.className="menu-Div";let n=document.createElement("p"),r=document.createElement("p"),o=document.querySelector(".story"),a=document.querySelector("body"),i=(document.querySelector(".hhflex-wrapper"),document.querySelector(".special-events-email"),document.querySelector(".reservations-div"));a.insertBefore(t,o),t.appendChild(n),t.appendChild(r),n.className="menu-content",r.className="menu-content",n.innerHTML='\n    <span class ="sectionTitle"><em> Starting Off</em></span> <br> \n    <strong> Fixe Biscuits,</strong> whipped Steen’s butter  9   N’duja, Preserves, or Local Honey  1ea <br>\n    <strong> Sweet Tea Pickles</strong>  8 <br> \n    <strong> Pimento Cheese,</strong> pickled green tomato, beef fat focaccia  10 <br>\n    <strong> Deviled Eggs,</strong> fermented cabbage, smoked trout roe, grated ham  9 <br> \n    <strong> Smoked Trout Dip,</strong> buttermilk, horseradish, smoked trout roe, Carolina gold rice crackers  9 <br> \n    <strong> Little Gem Salad,</strong> aged cheddar vinaigrette, pork cracklins, multi-grain croutons, Haus Bar egg  10 <br> \n    <strong> Beets,</strong> pickled & cooked, sunchoke, mushroom, fermented ranch  10 <br>  \n    <strong> Crispy Catfish, </strong> Superior Farms catfish, smoked uni tartar, nori, kimchi collards  13 <br> \n    <strong> Grilled Shrimp,</strong> white beans, ham shank, arugula, horseradish  16 <br>  \n    <strong> Tuna Tartare, </strong> butternut squash, pumpkin seed, garlic cream, crispy cornbread  18 <br>  \n    <strong> Beef Tartare,</strong> crispy oysters, pickled blueberry, cornmeal pancakes, celery root remoulade  19',r.innerHTML='\n    <span class = "sectionTitle"><em> Something More <em></span> <br>\n    <strong>Fried Chicken,</strong> buttermilk, kale, green apple, spicy honey    21 <br> \n    <strong>Duroc Pork Shoulder,</strong> potlikker pinto beans, mustard greens, jalapeno-kale emulsion    27 <br> \n    <strong>Red Grouper,</strong> Carolina gold rice grits, local beans, sweet corn & red pepper chow chow, benne seed furikake    32 <br> \n    <strong>‘Blackened’ Red Snapper,</strong> rock shrimp, bone marrow, toasted farro, butternut squash, hot & sour nage    32 <br> \n    <strong> Duck Breast,</strong> duck and preserved cabbage ragout, smoked seaweeds, apple jus    28 <br> \n    <strong> Lobster & Crawfish Pot Pie,</strong> Maine Lobster, Louisiana crawfish,  mushrooms, sweet corn béchamel    30 <br> \n    <strong> Heritage Pork Chop, </strong> smoked & grilled, braised collards, bacon jam, Fixe barrel-aged old fashion sauce    45 <br> \n    <strong> Dry Aged Ribeye,</strong> USDA Prime, cornbread & gouda fondue   48 <br> \n    <strong> 32 oz USDA Prime Porterhouse,</strong> smokey bleu cheese butter, caramelized onion jus    90 <br> \n    ',document.body.contains(o)?o.remove():document.body.contains(i)&&i.remove()};var o=function(){let e=document.querySelector(".reservations-div");if(document.body.contains(e))return;let t=document.createElement("div");t.className="reservations-div";let n=document.createElement("span");n.id="city-name",n.textContent="Austin";let r=document.createElement("div");r.className="form-container";let o=document.createElement("form");o.className="form-wrapper";let a=document.createElement("input");a.setAttribute("type","date"),a.id="input-date";let i=document.createElement("label");i.innerHTML='<label for = "input-date"> Date </label>';let s=document.createElement("input");s.setAttribute("type","time"),s.setAttribute("value","12:00"),s.id="input-time";let l=document.createElement("label");l.innerHTML='<label for ="input-time"> Time </label>';let c=document.createElement("SELECT");c.id="select-party-size";let d=document.createElement("label");d.innerHTML='<label for ="select-party-size"> Party Size </label>';let u=document.createElement("option");u.className="options",u.innerHTML="<option value ='1'>1 </option> ";let m=document.createElement("option");m.className="options",m.innerHTML="<option value ='2'> 2 </option> ";let p=document.createElement("button");p.className="submit-reservation-button",p.setAttribute("type","button"),p.textContent="Find A Table",document.querySelector("body").appendChild(t),t.appendChild(n),t.appendChild(r),r.appendChild(o),o.appendChild(i),o.appendChild(a),o.appendChild(l),o.appendChild(s),o.appendChild(d),o.appendChild(c),c.appendChild(u),c.appendChild(m),o.appendChild(p);let h=document.querySelector(".story"),b=(document.querySelector(".hhflex-wrapper"),document.querySelector(".special-events-email"),document.querySelector(".menu-Div"));document.body.contains(h)?h.remove():document.body.contains(b)&&b.remove()},a=document.querySelector("header");const i=document.getElementById("menu"),s=document.getElementById("fixe-logo"),l=document.getElementById("hamburger"),c=document.querySelectorAll("li"),d=document.getElementById("reservations"),u=document.querySelector(".slide-container"),m=document.querySelectorAll(".slide-arrow"),p=document.getElementById("previous"),h=document.getElementById("next"),b=()=>{c.forEach(e=>e.classList.toggle("li-dropdown"))};l.addEventListener("click",function(e){b()}),c.forEach(e=>e.addEventListener("click",function(e){b()})),window.addEventListener("scroll",function(e){window.scrollY>=355?a.style.backgroundColor="black":a.style.backgroundColor="transparent"}),u.addEventListener("mouseover",function(){m.forEach(e=>e.style.display="block")}),u.addEventListener("mouseout",function(){m.forEach(e=>e.style.display="none")});let y=1,g=document.querySelectorAll(".slide-image");console.log(g),h.addEventListener("click",function(){(y+=1)>g.length&&(y=1);for(let e=0;e<g.length;e++)g[e].style.opacity="0";g[y-1].style.visibility="visible",g[y-1].style.transition="opacity .8s ease-in-out",g[y-1].style.opacity="1"}),p.addEventListener("click",function(){(y-=1)<1&&(y=g.length);for(let e=0;e<g.length;e++)g[e].style.opacity="0";g[y-1].style.opacity="1",g[y-1].style.transition="opacity .8s ease-in-out",g[y-1].style.visibility="visible"}),i.addEventListener("click",r),s.addEventListener("click",function(){let e=document.querySelector(".story");if(document.body.contains(e))return;let t=document.querySelector(".menu-Div"),n=document.createElement("div");n.className="story";let r=document.createElement("p"),o=document.createElement("p"),a=document.querySelector("body"),i=document.querySelector(".happy-hour"),s=document.querySelector(".reservations-div");a.insertBefore(n,i),n.appendChild(r),n.appendChild(o),r.innerHTML="OUR STORY <br> \n    Open the doors to Fixe any night of the week, and prepare to be transplanted. \n    Your experience will take you back to that feeling of your most memorable \n    Sunday supper, as your favorite Southern classics are elevated with new and \n    exciting flavors created by Chef James Robert. The Louisiana native spent his\n    childhood cooking in the kitchen with his mother and grandmother, and every \n    part of Fixe is an ode to Chef’s Southern heritage. Our refined interpretation \n    of family dinner may sound familiar with biscuits and fried chicken on the menu,\n    but each dish has been infused with surprising flavors that are prepared in Chef’s\n     modern style.",r.id="story1",o.innerHTML=" After working together for 13 years, Fixe’s Co-owner, Keith House, and Chef Robert started thinking about opening a\n     restaurant of their own. The concept for what Fixe would be, began with Chef Robert writing down his favorite ingredients and that list became the foundation for everything we do. Our name is inspired by that feeling we aim to evoke in every part of the restaurant—you will crave the food and warm, welcoming experience so much that you have to go back to get your fixe (with the addition of an e for our Cajun roots, of course).\n     The open kitchen will give diners a front row seat to all the action, as Chef Robert and his team create dishes you will never forget. Grab a barrel aged cocktail, have a seat in one of our intimate private dining rooms, or right at the chef’s table, and stay awhile. We can’t wait to have you!",o.id="story2",document.body.contains(s)?s.remove():document.body.contains(t)&&t.remove()}),d.addEventListener("click",o)}]);
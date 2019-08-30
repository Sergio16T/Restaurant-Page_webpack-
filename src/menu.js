const renderMenu = function renderMenuPage() { 
    let menuExists = document.querySelector('.menu-Div'); 
    if (document.body.contains(menuExists)) return; 
    let menuDiv = document.createElement('div'); 
    menuDiv.className ='menu-Div'; 
    let menuP1 = document.createElement('p'); 
    let menuP2 = document.createElement('p'); 
    let story= document.querySelector('.story');
    let parentDiv = document.querySelector('body');
    let happyHourDiv = document.querySelector('.hhflex-wrapper'); 
    let specialEventsDiv = document.querySelector('.special-events-email'); 
    let reservationsDiv = document.querySelector('.reservations-div'); 
    parentDiv.insertBefore(menuDiv, story); 
    menuDiv.appendChild(menuP1);
    menuDiv.appendChild(menuP2); 
    menuP1.className = 'menu-content';
    menuP2.className = 'menu-content'; 
    menuP1.innerHTML = `
    <span class ="sectionTitle"><em> Starting Off</em></span> <br> 
    <strong> Fixe Biscuits,</strong> whipped Steen’s butter  9   N’duja, Preserves, or Local Honey  1ea <br>
    <strong> Sweet Tea Pickles</strong>  8 <br> 
    <strong> Pimento Cheese,</strong> pickled green tomato, beef fat focaccia  10 <br>
    <strong> Deviled Eggs,</strong> fermented cabbage, smoked trout roe, grated ham  9 <br> 
    <strong> Smoked Trout Dip,</strong> buttermilk, horseradish, smoked trout roe, Carolina gold rice crackers  9 <br> 
    <strong> Little Gem Salad,</strong> aged cheddar vinaigrette, pork cracklins, multi-grain croutons, Haus Bar egg  10 <br> 
    <strong> Beets,</strong> pickled & cooked, sunchoke, mushroom, fermented ranch  10 <br>  
    <strong> Crispy Catfish, </strong> Superior Farms catfish, smoked uni tartar, nori, kimchi collards  13 <br> 
    <strong> Grilled Shrimp,</strong> white beans, ham shank, arugula, horseradish  16 <br>  
    <strong> Tuna Tartare, </strong> butternut squash, pumpkin seed, garlic cream, crispy cornbread  18 <br>  
    <strong> Beef Tartare,</strong> crispy oysters, pickled blueberry, cornmeal pancakes, celery root remoulade  19`; 
    menuP2.innerHTML = `
    <span class = "sectionTitle"><em> Something More <em></span> <br>
    <strong>Fried Chicken,</strong> buttermilk, kale, green apple, spicy honey    21 <br> 
    <strong>Duroc Pork Shoulder,</strong> potlikker pinto beans, mustard greens, jalapeno-kale emulsion    27 <br> 
    <strong>Red Grouper,</strong> Carolina gold rice grits, local beans, sweet corn & red pepper chow chow, benne seed furikake    32 <br> 
    <strong>‘Blackened’ Red Snapper,</strong> rock shrimp, bone marrow, toasted farro, butternut squash, hot & sour nage    32 <br> 
    <strong> Duck Breast,</strong> duck and preserved cabbage ragout, smoked seaweeds, apple jus    28 <br> 
    <strong> Lobster & Crawfish Pot Pie,</strong> Maine Lobster, Louisiana crawfish,  mushrooms, sweet corn béchamel    30 <br> 
    <strong> Heritage Pork Chop, </strong> smoked & grilled, braised collards, bacon jam, Fixe barrel-aged old fashion sauce    45 <br> 
    <strong> Dry Aged Ribeye,</strong> USDA Prime, cornbread & gouda fondue   48 <br> 
    <strong> 32 oz USDA Prime Porterhouse,</strong> smokey bleu cheese butter, caramelized onion jus    90 <br> 
    `
    if (document.body.contains(story)) {
        story.remove(); 
        /*happyHourDiv.remove();
        specialEventsDiv.remove(); */ 
    }
    else if (document.body.contains(reservationsDiv)) {
        reservationsDiv.remove(); 
    } 

  
};

export default renderMenu

// potentially write a function that checks if reservations page div exists.. if so remove it else return 
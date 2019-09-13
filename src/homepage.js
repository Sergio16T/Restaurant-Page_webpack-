function buildHomePage(){  
    let storyExists = document.querySelector('.story'); 
    if (document.body.contains(storyExists)) return;
    let links = document.querySelectorAll('.nav-li');
    if(document.querySelector('.nav-li').classList.contains('li-dropdown')){
        links.forEach(link => link.classList.remove('li-dropdown'));
    } 
    let menuDiv = document.querySelector('.menu-Div'); 
    let story = document.createElement('div');
    story.className ='story'; 
    let para1 = document.createElement('p');
    let para2 = document.createElement('p');
    let parentDiv = document.querySelector('body');
    let happyHour = document.querySelector('.happy-hour'); 
    let reservationsDiv = document.querySelector('.reservations-div'); 
    //parentDiv.insertBefore(story, happyHour);
    parentDiv.appendChild(story); 
    story.appendChild(para1);
    story.appendChild(para2); 
    para1.innerHTML = `OUR STORY <br> 
    Open the doors to Fixe any night of the week, and prepare to be transplanted. 
    Your experience will take you back to that feeling of your most memorable 
    Sunday supper, as your favorite Southern classics are elevated with new and 
    exciting flavors created by Chef James Robert. The Louisiana native spent his
    childhood cooking in the kitchen with his mother and grandmother, and every 
    part of Fixe is an ode to Chef’s Southern heritage. Our refined interpretation 
    of family dinner may sound familiar with biscuits and fried chicken on the menu,
    but each dish has been infused with surprising flavors that are prepared in Chef’s
     modern style.`; 
     para1.id = 'story1';
     para2.innerHTML = ` After working together for 13 years, Fixe’s Co-owner, Keith House, and Chef Robert started thinking about opening a
     restaurant of their own. The concept for what Fixe would be, began with Chef Robert writing down his favorite ingredients and that list became the foundation for everything we do. Our name is inspired by that feeling we aim to evoke in every part of the restaurant—you will crave the food and warm, welcoming experience so much that you have to go back to get your fixe (with the addition of an e for our Cajun roots, of course).
     The open kitchen will give diners a front row seat to all the action, as Chef Robert and his team create dishes you will never forget. Grab a barrel aged cocktail, have a seat in one of our intimate private dining rooms, or right at the chef’s table, and stay awhile. We can’t wait to have you!`; 
     para2.id ='story2';
     if (document.body.contains(reservationsDiv)) {
        reservationsDiv.remove(); 
    } 
    else if (document.body.contains(menuDiv)) {
     menuDiv.remove();
    }
     
}
export default buildHomePage
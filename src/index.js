import renderMenu from './menu'
import renderReservations from './reservations'

var header = document.querySelector('header'); 
const menuBar = document.getElementById('menu'); 
const fixeLogo = document.getElementById('fixe-logo');
const hamburger = document.getElementById('hamburger');
const links = document.querySelectorAll('li');
const reservationsBar = document.getElementById('reservations'); 
const slideContainer = document.querySelector('.slide-container');
const slideArrows = document.querySelectorAll('.slide-arrow');
const arrowPrevious =document.getElementById('previous'); 
const arrowNext = document.getElementById('next'); 

const toggleLinkDropdown = () => {
    links.forEach(link => link.classList.toggle('li-dropdown')); 
}; 

hamburger.addEventListener('click', function(e) {
    toggleLinkDropdown(); 
});
links.forEach(link => link.addEventListener('click', function(e){
    toggleLinkDropdown(); 
}));

window.addEventListener('scroll', function(e) {
    if (window.scrollY >= 355) {
        header.style.backgroundColor = 'black';
       
    } else {
        header.style.backgroundColor ='transparent'
    }
});
slideContainer.addEventListener('mouseover', function(){
    slideArrows.forEach(arrow => arrow.style.display = "block");
});
slideContainer.addEventListener('mouseout', function() {
    slideArrows.forEach(arrow => arrow.style.display ="none");
}); 


// below working on creating javascript for slider to move through images. 
let slideIndex = 1;
let slideImages = document.querySelectorAll('.slide-image'); // nodeList of images for slider 
console.log(slideImages); 
arrowNext.addEventListener('click', advanceSlide); 
arrowPrevious.addEventListener('click', previousSlide); 

function previousSlide() {
    slideIndex -= 1; 
    if (slideIndex < 1) {slideIndex = slideImages.length}; 
    for (let i =0; i<slideImages.length; i++) {
        slideImages[i].style.opacity = "0"; 
        //slideImages[i].style.visibility ="hidden";

    } 
    slideImages[slideIndex-1].style.opacity ="1"; 
    slideImages[slideIndex-1].style.transition ="opacity .8s ease-in-out"; 
    slideImages[slideIndex-1].style.visibility ="visible";
 
}

function advanceSlide(){ 
    slideIndex += 1; 
    if (slideIndex > slideImages.length) {slideIndex = 1};
    for (let i =0; i<slideImages.length; i++) {
        //slideImages[i].style.visibility ="hidden"; 
        slideImages[i].style.opacity = "0"; 
    }
    slideImages[slideIndex-1].style.visibility ="visible"; 
    slideImages[slideIndex-1].style.transition ="opacity .8s ease-in-out"; 
    slideImages[slideIndex-1].style.opacity ="1"; 

}
/*window.setInterval(advanceSlide, 6000); 
 bug first slide doesn't have fade In transition.
also timer doesn't reset when I click buttons so ends up being really poorly timed. 
*/ 

function buildHomePage(){    
    let storyExists = document.querySelector('.story'); 
    if (document.body.contains(storyExists)) return; 
    let menuDiv = document.querySelector('.menu-Div'); 
    let story = document.createElement('div');
    story.className ='story'; 
    let para1 = document.createElement('p');
    let para2 = document.createElement('p');
    let parentDiv = document.querySelector('body');
    let happyHour = document.querySelector('.happy-hour'); 
    let reservationsDiv = document.querySelector('.reservations-div'); 
    parentDiv.insertBefore(story, happyHour); 
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
menuBar.addEventListener('click', renderMenu);
fixeLogo.addEventListener('click', buildHomePage);  
reservationsBar.addEventListener('click', renderReservations); 

/*  TO DO LIST 
--I like having the happy hour at the top after first image
then we're going to put a special events div with form input for email 
then my personal story intro with button to another page to read full story 

- also add photo gallery that changes at set interval for background images at top
-IMPORTANT make full index page to be replaced by menu on click. currently added happy
hour and email submit in default html that needs to be rebuilt and included above on click. 
*/ 

/*figure out a way to BOTH 1)  check if toggle is true/on? if so then toggle off AND  
2) if toggle is not on/false leave it false. 
*/ 

// could probably just reload window on buildhomepage function instead of all this DOM manipulation. 

/* create a module containing reservation page with function that clears page of contents 
whether it's on home page or menu page or special events page then import that function 
into index.js with an event listener. Play with logic of if __ exists then remove it; 
else if __ exists  remove __; else remove ___; with the function that builds.. 
*/ 
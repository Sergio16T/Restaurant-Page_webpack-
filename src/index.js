import renderMenu from './menu'
import renderReservations from './reservations'
import buildHomePage from './homepage'

var header = document.querySelector('header'); 
const menuBar = document.getElementById('menu'); 
const fixeLogo = document.getElementById('fixe-logo');
const hamburger = document.getElementById('hamburger');
const links = document.querySelectorAll('.nav-li');
const mobileDD = document.querySelector('.mobile-dd'); 
const reservationsBar = document.getElementById('reservations'); 
const slideContainer = document.querySelector('.slide-container');
const slideArrows = document.querySelectorAll('.slide-arrow');
const arrowPrevious =document.getElementById('previous'); 
const arrowNext = document.getElementById('next'); 
const toggleLinkDropdown = () => {
    links.forEach(link => link.classList.toggle('li-dropdown'));
    
};
let slideIndex = 1;
let slideImages = document.querySelectorAll('.slide-image'); // nodeList of images for slider 
let interval =  window.setInterval(advanceSlide, 7000);
let counter = 0; 
buildHomePage(); 
addHamburgerEvents();
setImage();

window.onresize = addHamburgerEvents; 


function addHamburgerEvents() {
    let width = window.innerWidth; 
    if(width > 720) {
        return; 
    }
    if (width <= 720) {
        counter +=1; 
    } 
    if(counter == 1) {
        hamburger.addEventListener('click', function(e) { 
            toggleLinkDropdown(); 
        });
        
        links.forEach(link => link.addEventListener('click', function(e){
            toggleLinkDropdown();

        }));  
    }

}



window.addEventListener('scroll', function(e) {
    if (window.scrollY >= ((this.innerHeight * .7) -110)) {
        header.classList.add('backgroundChange'); 
       
    } else {
        header.classList.remove('backgroundChange'); 
    }
});

slideContainer.addEventListener('mouseover', function(){
     if(document.querySelector('.nav-li').classList.contains('li-dropdown')){
        return; 
    } 
    
    if (window.innerWidth > 350) {
    slideArrows.forEach(arrow => arrow.style.display = "block");
    }  

});

slideContainer.addEventListener('mouseout', function() {
    if (window.innerWidth >350) {
    slideArrows.forEach(arrow => arrow.style.display ="none");
    }
});
 
arrowNext.addEventListener('click', advanceSlide); 
arrowPrevious.addEventListener('click', previousSlide);
menuBar.addEventListener('click', renderMenu);
fixeLogo.addEventListener('click', buildHomePage);  
reservationsBar.addEventListener('click', renderReservations); 

function setImage() {
    for (let i =0; i<slideImages.length; i++) {
        slideImages[i].style.opacity = "0";
    }
    slideImages[slideIndex-1].style.visibility ="visible"; 
    slideImages[slideIndex-1].style.transition ="opacity 1s ease-in-out"; 
    slideImages[slideIndex-1].style.opacity ="1"; 
}

function previousSlide() {
    clearInterval(interval);
    interval = window.setInterval(advanceSlide, 8000);
    slideIndex -= 1; 
    if (slideIndex < 1) {slideIndex = slideImages.length}; 
    setImage(); 
 
}

function advanceSlide(){ 
    clearInterval(interval);
    interval = window.setInterval(advanceSlide, 8000);
    slideIndex += 1; 
    if (slideIndex > slideImages.length) {slideIndex = 1};
    setImage(); 
   
}




/*  TO DO LIST 
--I like having the happy hour at the top after first image
then we're going to put a special events div with form input for email 
then my personal story intro with button to another page to read full story 


-IMPORTANT make full index page to be replaced by menu on click. currently added happy
hour and email submit in default html that needs to be rebuilt and included above on click. 
*/ 

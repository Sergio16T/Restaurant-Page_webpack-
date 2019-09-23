const renderPrivateDining = function renderPrivateDining() { 
    let links = document.querySelectorAll('.nav-li');
    if(document.querySelector('.nav-li').classList.contains('li-dropdown')){
        links.forEach(link => link.classList.remove('li-dropdown'));
    }
    let privateDiningExists = document.querySelector('.private-dining'); 
    if (document.body.contains(privateDiningExists)) return;
    let diningDiv = document.createElement('div'); 
    diningDiv.className ='private-dining'; 
    let span = document.createElement('span');
    let diningP1= document.createElement('p');
    /* virtual tour doesn't upload to github.. providing alternate image for project for now. */
    let virtualTourDiv = document.createElement('div');
    virtualTourDiv.className ="tour-container"; 
    let virtualTourIframe = document.createElement('iframe');
    virtualTourIframe.id ="virtual-tour"; 
    virtualTourIframe.src ='https://www.google.com/maps/embed?pb=!4v1569030738684!6m8!1m7!1sCAoSLEFGMVFpcFBZMmV2QjYzOC1NNmtVWGNoYTA4OEwxY0wtMzZWN2pHNzgtV3ZP!2m2!1d30.26882804297229!2d-97.74838387582128!3f31.6!4f0.030000000000001137!5f0.5109000828902961" width="600" height="450" frameborder="0" style="border:0;"allowfullscreen=""'; 
    let imageDiv = document.createElement('div'); 
    imageDiv.className ='image-div'; 
    let photo = document.createElement('img'); 
    photo.src = 'images/smallboardroom.png';
    photo.id = 'small-boardroom'; 
    let borderDiv = document.createElement('div');
    borderDiv.className = 'border-div';
    let diningp2 = document.createElement('p'); 
    let parentDiv = document.querySelector('body');
    let reservationsDiv = document.querySelector('.reservations-div'); 
    let story= document.querySelector('.story');
    let menuExists = document.querySelector('.menu-Div');
    parentDiv.appendChild(diningDiv); 
    diningDiv.appendChild(span);
    diningDiv.appendChild(diningP1); 
    
    diningDiv.appendChild(virtualTourDiv);
    virtualTourDiv.appendChild(virtualTourIframe); 
     
    diningDiv.appendChild(borderDiv);
    diningDiv.appendChild(diningp2); 
    diningDiv.appendChild(imageDiv);
    imageDiv.appendChild(photo);
    span.className ='private-dining-header'; 
    span.textContent = 'PRIVATE DINING'; 
    diningP1.className = 'private-dining-content';
    diningP1.innerHTML = `
    At Fixe, the options for creating the perfect private dining <br>
    experience for your company or group are endless. Ask about our set menus,<br> 
     or buy out the whole restaurant.`;
     diningp2.className = 'private-dining-content'; 
     diningp2.innerHTML = `
     For more information, contact events@austinfixe.com or call <br> 
      512.888.9133.`; 
     if (document.body.contains(story)) {
        story.remove(); 
        /*happyHourDiv.remove();
        specialEventsDiv.remove(); */ 
    }
    else if (document.body.contains(reservationsDiv)) {
        reservationsDiv.remove(); 
    }
    else if(document.body.contains(menuExists)){
        menuExists.remove(); 
    }

} 
export default renderPrivateDining
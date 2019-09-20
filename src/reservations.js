const renderReservations = function renderReservationsPage() {
    let links = document.querySelectorAll('.nav-li');
    if(document.querySelector('.nav-li').classList.contains('li-dropdown')){
        links.forEach(link => link.classList.remove('li-dropdown'));
    }
    let reservationDivExists = document.querySelector('.reservations-div'); 
    if (document.body.contains(reservationDivExists)) return; 
    let reservationsDiv = document.createElement('div'); 
    reservationsDiv.className = 'reservations-div'; 
    let cityName = document.createElement('span'); 
    cityName.id = 'city-name';
    cityName.textContent = 'Austin'; 
    let formContainerDiv = document.createElement('div');
    formContainerDiv.className = 'form-container'; 
    let reservationForm = document.createElement('form');
    reservationForm.className = 'form-wrapper'; 
    let inputDate = document.createElement('input');
    inputDate.setAttribute('type', 'date'); 
    inputDate.id ="input-date";
    let dateLabel = document.createElement('label'); 
    dateLabel.innerHTML = `<label for = "input-date"> Date </label>`; 

    let inputTime = document.createElement('input'); 
    inputTime.setAttribute('type', 'time'); 
    inputTime.setAttribute('value', '12:00');
    inputTime.id = "input-time"; 
    let timeLabel = document.createElement('label'); 
    timeLabel.innerHTML = `<label for ="input-time"> Time </label>`; 
    // want to create a dropdown list with JS using loop 
    let selectPartySize = document.createElement('SELECT');
    selectPartySize.id = "select-party-size"; 
    let labelParty = document.createElement('label'); 
    labelParty.innerHTML = `<label for ="select-party-size"> Party Size </label>`; 
    /*
    let option1 = document.createElement('option');
    option1.className = 'options'; 
    option1.innerHTML = `<option value ='1'>1 </option> `;
    let option2 = document.createElement('option'); 
    option2.className = 'options'; 
    option2.innerHTML = `<option value ='2'> 2 </option> `;
    */ 
    let submitButton =document.createElement('button'); 
    submitButton.className= 'submit-reservation-button'; 
    submitButton.setAttribute("type","button"); 
    submitButton.textContent = "Find A Table";
     
    var options = [];
    for (let i = 1; i <= 12; i++){
        let opt = document.createElement('option'); 
        opt.className = 'options'; 
        opt.innerHTML = `<option value ='${i}'> ${i} </option> `;
        options.push(opt);
    }

    let body = document.querySelector('body'); 
    body.appendChild(reservationsDiv); 
    reservationsDiv.appendChild(cityName); 
    reservationsDiv.appendChild(formContainerDiv); 
    formContainerDiv.appendChild(reservationForm); 
    reservationForm.appendChild(dateLabel); 
    reservationForm.appendChild(inputDate);
    reservationForm.appendChild(timeLabel); 
    reservationForm.appendChild(inputTime);
    reservationForm.appendChild(labelParty); 
    reservationForm.appendChild(selectPartySize);

    for(let i =0; i< options.length; i++){
        selectPartySize.appendChild(options[i]); 
    }
    // ^ 
    //selectPartySize.appendChild(option1); 
    //selectPartySize.appendChild(option2); 
    reservationForm.appendChild(submitButton); 

    let story= document.querySelector('.story');
    let happyHourDiv = document.querySelector('.hhflex-wrapper'); 
    let specialEventsDiv = document.querySelector('.special-events-email'); 
    let menuExists = document.querySelector('.menu-Div'); 
    let privateDining = document.querySelector('.private-dining');

    if (document.body.contains(story)) {
        story.remove(); 
       /* happyHourDiv.remove();
        specialEventsDiv.remove(); */ 
    }
    else if (document.body.contains(menuExists)) {
        menuExists.remove(); 
    } 
    else if(document.body.contains(privateDining)){
        privateDining.remove(); 
    }

}; 
export default renderReservations
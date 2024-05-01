document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM content loaded');
    
    // Get all ADOPT buttons
    var adoptButtons = document.querySelectorAll('.pet_button');

    // Add event listener to each ADOPT button
    adoptButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            adopt(this);
        });
    });

    // Function to adopt a pet
    function adopt(button){
        var card = button.parentElement;
        
        var petName = card.querySelector('.pet_name').textContent;
        var petType = card.querySelector('.pet_type').textContent;
        var breed = card.querySelector('.pet_breed').textContent;
        var gender = card.querySelector('.pet_gender').textContent;
        var color = card.querySelector('.pet_color').textContent;
        var age = card.querySelector('.pet_age').textContent;
        var petPic = card.querySelector('.pet_pic').src;

        localStorage.setItem('petName', petName);
        localStorage.setItem('petType', petType);
        localStorage.setItem('breed', breed);
        localStorage.setItem('gender', gender);
        localStorage.setItem('color', color);
        localStorage.setItem('age', age);
        localStorage.setItem('petPic', petPic);

        window.location.href = './adoptform.html'; // Ensure correct path to the adoption form page
    }   
    
    // Function to confirm reservation
    function confirmReservation(button){
        var card = button.parentElement.parentElement;
        
        var firstName = card.querySelector('#firstName').value;
        var lastName = card.querySelector('#lastName').value;
        var email = card.querySelector('#user_email').value;
        var adoptionDate = card.querySelector('#dates').value;
        var contactNumber = card.querySelector('#num').value;

        localStorage.setItem('firstName', firstName);
        localStorage.setItem('lastName', lastName);
        localStorage.setItem('email', email);
        localStorage.setItem('adoptionDate', adoptionDate);
        localStorage.setItem('contactNumber', contactNumber);

        // Redirect to confirmation page
        window.location.href = 'checkout.html';
    }  

    // Function to display adoption information
    function displayAdopt(){
        var petName = localStorage.getItem('petName');
        var petType = localStorage.getItem('petType');
        var breed = localStorage.getItem('breed');
        var gender = localStorage.getItem('gender');
        var color = localStorage.getItem('color');
        var age = localStorage.getItem('age');
        var petPic = localStorage.getItem('petPic');

        var adoptInfo = document.getElementById('adopt_info');
        adoptInfo.innerHTML =  `
            <div class="adopt_infos">
                <div class="adopt_photo_holder">
                    <img class="adopt_car" src="${petPic}" alt="${petName}">
                </div>
                <div class="adopt_know">
                    <h3 class="adopt_name">${petName}</h3>
                    <p class="petType"><strong></strong> ${petType}</p>
                    <p class="adopt_price"><strong></strong> ${breed}</p>
                    <p class="adopt_seat"><strong> ${gender}</p>
                    <p class="adopt_bag"><strong> ${color}</p>
                    <p class="adopt_trans"> ${age}</p>
                </div>    
            </div>
        `;
    }

    // Check if on adoption page and display adoption information
    if (window.location.href.includes('adoptform.html')) {
        displayAdopt();
    }

    // Check if on confirmation page and display confirmation information
    if (window.location.href.includes('checkout.html')) {
        displayConfirmation();
    }

    // Function to display confirmation information
    function displayConfirmation(){
        var firstName = localStorage.getItem('firstName');
        var lastName = localStorage.getItem('lastName');
        var email = localStorage.getItem('email');
        var adoptionDate = localStorage.getItem('adoptionDate');
        var contactNumber = localStorage.getItem('contactNumber');
        
        var confirmCardInfo = document.getElementById('confirm_card_infos');
        confirmCardInfo.innerHTML =  `
            <div class="confirm_card_info">
                <p><strong>First Name :</strong> ${firstName}</p>
                <p><strong>Last Name :</strong> ${lastName}</p>
                <p><strong>Email :</strong> ${email}</p>
                <p><strong>Adoption date :</strong> ${adoptionDate}</p>
                <p><strong>Contact Number :</strong> ${contactNumber}</p>
            </div>
        `;
    }
    document.addEventListener("DOMContentLoaded", function() {
        const openPopupButtons = document.querySelectorAll(".openPopup");
        const closePopupButtons = document.querySelectorAll(".closePopup");
    
        openPopupButtons.forEach(button => {
            button.addEventListener("click", function() {
                const targetPopupId = button.dataset.target;
                const popup = document.getElementById(targetPopupId);
                popup.style.display = "block";
            });
        });
    
        closePopupButtons.forEach(button => {
            button.addEventListener("click", function() {
                const popup = button.closest(".popup");
                popup.style.display = "none";
            });
        });
    
       
        });
    
    // Pop-up functionality
    const openPopupButtons = document.querySelectorAll(".openPopup");
    const closePopupButtons = document.querySelectorAll(".closePopup");

    openPopupButtons.forEach(button => {
        button.addEventListener("click", function() {
            const targetPopupId = button.dataset.target;
            const popup = document.getElementById(targetPopupId);
            popup.style.display = "block";
        });
    });

    closePopupButtons.forEach(button => {
        button.addEventListener("click", function() {
            const popup = button.closest(".popup");
            popup.style.display = "none";
        });
    });

    // Close the popup when clicking outside of it
    document.addEventListener('click', function(event) {
        if (!event.target.classList.contains('openPopup') && !event.target.closest('.popup')) {
            var popups = document.querySelectorAll('.popup');
            popups.forEach(function(popup) {
                popup.classList.remove('show');
            });
        }
    });

});
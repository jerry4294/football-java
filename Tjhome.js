document.addEventListener("DOMContentLoaded", function () {
    // Get the submit button
    const submitButton = document.querySelector('input[type="submit"]');

    // Function to show alert on submit
    function showAlert() {
        alert("Player information submitted successfully!");
    }

    // Add click event listener for submit button
    submitButton.addEventListener("click", function (event) {
        event.preventDefault();
        showAlert();
    });

    // Get all navigation links
    const homeLink = document.getElementById("home-link");
    const teamLink = document.getElementById("team-link");
    const aboutLink = document.getElementById("about-link");
    const contactLink = document.getElementById("contact-link");

    // Function to show alert on hover
    function showHoverAlert(linkText) {
        alert(`Hovered over ${linkText}`);
    }

    // Add event listeners for hover effect
    homeLink.addEventListener("mouseover", function () {
        homeLink.style.color = "Black"; // Change the color to your preferred hover color
    });
    homeLink.addEventListener("mouseout", function () {
        homeLink.style.color = ""; // Reset the color on mouseout
    });


    teamLink.addEventListener("mouseover", function () {
        teamLink.style.color = "Black"; // Change the color to your preferred hover color
    });
    teamLink.addEventListener("mouseout", function () {
        teamLink.style.color = ""; // Reset the color on mouseout
    });


    aboutLink.addEventListener("mouseover", function () {
        aboutLink.style.color = "Black"; // Change the color to your preferred hover color
    });
    aboutLink.addEventListener("mouseout", function () {
        aboutLink.style.color = ""; // Reset the color on mouseout
    });


    contactLink.addEventListener("mouseover", function () {
        contactLink.style.color = "Black"; // Change the color to your preferred hover color
    });
    contactLink.addEventListener("mouseout", function () {
        contactLink.style.color = ""; // Reset the color on mouseout
    });

    // For Loop: Ordered List
    const numbersList = document.getElementById('numbers');
    for (let i = 1; i <= 100; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = i % 2 === 0 ? 'Even' : 'Odd';
        numbersList.appendChild(listItem);
    }
     // Footer with Current Year
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').innerText = currentYear;

});

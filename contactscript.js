// contactScript.js

// Footer Update
document.querySelector("footer p").innerText = "&copy; " + new Date().getFullYear() + " Club of Football Khalsa. All rights reserved.";

// Hover Button - Navigation
const navButtons = document.querySelectorAll('nav ul li a');
navButtons.forEach(button => {
    button.addEventListener('mouseover', function () {
        this.style.color = 'green'; // Change color on hover
    });

    button.addEventListener('mouseleave', function () {
        this.style.color = ''; // Revert to default color
    });
});

// Alert Button
document.getElementById("btn-alert").addEventListener("click", function () {
    alert("Hello from the Contact Us page!");
});

// Form Submission
document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Perform any necessary actions with the form data
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Message: " + message);

    // You can add additional logic here, such as sending the form data to a server
});

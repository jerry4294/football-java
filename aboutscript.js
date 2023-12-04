// aboutScript.js

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
    alert("Hello from the About Us page!");
});

// Incrementing Button
let count = 1;
document.getElementById("btn-counter").addEventListener("click", function () {
    count++;
    document.getElementById("txt-counter").innerHTML = "Number: " + count;

    // If-Else
    if (count % 2 === 0) {
        document.getElementById("txt-counter").classList.remove("odd");
        document.getElementById("txt-counter").classList.add("even");
    } else {
        document.getElementById("txt-counter").classList.remove("even");
        document.getElementById("txt-counter").classList.add("odd");
    }
});

// For Loop - Example (you can modify this based on your needs)
const loopList = document.getElementById("loopList");
for (let i = 1; i <= 5; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = `Item ${i}`;
    loopList.appendChild(listItem);
}

// If-Else Loop - Example (you can modify this based on your needs)
const condition = true; // Change this condition as needed
if (condition) {
    console.log("Condition is true");
} else {
    console.log("Condition is false");
}

// Other JavaScript functionalities can be added as needed

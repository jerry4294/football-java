document.addEventListener("DOMContentLoaded", function () {
    // Get all navigation links
    const homeLink = document.getElementById("home-link");
    const teamLink = document.getElementById("team-link");
    const aboutLink = document.getElementById("about-link");
    const contactLink = document.getElementById("contact-link");

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

    // Incrementing Button
    let count = 1;
    document.getElementById('btn-counter').onclick = () => {
        count = count + 1;
        document.getElementById('txt-counter').innerHTML = 'Number: ' + count;

        // if-else
        const evenOddContainer = document.getElementById('even-odd-container');
        const evenOddText = document.getElementById('even-odd-text');

        if (count % 2 === 0) {
            evenOddContainer.classList.add('even');
            evenOddContainer.classList.remove('odd');
            evenOddText.innerHTML = 'Even';
        } else {
            evenOddContainer.classList.add('odd');
            evenOddContainer.classList.remove('even');
            evenOddText.innerHTML = 'Odd';
        }
    };
    
    // Footer with Current Year
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').innerText = currentYear;

});

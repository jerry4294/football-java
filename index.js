// index.js

// Footer Update
document.getElementById("currentYear").innerText = new Date().getFullYear();

// Alert Button
document.getElementById("btn-alert").onclick = function () {
    alert("Hello world!");
};

// Incrementing Button
let count = 1;
document.getElementById("btn-counter").onclick = function () {
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
};

// For Loop
const numbersList = document.getElementById("numbers");
for (let i = 1; i <= 100; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = i % 2 === 0 ? "even" : "odd";
    numbersList.appendChild(listItem);
}

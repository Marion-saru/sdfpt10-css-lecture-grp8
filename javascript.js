// 1. querySelector - select the first h1 and change its text and color
document.querySelector("h1").textContent="Welcome to the Javascript DOM !";
document.querySelector("h1").style.color="red";

// 2. querySelectorAll - select all the li and give the text color red
document.querySelectorAll("li"). forEach(item => {item.style.color = "red"; });

// 3. getElementsByTagName - select the th and increase their font size
let tableHeader = document.getElementsByTagName("th");
for (let th of tableHeader) {
    th.style.fontSize = "90px";
}

// 4. getElementsByClassName - select the element with the class of image-container/ change the backgroundColor
document.getElementsByClassName("image-container")[0].style.backgroundColor ="red";

// 5. getElementById - select the course outcomes and change the BG color
document.getElementById("course-outcomes").style.backgroundColor= "gray";

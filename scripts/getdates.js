// select the DOm element for output
const currentyear =document.querySelector("#currentyear");
// use the year object
const year = new Date();
currentyear.innerHTML = `${year.getFullYear()} 🎱 `;
document.getElementById("lastModified").innerHTML = `Last Modification ${document.lastModified}`;
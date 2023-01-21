
// document.write(new Date().getFullYear())
const d = new Date();
let year = d.getFullYear();
document.getElementById("newDate").innerHTML = year;


const date = new Date(document.lastModified);
document.getElementById("lastModified").innerHTML = date; 